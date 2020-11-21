function bouncing(bounce1, bounce2) {
    if (bounce1.x - bounce2.x < bounce2.width/2 + bounce1.width/2
      && bounce2.x - bounce1.x < bounce2.width/2 + bounce1.width/2) {
    bounce1.velocityX = bounce1.velocityX * (-1);
    bounce2.velocityX = bounce2.velocityX * (-1);
  }
  if (bounce1.y - bounce2.y < bounce2.height/2 + bounce1.height/2
    && bounce2.y - bounce1.y < bounce2.height/2 + bounce1.height/2){
    bounce1.velocityY = bounce1.velocityY * (-1);
    bounce2.velocityY = bounce2.velocityY * (-1);
  }
  }