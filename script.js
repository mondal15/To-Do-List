const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <div class="actions">
      <button class="complete-btn">✅</button>
      <button class="delete-btn">🗑️</button>
    </div>`;
  taskList.appendChild(li);
  taskInput.value = '';

  const completeBtn = li.querySelector('.complete-btn');
  completeBtn.addEventListener('click', () => li.classList.toggle('completed'));

  const deleteBtn = li.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => li.remove());
}

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});
