import { ChevronLeftIcon } from "lucide-react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { Title } from "../components/Title";

function TaskPage(){
    // usando o hook searchParams do react-router-dom e ele retorna uma lista
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    
    return(
    <div className="h-screen w-screen bg-slate-500 p-6">
       
        <div className="w-[500px] mx-auto space-y-4">
            <div className="flex justify-center relative mb-6"> {/* O "relative" e o "absolute" funciona com um elemento HTML sobrepondo o outro, isso quer dizer que o objeto que tem o valor "absolute" ficará a frente do "relative", dando o efeito de camada/sobreposição. Se quiser ver isso basta remover a classe "left-0" do elemento "button" que tem a classe "absolute". */}
                <button className="absolute left-0 top-0 bottom-0 text-slate-100" onClick={()=> navigate(-1)/** Se eu não criar a arrow function para chamar o navigate e passar ele direto para o onClick, o navigate será sempre executado assim que o return for reenderizado, e não é isso que queremos, pois queremos que ele execute somente quando o button for clicado. */ }> <ChevronLeftIcon/> </button>
                <Title> 
                Detalhes da Tarefa
                </Title>
            </div>

            <div className="bg-slate-200 p-4 rounded-md">
                <h2 className="text-xl font-bold text-slate-600">{title}</h2>
                <p className="text-slate-600">{description}</p>

            </div>
        </div>


    </div>
)
}

export { TaskPage }