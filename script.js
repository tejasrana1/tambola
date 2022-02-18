var random;
var list=[];
var temp=0;
var players;
var loop=0;
var b;
var llist=[];
var a;
document.querySelector(".next").addEventListener("click" , randomGenerate);
function randomGenerate()
{
  random=Math.floor(Math.random()*90);
  document.querySelectorAll(".tam")[temp].classList.remove("crnt");
  if(list.includes(random))
  {
    randomGenerate();
  }
  else
  {
    list.push(random);
    document.querySelectorAll(".tam")[random].classList.add("nxt");
    document.querySelectorAll(".tam")[random].classList.add("crnt");
    temp=random;
  }
}
document.querySelector("button.players").addEventListener("click", function()
{
  players=document.querySelector("input.players").value;
  for(var i=0;i<3;i++)
  {
  document.querySelectorAll(".players")[i].classList.add("bye");
}
var list=[];
for(i=0;i<players;i++)
{
  loop=0;
  list=randomNumber();
  var no=0;
  $(".new").after("<input type='text' class='lt' placeholder='Use for reference' name='' value=''><table class='plls' border=1><tr class='pll'><td class='pl'>"+list[no++]+"</td><td class='pl'>"+list[no++]+"</td><td class='pl'>"+list[no++]+"</td><td class='pl'>"+list[no++]+"</td><td class='pl'>"+list[no++]+"</td></tr><tr class='pll'><td class='pl'>"+list[no++]+"</td><td class='pl'>"+list[no++]+"</td><td class='pl'>"+list[no++]+"</td><td class='pl'>"+list[no++]+"</td><td class='pl'>"+list[no++]+"</td></tr><tr class='pll'><td class='pl'>"+list[no++]+"</td><td class='pl'>"+list[no++]+"</td><td class='pl'>"+list[no++]+"</td><td class='pl'>"+list[no++]+"</td><td class='pl'>"+list[no++]+"</td></tr></table>");
}
});
function randomNumber()
{
llist.length=0;
  while(loop<15)
{
  rand();
  loop++;
  }
  return llist;
}
function rand()
{
  a=(Math.floor(Math.random()*90))+1;
  if(llist.includes(a)||(typeof a !== 'number'))
  {
    rand();
  }
  else
  {
  llist.push(a);
}

}
