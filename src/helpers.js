export const storeInLocalStorage = components => {
  localStorage.setItem("componentMap", JSON.stringify(components));
};
export const emptyLocalStorage = () => {
  localStorage.setItem("componentMap", "");
};

export const getLocalStorage = callback => {
  if (localStorage.getItem("componentMap")) {
    const cMap = JSON.parse(localStorage.getItem("componentMap"));
    console.log(cMap);
    if (cMap) {
      callback(cMap);
    }
  }
};
