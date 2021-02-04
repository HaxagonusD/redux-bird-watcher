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
      return {
        ...state,
      };
    },
  };
  return actions[action.type] ? actions[action.type]() : state;
};

export default birdReducer;
