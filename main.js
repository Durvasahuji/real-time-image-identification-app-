function setup() 
{
   canvas = creatCanvas(300.300);
   canvas.center();
   video = creatCapture(VIDEO);
   video.hide();
   classifier = ml5.imageClassifier('MobileNet',modelLoaded);   
}

function draw()
{
    image(video,0,0,300,300);
    classifier.classify(vide0, gotResult)
}

function modelLoaded
{
    console.log('Model Loaded!');
}

function gotResult(error, results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result object").innerHTML = results[0].label;
        document.getElementById("result accuracy").innerHtml = results[0].confidence.tofixed(3);
    }
}
