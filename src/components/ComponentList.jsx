import React, { useContext } from "react";
import { ComponentItem } from "./ComponentItem";
import { ComponentsContext } from "../hooks/contextHooks";
import className from 'classnames'

export const ComponentList = props => {
  const { components } = useContext(ComponentsContext);
  const { current, availableProps } = props;
  const classes = className('componentItem', {'hasChildren' : current.children.length}, {'emptyChildren' : !current.children.length} )


  const mappedComponents = current.children.map(componentId => {
    if (components[componentId]) {
      return (
        <ComponentList
          current={components[componentId]}
          availableProps={componentId !== "App" ? current.variables : []}
          key={componentId}
        />
      );
    }
  });
  return (
    <section className={classes}>
      <ComponentItem current={current} availableProps={availableProps} />
      {mappedComponents}
    </section>
  );
};
