import React, { useContext } from "react";
import { VariablesForm } from "./VariablesForm";
import { VariablesContext } from "../hooks/contextHooks";

export const ComponentItem = props => {
  const { variables, setVariables } = useContext(VariablesContext);

  const { current, availableProps } = props;
  return (
    <>
      <h1>Component : {current.name}</h1>
      {current.variables.map(variableId => (
        <p>
          {variables[variableId].name} of type {variables[variableId].type}
        </p>
      ))}
      <VariablesForm availableProps={availableProps} variables={variables} />
    </>
  );
};
