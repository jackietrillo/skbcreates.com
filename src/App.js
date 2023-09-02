import logo from "./logo.png";
import sean from "./sean.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="fluid-container">
          <div class="row">
            <div class="col-3">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div class="col-3">&nbsp;&nbsp;&nbsp;</div>
            <div class="col-3">
              <img src={sean}   alt="sean" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
