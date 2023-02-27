// Initialize posts array with sample data
let posts = [
    { title: "First Post", date: "2022-02-20", summary: "This is the first post" },
    { title: "Second Post", date: "2022-02-21", summary: "This is the second post" }
  ];
  
  // Get form elements
  const titleInput = document.getElementById("title");
  const dateInput = document.getElementById("date");
  const summaryInput = document.getElementById("summary");
  const addPostBtn = document.getElementById("add-post-btn");
  
  // Get posts list element
  const postsList = document.getElementById("posts");
  
  // Get dialog element
  const dialog = document.getElementById("add-post-dialog");
  
  // Function to add a new post
  function addPost() {
    // Get form values
    const title = titleInput.value;
    const date = dateInput.value;
    const summary = summaryInput.value;
  
    // Add post to posts array
    posts.push({ title, date, summary });
  
    // Clear form inputs
    titleInput.value = "";
    dateInput.value = "";
    summaryInput.value = "";
  
    // Update posts list
    updatePostsList();
  
    // Close dialog
    dialog.close();
  }
  
  // Function to delete a post
  function deletePost(index) {
    // Remove post from posts array
    posts.splice(index, 1);
  
    // Update posts list
    updatePostsList();
  }
  
  // Function to update the posts list
  function updatePostsList() {
    // Clear current posts list
    postsList.innerHTML = "";
  
    // Loop through posts array and create list items
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
  
      // Create list item with post data and delete button
      const listItem = document.createElement("li");
      const postText = document.createTextNode(`${post.title} - ${post.date} - ${post.summary}`);
      listItem.appendChild(postText);
      const editBtn = document.createElement("button");
      editBtn.innerText = "Edit";
      editBtn.addEventListener("click", () => editPost(i));
      listItem.appendChild(editBtn);
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.addEventListener("click", () => deletePost(i));
      listItem.appendChild(deleteBtn);
  
      // Add list item to posts list
      postsList.appendChild(listItem);
    }
  }
  
  // Function to edit a post
  function editPost(index) {
    // Get post to edit
    const post = posts[index];
  
    // Set form values to post values
    titleInput.value = post.title;
    dateInput.value = post.date;
    summaryInput.value = post.summary;
  
    // Remove old post from array
    posts.splice(index, 1);
  
    // Show dialog
    dialog.showModal();
  
    // Update posts list
    updatePostsList();
  }
  
  // Add event listener to add post button
  addPostBtn.addEventListener("click", () => {
    // Show dialog
    dialog.showModal();
  });
  
  // Add event listener to dialog submit button
  const submitBtn = dialog.querySelector("[type=submit]");
  submitBtn.addEventListener("click", addPost);
  
  // Add event listener to dialog close button
  const closeBtn = dialog.querySelector("[data-close]");
  closeBtn.addEventListener("click", () => {
    // Clear form inputs
    titleInput.value = "";
    dateInput.value = "";
    summaryInput.value = "";
  
    // Close dialog
    dialog.close();
  });
  
  // Update posts list on page load
  updatePostsList();
  