//creating 2 functions of our own- isTouching, bounceOff
//the names of the functions can be changed
//the goal is to create libraries of new instructions on our own
//these instructions can be then used by us in later programmes by just uploading the library
//isTouching and bounceOff created here are not defined orginally defined in the visual code
function isTouching(object1, object2){

    if((object1.x-object2.x<object1.width/2+object2.width/2)&&
     (object2.x-object1.x<object1.width/2+object2.width/2) &&
      (object1.y-object2.y<object1.height/2+object2.height/2)&&
       (object2.y-object1.y<object1.height/2+object2.height/2)){
       return true;
    }
    else {
      return false;
    }
  }
  
  function bounceOff(object1, object2){
  
    if((object1.x-object2.x<object1.width/2+object2.width/2)&&
    (object2.x-object1.x<object1.width/2+object2.width/2)){
      object1.velocityX=object1.velocityX*(-1);
      object2.velocityX=object2.velocityX*(-1);
    }
  }