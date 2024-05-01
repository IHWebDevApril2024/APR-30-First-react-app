// CSS
import "./App.css";

// COMPONENTS
import ElementsContainer from "./components/ElementsContainer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

// IMAGES
import { avelinoImage, bonCrasherImage, pancraciaImage, kilikoloImage } from "./assets";

function App() {
  return (
    <>
      {/* THIS IS CALLED FRAGMENT <></>
      Fragments are a way to group elements together without adding extra nodes to the DOM.
      */}
      <Header />
      <div className="heros-container">
        {/* This is the way to pass props to a component */}
        <HeroSection name="Pepe the Boncrahser" image={bonCrasherImage} />
        <HeroSection name="Pancracia the Waterbender" image={pancraciaImage} />
        {/* We can also divide it in multiple lines */}
        <HeroSection
          name="Avelino the JavaScript prodigy"
          image={avelinoImage}
        />
        <HeroSection name="Kilikolo the chill swimmer" image={kilikoloImage} />
      </div>
      <ElementsContainer>
        {/* This is the way to pass children to a component 
          inside the component we can access the children with props.children
        */}
        <p>🔥</p>
        <p>🍃</p>
        <p>🩴</p>
        <p>💧</p>
      </ElementsContainer>
    </>
  );
}

export default App;
