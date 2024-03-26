O backend utiliza um padrão de projeto chamado Módulo (Module), pode notar a aplicação do conceito através da nomeclatura e separação das pastas que retratam a modularização do projeto.

### Database
`docker build -t alo_crimes_db .`
`docker run --name alo_crimes_db_container -d -p 5432:5432 alo_crimes_db`

### API
`npm install`
`npm start`
