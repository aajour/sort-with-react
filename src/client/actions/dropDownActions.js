const allSelceted = () => {
  return {
    type: 'ALL_SELECTED'
  };
};
const lettersSelceted = () => {
  return {
    type: 'LETTERS_SELECTED'
  };
};
const numbersSelceted = () => {
  return {
    type: 'NUMBERS_SELECTED'
  };
};

export {
  lettersSelceted,
  numbersSelceted,
  allSelceted
};
