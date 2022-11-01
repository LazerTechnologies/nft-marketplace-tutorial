import { useRouter } from "next/router";
import { useQuery } from "react-query";
import NFTCard from "../../components/NFTCard";
import TopNavbarLayout from "../../layouts/TopNavbarLayout";
import Loading from "../../components/Loading";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { IoFilterSharp } from "react-icons/io5";
import { TbArrowsSort } from "react-icons/tb";

export default function Wallet() {
  const router = useRouter();
  const { address: walletAddress } = router.query;

  const { data } = useQuery(
    ["nftsData", walletAddress],
    () => fetch(`/api/wallet/${walletAddress}/nfts`).then((res) => res.json()),
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  if (!data)
    return (
      <div className={"flex h-screen w-screen items-center justify-center"}>
        <Loading />
      </div>
    );

  return (
    <TopNavbarLayout>
      <div className={"relative h-[300px] w-full"}>
        <div className={"h-[250px] bg-slate-200"}></div>

        {/* Profile */}
        <div
          className={
            "profile-placeholder absolute bottom-5 left-4 h-[168px] w-[168px] rounded-full border-[6px] border-white shadow-md transition-all duration-300 hover:-translate-y-2"
          }
        ></div>
      </div>

      {/* Wrapper around Main NFTs*/}
      <div className={"flex w-screen flex-col justify-center p-4"}>
        <div className={"space-y-2"}>
          <div className={"text-3xl font-semibold"}>Your collection</div>

          <div>
            <div className={"flex items-center space-x-1"}>
              <Image src={`/matic-logo.png`} height={16} width={16} />

              {/* Trim the wallet address string with tailwind*/}
              {/* On hover, display the full string and allow it to be copy*/}
              <p className={"w-1/4 truncate text-slate-400"}>{walletAddress}</p>
            </div>
          </div>
        </div>

        {/*Main NFT Grid Section -- it stretches because flex-col */}
        <div className={"flex flex-col gap-y-8 pt-8"}>
          <hr />

          {/* Search buttons*/}
          <div className={"space-y-2"}>
            <div
              className={
                "flex items-center overflow-hidden rounded-xl border-2 border-[#e8ebe5] pl-3 hover:shadow-md"
              }
            >
              <MagnifyingGlassIcon
                className={"h-5 w-5 cursor-pointer text-slate-400"}
                width={24}
                height={24}
              />
              <input
                className={"w-full p-3 pl-0 outline-none"}
                type="text"
                placeholder="Search items, collections, and accounts"
              />
            </div>
            <div className={"flex gap-x-2"}>
              <button
                className={
                  "flex w-1/2 items-center justify-center gap-x-2 rounded-xl border-2 border-[#e8ebe5] p-3 font-semibold hover:shadow-md"
                }
              >
                <IoFilterSharp />
                Filters
              </button>
              <button
                className={
                  "flex w-1/2 items-center justify-center gap-x-2 rounded-xl border-2 border-[#e8ebe5] p-3 font-semibold hover:shadow-md"
                }
              >
                <TbArrowsSort />
                Sort
              </button>
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
      </div>
    </TopNavbarLayout>
  );
}
