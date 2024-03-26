FROM postgres:latest

ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=admin
ENV POSTGRES_DB=alo_crimes

COPY database/init.sql /docker-entrypoint-initdb.d/
