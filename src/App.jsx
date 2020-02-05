import React, { useState, useEffect } from "react";

import "./App.scss";
import { ComponentForm } from "./components/ComponentForm";
import { ComponentList } from "./components/ComponentList";
import { exampleComponentMap, exampleVariablesList } from "./dummy_data";
import {
  getLocalStorage,
  storeInLocalStorage,
  emptyLocalStorage
} from "./helpers";
import { ComponentsContext, VariablesContext } from "./hooks/contextHooks";
import { CompactPicker } from "react-color";

const App = () => {
  const [components, setComponents] = useState(exampleComponentMap);
  const [variables, setVariables] = useState(exampleVariablesList);
  const [easterEgg, setEasterEgg] = useState(false);
  const [backgroundValue, setBackgroundValue] = useState(null);

  useEffect(() => {
    getLocalStorage(setComponents);
  }, []);

  const setBackground = color => {
    const { r, g, b } = color.rgb;
    const colorValue = `rgba(${r}, ${g}, ${b}, 0.2)`;
    document.documentElement.style.setProperty(
      "--background-color",
      colorValue
    );
    setBackgroundValue(color);
  };

  const removeVariable = (variableId, componentId) => {
    // "1": { id: "1", name: "listOfUsers", content: "array", type: "state" }

    const { name, type } = variables[variableId];
    const updatedVariables = { ...variables };

    delete updatedVariables[variableId];
    const cleanedComponent = components[componentId];
    cleanedComponent.variables = components[componentId].variables.filter(
      id => id !== variableId
    );

    setVariables(updatedVariables);
    setComponents(prev => ({ ...prev, [componentId]: cleanedComponent }));
  };

  const removeComponent = componentId => {
    const component = components[componentId];

    if (!component.children.length) {
      const updatedVariables = { ...variables };
      const updatedComponents = { ...components };

      component.variables.forEach(id => delete updatedVariables[id]);
      delete updatedComponents[componentId];

      for (const key of Object.keys(updatedComponents)) {
        updatedComponents[key].children = updatedComponents[
          key
        ].children.filter(id => id !== componentId);
      }

      setVariables(updatedVariables);
      setComponents(updatedComponents);
    }
  };
  return (
    <ComponentsContext.Provider
      value={{ components, setComponents, removeComponent }}
    >
      <VariablesContext.Provider
        value={{ variables, setVariables, removeVariable }}
      >
        <div className='App'>
          <h1 onDoubleClick={() => setEasterEgg(!easterEgg)}>
            React component mapper
          </h1>
          {easterEgg && (
            <header>
              <h2>Choose a new color !</h2>
              <CompactPicker
                color={backgroundValue ? backgroundValue.rgb : ""}
                onChange={setBackground}
                onChangeComplete={setBackground}
              />
            </header>
          )}
          <ComponentForm />
          <section className='componentList'>
            <ComponentList current={components["App"]} availableProps={[]} />
          </section>
          <button onClick={() => storeInLocalStorage(components)}>Save</button>
          <button onClick={emptyLocalStorage}>Clear</button>
        </div>
      </VariablesContext.Provider>
    </ComponentsContext.Provider>
  );
};

export default App;
