import { ConsultCard } from "./ConsultCard/ConsultCard";
import Icon from "../../../public/assets/ethos.png";
import styles from "./consult.module.scss";

export function Consult() {
  return (
    <div className={styles.container}>
      <ConsultCard title="Whatsapp" icon="icons" src={Icon} />
      <ConsultCard title="Solicite um orçamento" icon="icons" src={Icon} />
      <ConsultCard title="Preciso de consultoria" icon="icons" src={Icon} />
    </div>
  );
}
