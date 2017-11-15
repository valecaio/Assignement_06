var myData;
var people = [];
var sfondo;
var planet;

function preload() {
    myData = loadJSON('assets/peopleinspace.json');
    sfondo = loadImage('assets/sky.jpg');
    planet = loadImage('assets/grass.png');
}



function setup() {
  createCanvas(500, 500);
   
  
  //print(myData);
  for(var i = 0; i < myData.people.length; i++) {
    var astroData = myData.people[i];
    print(astroData);
    var newAstronaut = new Astronaut(astroData.launchdate, astroData.name, astroData.title);
    people.push(newAstronaut);
  }
}


function draw() {
     
  background(sfondo);
    
	for(var i = 0; i < people.length; i++) {
	  var astronaut = people[i];
	  astronaut.move();
	  astronaut.display();
	}

image(planet, 0,0,500,500);
    
}

function Astronaut(launchDate, name, title) {
    
    this.name = name;
    this.title = title;
    
    //trasformazione in milisecondi
    this.launchDate = Date.parse(launchDate);
   
    var timeInSpace = Date.now() - this.launchDate;
    
    this.radius = floor(timeInSpace / (1000 * 60 * 60 * 24)) / 5;
    
    
    this.x = random(this.radius, width-this.radius);
    this.y = random(this.radius, height-this.radius);
    
    this.incrementX = 1;
    this.incrementY = 1;
    
    this.display = function() {
        
        if(this.title == 'commander') {
          fill(255,0,0);
            noStroke();  
        } else {
          fill(255);
             noStroke();  
        }
        ellipse(this.x, this.y, this.radius/4); 
        

        pop();
        
        if(keyIsPressed) {
        
            textAlign(CENTER);
            text(this.name, this.x, this.y + this.radius +20);
            textFont('Work Sans');
             fill(255);
             
           } 
        push();

    }
 

    this.move = function() {
        
        this.x += this.incrementX;
        this.y += this.incrementY;
        
        if (this.x > width - this.radius || this.x < this.radius){
            this.incrementX *= -1
            print(this.x);
            print(this.radius);
        }

        if (this.y > height - this.radius || this.y < this.radius){
            this.incrementY *= -1
            print(this.y);
            print(this.radius);
        }
    }   
    
   
    
   
   
    
    
    
    
    
    
    
    
    
    
    
    
    
}