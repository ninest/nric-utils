export default function maskNric(nric: string, firstLetter?: boolean): string {
  const mask: string = nric.substring(5);

  if (firstLetter) return (nric[0] + mask).toUpperCase();
  else return mask.toUpperCase();
}
