import { IModalContext, ModalContext } from "./context";
import { useContext } from "react";

export default function useModalContext(): IModalContext {
  return useContext(ModalContext);
}
