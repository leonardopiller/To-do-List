//Inserting x symbol for each element
var nodeList = document.querySelectorAll('LI')
for(let i=0; i < nodeList.length; i++){
    var span = document.createElement('SPAN');
    var txt = document.createTextNode(" x ");
    span.className = 'close';
    span.appendChild(txt);
    nodeList[i].appendChild(span)
}

//Delete tasks if 'x' is clicked
function addCloseEventListener() {
    var close = document.querySelectorAll('.close');
    close.forEach(function(item) {
      item.addEventListener('click', function(event) {
        var div = event.target.parentElement;
        div.style.display = 'none';
      });
    });
  }
  addCloseEventListener();

  //Generate new task
function newItem(){
    var inputContent = document.getElementById('inputTask').value
    var lista = document.querySelector('.itens-list')
    var element = document.createElement('li')
    element.innerHTML = inputContent
if(inputContent === ''){
    alert('Write something, and then addicionate it ')
    return
}else{
    lista.appendChild(element)
}
    //cleaning input 
    document.getElementById('inputTask').value = '';
    
    var span = document.createElement('SPAN');
    var txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt)
    element.appendChild(span)
    lista.appendChild(element) 
    var list = document.querySelector('.itens-list');
    addCloseEventListener() 
};
//Checked item mark
const lista = document.querySelector('.itens-list');
lista.addEventListener('click', (mark)=> {
if(mark.target.tagName === 'LI'){
    mark.target.classList.toggle('checked')
}
}, false);

//display a sugestion
function newHobby() {
    fetch('hobbies.json')
      .then((r) => r.json())
      .then((hobbies) => {
        var displayHobby = document.querySelector('.display-hobby');
        var randomIndex = Math.floor(Math.random() * hobbies.length);
        var randomHobby = hobbies[randomIndex].hobby;
        displayHobby.innerHTML = `Suggestion: ${randomHobby}`;
      });
  }
  
//Add suggested hobby to tasks list
  function addSuggestedHobby(){
    const displayHobby = document.querySelector('.display-hobby');
    const suggestedHobby = displayHobby.textContent.replace('Suggestion: ', '');
    if (suggestedHobby) {
        const lista = document.querySelector('.itens-list');
        const element = document.createElement('li');
        element.textContent = suggestedHobby;
        var span = document.createElement('span');
    var txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    element.appendChild(span);
    lista.appendChild(element);

    addCloseEventListener();
  }
  }
  const refreshButton = document.getElementById('btnRefresh');
  refreshButton.addEventListener('click', newHobby);    
  newHobby()
//Function to execute Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");
    document.getElementById("darkBtn").style.display = "none";
    document.getElementById("lightBtn").style.display = "none";
    
    if (document.body.classList.contains("dark")) {
        document.getElementById("lightBtn").style.display = "inline-block";
    } else {
        document.getElementById("darkBtn").style.display = "inline-block";
    }
}
