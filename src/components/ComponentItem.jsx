import React, { useContext, useState } from "react";
import { VariablesForm } from "./VariablesForm";
import { VariablesContext } from "../hooks/contextHooks";

export const ComponentItem = props => {
  const { variables, setVariables } = useContext(VariablesContext);
  const [visible, setVisible] = useState(false);

  const { current, availableProps } = props;
  return (
    <>
      <h1>
        Component : {current.name}{" "}
        <span
          style={{ cursor: "pointer" }}
          onClick={() => setVisible(!visible)}
        >
          +
        </span>
      </h1>
      <ul>
        {current.variables.map(variableId => (
          <li key={`${current.id}${variableId}`}>
            {variables[variableId].name} of type {variables[variableId].type}
          </li>
        ))}
      </ul>
      {visible && (
        <VariablesForm {...{ currentId: current.id, availableProps }} />
      )}
    </>
  );
};
