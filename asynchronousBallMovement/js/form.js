class Form{

  constructor(){
   this.title=createElement("h2")
   this.input= createInput("name")
   this.button= createButton("start")
   this.text=createElement("h2")
   }
  
hide(){
   this.input.hide()
   this.button.hide()
   this.text.hide()
   }
   
  display(){
    
    this.title.html("Car Racing Game")
    this.title.position(130,20)
    
    this.input.position(130,100)
    
    this.button.position(150,150)
    
    this.button.mousePressed(()=>{
    this.input.hide()
    this.button.hide()
     
    player.name=this.input.value()
    playerCount=playerCount+1;
    player.index=playerCount
    player.update2()
    player.update(playerCount)
    
    this.text.html("Hello"+player.name)
    this.text.position(200,50)
    })
   }
   }