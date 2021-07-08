import Link from "next/link";

import styles from "./navInput.module.scss";

export function NavInput(props) {
  return (
    <div>
      <button className={styles.button} {...props} />
    </div>
  );
}

export function NavInputSelect(props) {
  return (
    <div>
      <select
        className={styles.button}
        disabled={false}
        name="serviços"
        id="serviços"
      >
        <Link href="#" passHref>
          <option disabled>Serviços contábeis</option>
        </Link>

        <Link href="#a_contabil" passHref>
          <option>Acessoria contábil</option>
        </Link>

        <Link href="#c_contabil" passHref>
          <option>consultoria contábil</option>
        </Link>

        <Link href="#a_fiscal" passHref>
          <option>acessoria fiscal</option>
        </Link>

        <Link href="https://google.com" passHref>
          <option>Abertura de empresa</option>
        </Link>
      </select>
    </div>
  );
}
