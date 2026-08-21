# MPGI-MERN-MOCK-01
````markdown
# TaskFlow — HTML, CSS & JavaScript Mock Assessment

## Frontend Development Assessment

Welcome to the TaskFlow Frontend Development Mock Assessment.

This assessment evaluates your practical understanding of:

- HTML5
- CSS3
- Vanilla JavaScript
- DOM manipulation
- JavaScript arrays and objects
- Events
- Form handling
- CRUD operations
- Search and filtering
- LocalStorage
- Responsive web development
- JavaScript debugging
- Git and GitHub workflow

---

# 1. Assessment Information

| Information | Details |
|---|---|
| Assessment | TaskFlow Frontend Development |
| Technologies | HTML5, CSS3, Vanilla JavaScript |
| Duration | 3 Hours |
| Maximum Score | 100 |
| Submission | GitHub Pull Request |
| Development Environment | Local VS Code |
| Frameworks | Not allowed |

---

# 2. Assessment Objective

You are working as a junior frontend developer.

Your task is to complete a task management web application called **TaskFlow**.

A starter project has been provided containing:

- HTML structure
- CSS starter styles
- JavaScript starter code
- Initial task data
- Debugging exercises

You are responsible for completing the application according to the requirements in:

**`TEST.md`**

You must implement the required functionality yourself.

---

# 3. Important Rule

Read the entire `TEST.md` file before starting the implementation.

The requirements in `TEST.md` are the official assessment requirements.

If a requirement is mentioned in `TEST.md`, it is part of the assessment.

---

# 4. Technology Restrictions

## You may use

You may use:

- HTML5
- CSS3
- Vanilla JavaScript
- Browser APIs
- LocalStorage
- Google Fonts
- Standard browser Developer Tools
- VS Code
- Git
- GitHub

You may use official documentation and normal technical references to understand concepts.

---

## You may NOT use

The following are not allowed:

- React
- Vue
- Angular
- Svelte
- jQuery
- Bootstrap
- Tailwind CSS
- Material UI
- Any JavaScript framework
- Any CSS framework
- Any UI component library
- Any pre-built task management application
- Any complete project copied from the internet

The purpose of this assessment is to evaluate your HTML, CSS and JavaScript fundamentals.

---

# 5. Getting Started

## Step 1 — Fork the Repository

You will receive the GitHub repository link from your instructor.

Open the repository on GitHub.

Click:

**Fork**

Create the fork under your own GitHub account.

Do not attempt to directly modify the original TrainX repository.

Your fork will be your working repository.

---

# 6. Clone Your Repository

Open your fork on GitHub.

Click:

**Code → HTTPS**

Copy the repository URL.

Open Terminal.

Run:

```bash
git clone YOUR_REPOSITORY_URL
````

Example:

```bash
git clone https://github.com/your-username/html-css-js-mock-01.git
```

Enter the project directory:

```bash
cd html-css-js-mock-01
```

---

# 7. Open the Project in VS Code

Run:

```bash
code .
```

Alternatively, open the cloned folder directly from VS Code.

---

# 8. Create Your Assessment Branch

Before making any changes, create a new branch using your full name.

Use this naming format:

```text
firstname-lastname
```

Example:

```text
rahul-sharma
```

Run:

```bash
git checkout -b rahul-sharma
```

Verify your current branch:

```bash
git branch
```

You should see something similar to:

```text
* rahul-sharma
  main
```

The `*` indicates your current branch.

---

# 9. Important Git Rule

All assessment work must be completed on your personal assessment branch.

Do **NOT** complete the assignment directly on `main`.

Your branch will be used as your assessment submission.

---

# 10. Understand the Project

The repository contains:

```text
README.md
TEST.md
index.html
style.css
script.js
debug/
reference/
```

### README.md

Contains:

* Assessment instructions
* Git workflow
* Submission requirements

### TEST.md

Contains:

* The actual assignment
* Detailed requirements
* Required functionality
* Expected behavior
* Completion criteria

### index.html

Contains the initial TaskFlow page structure.

### style.css

Contains starter styles.

### script.js

Contains starter JavaScript and incomplete functionality.

### debug/

Contains the JavaScript debugging exercise.

### reference/

Contains visual references where applicable.

---

# 11. Start the Application

This is a static HTML/CSS/JavaScript application.

You do **NOT** need:

* Node.js
* npm
* Express
* MongoDB
* React
* Any backend server

You can run the application directly in a browser.

You may use the VS Code **Live Server** extension.

Open:

```text
index.html
```

Then use:

**Open with Live Server**

You can also open the HTML file directly in your browser.

---

# 12. Development Process

You should follow this general order:

1. Read `TEST.md`
2. Understand the requirements
3. Inspect the starter code
4. Build the HTML requirements
5. Implement the CSS requirements
6. Implement JavaScript functionality
7. Complete the debugging exercise
8. Test all functionality
9. Check responsive behavior
10. Review the browser console
11. Commit your changes
12. Push your branch
13. Create the Pull Request

---

# 13. Save Your Work Regularly

You are encouraged to commit your work regularly.

For example:

```bash
git add .
git commit -m "Implement task dashboard"
```

You may create multiple commits during the assessment.

Meaningful commit messages are recommended.

Examples:

```text
Implement dashboard structure
Add responsive styling
Implement task creation
Implement task filtering
Fix localStorage persistence
Complete debugging exercise
```

---

# 14. Push Your Branch

When your implementation is ready:

```bash
git push -u origin YOUR-BRANCH-NAME
```

Example:

```bash
git push -u origin rahul-sharma
```

---

# 15. Create Your Pull Request

Open your GitHub fork.

GitHub should provide an option to create a Pull Request after you push your branch.

Create a Pull Request from:

```text
YOUR FORK
    ↓
