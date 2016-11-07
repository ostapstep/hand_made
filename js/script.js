"use strict"

function CreateUserObject(userName, userPassword, userAge, userEmail, userSex, timeOfAuthorizetion) {		//   Конструктор класу новий користувач
    this.userName=userName;
    this.userPassword=userPassword;
    this.userAge=userAge;
    this.userEmail=userEmail;
    this.userAge=userAge;
    this.userSex=userSex;
    this.timeOfAuthorizetion=timeOfAuthorizetion;
    var self = this;    // можливість працювати з this як змінною   !!!
    //console.log(self);
}

function checkMyForm(FormName){         //перевірка форми на помилки заповнення		Form validation
	//console.log('checkMyForm works!!! ' + FormName);
	var counteroferrors=0;
	for (var i = 0; i < document.forms[FormName].getElementsByClassName('cheekingInformation').length ;i++){
		if (document.forms[FormName].getElementsByClassName('cheekingInformation')[i].value == "" || document.forms[FormName].getElementsByClassName('cheekingInformation')[i].value == null) {
            document.forms[FormName].getElementsByClassName('cheekingInformation')[i].nextElementSibling.innerHTML = "Це поле не може бути порожнім.";
            document.forms[FormName].getElementsByClassName('cheekingInformation')[i].parentElement.classList.add('has-error');           
            counteroferrors++;        }
        else {
        	document.forms[FormName].getElementsByClassName('cheekingInformation')[i].parentElement.classList.remove('has-error');
        	document.forms[FormName].getElementsByClassName('cheekingInformation')[i].nextElementSibling.innerHTML = "";
        	if(document.forms[FormName].getElementsByClassName('cheekingInformation')[i].getAttribute('data-pattern') != null){
                var dataPattern = document.forms[FormName].getElementsByClassName('cheekingInformation')[i].getAttribute('data-pattern');
                var pattern = new RegExp(dataPattern);
                if(pattern.test(document.forms[FormName].getElementsByClassName('cheekingInformation')[i].value)){
                	document.forms[FormName].getElementsByClassName('cheekingInformation')[i].parentElement.classList.remove('has-error'); 
                } else {
                    document.forms[FormName].getElementsByClassName('cheekingInformation')[i].parentElement.classList.add('has-error'); 
                    document.forms[FormName].getElementsByClassName('cheekingInformation')[i].nextElementSibling.innerHTML = "Неправильно заповнене поле.";
                    counteroferrors++;
                    if(document.forms[FormName].getElementsByClassName('cheekingInformation')[i].getAttribute('id')==="phone") {
                    	document.forms[FormName].getElementsByClassName('cheekingInformation')[i].nextElementSibling.innerHTML ="Перевірте формат введення номеру +38 (067) 676 76 76";                    	
                    }                    
                }
            } else {
                   document.forms[FormName].getElementsByClassName('cheekingInformation')[i].classList.remove('errorField');                               
            }           
        }
	}
	if (counteroferrors>0){
		return false;
    } 
    else {    	
        return true;
    }
}

/*
function getData(TypeOfUser){       //Перевірити чи є такий в наявності на сервері
    if (TypeOfUser ==='AuthorizedUser'){
        if(((JSON.parse(localStorage.getItem('AddNewUser'))).userName) == document.getElementById("AuthorizedUsername").value && ((JSON.parse(localStorage.getItem('AddNewUser'))).userPassword) == document.getElementById("AuthorizedUserpasword").value){
            //console.log('TRUE');
            alert("Ви ввійшли на наш сайт! Привіт " + (JSON.parse(localStorage.getItem('AddNewUser'))).userName+ ' ти вперше увійшов о ' + (JSON.parse(localStorage.getItem('AddNewUser'))).timeOfAuthorizetion);   //+ user.name + ‘ти вперше увійшов о ’ + user.time
                
        }
        else {
            if (((JSON.parse(localStorage.getItem('AddNewUser'))).userName) != document.getElementById("AuthorizedUsername").value) {
                        alert("Вибачте, але користувача під таким ім'ям немає. Можливо Ви помилились. Спробуйте ще раз!");
                    }
            else {
                alert("Вибачте, але пароль введений невірно. Спробуйте ще раз!");
            }
                }
            }
    else {
        if(((JSON.parse(localStorage.getItem('AddNewUser'))).userName) == document.getElementById("name").value){
            alert("Вибачте, але користувача під таким ім'ям уже є. Спробуйте ще раз, але піж імшим ім'ям!");
        }
        else {
            alert("Ви ввійшли на наш сайт! Привіт " + (JSON.parse(localStorage.getItem('AddNewUser'))).userName+ ' ти вперше увійшов о ' + (JSON.parse(localStorage.getItem('AddNewUser'))).timeOfAuthorizetion);   //+ user.name + ‘ти вперше увійшов о ’ + user.time
            }
       }
}

function submitInformation(MyForm) {
    if(checkMyForm(MyForm)===true){     //перевірку пройдено
        if(MyForm==='AuthorizedUser'){
            getData('AuthorizedUser');
        }
        else {
            //Перевірити чи є такий в наявності на сервері
            getData('newUser');
           //новий користувач   додати до списку користуваців    <!--    local storage   зберігання інфи-->
                            
            function saveData(){                
                // add item to local storage
                if (document.getElementById("man").checked ===true) {                    
                    var user= new User(document.getElementById("name").value, document.getElementById("pasword").value, document.getElementById("age").value, document.getElementById("email").value, "man", new Date().toUTCString());
                    localStorage.setItem('AddNewUser',JSON.stringify(user));
                }
                else {
                    var user= new User(document.getElementById("name").value, document.getElementById("pasword").value, document.getElementById("age").value, document.getElementById("email").value, "woman", new Date().toUTCString());
                    localStorage.setItem('AddNewUser',JSON.stringify(user));     
                }
            }
            saveData();                
        }
    }
}	*/