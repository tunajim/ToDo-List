const ToDo_Item = () => {
    const test = console.log('works');
    const ToDoList = [];
    const projectList = [];
    const filteredList = [];

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
        filteredList,
        newItem,
    }
}

export {ToDo_Item};