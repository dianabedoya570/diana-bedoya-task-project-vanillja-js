const btnAdd = document.querySelector(".btnAdd");
const newTask = document.querySelector(".newTaskTxt");
const conteiner = document.querySelector(".allTasks");
const btnDelete = document.createElement("button");
btnDelete.className = "btnDelete";
btnDelete.textContent = "Delete all done";
const msg = document.createElement("p");

btnAdd.addEventListener("click", () => {
   const tasksToDo = document.querySelectorAll(".taskConteiner");
   const tasksToDoArry = Array.from(tasksToDo);
   const txtNoTask = document.querySelector(".noTask");
     if (tasksToDoArry.length === 0) {
    txtNoTask.remove();
    tasksToDoArry.push(btnDelete);
  }


  const taskCont = document.createElement("div");
  const inputCheck = document.createElement("input");
  const typeIP = document.createAttribute("type");
  typeIP.value = "checkbox";
  inputCheck.setAttributeNode(typeIP);
  inputCheck.className = "mycheck";
  const taskTD = document.createElement("span");
  taskTD.textContent = newTask.value;
  const idT = document.createAttribute("id");
  inputCheck.setAttributeNode(idT);
  idT.value = tasksToDoArry.length + 1;
  const titleT = document.createAttribute("title");
  taskCont.setAttributeNode(titleT);
  titleT.value = `Task ${idT.value}`;
  const status = document.createAttribute("completed");
  taskCont.setAttributeNode(status);
  status.value = false;
  taskTD.className = "textTask";
  taskCont.className = "taskConteiner";
  taskCont.append(inputCheck, taskTD);
  tasksToDoArry.push(taskCont);
  newTask.value = "";
  //---Agregar cada input al escuchador de eventos
  inputCheck.addEventListener("click", () => {
    const parent = inputCheck.parentNode;
    const textTask = inputCheck.nextSibling;
    if (!parent.completed) {
      parent.completed = !parent.completed;
      textTask.className = "textTaskDone";
    } else {
      parent.completed = !parent.completed;
      textTask.className = "texTask";
    }
  });
  conteiner.append(...tasksToDoArry);

  btnDelete.addEventListener("click", () => {
    const allTasks=document.querySelectorAll(".taskConteiner");
    for (let item of allTasks) {
        if(item.completed){
           item.remove();
            
        }
        
      }
      console.log(allTasks);
    if(allTasks.length===0){
        console.log("entra");
        btnDelete.remove();
        msg.className = "noTask";
        msg.textContent = "No Tasks";
        conteiner.append(msg);
    }  

    });
    
  
 
  

});


