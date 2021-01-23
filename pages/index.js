import Head from "next/head";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//Layouts
import Home from "../layout/Home";
import Catalogo from "../layout/Catalogo";

//Components
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";

export default function Index() {
  //Hooks
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="app">
      <Head>
        <title>Classic Rides</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bitter:wght@100;300;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Router>
        <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        <AnimatePresence exitBeforeEnter>
          {menuOpen && <Menu />}
        </AnimatePresence>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <Route path="/" exact component={Home}></Route>
                <Route path="/catalogo" component={Catalogo}></Route>
              </Switch>
            </AnimatePresence>
          )}
        />
      </Router>
    </div>
  );
}
