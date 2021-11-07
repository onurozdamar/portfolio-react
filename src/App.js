import Header from "./pages/mainPage/Header.js";
import Introduction from "./pages/mainPage/Introduction.js";
import MyServices from "./pages/mainPage/MyServices.js";
import AboutMe from "./pages/mainPage/AboutMe.js";
import MyWork from "./pages/mainPage/MyWork.js";
import Footer from "./pages/mainPage/Footer.js";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Introduction></Introduction>
      <MyServices></MyServices>
      <AboutMe></AboutMe>
      <MyWork></MyWork>
      <Footer></Footer>
    </div>
  );
}

export default App;
