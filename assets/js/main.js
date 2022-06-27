const clear_btn = document.querySelector('.btn-clear');
let result=document.getElementById("inputText");

function appendNumber(number){
    document.getElementById("inputText").value+=number;
}

let compute=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        result.value='ERROR'
    }
}
clear_btn.addEventListener('click',()=>{
    result.value='';
})


function delete_btn(){
    result.value=result.value.slice(0,-1);
}



