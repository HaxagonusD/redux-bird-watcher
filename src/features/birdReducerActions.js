export const addBird = (payload) => {
  return {
    type: "birds/addBird",
    payload,
  };
};

export const incrementBird = (payload) => {
  return {
    type: "birds/incrementBird",
    payload,
  };
};
