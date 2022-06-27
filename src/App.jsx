import { DevGrids } from "./ui/DevGrids/DevGrids";

import { Container } from "./ui/Container/Container";
import { PageWrapper } from "./ui/PageWrapper/PageWrapper";
import { Header } from "./ui/Header/Header";

import { FirstScreen } from "./ui/FirstScreen/FirstScreen";
import { Search } from "./ui/Search/Search";
import { PurchaseList } from "./ui/PurchaseList/PurchaseList";
import { PurchaseItem } from "./ui/PurchaseItem/PurchaseItem";
import { InfoBlock } from "./ui/InfoBlock/InfoBlock";
import { TermsBlock } from "./ui/TermsBlock/TermsBlock";

import { BlackButton } from "./ui/Buttons/Buttons";
import { DocsPage } from "./ui/Pages/Docs";

import { Link, Routes, Route } from "react-router-dom";

import { getPath } from "./utils/getPath";

export const App = () => {
  return (
    <Routes>
      <Route
        path={getPath("/")}
        element={
          <Container>
            <div style={{ margin: "10px 0" }}>
              <Link to={getPath("/main")}>
                <BlackButton>Главная</BlackButton>
              </Link>
            </div>
            <div style={{ margin: "10px 0" }}>
              <Link to={getPath("/docs")}>
                <BlackButton>Документация</BlackButton>
              </Link>
            </div>
          </Container>
        }
      />
      <Route
        path={getPath("/main")}
        element={
          <PageWrapper>
            <Header />

            <FirstScreen />

            <Container>
              <Search />

              <PurchaseList>
                <PurchaseItem />
                <PurchaseItem />
                <PurchaseItem />
              </PurchaseList>

              <InfoBlock />

              <TermsBlock />
            </Container>

            <Header bottom />

            {/* <DevGrids/> */}
          </PageWrapper>
        }
      />
      <Route path={getPath("/docs")} element={<DocsPage />} />
    </Routes>
  );
};
