p=document.getElementsByClassName("print")[0];
b=document.getElementsByTagName("button");
c=document.getElementsByClassName("calulator")[0];
h=document.getElementsByTagName("label")[0];
h.addEventListener("click",()=>
{
   if( document.getElementsByTagName("body")[0].style.backgroundColor=="black")
   {
    document.getElementsByTagName("body")[0].style.backgroundColor="white";
    h.style.backgroundColor="black";
    c.style.backgroundColor= "black";
    p.style.color="white";
    p.style.borderBottomColor="white";
  
   }
   else
   {
    document.getElementsByTagName("body")[0].style.backgroundColor="black";
    h.style.backgroundColor="white";
    c.style.backgroundColor="white";
    p.style.color="black";
    p.style.borderBottomColor="black";
  
    
   }
})
for(i=0;i<b.length;i++)
{
    b[i].addEventListener("click",(e)=>
    {
        if (e.target.innerText=="AC")
        {
            p.innerText="";
        }
        else if(e.target.innerText=="B")
        {
            l=p.innerText.length;
            p.innerText=p.innerText.slice(0,l-1);
        }
        else if (e.target.innerText=="+/-")
        {
            p.innerText="(-"+  p.innerText+")";
        }
        else if(e.target.innerText=="=")
        {
            if(p.innerText=="")
            {
                console.log("no data");
            }
            else 
            {
                p.innerText=eval(p.innerText);
            }
        }
        else
        {
            p.innerText=p.innerText+e.target.innerText;
        }
    })
}