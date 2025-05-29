import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
  return (
    <div className="w-screen min-h-screen bg-gray-800 text-white px-[10%]">
      <Nav />
      <div className="mt-4">
        <Mainroutes />
      </div>
    </div>
  );
};

export default App;
