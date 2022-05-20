import { createButton } from './button.js';

          export function createLi (title){
              const li = document.createElement("li");

              li.classList.add("album_title")
              li.classList.add("list-group-item")
              li.innerText = title;
              let button = createButton();
              li.append(button)

              return li;
          }



