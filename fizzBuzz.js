
const fizzBuzz = () => {
        const array = [];
        
        for (i = 0; i < 101; i++) {
            if ((i % 3 == 0) && (i % 5 == 0)){
                array.push("FizzBuzz")
        }else if (i % 3 == 0){
            array.push("Fizz")
        }else if (i % 5 == 0){
            array.push("Buzz")
        }else{
            array.push(i)
        }
    }return array;

        
    }

    console.log(fizzBuzz())
    
    
module.exports = {fizzBuzz}