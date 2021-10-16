
function FindNumbers() {
  txt = document.getElementById("txt").value;
  txt = txt.toString();
  var i=txt.length-txt.replace(/\d/gm,'').length;
  count = document.querySelector('#count').innerHTML = "Number of characters: " + txt.length +"<br\>Number of digits: " + i
}