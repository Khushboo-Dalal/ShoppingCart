const cartItems = document.querySelector(".cart-items");
const itemsSummary = document.getElementById('items-summary');
const total = document.getElementById('total');
const checkoutBtn = document.getElementById('checkout-btn');
let items = JSON.parse(localStorage.getItem("cart"));


const profile = document.getElementById('profile')
let parsedUser = JSON.parse(sessionStorage.getItem("currUser"));
 profile.innerText = parsedUser.name[0].toUpperCase();
 profile.addEventListener("click",()=>{
  window.location.href = "../Profile/index.html";
 })

function getCartDetails(data){
    let count = 0;
    cartItems.innerHTML = "";
    if(data === null) return;
   data.forEach(item => {
    count += item.price;
    const card = document.createElement('div');
    card.className = "card";
    card.innerHTML = 
    `<img
      src="${item.image}"
      alt="cloth"
    />
    <div class="card-details">
      <div class="price-size-box">
        <span>$${item.price}</span>
        <span>${item.size}</span>
      </div>
      <div class="color-detail">Color : <span class=${item.color}></span></div>
      <div class="rating-detail">Rating : ${item.rating.rate}</div>
    </div>
    <button class="remove-from-cart">Remove From Cart</button>`
    cartItems.appendChild(card);
    const div = document.createElement("div");
    div.className = "item-with-price";
    div.innerHTML = `<span>${item.title.substr(0,10)}</span> <span>$${item.price}</span>`
    itemsSummary.appendChild(div);
   });
   total.innerText = "$"+count;
}
getCartDetails(items);

document.querySelectorAll(".remove-from-cart").forEach((button,idx) =>{
    button.addEventListener("click",()=>{
        items.splice(idx,1);
      let strItems =  JSON.stringify(items);
       localStorage.setItem("cart",strItems);
       getCartDetails(items);
       window.location.reload();
    })
})

checkoutBtn.addEventListener('click',(e)=>{
  var options = {
    key: "rzp_test_xV39ZNbgU1Du4V", // Enter the Key ID generated from the Dashboard
    amount: 10000 ,//check this out if this is paisa or INR // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "accio portal",
    description: "This is your order", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    theme: {
      color: "#122620",
    },
    image: "https://cdn-icons-png.flaticon.com/128/891/891419.png",
    handler: function () { // run a function when your payment is successfull
      location.href = "./shop.html";
    },
    options: {
      checkout: {
        method: {
          netbanking: 0,
          card: 0,
          upi: 1,
          wallet: 0,
        },
      },
    },
  };

  var rzpy1 = new Razorpay(options);
  rzpy1.open();
  e.preventDefault();
})