const currencyURIs: { [key: string]: string } = {
  MATIC: "/matic-logo.png",
  LAC: "/lazercoin.jpg",
};

export const getCurrencyURIs = (symbol: string): string => {
  return currencyURIs[symbol] || "/lazercoin.jpg";
};
