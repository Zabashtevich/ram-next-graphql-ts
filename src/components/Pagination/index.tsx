import { Container, Item } from "./styles/pagination";
import { range } from "../../utils";

interface IPagination {
  activePage: number;
  amount: number;
  setActivePage: (item: number) => void;
}

export default function Pagination({
  activePage,
  amount,
  setActivePage,
}: IPagination) {
  return (
    <Container>
      {range(1, amount).map((item) => (
        <Item
          key={item}
          selected={item === activePage ? 1 : 0}
          onClick={() => setActivePage(item)}
        >
          {item}
        </Item>
      ))}
    </Container>
  );
}
