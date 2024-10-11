import { Footer } from '@/widgets/footer/ui';
import { Header } from '@/widgets/header/ui';
import { GenreList } from '@/widgets/genre-list/ui';

export const Main = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="games__container">
          <h1 lang="ru">Выбери игру на оценку!</h1>
          <GenreList />
        </div>
      </main>
      <Footer />
    </div>
  );
};
