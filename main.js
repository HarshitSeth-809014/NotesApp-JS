if (JSON.parse(localStorage.getItem("notes")) == null) {
    listNotes = {data:[]}
} else {
    listNotes = JSON.parse(localStorage.getItem("notes"))
}
showNotes()

function saveData() {
    list = JSON.stringify(listNotes)
    localStorage.setItem("notes", list)
}


function submit() {
    title = document.getElementById('heading').value
    desc = document.getElementById('text').value

    document.getElementById('heading').value = ""
    document.getElementById('text').value = ""

    if (title != "" && desc != "") {
        ind = 0
        if (listNotes.data.length != 0) {
            indexLi = listNotes.data.length
            ind = listNotes.data[indexLi - 1].index + 1
        }

        obj = {
            title: title,
            desc: desc,
            index: ind
        }
        listNotes.data.push(obj)

        showNotes()
    }
    else {
        alert("Error! Please enter everything to add a note")
    }
}

function deleteL(n) {
    listNotes.data.splice(n, 1)
    showNotes()
}

function showNotes() {
    saveData()

    
    if (listNotes.data.length == 0) {
        document.getElementById('note').innerHTML = "Nothing to display. Please add a Note."
    } else {
        document.getElementById('note').innerHTML = ""
        listNotes.data.forEach((ele, index) => {
            let html = document.getElementById('note').innerHTML
            document.getElementById('note').innerHTML = `${html}\n
            <div class="card me-5 mt-1 mb-2" style="width: 18rem; height: 180px">
            <div class="card-body">
            <h5 id="" class="card-title c-text">${ele.title}</h5>
            <p id="" class="card-text c-body">${ele.desc}</p>
            <button type="button" class="btn btn-primary btn-sm" onclick="deleteL(${index})">Delete</button>
            </div>
            </div>
            `
        });
    }
}

search = document.getElementById("search")
search.addEventListener('input', function () {
    val = search.value.toLowerCase()
    cards = document.getElementsByClassName('card')
    Array.from(cards).forEach(element => {
        cardVal = element.getElementsByTagName('p')[0].innerText
        if (cardVal.includes(val)) {
            element.style.display = "block"
        } else {
            element.style.display = "none"

        }
    });
})