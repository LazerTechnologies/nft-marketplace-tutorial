import type { NextPage } from "next";
import {
  useActiveListings,
  useAddress,
  useContract,
} from "@thirdweb-dev/react";
import Link from "next/link";
import NFTCard from "../components/NFTCard";

const Home: NextPage = () => {
  const address = useAddress();

  const { contract } = useContract(
    "0xd655B5d412eAbD1b7A901793673a511e664bCF5f",
    "marketplace"
  );

  const { data: nfts, isLoading } = useActiveListings(contract);

  if (isLoading)
    return (
      <div className={"mb-3 flex w-screen justify-center"}>Loading ...</div>
    );

  return (
    <div className={"space-y-4 p-2"}>
      <div className={"flex space-x-4"}>
        <div className={"text-2xl font-semibold"}>Active Listings</div>
        <Link href={`profile/${address}`}>
          <div className={"cursor-pointer text-2xl font-semibold"}>
            My Collections
          </div>
        </Link>
      </div>
      <div className={`nft-grid`}>
        {nfts &&
          nfts.map((nft) => {
            return (
              <Link
                href={`/assets/${nft.id}`}
                key={nft.assetContractAddress + nft.id}
              >
                <a>
                  <NFTCard
                    nft={{
                      name: nft.asset.name as string,
                      tokenUri: nft.asset.image as string,
                      price: nft.buyoutCurrencyValuePerToken?.displayValue,
                    }}
                  />
                </a>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
