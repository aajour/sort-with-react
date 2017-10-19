import arr from '../components/list/listItemsFixtures';

const initalState = {
  data: arr,
  filteredData: arr
};

const dropDown= (state=initalState,action) => {
  switch (action.type) {
    case 'LETTERS_SELECTED':
      return {
        ...state,
        filteredData: state.data.filter(elem => isNaN(elem))
      };
    case 'NUMBERS_SELECTED':
      return {
        allSelceted: false,
        numbersSelceted: true
      };

    default:
      return state;
  }
};

export default dropDown;
