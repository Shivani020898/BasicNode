 //get form
let form = document.getElementById("myForm")
console.log(form)


//addEventListener is a method of JS for submit , it will take two peramerer 1...intruction( aapko kya karna he ),,2..function name

form.addEventListener("submit",myFunc)

let arr = [];
function myFunc(event){
    event.preventDefault()
    let Name = document.getElementById("name").value
   
    let EmployeeID = document.getElementById("employeeID").value

    let Department = document.getElementById("department").value

    let Exp = document.getElementById("exp").value

    let Email = document.getElementById("email").value

    let Mobile =document.getElementById("mbl").value

    let data={
        DName : Name,
        DEmpId : EmployeeID,
        DDepartment : Department,
        DExp : Exp,
        DEmail : Email,
        DMobile : Mobile
    }
    console.log(data)
   
     arr.push(data)
      console.log(arr)
      
Display(arr);//function calling

   document.querySelector("form").reset();

}

function Display(arr){
  document.querySelector("tbody").innerHTML ="";

 arr.forEach( function (el) {
    let tr = document.createElement("tr");

    let name = document.createElement("td");
     name.innerText =el.DName;

     let id = document.createElement("td");
    id.innerText =el.DEmpId;

     let department = document.createElement("td");
    department.innerText =el.DDepartment;

    let exp = document.createElement("td");
    exp.innerText =el.DExp;
  
     let email = document.createElement("td");
   email.innerText =el.DEmail;

   let Mob = document.createElement("td");
   Mob.innerText =el.DMobile;

    let role = document.createElement("td");

    let roleText = giveRole(el.DExp)
    
    role.innerText = roleText;
    
    let DeleteElement = document.createElement("td")
    
    DeleteElement.innerText = "Delete"
    DeleteElement.style.cursor = "pointer"
    DeleteElement.style.backgroundColor ="Red"
     
    DeleteElement.addEventListener("click",function(event)
    {
        event.target.parentNode.remove()
    })

    
    
    tr.append(name,id,department,exp,email,Mob,role,DeleteElement);
    document.querySelector("tbody").append(tr);
 
 });

}
    function giveRole(DExp)
    {
        if(DExp>5){
            return "Senior";
        }
        else if(DExp>=2 && DExp<=5){
            return "Junior";
        }
        else if(DExp<=1 ){
            return "Fresher"
        }
      }
    









