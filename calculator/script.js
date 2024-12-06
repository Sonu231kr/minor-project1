let display = "";


document.querySelector('#display').value= display;

function button1(){
    display = display + '1';
            document.querySelector('#display').value= display;
}
function button2(){
    display = display + '2';
            document.querySelector('#display').value= display;
}
function button3(){
    display = display + '3';
            document.querySelector('#display').value= display;
}
function button4(){
    display = display + '4';
            document.querySelector('#display').value= display;
}
function button5(){
    display = display + '5';
            document.querySelector('#display').value= display;
}
function button6(){
    display = display + '6';
            document.querySelector('#display').value= display;
}
function button7(){
    display = display + '7';
            document.querySelector('#display').value= display;
}
function button8(){
    display = display + '8';
            document.querySelector('#display').value= display;
}
function button9(){
    display = display + '9';
            document.querySelector('#display').value= display;
}
function button0(){
    display = display + '0';
            document.querySelector('#display').value= display;
}
function buttonadd(){
    display = display + '+';
    //   document.querySelector('#display').value= display;

      let aithmetical =  document.querySelector('#display').value= display;
       let back = "";
            if(aithmetical){
                document.querySelector('#buttonadd'). value= back ;
                console.log(back)
            }
}
function buttonsub(){
    display = display + '-';
            document.querySelector('#display').value= display;
}
function buttonmulti(){
    display = display + '*';
            document.querySelector('#display').value= display;
}
function buttondiv(){
    display = display + '/';
            document.querySelector('#display').value= display;
}
function buttonclear(){
    display ='';
            document.querySelector('#display').value= display;
}
function buttonpoint(){
    display = display + '.';
            document.querySelector('#display').value= display;
}
function buttonresult(){
    let result = eval(display);
    display = result;
            document.querySelector('#display').value= display;
}
function buttonzeros(){
    display = display + '00';
            document.querySelector('#display').value= display;
}
function buttonmodule(){
    display = display + '%';
            document.querySelector('#display').value= display;
}
function buttonback(){
    let result = document.querySelector('#display').value= display;
let res=result.toString().slice(0, -1);
    display = res ;
            document.querySelector('#display').value= display;
}
