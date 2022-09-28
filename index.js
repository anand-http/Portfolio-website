document.querySelector('.cross').style.display="none";

document.querySelector('.burgurr').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo')

    
if(document.querySelector('.sidebar').classList.contains('sidebarGo'))
{
    document.querySelector('.burgur').style.display="inline";
    document.querySelector('.cross').style.display="none";
}
else{
    document.querySelector('.burgur').style.display="none";
    document.querySelector('.cross').style.display="inline";
}

})