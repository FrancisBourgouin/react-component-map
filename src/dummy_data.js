export const exampleComponentMap = {
  App: {
    id: "App",
    name: "App",
    children: ["b2", "c3"],
    variables: ["1"],
    color: "#BADA55"
  },
  b2: {
    id: "b2",
    name: "Header",
    children: [],
    variables: ["2"],
    color: "#C0FFEE"
  },
  c3: {
    id: "c3",
    name: "BOB",
    children: ["d4"],
    variables: ["2", "3"],
    color: "#B0B"
  },
  d4: {
    id: "d4",
    name: "Chicken",
    children: [],
    variables: [],
    color: "#B01100"
  }
};

export const exampleVariablesList = {
  "1": { id: "1", name: "listOfUsers", content: "array", type: "state" },
  "2": { id: "2", name: "listOfChickens", content: "array", type: "props" },
  "3": { id: "3", name: "currentUser", content: "array", type: "props" }
};


export const baseComponentMap = {
  App: {
    id: "App",
    name: "App",
    children: [],
    variables: []
  }
}