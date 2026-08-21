/*
 * TaskFlow
 * HTML + CSS + JavaScript Mock Assessment
 *
 * TODO:
 * Implement the required functionality described in README.md.
 */


// --------------------------------------------------
// Initial Task Data
// --------------------------------------------------

const initialTasks = [
  {
    id: 1,
    title: "Complete JavaScript Assignment",
    description: "Finish the DOM manipulation exercises.",
    priority: "high",
    status: "pending",
    dueDate: "2026-08-25"
  },
  {
    id: 2,
    title: "Submit UI Design",
    description: "Complete and submit the dashboard design.",
    priority: "medium",
    status: "completed",
    dueDate: "2026-08-26"
  },
  {
    id: 3,
    title: "Review CSS Concepts",
    description: "Revise Flexbox, Grid and responsive design.",
    priority: "low",
    status: "pending",
    dueDate: "2026-08-28"
  }
];


// --------------------------------------------------
// DOM References
// --------------------------------------------------

const taskList = document.getElementById("taskList");

const emptyState = document.getElementById("emptyState");

const addTaskButton = document.getElementById("addTaskButton");

const taskModal = document.getElementById("taskModal");

const closeModalButton =
  document.getElementById("closeModalButton");

const cancelTaskButton =
  document.getElementById("cancelTaskButton");

const taskForm =
  document.getElementById("taskForm");

const searchInput =
  document.getElementById("searchInput");

const statusFilter =
  document.getElementById("statusFilter");

const sortSelect =
  document.getElementById("sortSelect");


// --------------------------------------------------
// Summary Elements
// --------------------------------------------------

const totalTasks =
  document.getElementById("totalTasks");

const pendingTasks =
  document.getElementById("pendingTasks");

const completedTasks =
  document.getElementById("completedTasks");


// --------------------------------------------------
// Application State
// --------------------------------------------------

let tasks = [...initialTasks];

let editingTaskId = null;


// --------------------------------------------------
// TODO: Implement the application
// --------------------------------------------------

/*
  Suggested functionality:

  1. Render tasks
  2. Update summary statistics
  3. Open task modal
  4. Close task modal
  5. Add task
  6. Edit task
  7. Delete task
  8. Mark task as completed
  9. Search tasks
  10. Filter tasks
  11. Sort tasks
  12. Save tasks to LocalStorage
  13. Load tasks from LocalStorage
  14. Validate form input
*/


// --------------------------------------------------
// Event Listeners
// --------------------------------------------------

addTaskButton.addEventListener("click", () => {
  // TODO: Open the task modal.
});


closeModalButton.addEventListener("click", () => {
  // TODO: Close the task modal.
});


cancelTaskButton.addEventListener("click", () => {
  // TODO: Close the task modal.
});


taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // TODO:
  // Add a new task OR update an existing task.
});


searchInput.addEventListener("input", () => {
  // TODO: Search tasks.
});


statusFilter.addEventListener("change", () => {
  // TODO: Filter tasks.
});


sortSelect.addEventListener("change", () => {
  // TODO: Sort tasks.
});


// --------------------------------------------------
// Application Initialization
// --------------------------------------------------

function initializeApp() {
  // TODO:
  // 1. Load tasks from LocalStorage.
  // 2. Render tasks.
  // 3. Update summary.
}

initializeApp();
