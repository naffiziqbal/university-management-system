import { z } from 'zod';
import {
  accademicSemesterCode,
  accademicSemesterMonths,
  accademicSemesterTitles,
} from './accademicSemester.constants';

const createAccademicSemesterZodSchema = z.object({
  body: z.object({
    //Spliting accademicSemesterTitle Enum into Two Parts one is array and Second one is array of String

    title: z.enum([...accademicSemesterTitles] as [string, ...string[]], {
      required_error: 'Title Required',
    }),
    year: z.number({
      required_error: 'Year Is Required',
    }),
    //Spliting accademicSemesterCode Enum into Two Parts one is array and Second one is array of String
    code: z.enum([...accademicSemesterCode] as [string, ...string[]], {
      required_error: 'Semester Code Required',
    }),
    //Spliting accademicSemesterMonths Enum into Two Parts one is array and Second one is array of String

    startMonth: z.enum([...accademicSemesterMonths] as [string, ...string[]], {
      required_error: 'Start Month Required',
    }),
    endMonth: z.enum([...accademicSemesterMonths] as [string, ...string[]], {
      required_error: 'End Month Required',
    }),
  }),
});

export const semesterValidation = { createAccademicSemesterZodSchema };
