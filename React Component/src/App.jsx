import Dynamic from "./components/Dynamic";
import MyButton from "./components/MyButton";
import Random from "./components/Random";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      {/* including bootstrap card */}
      <div className="card" style={{ width: "18rem" }}>
        <img src="path-to-your-image.jpg" className="card-img-top" alt="Card image" />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
      </div>

      <h1>This is my first React Component</h1>
      
      {/* including dynamic components */}
      <Dynamic />

      {/* including reusable components */}
      <Random />
      <Random />
      <Random />
      <Random />
      <Random />

      {/* including MyButton */}
      <MyButton />
    </div>
  );
}

export default App;
