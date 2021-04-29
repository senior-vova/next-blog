import "../styles/globals.css";
import NextNprogress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="red"
        startPosition={0.2}
        stopDelayMs={200}
        height="3"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
