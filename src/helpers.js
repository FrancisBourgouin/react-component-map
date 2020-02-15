export const storeLSComponents = components => {
  localStorage.setItem("componentMap", JSON.stringify(components));
};

export const getLSComponents = callback => {
  if (localStorage.getItem("componentMap")) {
    const cMap = JSON.parse(localStorage.getItem("componentMap"));
    if (cMap) {
      callback(cMap);
    }
  }
};

export const storeLSVariables= variables => {
  localStorage.setItem("variableMap", JSON.stringify(variables));
};

export const getLSVariables = callback => {
  if (localStorage.getItem("variableMap")) {
    const vMap = JSON.parse(localStorage.getItem("variabletMap"));
    if (vMap) {
      callback(vMap);
    }
  }
};

export const componentJSONLink = components => {
  const output = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(components));
  return `data:${output}`
}
export const variableJSONLink = variables => {
  const output = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(variables));
  return `data:${output}`
}

export const emptyLocalStorage = () => {
  localStorage.setItem("componentMap", "");
  localStorage.setItem("variableMap", "");
};