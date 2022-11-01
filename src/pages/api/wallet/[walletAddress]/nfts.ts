import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const getIpfsUrlFromMoralisImgUrl = async (
  name: string,
  moralisImgUrl: string
): Promise<{ tokenUri: string; name: string } | undefined> => {
  try {
    const { data } = await axios.get(moralisImgUrl);
    const ipfsAddress = data.image.split("ipfs://")[1];
    return {
      tokenUri: `https://gateway.ipfscdn.io/ipfs/${ipfsAddress}`,
      name,
    };
  } catch (e) {
    return;
  }
};

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { walletAddress } = req.query;

  const options = {
    method: "GET",
    url: `https://deep-index.moralis.io/api/v2/${walletAddress}/nft`,
    params: { chain: "mumbai", format: "decimal" },
    headers: {
      accept: "application/json",
      "X-API-Key": process.env.MORALIS_API_KEY,
    },
  };

  try {
    const { data } = await axios.request(options);

    const imgUrlPromises: Promise<
      { tokenUri: string; name: string } | undefined
    >[] = [];

    data.result.map((nft: any) => {
      imgUrlPromises.push(
        getIpfsUrlFromMoralisImgUrl(
          JSON.parse(nft.metadata)?.name,
          nft.token_uri
        )
      );
    });

    const imgUrlResults = (await Promise.all(imgUrlPromises)).filter(
      (data) => !!data?.tokenUri && !!data?.name
    );

    res.status(200).json(imgUrlResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
}
