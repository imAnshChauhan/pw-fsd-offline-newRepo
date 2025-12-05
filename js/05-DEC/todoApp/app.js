// ==============================
// Task Model
// ==============================
class Task {
    constructor(id, description, completed = false) {
      this.id = id;
      this.description = description;
      this.completed = completed;
    }
  }
  
  // ==============================
  // Task Manager (Handles Logic)
  // ==============================
  class TaskManager {
    constructor() {
      this.tasks = this.loadFromLocalStorage();
    }
  
    addTask(description) {
      const id = Date.now().toString();
      const task = new Task(id, description);
      this.tasks.push(task);
      this.saveToLocalStorage();
    }
  
    deleteTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id);
      this.saveToLocalStorage();
    }
  
    toggleComplete(id) {
      const task = this.tasks.find(t => t.id === id);
      if (task) task.completed = !task.completed;
      this.saveToLocalStorage();
    }
  
    editTask(id, newText) {
      const task = this.tasks.find(t => t.id === id);
      if (task) task.description = newText;
      this.saveToLocalStorage();
    }
  
    filterTasks(filter) {
      if (filter === "pending") return this.tasks.filter(t => !t.completed);
      if (filter === "completed") return this.tasks.filter(t => t.completed);
      return this.tasks;
    }
  
    saveToLocalStorage() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
  
    loadFromLocalStorage() {
      return JSON.parse(localStorage.getItem("tasks")) || [];
    }
  }
  
  // ==============================
  // UI Class (Handles DOM)
  // ==============================
  class UI {
    constructor(taskManager) {
      this.taskManager = taskManager;
      this.taskInput = document.getElementById("task-input");
      this.taskList = document.getElementById("task-list");
      this.filterButtons = document.querySelectorAll(".filter-btn");
  
      this.activeFilter = "all";
      this.init();
    }
  
    init() {
      document.getElementById("add-btn").addEventListener("click", () => this.addTask());
      this.taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") this.addTask();
      });
  
      this.filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          this.activeFilter = btn.dataset.filter;
          this.updateFilterButtons();
          this.renderTasks();
        });
      });
  
      this.renderTasks();
    }
  
    updateFilterButtons() {
      this.filterButtons.forEach(btn => btn.classList.remove("active"));
      document.querySelector(`[data-filter="${this.activeFilter}"]`).classList.add("active");
    }
  
    addTask() {
      const text = this.taskInput.value.trim();
      if (!text) return alert("Please enter a task!");
  
      this.taskManager.addTask(text);
      this.taskInput.value = "";
      this.renderTasks();
    }
  
    renderTasks() {
      this.taskList.innerHTML = "";
  
      const tasks = this.taskManager.filterTasks(this.activeFilter);
  
      tasks.forEach(task => {
        const li = document.createElement("li");
        li.className = `task-item ${task.completed ? "completed" : ""}`;
  
        li.innerHTML = `
          <div class="task-left">
            <input type="checkbox" ${task.completed ? "checked" : ""} data-id="${task.id}" class="check">
            <span>${task.description}</span>
          </div>
          <div>
            <button class="btn edit" data-id="${task.id}">Edit</button>
            <button class="btn delete" data-id="${task.id}">Delete</button>
          </div>
        `;
  
        this.taskList.appendChild(li);
      });
  
      this.attachEvents();
    }
  
    attachEvents() {
      document.querySelectorAll(".check").forEach(chk =>
        chk.addEventListener("change", (e) => {
          this.taskManager.toggleComplete(e.target.dataset.id);
          this.renderTasks();
        })
      );
  
      document.querySelectorAll(".delete").forEach(btn =>
        btn.addEventListener("click", (e) => {
          this.taskManager.deleteTask(e.target.dataset.id);
          this.renderTasks();
        })
      );
  
      document.querySelectorAll(".edit").forEach(btn =>
        btn.addEventListener("click", (e) => {
          const id = e.target.dataset.id;
          const newText = prompt("Edit task:");
          if (newText) {
            this.taskManager.editTask(id, newText);
            this.renderTasks();
          }
        })
      );
    }
  }
  
  // ==============================
  // Init App
  // ==============================
  const app = new UI(new TaskManager());
  