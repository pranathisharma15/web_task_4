document.addEventListener('DOMContentLoaded', () => {
	const taskForm = document.getElementById('task-form');
	const taskInput = document.getElementById('task-input');
	const taskDate = document.getElementById('task-date');
	const taskList = document.getElementById('task-list');
  
	taskForm.addEventListener('submit', (e) => {
	  e.preventDefault();
  
	  const taskText = taskInput.value;
	  const taskDue = taskDate.value;
  
	  if (taskText === '' || taskDue === '') return;
  
	  const li = document.createElement('li');
  
	  const taskContent = document.createElement('span');
	  taskContent.textContent = `${taskText} (Due: ${taskDue})`;
	  li.appendChild(taskContent);
  
	  const taskActions = document.createElement('div');
	  taskActions.classList.add('task-actions');
	  
	  const completeBtn = document.createElement('button');
	  completeBtn.textContent = 'Complete';
	  completeBtn.addEventListener('click', () => {
		taskContent.classList.toggle('completed');
	  });
	  taskActions.appendChild(completeBtn);
  
	  const editBtn = document.createElement('button');
	  editBtn.textContent = 'Edit';
	  editBtn.addEventListener('click', () => {
		const newTask = prompt('Edit task:', taskText);
		const newDate = prompt('Edit date:', taskDue);
		if (newTask && newDate) {
		  taskContent.textContent = `${newTask} (Due: ${newDate})`;
		}
	  });
	  taskActions.appendChild(editBtn);
  
	  const deleteBtn = document.createElement('button');
	  deleteBtn.textContent = 'Delete';
	  deleteBtn.addEventListener('click', () => {
		li.remove();
	  });
	  taskActions.appendChild(deleteBtn);
  
	  li.appendChild(taskActions);
	  taskList.appendChild(li);
  
	  taskInput.value = '';
	  taskDate.value = '';
	});
  });
  