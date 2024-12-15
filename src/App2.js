import React from 'react';
import TitleImage from './Components/Title';
import AddTask from './Components/AddTask';
import Line from './Components/ListLine';


class App extends React.Component{
    constructor(){
        super()
        this.state = {
            tasks : [{id : 1, value : 'Buy cat', isChecked : false}, {id : 2, value : 'Clean cat', isChecked : false}],
        }
    }
    num = 2

    addTask = (taskName,num) =>{
        if (taskName.trim()){
            this.setState((prevState) => ({
                tasks : [...prevState.tasks , { id: Date.now() , value: taskName, isChecked: false }]
            }) )
            console.log(this.state.tasks)
        }
        num ++
        console.log(num)
    }

    deleteTask = (id) => {
        this.setState((prevState) => ({
            tasks : prevState.tasks.filter((task,i,t) => task.id !== id)
        }))
    }

    checkTask = (id) => {
        this.setState((prevState) => ({
            tasks : prevState.tasks.map((task,i,t) => task.id === id ? {...task , isChecked : !task.isChecked} : task )
        }))
    }


    render(){
        const styleAll = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center', 
        }
        return(<div style={styleAll}>
            <TitleImage/>
            <AddTask onAdd = {this.addTask}/>
            <div>

                {
                    this.state.tasks.map((task,i,t) => 
                    (<Line 
                    key={task.id}
                    task= {task}
                    onDelete = {()=> this.deleteTask(task.id)}
                    onCheck = {()=> this.checkTask(task.id)}
                     />) )
                }

            </div>

        </div>)
    }


}

export default App