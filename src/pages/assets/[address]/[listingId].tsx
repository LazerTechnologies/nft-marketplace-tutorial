import { useRouter } from "next/router";
import { useContract } from "@thirdweb-dev/react";
import { useQuery } from "react-query";
import Loading from "../../../components/Loading";
import Image from "next/image";
import TopNavbarLayout from "../../../layouts/TopNavbarLayout";
import { MdVerified } from "react-icons/md";
import {
  AiOutlineClockCircle,
  AiOutlineHeart,
  AiOutlineReload,
} from "react-icons/ai";
import { BsFillShareFill, BsThreeDotsVertical } from "react-icons/bs";
import { GrShare } from "react-icons/gr";
import { BigNumber } from "ethers";
import { IoMdPricetag } from "react-icons/io";
import { getCurrencyURIs } from "../../../utils/getCurrencyURIs";

export default function NFT() {
  const router = useRouter();
  const { address, listingId } = router.query;
  const { contract: marketplace } = useContract(
    "0xd655B5d412eAbD1b7A901793673a511e664bCF5f",
    "marketplace"
  );

  const { isLoading, data: nft } = useQuery(
    ["listingId", listingId],
    async () => {
      return await marketplace?.getListing(BigNumber.from(listingId));
    },
    {
      enabled: !!marketplace,
    }
  );

  const buyoutListing = async () => {
    try {
      await marketplace?.buyoutListing(BigNumber.from(listingId), 1);
    } catch (e) {
      alert(e);
    }
  };

  if (isLoading || !nft)
    return (
      <div className={"flex h-screen items-center justify-center"}>
        <Loading />
      </div>
    );

  return (
    <TopNavbarLayout>
      <div className="flex justify-center">
        <div className="flex max-w-[500px] flex-col justify-center gap-y-4 p-2">
          {/*Top section*/}
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center space-x-1 text-base">
              <span className="cursor-pointer text-blue-500">
                CryptoKitties
              </span>
              <MdVerified className="h-5 w-5 text-blue-500" />
            </div>
            <div className="flex items-center rounded-xl border-2 border border-[#e8ebe5]">
              <div className="stroke-4 cursor-pointer border-r-2 p-3">
                <AiOutlineReload size={22} />
              </div>
              <div className="stroke-4 cursor-pointer border-r-2 p-3">
                <GrShare size={22} />
              </div>
              <div className="stroke-4 cursor-pointer border-r-2 p-3">
                <BsFillShareFill size={22} />
              </div>
              <div className="cursor-pointer p-3">
                <BsThreeDotsVertical size={22} />
              </div>
            </div>
          </div>

          <div className={"text-2xl font-semibold"}>{nft?.asset?.name}</div>

          <div className={"flex flex-col rounded-lg border border-[#e8ebe5]"}>
            <div>
              <div className={`flex items-center justify-between p-3`}>
                <Image
                  src={getCurrencyURIs(nft.buyoutCurrencyValuePerToken.symbol)}
                  height={20}
                  width={20}
                />
                <div className={"flex items-center space-x-2 text-gray-500"}>
                  <p>18</p> <AiOutlineHeart size={20} />
                </div>
              </div>
            </div>
            <Image
              className={"rounded-2xl"}
              src={nft?.asset.image as string}
              width={500}
              height={500}
              objectFit={"cover"}
            />
          </div>

          <div className={"flex space-x-1 text-sm"}>
            <div className={"text-gray-500"}>Owned by</div>
            <div className="cursor-pointer text-blue-500">
              {nft?.sellerAddress}
            </div>
          </div>

          {/*Bottom Section*/}
          <div className={"flex flex-col rounded-lg border border-[#e8ebe5]"}>
            <div className={"border-b border-[#e8ebe5] p-3"}>
              <div
                className={
                  "flex items-center space-x-2 text-sm text-gray-700 md:text-base"
                }
              >
                <AiOutlineClockCircle size={24} />
                <p>Sale ends November 26, 2022 at 7:39pm GMT+11</p>
              </div>
            </div>
            <div className={"flex flex-col gap-y-2 bg-slate-50 p-3"}>
              <div className={"text-sm text-gray-500"}>Current Price</div>
              <div className={`flex items-center space-x-3`}>
                <Image
                  src={getCurrencyURIs(nft.buyoutCurrencyValuePerToken.symbol)}
                  height={24}
                  width={24}
                />
                <p className={`text-3xl font-semibold`}>
                  {nft?.buyoutCurrencyValuePerToken?.displayValue}
                </p>
              </div>
              <div className="flex flex-col">
                <button
                  type="button"
                  className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-4 text-base font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={buyoutListing}
                >
                  Purchase
                </button>

                <button
                  type="button"
                  className="mr-2 rounded-lg border border-gray-200 bg-white py-4 px-5 text-base font-bold text-blue-500 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <IoMdPricetag size={22} />
                    <p>Make an offer</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TopNavbarLayout>
  );
}
