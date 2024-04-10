import * as z from "zod";

// ============================================================
// USER
// ============================================================
export const SignupValidation = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  username: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Ingresa un correo electronico valido." }),
  password: z.string().min(8, { message: "La contraseña debe tener al menos 8 caracteres." }),
});

export const SigninValidation = z.object({
  email: z.string().email( { message: "Ingresa un correo electronico valido." }),
  password: z.string().min(8, { message: "La contraseña debe tener al menos 8 caracteres." }),
});

export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  username: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Ingresa un correo electronico valido." }),
  bio: z.string(),
});

// ============================================================
// POST
// ============================================================
export const PostValidation = z.object({
  caption: z.string().min(5, { message: "Minimo 5 caracteres." }).max(2200, { message: "Maximo 2,200 caracteres" }),
  file: z.custom<File[]>(),
  location: z.string().min(1, { message: "Este campo es obligatorio." }).max(1000, { message: "Maximo 1000 characteres." }),
  tags: z.string(),
});
