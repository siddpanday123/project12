function checkpilindrome(str){
    
    let len = string.length;

    for(let i = 0; i < len/2; i++){
        if(string[i] !==string[len-1-i]){
            return "not polindrome"
        }else{
            return "polidrome"
        }
    }
}


let string = prompt('enter value');

 let value = checkpilindrome(string);

console.log(value);







