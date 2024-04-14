const list = document.querySelector("ul")
const buttonshowall = document.querySelector(".showall")
const buttonmapall = document.querySelector(".mapall")
const buttonsumall = document.querySelector(".sumall")
const buttonfilterall = document.querySelector(".filterall")


function formatcurrency(value){
   return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function btcshowAll(productsArray) {
    let myLi = ""
    productsArray.forEach((product) => {
        myLi = myLi + `
    <li class="xsalada">
    <img class="img-salada" src=${product.src}>
    <p>${product.name}</p>
    <p class="price-xsalada">R$ ${formatcurrency(product.price)}</p>

    </li>
    
    `
    })

    list.innerHTML = myLi
}


function btcmapAllitens() {
    const newPrice = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
       


    }))
 btcshowAll(newPrice)

}
function sumallitens(){
    const sum = menuOptions.reduce ((acc, curr) => acc + curr.price, 0)
   
   list.innerHTML =
    `
   <li>
    
      <p> O Valor Total dos Itens é R$ ${formatcurrency(sum)}</p>
    
    </li>
   
   `
}
 
function btcfilterAllitens() {
 const filtrar = menuOptions.filter((product) => product.vegan)
 
 btcshowAll(filtrar)
    
 

}



  
buttonshowall.addEventListener("click", ()=> btcshowAll(menuOptions))
buttonmapall.addEventListener("click", btcmapAllitens)
buttonsumall.addEventListener("click", sumallitens)
buttonfilterall.addEventListener("click",()=> btcfilterAllitens(menuOptions))











