import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from "../../model/Product";
import {ProductService} from "../../services/product.service";
import {Subscription} from "rxjs";
import {Discount} from "../../model/Discount";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {

  products: Product[];
  selectedProducts: Product[];
  selectedProductsWithDiscounts: Product[];

  appliedDiscounts: { discount: Discount, productId: string }[];

  bruto: number;
  totalDiscount: number;
  amountToPay: number;

  subscriptions: Subscription[];

  constructor(private productService: ProductService) {
    this.products = [];
    this.selectedProducts = [];
    this.selectedProductsWithDiscounts = [];
    this.appliedDiscounts = [];
    this.bruto = 0;
    this.totalDiscount = 0;
    this.amountToPay = 0;
    this.subscriptions = [];
  }

  ngOnInit(): void {
    this.loadAvailableProducts();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(
      (subscription: Subscription) => {
        subscription.unsubscribe();
      });
  }

  private loadAvailableProducts(): void {
    this.subscriptions.push(
      this.productService.getProducts()
        .subscribe(
          (response: Product[]) => {
            this.products = response;
          })
    );
  }

  private update() {
    this.selectedProductsWithDiscounts = [...new Set(this.selectedProducts)];
    this.bruto = 0;
    this.totalDiscount = 0;
    this.amountToPay = 0;
    this.appliedDiscounts = [];
    this.selectedProducts.forEach(product => this.bruto += product.price);
    this.updateAppliedDiscounts();
    this.updateTotalDiscount();
    this.amountToPay = this.bruto - this.totalDiscount;
  }

  private updateAppliedDiscounts(): void {
    this.selectedProductsWithDiscounts.forEach(productsWithDiscount => {
      if (productsWithDiscount.discount) {
        this.selectedProducts
          .filter(product => product.discount === productsWithDiscount.discount)
          .forEach((product, index) => {
            if (product.discount && (index + 1) % product.discount.applyTo === 0) {
              this.appliedDiscounts.push({discount: product.discount, productId: product.id});
            }
          })
      }
    });
  }

  private updateTotalDiscount(): void {
    this.appliedDiscounts.forEach(appliedDiscount => {
      let price = this.products.filter(product => product.id === appliedDiscount.productId)[0].price;
      let applyTo = appliedDiscount.discount.applyTo;
      let amount = appliedDiscount.discount.amount;

      this.totalDiscount += (price * applyTo) - amount;
    });
  }

  selectProduct(product: Product): void {
    this.selectedProducts.push(product);
    this.update();
  }

  unSelectProduct(index: number): void {
    this.selectedProducts.splice(index, 1);
    this.update();
  }

}
