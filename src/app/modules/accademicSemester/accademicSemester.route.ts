import { Router } from 'express';
import { validateRequest } from '../../../middleware/validateRequest';
import { semesterValidation } from './accademicSemester.validation';
import {
  createAccademicSemester,
  deleteSemester,
  getSemester,
} from './accademicSemester.controller';

const router = Router();

router.post(
  '/create-semester',
  validateRequest(semesterValidation.createAccademicSemesterZodSchema),
  createAccademicSemester
);
router.get('/semesters', getSemester);
router.delete('/semester-del', deleteSemester);

export const SemesterRoute = router;
