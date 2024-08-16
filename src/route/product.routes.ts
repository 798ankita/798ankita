import { Router } from 'express';
import ProductService from '../services/products/product.service';

class ProductsRoutes {
  router = Router();
  public product = new ProductService();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // Create product
    this.router.post('/create', this.product.createProduct);
    // Create plan
    this.router.post('/create-plan', this.product.createPlan);
    // Create customer
    this.router.post('/create-customer', this.product.createCustomers);
    // Create payment method
    this.router.post(
      '/create-payment-method',
      this.product.createPaymentMethod,
    );
  }
}

export default new ProductsRoutes().router;
