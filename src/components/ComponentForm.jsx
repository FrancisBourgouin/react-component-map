import React, { useState, useContext } from "react";
import uuidv4 from "uuid/v4";
import { ComponentsContext } from "../hooks/contextHooks";

export const ComponentForm = () => {
  const { components, setComponents } = useContext(ComponentsContext);

  const [formState, setFormState] = useState({
    name: "",
    color: ""
  });
  const { parent, name, color } = formState;

  const createComponent = e => {
    e.preventDefault();
    const id = uuidv4();
    setComponents(prev => {
      const old = { ...prev };
      old[parent].children.push(id);
      old[id] = { id, name, variables: [], children: [], color };
      return old;
    });
    setFormState({...formState, name:""})
  };

  return (
    <section className='componentForm'>
      <h2>Create a new component</h2>
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
        {/* <input
          type='color'
          name='color'
          value={color}
          onChange={e => setFormState({ ...formState, color: e.target.value })}
        /> */}
        <select
          name='parent'
          onChange={e => setFormState({ ...formState, parent: e.target.value })}
        >
          <option value='null'>Select parent component</option>
          {components &&
            Object.values(components).map(component => (
              <option
                name={component.name}
                value={component.id}
                key={component.id}
              >
                {component.name}
              </option>
            ))}
        </select>
        <input type='submit' value='Add Component'></input>
      </form>
    </section>
  );
};
