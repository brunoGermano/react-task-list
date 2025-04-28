import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

function Tasks(props) {
  // criando um hook do react-router-dom para navegação
  const navigate = useNavigate()

  function onSeeDetailsClick(task){ // função para criar o caminho da navegação com os Query Params
    
    // MODO NORMAL QUE FUNCIONA
    // navigate(`/task?title=${task.title}&description=${task.description}`) /* Depois do "?" são os QueryParams que o hook do react-router-dom aceita */

   // MODO QUE É MAIS SEGURO
    const query = new URLSearchParams(); // faz o tratamento da string que é passada pro "navigate", se ela tiver "espaço", por exemplo, ele coloca o  "%20" e etc.
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => {
        return (
          <li key={task.id} className="flex gap-2">
            <button
              /* Pra colocar código js dentro de tag HTML deve-se colocar as "{}", por isso depois do "className" coloquei, já que queria usar o template string do js que é a interpolação de strings. A parte "task.isCompleted && "line-through" coloca a segunda parte depois do operador "&&" na string do template string caso a propriedade "isCompleted" seja true. */
              className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${
                // task.isCompleted && "line-through"
                task.isCompleted ? "line-through" : ""
              }`}
              onClick={() => {
                props.onTaskClick(task.id);
              }}
            >
              {task.title}
              {task.isCompleted ? " COMPLETA" : " INCOMPLETA"}
            </button>

            <Button onClick={()=> onSeeDetailsClick(task)/* Como eu quero passar parâmetros para a função "onSeeDetailsClick", eu preciso usar uma "arrow function" para chamar ela. */}> 
              <ChevronRightIcon />
            </Button>

            <Button
              onClick={() => {
                props.onClickDeleteTask(task.id);
              }}
            >
              <TrashIcon />
            </Button>
          </li>
        );
      })}
    </ul>
  );
}
export { Tasks };
