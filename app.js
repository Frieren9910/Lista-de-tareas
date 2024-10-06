document.getElementById('taskForm').addEventListener('submit', function(event) {
    // Evita que la pagina se recargue
    event.preventDefault();

    // Agarramos lo que el usuario escribe en la tarea
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value;

    // Se pone una alerta cuando agregan un campo vacio
    if (taskText === '') {
        alert('Invalido, agrega una tarea para continuar');
        return;
    }

    // Se crea el elemento de la lista para mostrar la tarea
    let taskList = document.getElementById('taskList');
    let li = document.createElement('li');
    li.textContent = taskText; // Le ponemos como texto el nombre de la tarea que el usuario ingresó

    // Se crea el boton eliminar
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';

    // Se hace que el boton elimine la tarea
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li); 
        saveTasks(); 
    });

    // Se añade el boton eliminar al elemento de la lista
    li.appendChild(deleteBtn);

    // Se añade la tarea a la lista que aparece en la página
    taskList.appendChild(li);

    // Se limpia el campo del texto
    taskInput.value = '';

    // Guarda las tareas
    saveTasks();
});

// Recibe los clics cuando le das a la tarea para marcarla como completada
document.getElementById('taskList').addEventListener('click', function(event) {
    
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed'); 
        saveTasks(); 
    }
});