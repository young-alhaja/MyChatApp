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
    
    fetchList();t
}
function updateList(index,key,value){

}

 