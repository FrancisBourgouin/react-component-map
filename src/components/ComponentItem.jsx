import React, { useContext, useState } from "react";
import { VariablesForm } from "./VariablesForm";
import { VariablesContext, ComponentsContext } from "../hooks/contextHooks";

export const ComponentItem = props => {
  const { variables, removeVariable } = useContext(VariablesContext);
  const { removeComponent } = useContext(ComponentsContext);
  const [visible, setVisible] = useState(false);

  const { current, availableProps } = props;
  return (
    <article className="">
      <h1>
        {current.name} (Component)
        {!current.children.length && current.name !== 'App' && <button onClick={() => removeComponent(current.id)}>
            Delete component
          </button>       
        }
        <button
        style={{ cursor: "pointer" }}
        onClick={() => setVisible(!visible)}
      >
        {visible ? "Hide variable form" : "Show variable form"}
        </button>

      </h1>
      {visible && (
          <VariablesForm {...{ currentId: current.id, availableProps }} />
        )}
      <div>
        <h2>Variables</h2>
        <ul>
          {current.variables.map(variableId => {
            if (variables[variableId]) {
              return (
                <li key={`${current.id}${variableId}`}>
                  <strong>({variables[variableId].type})</strong>{" "}
                  {variables[variableId].name} of type{" "}
                  {variables[variableId].content}
                  <button
                    onClick={() => removeVariable(variableId, current.id)}
                  >
                    Delete variable
                  </button>
                </li>
              );
            }
          })}
        </ul>
      </div>
      
      
    </article>
  );
};
