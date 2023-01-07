import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./GlobalStyle/style";
import { MainGallery } from "./pages/main";
import { Provider } from "react-redux";
import { store } from "./store/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <MainGallery />
    </Provider>
  </React.StrictMode>
);
