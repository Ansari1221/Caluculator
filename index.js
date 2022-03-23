/*
Project Name : CALCULATOR APP
Date Created : 12-03-2022
created by : Ansari Shahzeb Mohammed Gousoddin.
Languages Used : HTML5 CSS3 CORE JAVASCRIPT + ES6.
lines of code : HTML(41) CSS(173) JAVASCRIPT()
*/



//function to clear display
let clearDisplay = () =>{

    //setting empty string to inner html of display
    document.getElementById('display').innerHTML='';
}

//function to clear last character from display
let clearLast = () =>{
    //getting display string in str variable.
    let str = document.getElementById('display').innerHTML;

    //getting snippet from str by elemenating last character using slice fuction.
    let finalStr = str.slice(0,str.length-1);

    //setting finalStr to display.
    document.getElementById('display').innerHTML = finalStr;
}

//function to check display already have any operator or not
let isContainOperator = () =>{
    let str =document.getElementById('display').innerHTML;

    //checking str includes which operator
    if(str.includes('+')){
        return [true,'+'];
    }else if(str.includes('-')){
        return [true,'-'];
    }else if(str.includes('x')){
        return [true, 'x'];
    }else if(str.includes('/')){
        return [true, '/'];
    }else{
        return[false]
    }
}

//function to check display is empty or not
let isEmpty = ()=>{

    //getting display text and checking it is equal to empty string or not.
    if(document.getElementById('display').innerHTML.trim() == '' ){
        return true;
    }else {
        return false;
    }
}

//function to append operator in display
let appendOPerator = (operator) =>{

    //getting first value of result coming from isContainOPerator() using array destructuring.
    let [status] = isContainOperator();

    //getting result of isEmpty() in variable named as empty.
    let empty = isEmpty();

    //if display didn't contain any operator and display is not empty then appending operator.
    if(!status && !empty){
        document.getElementById('display').append(operator);
    }
}


//function to check if display string ending with any operator or not
let textEndsWithOperator = () =>{

    //storing display text in str variable.
    let str = document.getElementById('display').innerHTML;

    //checking str ends with any operator or not using endsWith function.
    if(str.endsWith('+') || str.endsWith('-') || str.endsWith('x') || str.endsWith('/')){
        return true;
    }else{
        return false;
    }
}

//function to append number in display string
let appendNumber = (number) =>{
   
    //checking number is equal to dot or not and also checking is display have dot already.
    if(number == '.' && !document.getElementById('display').innerHTML.includes('.')){
        
        //if display string ends with operator or it is empty then we will append zero with dot. 
        // otherwise we will append only dot.
        if(textEndsWithOperator() | isEmpty()){
            
            document.getElementById('display').append(`0${number}`);
            
        }
        else{
            document.getElementById('display').append(number);
        }
        
        //if number not a dot then simply appending number to display.
    }else if( number != '.') {
      
        document.getElementById('display').append(number);
        
    }
}


//function to perform operation on string present in display
let performOperation = () =>{

    //getting result of isContainOperator() using array destructuring.
    let [status,operator] = isContainOperator();

    let left=0, right=0;
    let container;
    let str = document.getElementById('display').innerHTML;
    
    //if display contain any operator then splitting it with this operator and performing action.
    if(status){
        if(operator == '+'){
           // operate('+');
           container = str.split('+');
           [left,right] = container;

           let leftNum = Number(left);
           let rightNum = Number(right);

           let result = leftNum + rightNum;
            document.getElementById('display').innerHTML = result.toString();

        }else if(operator == '-'){
           // operate('-');
           container = str.split('-');
           [left,right] = container;

           let leftNum = Number(left);
           let rightNum = Number(right);

           let result = leftNum - rightNum;
            document.getElementById('display').innerHTML = result.toString();

        }else if(operator == 'x'){
            //operate('x');
            container = str.split('x');
           [left,right] = container;

           let leftNum = Number(left);
           let rightNum = Number(right);

           let result = leftNum * rightNum;
            document.getElementById('display').innerHTML = result.toString();

        }else if(operator == '/'){
            container = str.split('/');
           [left,right] = container;

           let leftNum = Number(left);
           let rightNum = Number(right);

           let result = leftNum / rightNum;
            document.getElementById('display').innerHTML = result.toFixed(2).toString();

        }

    }
}