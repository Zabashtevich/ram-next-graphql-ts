export default function range(start: number, end: number): number[] {
  return [...Array(end)].map((_, index) => index + start);
}
