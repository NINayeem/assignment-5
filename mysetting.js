
const myHistoryMainDiv = document.getElementById("myHistory")
let totalClicked = 0;

function dateToday() {
    const currentDateH1 = document.getElementById("currentDate")

    const date = new Date()
    currentDateH1.innerText = date.toDateString()
    console.log(date.toDateString())
}
dateToday()

function addToComplete(id){

    if(totalClicked === 5) {
        alert("Board update succesfully")
        alert("Congratulations you have completing all the current task")
        return
    }

    const button = document.getElementById(id);
    button.setAttribute("disabled", true);
    const title = document.getElementById(id+"title").innerText
    
    const totalCompleted = document.getElementById("totalCompleted")
    const totalCompletedValue = document.getElementById("totalCompleted").innerText
    
    const cardLeft = document.getElementById("cardLeft")
    const cardLeftValue = document.getElementById("cardLeft").innerText
    
    if(button){
        totalCompleted.innerText = Number(totalCompletedValue)+1;
        cardLeft.innerText = Number(cardLeftValue)-1;
        
        const currentTime = new Date().toLocaleTimeString()
        // history.push({title: title, time: currentTime})
        
        const historyDiv = document.createElement("div");

        const h3Title = document.createElement("h3");
        h3Title.textContent = "You can completed the task"+ " " + title;

        const pTime = document.createElement("p");
        pTime.textContent = currentTime

        historyDiv.appendChild(h3Title)
        historyDiv.appendChild(pTime)

        myHistoryMainDiv.appendChild(historyDiv)

        alert("taskmeeter.netfly.app says  board update succesfylly");
        totalClicked = totalClicked+1;
    }
    else{
        console.log(id, "not found")
    }

    console.log(history)
}


document.getElementById("clearHistoryBtn").addEventListener('click', function(){
    myHistoryMainDiv.innerHTML = ""
})

document.getElementById("changeTheme").addEventListener('click', function(){
    const mainSection = document.getElementById("mainSection")

    const themes = [
        "bg-green-200",
        "bg-purple-200",
        "bg-sky-200",
        "bg-pink-200",
        "bg-orrange-200",
    ]

    mainSection.classList.add(themes[Math.floor(Math.random() * themes.length)])
})