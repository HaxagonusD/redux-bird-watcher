const initialState = {
  listOfBirds: [{ name: "Robin", views: 1 }],
};

const birdReducer = (state = initialState, action) => {
  const actions = {
    "birds/addBird": function () {
      const listOfBirds = state.listOfBirds;
      return { ...state, listOfBirds: [...listOfBirds, action.payload] };
    },
    "birds/incrementBird": () => {
      const indexOfBird = state.listOfBirds.findIndex(
        (element) => element.name === action.payload
      );
      let { name, views } = state.listOfBirds[indexOfBird];
      const newviews = views + 1;
      let newBird = { name, views: newviews };
      console.log("This is the NEwBird", newBird);
      // I know. I should be using Immer
      return {
        ...state,
        listOfBirds: [
          ...state.listOfBirds.slice(0, indexOfBird),
          newBird,
          ...state.listOfBirds.slice(indexOfBird + 1),
        ],
      };
    },
  };
  return actions[action.type] ? actions[action.type]() : state;
};

export default birdReducer;
