import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
        <script defer src="https://umami.apps.stereorail.com/script.js" data-website-id="a9c38a73-fd3a-47fc-b6c1-7db381adb94a"></script>
      </body>
    </Html>
  );
}
