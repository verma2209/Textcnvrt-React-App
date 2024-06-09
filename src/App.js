import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Show from "./components/Show";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Contact";

function App() {
  // color change krne k liye
  const [mode, setMode] = useState("light");

  // const for image
  const [imagesrc, setimagesrc] = useState("day.png");

  //alert ka state start
  const [alert, setAlert] = useState(null);
  //  alert ka function//

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  //toggleMood function
  const toggleMode = () => {
    if (mode === "light") {
      setMode("#042743");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been Enable ", "success");
      setimagesrc("download.png");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enable ", "success");
      setimagesrc("day.png");
    }
  };
  return (
    <>
      <Router>
        {/* onclick lgaya h button mai toggleMode function use krne liye navbar.js mai props mode h */}
        <Navbar mode={toggleMode} imagesrc={imagesrc} />

        <Show alert={alert} />

        {/* react router start jo content change karega */}

        <Switch>
          {/* ye about ka route start */}
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/contact">
            <Contact mode={mode} />
          </Route>

          {/* ye about ka route end */}

          {/* ye home ka route start ye / hona chahiye */}
          <Route exact path="/">
            {/* props lgaya h mode use krne liye navbar.js mai */}
            <Textform mode={mode} showAlert={showAlert} />
          </Route>

          {/* ye about ka route end */}
        </Switch>

        {/* react router end */}
      </Router>
    </>
  );
}
export default App;
