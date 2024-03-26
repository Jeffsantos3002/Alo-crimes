import csv

class CsvDataLoader:
    def __init__(self, strategy):
        self.strategy = strategy
        

    def load_data(self, csv_file_path):
        conn = self.strategy.connect()
        cursor = conn.cursor()

        with open(csv_file_path, 'r', encoding='utf-8-sig') as file:
            reader = csv.reader(file)
            next(reader)  
            for row in reader:
                uf, tipo_crime, ano, mes, ocorrencias = row
                sql = "INSERT INTO ocorrenciasuf (uf, tipo_crime, ano, mes, ocorrencias) VALUES (%s, %s, %s, %s, %s)"
                values = (uf, tipo_crime, ano, mes, ocorrencias)
                cursor.execute(sql, values)

        conn.commit()
        conn.close()
