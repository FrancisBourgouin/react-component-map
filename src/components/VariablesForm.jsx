import React, { useContext, useState } from "react";
import { VariablesContext, ComponentsContext } from "../hooks/contextHooks";
import uuidv4 from "uuid/v4";

export const VariablesForm = props => {
  const { variables, setVariables } = useContext(VariablesContext);
  const { components, setComponents } = useContext(ComponentsContext);
  const { availableProps, currentId } = props;
  const [stateForm, setStateForm] = useState({
    name: "",
    content: "Array"
  });
  const [propForm, setPropForm] = useState(null);

  const addProp = event => {
    event.preventDefault();
    const id = uuidv4();
    const newProp = { ...variables[propForm], id };
    newProp.type = "prop";

    setVariables(prev => ({ ...prev, [id]: newProp }));
    setComponents(prev => {
      const oldComponents = { ...prev };
      oldComponents[currentId].variables.push(id);
      return oldComponents;
    });
  };

  const addLocalState = event => {
    event.preventDefault();
    const id = uuidv4();
    const { name, content } = stateForm;
    const newLocalState = { id, name, content, type: "state" };

    setVariables(prev => ({ ...prev, [id]: newLocalState }));
    setComponents(prev => {
      const oldComponents = { ...prev };
      oldComponents[currentId].variables.push(id);
      return oldComponents;
    });
  };

  return (
    <article className='VariablesForm'>
      <form onSubmit={addLocalState}>
        <h2>Add Local State:</h2>
        <input
          type='text'
          placeholder='Enter variable name'
          value={stateForm.name}
          onChange={event =>
            setStateForm({ ...stateForm, name: event.target.value })
          }
        ></input>
        <select
          value={stateForm.content}
          onChange={event =>
            setStateForm({ ...stateForm, content: event.target.value })
          }
        >
          <option value='Array'>Array</option>
          <option value='Object'>Object</option>
          <option value='String'>String</option>
          <option value='Number'>Number</option>
        </select>
        <input type='submit'></input>
      </form>
      <form onSubmit={addProp}>
        <h2>Add Prop from Parent:</h2>
        {availableProps.length ? (
          <>
            <select onChange={event => setPropForm(event.target.value)}>
              {availableProps.map(propId => (
                <option value={propId}>{variables[propId].name}</option>
              ))}
            </select>
            <input type='submit'></input>
          </>
        ) : (
          <p>There is no props available from the parent.</p>
        )}
      </form>
    </article>
  );
};
