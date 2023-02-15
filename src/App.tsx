import { Header } from "./components/Header";
import "./app.css";
import { CustomSection } from "./components/Section";

export function App() {
  return (
    <div className="container">
      <Header />

      <CustomSection
        title="novo title de apresentação"
        description="nova description da rota"
        img=""
        id="intro"
      />
      <CustomSection
        title="novo title de apresentação"
        description="nova description da rota"
        img=""
        id="info"
      />
      <CustomSection
        title="novo title de apresentação"
        description="nova description da rota"
        img=""
        id="price"
      />
      <CustomSection
        title="novo title de apresentação"
        description="nova description da rota"
        img=""
        id="footer"
      />
    </div>
  );
}
