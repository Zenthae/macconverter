export const sliceAdresse = (adresse: string, char: ':' | '-') => {
  const v = clearAdresse(adresse);

  return `${v.slice(0, 2)}${char}${v.slice(2, 4)}${char}${v.slice(
    4,
    6,
  )}${char}${v.slice(6, 8)}${char}${v.slice(8, 10)}${char}${v.slice(10, 12)}`;
};

export const clearAdresse = (v: string) => {
  return v.replace(/[-:]/g, '');
};

export const upperCaseNoSeparator = (raw: string) => {
  return clearAdresse(raw).slice(0, 12).toUpperCase();
};

export const upperCaseAndColumn = (raw: string) => {
  return sliceAdresse(clearAdresse(raw), ':').toUpperCase();
};

export const lowerCaseAndColumn = (raw: string) => {
  return sliceAdresse(clearAdresse(raw), ':').toLowerCase();
};

export const upperCaseAndRow = (raw: string) => {
  return sliceAdresse(clearAdresse(raw), '-').toUpperCase();
};

export const copyToClipboard = (value: string) => {
  navigator.clipboard.writeText(value);
};
