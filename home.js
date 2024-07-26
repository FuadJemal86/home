//.........selectig singel element 

// var fuad=document.getElementById("signup");
// console.log(fuad);
// fuad.id="pink";

// var fuad=document.querySelector(".username");
// console.log(fuad);
// fuad.className="blake";


//.........selectig multipel element

// var jemal=document.getElementsByClassName("password");
// console.log(jemal);
// var temp=[];     //using method to change live DOM 
// for(i=0;i<jemal.length;i++){
//    temp.push(jemal[i]);
// }
// console.log(temp);
// for(i=0;i<temp.length;i++){
//     var selected=temp[i];
//     temp[i].className="black"
// }

// var dok=document.getElementsByTagName("div");
// console.log(dok);

// var miak=document.querySelectorAll("password")
// console.log(miak);

//.......... Traversing between multiple elements

// var el=document.querySelector(".password");

// console.log(el);
// var talakwendem=el.lastElementChild;
// console.log(talakwendem);



///.......ALTERING VALUE AND PROPERTIES

// var change=document.getElementById("signup");
// console.log(change);
// change.textContent="SIN UP";

//...creting HTML element using js
// var someparagraph=document.createElement("p");
// console.log(someparagraph);
// someparagraph.textContent="the entire";
// document.body.appendChild(someparagraph);

//... ADDING CLASSNAME OR ID IN HTML USING JS
// var add=document.querySelector(".password");
// console.log(add);
// add.classList.add("suu")

// ...........woeking with inline styling
// var el=document.querySelector("p");
// console.log(el);
// el.style.backgroundColor="blue";
// el.style.height="20px"



//......HTML event handeler
// function fuad(){
//     alert("tewa yedeberal")
// }

//.....Traditional DOM event handeler
// var login=document.getElementById("log");
// login.onclick=backgrawend;

// function backgrawend(){
//     document.body.style.backgroundColor="#f56a79";
// }

// var remove=document.querySelector(".sin")
// remove.onclick=clear;

// function clear(){
// //     document.body.style.backgroundColor="";
// }

// var el = document.querySelector("#log");
// el.onsubmit = formSubmitChecker;

// function formSubmitChecker() {
//     // e.preventDefault(); // Fix typo: preventDefault() instead of prevetDefault()

//     var error = [];
//     var elErrorDisplay = document.getElementById("errorsDisplay");
//     elErrorDisplay.innerHTML = "";

//     var elUserName = document.getElementById("cc");
//     var elPassword = document.getElementsById("dd");

//     // Get their values
//     var elUserNameValue = elUserName[0].value;
//     var elPasswordValue = elPassword[0].value;

  

//     if (!elUserNameValue) {
//         error.push("First user name is required");
//     }
//     if (!elPasswordValue) {
//         error.push("Password is empty");
//     } else if (elPasswordValue.length < 5) { 
//         error.push("Please enter a strong password");
//     }

//     if (error.length > 0) {
//         elErrorDisplay.style.display = "block";
        
//         for (var i = 0; i < error.length; i++) {
//             elErrorDisplay.innerHTML += error[i] + "<br>";
//         }
//     } else {
//         alert("Submitted"); 
//     }
// }


// <>
// document.addEventListener('DOMContentLoaded', function() {
//   const form = document.getElementById('form');
//   const username = document.getElementById('username')
//   const email = document.getElementById('email');
//   const password = document.getElementById('password')
//   const password2 = document.getElementById('password2')

//   // do other for by ur self

//   form.addEventListener('submit', function(e){
//       e.preventDefault()//Submit endayhon 

//       let isValid= true;
//       if(username.value.trim() === ''){
//           setError(username, 'Username can not be empty  ')
//           isValid = false;
//       }else {
//           clearError(username);
//       }     
//       //
//       if(email.value.trim() === ''){
//            setError(email,'email can not be empty');
//            isValid = false
//       } else {
//       clearError(email);
//       }
      
