console.log("Script.js is linked!");

document.addEventListener('DOMContentLoaded', fetchData);


async function fetchData() {
  try {
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    console.log(data); 



    // Anropa renderUsers med användardata
    renderUsers(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


function renderUsers(users) {
    const userList = document.getElementById('userList');
  
    users.forEach(user => {
      const listItem = document.createElement('li');
      const nameParagraph = document.createElement('p');
      const usernameParagraph = document.createElement('p');
      
      // innerText för att undvika HTML-injektion
      nameParagraph.innerText = `${user.firstName} ${user.lastName}`;
      usernameParagraph.innerText = user.username;
  
      // namn och användarnamn i listelementet
      listItem.appendChild(nameParagraph);
      listItem.appendChild(usernameParagraph);
  
      //CSS-stil 
      listItem.style.margin = '2px';
      listItem.style.backgroundColor = user.color;
      
      userList.appendChild(listItem);


    });
  }



  
  
  
