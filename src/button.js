
export function createButton(){
    const button = document.createElement("button");
    button.classList.add("btn")
    button.classList.add("btn-danger")
    button.innerText = "Delete"

    button.addEventListener("click", (event) => {
        const isRemoveButton = event.target.className === "btn btn-danger";

        if(isRemoveButton){
            const item = event.target.closest(".album_title");
            item.remove();
        }

    });
    return button
}
 // export function createLi (title){
 //     const li = document.createElement("li");
 //
 //     li.classList.add("album_title")
 //     li.classList.add("list-group-item")
 //     li.innerText = title;
 //     li.append(button)
 //     console.log(button)
 //     return li;
 // }