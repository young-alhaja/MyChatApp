const response =  [
    {
      "id": 1,
      "name": "Egusi Soup",
      "description": "Rich melon seed soup with assorted meat",
      "price": 4000
    },
    {
      "id": 2,
      "name": "Amala & Ewedu",
      "description": "Yam flour served with ewedu and gbegiri",
      "price": 3500
    },
    {
      "id": 3,
      "name": "Ofada Rice",
      "description": "Local rice served with spicy ayamase sauce",
      "price": 3800
    },
    {
      "id": 4,
      "name": "Pounded Yam & Ogbono",
      "description": "Smooth pounded yam with ogbono soup",
      "price": 4500
    },
    {
      "id": 5,
      "name": "Moi Moi",
      "description": "Steamed bean pudding with fish and egg",
      "price": 1500
    },
    {
      "id": 6,
      "name": "Akara & Pap",
      "description": "Bean cakes served with pap",
      "price": 1200
    }
  ]

let menu = response;
let result = "";
for(let i = 0; i < response.length; i++){
    result += `
    
    <div class="food-item">
    <div class="details">
      <div class="name">${menu[i].name}</div>
      <div class="desc">Served with chicken and salad</div>
    </div>
    <div class="price">₦3,500</div>
  </div>
  `;
}
document.getElementById('food-list').innerHTML = result;