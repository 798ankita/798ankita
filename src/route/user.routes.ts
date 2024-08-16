import { Router } from 'express';
import UserService from '../services/user/user.service';

class UserRoutes {
  router = Router();
  public user = new UserService();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // Get user profile
    this.router.get('/get/:id', this.user.get);
    // Get user profile
    this.router.post('/create', this.user.create);
  }
}

export default new UserRoutes().router;
