(() => {
  console.log('getting here')
  const includes = document.getElementsByTagName('include'); 
    
    fetch('./../../src/html/login.html').then(respData => {
      respData.text().then(htmlData => {
        includes[0].insertAdjacentHTML('afterend', htmlData);
      })
     
   })
   
   
  
})()

function login() {
   
    const userName = document.getElementById('userNameId').value;
    const password = document.getElementById('passwordId').value;
    console.log(userName, password);
    const body = JSON.stringify({
        user: userName,
        password: password
    });


    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => responseHandler(json));
}

function responseHandler(jsonData) {
    console.log('inside responseHandler:', jsonData)
    // get the value of jwtKey and store here.
    localStorage.setItem('key', jsonData);
    const includes = document.getElementsByTagName('include'); 
    const containerDiv = document.getElementById('containerDiv')
    const mainDivEl = document.getElementById('main-div')
    // searchInclude wouldnt be available at this point in time
    // Now you have to make the request to call the search html
    fetch('./../../src/html/search.html').then(respData => {
      console.log('data:', respData)
      respData.text().then(htmlData => {
        // delete the existing one
        mainDivEl.remove();
        mainDivElNew = document.createElement('div');
        includeElNew = document.createElement('include');
        mainDivElNew.appendChild(includeElNew)
        includeElNew.insertAdjacentHTML('afterEnd', htmlData)
       
        containerDiv.appendChild(mainDivElNew)
        // load the new one div containers
      })
    });
}
