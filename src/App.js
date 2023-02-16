import data from "./data";
import Card from "./Card";
import Navbar from "./Navbar";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="App">
      <Navbar />
      <section>{cards}</section>
    </div>
  );
}

export default App;
