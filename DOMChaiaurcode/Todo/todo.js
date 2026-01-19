const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');

const todoItemsContainer  = document.getElementById('todo-items-container');

addBtn.addEventListener('click', () => {
    const value = todoInput.value;
    console.log('User entered', value);

    const li = document.createElement('li'); // yai statement nai ek li tag bana diya hoga <li></li>
    
     li.innerText = value;  // yaha pr jo li tag bana tha usme user ki value ko dal diya <li> {value} </li>
    console.log(li);
    
    const delButton = document.createElement('button'); // yai statement nai ek button tag banya h jo li ka child kyu ki har entry ke sath ek button aata h
    delButton.innerText = 'X';

    delButton.addEventListener('click', function() {
        li.remove();
    }); 
    // yaha agr kisi task ko delete karna ho to X click karke wo delete ho jata h

    
    li.appendChild(delButton);


    todoItemsContainer.appendChild(li);
    todoInput.value = ''; // yaha pr jab hum input dai chuke hai to input field khali hono cahiye 

});

