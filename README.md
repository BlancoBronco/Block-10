This is a CSS project creating art and fillable forms.
Includes html 
External css
formsubmitted html




  .pyramid-container {
    position: absolute;
    top: 0;
    right: 0;
    width: 33%;
    height: 100%;
    background-color: darkgreen;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }





  .pyramid {
    width: 0;
    height: 0;
    border-left: 66px solid transparent;
    border-right: 66px solid transparent;
    border-bottom: 132px solid yellow;
    position: relative;
  }


  .pyramid:before,
  .pyramid:after {
     content: "";
    position: absolute;
     left: -66px;
    width: 0;
     height: 0;
  }  

  .pyramid:before {
    border-left: 66px solid transparent;
    border-right: 66px solid gray;
    border-bottom: 132px solid transparent;
    top: -132px;
    z-index: 1;
  }

  .pyramid:after {
    border-left: 166px solid transparent;
    border-right: 166px solid darkgreen;
    border-top: 132px solid transparent;
    bottom: -132px;
    z-index: 2;
  }

  .pyramid-container-2 {
    position: absolute;
    right: 260px;
    bottom: 0px;
    width: 0;
    height: 0;
    border-top: 375px solid transparent;
    border-left: 200px solid gray;
    border-right: 200px solid transparent;
    border-bottom: -375px solid gray;
    z-index: 1;
  }
  
    .pyramid-container-3 {
      position: absolute;
      right: 700px;
      bottom: 0px;
      width: 0;
      height: 0;
      border-top: -50px solid transparent;
      border-left: -100px solid gray;
      border-right: 300px solid transparent;
      border-bottom: 375px solid gray;
      z-index: 1;
    }