[
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
  ]

  let title= response;
let result = "";
fetchList();
function fetchList(){
 result = "";
    for(let i = 0; i < response.length; i++){
       console.log(response[i]);
      result += `

     
      <li> ${response[i].text}    <a onclick='deleteList(${i})'>Del</a></li> 
  
    `;
  }
  document.getElementById('menu_list').innerHTML = result;

}
function addToList(item){
    // alert(JSON.stringify(item));
    response.push(item);
     fetchList();
}

function deleteList(index){
    response.splice(index, 1);
    
    fetchList();
}
function updateList(index,key,value){

}
