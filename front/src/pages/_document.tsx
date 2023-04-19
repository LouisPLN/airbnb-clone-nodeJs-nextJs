import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        rel="stylesheet"
        href="https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css"
      />
      <body>
        <Main />
        <NextScript />
      </body>
      <script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script>
    </Html>
  );
}
