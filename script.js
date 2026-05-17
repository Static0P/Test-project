const timerEl = document.getElementById('timer');
const timerStatus = document.getElementById('timerStatus');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const presetBtns = [...document.querySelectorAll('.presets button')];

const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const taskSummary = document.getElementById('taskSummary');

const quoteText = document.getElementById('quoteText');
const newQuoteBtn = document.getElementById('newQuoteBtn');

const quotes = [
  'Small steps create giant momentum.',
  'Start before you feel ready.',
  'Consistency beats intensity.',
  'Focus is saying no to almost everything.',
  'Progress compounds quietly.'
];

let selectedMinutes = 25;
let secondsLeft = selectedMinutes * 60;
let intervalId = null;

const tasks = JSON.parse(localStorage.getItem('momentum-tasks') ?? '[]')
  .filter((task) => task && typeof task.id === 'string' && typeof task.label === 'string' && typeof task.done === 'boolean');

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function paintTimer() {
  timerEl.textContent = formatTime(secondsLeft);
}

function paintTimerStatus(label) {
  timerStatus.textContent = label;
}

function stopTimer() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    paintTimerStatus('Paused');
  }
}

function startTimer() {
  if (intervalId) {
    return;
  }

  paintTimerStatus('Running');
  intervalId = setInterval(() => {
    if (secondsLeft === 0) {
      stopTimer();
      timerEl.textContent = 'Done!';
      paintTimerStatus('Completed');
      return;
    }

    secondsLeft -= 1;
    paintTimer();
  }, 1000);
}

function selectPreset(minutes) {
  selectedMinutes = minutes;
  secondsLeft = minutes * 60;
  stopTimer();
  paintTimer();
  paintTimerStatus('Ready');

  presetBtns.forEach((btn) => {
    btn.classList.toggle('active', Number(btn.dataset.minutes) === minutes);
  });
}

function persistTasks() {
  localStorage.setItem('momentum-tasks', JSON.stringify(tasks));
}

function updateTaskSummary() {
  const doneCount = tasks.filter((task) => task.done).length;
  taskSummary.textContent = `${tasks.length} total · ${doneCount} done`;
}

function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach((task) => {
    const li = document.createElement('li');

    const text = document.createElement('span');
    text.textContent = task.label;
    text.className = `task-text ${task.done ? 'done' : ''}`;

    const actions = document.createElement('div');
    actions.className = 'task-actions';

    const doneBtn = document.createElement('button');
    doneBtn.type = 'button';
    doneBtn.textContent = task.done ? 'Undo' : 'Done';
    doneBtn.addEventListener('click', () => {
      task.done = !task.done;
      persistTasks();
      renderTasks();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      const index = tasks.findIndex((t) => t.id === task.id);
      if (index >= 0) {
        tasks.splice(index, 1);
        persistTasks();
        renderTasks();
      }
    });

    actions.append(doneBtn, deleteBtn);
    li.append(text, actions);
    taskList.append(li);
  });

  updateTaskSummary();
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', () => selectPreset(selectedMinutes));

presetBtns.forEach((btn) => {
  btn.addEventListener('click', () => selectPreset(Number(btn.dataset.minutes)));
});

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const label = taskInput.value.trim();
  if (!label) {
    return;
  }

  tasks.unshift({
    id: crypto.randomUUID(),
    label,
    done: false
  });

  taskInput.value = '';
  persistTasks();
  renderTasks();
});

newQuoteBtn.addEventListener('click', () => {
  const current = quoteText.textContent;
  const options = quotes.filter((quote) => quote !== current);
  quoteText.textContent = options[Math.floor(Math.random() * options.length)];
});

paintTimer();
renderTasks();
