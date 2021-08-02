import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/ethos.png";
import { NavInput, NavInputSelect } from "./Input/NavInput";
import { HeaderInformation } from "./HeaderInformaton/HeaderInformation";
import {
  WhatsApp,
  AccessTime,
  MailOutline,
  LocationOn,
} from "@material-ui/icons";

import styles from "./header.module.scss";

export function Header() {
  return (
    <>
      <div className={styles.informationHeader}>
        <HeaderInformation span="Whatsapp" strong="(44) 99828-3636">
          <WhatsApp fontSize="small" />
        </HeaderInformation>
        <HeaderInformation span="Atendimento" strong="08:00 - 18:00">
          <AccessTime fontSize="small" />
        </HeaderInformation>

        <HeaderInformation span="E-mail" strong="Ethoscontabilidade@gmail.com">
          <MailOutline fontSize="small" />
        </HeaderInformation>

        <HeaderInformation span="Localização" strong="Campo Mourão, PR">
          <LocationOn fontSize="small" />
        </HeaderInformation>
      </div>

      <div className={styles.container}>
        <Image
          className={styles.logo}
          src={Logo}
          alt="logo"
          width="200"
          height="50"
          objectFit="cover"
        />

        <div className={styles.buttons}>
          <NavInput href={"/"} title={"Home"} />

          <NavInput href={"/quem_somos"} title={"Quem Somos"} />

          <NavInputSelect />

          <NavInput href={"/Contato"} title={"Contato"} />
        </div>
      </div>

      <div className={styles.menuResponsive}>
        <Link href="/" passHref>
          Home
        </Link>

        <Link href="/quem_somos" passHref>
          Quem Somos
        </Link>

        <Link href="/Contato" passHref>
          Contato
        </Link>
      </div>
    </>
  );
}
