import Link from "next/link";
import { ArrowBackOutlined } from "@material-ui/icons";

import styles from "./whatsapp.module.scss";

export function Whatsapp(props) {
  return (
    <div className={styles.container}>
      <strong>
        <ArrowBackOutlined />
      </strong>
      <Link href="//wa.me/5544998283636" passHref>
        <button>
          <span>Whatsapp </span>
        </button>
      </Link>
    </div>
  );
}
