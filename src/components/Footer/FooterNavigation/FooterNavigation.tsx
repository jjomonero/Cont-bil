import styles from "./footerNavigation.module.scss";

export function FooterNavigation(props) {
  return <button className={styles.button} {...props} />;
}

type CardAtributesProps = {
  title: string;
  children: any;
  strong: string;
};

export function FooterDescription({
  title,
  children,
  strong,
}: CardAtributesProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.children}>{children}</p>
      <strong>{strong}</strong>
    </div>
  );
}

export function FooterText({ title, children, strong }: CardAtributesProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.children}>{children}</p>
      <strong>{strong}</strong>
    </div>
  );
}
