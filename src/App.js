import FindMore from "./components/FindMore";
import Footer from "./components/footer";
import Landing from "./components/landing";
import Nav from "./components/nav";
import Services from "./components/services";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <hr className="w-[150px] mx-auto md:mx-0 md:ml-16  mt-40  border-DarkViolet" />
      <Services />
      <FindMore />
      <Footer />
    </div>
  );
}

export default App;
