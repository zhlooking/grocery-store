export const wash = () => {
  return {
    type: 'WASH',
  };
};

export const eat = () => {
  return {
    type: 'EAT',
    bites: 1,
  };
};

export const rot = () => {
  return {
    type: 'ROT',
  };
};
