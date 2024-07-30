export const GenderOptions = ["Femenino", "Masculino", "Otro"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Femenino" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Certificado de nac.",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Cédula de Identidad",
  "DNI (Documento Nacional de Identidad)",
  "RUT (Rol Único Tributario)",
  "Pasaporte",
  "Cédula de Ciudadanía",
  "Cédula de Identidad",
  "Tarjeta de Identidad",
  "Número de Identificación Fiscal (NIF)",
  "Registro de Identidad",
  "Tarjeta de Residencia",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Luis Rodríguez",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Ana González",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Carlos Martínez",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Miguel López",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Isabel Torres",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Alex Ramirez",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Sofia Moretti",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Valeria Romero",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Javier Sánchez",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
