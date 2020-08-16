var l=0;
function like(){
    let c=document.querySelector("#like");
    l=l+1;
   c.innerHTML= "like "+l;
}

function  addE(){
    let usercomment=document.querySelector('#inputtext');
    const newELement=document.createElement("div");  
    const child1=document.createElement('div');
    child1.textContent=usercomment;
    const child2=document.createElement('button');
    child2.textContent="Edit";
    const child3=document.createElement('button');
    child3.textContent="Delete";
    newElement.appendChild(child1);
    newElement.appendChild(child2);
    newElement.appendChild(child3);
    const commentBox = document.querySelector("#commentbox");
    commentBox.insertBefore(newElement, commentBox.firstChild);
    document.querySelector("#inputId1").value = "";
}
 