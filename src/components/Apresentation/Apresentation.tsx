import { InputApresentation } from "./Input/InputApresentation";
import { Welcome } from "./Welcome/Welcome";
import styles from "./apresentation.module.scss";

export function Apresentation() {
  return (
    <div className={styles.container}>
      <Welcome />
      <div className={styles.description}>
        <h1>Escritório de Contabilidade</h1>
        <p>
          Somos um escritório de contabilidade que vem se firmando no mercado de
          trabalho atual, trazendo inovação e tecnologia para simplificar a vida
          do empreendedor contando também com especialistas na área de
          consultoria, assessoria contábil e gestão financeira focado no sucesso
          do empreendimento fazendo funcionar de forma consistente
          descomplicando abertura de empresas conduzindo todo seu processo e
          planejamento tributário focando no seu sucesso.
        </p>
      </div>

      <div className={styles.buttons}>
        <InputApresentation href="/">
          QUERO ABRIR MINHA EMPRESA
        </InputApresentation>
        <InputApresentation href="/">JÁ TENHO UMA EMPRESA</InputApresentation>
        <InputApresentation href="/">VANTAGENS DE CONTRATAR</InputApresentation>
      </div>
    </div>
  );
}
