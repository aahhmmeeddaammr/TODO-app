// product => (price , category , count)
// 100 product
/*
[productPrice]=>100

[Product] =>[price]=>10
[Product] =>[count]=>11
[Product] =>[Category]=>"Mobile"
[12]=>[0]=>1
[12]=>[1]=>2
[12]=>[2]=>3
[20]=>[0]=>1
[20]=>[1]=>2
[20]=>[2]=>3

*/
// var Product ={
//     price : 10,
//     count : 11,
//     Category : "Mobile"
// }
// var Products = [
//     {
//         price : 10,
//         count : 11,
//         Category : "Mobile"
//     },
//     {
//         price : 1000,
//         count : 1,
//         Category : "Iphone"
//     }
// ]
// Products[0].price = 10000000;
// console.log(Products[0]);
/**
 * مدرسين  (id , phone , Topic , Salary) 
 * طلاب  (id , name , age , Year)
 * عمال  (id, name , category)
 * فواتير  (id , amount , paymentmethod)
 * مديرين
 * الدروس
 * المواد
 * 
*/

function getAVG(x,y,z){
    var SUM = (x+y+z)/3;
    return SUM;
}

// function print(x){
//     console.log(x); 
// }

var x = getAVG(10,10,10)

// if(input == "log"){
//     print(x)
// }else if(input == "html"){
//     document.getElementById("demo").innerHTML = x;
// }
var arr1=[1,2,3 ,2]
var arr2=[1,21,3]
// [equal] => [true]

/**
 * 
 * @param {*[]} array1  array of primitive data Type
 * @param {*[]} array2 array of primitive data Type
 * @returns true if array1 is equal to array2
 */
// function isEqual(array1 , array2){
//     if(array1.length != array2.length){
//         return false;
//     }
//     for(var i =0 ; i< array1.length ;i++){
//         if(!(array1[i]===array2[i])){
//             return false;
//         }
//     }
//     return true; 
// }

// if(isEqual(arr1,arr2)){
//     console.log("aslkfknlkanfoa");
// }
// console.log();
// var x= [1,2,3]
// x.toString()

// Task (name)





// console.log([1,2,3]==[1,2,3]);

//               STasks
 
// Tasks =>[]        []     Tasks =STasks
// Tasks => [Task]   [Task]    Tasks = STasks
//                   null   Tasks = []

var CreateBtn = document.getElementById("CreateBtn")
var UpdateBtn = document.getElementById("UpdateBtn")
var TasksContainer = document.getElementById("Tasks")
var input = document.getElementById("floatingInputGroup1")
var UpdateIndex = 0;
var Tasks =[]
var STasks = JSON.parse(localStorage.getItem("Tasks"))



if(STasks != null){
    Tasks = STasks
}else{
    Tasks = []
}

function taskToHTML(task
     , index
){
    var lineTrough=""
    if(task.Done){
        lineTrough = "text-decoration-line-through"        
    }
    return`<div class="Task d-flex justify-content-between alert alert-warning align-items-center">
    <div class="">
    <p class="p-0 ${lineTrough}" onclick="doneTask(${index})">${task.TaskHeader}</p>
    </div>
    <div>
    <button class="btn-Icon" onclick="deleteTask(${index})">
    
    <i class="fa-solid fa-trash"></i>
                </button>
                <button class="btn-Icon" onclick="Update(${index})">
    
    <i class="fa-solid fa-pen-to-square"></i>
                </button>
    </div>
            </div>`
}

function addTask(){
    var taskHeader = input.value;
    input.value=""
    var newTask = {
        TaskHeader :taskHeader,
        Done:false
    }
    Tasks.push(newTask)    
    addToLocalStorage(Tasks) 
    displayTasks()
}

function doneTask(index){
    Tasks[index].Done = ! Tasks[index].Done ;
    addToLocalStorage(Tasks) 
    displayTasks();  
}

function deleteTask(index){
    Tasks.splice(index,1)
    addToLocalStorage(Tasks) 
    displayTasks();  
}

function displayTasks(){
    TasksContainer.innerHTML  = ""
    for(var  i =0 ; i < Tasks.length  ;i++){        
        TasksContainer.innerHTML += taskToHTML(Tasks[i] , i);        
    }
}

function addToLocalStorage(array){
    var JSONTasks = JSON.stringify(array)
    localStorage.setItem("Tasks" , JSONTasks);
}

function editTask(){
    var NewTaskHeader = input.value;
    Tasks[UpdateIndex].TaskHeader = NewTaskHeader;
    Tasks[UpdateIndex].Done = false;
    displayTasks()
    input.value = ""
    UpdateBtn.style.display = "none";
    CreateBtn.style.display = "block";
    addToLocalStorage(Tasks);
}

function Update(index){    
    UpdateIndex = index;
    input.value = Tasks[index].TaskHeader;
    UpdateBtn.style.display = "block";
    CreateBtn.style.display = "none";
}

displayTasks()

// sum(Tasks)
// // Key  


// // Create
// localStorage.setItem("Name","Ahmed")

// // Edit 
// localStorage.setItem("Name" , "Amr")

//  // Delete
//  localStorage.removeItem("Name")
//  // Read 
//  var x = localStorage.getItem("Name")
// JSON 
// var user = {
//     name : "Ahmed",
//     age:21
// }
// var JSONData = JSON.stringify(user)
// // console.log(JSONData);
// localStorage.setItem("User" , JSONData)
// JSONData => JSON String
// var data = localStorage.getItem("User") // JSON String
// var Hamada = JSON.parse(data)

