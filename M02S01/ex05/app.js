class Shape {
  constructor(
    posX,
    posY, 
    width, 
    height, 
    color, 
    borderColor
  ) {
    this.posX = posX; 
    this.posY = posY; 
    this.height = height; 
    this.width = width; 
    this.color = color; 
    this.borderColor = borderColor;

    this.shape = document.createElement('div');
    this.shape.classList.add('shape');
    this.shape.classList.add('shape--rectangle');

    this.shape.style.left = this.posX;
    this.shape.style.top = this.posY;
    this.shape.style.width = this.width;
    this.shape.style.width = this.width;
    this.shape.style.backgroundColor = this.color;
    this.shape.style.borderColor = this.bordercolor;

    document.body.appendChild(this.shape);

  }

  
  setPosX(x) {
    this.posX = x;
    // very important
    this.shape.style.left = this.posX;
  }

  setPosY(y) {
    this.posY = y;
  }

  setWidth(w) {
    this.width = w;
  }

  setHeight(h) {
    this.height = h;
  }

  setColor(c) {
    this.color = c; 
  }

  setBorderColor(bc) {
    this.borderColor = bc;
  }
}

class Rectangle extends Shape {
  
}

class Circle extends Shape {
  constructor(
    posX,
    posY, 
    radius, 
    color, 
    borderColor
  ) {
    super(
      posX,
      posY, 
      radius, 
      radius, 
      color, 
      borderColor
    );

    this.borderRadius = this.setBorderRadius(radius);
  }

  setBorderRadius(br) {

    return br;
  }
}

let rectangle = new Rectangle('10px', '10', '200px', '150px', 'red', 'blue');