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

const componentContext = React.createContext();

const App = () => {
  const [components, setComponents] = useState(exampleComponentMap);
  const [variables, setVariables] = useState(exampleVariablesList);

  useEffect(() => {
    getLocalStorage(setComponents);
  }, []);

  return (
    <div className='App'>
      <ComponentForm
        components={components}
        setComponents={setComponents}
        availableProps={[]}
      />
      <ComponentList
        components={components}
        variables={variables}
        current={components["App"]}
      />
      <button onClick={() => storeInLocalStorage(components)}>Save</button>
      <button onClick={emptyLocalStorage}>Clear</button>
    </div>
  );
};

export default App;
