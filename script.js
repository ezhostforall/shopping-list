const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

const handleClick = () => {
    let currentValue = input.value;
    input.value = '';
    const newListItem = document.createElement('li');
    const newListSpan = document.createElement('span');
    const newButton = document.createElement('button');
    newListItem.appendChild(newListSpan);
    newListItem.appendChild(newButton);
    newListSpan.textContent = currentValue;
    newButton.textContent = 'Delete';
    list.appendChild(newListItem);
    newButton.addEventListener('click', () => {
        list.removeChild(newListItem);
    });
    input.focus();

};

button.addEventListener('click', handleClick);