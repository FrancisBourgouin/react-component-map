import React, { useState, useEffect } from "react";
import "./App.css";
import { ComponentForm } from "./ComponentForm";

function App() {
  const [components, setComponents] = useState({});
  const [maxDepth, setMaxDepth] = useState(0);

  const parseComponents = (components, maxDepth) => {
    // Ideally recursively go depth by depth to show content per row
    // Force by picking max depth in state instead
    // Add a condition so that there is a max of 5 components on one row
    const output = [];
    for (let depth = 0; depth <= maxDepth; depth++) {
      const currentDepthElements = Object.values(components).filter(
        component => component.depth === depth
      );
      const parsedElements = currentDepthElements.map(component => {
        const { id, name, parent, depth } = component;
        return (
          <li>
            <h1>{name}</h1>
            <h2>ID: {id}</h2>
            <h3>
              Child of {components[parent] ? components[parent].name : "No one"}
            </h3>
            <h4>Depth of {depth}</h4>
          </li>
        );
      });
      const openList = <ul>{parsedElements}</ul>;
      const parsedArray = ["<ul>", ...parsedElements, "</ul>"];
      output.push(openList);
    }
    return output;
  };
  return (
    <div className='App'>
      <h1>React Component Mapper</h1>
      <ComponentForm
        components={components}
        setComponents={setComponents}
        maxDepth={maxDepth}
        setMaxDepth={setMaxDepth}
      ></ComponentForm>
      {parseComponents(components, maxDepth)}
    </div>
  );
}

export default App;
