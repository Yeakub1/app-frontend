import { StateProvider } from "@/context/StateContext";
import reducer, { initialState } from "@/context/StateReducers";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
      <StateProvider initialState={initialState} reducer={reducer}>
        <Head>
          <title>Chat App</title>
          <link
            rel="shortcut icon"
            href="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Google_Messages_icon_%282022%29.svg/1024px-Google_Messages_icon_%282022%29.svg.png"
            type="image/x-icon"
          />
        </Head>
        <Component {...pageProps} />
      </StateProvider>
    );
}
