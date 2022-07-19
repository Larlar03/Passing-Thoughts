export const getNewExpirationTime = () => {
  // Return the date 15 seconds from now
  return Date.now() + 15 * 1000;
};

let nextId = 0;
export const generateId = () => {
  // Save current nextId value to result
  const result = nextId;

  // Increase nextId by 1
  nextId += 1;

  return result;
};
