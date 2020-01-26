import React, { useState } from "react";
import uuidv4 from "uuid/v4";

export const ComponentForm = ({
  components,
  setComponents,
  maxDepth,
  setMaxDepth
}) => {
  const [formState, setFormState] = useState({
    parent: "",
    name: ""
  });
  //   const [name, setName] = useState("");
  const { parent, name } = formState;

  const createComponent = e => {
    e.preventDefault();
    const id = uuidv4();
    const depth = components[parent] ? components[parent].depth + 1 : 0;
    if (depth > maxDepth) {
      setMaxDepth(depth);
    }
    setComponents(prev => {
      const old = { ...prev };
      old[id] = { id, name, parent, depth };
      return old;
    });
  };

  return (
    <form onSubmit={createComponent}>
      <input
        type='text'
        name='name'
        value={name}
        onChange={
          e => setFormState({ ...formState, name: e.target.value })
          //   setName(e.target.value)
        }
        placeholder='Component name'
      ></input>
      <select
        name='parent'
        onChange={e => setFormState({ ...formState, parent: e.target.value })}
      >
        <option value='null'>Select parent component</option>
        {components &&
          Object.values(components).map(component => (
            <option name={component.name} value={component.id}>
              {component.name}
            </option>
          ))}
      </select>
      <input type='submit' value='Add Component'></input>
    </form>
  );
};
