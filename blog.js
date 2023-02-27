//import 'purify.js'
let posts = [
  {
    title: "First Post",
    date: "2022-02-20",
    summary: "This is the first post",
  },
  {
    title: "Second Post",
    date: "2022-02-21",
    summary: "This is the second post",
  },
];

// Get form elements
const titleInput = document.getElementById("title");
const dateInput = document.getElementById("date");
const summaryInput = document.getElementById("summary");
const addPostBtn = document.getElementById("add-post-btn");

// Get posts list element
const postsList = document.getElementById("posts");

// Keep track of the index of the post being edited
let editIndex = -1;

// Function to add a new post or update an existing post
function addOrUpdatePost() {
  // Get form values
  const title = titleInput.value;//DOMPurify.sanitize(titleInput.value);
  const date = dateInput.value;//DOMPurify.sanitize(dateInput.value);
  const summary = summaryInput.value;//DOMPurify.sanitize(summaryInput.value);

  if (editIndex === -1) {
    // Add post to posts array
    posts.push({ title, date, summary });
  } else {
    // Update existing post in posts array
    posts[editIndex].title = title;
    posts[editIndex].date = date;
    posts[editIndex].summary = summary;

    // Reset edit index
    editIndex = -1;
  }

  // Clear form inputs
  titleInput.value = "";
  dateInput.value = "";
  summaryInput.value = "";

  // Update posts list
  updatePostsList();
}

// Function to delete a post
function deletePost(index) {
  // Remove post from posts array
  posts.splice(index, 1);

  // Update posts list
  updatePostsList();
}

// Function to edit a post
function editPost(index) {
  // Set form values to post data
  titleInput.value = posts[index].title; //DOMPurify.sanitize(posts[index].title);
  dateInput.value = posts[index].date;//DOMPurify.sanitize(posts[index].date);
  summaryInput.value = posts[index].summary;//DOMPurify.sanitize(posts[index].summary);

  // Set edit index
  editIndex = index;

  // Update add post button text
  addPostBtn.innerText = "Update Post";
}

// Function to update the posts list
function updatePostsList() {
  // Clear current posts list
  postsList.innerHTML = "";

  // Loop through posts array and create list items
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    // Create list item with post data, edit button, and delete button
    const listItem = document.createElement("li");
    const postText = document.createTextNode(
      `${post.title} - ${post.date} - ${post.summary}`
    );
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

  // Reset edit index and add post button text
  editIndex = -1;
  addPostBtn.innerText = "Add Post";
}

// Add event listener to add post button
addPostBtn.addEventListener("click", addOrUpdatePost);

// Update posts list on page load
updatePostsList();