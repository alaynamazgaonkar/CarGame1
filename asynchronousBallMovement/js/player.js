class Player{
   
constructor(){
   this.index=null
   this.distance=0
   this.name=null
     
   } 
  
getCount(){
  var pcount=database.ref("playerCount") 
    pcount.on("value",function(data){
    playerCount = data.val() })
   } 
  
update(count){
    database.ref("/").update({
    playerCount:count})
   } 
   
update2(){
    var playerindex="players/player"+this.index
    database.ref(playerindex).set({
    name:this.name,
    distance:this.distance})
   } 
     
static allplayers(){
    var allplayersref=database.ref("players")
    allplayersref.on("value",(data)=>{
    info = data.val()  })
   }  
  
   } 