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
        <div>
          <h1 className={"text-lg"}>Please login to continue...</h1>
          <ConnectWallet />
        </div>
      </div>
    );
  }
  return <>{children}</>;
}
