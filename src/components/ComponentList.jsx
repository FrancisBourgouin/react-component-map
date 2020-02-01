import React, { useContext } from "react";
import { ComponentItem } from "./ComponentItem";
import { ComponentsContext } from "../hooks/contextHooks";

export const ComponentList = props => {
  const { components } = useContext(ComponentsContext);

  const { current, availableProps } = props;
  const mappedComponents = current.children.map(componentId => {
    return (
      <ComponentList
        current={components[componentId]}
        availableProps={componentId !== "App" ? current.variables : []}
      />
    );
  });
  return (
    <section style={{ backgroundColor: current.color }}>
      <ComponentItem current={current} availableProps={availableProps} />
      {mappedComponents}
    </section>
  );
};
