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
    "0x7653Cd64320c65733C005EF855CdE916705B483D",
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
        <div className={"text-2xl font-semibold"}>Sounds</div>
        <Link href={`profile/${address}`}>
          <div className={"cursor-pointer text-2xl font-semibold"}>
            Collection
          </div>
        </Link>
      </div>
      <div className={`nft-grid`}>
        {nfts &&
          nfts.map((nft) => {
            return (
              <div>
              {/* <Link
                href={`/assets/${nft.id}`}
                key={nft.assetContractAddress + nft.id}
              > */}
                <a>
                  <NFTCard
                    nft={{
                      name: nft.asset.name as string,
                      tokenUri: nft.asset.image as string,
                      // music: nft.asset.animation_url as string,
                      price: nft.buyoutCurrencyValuePerToken?.displayValue,
                    }}
                  />
                </a>
              {/* </Link> */}
              <div>            
              </div>
              <a download href="https://gateway.ipfscdn.io/ipfs/QmaTXB1nP2ABkqQnhtUQtjcGg8f9ZwxWg3Zr61V3A5evwx/Cymatics%20-%20Oracle%20Dark%20Melody%20Loop%203%20-%20112%20BPM%20E%20Min.wav">
                <button>Download</button>
                </a>
                {/* <div class="css-1aq8poo" style="position: relative; object-fit: contain;"><img src="https://gateway.ipfscdn.io/ipfs/QmaTXB1nP2ABkqQnhtUQtjcGg8f9ZwxWg3Zr61V3A5evwx/SynthOcean.png" style="height: 100%; width: 100%; pointer-events: none; object-fit: contain;"></img><button style="position: absolute; bottom: 0px; right: 0px; transform: translate(-25%, -25%); max-width: 32px; width: 8%; min-width: 24px; aspect-ratio: 1 / 1; z-index: 3; background-color: rgb(255, 255, 255); color: rgb(138, 147, 155); display: grid; place-items: center; border-radius: 50%; border: 1px solid rgb(229, 232, 235); cursor: pointer;"><svg width="1em" height="1em" viewBox="0 0 32 32" style="width: 66%; height: 66%;"><path fill="currentColor" d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28Z"></path></svg></button><audio src="https://gateway.ipfscdn.io/ipfs/QmaTXB1nP2ABkqQnhtUQtjcGg8f9ZwxWg3Zr61V3A5evwx/Cymatics%20-%20Oracle%20Dark%20Melody%20Loop%203%20-%20112%20BPM%20E%20Min.wav" loop="" playsinline="" preload="none" controlslist="nodownload" style="position: absolute; opacity: 0; pointer-events: none; z-index: -1; visibility: hidden;"></audio></div> */}

                </div>

            );
          })}
      </div>
      {/* <div style="position: relative; object-fit: contain;"><img src="https://gateway.ipfscdn.io/ipfs/QmaTXB1nP2ABkqQnhtUQtjcGg8f9ZwxWg3Zr61V3A5evwx/SynthOcean.png" style="height: 100%; width: 100%; pointer-events: none; object-fit: contain;"></img> <button style="position: absolute; bottom: 0px; right: 0px; transform: translate(-25%, -25%); max-width: 32px; width: 8%; min-width: 24px; aspect-ratio: 1 / 1; z-index: 3; background-color: rgb(255, 255, 255); color: rgb(53, 56, 64); display: grid; place-items: center; border-radius: 50%; border: 1px solid rgb(229, 232, 235); cursor: pointer; box-shadow: rgba(4, 17, 29, 0.25) 0px 0px 8px 0px;"><svg width="1em" height="1em" viewBox="0 0 32 32" style="width: 66%; height: 66%;"><path fill="currentColor" d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28Z"></path></svg></button><audio src="https://gateway.ipfscdn.io/ipfs/QmaTXB1nP2ABkqQnhtUQtjcGg8f9ZwxWg3Zr61V3A5evwx/Cymatics%20-%20Oracle%20Dark%20Melody%20Loop%203%20-%20112%20BPM%20E%20Min.wav" loop="" playsinline="" preload="none" controlslist="nodownload" style="position: absolute; opacity: 0; pointer-events: none; z-index: -1; visibility: hidden;"></audio></div> */}
      <video controls="" name="media"><source src="https://gateway.ipfscdn.io/ipfs/QmaTXB1nP2ABkqQnhtUQtjcGg8f9ZwxWg3Zr61V3A5evwx/Cymatics%20-%20Oracle%20Dark%20Melody%20Loop%203%20-%20112%20BPM%20E%20Min.wav"type="audio/x-wav"></source></video>  
    </div>
                  // <video controls="" autoplay="" name="media"><source src="https://gateway.ipfscdn.io/ipfs/QmaTXB1nP2ABkqQnhtUQtjcGg8f9ZwxWg3Zr61V3A5evwx/Cymatics%20-%20Oracle%20Dark%20Melody%20Loop%203%20-%20112%20BPM%20E%20Min.wav"type="audio/x-wav"></source></video>  
  );
};

export default Home;
