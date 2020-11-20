export default function validateMaskedNric(nric: string, firstLetter?: boolean): boolean {
  /*
  Validate size:
  - 4 characters (XXXA)
  - 5 characters with first letter (SXXXA)
  */

  if ((firstLetter && nric.length != 5) || (!firstLetter && nric.length == 4)) {
    return false;
  }

  /**
  If first letter, validate that 0th and 4th chars are string
  */
  // if (firstLetter && nric[0] + nric[4])
}
