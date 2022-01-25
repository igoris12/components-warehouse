import AnimatedCard from "./components/animatedBorder/AnimatedCard";
import Drop from "./components/drop/Drop";
import Loader from "./components/loader/Loader";


function App() {
  return (
    <div className="App">
      <span className="div">

        <Drop />
        <AnimatedCard />
        <Loader />
      </span>



    </div>
  );
}

export default App;
