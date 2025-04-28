function Input (props){
    return (
        <input
            className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            // type={props.type}
            // placeholder={props.placeholder}
            // value={props.value}
            // onChange={props.onChange}

            // POSSO PASSAR FAZENDO UM SPREAD, JÁ QUE TEM O MESMO NOME DO QUE VEM E DO QUE RECEBE NO INPUT
            {...props}
        />
    );

}

export { Input }