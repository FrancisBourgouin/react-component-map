import React from "react";
import { ComponentItem } from "./ComponentItem";

export const ComponentList = props => {
  const { current, components, variables, availableProps } = props;
  const mappedComponents = current.children.map(componentId => {
    return (
      <ComponentList
        components={components}
        current={components[componentId]}
        variables={variables}
        availableProps={componentId !== "App" ? current.variables : []}
      />
    );
  });
  return (
    <section style={{ backgroundColor: current.color }}>
      <ComponentItem
        current={current}
        variables={variables}
        availableProps={availableProps}
      />
      {mappedComponents}
    </section>
  );
};
