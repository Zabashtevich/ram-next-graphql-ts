import { ModalContext } from "./context";
import { useContext } from "react";

export default function useModalContext() {
  return useContext(ModalContext);
}
