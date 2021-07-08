import styles from "./headerInformation.module.scss";

type HeaderInformationProps = {
  span: string;
  strong: string;
  children: any;
};
export function HeaderInformation({
  span,
  strong,
  children,
}: HeaderInformationProps) {
  return (
    <div className={styles.container}>
      <span className={styles.span}> {children} </span>

      <div className={styles.strong}>
        <span> {span} </span>
        <strong> {strong} </strong>
      </div>
    </div>
  );
}
