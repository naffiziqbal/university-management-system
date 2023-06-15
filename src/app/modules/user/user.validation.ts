import { z } from 'zod';

// Validate Request  By ZOD
export const createUserZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'role is required',
    }),
  }),
});
