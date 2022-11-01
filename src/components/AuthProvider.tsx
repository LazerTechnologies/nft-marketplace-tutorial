import { ReactElement, useEffect, useState } from "react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const address = useAddress();

  useEffect(() => {
    if (address) {
      setIsLoggedin(true);
    } else {
      setIsLoggedin(false);
    }
  }, [address]);

  if (!isLoggedin) {
    return (
      <div className={"flex h-screen w-full items-center justify-center"}>
        <div className={"flex flex-col items-center gap-y-3"}>
          <div>
            <h1 className={"text-lg"}>Please login to continue...</h1>
            <ConnectWallet />
          </div>

          <div>
            <h1 className={"text-lg"}>I don&apos;t understand web3...</h1>
            <button
              type="button"
              className="mr-2 mb-2 w-full rounded-lg border border-gray-200 bg-white py-3 px-5 text-base font-semibold text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              onClick={() => {
                setIsLoggedin(true);
              }}
            >
              Let me thru 😎
            </button>
          </div>
        </div>
      </div>
    );
  }
  return <>{children}</>;
}
