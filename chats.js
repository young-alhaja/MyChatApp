const response =  {
  "currentUser": {
    "id": 1,
    "name": "You"
  },
  "chats": [
    {
      "id": 101,
      "user": {
        "name": "John Doe",
        "avatar": "J",
        "status": "online"
      },
      "lastMessage": "Typing...",
      "messages": [
        {
          "id": 1,
          "senderId": 101,
          "text": "Hey 👋",
          "time": "10:00 AM",
          "type": "received"
        },
        {
          "id": 2,
          "senderId": 1,
          "text": "Hello! How are you?",
          "time": "10:01 AM",
          "type": "sent"
        },
        {
          "id": 3,
          "senderId": 101,
          "text": "I'm doing great, what about you?",
          "time": "10:02 AM",
          "type": "received"
        },
        {
          "id": 4,
          "senderId": 1,
          "text": "All good here 😎",
          "time": "10:03 AM",
          "type": "sent"
        }
      ]
    },
    {
      "id": 102,
      "user": {
        "name": "Alice",
        "avatar": "A",
        "status": "offline"
      },
      "lastMessage": "See you later",
      "messages": [
        {
          "id": 1,
          "senderId": 102,
          "text": "Are we still meeting?",
          "time": "Yesterday",
          "type": "received"
        },
        {
          "id": 2,
          "senderId": 1,
          "text": "Yes, by 5pm",
          "time": "Yesterday",
          "type": "sent"
        }
      ]
    },
    {
      "id": 103,
      "user": {
        "name": "Michael",
        "avatar": "M",
        "status": "online"
      },
      "lastMessage": "Thanks bro 🙌",
      "messages": [
        {
          "id": 1,
          "senderId": 1,
          "text": "Did you get it?",
          "time": "Mon",
          "type": "sent"
        },
        {
          "id": 2,
          "senderId": 103,
          "text": "Yes I did!",
          "time": "Mon",
          "type": "received"
        },
        {
          "id": 3,
          "senderId": 103,
          "text": "Thanks bro 🙌",
          "time": "Mon",
          "type": "received"
        }
      ]
    }
  ]
}


let chats = response.chats;
let result = "";
for(let i = 0; i < chats.length; i++){
    result +=  `
    
        <div class="chat-header">
            <div class="avatar">J</div>
               John Doe${chats[i].name}
        </div>

    `;
}
// for(let each of chats){
//     result += `
//             <div class="chat-item">
//           <div class="avatar">${each.user.avatar}</div>
//           <div class="chat-info">
//             <div class="chat-name">${each.user.name}</div>
//             <div class="chat-preview">${each.lastMessage}</div>
//           </div>
//         </div>    
//     `
// }
document.getElementById('show-chatlist').innerHTML = result;