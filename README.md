<h1 align="center">
    <br>
    <p align="center"> :sparkles: Projeto Final {Reprograma} - Turma ON15 - :sparkles: <p>
</h1>
<p align="center">
<a href="https://imgur.com/jj8FB2c"><img src="https://i.imgur.com/jj8FB2c.png" title="source: imgur.com" /></a>
</p>
<br>

<br>

## **Sobre o projeto** 

<br>

<p align="justify">Este projeto surgiu quando meu sobrinho de 3 anos foi diagnosticado com Autismo. Ele mora em uma cidade do interior do Paraná que possui 2 mil habitantes, acompanhei junto a minha irmã todo o processo desde aos primeiros sinais que as professoras da creche observaram nele até o fechamento do diagnóstico por uma Neurologista Pediatra, e a dificuldade pós diagnóstico na busca de encontrar profissionais para que fosse realizada todas as terapias e acompanhamentos necessários semanalmente.

<p align="justify">Dentre todo o processo quis criar essa API com o objetivo principal a importância de ajudar pais de crianças autistas a terem mais acesso a equipe multidisciplinar para Tratamento do Autismo,principalmente em cidades do interior e com poucos habitantes.  

<p align="justify">Em virtude de todos os fatos mencionados, o propósito da API é indicar para pais de crianças autistas em qual cidade, local possam encontrar profissionais (por exemplo: pediatra,neuropediatra,psicólogos,nutricionista infantil,fisioterapeutas,psicopedagogo,fonoaudiólogos e terapeutas ocupacionais )que sejam mais próximo de sua residência.
<br><br>

## **Descrição da API Projeto Apoio à Criança Autista**

<br>

<p align="justify">A API Apoio à Criança Autista permitirá o cadastro de profissionais interessados em fazer parte desta iniciativa.

<p align="justify">A construção deste projeto consiste em uma API RESTFull fundamentada no CRUD,integrado com o banco de dados, onde é possível listar todos os profissionais,cadastrar novos profissionais, atualizar os dados e deletar o cadastro do profissional. 
  
<br>

## **Link**

- [Apresentação]()

<br>

## **Funcionalidades**

- Listar todas os profissionais que estão cadastrados no sistema;
- Listar Profissionais por cidade;
- Lista Profissionais por especialidade;
- Cadastrar Profissionais;
- Atualizar os dados de um Profissional, caso haja mudança de telefone,cidade e etc;
- Deletar esse cadastro do Profissional.

<br>

## **Tecnologias Utilizadas**

Para a construção deste projeto, as seguintes tecnologias foram utilizadas:

<p  align="justify">
<a  href="https://www.javascript.com/"><img  alt="Java Script"  src="https://img.shields.io/badge/JavaScript-pink">
<a  href="https://git-scm.com/"><img  alt="Git version"  src="https://img.shields.io/badge/Git/GitHub-pink">
<a  href="https://nodejs.org/pt-br/"><img  alt="Node version"  src="https://img.shields.io/badge/NodeJS-pink">
<a  href="https://www.mongodb.com/cloud/atlas"><img  alt="Node version"  src="https://img.shields.io/badge/MongoDB%20Atlas-pink">
<a  href="https://www.postman.com/"><img  alt="Postman"  src="https://img.shields.io/badge/Postman-pink">
<a  href="https://code.visualstudio.com/"><img  alt="VsCode"  src="https://img.shields.io/badge/VSCode-pink">
<a  href="https://dashboard.heroku.com/apps"><img  alt="Heroku"  src="https://img.shields.io/badge/Heroku-pink">

## **Bibliotecas Aplicadas**
As seguintes bibliotecas foram aplicadas:

<p  align="justify">
<a  href="https://expressjs.com/pt-br/"><img  alt="Express version"  src="https://img.shields.io/badge/express-4.17.1-pink">
<a  href="https://www.npmjs.com/package/nodemon"><img  alt="Nodemon version"  src="https://img.shields.io/badge/nodemon-2.0.6-pink">
<a  href="https://www.npmjs.com/package/dotenv-safe"><img  alt="Dotenv-safe version"  src="https://img.shields.io/badge/dotenv-8.2.0-pink">
<a  href="https://mongoosejs.com/"><img  alt="Mongoose version"  src="https://img.shields.io/badge/mongoose-5.10.17-pink">
<a  href="https://www.npmjs.com/package/cors"><img  alt="npm version"  src="https://img.shields.io/badge/cors-2.8.5-pink">
<a  href="https://www.npmjs.com/"><img  alt="npm version"  src="https://img.shields.io/badge/npm-6.14.6-pink">

</p>


<br>

