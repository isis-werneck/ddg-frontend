export const nif = (value: string) => {
  const regex = /^([A-Z]{1,2}[0-9]{8}|[0-9]{8}[A-Z]{1,2}|[XYZKLMNPQRSW][0-9]{7}[A-Z])$/i;
  return !value || regex.test(value) ? null : "ra.validation.nif";
};
