import "./index.css";
import background from "./images/background.png";
import Forms from "./Forms";

function App() {
  return (
    <div className="container">
      <figure className="photo">
        <img className="photo__img" src={background} alt="background" />
        <figcaption className="photo__caption">Choose a date range</figcaption>
      </figure>
      <Forms />
    </div>
  );
}

export default App;
