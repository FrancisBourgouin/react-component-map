import React, { useContext, useState } from "react";
import { VariablesContext, ComponentsContext } from "../hooks/contextHooks";

export const VariablesForm = props => {
  const { variables, setVariables } = useContext(VariablesContext);
  const { components, setComponents } = useContext(ComponentsContext);
  const { availableProps, currentId } = props;
  const [stateForm, setStateForm] = useState({
    name: "",
    content: ""
  });
  const [propForm, setPropForm] = useState({
    name: "",
    content: ""
  });

  const addVariable = (event, action) => {
    event.preventDefault();
  };

  const dummyVar = {
    id: "1",
    name: "listOfUsers",
    content: "array",
    type: "state"
  };
  return (
    <>
      <form action=''>
        <h2>Add Local State</h2>
        <input
          type='text'
          placeholder='Enter variable name'
          value={stateForm.name}
          onChange={event => setStateForm(event.target.value)}
        ></input>
        <input type='submit'></input>
      </form>
      <form action=''>
        <h2>Add Prop from Parent</h2>
        {availableProps.length ? (
          <select>
            {availableProps.map(propId => (
              <option value={propId}>{variables[propId].name}</option>
            ))}
          </select>
        ) : (
          <p>There is no props available from the parent</p>
        )}
      </form>
    </>
  );
};
