import { CardAtributes } from "./CardAtributes/CardAtributes";
import { CardAtributesHorizontal } from "./CardAtributesHorizontal/CardAtributesHorizontal";
import Apex from "../../../public/assets/apex.png";
import Admin_1 from "../../../public/assets/admin_1.jpg";
import Admin_7 from "../../../public/assets/admin_7.jpg";
import Admin_2 from "../../../public/assets/admin_2.png";
import Admin_3 from "../../../public/assets/admin_3.png";
import Admin_4 from "../../../public/assets/admin_4.jpg";
import Admin_5 from "../../../public/assets/admin_5.jpg";
import Admin_6 from "../../../public/assets/admin_6.jpg";
import Admin_8 from "../../../public/assets/admin_8.jpg";
import Admin_9 from "../../../public/assets/admin_9.jpg";
import Admin_10 from "../../../public/assets/admin_10.jpg";
import Admin_11 from "../../../public/assets/admin_11.png";

import styles from "./card.module.scss";
import React from "react";

export function Card(props) {
  return (
    <>
      <div className={styles.horizontal}>
        <CardAtributesHorizontal
          id=""
          src={Admin_7}
          title="O que é contabilidade"
          strong=""
          icon="image"
        >
          A principal função da contabilidade, não é adquirida apenas com o
          estudo da ciência contábil, mas por uma finalidade ainda mais nobre e
          seu objetivo ainda mais profundo, que é salvar empresas. Quando
          entendemos a principal função de uma empresa contábil, sabemos que
          nosso principal objetivo se transforma e algo com uma finalidade ainda
          maior.
          <br />
          <br />
          Quais são nossos objetivos específicos, considerando que atuamos como
          escritório contábil e não como coaching empresarial?
          <br />
          <br />
          Acreditamos simplesmente no pleno papel e função do contador.
        </CardAtributesHorizontal>
      </div>

      <div className={styles.cardContainer}>
        <CardAtributes
          id=""
          title="Serviços contábeis"
          strong=""
          icon="image"
          src={Admin_1}
        >
          A Methos Contabilidade oferece
          <strong>
            <a href="#"> serviços contábeis para micro empresas</a>
          </strong>
          , pequenas empresas e médias empresas em todo o Brasil. Oferecemos
          suporte online para empresas de todos o Brasil. Conta com nossos
          serviços contábeis especializados por segmento.
        </CardAtributes>

        <CardAtributes
          id=""
          title="Consultoria empresarial"
          strong=""
          icon="image"
          src={Admin_2}
        >
          Uma Consultoria empresarial pode ser o elemento que falta para que sua
          empresa alcance o sucesso. Especialistas que conhecem os desafios das
          microempresas e pequenas empresas podem ajudá-las a crescer e se
          posicionar. A Methos Contabilidade vai levar sua empresa para o
          próximo nível de organização e rentabilidade. Conheça sobre nossa
          <strong>
            <a href="#"> consultoria contábil </a>
          </strong>
          especializada.
        </CardAtributes>

        <CardAtributes
          id=""
          title="Gestão financeira"
          strong=""
          icon="image"
          src={Admin_8}
        >
          A Soluzione lhe ajuda com o controle das finanças e a análise dos
          resultados financeiros de sua empresa. A gestão financeira combina
          processo, foco e disciplina e lhe ajuda a controlar e utilizar os
          recursos financeiros da melhor forma. Além disso, fornece informações
          estratégicas com base em dados para que a gestão de seu negócio seja
          mais eficiente.
        </CardAtributes>

        <CardAtributes
          id=""
          title="Acessoria contábil"
          strong=""
          icon="image"
          src={Admin_4}
        >
          Além de realizar o planejamento inicial com o empreendedor, a
          Soluzione também conduz todo o processo de abertura da empresa. Desde
          a coleta de informações e documentação até a emissão da primeira nota
          fiscal, a Soluzione dá todo o suporte ao novo empresário. Por meio de
          estudos de viabilidade, determina a estrutura societária e o regime
          tributário mais adequados, sempre com vistas à economia do
          empreendedor.
        </CardAtributes>

        <CardAtributes
          id=""
          title="Mentalidade do empreendedor"
          strong=""
          icon="image"
          src={Admin_5}
        >
          Empresários de sucesso sabem a importância de ter uma contabilidade
          para sua empresa. Ter ajuda especializada certamente encurtará seu
          trajeto rumo ao sucesso. Não tente trilhar esse caminho sozinho. Fale
          agora com um dos consultores da Soluzione e descubra todas as formas
          como nossa empresa pode te ajudar.
        </CardAtributes>

        <CardAtributes
          id=""
          title="Revisão tributária"
          strong=""
          icon="image"
          src={Admin_6}
        >
          Mesmo as pequenas empresas, tem a possibilidade re pagar menos
          impostos de forma legal. Nós sabemos quanto é difícil pagar uma carga
          tributária alta. Nós também sofremos com isso. Não deixe de contratar
          nossa consultoria para reduzir sua carga tributária.
        </CardAtributes>
      </div>

      <div className={styles.horizontal}>
        <CardAtributesHorizontal
          id=""
          src={Admin_11}
          title="O Contador"
          strong=""
          icon="image"
        >
          Durante muito tempo, o contador era apenas um emissor de guias para
          seus clientes, mas felizmente isso mudou no Brasil. Para você que
          precisa encontrar um escritório de contabilidade e não sabe como
          escolher, segue a dica mais importante: O Contador ou a empresa de
          contábil, precisa ser especializado em seu segmento. Aqui na
          <strong>
            <a href="#"> Ethos Contabilidade</a>
          </strong>
          , nós temos contadores especializados em sua área de atuação. Se busca
          um contador especializado, nós iremos te ajudar.
        </CardAtributesHorizontal>
      </div>

      <div className={styles.cardContainer}>
        <CardAtributes
          id=""
          title="Planejamento tributário"
          strong=""
          icon="image"
          src={Admin_9}
        >
          Para que uma empresa possa funcionar no Brasil, é necessário que o
          empreendedor arque com alguns tributos. Há diversos tributos federais,
          estaduais e municipais, mas nem todas as empresas são obrigadas a
          pagarem todos. IRPJ, IPI, PIS, COFINS, ICMS, ISS e INSS. <br />É
          necessário que o empreendedor conheça todos os tributos com os quais
          precisará arcar. A partir de então, poderá incluí-los no planejamento
          financeiro de sua operação. Conte com especialistas que o auxiliarão a
          realizar um planejamento detalhado.
        </CardAtributes>

        <CardAtributes
          id="a-emp"
          title="Abertura de empresa"
          strong=""
          icon="image"
          src={Admin_10}
        >
          Além de realizar o planejamento inicial com o empreendedor, a Ethos
          também conduz todo o processo de abertura da empresa. Desde a coleta
          de informações e documentação até a emissão da primeira nota fiscal, a
          Ethos dá todo o suporte ao novo empresário. Por meio de estudos de
          viabilidade, determina a estrutura societária e o regime tributário
          mais adequados, sempre com vistas à
          <strong>
            <a href="#"> economia do empreendedor</a>
          </strong>
          .
        </CardAtributes>

        <CardAtributes
          id=""
          title="Consultoria contábil"
          strong=""
          icon="image"
          src={Admin_1}
        >
          Nosso escritório contábil, trabalha com consultoria contábil
          especializada. Isso significa que atuamos de forma consultiva para
          ajudar sua empresa a crescer e ter rentabilidade.
        </CardAtributes>
      </div>

      <div className={styles.horizontal}>
        <CardAtributesHorizontal
          id=""
          src={Admin_3}
          title="Digital Especializada "
          strong=""
          icon="image"
        >
          Você pode querer contratar um
          <strong>
            <a href="#"> escritório de contabilidade especializado </a>
          </strong>
          no seu segmento e não encontrar em sua cidade. Com o serviço contábil
          digital, isso não será mais um problema. Aqui na Soluzione Contábil,
          nós atendemos você através de sistemas e de forma online. Também com
          encontros presenciais ou em vídeos através da internet. Se precisa
          contratar uma contabilidade especializada em seu segmento, pode contar
          com a Soluzione Contábil. Somos referência em todo o Brasil.Você pode
          querer contratar um escritório de contabilidade especializado no seu
          segmento e não encontrar em sua cidade. Com o serviço contábil
          digital, isso não será mais um problema. Aqui na Soluzione Contábil,
          nós atendemos você através de sistemas e de forma online. Também com
          encontros presenciais ou em vídeos através da internet. Se precisa
          contratar uma contabilidade especializada em seu segmento, pode contar
          com a Soluzione Contábil. Somos referência em todo o Brasil.
        </CardAtributesHorizontal>
      </div>
    </>
  );
}
