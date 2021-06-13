var Model=ml5.imageClassifier('MobileNet',modelLoaded);
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
Webcam.attach( '#webcam' );
function modelLoaded(){
    console.log("Model is loaded");
}
function capture(){
    Webcam.snap( function(data_uri) {
        document.getElementById('snapshot').innerHTML = 
        '<img id="capt-img" src="'+data_uri+'"/>';
        } );
}
function identify(){
    var img=document.getElementById('capt-img');
    Model.classify(img,function(err,res){
        if(err){
            console.error(err);
        }
        else{
            console.log(res);
            var output=res[0].label + "," + res[1].label + "," + res[2].label;
            document.getElementById('output').innerHTML=output;
        }
    })
}