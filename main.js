//set the task in a var
const newTask = document.getElementById('new-task');
const todoSection = document.getElementById('todos');

//function to add the new task to the list 
function addTask(task)
{
    let htmlSentence = ` <div class="todo-box todo-wrapper">
    <div class="check-circle circle-notChecked added"></div>
    <p class="task added">${task}</p>
    <div class="cross"> <svg class=xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="hsl(236, 9%, 61%)" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
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

    if(target.classList.contains("added"))
    {
        const unCheckedCircle = target.previousElementSibling;
        target.classList.toggle("completed-task");
        unCheckedCircle.classList.toggle("circle-checked");
    }
});

