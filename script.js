const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

const loadItems = () => {
    const items = JSON.parse(localStorage.getItem('shoppingList')) || [];
    items.forEach(item => addItemToDOM(item.text, item.purchased));
};

const saveItems = () => {
    const items = [];
    list.querySelectorAll('li').forEach(li => {
        items.push({
            text: li.querySelector('span').textContent,
            purchased: li.classList.contains('purchased')
        });
    });
    localStorage.setItem('shoppingList', JSON.stringify(items));
};

const addItemToDOM = (text, purchased = false) => {
    const newListItem = document.createElement('li');
    const newListSpan = document.createElement('span');
    const deleteButton = document.createElement('button');
    const purchaseButton = document.createElement('button');

    newListItem.appendChild(newListSpan);
    newListItem.appendChild(deleteButton);
    newListItem.appendChild(purchaseButton);

    newListSpan.textContent = text;
    deleteButton.textContent = 'Delete';
    purchaseButton.textContent = 'Purchased';

    if (purchased) {
        newListItem.classList.add('purchased');
    }

    deleteButton.addEventListener('click', () => {
        list.removeChild(newListItem);
        saveItems();
    });

    purchaseButton.addEventListener('click', () => {
        newListItem.classList.toggle('purchased');
        saveItems();
    });

    list.appendChild(newListItem);
};

const handleClick = () => {
    const currentValue = input.value.trim();
    if (currentValue === '') return;
    input.value = '';
    addItemToDOM(currentValue);
    saveItems();
    input.focus();
};

button.addEventListener('click', handleClick);
window.addEventListener('load', loadItems);