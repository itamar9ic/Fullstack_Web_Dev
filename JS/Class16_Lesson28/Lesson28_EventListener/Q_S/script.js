//1
// let copy = document.addEventListener("copy", function(){});
// getSelection re.
function _copy() {
    alert('You Copied: ' + document.getSelection());
}
    // document.getElementById("hw").textContent = document.getSelection();
    

//2
function f(e){
    document.getElementById('hw').textContent = `You clicked: ${e.code} Key`
}
addEventListener("keydown", f)

// addEventListener("keydown", function(e){
//     let s = `${e.code}`
//     document.getElementById('hw').textContent = `You clicked: ${s[s.length-1]} Key`
// })

// document.addEventListener("keypress",function(e){document.getElementById(hw).textContent = "you clicked: "+'${e.code} key'})