import { useState, createContext } from "react";

export interface IModalContext {
  visible: boolean;
  setVisible: (arg: boolean) => void;
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

export default function ModalContextProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [visible, setVisible] = useState(false);

  return (
    <ModalContext.Provider value={{ visible, setVisible }}>
      {children}
    </ModalContext.Provider>
  );
}
