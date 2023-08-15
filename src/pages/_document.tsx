import { Html, Head, Main, NextScript } from "next/document";

export const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-A00AA0" height="0" width="0" style="display:none;visibility:hidden" /></iframe>`,
          }}
        />
      </body>
    </Html>
  );
};

export default Document;
