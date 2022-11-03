import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import AuthProvider from "../components/AuthProvider";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThirdwebProvider>
  );
};

export default MyApp;
