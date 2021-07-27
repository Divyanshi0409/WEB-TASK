const newtask = document.querySelector(".new");
const addbtn = document.querySelector(".add");
const notcompleted = document.querySelector("#show");

const form = `
<details class="completebox">
  <summary>
    <img
      src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"
      class="icon menu"
    />
    <input type="checkbox" name="check" value="on" class="icon" />
    <input type="text" class="inputask" style="
    border-color: transparent;
    height: 24px;
    width: 500px;
"/>
    <img
      src="https://img.icons8.com/material-rounded/24/000000/give-way.png"
      class="icon dropdown"
    />
  </summary>
  <div class="faq__content">
    <p>
      <section class="left">Description:<input type = "text" name = " rst_name" /></section>
      <section class="right">
        Due Date: <input type = "text" name = "date" /><br>
        Priority: <br> 
        <select>
          <option value = "">    
          </option>
          <option value = "Trivial"> Trivial   
          </option>  
          <option value = "Low"> Low   
          </option>  
          <option value = "Medium"> Medium 
          </option>  
          <option value = "High"> High  
          </option>  
        </select>  
        <p id="delete" onclick= "deleteform(this)" > Delete </p>
      </section>
    </p>  
  </div>
</details>  
`;

function deleteform(obj) {
  const container = obj.parentElement.parentElement.parentElement;
  const data = container.querySelector(".inputask").value;
  if (confirm(`Do you want to delete Todo ${data} ?`)) {
    container.style.display = "none";
  }
}

function addBox(_e) {
  var para = document.querySelector(".insideBox");
  para.classList.remove("hidden");
  para.insertAdjacentHTML("afterend", form);
  var inputask = document.querySelector(".inputask");

  if (newtask.value !== "") {
    inputask.value = newtask.value;
    newtask.value = "";
  }
}

function check() {
  var check = document.getElementsByName("check");
  for (var i = 0; i < check.length; i++) {
    if (check[i].checked) {
      check[i].parentElement.parentElement.style.display =
        check[i].parentElement.parentElement.style.display == "none"
          ? "block"
          : "none";
    }
  }
}

addbtn.addEventListener("click", addBox);
newtask.addEventListener("keyup", e => {
  e.key == "Enter" ? addBox(e) : null;
});
notcompleted.addEventListener("click", check);
