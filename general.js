function counter(){
    var words = document.getElementById("word").innerHTML
    var char = document.getElementById("char").innerHTML
var str = document.getElementById("textarea").value
document.getElementById("char").innerHTML = str.length
str=str.trim()
 var arr= str.split((" "))
console.log(arr)
document.getElementById("word").innerHTML=arr.length
}