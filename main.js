//set the task in a var
const newTask = document.getElementById('new-task');
const todoSection = document.getElementById('todos');

//function to add the new task to the list 
function addTask(task)
{
    let htmlSentence = ` <div class="todo-box todo-wrapper">
    <div class="check-circle circle-notChecked added-circle"></div>
    <div class="task active-task added-task">${task}
      <span class="cross">
      <svg id="delete-task" class=xmlns="http://www.w3.org/2000/svg" width="18" height="18">
      <path fill="hsl(236, 9%, 61%)" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
      </span>
    </div>
      
  </div>`

    //appending the task to the todo section
     todoSection.insertAdjacentHTML("afterbegin",htmlSentence);

     //removing//the input 
     newTask.value='';
    
}
//adding the task after pressing Enter
 newTask.addEventListener("keydown", (e)=>{
    if(e.key==='Enter')
    {
        addTask(newTask.value);
    }     
    });
    
   
//checking and complete an element
document.addEventListener('click',e=>{
    const target = e.target;
    //the pervious sibling of list items

    if(target.classList.contains("added-task"))
    {
        const unCheckedCircle = target.previousElementSibling;
        target.classList.toggle("completed-task");
        target.classList.toggle("active-task")
        unCheckedCircle.classList.toggle("circle-checked");
    }
    else if(target.classList.contains("added-circle")){
        const unCheckedTask = target.nextElementSibling;
        console.log(unCheckedTask);
        target.classList.toggle("circle-checked");
        unCheckedTask.classList.toggle("completed-task");
        unCheckedTask.classList.toggle("active-task")

    }
});


//deleting the task after clicking the cross 
document.addEventListener('click',e=>{

    const target = e.target;
    console.log(target.id);
    if(target.id == 'delete-task')
    {
        const parentNode = target.parentNode.parentNode.parentNode;
        parentNode.parentNode.removeChild(parentNode);
    }
    
});

//adding stylie to the clicked item and remove the styling from other options
function styleClicked(ele)
{
    document.querySelectorAll('.option').forEach(option=>{
        if(option.classList.contains('footer-item-clicked'))
        {
            option.classList.remove('footer-item-clicked');
        }
    })

    ele.classList.toggle('footer-item-clicked');

}

//showing just the active element 
function showActive()
{

    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task=>{
        if(task.classList.contains('completed-task'))
        {
            const parentNode = task.parentNode;
            parentNode.style.display  = 'none';
        }
        else{ 

            const parentNode = task.parentNode;
            parentNode.style.display  = 'flex';
           
        }

    });
}


//showing just the completed element 
function showCompleted()
{

    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task=>{
        if(!task.classList.contains('completed-task'))
        {
            const parentNode = task.parentNode;
            parentNode.style.display  = 'none';
        }
        else{ 
            const parentNode = task.parentNode;
            parentNode.style.display  = 'flex';

        }

    });
}

function showAll()
{
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task=>{
        const parentNode = task.parentNode;
        parentNode.style.display  = 'flex';
        })
}

//calling the functions with active buttons
function callActiveFuncions(ele)
{
    styleClicked(ele);
    showActive();
}

//calling the functions with active buttons
function callCompletedFuncions(ele)
{
    styleClicked(ele);
    showCompleted();
}

function callAllFunctions(ele)
{
    styleClicked(ele);
    showAll();
}


//counting the active tasks
let activeItems = document.querySelectorAll('.active-task');

function countItems()
{
    let leftItem = document.querySelector('.left-items');
    //counting the active tasks
    let activeTasksNum = activeItems.length;

    if(activeTasksNum >1)
    {
        leftItem.innerHTML =`${activeTasksNum} items left`
    }
    else{
        leftItem.innerHTML =`${activeTasksNum} item left`
    }
    
}

countItems();