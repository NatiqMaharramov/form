let sign_btn = document.querySelector("#sign_btn");

let name = document.querySelector("#name");
let name_error = document.querySelector("#name_error");

let surname = document.querySelector("#surname");
let surname_error = document.querySelector("#surname_error");

let selectAze = document.querySelector("#selectAze");
let aze = document.querySelector("#aze");
let error_aze = document.querySelector("#error_aze");

let phone = document.querySelector("#phone");
let phone_error = document.querySelector("#phone_error");

let email = document.querySelector("#email");
let email_err = document.querySelector("#email_err");

let fin = document.querySelector("#fin");
let fin_err = document.querySelector("#fin_err");

let sifre = document.querySelector("#sifre");
let sifre_err = document.querySelector("#sifre_err");


let tekrarSifre = document.querySelector("#tekrarSifre");
let tekrarSifre_err = document.querySelector("#tekrarSifre_err");

let ul = document.querySelector(".ul");

let question = document.querySelector(".question");
let vsq = document.querySelector(".vsq");

let unvvan = document.querySelector("#unvvan");
let unv_err = document.querySelector("#unv_err");

let seherAze = document.querySelector("#seherAze");
let slc_err = document.querySelector("#slc_err");

let flial = document.querySelector("#flial");
let fl_err = document.querySelector("#fl_err");

let check_err = document.querySelector("#check_err");

console.log(check_err);
// window.location.pathname=('end.html')


