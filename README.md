# MPGI-MERN-MOCK-01

# TaskFlow — HTML, CSS & JavaScript Mock Assessment

## Frontend Development Mock Test

**Duration:** 3 Hours
**Technology:** HTML5, CSS3, Vanilla JavaScript
**Difficulty:** Intermediate
**Maximum Score:** 100

---

## 1. Assessment Objective

You are working as a junior frontend developer.

Your task is to complete a **Task Management Dashboard** called **TaskFlow** using HTML, CSS, and vanilla JavaScript.

The starter repository contains the basic project structure and assets. You are expected to implement the required user interface, styling, interactions, and functionality described below.

The objective of this assessment is to evaluate your ability to:

* Build structured HTML
* Create responsive layouts using CSS
* Manipulate the DOM using JavaScript
* Handle user interactions and events
* Work with arrays and objects
* Implement CRUD-style functionality
* Use browser storage
* Debug JavaScript
* Write clean and maintainable frontend code

---

# 2. Technology Rules

You may use:

* HTML5
* CSS3
* Vanilla JavaScript
* Browser APIs
* LocalStorage
* Google Fonts

You must **not** use:

* React
* Vue
* Angular
* jQuery
* Bootstrap
* Tailwind CSS
* Material UI
* Any JavaScript framework
* Any CSS framework
* Any UI component library

The purpose of this assessment is to evaluate your HTML, CSS, and JavaScript fundamentals.

---

# 3. Application — TaskFlow

You need to build a responsive task management dashboard.

The application should allow a user to:

* View tasks
* Add tasks
* Edit tasks
* Delete tasks
* Mark tasks as completed
* Search tasks
* Filter tasks
* Sort tasks
* Persist tasks using LocalStorage

---

# 4. Part A — HTML

Create the required semantic structure for the application.

Your page should contain:

### Header

Include:

* TaskFlow logo/name
* User information or profile area

### Navigation

Include navigation items for:

* Dashboard
* My Tasks
* Completed

### Main Dashboard

Include:

* Page heading
* Task summary/statistics
* Search control
* Filter control
* Sort control
* Add Task button
* Task list

### Task Form

The Add/Edit Task form should contain:

* Task title
* Description
* Priority
* Due date
* Submit/Save button
* Cancel button

### Task Card

Each task should display appropriate information such as:

* Title
* Description
* Priority
* Due date
* Status
* Edit action
* Delete action
* Complete action

Use semantic HTML wherever appropriate.

Forms must contain properly associated labels.

Buttons must use `<button>` elements.

---

# 5. Part B — CSS

Create the visual design of the TaskFlow application.

The interface should include:

### Layout

* Header
* Sidebar/navigation
* Main content area
* Task grid/list

Use appropriate CSS layout techniques such as:

* Flexbox
* CSS Grid

### Visual Styling

Implement:

* Typography
* Spacing
* Colors
* Borders
* Border radius
* Shadows
* Buttons
* Form controls
* Task cards
* Status indicators
* Priority indicators

### Responsive Design

The application must work properly on:

* Desktop
* Tablet
* Mobile

The layout should adapt to smaller screens without unnecessary horizontal scrolling.

You will be provided with reference designs where applicable.

---

# 6. Part C — JavaScript

Implement the complete application functionality using vanilla JavaScript.

## 6.1 Task Data

Tasks should be represented using JavaScript objects.

Each task should contain appropriate properties such as:

* ID
* Title
* Description
* Priority
* Status
* Due date

---

## 6.2 Render Tasks

Tasks should be rendered dynamically using JavaScript.

Do not hard-code every task card directly into the HTML.

---

## 6.3 Add Task

When the user selects **Add Task**:

1. Display the task form.
2. Allow the user to enter the required information.
3. Validate the form.
4. Create a new task.
5. Add the task to the task list.
6. Update the interface.

---

## 6.4 Edit Task

The user must be able to edit an existing task.

When Edit is selected:

1. Open the task form.
2. Populate the existing task information.
3. Allow changes.
4. Save the updated task.
5. Update the displayed task.

---

## 6.5 Delete Task

The user must be able to delete a task.

Before deleting a task, display an appropriate confirmation.

After confirmation, remove the task from the application.

---

## 6.6 Complete Task

The user must be able to mark a task as completed.

The visual appearance of a completed task should clearly differ from a pending task.

---

## 6.7 Search

Implement a search field that allows users to search tasks.

Search should update the displayed tasks dynamically.

For example, searching for:

`JavaScript`

should display tasks matching the search term.

---

## 6.8 Filter

Implement task filtering.

At minimum, provide:

* All
* Pending
* Completed

The task list should update based on the selected filter.

---

## 6.9 Sort

Implement at least one sorting option.

Examples include:

* Due date
* Priority
* Title

The selected sorting option should update the displayed task order.

---

## 6.10 LocalStorage

Tasks must persist using browser LocalStorage.

Example expected behavior:

1. Add a task.
2. Refresh the browser.
3. The task should still be available.

The application should load saved tasks from LocalStorage when it starts.

---

# 7. Part D — Debugging

A separate debugging exercise will be provided.

You will receive JavaScript code containing intentional bugs.

Your task is to:

1. Identify the problems.
2. Correct the implementation.
3. Verify that the corrected code works.
4. Document the issues you identified.

Do not simply replace the provided code with an unrelated implementation.

---

# 8. Code Quality

Your implementation should be:

* Readable
* Well structured
* Consistently formatted
* Appropriately named
* Free from unnecessary duplication

Avoid placing the entire application logic inside a single JavaScript function.

Organize your JavaScript into logical functions where appropriate.

---

# 9. Assessment Restrictions

You are expected to implement the solution yourself.

Do not:

* Copy an existing complete project
* Use a frontend framework
* Use a CSS framework
* Replace the assignment with a different application
* Remove the assessment requirements
* Modify the assessment instructions

You may use official documentation and normal developer references for understanding HTML, CSS, and JavaScript concepts.

---

# 10. Submission

Your submission must contain your completed implementation.

Before submitting:

* Test all functionality.
* Check the application on different screen sizes.
* Make sure there are no obvious console errors.
* Make sure your final changes are committed and pushed to your assessment branch.

Your instructor will review your submission using the assessment rubric.

---

# 11. Scoring

| Section      |  Points |
| ------------ | ------: |
| HTML         |      15 |
| CSS          |      25 |
| JavaScript   |      40 |
| Debugging    |      10 |
| Code Quality |      10 |
| **Total**    | **100** |

The automated evaluation will cover the objective functionality of the application.

Code quality and other subjective criteria may be reviewed by the instructor.

---

# 12. Expected Final Result

At the end of the assessment, your TaskFlow application should provide a complete and usable task management experience.

A user should be able to:

**Create → View → Search → Filter → Edit → Complete → Delete**

tasks and have the task data persist after refreshing the browser.

---

## Good luck!

Focus on writing clean, understandable code and make sure you test your implementation before submitting.
