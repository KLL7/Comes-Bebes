//base do código é o pomodoro
const cards = document.querySelectorAll(".item-card");
cards.forEach(card => {
    const name = card.querySelector(".item-name");
    const ingredients = card.querySelector("item-ingregredients");
    const price = card.querySelector(".item-price");
    const quantity = card.querySelector(".item-quantity");

    card.addEventListener("click", () =>{
        if (quantity.value <= 0){
            alert("Você tem que pedir algum para adicionar ao carrinho");
        }

        addcardtocart(name, price, ingredients, quantity);
    }
    )

    function addcardtocart(name, price, ingredients, quantity){

    }


})
 
const painelcart = document.querySelector('#tasks_panel');

addTaskButton.addEventListener('click', () => addNewTask());

function createNewTask() {

    const painelCard = document.querySelector("");
    taskElement.classList.add('itens');

    const item = document.createElement('p');
    item.classList.add('item_p');

    //item.innerText = taskInput.value;

    item.addEventListener('click', () => LineThrough(item));

    const trashBinContainer = document.createElement('span');
    trashBinContainer.classList.add('gg-trash_container');
    const trashBin = document.createElement('span');
    trashBin.classList.add('gg-trash');
    trashBin.addEventListener('click', () => DeletItem(taskElement, item));
    trashBinContainer.appendChild(trashBin);

    taskElement.appendChild(item);
    taskElement.appendChild(trashBinContainer);
    paineltask.appendChild(taskElement);
    taskInput.value= '';
};

const DeletItem = (taskElement, item) =>{
    const remove = paineltask.childNodes;
    for(const task of remove){
        if(task.firstChild === item){
            taskElement.remove()
        }
    }
};

const LineThrough = (item) => {
    const tasks = paineltask.childNodes;
    for(const task of tasks){
        if(task.firstChild === item) {
            task.firstChild.classList.toggle('line_through');
        }
    }
};

