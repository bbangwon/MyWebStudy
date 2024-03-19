// for of loop
const subreddits = ['soccer', 'popheads', 'cringe', 'books'];

for (const sub of subreddits) {
    console.log(sub);    
}

function returnDay(dayNum) {
    if(dayNum < 1 || dayNum > 7)
        return null;
    
    if(dayNum === 1)
    {
        return "Monday";
    }
    else if(dayNum === 2)
    {
        return "Tuesday";
    }
    else if(dayNum === 3)
    {
        return "Wednesday";
    }
    else if(dayNum === 4)
    {
        return "Thursday";
    }
    else if(dayNum === 5)
    {
        return "Friday";
    }
    else if(dayNum === 6)
    {
        return "Saturday";
    }
    else if(dayNum === 7)
    {
        return "Sunday";
    }
}
