let clike = 0;

function like() {
    setInterval(() => {
    clike++;
    document.querySelector("#bt-1").innerHTML = "Like " + clike;    
    }, 3000);
    
}

var g;
function comment() {
   
    setInterval(() => {
        setTimeout(() => {
            const a = document.createElement("div");
            a.style.fontSize = "5vh";
            a.style.color = "red";
            a.style.margin = "5px";
        
            const b = document.querySelector("#in-1").value;
            if(b == "")
            {            
            const commentIn = document.querySelector(".commentBox");
        
            a.textContent = g;
            //commentIn.appendChild(a);
            commentIn.insertBefore(a,commentIn.firstChild);
            }
            else{
            const commentIn = document.querySelector(".commentBox");
            g = b;
            a.textContent = b;
            //commentIn.appendChild(a);
            commentIn.insertBefore(a,commentIn.firstChild);
            document.querySelector("#in-1").value = "";
            }
                
        }, 3000);    
    }, 5000);
        
    
}