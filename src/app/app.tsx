import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Main } from '@/pages/main/ui';
import { AppRoute } from '@/shared/const';
import { NotFound } from '@/pages/not-found/ui';
import { Game } from '@/pages/game/ui';
import { Genre } from '@/pages/genre/ui';

//Пофиксить ошибку stylelint в eslint

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />} />
        <Route path={AppRoute.Genre} element={<Genre />} />
        <Route path={AppRoute.Game} element={<Game />} />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
