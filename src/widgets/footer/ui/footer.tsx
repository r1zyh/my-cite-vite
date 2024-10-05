export function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__contacts">
          <ul className="contacts__list">
            <li className="contacts__list--item">
              <a href="https://t.me/kananev99" aria-label="Telegram">
                <img src="/src/assets/telegram.svg" alt="telegram image" />
              </a>
            </li>
            <li className="contacts__list--item">
              <a href="https://github.com/r1zyh" aria-label="github">
                <img src="/src/assets/github.svg" alt="github image" />
              </a>
            </li>
            <li className="contacts__list--item">
              <a href="https://vk.com/id296683026" aria-label="VK">
                <img src="/src/assets/vk.svg" alt="VKontakte image" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
