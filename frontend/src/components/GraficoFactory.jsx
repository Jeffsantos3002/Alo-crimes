import GraficoPizza from './graficos/GraficoPizza';
import GraficoLinha from './graficos/GraficoLinha';
import GraficoBarras from './graficos/GraficoBarras';

const TipoGrafico = {
  PIZZA: 'PIZZA',
  LINHA: 'LINHA',
  BARRAS: 'BARRAS',
};

class GraficoFactory {
  static criarGrafico(tipo, dados) {
    switch (tipo) {
      case TipoGrafico.PIZZA:
        return <GraficoPizza dados={dados} />;
      case TipoGrafico.LINHA:
        return <GraficoLinha dados={dados} />;
      case TipoGrafico.BARRAS:
        return <GraficoBarras dados={dados} />;
      default:
        throw new Error('Tipo de gráfico desconhecido');
    }
  }
}

export { GraficoFactory, TipoGrafico };
