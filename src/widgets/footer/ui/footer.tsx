import styles from './footer.module.scss';

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <ul className={styles.contacts__list}>
          <li className={styles['contacts__list--item']}>
            <a href="https://t.me/kananev99" aria-label="Telegram">
              <img src="/src/assets/telegram.svg" alt="telegram image" width={24} height={24} />
            </a>
          </li>
          <li className={styles['contacts__list--item']}>
            <a href="https://github.com/r1zyh" aria-label="github">
              <img src="/src/assets/github.svg" alt="github image" width={24} height={24} />
            </a>
          </li>
          <li className={styles['contacts__list--item']}>
            <a href="https://vk.com/id296683026" aria-label="VK">
              <img src="/src/assets/vk.svg" alt="VKontakte image" width={24} height={24} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
