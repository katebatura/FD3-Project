"use strict";

const name = "VseMaslaCart";


const setLocalStorage = function (key, info) {
    
    if(!localStorage.getItem(name))
    localStorage.setItem( name, "{}" );

    let cartString = localStorage.getItem(name);
    let data = JSON.parse(cartString);
    data[key] = info;
    localStorage[name]  = JSON.stringify(data);
    console.log(localStorage)
};

const editLocalStorage = function (key, info) {

    let cartString = localStorage.getItem(name);
    let data = JSON.parse(cartString);
    data[key] = info;
    localStorage[name]  = JSON.stringify(data);
    console.log(localStorage)
};

const delLocalStorage = function (key) {

    let cartString = localStorage.getItem(name);
    let data = JSON.parse(cartString);
    delete data[key];
    localStorage[name]  = JSON.stringify(data);
    console.log(localStorage)
};

const clearLocalStorage = function() {
    localStorage.removeItem( name);
    console.log("remove")
}

const checkLocalStorage = function() {
    if(name in localStorage) {
        return true
    } 
    return false
}

const getLocalStorage = function() {    
    let cartString = localStorage.getItem(name);
    let data = JSON.parse(cartString);

    return data;
}

export {
    setLocalStorage, delLocalStorage, editLocalStorage, clearLocalStorage, checkLocalStorage, getLocalStorage
}