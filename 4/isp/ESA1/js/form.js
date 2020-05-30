(function (){
  let elements=document.querySelector(".half.right.cf").childNodes;
  for (let i=0; i < elements.length; i++){
    if(elements[i].nodeType === 1){
      elements[i].value="";
    }
  }
})();
