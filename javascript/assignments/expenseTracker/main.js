// initials globals
let wallet = {
    cashIn: 0,
    cashOut: 0,
    balance: 0
};
let list = [];
console.log(wallet);
console.log(list);


const cashInBtn = document.getElementById("cashInBtn");
cashInBtn.addEventListener("click", function (event) {
   
        // taking cashin input value
        const cashIn = document.getElementById("cashinInput");

            // getting cashinValue from input and converting into number by + sign, 
             //its latest way to convert string into number. add plus before the string number
        const cashInAmount = +cashIn.value;

        updateWallet(cashInAmount);

        console.log(wallet)

});

// expense add
const expenseAddBtn = document.getElementById("expenseAddBtn");
expenseAddBtn.addEventListener("click", function() {
    const expTitle = document.getElementById("expenseTitle");
    const expAmount = document.getElementById("expenseAmount");
    const expDate = document.getElementById("expenseDate");
    
    // get values from inputs
    const title  = expTitle.value;
    const amount = +expAmount.value;
    const date   = expDate.value;

    // update list of items in array
        const temp = {
            title: title,
            amount: amount,
            date: date
        }
        // adding object into array
        list.push(temp);


    // update wallet
        updateWallet();

    // update ui
    let itemsHtml = "";
      list.forEach( (item, index) => {
        itemsHtml += makeListItemHtml(item.title, item.amount, item.date, index);
      });

      document.getElementById("list").innerHTML = itemsHtml;

    console.log(list);
    console.log(wallet);
});


// update the cashin and cashout 
function updateWallet(cashIn = null) {
    
    // cash in
    if (cashIn !== null) {
        wallet.cashIn =  wallet.cashIn + cashIn;
    }

    // update wallet on cahsout/delete item
    let totalAmount = 0;
    list.forEach( function(item, index) {
        // console.log(index, item);
        console.log(item.amount);
        totalAmount += item.amount;
    });

    // Get sum of expenses
     wallet.cashOut = totalAmount;

    // adjust balance
     wallet.balance = wallet.cashIn - totalAmount;

     // update ui of wallet
     document.getElementById("cashIn").innerHTML = wallet.cashIn
     document.getElementById("cashOut").innerHTML = wallet.cashOut
     document.getElementById("balance").innerHTML = wallet.balance
}



// create html to append
function makeListItemHtml(title, amount, date, index) {
    let html = `<div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <h6 class="card-title expenseTitle">${title}</h6>
          <p class="card-text expenseDate"><small class="text-body-secondary">${date}</small></p>
        </div>
      </div>
      <div class="col-md-2 align-items-center d-flex justify-content-end"><h5>${amount}</h5></div>
      <div class="col-md-2 align-items-center d-flex justify-content-end pe-3">
        <span class="deleteBtn"><i class="ri-close-line delBtn" data-itemIndex=${index}></i></i></span>
      </div>
    </div>
  </div>`;
  return html;
}

//const delBtns = document.getElementsByClassName("delBtn");

document.addEventListener("click", function(event) {
    if(Array.from(event.target.classList).includes("delBtn")) {
        index = event.target.getAttribute("data-itemIndex");
        console.log(typeof event.target.getAttribute("data-itemIndex"));
        
        index = +index;
        // remove from array

        console.log(list);

        list.splice(index, 1);


            // update ui
    let itemsHtml = "";
    list.forEach( (item, index) => {
      itemsHtml += makeListItemHtml(item.title, item.amount, item.date, index);
    });

    document.getElementById("list").innerHTML = itemsHtml;

        updateWallet();

        console.log(list);
    }
    console.log(typeof event.target.classList)
})