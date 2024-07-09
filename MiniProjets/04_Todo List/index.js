let list = [];

function add(){
    let val = document.getElementById('text').value;
    list.push(val);

    //on va créer un nouveau tableau la fonction va mapper sur chaque élément du tableau, ce qui va permettre de créer un nouveau champs avec une tâche. 
    //Et non de cumuler les taches, à la suite, dans le même input. 
    let content = list.map(function(text){
        return ` <li>
                    <span>${text}</span>
                    <button type="button" onclick="clearElement('${text}')">clear</button>
                </li>`
    })

    document.getElementById('todo-list').innerHTML = ` <ul>${content.join('')}</ul>`;
};

//2 -On veut supprimer chaque element
function clearElement(val){
    //on veut trouver l'élément à l'index
    let index = list.indexOf(val);

    //va permetrre de supprimer l'élément en fonction de l'index
    list.splice(index, 1);
    let content = list.map((text) => {
        return ` <li>
                    <span>${text}</span>
                    <button type="button" onclick="clearElement('${text}')">clear</button>
                </li>`
    });
    document.getElementById('todo-list').innerHTML = ` <ul>${content.join('')}</ul>`;
}