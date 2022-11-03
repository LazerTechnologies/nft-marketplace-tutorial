import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

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

    const results: { tokenUri: any; name: any }[] = data.result.map(
      (nft: any) => ({
        name: JSON.parse(nft.metadata)?.name,
        tokenUri: JSON.parse(nft.metadata)?.image,
      })
    );

    const filteredResults = results.filter(
      (data) => !!data?.tokenUri && !!data?.name
    );

    res.status(200).json(filteredResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
}
