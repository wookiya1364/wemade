import { Column } from "@shared/index";
import Main from "@pages-flat/main/page";
import Footer from "@widgets/footer/page";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Column as="main" className="px-5">
        <Column as="article" className="w-full">
          <Main />
        </Column>
      </Column>
      <Footer />
    </Fragment>
  );
}
