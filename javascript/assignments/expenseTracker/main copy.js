// initials globals
let wallet = {
    cashIn: 0,
    cashOut: 0,
    balance: 0
};
let list = [];

// handling cashin
const cashInBtn = document.getElementById("cashInBtn");
cashInBtn.addEventListener("click", function (event) {

    // taking cashin input value
    const cashIn = document.getElementById("cashinInput");

    // getting cashinValue from input and converting into number by + sign, 
    //its latest way to convert string into number. add plus before the string number

    const cashInAmount = +cashIn.value;

    // increase the value of cashIn
    updateWallet(cashInAmount);

    // empty input field ???

    // update totals
    updateTotalsHtml();


    console.log(wallet);
    console.log(list);
});


// handle expense
const expenseAddBtn = document.getElementById("expenseAddBtn");
expenseAddBtn.addEventListener("click", function() {
    const expTitle = document.getElementById("expenseTitle");
    const expAmount = document.getElementById("expenseAmount");
    const expDate = document.getElementById("expenseDate");
    
    // get values from inputs
    const title  = expTitle.value;
    const amount = expAmount.value;
    const date   = expDate.value;
// console.log(date);

    // update expense list
    updateExpenseList(title, amount, date);

    // create html
    const itemHTML = makeListHtml(title, +amount, date);
    let itemsHtml = document.getElementById("list");
    items = itemsHtml.innerHTML;
    items += itemHTML;
    itemsHtml.innerHTML = items;

    // update wallet
    updateWallet(null, amount);

    // update totals
    updateTotalsHtml();
    console.log(wallet);
    console.log(list);
})



// update the cashin and cashout 
function updateWallet(cashIn = null) {
    
    let totalSpend = 0;
    list.forEach( (item) => {
        totalSpend += item.amount;
    });


    if (cashIn !== null) {
        wallet.cashIn =  wallet.cashIn + cashIn;
    }

    // Get sum of expenses
    wallet.cashOut = totalSpend;

    // adjust balance
    wallet.balance = wallet.cashIn - totalSpend;
}

// create html to append
function makeListHtml(title, amount, date) {
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
        <span class="deleteBtn"><i class="ri-close-line"></i></i></span>
      </div>
    </div>
  </div>`;
  return html;
}


// update dom
function updateExpenseList(title, amount, date) {
    // first create new object of list item and push

    // make readable date
    const miliDate = new Date(Date.parse(date));
    const formattedDate = miliDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });

    // into the list array
    const newItem = {
        title: title,
        amount: +amount,
        date: formattedDate
    }
    list.push(newItem);
}

// update update amouts on top
function updateTotalsHtml() {
    document.getElementById("cashIn").innerHTML = wallet.cashIn;
    document.getElementById("cashOut").innerHTML = wallet.cashOut;
    document.getElementById("balance").innerHTML = wallet.balance;
}

