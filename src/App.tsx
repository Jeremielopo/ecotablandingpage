import Header from "./components/molecules/Header";
import { Block } from "./components/atoms/LandingTextContainer";
import ToAppCTA from "./components/molecules/ToAppCTA";
import PictureCTA from "./components/molecules/PictureCTA";
import Footer from "./components/molecules/Footer";
import Textbloc from "./components/atoms/Textbloc";

function App() {
  return (
    <>
      <Header />
      <Block />
      <ToAppCTA />
      <PictureCTA />
      <Textbloc
        title="feature 1"
        text="Ecotab dispose d’un moteur interne pour assurer une diffusion régulée des Tabs de chlore, ainsi vous assurez une diffusion bien continue ni trop rapide ni trop lent. En plus ecotab  peut tenir compte de la température de la météo et de l’activité détectée de dans votre bassin pour encore mieux moduler la diffusion des désinfectants (tabs de chlore) . Ecotab anime aussi votre bassin avec un jet d’eau ludique, clock, stimulateur de longueur de bassin, et tient le journal de vos activités aquatique avec son détecteur de vagues. "
        feature="one"
      />
      <Textbloc
        title="feature 2"
        text="Grâce aux données récoltées sur une période allant jusqu’à 90 jours. Vous avez la possibilité de visualiser des données telles que les fluctuations de la température de l’eau , la variation des vagues ainsi que des prévisions sur celle-ci. "
        feature="two"
      />
      <Textbloc title="feature 3"
      text='Dans vos réglages vous aurez la possibilité de programmer la diffusion du chlore pour une durée de plusieurs jours. '
      feature="three" />
      <Textbloc title="feature 4"
      text='remplissez les caractéristique de votre piscine pour avoir un suivi plus précis de votre piscine.'
      feature="four" />
      <Footer />
    </>
  );
}

export default App;
