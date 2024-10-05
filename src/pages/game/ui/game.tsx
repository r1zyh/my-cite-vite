import { Footer } from "@/widgets/footer/ui";
import { Header } from "@/widgets/header/ui";

export function Game(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <h1>Some Game Page template</h1>
      <Footer />
    </div>
  );
}
