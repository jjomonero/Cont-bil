import Image from "next/image";
import styles from "./cardAtributesHorizontal.module.scss";

type CardAtributesHorizontalProps = {
  title: string;
  children: any;
  src: any;
  icon: string;
  strong: string;
  id: string;
};

export function CardAtributesHorizontal({
  title,
  children,
  src,
  icon,
  strong,
  id,
}: CardAtributesHorizontalProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {title}
        <p className={styles.children}>{children}</p>
        <strong>{strong}</strong>
      </h1>
      {id}
      <Image
        className={styles.image}
        alt={icon}
        width="250"
        height="200"
        src={src}
      />
    </div>
  );
}
