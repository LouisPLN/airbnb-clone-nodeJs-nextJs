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
        <div id="up"></div>
        <a
          href="#up"
          className="btn btn-neutral fixed bottom-4 right-4 h-[3rem]
          w-[3rem] text-white rounded-full z-50"
        >
          👆
        </a>
        <Main />
        <NextScript />
      </body>
      <script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script>
    </Html>
  );
}
