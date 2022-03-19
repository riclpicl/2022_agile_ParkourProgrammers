//https://stackoverflow.com/a/68646957
var tableContent = document.getElementById('table').innerHTML;
localStorage.setItem('tableContent', tableContent);

var dateContent = document.getElementById('Week');
localStorage.setItem('tableDate', dateContent);


if (localStorage.getItem("tableContent") !== null) {
    var tableContent = localStorage.getItem('tableContent');
    document.getElementById('table').innerHTML = tableContent;
    
    var dateContent = localStorage.getItem('tableDate');
    document.getElementById('Week').innerHTML = dateContent;
}

console.log(localStorage);