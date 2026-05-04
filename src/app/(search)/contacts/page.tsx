import { PhoneCall } from "lucide-react";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/lib/config/social";
import styles from "./page.module.css";

const ContactsPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className="stack-xl">
        <Image src="/contacts/contacts.svg" alt="Контакты" width={280} height={100} priority />

        <div className="stack">
          <a href="tel:+79198457646" className={styles.link}>
            <PhoneCall /> +7 919 845 7646
          </a>
          {SOCIAL_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-label={item.label}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <Icon className={styles.icon} />
                {item.label}
              </a>
            );
          })}
        </div>
      </div>

      <div className={styles.art}>
        <Image
          className={styles.sign}
          src="/contacts/hero-sign.svg"
          alt="Звони нам с 10:00 до 18:00"
          width={321}
          height={145}
          priority
        />

        <Image
          className={styles.hero}
          src="/contacts/hero.png"
          alt=""
          width={610}
          height={477}
          priority
        />
      </div>
    </div>
  );
};

export default ContactsPage;
