export function formatPrice(number: number): string {
  let numberString: string = number.toString();

  // Use a regular expression to add commas every three digits from the right
  numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return `${numberString}`;
}

//chunk a given array into arrays of same size
export function chunkArray(inputArray: Array<any>, chunkSize: number) {
  let result = [];
  for (let i = 0; i < inputArray.length; i += chunkSize) {
      result.push(inputArray.slice(i, i + chunkSize));
  }
  return result;
}