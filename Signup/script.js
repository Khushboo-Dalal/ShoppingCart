const fName = document.getElementById('firstName');
const lName = document.getElementById('lastName');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const confirmPass = document.getElementById('confirmPass');
const form = document.querySelector('form');
const signupBox = document.querySelector('.signup-container');

let userArr = [];
form.addEventListener('submit',(e)=>{
         
       if(document.querySelector('.warning')) 
       document.querySelector('.warning').style.display = "none";

        e.preventDefault();
    if(fName.value.trim() === '' || lName.value.trim() === '' || email.value.trim() === '' || pass.value.trim() === '' || confirmPass.value.trim() === ''){
        const warning = document.createElement("div");
        warning.className = "warning";
        warning.innerText = "*All fields are mandatory!";
        signupBox.appendChild(warning);
    }
    else if(pass.value.trim() !== confirmPass.value.trim()){
        const warning = document.createElement("div");
        warning.className = "warning";
        warning.innerText = "*Check your password again.";
        signupBox.appendChild(warning);
    }
    else if(gotUserMail()){
        const warning = document.createElement("div");
        warning.className = "warning";
        warning.innerHTML = `*User already exists! <a href = "../Login/index.html">Login</a>`;
        signupBox.appendChild(warning);
    }
    else{
        let userObj = {};
        if(localStorage.getItem("user")){
            userArr = JSON.parse(localStorage.getItem("user"));
            console.log(userArr)
            userObj.name =  fName.value+" "+lName.value;
            userObj.email = email.value;
            userObj.password = pass.value;
            userArr.push(userObj);
            localStorage.setItem("user",JSON.stringify(userArr));
            window.location.href = "../Login/index.html"
        }
         else{
        userObj.name =  fName.value+" "+lName.value;
        userObj.email = email.value;
        userObj.password = pass.value;
        userArr.push(userObj);
        localStorage.setItem("user",JSON.stringify(userArr));
        window.location.href = "../Login/index.html";
         }
    }
})
    function gotUserMail(){
        const userArray = JSON.parse(localStorage.getItem("user"));
        if(userArray === null) return false;
        for(let i = 0; i < userArray.length; i++){
            if(userArray[i].email === email.value) return true;
        }
        return false;
    }