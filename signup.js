const firstname=document.getElementById('firstname');
const lastname=document.getElementById('lastname');
const password=document.getElementById('password');
const passwordconfirum=document.getElementById('confirumpassword');
const num=document.getElementById('num');
const emailo=document.getElementById('emailo');
const address=document.getElementById('address');


const form=document.getElementById('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    checkInputs();
});
function checkInputs(){
     const firstnamevalue=firstname.value.trim();
const lastnamevalue=lastname.value.trim();
const passwordvalue=password.value.trim();
const passwordconfirumvalue=passwordconfirum.value.trim();
const numvalue=num.value.trim();
const emailovalue=emailo.value.trim();
const addressvalue=address.value.trim();



if(firstnamevalue===''){

setErrorFor(firstname,'you must fill this option');
}
   else{
setSuccessFor(firstname);
   }  
   if(lastnamevalue===''){

    setErrorFor(lastname,'you must fill this option');
    }
       else{
    setSuccessFor(lastname);
       }  
       if(numvalue===''){

        setErrorFor(num,'you must fill this option');
        }
        else if(isNaN(numvalue)){
            setErrorFor(num,'Number must be only digits');

        }
        else if(numvalue.length!==11){
            setErrorFor(num,'Number must be 11 digit');
        }
           else{
setSuccessFor(num);
           }  
         if(passwordvalue===''){
            setErrorFor(password,'you must fill this option');
         }
         
         else if(passwordvalue[0].search(/[A-Z]/)==-1){
            setErrorFor(password,'password must start with uppercase character');

         }
         else if(passwordvalue.search(/[0-9]/)==-1){
            setErrorFor(password,'password must have at least 1 digit');

         }
         else if(passwordvalue.search(/[!\@\#\$\%\^\&\*\(\)\-\_\+\.\,\;\:]/)==-1){
            setErrorFor(password,'password must have at least 1 special character');

         }
         else if(passwordvalue.search(/[ ]/)!==-1){
            setErrorFor(password,'password must not have space');

         }
         else if(passwordvalue.length!==8){
            setErrorFor(password,'password must be 8 character');
         }
          else{
         setSuccessFor(password);
         }  
         if(passwordconfirumvalue===''){
            setErrorFor(passwordconfirum,'you must fill this option');
         }
         else if(passwordvalue!==passwordconfirumvalue){
            setErrorFor(passwordconfirum,'password isnot matching');

            
         }
          else{
         setSuccessFor(passwordconfirum);
         } 
         
         if(emailovalue===''){

            setErrorFor(emailo,'you must fill this option');
            }

            else if(emailovalue.indexOf('@')<=0){
                setErrorFor(emailo,'not a valid email ');
            }
            else if((emailovalue.charAt(emailovalue.length-4)!='.')&&(emailovalue.charAt(emailovalue.length-3)!='.')){
                setErrorFor(emailo,'not a valid email ');

            }
               else{
            setSuccessFor(emailo);
               }
               if(addressvalue===''){

                  setErrorFor(address,'you must fill this option');
                  }
                     else{
                  setSuccessFor(address);
                     }  

}
function setErrorFor(input,message){
    const marke=input.parentElement;
    const small=marke.querySelector('small');
    small.innerText=message;
    marke.className='mark error';
}
function setSuccessFor (input){
const marke =input.parentElement;
marke.className='mark success';
}
