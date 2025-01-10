import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Auth } from "./pages/auth";
import { Home } from "./pages/home";
import { Rated } from "./pages/rated";
import { Movie } from "./pages/movie";
import { TvShow } from "./pages/tvshow";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/rated" element={<Rated />}></Route>
          <Route path="/movie/:id" element={<Movie />}></Route>
          <Route path="/tvshow/:id" element={<TvShow />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
