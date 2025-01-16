// JavaScript Document
console.log("hi");

var MenuButton = document.querySelectorAll("header nav button");
var Menu = document.querySelectorAll("main > ul");
var headerItem = document.querySelectorAll('header')


MenuButton.onclick = MenuOpen;
function MenuOpen() {
    console.log("hi");
    Menu.classList.toggle("open");
    headerItem.classList.toggle('active');
} 
