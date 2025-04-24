
// main.js
import { userData } from './../scripts/script.js';

document.getElementById('output').innerHTML = `
  <div class="user-card">
    <h2>${userData.name}</h2>
    <p>Age: ${userData.age}</p>
    <p>Email: ${userData.email}</p>
  </div>
`;
