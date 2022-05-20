
"use strict";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {createLi} from "./list";

fetch("https://jsonplaceholder.typicode.com/albums")
    .then(response => response.json())
    .then(albums => {
        const list = document.querySelector('#albums')
        albums.forEach(element => {
             let li = createLi(element.title);
             list.append(li)


        });
        // console.log(albums)


    } )
    .catch((error) => console.error("Error"))




