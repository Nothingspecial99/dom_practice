//SEARCH START
const search_bar = document.querySelector('#search');

function search(e) {
    search_value = e.target.value.toLowerCase();
    const lis = document.querySelectorAll('li')

    validateSearch(search_value, lis)
}


// This function display all the li if searchTerm is empty. Otherwise it shows(display: flex) li that contains searchTerm and hides(i.e display: none) that doesn't
function validateSearch(searchTerm, lis){
    searchTerm = searchTerm.toLowerCase();

    // if searchTerm is empty i.e false, then this condition will trigger and display(i.e display: block) all li elements.
    if (!searchTerm){
        lis.forEach(function (li) {li.style.display = "flex"})
    }

    for (let li of lis){
        liContent = li.textContent.toLowerCase();
       
        if (!liContent.includes(searchTerm)){
            li.style.display = 'none';
            
        }
        else if(liContent.includes(searchTerm)){
            li.style.display = 'flex';
        }
    }
}


search_bar.addEventListener('input', search)

//SEARCH END



// ADD START

const add_btn = document.querySelector("#adder")

function add_item(e){
    e.preventDefault()

    const input_field = document.querySelector('#adder-field');
    let itemValue = input_field.value.trim();

    if (itemValue){
        const item = document.createElement('li');
        const ul = document.querySelector('ul');
        console.log(itemValue)
        item.textContent = itemValue;
        item.innerHTML += ' <button class="delete-item">X</button>';
        ul.appendChild(item);
    }


    
}

add_btn.addEventListener('click', add_item)

// ADD END