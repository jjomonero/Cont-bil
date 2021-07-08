import styles from "./welcome.module.scss";
import Logo from "../../../../public/assets/ethos.png";
import Image from "next/image";

export function Welcome(props) {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={Logo}
        width="850"
        height="550"
        alt="Welcome"
      />
    </div>
  );
}
