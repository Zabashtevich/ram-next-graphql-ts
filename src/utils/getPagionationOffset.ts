import range from "./range";

export default function getPaginationOffset(
  activePage: number,
  amount: number,
): [start: number, end: number] {
  let end =
    amount - activePage <= 5 ? amount : activePage <= 5 ? 10 : activePage + 5;
  let start =
    activePage <= 5
      ? 0
      : amount - activePage <= 5
      ? amount - 10
      : activePage - 5;

  return [start, end];
}
