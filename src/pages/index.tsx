import type { NextPage } from "next";
import { useActiveListings, useContract } from "@thirdweb-dev/react";

const Home: NextPage = () => {
  const {contract} = useContract(
    "0x7653Cd64320c65733C005EF855CdE916705B483D",
    "marketplace"
  );

  const { data, isLoading} = useActiveListings(contract); 
  console.log(data);

  return (
    <div>BEAT Marketplace</div>
  );
};

export default Home;
