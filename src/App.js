import logo from "./logo.svg";
import Header from "./components/Header";
import Title from "./components/Title";
import AboutMe from "./components/AboutMe";
import Advantage from "./components/Advantage";
import Education from "./components/Education";
import MyProject from "./components/MyProject";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Title />
      <AboutMe />
      <Advantage />
      <Education />
      <MyProject />
    </div>
  );
}

export default App;
