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
          <Link href="/" passHref>
            <NavInput>Home</NavInput>
          </Link>

          <Link href="/quem_somos" passHref>
            <NavInput>Quem Somos</NavInput>
          </Link>

          <NavInputSelect />

          <Link href="#" passHref>
            <NavInput>Contato</NavInput>
          </Link>
        </div>
      </div>
    </>
  );
}
