
  function anyThing(destroyFeedback) {
    setTimeout(function(){ destroyFeedback(true); }, 300);
  }
  
  function noThing(destroyFeedback) {
    setTimeout(function(){ destroyFeedback(true); }, 300);
  }

  var stepperDiv = document.querySelector('.stepper');
  console.log(stepperDiv);
  var stepper = new MStepper(stepperDiv);
  