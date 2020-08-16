var clike = 0;

function like() {
    clike++;
    document.querySelector("#btnlike").textContent = "Like " + clike;
}

function comment() {
    const oneCre = document.querySelector("#createComment");
    oneCre.style.margin = "2px";

    
    let inputTxt = document.querySelector("#input").value;
    let commentBox = document.querySelector(".alwaysCreated").cloneNode(true);
    commentBox.removeAttribute("id");
    commentBox.style.visibility = "visible";
    commentBox.style.fontSize = "3vh";
    commentBox.style.color = "red";
    commentBox.children[0].innerHTML = inputTxt;
    oneCre.insertBefore(commentBox,oneCre.firstChild);

    document.querySelector("#input").value = "";
}

function del(btnEle) {
    btnEle.parentElement.remove();
}