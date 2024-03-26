import csv
import psycopg2

def inserir_dados_csv_no_postgres(csv_file_path):
    
    conn = psycopg2.connect(
        dbname="postgres",
        user="postgres",
        password="1234",
        host="localhost"
    )
    cursor = conn.cursor()

    
    with open(csv_file_path, 'r', encoding='utf-8-sig') as file:
        reader = csv.reader(file)
        next(reader)  
        for row in reader:
            
            uf, tipo_crime, ano, mes, ocorrencias = row

            
            sql = "INSERT INTO dadosuf (uf, tipo_crime, ano, mes, ocorrencias) VALUES (%s, %s, %s, %s, %s)"
            values = (uf, tipo_crime, ano, mes, ocorrencias)
            
            
            cursor.execute(sql, values)

    
    conn.commit()
    conn.close()

caminho_csv = r"C:\Users\marce\Downloads\indicadoressegurancapublicauf (1) - Ocorrências.csv"

inserir_dados_csv_no_postgres(caminho_csv)
