const allCategory = document.getElementById('all-cat');
const menCategory = document.getElementById('men-cat'); 
const womenCategory = document.getElementById('women-cat'); 
const electronicsCategory = document.getElementById('elec-cat'); 
const jewelCategory = document.getElementById('jewel-cat'); 
const search = document.querySelector("#searchInput input");
const profile = document.getElementById("profile");
const redCloth = document.getElementById('red-cloth');
const greenCloth = document.getElementById('green-cloth');
const whiteCloth = document.getElementById('white-cloth');
const blackCloth = document.getElementById('black-cloth');
const smallCloth = document.getElementById('small-cloth');
const mediumCloth = document.getElementById('medium-cloth');
const largeCloth = document.getElementById('large-cloth');
const xlCloth = document.getElementById('xl-cloth');
const rating = document.getElementById('rating');
const price0To25 = document.getElementById('range-0-25');
const price25To50 = document.getElementById('range-25-50');
const price50To100 = document.getElementById('range-50-100');
const priceAbove100 = document.getElementById('range-100-above');
const applyFiterBtn = document.getElementById('apply-filter');


if(!sessionStorage.getItem("currUser")){
  window.location.href = "../Login/index.html";
}


let parsedUser = JSON.parse(sessionStorage.getItem("currUser"));
 profile.innerText = parsedUser.name[0].toUpperCase();
 profile.addEventListener("click",()=>{
  window.location.href="../Profile/index.html";
});
rating.addEventListener("input",()=>{
  document.getElementById('initialRatingNum').innerText = rating.value;
 })



allCategory.addEventListener('click',() =>{
  document.querySelector('.men-section').style.display = "unset";
  document.querySelector('.men-section .list').style.overflowX = "scroll"
  document.querySelector('.men-section .list').style.flexWrap = "nowrap"
   document.querySelector('.women-section').style.display = "unset";
   document.querySelector('.women-section .list').style.overflowX = "scroll"
   document.querySelector('.women-section .list').style.flexWrap = "nowrap"
   document.querySelector('.jewellery-section').style.display = "unset";
   document.querySelector('.jewellery-section .list').style.overflowX = "scroll"
   document.querySelector('.jewellery-section .list').style.flexWrap = "nowrap"
   document.querySelector('.electronic-section').style.display = "unset";
   document.querySelector('.electronic-section .list').style.overflowX = "scroll"
   document.querySelector('.electronic-section .list').style.flexWrap = "nowrap"
  for(let div of  document.querySelectorAll("#category div"))
  if(document.querySelector(".selected")) div.classList.remove("selected");
   allCategory.className = "selected";
})
menCategory.addEventListener('click',()=>{
  document.querySelector('.men-section').style.display = "unset";
  document.querySelector('.men-section .list').style.overflow = "visible"
  document.querySelector('.men-section .list').style.flexWrap = "wrap"
   document.querySelector('.women-section').style.display = "none";
   document.querySelector('.jewellery-section').style.display = "none";
   document.querySelector('.electronic-section').style.display = "none";
  for(let div of  document.querySelectorAll("#category div"))
  if(document.querySelector(".selected")) div.classList.remove("selected");
   menCategory.className = "selected";
})
womenCategory.addEventListener('click',()=>{
  document.querySelector('.men-section').style.display = "none";
  document.querySelector('.women-section').style.display = "unset";
  document.querySelector('.women-section .list').style.overflow = "visible"
  document.querySelector('.women-section .list').style.flexWrap = "wrap"
   document.querySelector('.jewellery-section').style.display = "none";
   document.querySelector('.electronic-section').style.display = "none";
  for(let div of  document.querySelectorAll("#category div"))
  if(document.querySelector(".selected")) div.classList.remove("selected");
   womenCategory.className = "selected";
})
jewelCategory.addEventListener('click',()=>{
  document.querySelector('.men-section').style.display = "none";
  document.querySelector('.women-section').style.display = "none";
  document.querySelector('.jewellery-section').style.display = "unset";
  document.querySelector('.jewellery-section .list').style.overflow = "visible"
  document.querySelector('.jewellery-section .list').style.flexWrap = "wrap"
  document.querySelector('.electronic-section').style.display = "none";
 for(let div of  document.querySelectorAll("#category div"))
 if(document.querySelector(".selected")) div.classList.remove("selected");
 jewelCategory.className = "selected";
})
electronicsCategory.addEventListener('click',()=>{
  document.querySelector('.men-section').style.display = "none";
   document.querySelector('.women-section').style.display = "none";
   document.querySelector('.jewellery-section').style.display = "none";
   document.querySelector('.electronic-section').style.display = "unset";
   document.querySelector('.electronic-section .list').style.overflow = "visible"
   document.querySelector('.electronic-section .list').style.flexWrap = "wrap"
  for(let div of  document.querySelectorAll("#category div"))
  if(document.querySelector(".selected")) div.classList.remove("selected");
  electronicsCategory.className = "selected";
})


