let btnEnter = document.querySelector("button");
let username = document.getElementById("username");
let id = document.getElementById("id");

btnEnter.addEventListener("click", () => {
    let idPresent = false;
    for (i in students) {
        let detail = students[i];
        if (detail["id"] == id.value) {
            idPresent = true;
            delete students[i]
            alert(`User '${detail["name"]}' with username ${username.value} has been deleted successfully`)
            // console.log(students);
            break
        } else {
            continue
        }
    };
    if (idPresent == false) {
        alert("Please enter a valid ID")
    }
});


const students = {
    1: {
        "id": 1,
        "name": "Excel",
        "age": 33,
        "avg": 22.7
    },
    2: {
        "id": 2,
        "name": "Cent"
    },
    3: {
        "id": 3,
        "name": "James"
    },
    4: {
        "id": 4,
        "name": "Mike"
    },
}
