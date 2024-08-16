import StatusCodeEnum from '../../utils/enums/StatusCodeEnum';
import * as IUserService from '../../services/user/IUserService';
import SendResponse from '../../utils/common/response';
import UserEnum, { ProductEnum } from '../../utils/enums/MessageEnum';
import { Response } from '../../utils/interfaces/common';
import { IError } from '../../utils/interfaces/common';
import bcrypt from 'bcrypt';
import HelperFunction from '../../utils/common/helper';
const helperFun = new HelperFunction();
import { LoggerEnum } from '../../utils/enums/DefaultEnums';
import ProductStore from './product.store';
import IProduct, {
  ICreateProductRequest,
  IProductSuccess,
} from './IProductService';

export default class ProductService {
  private productStore = new ProductStore();
  constructor() {}

  /**
   *@description Function to get user profile data
   * @param request
   * @param response
   * @returns
   */
  public createProduct = async (
    request: any,
    response: Response,
  ): Promise<Response> => {
    let data: IError | IProductSuccess<any>;
    try {
      const attributes = request?.body;
      const product: IProduct = await this.productStore.createProduct(
        attributes,
      );
      if (!product) {
        data = {
          statusCode: StatusCodeEnum.BAD_REQUEST,
          message: ProductEnum.PRODUCT_CREATE_FAILED,
        };
        return SendResponse(response, data, StatusCodeEnum.BAD_REQUEST);
      }
      data = {
        statusCode: StatusCodeEnum.OK,
        message: ProductEnum.PRODUCT_SAVE_SUCCESS,
        data: product,
      };
      //logging information
      helperFun.log({
        message: data.message,
        location: await helperFun.removeSubstring(__dirname, __filename),
        level: LoggerEnum.INFO,
        error: '',
      });
      return SendResponse(response, data, StatusCodeEnum.OK);
    } catch (e) {
      data = {
        statusCode: StatusCodeEnum.INTERNAL_SERVER_ERROR,
        message: e.message,
        error: e,
      };
      //logging error
      helperFun.log({
        message: e.message,
        location: await helperFun.removeSubstring(__dirname, __filename),
        level: LoggerEnum.ERROR,
        error: e,
      });
      return SendResponse(response, data, StatusCodeEnum.INTERNAL_SERVER_ERROR);
    }
  };
  /**
   * @description Function to create plan of product
   * @param request
   * @param response
   * @returns
   */
  public createPlan = async (
    request: any,
    response: Response,
  ): Promise<Response> => {
    let data: IError | IProductSuccess<any>;
    try {
      const attributes = request?.body;
      attributes.product = process.env.PRODUCT_ID;
      const plan: any = await this.productStore.createPlan(attributes);
      if (!plan) {
        data = {
          statusCode: StatusCodeEnum.BAD_REQUEST,
          message: ProductEnum.PRODUCT_CREATE_FAILED,
        };
        return SendResponse(response, data, StatusCodeEnum.BAD_REQUEST);
      }
      data = {
        statusCode: StatusCodeEnum.OK,
        message: ProductEnum.PLAN_CREATED_SUCCESSFULLY,
        data: plan,
      };
      //logging information
      helperFun.log({
        message: data.message,
        location: await helperFun.removeSubstring(__dirname, __filename),
        level: LoggerEnum.INFO,
        error: '',
      });
      return SendResponse(response, data, StatusCodeEnum.OK);
    } catch (e) {
      data = {
        statusCode: StatusCodeEnum.INTERNAL_SERVER_ERROR,
        message: e.message,
        error: e,
      };
      //logging error
      helperFun.log({
        message: e.message,
        location: await helperFun.removeSubstring(__dirname, __filename),
        level: LoggerEnum.ERROR,
        error: e,
      });
      return SendResponse(response, data, StatusCodeEnum.INTERNAL_SERVER_ERROR);
    }
  };
  /**
   * @description Function to create customers on stripe
   * @param request
   * @param response
   * @returns
   */
  public createCustomers = async (
    request: any,
    response: Response,
  ): Promise<Response> => {
    let data: IError | IProductSuccess<any>;
    try {
      const attributes = request?.body;
      const customer = await this.productStore.createCustomer(attributes);
      if (!customer) {
        data = {
          statusCode: StatusCodeEnum.BAD_REQUEST,
          message: ProductEnum.CUSTOMER_NOT_CREATED,
        };
        return SendResponse(response, data, StatusCodeEnum.BAD_REQUEST);
      }
      data = {
        statusCode: StatusCodeEnum.OK,
        message: ProductEnum.CUSTOMER_CREATED_SUCCESSFULLY,
        data: customer,
      };
      //logging information
      helperFun.log({
        message: data.message,
        location: await helperFun.removeSubstring(__dirname, __filename),
        level: LoggerEnum.INFO,
        error: '',
      });
      return SendResponse(response, data, StatusCodeEnum.OK);
    } catch (e) {
      data = {
        statusCode: StatusCodeEnum.INTERNAL_SERVER_ERROR,
        message: e.message,
        error: e,
      };
      //logging error
      helperFun.log({
        message: e.message,
        location: await helperFun.removeSubstring(__dirname, __filename),
        level: LoggerEnum.ERROR,
        error: e,
      });
      return SendResponse(response, data, StatusCodeEnum.INTERNAL_SERVER_ERROR);
    }
  };

  /**
   * @description Function to create payment method on stripe
   * @param request
   * @param response
   * @returns
   */
  public createPaymentMethod = async (
    request: any,
    response: Response,
  ): Promise<Response> => {
    let data: IError | IProductSuccess<any>;
    try {
      const attributes = request?.body;
      const payment = await this.productStore.createPaymentMethod(attributes);
      if (!payment) {
        data = {
          statusCode: StatusCodeEnum.BAD_REQUEST,
          message: ProductEnum.PAYMENT_METHOD_NOT_CREATED,
        };
        return SendResponse(response, data, StatusCodeEnum.BAD_REQUEST);
      }
      data = {
        statusCode: StatusCodeEnum.OK,
        message: ProductEnum.PAYMENT_METHOD_CREATED_SUCCESSFULLY,
        data: payment,
      };
      //logging information
      helperFun.log({
        message: data.message,
        location: await helperFun.removeSubstring(__dirname, __filename),
        level: LoggerEnum.INFO,
        error: '',
      });
      return SendResponse(response, data, StatusCodeEnum.OK);
    } catch (e) {
      data = {
        statusCode: StatusCodeEnum.INTERNAL_SERVER_ERROR,
        message: e.message,
        error: e,
      };
      //logging error
      helperFun.log({
        message: e.message,
        location: await helperFun.removeSubstring(__dirname, __filename),
        level: LoggerEnum.ERROR,
        error: e,
      });
      return SendResponse(response, data, StatusCodeEnum.INTERNAL_SERVER_ERROR);
    }
  };
}
