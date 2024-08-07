import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/Home/Home";
import MainPage from "./components/MainPage/MainPage";
import About from "./Pages/About/About";
import Livre from "./Pages/Livre/Livre";
import Concert from "./Pages/Concert/Concert";
import Shop from "./Pages/Shop/Shop";
import Cursor from "./components/Cursor/Cursor";
import Navbar from "./components/NavBar/Navbar";
import Test from "./Pages/Test/Test";
import Header from "./components/Header/Header";
import Lecteur from "./components/Lecteur/Lecteur";
import Join from "./Pages/Join/Join";

const App = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col h-[100vh] justify-between items-center">
      {location.pathname === "/" ? <></> : <Header />}
      <Lecteur />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/livre" element={<Livre />} />
          <Route path="/concert" element={<Concert />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/join" element={<Join />} />
          {/*<Route path="/test" element={<Test />} />
          <Route path="*" element={<NotFound />} />{" "} */}
        </Routes>
      </AnimatePresence>
      {location.pathname === "/" ? <></> : <Navbar />}
      <Cursor />
    </div>
  );
};

const NotFound = () => {
  return (
    <div>
      <h2>404 - Not Found</h2>
    </div>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
