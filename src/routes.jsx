import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles"
import { routes } from "./router.routes";

let getRoutes = () => {
  let rotas = routes
    .filter((item) => {
      return item.component;
    })
    .map((item) => {
      return <Route key={item.id} component={item.component} path={"/" + item.route} exact />;
    });
  console.log(rotas);
  return rotas;
};

const Routes = () => {
  return (
    <BrowserRouter>
      <GlobalStyle>
      </GlobalStyle>
      {getRoutes()}
    </BrowserRouter>
  );
};

export default Routes;
