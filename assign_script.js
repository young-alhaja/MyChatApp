const response = [
    {
      "id": 1,
      "title": "Buy groceries",
      "description": "Buy rice, beans, and vegetables from the market.",
      "date": "2026-04-17",
      "completed": false
    },
    {
      "id": 2,
      "title": "Go to school",
      "description": "Attend lectures and submit assignment.",
      "date": "2026-04-18",
      "completed": false
    },
    {
      "id": 3,
      "title": "Pray",
      "description": "Observe daily prayers and reflection.",
      "date": "2026-04-17",
      "completed": false
    }
  ];
  let showresponse = '';
fetchItem();
  function addList(list_item){
      response.push(list_item);
      fetchItem();
  }

  function fetchItem(){
    showresponse='';
  for(let each of response){
     showresponse += `
            <li>
                <div class="task-top">
                    <span class="task-title">${each.title}</span>
                    <div class="actions">
                    <button class="edit">Edit</button>
                    <button class="delete">Del</button>
                  </div>

                </div>

                <div class="task-desc">
                  ${each.description}
                </div>

                <div class="task-bottom">
                  <span class="date">📅 ${each.date}</span>
                </div>
              </li>     
     `
  }
  document.getElementById('menu_list').innerHTML  = showresponse;
  }
