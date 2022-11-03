import { useRouter } from "next/router";
import NFTCard from "../../components/NFTCard";
import Image from "next/image";
import { fetcher } from "../../utils/utils";
import useSWR from "swr";

export default function Profile() {
  const router = useRouter();
  const { walletAddress } = router.query;

  const { data } = useSWR(`/api/wallet/${walletAddress}/nfts`, fetcher);

  if (!data)
    return (
      <div className={"flex h-screen w-screen items-center justify-center"}>
        Loading ...
      </div>
    );

  return (
    <div className={"flex w-screen flex-col justify-center gap-y-2 p-4"}>
      <div className={"space-y-2"}>
        <div className={"text-3xl font-semibold"}>Your collection</div>

        <div>
          <div className={"flex items-center space-x-1"}>
            <Image src={`/matic-logo.png`} height={16} width={16} />

            <p className={"w-1/4 truncate text-slate-400"}>{walletAddress}</p>
          </div>
        </div>
      </div>

      {data?.length === 0 ? (
        <div>No NFTs were found...</div>
      ) : (
        <div className={`nft-grid`}>
          {data?.map((nft: any, index: number) => {
            return (
              <NFTCard
                key={index}
                nft={{
                  name: nft.name,
                  tokenUri: nft.tokenUri,
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
