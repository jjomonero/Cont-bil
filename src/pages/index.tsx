import { Apresentation } from "../components/Apresentation/Apresentation";
import { Consult } from "../components/Consult/Consult";
import { Card } from "../components/Card/Card";
export default function Home() {
  return (
    <div>
      <header>
        <Apresentation />
      </header>
      <main>
        <Consult />
        <Card />
      </main>
    </div>
  );
}
