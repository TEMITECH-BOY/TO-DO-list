let tasks=[]
const greetEl = document.getElementById("greet-el")
const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("save-btn")
const ulEl = document.getElementById("ul-el") 
const deleteBtn = document.getElementById("delete-btn")

function greetuser(user){
     greetEl.innerText = `Goodmorning ${user},  Lets plan your day!` 
}
greetuser("Fayobi")

function renderTasks(){
    
    let tasksList =""

 for(let i= 0; i<tasks.length ; i++){
 tasksList += `
                <li>
                    
                      ${tasks[i]} 
                       <input id=check-input type="checkbox"/>
                    
                </li> 
                
              `
}

 ulEl.innerHTML = tasksList
 
}


saveBtn.addEventListener("click", function(){

    if(inputEl.value ==='') {
           alert("You must write something!")
        }else{
    tasks.push(inputEl.value)}
    inputEl.value= ""
    renderTasks()
    
   }
)


deleteBtn.addEventListener("dblclick", function(){
    tasks =[]
    renderTasks()
})

