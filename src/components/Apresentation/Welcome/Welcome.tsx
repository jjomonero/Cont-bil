import styles from "./welcome.module.scss";
import Logo from "../../../../public/assets/oop.png";
import Image from "next/image";

export function Welcome(props) {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={Logo}
        width="1108"
        height="460"
        alt="Welcome"
        objectFit="cover"
      />
    </div>
  );
}
