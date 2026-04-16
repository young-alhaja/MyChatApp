const response =  [
    {
      "id": 1,
      "text": "Buy Rice ",
      "completed": false
    },
    {
      "id": 2,
      "text": "Pray",
      "completed": false
    },
    {
      "id": 3,
      "text": "Go to school",
      "completed": false
    }
  ];

let list = response;
let result = "";
for(let i = 0; i < response.length; i++){
    result += `

 
    <li>Buy groceries ${list[i].text}</li> 
 
  `;
}
document.getElementById('menu_list').innerHTML = result;
