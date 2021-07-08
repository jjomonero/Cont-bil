import { ConsultCard } from "./ConsultCard/ConsultCard";
import Apex from '../../../public/assets/apex.png'
import styles from './consult.module.scss'

export function Consult() {
    return (
        <div className={styles.container}>
            <ConsultCard title="Whatsapp" icon="icons" src={Apex}/>
            <ConsultCard title="Solicite um orçamento" icon="icons" src={Apex}/>
            <ConsultCard title="Preciso de consultoria" icon="icons" src={Apex}/>
        </div>
    );
}
