var role=document.getElementById("role");
var textload = ()=>{
    setTimeout(()=>{
        role.textContent="Frontend Developer";
    },0);
    setTimeout(()=>{
        role.textContent="Agriculture Engineer";
    },1000);
    setTimeout(()=>{
        role.textContent="One Day Become Shift developer";
    },2000);
}
textload();
setInterval(textload,1200);
