import ReactDOM from "react-dom/client";
import Router from "./routers/router";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import "sweetalert2/dist/sweetalert2.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router />
  </Provider>
);
