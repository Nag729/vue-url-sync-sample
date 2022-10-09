import { LocationQueryValue } from "vue-router";

export const queryToString = (
  value: LocationQueryValue | LocationQueryValue[]
): string | undefined => {
  if (Array.isArray(value)) {
    return value[0] ?? undefined;
  }
  return value ?? undefined;
};

export const queryToNumber = (
  value: LocationQueryValue | LocationQueryValue[]
): number | undefined => {
  const stringValue = queryToString(value);
  if (stringValue && !isNaN(Number(stringValue))) {
    return Number(stringValue);
  }
  return undefined;
};
