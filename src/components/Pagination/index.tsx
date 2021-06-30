import { Container, Item } from "./styles/pagination";
import { getPaginationOffset, range } from "../../utils";

interface IPagination {
  activePage: number;
  amount: number;
  setActivePage?: (item: number) => void;
  onItemClick?: (item: number) => void;
}

export default function Pagination({
  activePage,
  amount,
  setActivePage,
  onItemClick,
}: IPagination) {
  return (
    <Container>
      {range(1, amount)
        .slice(...getPaginationOffset(activePage, amount))
        .map((item: number) => (
          <Item
            key={item}
            selected={item === activePage}
            onClick={() => {
              if (onItemClick) {
                onItemClick(item);
              }
              if (setActivePage) {
                setActivePage(item);
              }
            }}
          >
            {item}
          </Item>
        ))}
    </Container>
  );
}
