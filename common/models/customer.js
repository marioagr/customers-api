import { z } from 'zod';

// Schema for Customer (full object)
export const CustomerSchema = z.object({
  id: z.number().int().positive(),
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  email: z.string().email(),
  gender: z.enum(['Male', 'Female']),
  image: z.string().url(),
});

// Schema for Customer input (without id)
export const CustomerInputSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  gender: z.enum(['Male', 'Female'], { errorMap: () => ({ message: "Please select a valid gender" }) }),
  image: z.string().url("Invalid URL"),
});