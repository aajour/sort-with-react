
export const lettersSelected = () => {
  return {
    type: 'LETTERS_SELECTED'
  };
};
export const numbersSelected = () => {
  return {
    type: 'NUMBERS_SELECTED'
  };
};

// const wrapper = type => {
//   switch (type) {
//     case 'All': return { type: 'SHOW_ALL', payload: arr };
//     case 'Numbers': return this.dispatch(filter('NUMBERS' , filterData('NUMBERS')));
//     case 'LETTERS': return this.dispatch(filter('LETTERS' , filterData('LETTERS')));
//   }
// };
//
// function filterData(type) {
//   return arr.filter(elem => type === 'NUMBER' ? !isNaN(elem): isNaN(elem));
// };
//
// function filter(type , data) {
//   return (type === 'NUMBERS') ? { type: 'NUMBERS_SELECTED',payload: data }
//     :{ type: 'LETTERS_SELECTED',payload: data };
// };
//
// export {
//   wrapper
// };
