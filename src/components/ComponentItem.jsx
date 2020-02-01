import React from "react";
import { VariablesForm } from "./VariablesForm";

export const ComponentItem = props => {
  const { current, variables, availableProps } = props;
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
