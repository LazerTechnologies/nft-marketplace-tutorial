import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { ThirdwebProvider } from "@thirdweb-dev/react";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
      <Component {...pageProps} />
    </ThirdwebProvider>

  );
};

export default MyApp;
