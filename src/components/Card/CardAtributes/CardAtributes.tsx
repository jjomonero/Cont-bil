import Image from "next/image";
import styles from "./cardAtributes.module.scss";

type CardAtributesProps = {
  title: string;
  children: any;
  src: any;
  icon: string;
  strong: string;
  id: string;
};

export function CardAtributes({
  title,
  children,
  src,
  icon,
  strong,
  id,
}: CardAtributesProps) {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={src}
        alt={icon}
        width="450"
        height="300"
      />
      <a href={id}></a>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.children}>{children}</p>
      <strong>{strong}</strong>
    </div>
  );
}
