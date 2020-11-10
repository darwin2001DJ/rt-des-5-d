import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    const desserts = [
      { id: 1, name: "Cone", src: require("./assets/img/cone.jpeg") },
      { id: 2, name: "Brighams", src: require("./assets/img/brighams.png") },
      { id: 3, name: "Milkshake", src: require("./assets/img/milkshake.jpg") },
      { id: 4, name: "Squeeze", src: require("./assets/img/squeeze.jpeg") },
    ];
    return (
      <>
        <h1>React Keys</h1>
        <div className="desserts-list">
          {desserts.map((dessert, index) => (
            <div className="desserts">
              <div id={dessert.id}>
                <div id={"dessert" + index}>
                  <label id={"label" + index}>{dessert.name}</label>
                  <img id={"img" + index} src={dessert.src} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default App;