let validRegex =/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;  // findindex ile nece elemek olarki bunun icindekilerden her hansi biri olsa duzgun osun?
let  simbol=/[-!$%^&*()_+|~=`@{}\[\]:";'<>?,.\/]/;
let num='^[0-9]+$'

sign_btn.addEventListener("click", (e) => {
  e.preventDefault();

  selectAze.style.height='32px'

  if (name.value != "") {
    name_error.innerHTML = "";
    inpUpperCase(name.value, name_error);
   
  } else {
    name_error.innerHTML = "Boslugu doldurun";
    
  }

  if (surname.value != "") {
    surname_error.innerHTML = "";
    inpUpperCase(surname.value, surname_error);
  } else {
    surname_error.innerHTML = "Boslugu doldurun";
  }

  if (selectAze.value == "") {
    error_aze.innerHTML = "Secenek daxil etmelisiniz";
  } else {
    error_aze.innerHTML = "";
    if (selectAze.value == "aze") {
      if (aze.value.length != 12) {
        error_aze.innerHTML = "Sexsiyyet nomresi duzgun deyil";
      }
    }
  }

  if (phone.value != "") {
    phone_error.innerHTML = "";
    PhoneFor(phone.value, phone_error);
  } else {
    phone_error.innerHTML = "Boslugu doldurun";
  }

  if (email.value != "") {
    email_err.innerHTML = "";
    email_errr(email.value, email_err);
  } else {
    email_err.innerHTML = "Boslugu doldurun";
  }

  if (fin.value != "") {
    FinCode(fin.value, fin_err);
  } else {
    fin_err.innerHTML = "xanalari doldurun";
  }

  if(sifre.value!=""){
    passwordCheck(sifre_err)
  }else{
    sifre_err.innerHTML='xanalari doldurun'

  }
  if(tekrarSifre.value!=""){
    passwordCheck2(tekrarSifre.value)
  }else{
    tekrarSifre_err.innerHTML='xanalari doldurun'

  }

  if(unvvan.value!=""){

    unvanCheck(unvvan.value,unv_err)
  }else{
    unv_err.innerHTML='Xanalari doldurun'
  }
  if(seherAze.value == ""){
    slc_err.innerHTML='Secenek daxil etmelisiniz'
  }else{
    slc_err.innerHTML=''

  }
  if(flial.value == ""){
    fl_err.innerHTML='Secenek daxil etmelisiniz'
  }else{
    fl_err.innerHTML=''

  }

  //============= end step===================//
  if(name_error.innerHTML=='' && surname_error.innerHTML=='' && email_err.innerHTML=='' && error_aze.innerHTML=='' && phone_error.innerHTML=='' && fin_err.innerHTML=='' && sifre_err.innerHTML=='' && tekrarSifre_err.innerHTML=='' && unv_err.innerHTML=='' && slc_err.innerHTML=='' && fl_err.innerHTML==''){
    if(check.checked ){
      window.location.pathname=('end.html')
      }else{
        check_err.innerHTML='Istifadeci razilasmasini qebul etmeden Qeydiyyatdan kece bilmezsiniz'
      }
  }

      //============= end ===================//

});
console.log(selectAze);




function inpUpperCase(s, err) {
  let simvol = ["!", "@", ",", "."];
  if (s[0] != s[0].toLocaleUpperCase()) {
    err.innerHTML = "Ilk herf boyuk olmalidir.";
  }
  for (let i = 0; i < s.length; i++) {
    // console.log(s.length);
    for (let j = 0; j < 10; j++) {
      if (s[i] == j.toString()) {
        err.innerHTML = "Reqem daxil etmek olmaz";
        break;
      }
    }
    for (let j = 0; j < simvol.length; j++) {
      if (s[i] == simvol[j]) {
        err.innerHTML = "simvol daxil etmek olmaz";
        break;
      }
    }
  }
}


function PhoneFor(p,err){  

if(phone.value!=""){
  if(!p.match(num)){
    phone.style.border='2px solid red'
    err.innerHTML="Herf yazmaq olmaz"
  }else{
    phone.style.border='2px solid green'
  }

}

//   let herf='qwertyuiop[]asdfghjkl;zxcvbnm,.'
//   for(let i=0;i<p.length;i++){
//     for(let j=0;j<herf.length;j++){
// if(p[i]==herf[j]){
//   console.log('herf var');
// }
//     }

//   }
 

}


function email_errr(a, err) {
  for (let i = 0; i < a.length; i++) {

    if (a[i] != a[i].toLowerCase()) {
      err.innerHTML = " Herfler boyuk ola bilmez ";
    } else {
      if (!a.match(validRegex)) {          // izah a.match
        console.log(a.match);
        email.style.border='2px solid red'
        err.innerHTML = "email sehfdir ";
      }else{
        email.style.border='2px solid green'
      }
    }
  }
}

function FinCode(f, err) {
  for (let i = 0; i < f.length; i++) {
    
if(f.length==7){

    if (f[i] == f[i].toLocaleUpperCase()) {
        err.innerHTML=''
        fin.style.border="2px solid green"

    } else {
        err.innerHTML = "Boyuk herfle yazilmalidir";
        fin.style.border="2px solid red"
    }
}else if(f.length >7){
    err.innerHTML='Fin boyukdur'
    fin.style.border="2px solid red"
}else{
    err.innerHTML='Fin kicikdir'
    fin.style.border="2px solid red"
}  
  }
}

// function email_err(a) {
//     let simvol = ['!', ' ', '/', '='];
//     // if (a.indexOf('@') == (-1)) {
//     //     console.log('@ isaresi daxil edin');
//     // }

//     // if()
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < simvol.length; j++) {
//             if (a[i] == simvol[j]) {
//                 console.log('Simvol daxil ede bilmesen');
//             }

//     }

//         // if (a[i] == a[i].toLocaleUpperCase()) {
//         //     console.log('boyuk herf daxil etmek olmaz');
//         // }
//     }

// }

// let a = 'eli@gmail.com='
// email_err(a)
// console.log(a.indexOf('0'));




function passwordCheck(err){

  if(sifre.value!=tekrarSifre.value){
    if(sifre.value.length<8){
      sifre_err.innerHTML='sifre 8 simvoldan artiq olmalidir'
      tekrarSifre_err.innerHTML='sifre 8 simvoldan artiq olmalidir'
      
    }else{

    ul.children[0].style.display='none'
    sifre.style.border='1px solid red'
    tekrarSifre.style.border='1px solid red'
    sifre_err.innerHTML='Sifreler eyni deyil'
    tekrarSifre_err.innerHTML='Sifreler eyni deyil'
    }
  
  }else{
    sifre.style.border='1px solid red'
    tekrarSifre.style.border='1px solid red'
    tekrarSifre_err.innerHTML=''
    sifre_err.innerHTML=''
    ul.children[0].style.display='none'
    if(sifre.value[0]==sifre.value[0].toLocaleUpperCase()){
      ul.children[1].style.display='none'

      ul.children[0].style.display='none'
      sifre_err.innerHTML=''
      tekrarSifre_err.innerHTML=''
      sifre.style.border='2px solid green'
      tekrarSifre.style.border='2px solid green';
    }
  

  }

  

   if(name.value==sifre.value || surname.value==sifre.value){

  ul.children[2].style.display='block'
  
  }else{
    ul.children[2].style.display='none'
  }

}
function passwordCheck2(err){
  if(name.value!=tekrarSifre.value && surname.value!==tekrarSifre.value){
    // console.log('salam');
    // ul.children[2].style.display='none'
    }else{
      ul.children[2].style.display='block'
    }
  
}


sifre.addEventListener('click',()=>{
  ul.style.display='block'
})

tekrarSifre.addEventListener('click',()=>{
  ul.style.display='block'
})

let x=0
question.addEventListener('click',()=>{

x++
if(x%2!=0){
  vsq.style.display='block'
}else{
  vsq.style.display='none'
}

  
})



function unvanCheck(un,err){
  if (un.match(simbol)) {       
    unvvan.style.border='2px solid red'
    err.innerHTML = "yalniz herf ve reqem yazila biler ";
  }else{
    err.innerHTML = "";
    unvvan.style.border='2px solid green' // bura ishlemir
  }



}




let baki = document.querySelector(".baki");
let gence = document.querySelector(".gence");
let naxcivan = document.querySelector(".naxcivan");


seherAze.addEventListener('change',()=>{

  let seher=seherAze.value
if(seher=='Baki'){
  gence.style.display='none'
  naxcivan.style.display='none'
  baki.style.display='block'
  // fl_err.innerHTML=""
}else if(seher=='Gence'){
  baki.style.display='none'
  naxcivan.style.display='none'
  gence.style.display='block'
  // fl_err.innerHTML=""

}else if(seher=='Naxcivan'){
  baki.style.display='none'
  gence.style.display='none'
  naxcivan.style.display='block'
  // fl_err.innerHTML=""
}else{
  gence.style.display='block'
  naxcivan.style.display='block'
  baki.style.display='block'
  // fl_err.innerHTML=""

}



})





flial.addEventListener('change',(e)=>{  
   if(e.target.value!==''){
        fl_err.innerHTML=''
      }
      else{
        fl_err.innerHTML='Secenek daxil etmelisiniz'
      }
   
})
   
    

let check=document.querySelector('.check')
console.log(check);

