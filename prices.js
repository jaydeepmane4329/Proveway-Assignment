// Function to add price and size options dynamically.
function add(idOfDiv) {
  // getting perticular div from DOM based on it's #id;
  table = document.getElementById(idOfDiv);
  if (idOfDiv === "Box_1") {
    table = document.getElementById('Box_1');
    document.getElementById('Box_2').innerHTML = "";
    document.getElementById('Box_3').innerHTML = "";
  } else if (idOfDiv === "Box_2") {
    table = document.getElementById('Box_2');
    document.getElementById('Box_1').innerHTML = "";
    document.getElementById('Box_3').innerHTML = "";
  } else {
    table = document.getElementById('Box_3');
    document.getElementById('Box_1').innerHTML = "";
    document.getElementById('Box_2').innerHTML = "";
  }
  table.innerHTML = `<thead>
   <th>size</th>
   <th>Colour</th>
 </thead>
 <tbody>
   <tr>
     <td>
       <label for="size">#1</label>
       <select name="" id="">
         <option value="s">S</option>
         <option value="8">24</option>
         <option value="8">26</option>
         <option value="8">28</option>
         <option value="8">30</option>
       </select>
     </td>
     <td>
       <select name="" id="">
         <option value="Colour">Colour</option>
         <option value="red">red</option>
         <option value="white">white</option>
         <option value="blue">blue</option>
         <option value="black">black</option>
       </select>
     </td>
   </tr>
   <tr>
     <td>
       <label for="size">#2</label>
       <select name="" id="">
         <option value="s">S</option>
         <option value="8">24</option>
         <option value="8">26</option>
         <option value="8">28</option>
         <option value="8">30</option>
       </select>
     </td>
     <td>
       <select name="" id="">
         <option value="Colour">Colour</option>
         <option value="red">red</option>
         <option value="white">white</option>
         <option value="blue">blue</option>
         <option value="black">black</option>
       </select>
     </td>
   </tr>
 </tbody>`;
}
