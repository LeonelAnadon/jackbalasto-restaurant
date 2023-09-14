import "./app.scss";
import AppRouter from "./router";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": { name: string; [key: string]: any };
    }
  }
}
function App() {
  return <AppRouter />;
}

export default App;
