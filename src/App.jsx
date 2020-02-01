import React, { useState, useEffect } from "react";
import "./App.css";
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
          <ComponentForm />
          <ComponentList
            components={components}
            variables={variables}
            current={components["App"]}
            availableProps={[]}
          />
          <button onClick={() => storeInLocalStorage(components)}>Save</button>
          <button onClick={emptyLocalStorage}>Clear</button>
        </div>
      </VariablesContext.Provider>
    </ComponentsContext.Provider>
  );
};

export default App;
