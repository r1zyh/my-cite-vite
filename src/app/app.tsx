import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "../pages/main/ui/main";
import { AppRoute } from "../shared/const";
import { NotFound } from "../pages/not-found/ui";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />} />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
