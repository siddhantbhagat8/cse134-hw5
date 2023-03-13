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
    xhr.setRequestHeader("Content-Type", "application/json");
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
   
  