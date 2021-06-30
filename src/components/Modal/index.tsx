import { useState } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";

import { useModalContext } from "../../context";
import {
  Section,
  Inner,
  Close,
  Overlay,
  Header,
  Thumbnail,
  Container,
  Message,
  Title,
  Subtitle,
  Wrapper,
  Button,
} from "./styles/modal";

const modalRoot = document.createElement("div");
modalRoot.setAttribute("id", "modal-root");
document.body.appendChild(modalRoot);

export default function Modal() {
  const [isBrowser, setIsBrowser] = useState(false);
  const { visible, setVisible } = useModalContext();

  const el = document.createElement("div");

  useEffect(
    () => {
      modalRoot.appendChild(el);

      setIsBrowser(true);

      return () => {
        modalRoot.removeChild(el);
      };
    },
    [], // eslint-disable-line react-hooks/exhaustive-deps
  );

  useEffect(() => {
    if (visible) document.body.style.overflow = "hidden";
  }, [visible]);

  if (isBrowser) {
    return visible
      ? ReactDOM.createPortal(
          <Section data-testid="modal-container">
            <Overlay
              data-testid="modal-overlay"
              onClick={() => {
                document.body.style.overflow = "auto";
                setVisible(false);
              }}
            />
            <Container>
              <Inner
                onClick={() => {
                  document.body.style.overflow = "auto";
                  setVisible(false);
                }}
              >
                <Close data-testid="modal-close-icon" />
              </Inner>
              <Header>
                <Thumbnail />
              </Header>
              <Wrapper>
                <Message>
                  <Title>Error! </Title>
                  <Subtitle>Something gone wrong...</Subtitle>
                </Message>
                <Button
                  data-testid="modal-close-button"
                  onClick={() => {
                    document.body.style.overflow = "auto";
                    setVisible(false);
                  }}
                >
                  Close
                </Button>
              </Wrapper>
            </Container>
          </Section>,
          document.getElementById("modal-root") as HTMLDivElement,
        )
      : null;
  } else {
    return null;
  }
}
