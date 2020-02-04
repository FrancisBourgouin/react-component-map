import React, { useContext, useState } from "react";
import { VariablesForm } from "./VariablesForm";
import { VariablesContext } from "../hooks/contextHooks";

export const ComponentItem = props => {
  const { variables, setVariables } = useContext(VariablesContext);
  const [visible, setVisible] = useState(false);

  const { current, availableProps } = props;
  return (
    <article className='componentItem'>
      <h1>{current.name} (Component)</h1>
      <div>
        <h2>Variables</h2>
        <ul>
          {current.variables.map(variableId => (
            <li key={`${current.id}${variableId}`}>
              {variables[variableId].name} of type {variables[variableId].type}
            </li>
          ))}
        </ul>
      </div>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => setVisible(!visible)}
      >
        Add variable
      </button>
      {visible && (
        <VariablesForm {...{ currentId: current.id, availableProps }} />
      )}
    </article>
  );
};
