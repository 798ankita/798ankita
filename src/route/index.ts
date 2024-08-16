import { Application } from 'express';
import UserRoutes from './user.routes';
import { API_VERSION } from '../utils/enums/DefaultEnums';
import ProductsRoutes from './product.routes';

export default class Routes {
  constructor(app: Application) {
    app.use(API_VERSION.VERSION + '/user', UserRoutes);
    app.use(API_VERSION.VERSION + '/product', ProductsRoutes);
  }
}
