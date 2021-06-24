export default function stringContains(
  string: string,
  substring: RegExp,
): boolean {
  return string.match(substring) ? true : false;
}
