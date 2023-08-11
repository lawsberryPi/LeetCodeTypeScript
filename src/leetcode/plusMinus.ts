export default function plusMinus(arr: number[]): string[] {
  // Write your code here
  if (!arr || arr.length === 0) return [];
  const positiveNumber = arr.filter(eachNumber => eachNumber > 0).length;
  const zeroNumber = arr.filter(eachNumber => eachNumber === 0).length;
  const negativeNumber = arr.length - positiveNumber - zeroNumber;
  return [
    (positiveNumber / arr.length).toFixed(6),
    (zeroNumber / arr.length).toFixed(6),
    (negativeNumber / arr.length).toFixed(6)
  ];
}
