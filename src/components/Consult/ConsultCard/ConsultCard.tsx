import Image from "next/image";
import styles from "./consultCard.module.scss";

type ConsultCard = {
  title: string;
  icon: string;
  src: any;
};

export function ConsultCard({ title, icon, src }: ConsultCard) {
  return (
    <button className={styles.button}>
      <span className={styles.span}> {title} </span>
      <Image
        className={styles.icon}
        src={src}
        alt={icon}
        width="100"
        height="50"
        objectFit="cover"
      />
    </button>
  );
}
