async function register(){
 const data={
  name: name.value,
  email: email.value,
  password: password.value
 };

 const res=await fetch("/auth/register",{
  method:"POST",
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify(data)
 });

 alert("Registered");
}

async function login(){
 const data={
  email: email.value,
  password: password.value
 };

 const res=await fetch("/auth/login",{
  method:"POST",
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify(data)
 });

 const result=await res.json();
 localStorage.setItem("token",result.token);

 window.location="/dashboard";
}

async function getUsers(){
 const res=await fetch("/api/users");
 const data=await res.json();
 output.textContent=JSON.stringify(data,null,2);
}

async function weather(){
 const res=await fetch("/api/weather");
 const data=await res.json();
 output.textContent=JSON.stringify(data,null,2);
}

async function weather(){

 const city = prompt("Enter City");

 const res = await fetch(`/api/weather?city=${city}`);
 const data = await res.json();

 output.textContent =
   `City: ${data.city}
Temp: ${data.temperature}°C
Humidity: ${data.humidity}
Condition: ${data.description}`;
}
