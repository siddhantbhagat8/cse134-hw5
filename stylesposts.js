let posts = [
    {
      title: "NBA",
      date: "2023-02-28",
      summary: "This blog post is about the NBA",
    },
    {
      title: "NFL",
      date: "2023-03-01",
      summary: "This blog post is about the NFL",
    },
  ];
  // Defining post variables
  const titleInput = document.getElementById("title");
  const dateInput = document.getElementById("date");
  const summaryInput = document.getElementById("summary");
  const addButton = document.getElementById("add-post-btn");
  const postsList = document.getElementById("posts");
  // variable to keep trac of the post being edited
  let post_index = -1;
  addButton.addEventListener("click", addPost);
  // this adds a post and also updates the post if edit is clicked
  function addPost() {
    // Get form values
    const title = titleInput.value;//DOMPurify.sanitize(titleInput.value);
    const date = dateInput.value;//DOMPurify.sanitize(dateInput.value);
    const summary = summaryInput.value;//DOMPurify.sanitize(summaryInput.value);
    if (post_index == -1) {
      posts.push({ title, date, summary });
    } else {
      // Puts the values back in the form for editing
      posts[post_index].title = title;
      posts[post_index].date = date;
      posts[post_index].summary = summary;
      post_index = -1;
    }
    // Clear inputs after addition of a post
    titleInput.value = "";
    dateInput.value = "";
    summaryInput.value = "";
    // Reflect the changes made to post list
    createList();
  }
  // this deletes a post from the post list
  function deletePost(index) {
    posts.splice(index, 1);
    // Reflect the changes made to post list
    createList();
  }
  // this edits a post from the post list
  function editPost(index) {
    // Set form values to post data
    titleInput.value = posts[index].title; //DOMPurify.sanitize(posts[index].title);
    dateInput.value = posts[index].date;//DOMPurify.sanitize(posts[index].date);
    summaryInput.value = posts[index].summary;//DOMPurify.sanitize(posts[index].summary);
    post_index = index;
    // Change the display of addButton
    addButton.innerText = "Update Post";
  }
  // creates the post list and reflects the changes when a post is added, edited, or deleted
  function createList() {
    postsList.innerHTML = "";
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      // create a list item as a post
      const post_list = document.createElement("li");
      post_list.style.marginBottom = "6px";
      const post_info = document.createTextNode(
        "Post Title: " + post.title + " - Post Date: " + post.date + " - Post Summary: " + post.summary
      );
      post_list.appendChild(post_info);
      // add the edit button
      const editButton = document.createElement("button");
      editButton.innerText = "Edit";
      editButton.addEventListener("click", () => editPost(i));
      editButton.innerHTML = "<i class='fa-solid fa-pen-to-square'></i> Edit";
      editButton.style.borderRadius = "6px";
      editButton.style.marginLeft = "8px";
      editButton.style.marginRight = "8px";
      editButton.style.backgroundColor = "#4CAF50";
      editButton.style.color = "white";
      editButton.style.borderColor = "aqua";
      post_list.appendChild(editButton);
      // add the delete button
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.addEventListener("click", () => deletePost(i));
      deleteButton.innerHTML = "<i class='fa-solid fa-trash'></i> Delete"
      deleteButton.style.borderRadius = "6px";
      deleteButton.style.backgroundColor = "#4CAF50";
      deleteButton.style.color = "white";
      deleteButton.style.borderColor = "aqua";
      post_list.appendChild(deleteButton);
      postsList.appendChild(post_list);
    }
    post_index = -1;
    // keep the display for add button as add (default)
    addButton.innerText = "Add Post";
  }
  createList();