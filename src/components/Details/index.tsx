import React from "react";

import { Container } from "./styles/details";

export default function Details({
  children,
}: {
  children: React.ReactChildren;
}) {
  return <Container>{children}</Container>;
}
