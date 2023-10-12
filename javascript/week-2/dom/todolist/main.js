const input  = document.getElementById("inputField");
const addNewBtn = document.getElementById("addNew");
const todoList = document.getElementById("todoList");

addNewBtn.addEventListener("click", function(event) {
    const inputValue = input.value;

   todoList.innerHTML += `<li class="new-box todo border border-2 mb-2 d-flex justify-content-between">
          <span>${inputValue}</span>
            
            <span><i class="ri-delete-bin-2-line delIcon"></i></span>
          </p>
        </li>`;
      
});

    // const li = document.createElement("li");
    // li.className = "new-box todo border border-2 mb-2 d-flex justify-content-between";
    // li.innerHTML = `<span>${input.value}</span>`;

    // // create i tag
    //  const iTag = document.createElement("i");
    //  iTag.className =  "ri-delete-bin-2-line delIcon";
    //  iTag.addEventListener("click", function (event) {
    //      event.target.closest('li').classList.add("remove-box");
    //      setTimeout(function() {
    //         event.target.closest('li').remove();
    //      },100);
         
    //  })
    //  li.append(iTag);

 /*   todoList.append(li); */
//})

document.body.addEventListener("click", function(event) {
  console.log(event.target);
  
    const parent = event.target.closest('li');

    if(event.target.classList.contains("delIcon")) {
        event.target.closest('li').classList.add("remove-box");
        setTimeout(function() {
            parent.remove();
         },100);
        
    }
})
