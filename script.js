let form = document.querySelector("#admissionForm");

let name = document.querySelector("#name");
let email = document.querySelector("#email");
let number = document.querySelector("#number");
let dob = document.querySelector("#dob");
let course = document.querySelector("#course");
let photo = document.querySelector("#photo");
let about = document.querySelector("#about");

let studentCount = document.querySelector("#count");
let uploadBtn = document.querySelector("#uploadBtn");
let fileName = document.querySelector("#fileName");
let applications = document.querySelector("#applications");

let nameError = document.querySelector("#nameError");
let emailError = document.querySelector("#emailError");
let numberError = document.querySelector("#numberError");
let dobError = document.querySelector("#dobError");
let genderError = document.querySelector("#genderError");
let aboutError = document.querySelector("#aboutError");
let courseError = document.querySelector("#courseError");
let skillError = document.querySelector("#skillError");
let photoError = document.querySelector("#photoError");

const students = [];

let nextId = 1;

let today = new Date().toISOString().split("T")[0];
dob.max = today;

uploadBtn.addEventListener("click", function () {
    photo.click();
});

photo.addEventListener("change", function () {
    if (photo.files.length > 0) {
        fileName.textContent = photo.files[0].name;
        photoError.textContent = "";
    }
});

form.addEventListener("submit", function (evt) {

    evt.preventDefault();

    nameError.textContent = "";
    emailError.textContent = "";
    numberError.textContent = "";
    dobError.textContent = "";
    genderError.textContent = "";
    aboutError.textContent = "";
    courseError.textContent = "";
    skillError.textContent = "";
    photoError.textContent = "";

    let flag = true;

    let nameRegex = /^[\p{L} .'-]+$/u;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let numberRegex = /^[6-9]\d{9}$/;

    if (name.value.trim() === "") {

        nameError.textContent = "Please enter your name";
        flag = false;

    } else if (!nameRegex.test(name.value.trim())) {

        nameError.textContent = "Please enter a valid name";
        flag = false;

    }

    if (email.value.trim() === "") {

        emailError.textContent = "Please enter your email";
        flag = false;

    } else if (!emailRegex.test(email.value.trim())) {

        emailError.textContent = "Please enter a valid email";
        flag = false;

    }

    if (number.value.trim() === "") {

        numberError.textContent = "Please enter your number";
        flag = false;

    } else if (!numberRegex.test(number.value.trim())) {

        numberError.textContent = "Please enter a valid 10-digit number";
        flag = false;

    }

    if (dob.value === "") {

        dobError.textContent = "Please select your date of birth";
        flag = false;

    } else if (dob.value > today) {

        dobError.textContent = "Future dates are not allowed";
        flag = false;

    }

    let gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    if (!gender) {

        genderError.textContent = "Please select a gender";
        flag = false;

    }

    if (course.value === "") {

        courseError.textContent = "Please select a course";
        flag = false;

    }

    let skills = document.querySelectorAll(
        'input[name="skill"]:checked'
    );

    if (skills.length === 0) {

        skillError.textContent = "Please select at least one skill";
        flag = false;

    }

    if (about.value.trim() === "") {

        aboutError.textContent = "Please tell us about yourself";
        flag = false;

    }

    if (photo.files.length === 0) {

        photoError.textContent = "Please upload your photo";
        flag = false;

    }

    if (!flag) {
        return;
    }

    let selectedSkills = [];

    skills.forEach(function (skill) {
        selectedSkills.push(skill.value);
    });

    let reader = new FileReader();

    reader.onload = function () {

        let student = {
            id: nextId,
            name: name.value.trim(),
            email: email.value.trim(),
            phone: number.value.trim(),
            dob: dob.value,
            gender: gender.value,
            course: course.value,
            skills: selectedSkills,
            about: about.value.trim(),
            photo: reader.result
        };

        students.push(student);

        createStudentCard(student);

        nextId++;

        studentCount.textContent = students.length;

        form.reset();

        fileName.textContent = "";

        nameError.textContent = "";
        emailError.textContent = "";
        numberError.textContent = "";
        dobError.textContent = "";
        genderError.textContent = "";
        aboutError.textContent = "";
        courseError.textContent = "";
        skillError.textContent = "";
        photoError.textContent = "";
    };

    reader.readAsDataURL(photo.files[0]);
});

function createStudentCard(student) {

    let card = document.createElement("div");

    card.classList.add("student-card");

    card.dataset.id = student.id;

    let heading = document.createElement("h3");
    heading.textContent = student.name;

    let emailText = document.createElement("p");
    emailText.textContent = "Email: " + student.email;

    let phoneText = document.createElement("p");
    phoneText.textContent = "Phone: " + student.phone;

    let dobText = document.createElement("p");
    dobText.textContent = "Date of Birth: " + student.dob;

    let genderText = document.createElement("p");
    genderText.textContent = "Gender: " + student.gender;

    let courseText = document.createElement("p");
    courseText.textContent = "Course: " + student.course;

    let skillText = document.createElement("p");
    skillText.textContent = "Skills: " + student.skills.join(", ");

    let aboutText = document.createElement("p");
    aboutText.textContent = "About: " + student.about;

    let img = document.createElement("img");
    img.src = student.photo;
    img.alt = student.name;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.type = "button";

    deleteBtn.addEventListener("click", function () {

        let index = students.findIndex(function (item) {
            return item.id === student.id;
        });

        if (index !== -1) {
            students.splice(index, 1);
        }

        card.remove();

        studentCount.textContent = students.length;
    });

    card.appendChild(heading);
    card.appendChild(emailText);
    card.appendChild(phoneText);
    card.appendChild(dobText);
    card.appendChild(genderText);
    card.appendChild(courseText);
    card.appendChild(skillText);
    card.appendChild(aboutText);
    card.appendChild(img);
    card.appendChild(deleteBtn);

    applications.appendChild(card);
}