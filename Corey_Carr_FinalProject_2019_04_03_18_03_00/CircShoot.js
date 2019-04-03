//Constructor for the array and shot animaton.
function CircShoot() {
  this.x = 300,
  this.y = 599,
  this.diam = 40,//size of the array.
  this.speed = 20,//pixel speed of the animation.
  //function created to show array in a row of 5.
  this.show = function() {
    noStroke();
    fill(random(255), random(255), random(255));//for Sci-fi like effect
    //each array positioned for row.
    ellipse(this.x, this.y, this.diam);
    ellipse(200, this.y, this.diam);
    ellipse(100, this.y, this.diam);
    ellipse(400, this.y, this.diam);
    ellipse(500, this.y, this.diam);
  },
  
  //function created for array movement.
  this.move = function() {
    this.y = this.y - this.speed; //creates animation that allows arrays
    //to shoot upward.
   } 
 }

    
    