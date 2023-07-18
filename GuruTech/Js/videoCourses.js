// Function to handle form submission
function addTask(event) {
  event.preventDefault();

  // Get the input values
  const courseTitle = document.getElementById("courseTitle").value;
  const courseModule = document.getElementById("courseModule").value;
  const courseDescription = document.getElementById("courseDescription").value;
  const taskVideo = document.getElementById("taskVideo").files[0];

  // Create a new task object
  const task = {
    title: courseTitle,
    module: courseModule,
    description: courseDescription,
    video: taskVideo,
  };

  // Display loading effect
  const loadingContainer = document.getElementById("loadingContainer");
  loadingContainer.style.display = "block";

  // Simulate upload process (remove this in your actual implementation)
  setTimeout(() => {
    // Hide the loading effect
    loadingContainer.style.display = "none";

    // Clear the form input fields
    document.getElementById("courseTitle").value = "";
    document.getElementById("courseModule").value = "";
    document.getElementById("courseDescription").value = "";
    document.getElementById("taskVideo").value = "";

    // Add the task to the task list
    addTaskToList(task);
  }, 2000); // Simulate a 2-second upload process (adjust as needed)
}

// Function to add a task to the task list
function addTaskToList(task) {
  const taskList = document.getElementById("taskList");

  // Create a new task element
  const taskElement = document.createElement("div");
  taskElement.classList.add("task");
  taskElement.innerHTML = `
    <h3>${task.title}</h3>
    <p><strong>Module:</strong> ${task.module}</p>
    <p><strong>Description:</strong> ${task.description}</p>
    <video src="${URL.createObjectURL(task.video)}" controls></video>
  `;

  // Append the task element to the task list
  taskList.appendChild(taskElement);
}

// Attach event listener to the form submit event
document.getElementById("taskForm").addEventListener("submit", addTask);
