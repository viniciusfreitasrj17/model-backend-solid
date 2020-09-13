import { Router } from 'express';
import { createUserController } from './useCases/CreateUser';
import { listUsersController } from './useCases/ListUsers';

const routes = Router();

// routes User
routes.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});
routes.get('/users', (request, response) => {
  return listUsersController.handle(request, response);
});

export default routes;
