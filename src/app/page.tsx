import CoinRank from "@pages-flat/coin/rank";
// import TokenRank from "@pages-flat/token/rank";
import { Column } from "@shared/index";

export default function Home() {

  return (
    <Column as="main">
      <CoinRank></CoinRank>
      {/* <TokenRank></TokenRank> */}
    </Column>
  );
}