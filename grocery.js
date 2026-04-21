const response =  [
  ];


let showresponse = '';
fetchItem();
  function addList(list_item){
      response.push(list_item);
      fetchItem();
  }

  function fetchItem(){
    showresponse='';
  for(let each = 0; each < response.length; each++){
     showresponse += `
     
    <li><a onclick='deleteItem(${each})'>${response[each].text}<span>×</span></a></li>
 
  `
  }
  document.getElementById('menu_list').innerHTML = showresponse;
}
function deleteItem(index){
    response.splice(index,1);
    fetchItem();
}