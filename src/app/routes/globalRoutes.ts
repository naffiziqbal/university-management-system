import { Router } from 'express';
import { UserRoute } from '../modules/user/user.router';
import { SemesterRoute } from '../modules/accademicSemester/accademicSemester.route';

const globalRouter = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoute,
  },
  {
    path: '/accademic-semester',
    route: SemesterRoute,
  },
];

moduleRoutes.forEach(route => globalRouter.use(route.path, route.route));

// globalRouter.use('/users', UserRoute);
// globalRouter.use('/accademic-semester', SemesterRoute);
export default globalRouter;
