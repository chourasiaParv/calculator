let inputText = document.querySelector('.input')
let btn = document.querySelectorAll('button')
let str = "";
let arr =Array.from(btn);
arr.forEach(btn =>
    {
    btn.addEventListener('click',function (e){
        if(e.target.innerHTML =='='){
            str=eval(str)
            inputText.value=str;
        }else if(e.target.innerHTML =='AC'){
          str ='';
          inputText.value=str;
        }else if(e.target.innerHTML =='DEL'){
            str = str.slice(0,str.length-1);
            inputText.value =str;
        }
        else{
        str+= e.target.innerHTML;
        inputText.value=str;
        }})})