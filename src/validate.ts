import errorMessages from './error-messages';

import {
  weights,
  validFirstLetters,
  lastLetterMap,
  validLastLetters,
} from './constants';

export default function validateNric(nric: string): boolean | Error {
  nric = nric.toUpperCase();
  const firstLetter = nric[0];

  /*
  Should be exactly 9 characters
  */
  if (nric.length != 9) {
    throw new Error(errorMessages.NRIC_9_CHARACTERS);
    // return false;
  }

  /*
  First and last characters are valid
  */
  if (!validFirstLetters.includes(firstLetter)) {
    throw new Error(errorMessages.NRIC_FIRST_CHAR_INVALID);
    // return false;
  }

  if (!validLastLetters.includes(nric[8])) {
    throw new Error(errorMessages.NRIC_LAST_CHAR_INVALID);
    // return false;
  }

  const digits: number[] = nric.slice(1, 8).split('').map(Number);

  /*
  Find "weight" of NRIC: multiply each digit by its weight number
  - Multiple 1st by 2
  - Multiple 2st by 7 and so on
  */
  let total: number = 0;
  digits.forEach((digit, index) => {
    total += digit * weights[index];
  });

  /*
  If NRIC starts with T or G, add 4 to the total
  */
  if (['T', 'G'].includes(firstLetter)) total += 4;

  /*
  Divide the total by 11 and get reminder
  */
  const remainder: number = total % 11;

  /*
  Get last letter depending on the first letter 
  */
  let lastLetterArray: string[];
  Object.keys(lastLetterMap).forEach((key: string) => {
    if (key.includes(firstLetter)) {
      lastLetterArray = lastLetterMap[key];
    }
  });

  /*
  Find the last letter depending on the remainder
  */
  const lastLetter: string = lastLetterArray![remainder];

  /**
  Check if NRIC is valid
  */
  if (nric[8] == lastLetter) {
    return true;
  } else {
    throw new Error(errorMessages.NRIC_INVALID);
  }
}
