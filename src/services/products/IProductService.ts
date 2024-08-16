import { Request } from 'express';
import IUser from '../user/IUserService';

export default interface IProduct {
  id: number;
  name: string;
}

export interface ICreateProductRequest extends Request {
  user: IUser;
  name: string;
}

export interface IProductSuccess<T> extends ISuccess {
  data: T;
}

export interface ISuccess {
  message: string;
  statusCode: number;
}
