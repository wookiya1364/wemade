type KeyValue = {
  [key: string]: string | number | boolean | null | undefined;
};

type TDefaultProps = {
  className?: string;
  children?: React.ReactNode;
};

type TContainer =
  | "div"
  | "section"
  | "main"
  | "article"
  | "header"
  | "footer"
  | "aside"
  | "nav";
type TLabel = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
type TButton = "button" | "span";

type TLink = { text: string; href: string };
type TKeyValue = {
  [key: string]: string | number;
};
type TDynamicRoute = {
  params: TID;
};
type TID = {
  id: string;
};

type TToken = {
  chain: string;
  symbol: string;
  contractAddress: string;
  name: string;
  displayName: string;
  homeChain: string;
  awayChain: string;
  ticker: string;
  wrappable: boolean;
  swapable: boolean;
  isUna: boolean;
  isReflect: boolean;
  tokenType: string;
  supportedChain: TSupportedChain[];
  price: TPrice
};

type TSupportedChain = {
  chain: string;
  contractAddress: string;
  chainImage: string;
  displayName: string;
};

type TPrice = {
  symbol: string;
  supplyRate: number;
  circulatingSupply: number;
  lastCirculatingSupply: number;
  time: number;
  price: number;
  priceRate: number;
  priceChange: number;
  lastClosingPrice: number;
  price24H: number;
  price24L: number;
  tradingVolume: number;
  lastTradingVolume: number;
  tradingVolumeRate: number;
  tradingVolumeStatus: string;
  tradingVolumeWD: number;
  lastTradingVolumeWD: number;
  tradingVolumeRateWD: number;
  tradingVolumeWDStatus: string;
  priceStatus: string;
  marketCap: number;
  lastMarketCap: number;
  marketCapRate: number;
  marketCapStatus: string;
  mintVolume: number;
  burnVolume: number;
  mintVolumeRate: number;
  burnVolumeRate: number;
  mintVolumeStatus: string;
  burnVolumeStatus: string;
}

type TCoin = {
  chain: string;
  symbol: string;
  contractAddress: string;
  name: string;
  icon: string;
  awayChain: string;
  homeChain: string;
  awayName: string;
  homeName: string;
  wrappable: boolean;
  wrappedChain: string;
  wrappedName: string;
  wrappedContractAddress: string;
  wrappedSymbol: string;
  exchangeable: boolean;
  swapable: boolean;
  displayName: string;
  ticker: string;
  isReflect: boolean;
  tokenType: string;
  isUna: boolean;
  supportedChain: boolean | null;
  price: boolean | null;
}

type TGame = {
  title: string;
  message: string;  
  img: string;
}

type TGameTitle = Pick<TGame, "title">;