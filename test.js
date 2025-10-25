console.log(5+5 );

function add (){
    const a = 5;
    const b =10;
    const c = a+b
    console.log(c);
}
add();
function runTwice(fun){
    fun();
    fun();
}

runTwice(add);