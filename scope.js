let bonus = 20;  //global variable 

function sum(first, second)
{
    let result = first + second + bonus;

    if(result > 9)
    {
        const mood = "happy";
        mood = "fishy";
        mood = "funky";
        mood = "cranky";
        console.log(mood);
    }

    return result;
}

const output = sum(34, 42);
console.log(bonus);
console.log(output);