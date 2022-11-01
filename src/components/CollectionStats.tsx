import Image from "next/image";

const style = {
  wrapper: `grid grid-cols-2 rounded-xl border md:grid-cols-4 md:divide-x`,
  statContainer: `flex flex-col items-center justify-center px-8 py-4 md:border-0`,
  statWithEthContainer: `flex items-center space-x-1`,
  statItem: `text-2xl font-bold`,
  statTitle: `text-sm text-gray-400`,
};

const CollectionStats = ({ stats }: { stats: any }) => {
  const formatStat = (stat: any) => {
    if (!stat) return;

    if (stat >= 1000000000) {
      return (stat / 1000000000).toFixed(1) + "G";
    }
    if (stat >= 1000000) {
      return (stat / 1000000).toFixed(1) + "M";
    }
    if (stat >= 1000) {
      return (stat / 1000).toFixed(1) + "K";
    }
    if (stat >= 1) {
      return Math.floor(stat);
    }

    return stat.toFixed(3);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.statContainer}>
        <p className={style.statItem}>{formatStat(stats?.total_supply)}</p>
        <span className={style.statTitle}>items</span>
      </div>
      <div className={style.statContainer}>
        <p className={style.statItem}>{formatStat(stats?.num_owners)}</p>
        <span className={style.statTitle}>owners</span>
      </div>
      <div className={style.statContainer}>
        <div className={style.statWithEthContainer}>
          <Image src={`/matic-logo.png`} height={20} width={20} />
          <p className={style.statItem}>{formatStat(stats?.floor_price)}</p>
        </div>
        <span className={style.statTitle}>floor price</span>
      </div>
      <div className={`${style.statContainer}`}>
        <div className={style.statWithEthContainer}>
          <Image src={`/matic-logo.png`} height={20} width={20} />
          <p className={style.statItem}>{formatStat(stats?.total_volume)}</p>
        </div>
        <span className={style.statTitle}>volume traded</span>
      </div>
    </div>
  );
};

export default CollectionStats;
