let mobilenet;
let video;
let sentenceA;
let sentenceB;


function modelReady() {
  console.log('Model Ready Now!!!!!!!!');
  classifyVideo();
}


function setup() {
  createCanvas(600,480);
  // Create a camera input
  video = createCapture(VIDEO);
  video.hide();
  button = createButton("New Poem")
  modelReadyNow = button.mousePressed(modelReady);
  // Initialize the Image Classifier method with MobileNet and the video as the second argument
  mobilenet = ml5.imageClassifier('MobileNet', video, modelReadyNow);
  sentenceA = createP('I see my love / I fly next to her / I present her with my gift / A small piece of solidified time');
  sentenceB = createP('lovely markings are carved into time / As soft to the touch as the mud in shallow sea / she covers her body with time / and pulls me along to fly to the edge of existence ');
  sentenceC = createP('This is a spiritual fight / In our eyes, the stars appears as ghosts / In the eyes of the stars, we appears as ghosts');

}

function draw(){
  image(video,0,0,width,height)
}


// Get a prediction for the current video frame
function classifyVideo() {
  mobilenet.classify(gotResult);
}

function gotResult(err, result) {

  sentenceA.html('I see my love / I fly next to her / I present her with my gift / A small piece of  ' + result[0].label );

  sentenceB.html('lovely markings are carved into time / As soft to the touch as the mud in shallow sea / she covers her body with time / and pulls me along to fly to the edge of ' + result[1].label );

  sentenceC.html('This is a spiritual fight / In our eyes, the stars appears as ' +result[2].label +'s'+' / In the eyes of the stars, we appears as ' + result[2].label+'s');

 }