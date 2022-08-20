import { ToastContainer } from "react-toastify";
import SideBar from "../Component/SideBar/SideBar";
import TopBar from "../Component/TopBar/TopBar";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <TopBar />
      <SideBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
