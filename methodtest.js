export function postData() {
    let id = document.getElementById("ID").value;
    let article_name = document.getElementById("article_name").value;
    let article_body = document.getElementById("article_body").value;
    let date = new Date().toString();
  
    let data = {
      id,
      article_name,
      article_body,
      date
    };
  
    let url = "https://httpbin.org/post";
  
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "x-www-form-urlencoded");
    xhr.onload = function () {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        let output = document.getElementById("response");
        output.innerHTML = JSON.stringify(response, null, 2);
      }
    };
    xhr.send(JSON.stringify(data));
  }
  export function getData() {
    let url = "https://httpbin.org/get";
  
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        let output = document.getElementById("response");
        output.innerHTML = JSON.stringify(response, null, 2);
      }
    };
    xhr.send();
  }
  export function putData() {
    let id = document.getElementById("ID").value;
    let article_name = document.getElementById("article_name").value;
    let article_body = document.getElementById("article_body").value;
    let date = new Date().toString();
  
    let data = {
      id,
      article_name,
      article_body,
      date
    };
  
    let url = "https://httpbin.org/put";
  
    let xhr = new XMLHttpRequest();
    xhr.open("PUT", url, true);
    xhr.setRequestHeader("Content-Type", "x-www-form-urlencoded");
    xhr.onload = function () {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        let output = document.getElementById("response");
        output.innerHTML = JSON.stringify(response, null, 2);
      }
    };
    xhr.send(JSON.stringify(data));
  }
  export function deleteData() {
    let id = document.getElementById("ID").value;
    let url = `https://httpbin.org/delete?id=${id}`;
  
    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", url, true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        let output = document.getElementById("response");
        output.innerHTML = JSON.stringify(response, null, 2);
      }
    };
    xhr.send();
  }