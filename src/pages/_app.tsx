import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import AuthProvider from "../components/AuthProvider";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThirdwebProvider
      chainRpc={{
        [ChainId.Mumbai]:
          "https://polygon-mumbai.infura.io/v3/f5982c0040764b7e8f5c6dfab0f14bf7",
      }}
      desiredChainId={ChainId.Mumbai}
    >
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </QueryClientProvider>
    </ThirdwebProvider>
  );
};

export default MyApp;
