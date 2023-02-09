const getFileExtention = (file) => {
  const result = file.split('.');
  return result[result.length - 1];
};

export default getFileExtention;
