import React from "react";
import { AppHeader } from "../components";

export default function AppLayout({
  children,
}: {
  children: React.ReactChild | React.ReactChildren;
}) {
  return (
    <div className="root">
      <AppHeader />
      {children}
    </div>
  );
}
