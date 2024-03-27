import csv


class CsvDataLoader:
    def __init__(self, strategy):
        self.strategy = strategy

    def load_data(self, csv_file_path, csv_file_path2):
        conn = self.strategy.connect()
        cursor = conn.cursor()

        cursor.execute(
            "CREATE TABLE ocorrenciasuf (UF VARCHAR(100),tipo_crime VARCHAR(100),ano VARCHAR(100),mes VARCHAR(100),ocorrencias VARCHAR(100));")

        with open(csv_file_path, 'r', encoding='utf-8-sig') as file:
            reader = csv.reader(file)
            next(reader)
            for row in reader:
                uf, tipo_crime, ano, mes, ocorrencias = row
                sql = "INSERT INTO ocorrenciasuf (uf, tipo_crime, ano, mes, ocorrencias) VALUES (%s, %s, %s, %s, %s)"
                values = (uf, tipo_crime, ano, mes, ocorrencias)
                cursor.execute(sql, values)

        cursor.execute(
            "CREATE TABLE vitimasUF (UF VARCHAR(100),tipo_crime VARCHAR(100),ano VARCHAR(100),mes VARCHAR(100),sexo_vitima VARCHAR(100),vitima VARCHAR(100));")

        with open(csv_file_path2, 'r', encoding='utf-8-sig') as file:
            reader = csv.reader(file)
            next(reader)
            for row in reader:
                uf, tipo_crime, ano, mes, sexo_vitma, vitima = row
                sql = "INSERT INTO vitimasuf (uf, tipo_crime, ano, mes, sexo_vitima, vitima) VALUES (%s, %s, %s, %s, %s, %s)"
                values = (uf, tipo_crime, ano, mes, sexo_vitma, vitima)
                cursor.execute(sql, values)

        conn.commit()
        conn.close()
