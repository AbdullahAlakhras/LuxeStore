const users=localStorage.getItem("users") ?JSON.parse(localStorage.getItem("users")): [];

if(users.length==0){
    fetch('./users.json').then(res =>res.json()).then(data => {
        users=data;
        localStorage.setItem("items",JSON.stringify(items));
    });
};
console.log(users);