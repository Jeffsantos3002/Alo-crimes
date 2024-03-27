from models.loader.csv_loader import CsvDataLoader
from models.database.database_strategy import DatabaseStrategy


def main():
    # Configuração da estratégia de conexão com o banco de dados PostgreSQL
    postgres_strategy = DatabaseStrategy(
        dbname="postgres", user="admin", password="admin", host="localhost")

    # Inicializa o carregador de dados CSV com a estratégia PostgreSQL
    csv_loader = CsvDataLoader(strategy=postgres_strategy)

    # Caminho para o arquivo CSV com os dados de ocorrências de segurança
    caminho_csv = "data/indicadoressegurancapublicauf - Ocorrências.csv"
    caminho_csv2 = "data/indicadoressegurancapublicauf - Vítimas.csv"

    # Carrega os dados do arquivo CSV para o banco de dados
    csv_loader.load_data(caminho_csv, caminho_csv2)


if __name__ == "__main__":
    main()
