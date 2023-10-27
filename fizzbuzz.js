
function fizzbuzz(){

    for(let i=1;i<=100;i++){
        if(i%3 && i%5 && i%15){

            console.log('fizzbuzz');

        }
        if(i%3==0){
            console.log('fizz');
        }
        if(i%5==0){
            console.log('buzz');
        }
        
    }
}

fizzbuzz();