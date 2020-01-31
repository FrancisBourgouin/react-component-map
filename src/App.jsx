import React, { useState, useEffect } from "react";
import "./App.css";
import { ComponentForm } from "./ComponentForm";

const exampleComponentMap = {
  a1: {
    id: "a1",
    name: "App",
    children: ["b2", "c3"],
    variables: ["1"]
  },
  b2: {
    id: "b2",
    name: "Header",
    children: [],
    variables: ["2"]
  },
  c3: {
    id: "c3",
    name: "BOB",
    children: ["d4"],
    variables: ["2"]
  },
  d4: {
    id: "b2",
    name: "Chicken",
    children: [],
    variables: ["2"]
  }
};

const exampleVariablesList = {
  "1": { id: "1", name: "componentList", content: "array", type: "state" },
  "2": { id: "2", name: "components", content: "array", type: "props" }
};

// const ComponentItem = props => {
//     return(

//     )
// }

const ComponentList = props => {
  const { current, components } = props;
  const mappedComponents = current.children.map(componentId => {
    // components[componentId];
    return (
      <ComponentList
        components={components}
        current={components[componentId]}
      />
    );
  });
  return (
    <section>
      <h1>Component : {current.name}</h1>
      {mappedComponents}
    </section>
  );
};

const App = () => {
  const [components, setComponents] = useState(exampleComponentMap);
  const [variables, setVariables] = useState(exampleVariablesList);

  return (
    <div className='App'>
      <ComponentForm components={components} setComponents={setComponents} />
      <ComponentList components={components} current={components["a1"]} />
    </div>
  );
};

export default App;
