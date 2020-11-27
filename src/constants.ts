export const weights: number[] = [2, 7, 6, 5, 4, 3, 2];

export const validFirstLetters: string[] = ['S', 'T', 'F', 'G'];

export const lastLetterMap: { [index: string]: string[] } = {
  ST: ['J', 'Z', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'],
  FG: ['X', 'W', 'U', 'T', 'R', 'Q', 'P', 'N', 'M', 'L', 'K'],
};

export const validLastLetters: string[] = [...lastLetterMap.ST, ...lastLetterMap.FG];
