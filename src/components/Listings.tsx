import { useContract } from "@thirdweb-dev/react";
import Loading from "./Loading";
import NFTCard from "./NFTCard";
import Link from "next/link";
import { useQuery } from "react-query";
import { getCurrencyURIs } from "../utils/getCurrencyURIs";

export default function Listings() {
  const { contract } = useContract(
    "0xd655B5d412eAbD1b7A901793673a511e664bCF5f",
    "marketplace"
  );

  const { isLoading, data: nfts } = useQuery(
    ["nftsData"],
    async () => {
      return await contract?.getActiveListings();
    },
    {
      enabled: !!contract,
    }
  );
  if (isLoading)
    return (
      <div className={"mb-3 flex w-screen justify-center"}>
        <Loading />
      </div>
    );

  return (
    <div className={`nft-grid`}>
      {nfts &&
        nfts.map((nft) => {
          return (
            <Link
              href={`/assets/${nft.assetContractAddress}/${nft.id}`}
              key={nft.assetContractAddress + nft.id}
            >
              <a>
                <NFTCard
                  nft={{
                    name: nft.asset.name as string,
                    tokenUri: nft.asset.image as string,
                    price: nft.buyoutCurrencyValuePerToken?.displayValue,
                    currencyURI: getCurrencyURIs(
                      nft.buyoutCurrencyValuePerToken.symbol
                    ),
                  }}
                />
              </a>
            </Link>
          );
        })}
    </div>
  );
}
