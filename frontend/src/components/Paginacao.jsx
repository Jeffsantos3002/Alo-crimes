import { useState, useEffect } from 'react';

function Paginacao({ currentPage, totalPages, onPageChange }) {
  const [pageButtons, setPageButtons] = useState([]);

  // Função para gerar os números das páginas
  const generatePageNumbers = () => {
    const buttons = [];
    const maxButtons = 5; // Defina quantos botões de página deseja mostrar

    // Se houver menos páginas do que o número máximo de botões, mostre todas as páginas
    if (totalPages <= maxButtons) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      // Se houver mais páginas do que o número máximo de botões, mostre os botões com a página atual no meio
      let start = currentPage - Math.floor(maxButtons / 2);
      let end = currentPage + Math.floor(maxButtons / 2);

      if (start < 1) {
        start = 1;
        end = maxButtons;
      }

      if (end > totalPages) {
        start = totalPages - maxButtons + 1;
        end = totalPages;
      }

      for (let i = start; i <= end; i++) {
        buttons.push(i);
      }
    }

    return buttons;
  };

  // Atualiza os botões de página ao montar o componente ou quando currentPage ou totalPages mudar
  useEffect(() => {
    setPageButtons(generatePageNumbers());
  }, [currentPage, totalPages]);

  return (
    <div className="join w-full justify-center mt-12">
      {pageButtons.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`join-item btn ${pageNumber === currentPage ? 'btn-active' : ''}`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}

export default Paginacao;
