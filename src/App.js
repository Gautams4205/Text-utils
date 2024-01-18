import { useState } from "react";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
import About from "./Components/About";

function App() {
  const [Mode, SetMode] = useState("light");
  const [alert, Setalert] = useState(null);
  const showalert = (message, type) => {
    Setalert({ message: message, type: type });
    setTimeout(() => {
      Setalert(null);
    }, 2000);
  };

  const togglemode = () => {
    if (Mode === "light") {
      SetMode("dark");
      document.body.style.backgroundColor = "#042743";
      showalert("! Dark mode Enable", "success");
    } else {
      SetMode("light");
      document.body.style.backgroundColor = "white";
      showalert("! Light mode Enable", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          about="About"
          mode={Mode}
          togglemode={togglemode}
          showalert={showalert}
          ></Navbar>
        <Alert alert={alert} />
          <Routes>
          <Route exact path="/about" element={<About mode={Mode}></About>}>
            
          </Route>
          <Route exact path="/" element={<Textform mode={Mode} showalert={showalert}></Textform>}>
            
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