YOUR BRANCH
```

to:

```text
TRAINX-ASSESSMENT
    ↓
main
```

The Pull Request must target the **original assessment repository**, not your fork.

---

# 16. Pull Request Title

Use this exact format:

```text
Submission — Your Full Name
```

Example:

```text
Submission — Rahul Sharma
```

---

# 17. Pull Request Description

Use the following structure:

```markdown
## Student Information

Name:
GitHub Username:

## Assessment

TaskFlow — HTML, CSS & JavaScript Mock Assessment

## Completion Checklist

- [ ] HTML requirements completed
- [ ] CSS requirements completed
- [ ] Responsive design completed
- [ ] Add task completed
- [ ] Edit task completed
- [ ] Delete task completed
- [ ] Complete task completed
- [ ] Search completed
- [ ] Filter completed
- [ ] Sort completed
- [ ] LocalStorage completed
- [ ] Debugging exercise completed
- [ ] Tested application
- [ ] Checked browser console
- [ ] Final changes pushed

## Notes

Mention anything the instructor should know about your implementation.
```

---

# 18. Successful Submission

Your submission is considered complete only when **ALL** of the following are true.

## Git

* Your work is on your personal assessment branch.
* Your latest code has been pushed to GitHub.
* Your Pull Request has been created.
* Your Pull Request targets the original repository's `main` branch.
* You have not merged your own Pull Request.

## Application

* The application loads successfully.
* There are no blocking JavaScript errors.
* Required HTML structure is present.
* Required CSS behavior is implemented.
* Required JavaScript functionality works.
* The application is responsive.
* LocalStorage works.
* The debugging exercise is completed.

## Submission

Your Pull Request must contain your final implementation.

Once you have created the Pull Request, do not make unrelated changes.

If you discover an issue before the instructor reviews your submission, you may continue committing to your assessment branch. The Pull Request will automatically update.

---

# 19. Final Verification

Before submitting, manually test the following.

## Application

* [ ] Page loads
* [ ] Navigation is visible
* [ ] Dashboard is visible
* [ ] Task cards display correctly
* [ ] Add Task works
* [ ] Edit Task works
* [ ] Delete Task works
* [ ] Complete Task works
* [ ] Search works
* [ ] Filter works
* [ ] Sort works
* [ ] LocalStorage works
* [ ] Refresh does not unexpectedly lose data

## Responsive Design

Check at:

* Desktop
* Tablet
* Mobile

## Browser Console

Open browser Developer Tools.

Check the Console.

Your final submission should not contain unnecessary JavaScript errors.

---

# 20. Assessment Evaluation

The assessment is evaluated out of 100 points.

| Section      |  Points |
| ------------ | ------: |
| HTML         |      15 |
| CSS          |      25 |
| JavaScript   |      40 |
| Debugging    |      10 |
| Code Quality |      10 |
| **Total**    | **100** |

Some functionality will be evaluated automatically.

Code quality and subjective aspects may be reviewed by an instructor.

---

# 21. Academic Integrity

This assessment is intended to measure your own practical development skills.

You are expected to write and understand your implementation.

Do not submit a project copied from another student or an existing complete project.

If you use external documentation to understand a concept, you should still implement the solution yourself.

You may be asked by the instructor to explain parts of your implementation.

---

# 22. Final Submission Checklist

Before considering your submission complete, verify:

```text
[ ] I read TEST.md completely.

[ ] I created my own assessment branch.

[ ] I did not complete the assignment directly on main.

[ ] I completed the HTML requirements.

[ ] I completed the CSS requirements.

[ ] I implemented responsive behavior.

[ ] I implemented all required JavaScript functionality.

[ ] I implemented CRUD operations.

[ ] I implemented search.

[ ] I implemented filtering.

[ ] I implemented sorting.

[ ] I implemented LocalStorage.

[ ] I completed the debugging exercise.

[ ] I tested the application.

[ ] I checked the browser console.

[ ] I committed my final changes.

[ ] I pushed my final branch.

[ ] I created the Pull Request.

[ ] My Pull Request targets the original repository's main branch.

[ ] I did not merge the Pull Request.

[ ] I provided the required student information.
```

---

# 23. Completion

Your assessment is considered **submitted** when:

1. Your final code is pushed to your assessment branch.
2. Your Pull Request has been created.
3. Your Pull Request targets the original `trainx-assessment/html-css-js-mock-01` repository.
4. The required files and functionality are present.
5. You have completed the Pull Request description.

After submission, the instructor will review your work.

**Do not merge the Pull Request.**

---

# Good Luck

Build the application carefully.

Focus on:

* Clean HTML
* Responsive CSS
* Understandable JavaScript
* Correct functionality
* Good debugging practices
* Clean Git workflow

```
```
