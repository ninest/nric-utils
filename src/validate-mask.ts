import errorMessages from './error-messages';
import { validFirstLetters, validLastLetters } from './constants';

export default function validateMaskedNric(
  nric: string,
  firstLetter: boolean = false,
): boolean | Error {
  nric = nric.toUpperCase();
  const lastLetter = nric[nric.length - 1];

  /*
  Validate size:
  - 4 characters (XXXA)
  - 5 characters with first letter (SXXXA)

  (this can probably be improved)
  */
  if (firstLetter) {
    if (nric.length != 5) {
      throw new Error(errorMessages.MASKED_NRIC_5_CHARACTERS);
    }
  } else {
    if (nric.length != 4) {
      throw new Error(errorMessages.MASKED_NRIC_4_CHARACTERS);
    }
  }

  /*
  If first letter is valid
  */
  if (firstLetter && !validFirstLetters.includes(nric[0])) {
    throw new Error(errorMessages.NRIC_FIRST_CHAR_INVALID);
  }

  /*
  If last letter is valid
  */
  if (!validLastLetters.includes(lastLetter)) {
    throw new Error(errorMessages.NRIC_LAST_CHAR_INVALID);
  }

  return true;
}