//       //
//       if(password.value.trim() === ''){
//         setError(password,'password must be fill');
//         isValid = false;
//       }
//       else if(password.value.length < 5){
//         setError(password,'password must be grater than 5')
//       } else {
//         clearError(password);
//       }
//       //
//       if(password2.value.trim() === ''){
//         setError(password2,'password must be fill')
//         isValid = false;
//       } else {
//         clearError(password2);
//       }

//       // if((password.value !== password2.value && password.value === '' && password2 === '')){
//       //   setError(password,'must be the same')
//       //   isValid = false;
//       // } else {
//       //   clearError(password)
//       // }
//       if(isValid){
//         form.submit();
//       }
      

//   });
//   function setError(input, message){
//       const formControl = input.parentElement;
//       const errorDisplay = formControl.querySelector('.error');
//       errorDisplay.innerText = message;
//       formControl.classList.add('error');
//   } 
//   function clearError(input) {
//   const formControl = input.parentElement;
//   const errorDisplay = formControl.querySelector('.error');
//   errorDisplay.innerText = '';
//   formControl.classList.remove('error');
//   formControl.classList.add('success')
// }


//Erroru enditaybachew metefelgachewn select madereg
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const form  = document.getElementById('form');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');


// form.addEventListener('submit',function(e){
//   e.preventDefault();

//   let isValid = true;
//   if(username.value.trim() === ''){
//         setError(username,'fill the username');
//       isValid = false;
//   } else {
//       erasError(username);
//   }
//   if(email.value.trim() === ''){
//     setError(email,'enter your email');
//     isValid = false;
//   } else {
//     erasError(email);
//   }
//   if(password.value.trim() === ''){
//     setError(password,'password must be enterd');
//     isValid = false;
//   } else {
//     erasError(password);
//   }
//   if(password2.value.trim() === ''){
//     setError(password2,'confirm password');
//     isValid = false;
//   } else {
//     erasError(password2);
//   }
//   if(isValid){
//     form.submit();
//   }
  
// })


   
  // function setError(input,message){
  //     const formControl = input.parentElement;
  //     const errorDisplay = formControl.querySelector('.error');
  //     errorDisplay.innerText = message;
  //     formControl.classList.add('error')
    
  // }

  // function erasError(input){
  //   const formControl = input.parentElement;
  //   const errorDisplay = formControl.querySelector('.error');
  //   errorDisplay.innerText = '';
  //   formControl.classList.remove('error');
  //   formControl.classList.add('success');
  // }


  const username = $('#username');
  const email = $('#email');
  const password = $('#password');
  const password2 = $('#password2');
  let   emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  let userPattern = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/
  let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/
$('#form').on('submit',function(e) {
  e.preventDefault()
   var isValid = true;
  if(! userPattern.test(username.val())) {
    setError(username,'use at list one uppercase letter,_,0-9');
    isValid = false;
  } else {
    clearEroor(username);
  }
  if(! emailPattern.test(email.val()) ){
    setError(email,'plse enter valid email');
    isValid = false;
  }
   else {
    clearEroor(email);
  }
  if(! passwordPattern.test(password.val())){
    setError(password,'use at least 1 upercase,lowercase,number,symbols,min 8 chars');
    isValid = false;
  } else {
    clearEroor(password)
  }
  if(password2.val() === ''){
    setError(password2,'confirm password');
    isValid = false;
  } else {
    clearEroor(password2);
  }
  // if (password2.val() !== password.val()){
  //   setError(password2,'the password must be the same');
  // } else {
  //   clearEroor(password2);
  // }
  if(isValid){
    form.submit();
  } 

})


function setError(input,message) {
  const setefult = input.parent();
  const errorDisplay = setefult.find('.error');
  setefult.addClass('error');
  errorDisplay.text(message);  
}
function clearEroor(input){
  const setdefult = input.parent();
  const errorDisplay = setdefult.find('.error');
  setdefult.removeClass('error');
  setdefult.addClass('success');
  errorDisplay.text('');  
}


  



