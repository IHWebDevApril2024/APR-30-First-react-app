// CSS
import "./App.css";

// COMPONENTS
import ElementsContainer from "./components/ElementsContainer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

// IMAGES
import avelinoImage from "./assets/wizard.webp";
import bonCrasherImage from "./assets/dwarf.png";
import kilikoloImage from "./assets/octopus.webp";
import pancraciaImage from "./assets/clairvoyant-ball.webp";

function App() {
  return (
    <>
      {/* THIS IS CALLED FRAGMENT <></>*/}
      <Header />
      <div className="heros-container">
        <HeroSection name="Pepe the Boncrahser" image={bonCrasherImage} />
        <HeroSection name="Pancracia the Waterbender" image={pancraciaImage} />
        <HeroSection
          name="Avelino the JavaScript prodigy"
          image={avelinoImage}
        />
        <HeroSection name="Kilikolo the chill swimmer" image={kilikoloImage} />
      </div>
      <ElementsContainer>
        <p>🔥</p>
        <p>🍃</p>
        <p>🩴</p>
        <p>💧</p>
      </ElementsContainer>
    </>
  );
}

export default App;
