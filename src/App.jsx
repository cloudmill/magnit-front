import { Container } from "./ui/Container/Container";

import { BlackButton } from "./ui/Buttons/Buttons";
import { DocsPage } from "./ui/Pages/Docs";

import { Link, Routes, Route } from "react-router-dom";

import { getPath } from "./utils/getPath";
import { MainPage } from "./ui/Pages/Main";
import { PurchasesPage } from "./ui/Pages/Purchases";
import { PurchaseDetail } from "./ui/Pages/PurchaseDetail";

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
              <Link to={getPath("/purchases")}>
                <BlackButton>Закупки и реализация</BlackButton>
              </Link>
            </div>
            <div style={{ margin: "10px 0" }}>
              <Link to={getPath("/purchase-detail")}>
                <BlackButton>Детальная процедура</BlackButton>
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
      <Route path={getPath("/main")} element={ <MainPage /> } />
      <Route path={getPath("/purchases")} element={ <PurchasesPage /> } />
      <Route path={getPath("/purchase-detail")} element={ <PurchaseDetail /> } />
      <Route path={getPath("/docs")} element={<DocsPage />} />
    </Routes>
  );
};
