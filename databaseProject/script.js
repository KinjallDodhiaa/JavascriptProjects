const url = "https://jsonplaceholder.typicode.com/users";
const tableBody = document.getElementById('tableBody')

fetch(url)
  .then(response => {
      if(response.status === 200){
          response.json().then(data => {
              console.log(data)
              data.forEach(element => {
                  const htmlRow = `
              <tr>    
              <th scope="row">${element.id}</th>
              <td>${element.name}</td>
              <td>${element.username}</td>
              <td>${element.email}</td>
              <td>${element.address.street} ${element.address.suite}</td>
              <td>${element.phone}</td>
              <td>${element.website}</td>
              <td>${element.company.name}</td>
              <td><button data-toggle="modal" data-target="#todoModal" onclick='showAgenda(${element.id})'  id="agendaBtn" class="btn btn-success">Agenda</button></td>
              </tr>`;

                tableBody.innerHTML += htmlRow;

              })
          })
      }
  })


  const todoTableBody = document.getElementById('todoTableBody')

  function showAgenda(userId){
    const url = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;
    console.log(url);

    fetch(url).then(response => {
      if(response.status===200){
        response.json().then(data => {
          console.log(data);
          todoTableBody.innerHTML = '';

          data.forEach(element => {
            const toDoHTML = `<tr>
                      <td>${element.title}</td>
                      <td>${element.completed ? "Done" : "Not yet"}</td>
                    </tr>`;
                  todoTableBody.innerHTML += toDoHTML;
          })
        })
      }
    })

  }
  

  
  