
    let modalBudy = document.querySelector(".modal-body")
    let divDaryo = document.querySelector(".divDaryo")
    let currentIndex
    let imgManzili
    let row = document.createElement("div")
    row.classList.add("row")

function daryoElements(searchTittle){
    row.innerHTML = ""
    searchTittle.map((daryo, index) =>{

    let titleDaryo  = document.createElement("p")
    titleDaryo.innerText = daryo.title

    let imgDaryo = document.createElement("img")
    imgDaryo.src = daryo.photo
    imgDaryo.style.width = "350px"
    imgDaryo.style.height = "250px" 
       
    let card = document.createElement("div")
    card.classList.add("card", "m-3", "p-3")

    let col = document.createElement("div")
    col.classList.add("col-4")

    let button1 = document.createElement("button")
    button1.innerText = "Batafsil..."
    button1.setAttribute("onclick", `seeMore(${index})`)
    button1.setAttribute("data-bs-toggle", "modal" )
    button1.setAttribute("data-bs-target", "#staticBackdrop" )
    button1.setAttribute("class", "btn btn-link")
    document.querySelector("body").appendChild(button1)

    let button2 = document.createElement("button")
    button2.innerText = "Tahrirlash"
    button2.setAttribute("onclick", `editFun1(${index})`)
    button2.setAttribute("data-bs-toggle", "modal" )
    button2.setAttribute("data-bs-target", "#editdaryo" )
    button2.setAttribute("class", "btn btn-success")
    document.querySelector("body").appendChild(button2)

    let button3 = document.createElement("button")
    button3.innerText = "O'chirish"
    button3.setAttribute("onclick", `deleteNew(${index})`)
    button3.setAttribute("class", "btn btn-danger")
    
        
    card.appendChild(titleDaryo)
    card.appendChild(imgDaryo)
    card.appendChild(button1)
    card.appendChild(button2)
    card.appendChild(button3)
    col.appendChild(card)
    row.appendChild(col)
    divDaryo.appendChild(row)

    })
}
daryoElements(daryoYangiliklari)

function seeMore(index){
    currentIndex = index
    let titleDaryo  = document.createElement("p")
    titleDaryo.innerText = daryoYangiliklari[index].title

    let  imgDaryo = document.createElement("img")
    imgDaryo.src = daryoYangiliklari[index].photo
    imgDaryo.style.width = "350px"
    imgDaryo.style.height ="250px"
    let category = document.createElement("p")
    category.innerText = daryoYangiliklari[index].categories

    let datee = document.createElement("p")
    datee.innerText = daryoYangiliklari[index].date

    modalBudy.innerHTML = ""
    modalBudy.appendChild(imgDaryo)
    modalBudy.appendChild(titleDaryo)
    modalBudy.appendChild(category)
    modalBudy.appendChild(datee)
}

function imgAdress(val){
    val.src = window.URL.createObjectURL(val.files[0])
    imgManzili = val.src
}

function editFun1(index){
    currentIndex = index
    document.querySelector(".newTitle").value = daryoYangiliklari[index].title
    document.querySelector(".newCategory").value = daryoYangiliklari[index].categories
}

function editFun2(){
    
    let newTitleName = document.querySelector(".newTitle").value
    let newCategoryName = document.querySelector(".newCategory").value
    
    daryoYangiliklari[currentIndex].photo = imgManzili
    daryoYangiliklari[currentIndex].title = newTitleName
    daryoYangiliklari[currentIndex].categories = newCategoryName

    daryoElements(daryoYangiliklari)
}

function deleteNew(index){
    daryoYangiliklari.splice(index, 1)
    daryoElements(daryoYangiliklari)
}

function searchTitle(qidiruv){
    let currentsearch = daryoYangiliklari.filter(daryo =>{
    return daryo.title.toLowerCase().includes(qidiruv.value.toLowerCase())
    
})
    daryoElements(currentsearch)
}
