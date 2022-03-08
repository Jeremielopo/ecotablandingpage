import Header from "./components/molecules/Header";
import { Block } from "./components/atoms/Container";
import ToAppCTA from "./components/molecules/ToAppCTA";
import PictureCTA from "./components/molecules/PictureCTA";
import Footer from './components/molecules/Footer'

function App() {
  return (
    <>
      <Header />
      <Block />
      <ToAppCTA />
      <PictureCTA />
      <Footer/>
    </>
  );
}

export default App;
