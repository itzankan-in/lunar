
document.body.addEventListener("keydown", (e) => {
    //menu part :D
   var iht = `<div class="modmenu" style="animation: huh 0.2s ease-in-out;">
    <div class="cross">
        <div class="bar bar1"></div>
        <div class="bar bar2"></div>
    </div>
    <div class="dis"></div>
 </div>`
 var x = document.querySelector(".modmenu");
 var body = document.body;
   if (e.key === "Shift")   {
    if (body.innerHTML.includes(iht)) {
        x.removeAttribute("style")
        x.setAttribute("style", "animation: hehe 0.5s ease-in-out; ")
       setTimeout(() => {document.body.removeChild(x)}, 500) 

    } else {
   document.body.innerHTML += iht
   document.querySelector(".cross").onclick = fun;
function fun() {
    var z = document.querySelector(".modmenu");
     z.removeAttribute("style")
        z.setAttribute("style", "animation: hehe 0.2s ease-in-out; ")
       setTimeout(() => {document.body.removeChild(z)}, 200) 
}

   } }
  const modArr = [
   "Freelook",
   "Snaplook",
   "Keystrokes",
   "Block overlay",
   "Hit color",
   "Skyblock addons",
   "Scoreboard",
   "Hypixel Mods" ,
   "CPS",
   "Armor status",
   "Coordinates",
   "Potion status",
   "Potion hud",
   "Crosshair",
   "1.7 Visuals",
   "Toggle Sneak/Sprint",
   "Ping",
   "FPS",
   "Particle multiplier",
   "Chat",
   "UHC overlay",
   "Waypoints",
   "Motion blur",
   "World edit CUI",
   "Scrollable tooltips",
   "Cooldown",
   "Direction hud",
   "Item physics",
   "Item tracker",
   "Potion effects",
   "Replay mod",
  ]
  for (let i = 0; i < modArr.length; i++) {
     var cell = document.createElement("div");
     cell.setAttribute("class","cell")
     
     cell.setAttribute("id",`cell${i}`)
     cell.innerText = modArr[i];
     document.querySelector(".dis").appendChild(cell)
     
    
     cell.addEventListener("click", () => {
      
         var cellc = document.getElementById(`cell${i}`)
         cellc.classList.toggle("cellc")
         
      }
     )
     
  }
})







