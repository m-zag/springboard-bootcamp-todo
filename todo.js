const form = document.querySelector('#todo');
const list = document.querySelector('#list');



// dom content load has to be used otherwise the list doesn't function properly
// it will always refresh the page even with the event interruption

document.addEventListener('DOMContentLoaded', function() {
    //function for the click event to create a new item and append to the list
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const newTodo = document.createElement('li');
        //sets the text of the new li to the value that's inside the element
        //with ID task --> this is the input field
        newTodo.innerText = document.getElementById('task').value;
        list.append(newTodo);

        
        const del = document.createElement('button');
        del.innerText = 'REMOVE';
        newTodo.append(del);  
    });

    // function to add a click event to the delete button;
    list.addEventListener('click', function(event) {
        if (event.target.tagName.toLowerCase() === 'li') { // this doesn't work unless the toLowerCase method is called on it
            event.target.style.textDecoration = 'line-through';
        } else if(event.target.tagName.toLowerCase() === 'button') {
            event.target.parentNode.remove();
        };
    });       
});