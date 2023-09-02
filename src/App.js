import logo from "./logo.png";
import sean from "./sean.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="fluid-container">
          <div class="row">
            <div class="col-12">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <img src={sean} className="" alt="sean" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
