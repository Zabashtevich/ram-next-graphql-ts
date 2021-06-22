import { ReactNode } from "react";
import { List } from "./styles/list";

interface CardsListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

export default function CardsList<T>({ items, renderItem }: CardsListProps<T>) {
  return <List>{items.map(renderItem)}</List>;
}
