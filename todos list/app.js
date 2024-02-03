const textBox = document.querySelector("#todos");
const addButton = document.querySelector('#addBtn');
const deleteButton = document.querySelector('#deleteBtn');
const ul = document.createElement('ul');
const bootstrapContainer = document.querySelector('.container')
bootstrapContainer.append(ul);
ul.style.position = 'absolute';
addButton.addEventListener('click',function(){
    if(textBox.value===''){
        textBox.placeholder = 'Please enter a valid todo'
    }
    else{
        const li = document.createElement('li');
        li.style.listStyleType = 'none';
        li.classList.add('lead');
        li.classList.add('mt-3');
        li.innerText = textBox.value;
        console.log(li);
        ul.append(li);
        textBox.value = ''
        textBox.placeholder = ''
    }

})
deleteButton.addEventListener('click',function(){
    // const li = document.querySelector('li');
    const ul = document.querySelector('ul');
    const lastLi = ul.lastElementChild;
    ul.removeChild(lastLi);
    // li.remove();
})
// const userInput = textBox.ariaValueMax;
// console.log(userInput);