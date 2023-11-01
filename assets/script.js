// const tbody = document.getElementById("tbody")


// async function fetchData() {
//     const resp = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await resp.json();
//     console.log(data);

//     let tr;
//     let tdName;
//     let tdEmail;
//     let tdPhone;
//     data.forEach((element) => {
//         tr = document.createElement("tr");
//         tdName = document.createElement("td");
//         tdEmail = document.createElement("td");
//         tdPhone = document.createElement("td");

//         console.log(element);

//         tdName.textContent = element.name;
//         tdEmail.textContent= element.email;
//         tdPhone .textContent=element.phone;

//         tr.append(tdName, tdEmail, tdPhone); 

//         console.log(tr);
//         tbody.appendChild(tr);
//     });
// }
// fetchData();








// const element=document.getElementById("salam");
// setInterval(function()
// {element.innerHTML += "Salam"},1000);








// let count=1
// setInterval(() => {
// document.getElementById("salam").innerHTML=count++

// },1000);





// var myTimer;

// function clock(){
//     myTimer = setInterval(myClock,1000);
//     var c = 0;
//     function myClock(){
//         document.getElementById('demo').innerHTML = ++c;    
//     }
// }    









