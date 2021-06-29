import { useModalContext } from "../../context";
import ReactDOM from "react-dom";

const modalRoot: HTMLDivElement = document.createElement("div")!;
modalRoot.setAttribute("id", "modal-root");
document.body.appendChild(modalRoot);

export default function Modal() {
  const { visible, setVisible } = useModalContext();

  return (
    visible &&
    ReactDOM.createPortal(
      <div />,
      document.getElementById("modal-root") as HTMLDivElement,
    )
  );
}
