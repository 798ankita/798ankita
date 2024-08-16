import database from '../../config/db';
import { LoggerEnum } from '../../utils/enums/DefaultEnums';
const Products = database.products;
import HelperFunction from '../../utils/common/helper';
const helperFun = new HelperFunction();
import { Stripe } from 'stripe';
const stripe = new Stripe(String(process.env.STRIPE_SECRET_KEY));

export default class ProductStore {
  public static OPERATION_UNSUCCESSFUL = class extends Error {
    constructor() {
      super('An error occurred while processing the request.');
    }
  };

  /**
   * @description create product.
   * @param attributes
   * @returns
   */
  public async createProduct(attributes: any) {
    try {
      return await stripe.products.create(attributes);
    } catch (e) {
      //logging error
      helperFun.log({
        message: e.message,
        location: await helperFun.removeSubstring(__dirname, __filename),
        level: LoggerEnum.ERROR,
        error: e,
      });
      return e.message || e;
    }
  }

  /**
   * @description create plan.
   * @param attributes
   * @returns
   */
  public async createPlan(attributes: any) {
    try {
      return await stripe.plans.create(attributes);
    } catch (e) {
      //logging error
      helperFun.log({
        message: e.message,
        location: await helperFun.removeSubstring(__dirname, __filename),
        level: LoggerEnum.ERROR,
        error: e,
      });
      return e.message || e;
    }
  }
  /**
   * @description Function to create customer on stripe
   * @param attributes
   * @returns
   */
  public async createCustomer(attributes: any) {
    try {
      return await stripe.customers.create(attributes);
    } catch (e) {
      //logging error
      helperFun.log({
        message: e.message,
        location: await helperFun.removeSubstring(__dirname, __filename),
        level: LoggerEnum.ERROR,
        error: e,
      });
      return e.message || e;
    }
  }
  /**
   * @description Function to create payment methods on stripe.
   * @param attributes
   * @returns
   */
  public async createPaymentMethod(attributes: any) {
    try {
      return await stripe.paymentMethods.create(attributes);
    } catch (e) {
      //logging error
      helperFun.log({
        message: e.message,
        location: await helperFun.removeSubstring(__dirname, __filename),
        level: LoggerEnum.ERROR,
        error: e,
      });
      return e.message || e;
    }
  }
}
