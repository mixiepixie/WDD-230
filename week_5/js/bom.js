
const input = document.getElementById('favchap');
const button = document.getElementById('button');
const list = document.getElementById('list');
// const button = document.querySelector('button');
// const list = document.querySelector('#list');

button.addEventListener('click', function(){
  const myItem = input.value;
  if(myItem){
    
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span')
    const listButton = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listButton);
    listButton.textContent = '❌';

    list.appendChild(listItem);

    listItem.addEventListener('click', ()=>{
      list.removeChild(listItem);
    });
    input.focus();
  }


  
});