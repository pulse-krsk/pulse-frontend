export const deleteAllEmptyFields = <T extends { [index: string]: string }>(obj: T) => {
  if (!obj) return null;
  Object.entries(obj).forEach(([key, value]) => {
    if (value === null || value === undefined) {
      delete obj[key];
    }
  });
};
