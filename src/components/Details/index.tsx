import React from "react";

import { Container } from "./styles/details";

export default function Details({
  children,
}: {
  children: React.ReactChildren | React.ReactChild;
}) {
  return <Container>{children}</Container>;
}
