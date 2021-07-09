import styles from "./QSDescription.module.scss";

import { Perfil } from "../Perfil/Perfil";

export function QSDescription(props) {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 style={{ color: "#5c9a89" }}>Somos uma Contabilidade online</h1>
        <p style={{ color: "#666", fontSize: "18px" }}>
          Somos uma Contabilidade online com foco em Gestão Empresarial e
          Tributária. Nosso escopo excede a entrega de conformidade legal
          contribuindo de forma efetiva na Gestão Empresarial através dos
          departamentos de Contabilidade, Fiscal/Tributário, Trabalhista e
          Societário.
          <br />
          <br /> Criada em 2021, a Ethos contabilidade veio para contribuir na
          integração do cliente com informações relevantes sobre seu negócio que
          corroboram com seu crescimento e sustentabilidade empresarial.
          <br />
          <br /> Atuamos por células segmentadas, ou seja, por tipo de
          atividades dos nossos clientes. Isso além de criar uma pessoalidade no
          atendimento, colabora para tomada de decisão rápida e totalmente
          alinhadas aos objetivos empresariais dos nossos clientes.
        </p>
        <br />
        <br />
        <h1 style={{ color: "#5c9a89" }}>Nosso Objetivo</h1>
        <p style={{ color: "#666", fontSize: "18px" }}>
          Ser referência em apoio a educação empreendedora para as micro,
          pequenas e médias empresas brasileiras. além de ser uma empresa com
          excelência técnica na parte contábil, fiscal e trabalhista,
          proporcionando atendimento a todas as necessidades de empreender e
          controlar/equilibrar as finanças do nosso cliente.
        </p>
        <br />
        <br />
        <h1 style={{ color: "#5c9a89" }}>Moral da Empresa</h1>
        <p style={{ color: "#666", fontSize: "18px" }}>
          Na Ethos Contabilidade acreditamos que a Empresa de Contabilidade é um
          parceiro estratégico para a gestão empresarial e financeira dos nossos
          clientes, com isso, os valores que permeiam nossa conduta são: ética
          profissional, transparência na informação, educação empresarial
          continuada, cumprimento dos acordos firmados, interação harmoniosa
          entre clientes e colaboradores da Ethos.
        </p>
      </div>
      <div style={{ marginTop: "6rem" }}>
        <Perfil />
      </div>
    </div>
  );
}
