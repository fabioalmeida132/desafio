# Instruções para rodar a aplicação:

* Ter instalado Node em sua versão 14+
* Após clonar o projeto, em seu diretório raiz execute o seguinte comando:
<pre>npm install</pre>
* Criar no banco de dados um novo schema com o nome do banco desejado.
* Renomear no diretório raiz o arquivo de <b>.env.example</b> para <b>.env</b> setando as variaveis de ambiente de acordo com as suas configurações MySql.
* Rodar as migrations com o comando:
<pre>node ace migration:run</pre>
* Rodar o seed de status (extremamente importante para o funcionamento, como as tasks e subtasks possuem a mesma nomeclatura de status, foi criado uma tabela só para status)
<pre>node ace db:seed</pre>
* Executar a aplicação com o comando:
<pre>npm run dev</pre>

Por default a aplicação irá rodar na porta 3333, acessando através do link, deverá receber a mensagem de <b>API is running</b><br>
http://localhost:3333

# Documentação e Disclaimer

> Informações


* Modelagem do banco
![alt text](https://i.imgur.com/aDWPU5T.png "Imagem de modelagem banco de dados do desafio proposto")
* Versão do Front-end: https://github.com/fabioalmeida132/desafio-front (Não era o foco do desafio, porém resolvi aprimorar minhas habilitades com front também. :satisfied:)


> Rotas

| HTTP VERB           |  ROUTE              |  DESCRIPTION        |
| ------------------- | ------------------- | ------------------- |
|  GET                |  /boards            | Lista todos os quadros.|
|  POST               |  /board             | Envie no formato json os campos <b>title e description</b>, para criar um quadro.|
|  PUT               |  /board/:id             | Passe por parametro o id e envie no formato json os campos <b>title e description</b>, para atualizar um quadro.|
|  DELETE               |  /board/:id             | Passe por parametro o id do quadro, para deletar.|
|  GET                |  /tasks/:id            | Passa por parametro o id do quadro, para listar todas as suas tarefas.|
|  POST               |  /task             | Envie no formato json os campos <b>title,description,boardId e statusId</b> para criar uma tarefa.|
|  PUT               |  /task/:id             | Passe por parametro o id e envie no formato json os campos <b>title e description</b>, para atualizar uma tarefa.|
|  DELETE               |  /task/:id             | Passe por parametro o id da tarefa, para deletar.|
|  GET                |  /subtasks/:id            | Passa por parametro o id da tarefa, para listar todas as suas subtarefas.|
|  POST               |  /subtask             | Envie no formato json os campos <b>title,description,taskId e statusId</b>, para criar uma subtarefa.|
|  PUT               |  /subtask/:id             | Passe por parametro o id e envie no formato json os campos <b>title e description</b>, para atualizar uma subtarefa.|
|  DELETE               |  /subtask/:id             | Passe por parametro o id da subtarefa, para deletar.|
|  GET                |  /status/:id            | Lista todos status |
|  PUT               |  /task/status/:id             | Passe por parametro o id da tarefa e envie no formato json o campos <b>statusId</b>, para atualizar o status da tarefa.|
|  PUT               |  /subtask/status/:id             | Passe por parametro o id da subtarefa e envie no formato json os campos <b>statusId</b>, para atualizar o status da subtarefa.|


> Disclaimer


O projeto se baseava em desenvolver um backend para criação de quadros. com tarefas e subtarefas, possuindo ambos status de andamento.

O projeto inclui:

* Desenvolvido com AdonisJS (Laravel do javascript :laughing: )
* Rotas em API REST
* Migrations e Relacionamentos
* Models e Controllers
* Validators

