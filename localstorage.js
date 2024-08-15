//Local storage is use to store and retrive data 
//The localstorage object allows you to save key/value pairs

// localStorage.setItem("id","0"); //Save data to localstorage ("key", "value")
// localStorage.setItem("name","Geethu");
// localStorage.setItem("Company","SquareSoft");
// localStorage.setItem("Postion","Customer Support");


// document.write(localStorage.getItem("id"));  // Read dat from local stroage ("Key")
// localStorage.key(2) //call using key
// localStorage.removeItem("id");// Remove specific item
// localStorage.clear();// Remove all data

//when we obejct
// const myObj={
//     id:0,
//     name:"Debug",
// };
// // localStorage.setItem("id",myObj); // it retrun as object objcet so we use JOSN strignfy method
// localStorage.setItem("data",JSON.stringify(myObj)); //object string ayi
// document.write(localStorage.getItem("data")); 
// //to convert string into object ofr retrive each property
// document.write(JSON.parse(localStorage.getItem("data")));
//localStorage.clear();


//LOGIN AND LOGOUT SYSTEM - Task 1
const input=document.querySelector("input");
const loginBtn=document.querySelector("#login");
const logoutBtn=document.querySelector("#logout");
const h1=document.querySelector("h1");

//check if the user is already logges in when the script runs
if(localStorage.getItem("token"))
{
    header.innerText = "Welcome User";

}


loginBtn.onclick=()=>
{
    if(input.value) //  if value is there
    {
        localStorage.setItem("token",input.value); // value localstorage is save avum
        header.innerText = "Welcome User"; // If login -text changed
    }
   

};

logoutBtn.onclick=()=>
{
    localStorage.clear();  // if click logout button all claer
    location.reload();    //reload the page
};