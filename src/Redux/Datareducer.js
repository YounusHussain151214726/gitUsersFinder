const initialState = {
  data: [],
};

export default function Inputfield(state = initialState, action) {
  switch (action.type) {
    case "send":
      const { item } = action.payload;

      return {
        data:[...state.data , item],
      };

    default:
      return state;
  }
}
