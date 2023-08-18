import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import '@fontsource/kanit/400.css';
import '@fontsource/kanit/500.css';
import '@fontsource/roboto-mono/400.css';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router basename="/">
      <Provider store={store}>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Provider>
    </Router>
  </React.StrictMode>
);
