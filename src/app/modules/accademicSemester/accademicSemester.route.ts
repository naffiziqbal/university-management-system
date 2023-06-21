import { Router } from 'express';
import { validateRequest } from '../../../middleware/validateRequest';
import { semesterValidation } from './accademicSemester.validation';
import {
  createAccademicSemester,
  deleteSemester,
  getSemesters,
} from './accademicSemester.controller';

const router = Router();

router.post(
  '/create-semester',
  validateRequest(semesterValidation.createAccademicSemesterZodSchema),
  createAccademicSemester
);
router.get('/semesters', getSemesters);
router.delete('/semester-del', deleteSemester);

export const SemesterRoute = router;
