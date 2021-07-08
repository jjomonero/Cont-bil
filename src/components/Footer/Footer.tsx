import {
  FooterNavigation,
  FooterDescription,
  FooterText,
} from "./FooterNavigation/FooterNavigation";
import styles from "./footer.module.scss";

export function Footer(props) {
  return (
    <>
      <div className={styles.container}>
        <FooterDescription title="Campo Mourão, PR" strong="">
          Av. Irmãos Pereira <br />
          670 - Centro 87301-010 <br />
          E-mail:<strong> Methos@contabilidade.com</strong>
        </FooterDescription>

        <div className={styles.links}>
          <FooterNavigation> Home </FooterNavigation>
          <FooterNavigation> Quem somos </FooterNavigation>
          <FooterNavigation> Serviços contábeis </FooterNavigation>
          <FooterNavigation> Contato </FooterNavigation>
        </div>

        <FooterText
          title="Não ter uma contabilidade pode quebrar sua empresa"
          strong=""
        >
          De acordo com o boletim de junho do Mapa de Empresas, mais de 300 mil
          empresas tiveram que fechar suas portas nos primeiros quatro meses de
          2020. Mas, a curva de aprendizado não é o único fator para que as
          empresas quebrem.
          <br />
          <br /> Há três principais motivos para que isso aconteça: falta de
          planejamento, má gestão empresarial e mentalidade do empreendedor.
        </FooterText>
      </div>
      <p className={styles.p}>© Copyright 2021. Ethos Contabilidade</p>
    </>
  );
}
