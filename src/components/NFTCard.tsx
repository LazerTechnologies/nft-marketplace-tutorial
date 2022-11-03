import Image from "next/image";
import { MediaRenderer } from "@thirdweb-dev/react";

export default function NFTCard({
  nft,
}: {
  nft: {
    tokenUri: string;
    name: string;
    price?: string;
  };
}) {
  return (
    <div
      className={`relative flex cursor-pointer 
      flex-col overflow-hidden rounded-lg bg-white shadow-lg 
      transition-all duration-300 hover:shadow-2xl dark:bg-[#333333]`}
    >
      <MediaRenderer
        src={nft.tokenUri}
        style={{
          objectFit: "cover",
        }}
        className={
          "h-[244px] rounded-lg transition duration-300 ease-in-out hover:scale-105"
        }
      />
      <div className={`flex flex-col gap-y-3 p-3`}>
        <div className={`text-sm font-semibold`}>{nft.name}</div>

        {nft.price && (
          <div>
            <div className={`text-xs font-semibold`}>Price</div>
            <div className={`flex items-center gap-x-1`}>
              <Image src={"/matic-logo.png"} height={16} width={16} />
              <p className={`text-base font-semibold`}>{nft.price}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
