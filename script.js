let barri = document.getElementById("turn")
let box = document.querySelectorAll('.box')
let turn = "X"

const changeturn = ()=>{
    return turn === "X"?"0":"X"
}

const checkWins = ()=>{
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    wins.forEach((element)=>{
        let box = document.getElementsByClassName("box")
        if((box[element[0]].innerHTML === box[element[1]].innerHTML) && (box[element[1]].innerHTML === box[element[2]].innerHTML) && (box[element[0]].innerText !== "")){
        document.getElementById('wins').innerHTML = box[element[0]].innerHTML + " Wins"
        }
    })
}
box.forEach((element)=>{
    element.addEventListener('click', ()=>{
        if(element.innerText == ""){
            element.innerHTML = turn
            turn = changeturn();
            barri.innerHTML = turn + "'s Turn"
            checkWins();
        }
    })
})


document.getElementById('reset').addEventListener("click", ()=>{
    box.forEach((element)=>{
        element.innerHTML = ""
        barri.innerHTML = "X's Turn"
        document.getElementById('wins').innerHTML = ""
    })
})