const ocorrencias = [
  {
    "UF": "Acre",
    "Tipo Crime": "Estupro",
    "Ano": 2022,
    "Mês": "janeiro",
    "Ocorrências": 31
  },
  {
    "UF": "Acre",
    "Tipo Crime": "Furto de veículo",
    "Ano": 2022,
    "Mês": "janeiro",
    "Ocorrências": 50
  },
  {
    "UF": "Acre",
    "Tipo Crime": "Homicídio doloso",
    "Ano": 2022,
    "Mês": "janeiro",
    "Ocorrências": 10
  },
  {
    "UF": "Acre",
    "Tipo Crime": "Lesão corporal seguida de morte",
    "Ano": 2022,
    "Mês": "janeiro",
    "Ocorrências": 1
  },
  {
    "UF": "Acre",
    "Tipo Crime": "Roubo a instituição financeira",
    "Ano": 2022,
    "Mês": "janeiro",
    "Ocorrências": 0
  },
  {
    "UF": "Alagoas",
    "Tipo Crime": "Homicídio doloso",
    "Ano": 2022,
    "Mês": "agosto",
    "Ocorrências": 63
  },
  {
    "UF": "Alagoas",
    "Tipo Crime": "Lesão corporal seguida de morte",
    "Ano": 2022,
    "Mês": "agosto",
    "Ocorrências": 2
  },
  {
    "UF": "Alagoas",
    "Tipo Crime": "Roubo a instituição financeira",
    "Ano": 2022,
    "Mês": "agosto",
    "Ocorrências": 0
  },
  {
    "UF": "Alagoas",
    "Tipo Crime": "Roubo de carga",
    "Ano": 2022,
    "Mês": "agosto",
    "Ocorrências": 0
  },
  {
    "UF": "Alagoas",
    "Tipo Crime": "Roubo de veículo",
    "Ano": 2022,
    "Mês": "agosto",
    "Ocorrências": 133
  },
  {
    "UF": "Alagoas",
    "Tipo Crime": "Roubo seguido de morte (latrocínio)",
    "Ano": 2022,
    "Mês": "agosto",
    "Ocorrências": 2
  },
  {
    "UF": "Alagoas",
    "Tipo Crime": "Tentativa de homicídio",
    "Ano": 2022,
    "Mês": "agosto",
    "Ocorrências": 68
  },
  {
    "UF": "Alagoas",
    "Tipo Crime": "Estupro",
    "Ano": 2022,
    "Mês": "setembro",
    "Ocorrências": 79
  },
  {
    "UF": "Amazonas",
    "Tipo Crime": "Roubo de carga",
    "Ano": 2022,
    "Mês": "junho",
    "Ocorrências": 2
  },
  {
    "UF": "Amazonas",
    "Tipo Crime": "Roubo de veículo",
    "Ano": 2022,
    "Mês": "junho",
    "Ocorrências": 111
  },
  {
    "UF": "Amazonas",
    "Tipo Crime": "Roubo seguido de morte (latrocínio)",
    "Ano": 2022,
    "Mês": "junho",
    "Ocorrências": 4
  },
  {
    "UF": "Amazonas",
    "Tipo Crime": "Tentativa de homicídio",
    "Ano": 2022,
    "Mês": "junho",
    "Ocorrências": 17
  },
  {
    "UF": "Amazonas",
    "Tipo Crime": "Estupro",
    "Ano": 2022,
    "Mês": "julho",
    "Ocorrências": 100
  },
  {
    "UF": "Amazonas",
    "Tipo Crime": "Furto de veículo",
    "Ano": 2022,
    "Mês": "julho",
    "Ocorrências": 231
  },
  {
    "UF": "Amazonas",
    "Tipo Crime": "Homicídio doloso",
    "Ano": 2022,
    "Mês": "julho",
    "Ocorrências": 101
  },
  {
    "UF": "Tocantins",
    "Tipo Crime": "Lesão corporal seguida de morte",
    "Ano": 2015,
    "Mês": "novembro",
    "Ocorrências": 1
  },
  {
    "UF": "Tocantins",
    "Tipo Crime": "Roubo a instituição financeira",
    "Ano": 2015,
    "Mês": "novembro",
    "Ocorrências": 1
  },
  {
    "UF": "Tocantins",
    "Tipo Crime": "Roubo de carga",
    "Ano": 2015,
    "Mês": "novembro",
    "Ocorrências": 2
  },
  {
    "UF": "Tocantins",
    "Tipo Crime": "Roubo de veículo",
    "Ano": 2015,
    "Mês": "novembro",
    "Ocorrências": 50
  },
  {
    "UF": "Tocantins",
    "Tipo Crime": "Roubo seguido de morte (latrocínio)",
    "Ano": 2015,
    "Mês": "novembro",
    "Ocorrências": 0
  },
  {
    "UF": "Tocantins",
    "Tipo Crime": "Tentativa de homicídio",
    "Ano": 2015,
    "Mês": "novembro",
    "Ocorrências": 35
  },
  {
    "UF": "Tocantins",
    "Tipo Crime": "Estupro",
    "Ano": 2015,
    "Mês": "dezembro",
    "Ocorrências": 32
  },
  {
    "UF": "Distrito Federal",
    "Tipo Crime": "Lesão corporal seguida de morte",
    "Ano": 2022,
    "Mês": "fevereiro",
    "Ocorrências": 1
  },
  {
    "UF": "Acre",
    "Tipo Crime": "Estupro",
    "Ano": 2022,
    "Mês": "janeiro",
    "Ocorrências": 31
  },
  {
    "UF": "Acre",
    "Tipo Crime": "Furto de veículo",
    "Ano": 2022,
    "Mês": "janeiro",
    "Ocorrências": 50
  },
  {
    "UF": "Acre",
    "Tipo Crime": "Homicídio doloso",
    "Ano": 2022,
    "Mês": "janeiro",
    "Ocorrências": 10
  },
  {
    "UF": "Acre",
    "Tipo Crime": "Lesão corporal seguida de morte",
    "Ano": 2022,
    "Mês": "janeiro",
    "Ocorrências": 1
  },
  {
    "UF": "Acre",
    "Tipo Crime": "Roubo a instituição financeira",
    "Ano": 2022,
    "Mês": "janeiro",
    "Ocorrências": 0
  },
  {
    "UF": "Alagoas",
    "Tipo Crime": "Homicídio doloso",
    "Ano": 2022,
    "Mês": "agosto",
    "Ocorrências": 63
  },
  {
    "UF": "Alagoas",
    "Tipo Crime": "Lesão corporal seguida de morte",
    "Ano": 2022,
    "Mês": "agosto",
    "Ocorrências": 2
  },
  {
    "UF": "Alagoas",
    "Tipo Crime": "Roubo a instituição financeira",
    "Ano": 2022,
    "Mês": "agosto",
    "Ocorrências": 0
  },
  {
    "UF": "Alagoas",
    "Tipo Crime": "Roubo de carga",
    "Ano": 2022,
    "Mês": "agosto",
    "Ocorrências": 0
  },
  {
    "UF": "Alagoas",
    "Tipo Crime": "Roubo de veículo",
    "Ano": 2022,
    "Mês": "agosto",
    "Ocorrências": 133
  },
  {
    "UF": "Alagoas",
    "Tipo Crime": "Roubo seguido de morte (latrocínio)",
    "Ano": 2022,
    "Mês": "agosto",
    "Ocorrências": 2
  },
  {
    "UF": "Alagoas",
    "Tipo Crime": "Tentativa de homicídio",
    "Ano": 2022,
    "Mês": "agosto",
    "Ocorrências": 68
  },
  {
    "UF": "Alagoas",
    "Tipo Crime": "Estupro",
    "Ano": 2022,
    "Mês": "setembro",
    "Ocorrências": 79
  },
  {
    "UF": "Amazonas",
    "Tipo Crime": "Roubo de carga",
    "Ano": 2022,
    "Mês": "junho",
    "Ocorrências": 2
  },
  {
    "UF": "Amazonas",
    "Tipo Crime": "Roubo de veículo",
    "Ano": 2022,
    "Mês": "junho",
    "Ocorrências": 111
  },
  {
    "UF": "Amazonas",
    "Tipo Crime": "Roubo seguido de morte (latrocínio)",
    "Ano": 2022,
    "Mês": "junho",
    "Ocorrências": 4
  },
  {
    "UF": "Amazonas",
    "Tipo Crime": "Tentativa de homicídio",
    "Ano": 2022,
    "Mês": "junho",
    "Ocorrências": 17
  },
  {
    "UF": "Amazonas",
    "Tipo Crime": "Estupro",
    "Ano": 2022,
    "Mês": "julho",
    "Ocorrências": 100
  },
  {
    "UF": "Amazonas",
    "Tipo Crime": "Furto de veículo",
    "Ano": 2022,
    "Mês": "julho",
    "Ocorrências": 231
  },
  {
    "UF": "Amazonas",
    "Tipo Crime": "Homicídio doloso",
    "Ano": 2022,
    "Mês": "julho",
    "Ocorrências": 101
  },
  {
    "UF": "Tocantins",
    "Tipo Crime": "Lesão corporal seguida de morte",
    "Ano": 2015,
    "Mês": "novembro",
    "Ocorrências": 1
  },
  {
    "UF": "Tocantins",
    "Tipo Crime": "Roubo a instituição financeira",
    "Ano": 2015,
    "Mês": "novembro",
    "Ocorrências": 1
  },
  {
    "UF": "Tocantins",
    "Tipo Crime": "Roubo de carga",
    "Ano": 2015,
    "Mês": "novembro",
    "Ocorrências": 2
  },
  {
    "UF": "Tocantins",
    "Tipo Crime": "Roubo de veículo",
    "Ano": 2015,
    "Mês": "novembro",
    "Ocorrências": 50
  },
  {
    "UF": "Tocantins",
    "Tipo Crime": "Roubo seguido de morte (latrocínio)",
    "Ano": 2015,
    "Mês": "novembro",
    "Ocorrências": 0
  },
  {
    "UF": "Tocantins",
    "Tipo Crime": "Tentativa de homicídio",
    "Ano": 2015,
    "Mês": "novembro",
    "Ocorrências": 35
  },
  {
    "UF": "Tocantins",
    "Tipo Crime": "Estupro",
    "Ano": 2015,
    "Mês": "dezembro",
    "Ocorrências": 32
  },
  {
    "UF": "Distrito Federal",
    "Tipo Crime": "Lesão corporal seguida de morte",
    "Ano": 2022,
    "Mês": "fevereiro",
    "Ocorrências": 1
  },
]

export default ocorrencias;

