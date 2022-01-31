import AnimatedCard from "./components/animatedBorder/AnimatedCard";
import Blob from "./components/blob/Blob";
import CircularMenu from "./components/circularMenu/CircularMenu";
import Drop from "./components/drop/Drop";
import Loader from "./components/loader/Loader";
import ToggleButton from "./components/toggle/ToggleButton";


function App() {
  return (
    <div className="App">
      <span className="div">

        <Drop />
        <AnimatedCard />
        <Loader />
        <Blob text={'CSS & SVG'} />
        <ToggleButton />
        {/* <CircularMenu /> */}
      </span>



    </div>
  );
}

export default App;
