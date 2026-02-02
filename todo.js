let todoList=JSON.parse(localStorage.getItem('todoList')) || [];
displayItems();

function addTodo(){
  let inputElement= document.querySelector('#todo-input');
  let dateElement= document.querySelector('#todo-date');
  let todoItem= inputElement.value;
  let todoDate= dateElement.value;
  //console.log(inputElement);
  todoList.push({item : todoItem,date : todoDate});
  localStorage.setItem('todoList',JSON.stringify(todoList));
  inputElement.value='';
  dateElement.value='';
  
  displayItems();
}

function displayItems()
{
  let containerElement= document.querySelector('.todo-container');
  let newHtml='';

  for(let i=0;i<todoList.length;i++)
    {
      // let item=todoList[i].item;
      // let date=todoList[i].date;
      let {item,date}= todoList[i];

      newHtml += `
          <span>${item}</span>
          <span>${date}</span>
          <button class="btn-delete" onclick="deleteItem(${i}); displayItems();">Delete</button>
      `;
    }
  containerElement.innerHTML=newHtml;
}

function deleteItem(index) {
  todoList.splice(index, 1);
  localStorage.setItem('todoList', JSON.stringify(todoList));
  displayItems();
}