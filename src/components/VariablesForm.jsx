import React from "react";

export const VariablesForm = props => {
  const { availableProps, variables } = props;
  console.log(availableProps);
  return (
    <form action=''>
      <section>
        <h2>Add Local State</h2>
        <input type='text' placeholder='Enter variable name'></input>
        <input type='submit'></input>
      </section>
      <section>
        <h2>Add Prop from Parent</h2>
        {availableProps ? (
          <select>
            {availableProps.map(propId => (
              <option value={propId}>{variables[propId].name}</option>
            ))}
          </select>
        ) : (
          <p>There is no props available from the parent</p>
        )}
      </section>
    </form>
  );
};
