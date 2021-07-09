/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

import styles from "./perfilCard.module.scss";

type PerfilCardProps = {
  title: string;
  description: string;
  src: any;
  cargo: string;
  width: number;
  height: number;
};

export function PerfilCard({
  src,
  title,
  description,
  cargo,
  width,
  height,
}: PerfilCardProps) {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={src}
        width={width}
        height={height}
        objectFit="cover"
      />
      <h3>{cargo}</h3>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
