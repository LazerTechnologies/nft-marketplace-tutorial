import type { NextPage } from "next";
import Head from "next/head";
import CollectionStats from "../components/CollectionStats";
import { useState } from "react";
import Image from "next/image";
import { collectionData } from "../static/collectionData";
import { MdVerified } from "react-icons/md";
import Listings from "../components/Listings";
import TopNavbarLayout from "../layouts/TopNavbarLayout";

const style = {
  wrapper: `flex flex-col dark:bg-[#202226] relative flex flex-col`,
  container: `relative flex min-h-screen flex-col`,
  bannerContainer: `absolute h-1/3 w-full`,
  banner: `object-cover`,
  collectionInfoWrapper: `absolute flex flex-col w-full top-1/3 z-10 -translate-y-16 p-3`,
  collectionInfoContainer: `flex flex-col items-center space-y-4`,
  collectionLogoContainer: `flex items-center justify-center rounded-full border-4 border-gray-100`,
  collectionLogo: `rounded-full object-cover`,
  collectionInfo: `flex flex-col items-center space-y-6`,
  title: `text-4xl font-bold`,
  creatorInfoContainer: `flex items-center space-x-1`,
  creator: `text-sm font-medium text-gray-500`,
  creatorName: `cursor-pointer text-blue-500`,
  verified: `h-5 w-5 text-blue-500`,
  descriptionContainer: `max-w-3xl py-2 px-10 text-center text-gray-500`,
};

const Home: NextPage = () => {
  const [collection] = useState(collectionData);

  return (
    <>
      <Head>
        <title>LazerSea Marketplace</title>
        <meta name="description" content="LazerSea Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TopNavbarLayout>
          <div className={style.wrapper}>
            <div className={style.container}>
              <div className={style.bannerContainer}>
                <Image
                  className={style.banner}
                  src={collection?.banner_image_url}
                  layout="fill"
                  alt="banner"
                />
              </div>

              <div className={style.collectionInfoWrapper}>
                <div className={style.collectionInfoContainer}>
                  <div className={style.collectionLogoContainer}>
                    <Image
                      className={style.collectionLogo}
                      src={collection?.image_url}
                      height={128}
                      width={128}
                      alt="logo"
                    />
                  </div>

                  <div className={style.collectionInfo}>
                    <div className={style.title}>{collection?.name}</div>

                    <div className={style.creatorInfoContainer}>
                      <div className={style.creator}>
                        Created by{" "}
                        <span className={style.creatorName}>
                          {collection?.creator}
                        </span>
                      </div>
                      <MdVerified className={style.verified} />
                    </div>
                  </div>

                  <CollectionStats stats={collection?.stats} />

                  <div className={style.descriptionContainer}>
                    {collection?.description}
                  </div>
                </div>
                <Listings />
              </div>
            </div>
          </div>
        </TopNavbarLayout>
      </main>
    </>
  );
};

export default Home;