function renderData(data){
     
  document.querySelector(".men-section .list").innerHTML = "";
  document.querySelector(".women-section .list").innerHTML = "";
  document.querySelector(".jewellery-section .list").innerHTML = "";
  document.querySelector(".electronic-section .list").innerHTML = "";
  
   data.forEach(item => {
    if(item.category === "men's clothing"){
        const card = document.createElement('div');
        card.className = "card";
        card.innerHTML = `
        <img
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
        <button id=${item.id} class="add-to-cart">Add To Cart</button>`
      document.querySelector(".men-section .list").appendChild(card);
    }
    else if(item.category === "women's clothing"){
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
        <button id=${item.id} class="add-to-cart">Add To Cart</button>`
      document.querySelector(".women-section .list").appendChild(card);
    }
    else if(item.category === "jewelery"){
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
        <button id=${item.id} class="add-to-cart">Add To Cart</button>`
      document.querySelector(".jewellery-section .list").appendChild(card);
    }
    else if(item.category === "electronics"){
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
        <button class="add-to-cart">Add To Cart</button>`
      document.querySelector(".electronic-section .list").appendChild(card);
    }
  
   });
}
let cartArr = []; 
function addToCart(data){

  document.querySelectorAll(".add-to-cart").forEach((button,idx) =>{
    button.addEventListener("click",(e) =>{
      const id = e.target.id;
      if(localStorage.getItem("cart")){
      let parsedCart = JSON.parse(localStorage.getItem("cart"));
      parsedCart.push(data[id-1]);
      localStorage.setItem("cart", JSON.stringify(parsedCart));
      }
      else{
        cartArr.push(data[id-1]);
         localStorage.setItem("cart", JSON.stringify(cartArr));
      }

    })
  });
}

function filters(updatedData){
  if(redCloth.checked){
    updatedData = updatedData.filter(item => item.color === "Red");
  }
  
  if(greenCloth.checked){
    updatedData =  updatedData.filter(item => item.color === "Green");
  }
  
  if(whiteCloth.checked){
    updatedData =  updatedData.filter(item => item.color === "White"); 
  }
  
  if(blackCloth.checked){
    updatedData =  updatedData.filter(item => item.color === "Black");
  }
  
  if(smallCloth.checked){
    updatedData =  updatedData.filter(item => item.size === "S");
  }
  
  if(mediumCloth.checked){
    updatedData =  updatedData.filter(item => item.size === "M");
  }
  
  if(largeCloth.checked){
    updatedData =  updatedData.filter(item => item.size === "L");
  }
  
  if(xlCloth.checked){
    updatedData =  updatedData.filter(item => item.size === "XL");
  }
    
    updatedData =  updatedData.filter(item => item.rating.rate >= document.getElementById('initialRatingNum').innerText && item.rating.rate <= document.getElementById('finalRatingNum').innerText);
    console.log(updatedData);
     
  if(price0To25.checked){
    updatedData = updatedData.filter(item => item.price >= 0 && item.price <= 25)
  }
  
  if(price25To50.checked){
    updatedData = updatedData.filter(item => item.price >= 25 && item.price <= 50)
  }
  
  if(price50To100.checked){
    updatedData = updatedData.filter(item => item.price >= 50 && item.price <= 100)
  }
  
  if(priceAbove100.checked){
    updatedData = updatedData.filter(item => item.price >= 100)
  }
  return updatedData;
}

function sendData(data){
search.addEventListener("keydown",() =>{
 let updatedData =  data.filter(item =>{
     return item.title.trim().toLowerCase().includes(search.value.trim().toLowerCase());
  })
  renderData(updatedData);
})
   addToCart(data);

  applyFiterBtn.addEventListener("click",()=>{
    let updatedData = filters(data);
    renderData(updatedData);
  })
}

function getColor(){
  const color = ["Red", "Green","White","Black"];
  let randomIdx = Math.round(Math.random()*3);
  return color[randomIdx];
}

function getSize(){
  const size = ["S","M","L","XL"];
  let randomIdx = Math.round(Math.random()*3);
  return size[randomIdx];
}

async function fetchData(){
    try{
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    result.forEach(item =>{
      item.color = getColor();
      item.size = getSize();
    })
     localStorage.setItem("myData",JSON.stringify(result));
    renderData(JSON.parse(localStorage.getItem("myData")));
    sendData(JSON.parse(localStorage.getItem("myData")));
    }
    catch(error){
        console.log(error.message);
    }
}
fetchData();