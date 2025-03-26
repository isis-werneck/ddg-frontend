export const equalToField = (fieldName: string) => {
  return (value: string, allValues: Record<string, unknown>) => {
    if (value !== allValues[fieldName]) {
      return "ra.validation.equalToField";
    }
  };
};
