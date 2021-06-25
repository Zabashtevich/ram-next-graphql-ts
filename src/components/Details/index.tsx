import { Container } from "./styles/details";

export default function Details({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Container>{children}</Container>;
}
