class Game{
  
constructor(){}
  
getState(){
   var gameref=database.ref("gameState") 
   gameref.on("value",function(data){
   gameState = data.val() })  
   }
  
update(state){
   database.ref("/").update({
   gameState:state})
   } 
   
async start(){
   if(gameState===0){
    player = new Player()
    var playercountref = await database.ref("playerCount").once("value")
    if(playercountref.exists){
    playerCount=playercountref.val()  
    player.getCount()}
    form = new Form()  
    form.display() 
   }
   }

play(){
   form.hide()
  
   text("Game Start",500,500)
   Player.allplayers()
   for(var plr in info){
   i=i+50;
   text(info[plr].name+":"+info[plr].distance,500,i )}
   }
   
  }  