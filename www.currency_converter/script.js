let select=document.querySelectorAll(".selector")
let input=document.getElementById("value1")
let outputvalue=document.getElementById("value2")
console.log(select)
fetch("https://api.frankfurter.app/currencies")
.then(res=>res.json())
.then(res=>display(res))

function display(res){
    let value=Object.entries(res)

    for(let i=0;i<=value.length;i++){
    let obj= ` <option id="${value[i][0]}">${value[i][0]}</option>`
        select[0].innerHTML+=obj
        select[1].innerHTML+=obj
    }
        
    

}

function output(){
    let value1=select[0].value
    let value2=select[1].value
    let myinput=input.value
   
    if(value1==value2){
        alert("both the value are same")
    }
    finaloutput(value1,value2,myinput)
}

function finaloutput(v1,v2,myin){
    const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${myin}&from=${v1}&to=${v2}`)
  .then(resp => resp.json())
  .then((data) => {
    outputvalue.value=data.rates[v2]
    console.log(data.rates[v2])
  })
}