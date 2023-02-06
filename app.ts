
// create a number function

function add(n1:number, n2:number)
 {
    return n1+n2; 
}

let result= add(10,20);

console.log(result);

//create string function 

function dummy(a:string)
{
    return a;
}

let result1 = dummy("hello dummy");

console.log(result1);

// how to write different types of variable :- (type inference)

// first technique :- (first time declare variable)

// no need to declare variable type because first variable decide variable type itself.

let data = 10;

// second technique :- 

let data1;

data1 = 10;
data1 = "hello";