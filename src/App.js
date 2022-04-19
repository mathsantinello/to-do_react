import React, {useState} from 'react';
import { Added_itens, Add_button, BodyStyle, Data_input, Done, Entries, List_logo, Page_container, Title, To_do } from './styles';
import {faTrash, faSquareCheck, faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  let [task,setTask] = useState("");
  let [tasklist, setTaskList] = useState([]);
  let [donetasks, setDoneTasks] = useState([]);
  
  const date_write = ()=>{
    let now = new Date;
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    let day = now.getDate(); 
    let month = now.getMonth()+1;
    return `${day}/${month} ${hours}:${minutes}:${seconds}`
  }
  const ChangeInput = (event)=>{
    setTask(event.target.value);
  }
  const addTask = () =>{
    if(task===""){
      alert("Nada pra adicionar!")
      return;
    }
    setTaskList([...tasklist,{name: task, dateAdded:date_write()}]);
    setTask("");
    console.log(tasklist);
  }
  const finishTask = (id) =>{
    setDoneTasks([...donetasks,tasklist.find(x=>`${x.name}${x.dateAdded}`===id)]);
    setTaskList(tasklist.filter(x=>`${x.name}${x.dateAdded}`!==id));
  }
  const returnTask = (id)=>{
    setTaskList([...tasklist,donetasks.find(x=>`${x.name}${x.dateAdded}`===id)]);
    setDoneTasks(donetasks.filter(x=>`${x.name}${x.dateAdded}`!==id));
  }
  const deleteTask = (id)=>{
    setDoneTasks(donetasks.filter(x=>`${x.name}${x.dateAdded}`!== id));
  }
  return (
    <>
    <BodyStyle/>
      <Page_container>
        <To_do>
          <Title>Para fazer</Title>
          <div>
            <Data_input placeholder="só vai" type = "text" value ={task} onChange={ChangeInput}/>
            <Add_button onClick={addTask}>+</Add_button>
          </div>
          <Added_itens>
            {tasklist.map(({name,dateAdded}) =>
              <Entries>{dateAdded} {name} <List_logo onClick={()=>finishTask(`${name}${dateAdded}`)}><FontAwesomeIcon icon={faSquareCheck}/></List_logo></Entries>
            )}
          </Added_itens>
        </To_do>
        <Done>
          <Title>Feitoso</Title>
            {donetasks.map(({name,dateAdded}) =>
                <Entries>
                  <List_logo onClick={()=>returnTask(`${name}${dateAdded}`)}><FontAwesomeIcon icon={faCircleArrowLeft}/></List_logo> 
                  {dateAdded} {name} 
                  <List_logo onClick={()=>deleteTask(`${name}${dateAdded}`)}><FontAwesomeIcon icon={faTrash}/></List_logo>
                </Entries>
              )}
        </Done>
      </Page_container>
    </> 
  );
}

export default App;
