import AnimatedCard from "./components/animatedBorder/AnimatedCard";
import Blob from "./components/blob/Blob";
import CircularMenu from "./components/circularMenu/CircularMenu";
import Drop from "./components/drop/Drop";
import Loader from "./components/loader/Loader";
import ToggleButton from "./components/toggle/ToggleButton";
import AnimatedLoader from "./components/loader2/AnimatedLoader";
import HoverBtn from "./components/buttons/btn1/HoverBtn";



function App() {
  return (
    <div className="App">
      <span className="div">
        <Drop />
        <AnimatedCard />
        <Loader />
        <Blob text={'CSS & SVG'} />
        <ToggleButton />
        <CircularMenu />
        <AnimatedLoader />
        <HoverBtn />
      </span>
    </div>
  );
}

export default App;