import { inputType } from "./input";

export type authType = {
  name: inputType;
  password: inputType;
}

export type validationType = {
  required?: boolean;
  email?: boolean;
  minLength?: number;
}