## **Arquitetura MVC** 
Arquitetura padrão da API Projeto Apoio à Criança Autista:
```
 📁 PROJETO APOIO À CRIANÇA AUTISTA
   |
   |-  📁 src
   |    |
   |    |- 📁 controllers
   |         |- 📑 profissionaisController.js
   |  
   |    |- 📁 database
   |         |- 📑 mongoConfig.js
   |
   |    |- 📁 models
   |         |- 📑 profissionaisSchema.js
   |       
        |- 📁 routes
             |- 📑 index.js
   |         |- 📑 profissionaisRoutes.js 
   |         
   |    |- 📑 app.js
   
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 Procfile
   |- 📑 README.md
   |- 📑 server.js
 

```
<br>

## **Rotas**

* local: http://localhost:8080

* Heroku: https://projetoapoioacriancaautista.herokuapp.com/

    * Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku

<br>

## **Rotas**

### Retorna teste com apresentação 

| Método HTTP  | Tipo Rota | Endpoint                     | Descrição                            |
| ------------ | --------- | ---------------------------- | ------------------------------------ |
| GET          | Pública   | `http://localhost:8080/`     |  Mensagem de apresentação (Index)    |             

<br>

### Manipulação das Rotas dos Profissionais:

| Método HTTP  | Tipo Rota | Endpoint                | Descrição                                            |
| ------------ | --------- | ----------------------- | -----------------------------------------------------|
| GET          | Pública   | `/profissionais/all`         | Retorna todos os profissionais cadastrados                          |
| GET          | Pública   | `/profissionais/city`        | Retorna profissionais da cidade colocada na busca          |
| GET          | Pública   | `/profissionais/specialty`      | Retorna profissionais por especialidade                    |
| POST         | Pública   | `/profissionais/create`      | Cadastra um novo profissional                         |
| PUT          | Pública   | `/profissionais/update/:id`  | Altera informações de um profissional específico por id |
| DELET        | Pública   | `/profissionais/delete/:id`  | Remove um profissional específico por id                |

<br>

## **Collections**

### Dados para Collection de Profissionais

- id: autogerado e obrigatório
- nome: texto e obrigatório
- especialidade: texto e obrigatório
- identificação: número e obrigatório
- estado: texto e obrigatório
- cidade: texto e obrigatório
- endereço: texto e obrigatório
- telefone: número e obrigatório
- criadoEm: data gerada automaticamente e obrigatório

## API deverá retornar seguinte JSON:

```jsx

{
      "message": "Cadastro realizado com sucesso.",
    "saveProfissional": {
        "nome": "Felipe Silva",
        "especialidade": "Pediatra",
        "identificação": 22222,
        "estado": "Paraná",
        "cidade": "Londrina",
        "endereço": "Centro",
        "telefone": 4331267744,
        "createdAt": "Mon Jul 25 2022 17:49:29 GMT-0300 (Horário Padrão de Brasília)",
        "_id": "62df02bbaa9b9e9824b73846",
        "__v": 0
    }
}
    
```
<br>

## **Melhorias Futuras** :warning:

* Aumentar o alcance por local (mais cidades, incluir estados e etc);
* Integrar com o Maps para calcular a distância do Profissional mais próxima do Paciente; 
* Implantação de código HTML e CSS para criação de uma interface capaz de possibilitar a interação do usuário com aplicação;
```

Toda sugestão de melhoria deste projeto será muito bem-vinda!!!
    
```
<br>

## Agradecimentos :sparkles: :heart:

Este projeto eu dedico e agradeço a [{reprograma :purple_heart:}](https://reprograma.com.br/) pela oportunidade de poder fazer parte desse programa maravilhoso. À todas as minhas colegas maravilhosas da turma On15 :purple_heart:},também agradeço a todas as professoras que foram incríveis ao longo de todo o processo, também a psicóloga <a href="https://www.linkedin.com/in/juliana-souza-farias-59506bb6/">Juliana Farias</a> que foi fundamental durante toda essa jornada e em especial a [Hanna](https://github.com/HannahFreitas) que segurou a nossa mão e nos apoiou muito.

Nunca se esqueça CONFIE NO PROCESSO! :purple_heart:

Isso é só o começo! 🚀

## Autora

<br>


<img src="./assets/imagem.png" /> </td><br> 

<br>

Criado por **Anna Carolina**.
<br>



  <div>
    <a href="http://linkedin.com/in/anna-carolina-pereira-da-silva-880243215" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>  
  <a href = "https://github.com/carolpsillva"><img src="https://img.shields.io/badge/GitHub-black?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>
   <a href = "carolpsillva@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
   <a href="https://instagram.com/carolpsilvaa" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
 </div>
  

<br>

