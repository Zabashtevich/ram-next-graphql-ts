import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

import { AppHeader } from "./../components";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <AppHeader />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
