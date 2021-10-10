const ToDo_Item = () => {
    const test = console.log('works');
    const ToDoList = [];
    const projectList = [];

    const newItem = (description , date, project, notes, urgent) =>{
        return {
            description,
            date,
            project,
            notes, 
            urgent,
        }
    }
    
    const printArrayItem = (arrayItem) => {
        
    }


    return {
        test,
        ToDoList,
        projectList,
        newItem,
    }
}

export {ToDo_Item};