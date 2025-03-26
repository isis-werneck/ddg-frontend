const MIN_PASSWORD_LENGTH = 8;
export const password = (value: string) => {
  return !value || value.length < MIN_PASSWORD_LENGTH
    ? "ra.validation.password"
    : null;
};
