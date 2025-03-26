export const phone = (value: string) => {
  const regex = /^\+?[\d \-()]{8,}$/;
  return !value || regex.test(value) ? null : "ra.validation.phone";
};
