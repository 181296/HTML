function comment() {
    let a = document.querySelector("#item").value;

    const b = document.querySelector("#ritesh").cloneNode(true);
    b.removeAttribute("id");
    b.style.visibility = "visible";
    b.children[0].innerHTML = a;
    
    
    const c = document.querySelector("#rahul");
    c.appendChild(b);
    document.querySelector("#item").value = "";
}

function del(bt) {
    bt.parentElement.remove();
}

/*
=====>    <button onclick="del()">

//b.removeAttribtue("id");

function del() {
    document.querySelector("#ritesh").remove();
}



onkeyup
*/