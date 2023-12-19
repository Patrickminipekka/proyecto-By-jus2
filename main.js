function startClassification()
 { 
    navigator.mediaDevices.getUserMedia({ audio: true});
     classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/oY9h3yP6J/model.json', modelReady);
 }