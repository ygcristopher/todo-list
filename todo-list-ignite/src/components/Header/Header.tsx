import Logo from '../../assets/Logo.svg'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import styles from './Header.module.css'
import { FormEvent, ChangeEvent, useState } from 'react';


interface Props {
    onAddTask: (taskTitle: string) => void;
}



export function Header({onAddTask}: Props) {
    const [title, setTitle] = useState("");


   function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
   }

   function onChangeTitle(event: ChangeEvent<HTMLInputElement>){
    setTitle(event.target.value)
   }


    return (
     <header className={styles.header}>
            <img src={Logo} alt=""/>

            <form className={styles.TasksForm} onSubmit={handleSubmit}>
            <input placeholder='Adicione uma nova ToDo' onChange={onChangeTitle} value={title} />
            <button>
             Criar
             <AiOutlinePlusCircle size={20}/>
            </button>  
        </form>
     </header>
    );
}

export default Header