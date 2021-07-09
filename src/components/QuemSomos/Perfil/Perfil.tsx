import { PerfilCard } from "./PerfilCard/PerfilCard";
import Rodrigo from "../../../../public/assets/perfil-rodrigo.jpeg";
import Karine from "../../../../public/assets/perfil-karine.jpeg";
import Matheus from "../../../../public/assets/perfil-matheus.jpeg";
import Pamela from "../../../../public/assets/perfil-pamela.jpeg";
import Gabriel from "../../../../public/assets/perfil-gabriel.jpeg";
import styles from "./perfil.module.scss";

export function Perfil(props) {
  return (
    <div className={styles.container}>
      <h1>Nossos Profissionais</h1>
      <div className={styles.presidencia}>
        <PerfilCard
          width={150}
          height={150}
          src={Rodrigo}
          title="Rodrigo Lopes Pitach"
          cargo="Presidente"
          description="Presidente da Ethos Contabilidade, e nas horas vagas degustador de vinho, tintin!"
        />
      </div>

      <div className={styles.colaboradores}>
        <PerfilCard
          width={100}
          height={100}
          src={Pamela}
          title="Pamela Bianca Bassaco"
          cargo="Acessora contábil"
          description=""
        />

        <PerfilCard
          width={100}
          height={100}
          src={Karine}
          title="Karine Santos de Farias "
          cargo="Supervisora contábil"
          description=""
        />
      </div>

      <PerfilCard
        width={100}
        height={100}
        src={Gabriel}
        title="Gabriel Oliveira sontag"
        cargo="Contador"
        description=""
      />

      <PerfilCard
        width={100}
        height={100}
        src={Matheus}
        title="Matheus Delain"
        cargo="Contador"
        description=""
      />
    </div>
  );
}
