import Header from "./components/molecules/Header";
import { Block } from "./components/atoms/Container";
import Downloadlogo from "./components/molecules/Downloadlogo";
import { ReactComponent as Handphone } from "./components/atoms/images/hand.svg";
import Footer from './components/molecules/Footer'

function App() {
  return (
    <>
      <Header />
      <Block />
      <Downloadlogo />
      <Handphone />
      <Footer/>
    </>
  );
}

export default App;
