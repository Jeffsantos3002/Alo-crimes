const formatarData = (data) => {
  return new Date(data).toLocaleDateString("pt-BR");
};

module.exports = { formatarData };
