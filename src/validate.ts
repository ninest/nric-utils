const weights: number[] = [2, 7, 6, 5, 4, 3, 2];

const lastLetterMap: { [index: string]: string[] } = {
  ST: ['J', 'Z', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'],
  FG: ['X', 'W', 'U', 'T', 'R', 'Q', 'P', 'N', 'M', 'L', 'K'],
};

export default function validateNric(nric: string): boolean {
  nric = nric.toUpperCase();
  const firstLetter = nric[0];

  const digits: number[] = nric.slice(1, 8).split('').map(Number);

  /*
  Find "weight" of NRIC: multiply each digit by its weight number
  - Multiple 1st by 2
  - Multiple 2st by 7
  and so on
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
  return nric[8] == lastLetter;
}
