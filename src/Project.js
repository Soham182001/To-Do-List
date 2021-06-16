import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import './Project.css'
import ToDoList from './ToDoList';

function Project(){

    const [inputlist,setInputlist] = useState("");
    const [list,setList] = useState([]); 

    const itemEvent = (event)=>{
        setInputlist(event.target.value);
    }

    const appendList = (event) =>{
        if(inputlist!=""){
            setList((previous_list)=>{
                console.log(previous_list);
                return [...previous_list,inputlist];
            });
            setInputlist("");
        }else{
            alert("Empty String !");
        }
    }

    const deleteItem = (id)=>{
        console.log("deleted");
        setList((oldItems)=>{
            return oldItems.filter((arrEle,index)=>{
                return index!== id;
            });
        });
    }

    return(
        <div className="main_div">
            <div className="centre_div">
                <br/>
                <h1 className="heading">What's In Your Mind ?</h1>
                <br/>
                <input className="inputBar" type="text" placeholder="Add Your Work" onChange={itemEvent} value={inputlist}></input>
                <br/>
                <br/>
                <button className="addButton" onClick={appendList}> Add </button> 
                <ol>
                    {list.map((itemsval,index)=>{
                        return(
                            <ToDoList work = {itemsval}
                            key={index}
                            id={index}
                            onSelect={deleteItem}
                            />
                        );
                    })}
                </ol>
            </div>
        </div>
    );
}

export default Project;