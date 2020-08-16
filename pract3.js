var clike = 1;
var ccomment = 1;

function like() {
    let l = document.querySelector("#btn-1").innerHTML = "Like " + clike;
    clike++;

}

function comment() {
    let commentEle = document.createElement("div");
    commentEle.textContent = "comment " + ccomment;

    commentEle.style.color = "green";
    commentEle.style.margin = "4px";
    commentEle.style.fontSize = "4vh";
  
    let com = document.querySelector(".commentBox");
    com.appendChild(commentEle);

    ccomment++;
}