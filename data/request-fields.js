export const serviceOptions = [
  { label: "Website Development", value: "Website Development" },
  { label: "Frontend Development", value: "Frontend Development" },
  { label: "Improve Existing Website", value: "Improve Existing Website" },
  { label: "Technical Training", value: "Technical Training" },
];
export const requestFields = [
  {
    name: "service",
    label: "Service",
    component: "select",
    required: true,
    options: serviceOptions,
  },
  {
    name: "name",
    label: "Your name",
    type: "text",
    required: true,
    autoComplete: "name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    autoComplete: "email",
  },
  {
    name: "description",
    label: "Tell me about the project",
    component: "textarea",
    required: true,
    rows: 7,
  },
];
export const contactFields = [
  {
    name: "name",
    label: "Your name",
    type: "text",
    required: true,
    autoComplete: "name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    autoComplete: "email",
  },
  {
    name: "message",
    label: "Message",
    component: "textarea",
    required: true,
    rows: 7,
  },
];
