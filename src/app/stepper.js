
  function anyThing(destroyFeedback) {
    setTimeout(function(){ destroyFeedback(true); }, 1000);
  }
  
  function noThing(destroyFeedback) {
    setTimeout(function(){ destroyFeedback(true); }, 1000);
  }

  var stepperDiv = document.querySelector('.stepper');
  console.log(stepperDiv);
  var stepper = new MStepper(stepperDiv);
  