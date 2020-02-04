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

const App = () => {
  const [components, setComponents] = useState(exampleComponentMap);
  const [variables, setVariables] = useState(exampleVariablesList);

  useEffect(() => {
    getLocalStorage(setComponents);
  }, []);

  return (
    <ComponentsContext.Provider value={{ components, setComponents }}>
      <VariablesContext.Provider value={{ variables, setVariables }}>
        <div className='App'>
          <h1>React component mapper</h1>
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
