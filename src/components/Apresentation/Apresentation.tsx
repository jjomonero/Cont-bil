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
          Somos um escritório de contabilidade que entregamos 100% do que sua
          empresa precisa para o Governo. Usamos tecnologia para você ter mais
          tempo e se precisar aprender a gerir melhor sua empresa, nós também te
          ajudamos. A Apex Legends se preocupa de verdade com seu crescimento. É
          isso que você busca? Acesse abaixo.
        </p>
      </div>

      <div className={styles.buttons}>
        <InputApresentation>QUERO ABRIR MINHA EMPRESA</InputApresentation>
        <InputApresentation>JÁ TENHO UMA EMPRESA</InputApresentation>
        <InputApresentation>VANTAGENS DE CONTRATAR</InputApresentation>
      </div>
    </div>
  );
}
