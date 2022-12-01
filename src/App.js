import { Route, Switch, useLocation } from "react-router";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Documents from "./pages/Documents";
import ContactUs from "./pages/ContactUs";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

const Pages = styled.div`
  margin-left: 80px;
  margin-right: 80px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: 'Sacramento', cursive;
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h2 {
    font-family: "Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif;
    font-size: 20px;
  }
`;

function App() {
  const location = useLocation();
  return (
    <>
      <Sidebar />
      <Pages>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/documents" component={Documents} />
          </Switch>
        </AnimatePresence>
      </Pages>
    </>
  );
}

export default App;