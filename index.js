let container = document.querySelector(".container");
let new_data = data.data;
let card = [];
new_data.map((x) => {
    let component1 = document.createElement("div");
    container.appendChild(component1);
    let { name, productList } = x;
    component1.innerHTML = `<h2>${name}</h2>
    <div class="line"></div>`;
    let component2 = document.createElement("div");
    container.appendChild(component2);
    component2.classList.add("main")
    productList.map((y) => {
        let { name, price } = y;
        let key=Math.random()*1000;
        y["key"]=key;
        let component3 = document.createElement("div");
        component2.appendChild(component3);
        component3.innerHTML = `<div class="item">
        <div class="item_name">
          <div class="name">Name : ${name}</div>
          <div class="name">Price: ${price}</div>
        </div>
        <div class="button">
          <div class="button1" onclick="add_to_card(${key})">
            <button class="btn">Add to the card</button>
          </div>
          <div class="button1" onclick="remove_to_card(${key})">
            <button class="btn" >Remove from cart</button>
          </div>
        </div>
      </div>`;
    });
});

let add_to_card = (name) => 
{
    let search=new_data.find((x)=>{
       return (x.productList.find((y)=>y.key===name));
    })
    if(search===undefined)
    {
        console.log("Card is Empty");
        return ;
    }
    else{
        console.log("Product Added to the cart.");
        let item_array=search.productList;
        let item_find=item_array.find((x)=>x.key===name);
        card.push([search.name,item_find.name,item_find.price
        ])
        console.log(card);
    }
}
let remove_to_card = (name) =>
{
    let search=new_data.find((x)=>{
        return (x.productList.find((y)=>y.key===name));
     })
     if(search===undefined)
    {
        console.log("Card is Empty");
        return ;
    }
    
     let item_array=search.productList;
     let item_find=item_array.find((x)=>x.key===name);
     let obj=[search.name,item_find.name,item_find.price];
     let present=card.find((x)=>x[0]===obj[0]&&x[1]===obj[1]&&x[2]===obj[2])
     if(present!==undefined)
     {
        // console.log(obj);
        card=card.filter((x)=>x[0]!==obj[0]||x[1]!==obj[1]||x[2]!==obj[2]);
        console.log("Product removed from the cart.");
        console.log(card);
     }

}