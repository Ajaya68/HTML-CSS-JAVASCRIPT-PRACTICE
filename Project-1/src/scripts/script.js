let displayDataContainer = document.querySelector(".displayData");

let getTaskData = async () => {
  let response = await fetch("http://localhost:3000/tasks");
  let data = await response.json();
  console.log(data);
  data.forEach((element) => {
    let taskContainer = document.createElement("article");
    let title = document.createElement("p");
    let description = document.createElement("p");
    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    let buttonContainer = document.createElement("aside");

    title.innerText = element.title;
    description.innerText = element.task;
    editButton.innerText = "Edit";
    deleteButton.innerText = "Delete";

    deleteButton.addEventListener("click", () => {
      deleteTask(element.id);
    });

    editButton.addEventListener("click", () => {
      updateData(element);
    });

    buttonContainer.append(editButton, deleteButton);
    taskContainer.append(title, description, buttonContainer);

    displayDataContainer.appendChild(taskContainer);
  });
};
let submitButton = document.querySelector(".submitButton");
getTaskData();

let form = document.querySelector("form");
submitButton.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(form);

  console.log(formData.get("title"));
  console.log(formData.get("description"));
  let details = {
    title: formData.get("title"),
    task: formData.get("description"),
  };
  addTask(details);
});

let addTask = async (data) => {
  await fetch("http://localhost:3000/tasks", {
    method: "POST",
    header: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

let deleteTask = async (id) => {
  await fetch(`http://localhost:3000/tasks/${id}`, {
    method: "delete",
  });
};

let updateData = (data) => {
  let task = document.getElementsByName("title");
  let description = document.getElementsByName("description");
  console.log(task, description);
  console.log(data);
  task[0].value = data.title;
  description[0].value = data.task;
  let updateButton = document.createElement("button");
  updateButton.innerText = "update data";

  form.replaceChild(updateButton, submitButton);
};
