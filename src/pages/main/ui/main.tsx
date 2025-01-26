import { Footer } from '@/widgets/footer/ui';
import { Header } from '@/widgets/header/ui';
import { GenreList } from '@/widgets/genre-list/ui';
import styles from './main.module.scss';

export const Main = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <div className={styles.games__container}>
          <h1>GRating</h1>
          <GenreList />
        </div>
      </main>
      <Footer />
    </div>
  );
};
