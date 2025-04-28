import { Tasks } from "./components/Tasks";
import { AddTask } from "./components/AddTask";
import { useEffect, useState } from "react";
import { v4 } from "uuid"
import { Title } from "./components/Title";
// import { TestByClass } from "./components/TestByClass";

// Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process

function App() {
  // const  tasksList = [
  //   {
  //     id: 1,
  //     title: "Estudar programação",
  //     description: "15 de julho às 10:00",
  //     isCompleted: true,
  //   },
  //   {
  //     id: 2,
  //     title: "Fazer compras",
  //     description: "15 de julho às 15:00",
  //     isCompleted: true,
  //   },
  //   {
  //     id: 3,
  //     title: "Ler um livro",
  //     description: "15 de julho às 18:00",
  //     isCompleted: false,
  //   },
  // ]

  // const [tasks, setTasks] = useState(tasksList);
  // const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || tasksList); // JSON.parse() converte de JSON para JS object.
 
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  /** Hook que recupera do localstorage e seta os valores no array de tarefas */
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // JSON converte o objeto JS para um JSON.
  }, [tasks]);

  
  /** Hook que recupera da API e seta os valores no array de tarefas. USando a API como fonte de dados, o localstorage se torna inútil porque os dados do localstorage serão sempre sobreescritos pelos retornados da API */
  useEffect( () => {
    /*
    const fetchTasks = async () => {
      // CHAMAR A API
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10", { method: "GET"}); // posso pasar o objeto com  o método "GET", mas por padrão o "fetch" já chama com ele.
      
      // RECUPERAR OS DADOS QUE ELA RETORNA
      const data = await response.json();
      console.log(data);

      // PERSISTIR/ARMAZENAR OS DADOS RETORNADOS NO STATE
      setTasks(data);
    }
    */
    /* SE QUISER, VOCÊ PODE BUSCAR OS DADOS DA API, BASTA DESCONMENTAR A FUNÇÃO ABAIXO! */
    
    // fetchTasks();

  }, []) // o segundo parâmetro sendo um array vazio faz com que o hook só execute uma vez que é qdo o usário acaba de acessar a aplicação


  function onTaskClick(taskId) {
    // FORÇAR O ERRO COM O PARÂMETRO "task.Id" PARA ENSINAR O JEAN A ANALISAR O DEBUGGER, ONDE ELE MOSTRA EXATAMENTE O ARQUIVO E O PONTO EXATO ONDE ESTÁ O ERRO!

    // console.log(`function onTaskClick com id : ${taskId}`);

    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }; // desestrutura cada propriedade do objeto "task" e para a "isCompleted" seta o valor inverso dela para mudar de não checado para checado e vice-versa.
      }
      return task;
    });

    setTasks(newTasks);
  }

  function onClickDeleteTask(taskId) {
    let newTasks = tasks.filter((task) => {
      return task.id !== taskId; // matém na lista todas as tarefas com excessão da que será deletada.
    });
    // console.log("deleeteTasks");
    // newTasks.map((task) => console.log(task.id, task.title, task.isCompleted));

    setTasks(newTasks); // toda vez que o state é atualizado, a interface é atualizada!
  }

  function onAddTasKSubmit(title, description) {
    console.log("dentro do onAddTaskSubmit ", title, description);
    const newTask = {
      // id: tasks.length + 1, // sedeixar o ID assim ele dá problema caso apague e crie novos itens, ele irá repetir IDs
      id: v4(), // cria o id aleatório
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]); // para atualizar um"state" que é uma lista, você não consegue usar o método "push" da lista pois você precisa usar a função de "setTasks" do hook para alterá-lo.
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>
          Gerenciador de Tarefas
        </Title>
        <AddTask onAddTasKSubmit={onAddTasKSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onClickDeleteTask={onClickDeleteTask}
        />

        {/* <TestByClass/> */}
        
      </div>
    </div>
  );
}

export default App;
