import { Footer } from '@/widgets/footer/ui';
import { Header } from '@/widgets/header/ui';
import { GenreList } from '@/widgets/genre-list/ui';
import styles from './main.module.scss';
import { useState } from 'react';

export const Main = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const handleToggleTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className={`${styles.wrapper} ${isLightTheme ? styles.light : styles.dark}`}>
      <Header lightTheme={isLightTheme} onToggleTheme={handleToggleTheme} />
      <main>
        <div className={styles.games__container}>
          <h1 lang="ru">Давай оценим!</h1>
          <GenreList />
        </div>
      </main>
      <Footer />
    </div>
  );
};
