export const getClearedValue = (val: string): string => val.replace(/\s/gm, '');
export const isNumeric = (str: string): boolean => str.replace(/\D/gm, '').length === str.length;
