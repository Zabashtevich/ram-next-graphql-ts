import { ReactNode } from "react";
import { List } from "./styles/list";

interface LProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

export default function CardsList<T>({ items, renderItem }: LProps<T>) {
  return <List>{items.map(renderItem)}</List>;
}
