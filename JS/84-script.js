const isEmailValid = (email)=> {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const isPasswordValid = (password)=> {
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;;
    return passwordRegex.test(password);
}

//console.log(isPasswordValid("abcAB98"));
//console.log(isEmailValid("abc@x.com"));

btnLogin.onclick = ()=>{

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    try{
        if(!isEmailValid(email)) throw new Error("Email adresi geçersiz.");
        if(isPasswordValid(password)) throw new Error("Password geçersiz.");
    }
    catch(err){
        alert(err.message);
    }
    
    
}