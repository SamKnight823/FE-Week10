let id = 0;
let totalMinutes = 0;

document.getElementById('add').addEventListener('click', () => {
    let minutes = 0;
    let table = document.getElementById('list');
    if(document.getElementById('last-row')){
        document.getElementById("list").deleteRow(table.getElementsByTagName("tr").length - 1);
    };
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('exercise-type').value;
    row.insertCell(1).innerHTML = document.getElementById('duration').value;
    row.insertCell(2).innerHTML = document.getElementById('number-of-intervals').value;
    minutes +=  document.getElementById('duration').value * document.getElementById('number-of-intervals').value;
    row.insertCell(3).innerHTML = minutes;
    totalMinutes += minutes;    
    let actions = row.insertCell(4);
    actions.appendChild(deleteExercise(id++,minutes,table));
    getLastRow(table);
    document.getElementById('exercise-type').value = '';  
    document.getElementById('duration').value = '';  
    document.getElementById('number-of-intervals').value = '';  
 })

 function deleteExercise(id,minutes,table){
    let btn = document.createElement('button');
    btn.className = 'btn btn-info';
    btn.id = id;
    btn.innerHTML = 'Delete This Exercise';
    btn.onclick = () => {
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
        totalMinutes -= minutes;
        if(document.getElementById('last-row')){
            document.getElementById("list").deleteRow(table.getElementsByTagName("tr").length - 1);
        };
        getLastRow(table);
    }
    return btn;
 }
 function getLastRow(table){
    let tableRows = table.getElementsByTagName("tr");
    let lastRow = table.insertRow(tableRows.length);
    lastRow.setAttribute('id','last-row');
    lastRow.insertCell(0).innerHTML = 'Workout Minutes';
    lastRow.insertCell(1).innerHTML = '';
    lastRow.insertCell(2).innerHTML = '';
    lastRow.insertCell(3).innerHTML = totalMinutes;
    let actions = lastRow.insertCell(4);
    actions.appendChild(createGo());
    return lastRow;
 }
 function createGo(){
    let btn = document.createElement('button');
    btn.className = 'btn btn-info';
    btn.id = id;
    btn.innerHTML = 'Lets Go!';
    btn.onclick = () => {alert(`Set your timer for ${totalMinutes} minutes`)};
    return btn;
 }
 