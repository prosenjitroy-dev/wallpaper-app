import z from "zod";

export const loginSchema = z.object({
  email: z.email("Invalid Email Address"),
  password: z.string().min(6, "Password Must Be 8 Charecters Long"),
  rememberMe: z.boolean(),
});

export const registerSchema = z
  .object({
    name: z.string().min(6, "Input A Valid Name"),
    email: z.email("Invalid Email Address"),
    password: z.string().min(8, "Password Must Be 8 Charecters Long"),
    confirmPassword: z
      .string()
      .min(8, "confirmPassword Password Must Be 8 Charecters Long"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    error: "Password Did't Match",
  });
