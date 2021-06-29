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

export default function Modal() {
  const [isBrowser, setIsBrowser] = useState(false);
  const { visible, setVisible } = useModalContext();

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    if (visible) document.body.style.overflow = "hidden";
  }, [visible]);

  if (isBrowser) {
    return (
      true &&
      ReactDOM.createPortal(
        <Section>
          <Overlay />
          <Container>
            <Inner
              onClick={() => {
                document.body.style.overflow = "auto";
                setVisible(false);
              }}
            >
              <Close />
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
    );
  } else {
    return null;
  }
}
