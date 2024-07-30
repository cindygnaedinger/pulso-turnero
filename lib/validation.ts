import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "El nombre de usuario debe tener al menos 2 caracteres.")
    .max(50, "El nombre de usuario debe tener como máximo 50 caracteres."),
  email: z.string().email("La dirección de correo electrónico no es válida."),
  phone: z
    .string()
    .refine(
      (phone) => /^\+\d{10,15}$/.test(phone),
      "El número de celular no es válido"
    ),
});

export const PatientFormValidation = z.object({
  name: z
    .string()
    .min(2, "El nombre de usuario debe tener al menos 2 caracteres.")
    .max(50, "El nombre de usuario debe tener como máximo 50 caracteres."),
  email: z.string().email("La dirección de correo electrónico no es válida."),
  phone: z
    .string()
    .refine(
      (phone) => /^\+\d{10,15}$/.test(phone),
      "El número de celular no es válido"
    ),
  birthDate: z.coerce.date(),
  gender: z.enum(["Femenino", "Masculino", "Otro"]),
  address: z
    .string()
    .min(
      5,
      "La dirección de correo electrónico debe contener al menos 5 caracteres"
    )
    .max(
      500,
      "La dirección de correo electrónico debe contener como máximo 500 caracteres"
    ),
  occupation: z
    .string()
    .min(2, "La ocupación debe contener al menos 2 caracteres")
    .max(500, "La ocupación debe contener como máximo 500 caracteres"),
  emergencyContactName: z
    .string()
    .min(2, "El nombre del contacto debe contener al menos 2 caracteres")
    .max(50, "El nombre del contacto debe contener como máximo 50 caracteres"),
  emergencyContactNumber: z
    .string()
    .refine(
      (emergencyContactNumber) => /^\+\d{10,15}$/.test(emergencyContactNumber),
      "El número de celular no es válido"
    ),
  primaryPhysician: z.string().min(2, "Selecciona por lo menos 1 médica/o"),
  insuranceProvider: z
    .string()
    .min(2, "El nombre de la obra social debe contener al menos 2 caracteres")
    .max(
      50,
      "El nombre de la obra social debe contener como máximo 50 caracteres"
    ),
  insurancePolicyNumber: z
    .string()
    .min(2, "El número de la obra social debe contener al menos 2 caracteres")
    .max(
      50,
      "El número de la obra social debe contener como máximo 50 caracteres"
    ),
  allergies: z.string().optional(),
  currentMedication: z.string().optional(),
  familyMedicalHistory: z.string().optional(),
  pastMedicalHistory: z.string().optional(),
  identificationType: z.string().optional(),
  identificationNumber: z.string().optional(),
  identificationDocument: z.custom<File[]>().optional(),
  treatmentConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "Debes aceptar el tratamiento antes de proceder",
    }),
  disclosureConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "Debes aceptar la revelación de información antes de proceder",
    }),
  privacyConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "Debes aceptar la política de privacidad antes de proceder",
    }),
});

export const CreateAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Selecciona por lo menos 1 médica/o"),
  schedule: z.coerce.date(),
  reason: z
    .string()
    .min(2, "El motivo debe contener al menos 2 caracteres")
    .max(500, "El motivo debe contener como máximo 500 caracteres"),
  note: z.string().optional(),
  cancellationReason: z.string().optional(),
});

export const ScheduleAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Selecciona por lo menos 1 médica/o"),
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancellationReason: z.string().optional(),
});

export const CancelAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Selecciona por lo menos 1 médica/o"),
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancellationReason: z
    .string()
    .min(2, "El motivo debe contener al menos 2 caracteres")
    .max(500, "El motivo debe contener como máximo 500 caracteres"),
});

export function getAppointmentSchema(type: string) {
  switch (type) {
    case "create":
      return CreateAppointmentSchema;
    case "cancel":
      return CancelAppointmentSchema;
    default:
      return ScheduleAppointmentSchema;
  }
}
