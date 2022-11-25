let toDo=[]
let cont = 0
const list = document.getElementById('container')
const inPut = document.getElementById('box')

function enter(a){
    if (event.key === 'Enter'){
        let itemV = a.value
        let itemStr = itemV.trim()
       

        if (itemStr == ""){
            return
        }else{
            const item = {
                text: itemStr,
                checked : false,
                id: Date.now(),
            };
            toDo.push(item);
            console.log(toDo);
            inPut.value = ''
            console.log(toDo[cont])
            updateDisplay(toDo[cont])
            cont++
            
        }      
    }
}

function updateDisplay(item){
    let entry = document.createElement('lable')
    entry.setAttribute("id", toDo[cont].id)
    entry.innerText=toDo[cont].text
    list.appendChild(entry)

    let entryCheck = document.createElement('input')
    entryCheck.setAttribute("type","radio")
    entryCheck.setAttribute("for",toDo[cont].id)
    entryCheck.setAttribute("class","done")
    document.getElementById(toDo[cont].id).appendChild(entryCheck)

    let entryBtn = document.createElement('button')
    entryBtn.setAttribute("class","delete")
    document.getElementById(toDo[cont].id).appendChild(entryBtn)
}

list.addEventListener('click',Event =>{
    if (Event.target.classList.contains('done')){
        const itemID= Event.target.parentElement.id;
        document.getElementById(itemID).setAttribute("style","text-decoration: Line-through")
    }
    if (Event.target.classList.contains('delete')){
        const itemID= Event.target.parentElement.id
        document.getElementById(itemID).setAttribute("style","display:none")
    }
})
