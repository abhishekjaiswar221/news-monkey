import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import NewsHeadLines from "./components/NewsHeadLines";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 py-5 border-b-black border-b-2">
        <div className="flex flex-row gap-7 mx-16">
          <div className="basis-2/3 w-full">
            <NewsHeadLines />
          </div>
          <div className="basis-1/3 w-full flex flex-col gap-7">
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
