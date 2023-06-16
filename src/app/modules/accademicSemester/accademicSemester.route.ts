import { Router } from 'express';
import { validateRequest } from '../../../middleware/validateRequest';
import { semesterValidation } from './accademicSemester.validation';
import {
  createAccademicSemester,
  getSemester,
} from './accademicSemester.controller';

const router = Router();

router.post(
  '/create-semester',
  validateRequest(semesterValidation.createAccademicSemesterZodSchema),
  createAccademicSemester
);
router.get('/semester', getSemester);

export const SemesterRoute = router;
