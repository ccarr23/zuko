//variable object for the mouse over effect.
let circle = {
  x: 300,//position on the x axis.
  y: 500,//position on the y axis.
  diam: 100,//the diameter.
}

let circ = [];// array for shot

function setup() {
  createCanvas(600,600);
  for (let i = 0; i < 1; i++) {
   circ[i] = new CircShoot(); //constructor created to animate array
    //movement
     
 }
}

function draw() {
  background(0);//no background
  stroke(255);//outline of the circle.
  strokeWeight(4);//boldness of the outline of the circle.
  noFill();//no fill
  
  //"if" is setting the condition of the boolean animation in the desired object and position.
  //telling the function when the mouse meets the set condition on each axis the effect is activated.
  if (mouseX > 250 && mouseX < 350 && mouseY > 400 && mouseY < 550) {
    if (mouseIsPressed) {
      background(200, 0, 0);//when the mouse is pressed in the defined area, 
      //the background will change.
      for (let i = 0; i < circ.length; i++) {
        circ[i].show();
      }
    } 
    
    fill(255, 255, 0);//when the mouse is positioned in the conditioned area
    //the circle will fill, highlighting itself.
  }
  
  ellipse(circle.x, circle.y, circle.diam);//calling on our defined object.
   
       //the condition that allows our array of circles to shoot upward.
       if (mouseIsPressed) {
           for (let i = 0; i < circ.length; i++) {
        circ[i].show();//displaying the array
        circ[i].move();//shot animation of the array.
      }
    }
  }

