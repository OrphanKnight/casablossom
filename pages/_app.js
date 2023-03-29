import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let persistor = persistStore(store);
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>CasaBlossom</title>
        <meta
          name="description"
          content="One stop shop for all things beatifull"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={session}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <PayPalScriptProvider deferLoading={true}>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
              <Component {...pageProps} />
            </PayPalScriptProvider>
          </PersistGate>
        </Provider>
      </SessionProvider>
      <div className="container">
        <div className="circle-container">
          <div className="background-grass">
            <div className="background-blade" />
            <div className="background-blade" />
            <div className="background-blade" />
            <div className="background-blade" />
            <div className="background-blade" />
            <div className="background-blade" />
            <div className="background-blade" />
            <div className="background-blade" />
            <div className="background-blade" />
            <div className="background-blade" />
            <div className="background-blade" />
            <div className="background-blade" />
            <div className="background-blade" />
            <div className="background-blade" />
          </div>
          <div className="middle-grass">
            <div className="middle-blade" />
            <div className="middle-blade" />
            <div className="middle-blade" />
            <div className="middle-blade" />
            <div className="middle-blade" />
            <div className="middle-blade" />
            <div className="middle-blade" />
            <div className="middle-blade" />
            <div className="middle-blade" />
            <div className="middle-blade" />
            <div className="middle-blade" />
            <div className="middle-blade" />
            <div className="middle-blade" />
            <div className="middle-blade" />
            <div className="middle-blade" />
          </div>
          <div className="foreground-grass">
            <div className="foreground-blade" />
            <div className="foreground-blade" />
            <div className="foreground-blade" />
            <div className="foreground-blade" />
            <div className="foreground-blade" />
            <div className="foreground-blade" />
            <div className="foreground-blade" />
            <div className="foreground-blade" />
            <div className="foreground-blade" />
            <div className="foreground-blade" />
            <div className="foreground-blade" />
            <div className="foreground-blade" />
            <div className="foreground-blade" />
            <div className="foreground-blade" />
            <div className="foreground-blade" />
            <div className="foreground-blade" />
            <div className="foreground-blade" />
            <div className="foreground-blade" />
          </div>
          <div className="stars1" />
          <div className="stars2"> </div>
          <div className="stars3" />
        </div>
        <div className="container2">
          <div className="glass">
            <div className="shine" />
          </div>
          <div className="thorns">
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="leaves">
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="petals">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="deadPetals">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyApp;
