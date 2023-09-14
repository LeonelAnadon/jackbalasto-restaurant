import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import 'swiper/swiper-bundle.css';
// import "swiper/modules/autoplay.css";
// import "swiper/modules/pagination/pagination.scss";
// import "swiper/modules/autoplay/autoplay.scss";
// import "swiper/modules/effect-fade.css";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error("Root element not found.");
}

ReactDOM.createRoot(root!).render(<App />);
