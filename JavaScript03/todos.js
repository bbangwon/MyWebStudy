let input = '';
const todos = [];

while(input !== 'quit' && input !== 'q')
{
    input = prompt('what would you like to do?');
    if(input === 'list')
    {
        console.log('**********');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('**********');
    }
    else if(input === 'new')
    {
        const newTodo = prompt('Ok, what is the new todo?');
        if(newTodo)
        {
            todos.push(newTodo);
            console.log(`${newTodo} added to the list!`);
        }
    }
    else if(input === 'delete')
    {
        const index = parseInt(prompt('Ok, enter an index to delete'));
        if(!Number.isNaN(index))
        {
            let result = todos.splice(index, 1);
            if(result.length >= 1)
            {
                console.log(`Ok, deleted ${result[0]}`);
            }
        }
        else
        {
            console.log('Unknown index');
        }
    }
}

console.log('OK QUIT THE APP!');
