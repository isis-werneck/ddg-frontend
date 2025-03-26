import { nif } from "./nif";

export const nifOrPassport = (value: string) => {
  const passportRegex = /^[0-9A-Z]{3,20}$/i;
  return (!nif(value) || passportRegex.test(value)) ? null : "ra.validation.nifOrPassport";
};
