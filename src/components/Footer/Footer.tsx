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
        <div className={styles.description}>
          <FooterDescription title="Campo Mourão, PR" strong="">
            Av. Irmãos Pereira <br />
            670 - Centro 87301-010 <br />
            E-mail:<strong> Methos@contabilidade.com</strong>
          </FooterDescription>
        </div>

        <div className={styles.links}>
          <ul>
            <h3>
              <strong> Navigation</strong>
            </h3>
            <li>
              <a href="">
                <FooterNavigation> Home </FooterNavigation>
              </a>
            </li>
            <li>
              <a href="">
                <FooterNavigation> Quem somos </FooterNavigation>
              </a>
            </li>
            <li>
              <a href="">
                <FooterNavigation> Serviços contábeis </FooterNavigation>
              </a>
            </li>
            <li>
              <a href="">
                <FooterNavigation> Contato </FooterNavigation>
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.text}>
          <FooterText
            title="Não ter uma contabilidade pode quebrar sua empresa"
            strong=""
          >
            De acordo com o boletim de junho do Mapa de Empresas, mais de 300
            mil empresas tiveram que fechar suas portas nos primeiros quatro
            meses de 2020. Há três principais motivos para que isso aconteça:
            falta de planejamento, má gestão empresarial e mentalidade do
            empreendedor.
          </FooterText>
        </div>
      </div>
      <p className={styles.p}>© Copyright 2021. Ethos Contabilidade</p>
    </>
  );
}
