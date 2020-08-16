var  clike = 0;
let likeme = function (btnElement) {
    console.log(btnElement);
    clike++;
    btnElement.children[1].innerHTML = clike;
  };

function comment(btnElement) {
  var input = btnElement.parentElement.parentElement.children[1];
  console.log(input);
  var x = input.value;

  const cnode = input.children[3];
  let newEle = cnode.children[0].cloneNode(true);
  newEle.children[0].innerHTML = x;
  input.value = "";
  cnode.insertBefore(newEle,cnode.firstChild);
}