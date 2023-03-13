export function postData() {
    const id = document.getElementById('ID').value;
    const article_name = document.getElementById('article_name').value;
    const article_body = document.getElementById('article_body').value;
    const date = new Date().toString();
  
    const data = {
      id,
      article_name,
      article_body,
      date
    };
  
    const url = 'https://httpbin.org/post';
  
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const output = document.getElementById('response');
        output.innerHTML = JSON.stringify(response, null, 2);
      }
    };
    xhr.send(JSON.stringify(data));
  }
  