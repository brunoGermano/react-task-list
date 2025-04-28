import { useState } from "react";
import { Input } from "./Input";

function AddTask(props) {
  const [title, setTitle] = useState(""); // states usados para obter os valores dos inputs
  const [description, setDescription] = useState("");
  // console.log(title, description);
  // console.log({ title, description });
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title} // se quer usar JS dentro do retur, deve-se usar "{}" as chaves
        onChange={(event) => {
          setTitle(event.target.value);
        }} // "onChange" vem lá do Java Script e tem propriedades como "event, target, value, etc" que usarei aqui. Assim eu atualizo meu state conforme mudo meu input no navegador
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <button
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            // se o título "OU" descrição não estiverem preenchidos, entra no if! O "trim" tira espaços em branco da string, assim não deixa inserir strings com eles.
            return window.alert("Preencha o título e a descrição da tarefa!");
          }
          props.onAddTasKSubmit(title, description);
          setTitle("");
          setDescription("");
        }} // Sempre que chamar uma função no evento de "onClick", use uma arrow function ou função anônima porque, do contrário, não funcionará bem, parece que fica chamando várias vezes. 
      >
        Adicionar
      </button>
    </div>
  );
}

export { AddTask };
