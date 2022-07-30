const apiObj = new FetchApi
const searchField = document.querySelector("#searchid")
const ulList = document.querySelector(".list-group");
document.addEventListener("DOMContentLoaded", getUserList)

function getUserList() {

    const response = apiObj.getUsers("http://jsonplaceholder.typicode.com/users");
    response.then(data => {
        data.forEach(function(userName) {
            createList(userName.name);
        });
    });
    searchField.addEventListener("keyup", function(e) {
        let txt = e.target.value.toLowerCase();
        document.querySelectorAll(".list-group-item").forEach(function(item) {
            let liContent = item.firstChild.textContent;

            if (liContent.toLowerCase().indexOf(txt) != -1) {
                item.classList.remove("d-none");
                item.classList.add("d-flex");

            } else {
                item.classList.add("d-none");
                item.classList.remove("d-flex");

            }

        })
    })

    function createList(name) {
        const liTag = document.createElement("li");
        const aTag = document.createElement("a");
        const iTag = document.createElement("i");

        const ulTag = document.querySelector("ul")
        const textValue = document.createTextNode(name);
        aTag.setAttribute("href", "#")
        iTag.className = "fa fa-trash";
        aTag.appendChild(iTag);
        liTag.className = "list-group-item d-flex justify-content-between";
        liTag.appendChild(textValue);
        liTag.appendChild(aTag);
        ulTag.appendChild(liTag);
    }


    ulList.addEventListener("click", function(e) {



        if (e.target.classList.contains("fa-trash")) {

            if (confirm("Are you sure")) {
                e.target.parentElement.parentElement.remove();
            }
        }
    });
}