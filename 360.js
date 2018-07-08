// var stage;

function init() {
    var canvas = document.getElementById("360viewer");
    if (!canvas || !canvas.getContext) return;

    var stage = new createjs.Stage(canvas);
    stage.enableMouseOver(true);
    stage.mouseMoveOutside = true;
    createjs.Touch.enable(stage);

    var imgList = [
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0000.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0001.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0002.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0003.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0004.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0005.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0006.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0007.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0008.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0009.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0010.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0011.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0012.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0013.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0014.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0015.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0016.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0017.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0018.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0019.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0020.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0021.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0022.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0023.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0024.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0025.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0026.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0027.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0028.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0029.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0030.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0031.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0032.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0033.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0034.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0035.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0036.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0037.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0038.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0039.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0040.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0041.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0042.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0043.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0044.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0045.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0046.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0047.jpg",
        "/local/templates/veneto_b2c_test/assets/img/360/-Klark_0048.jpg"
    ];
    var images = [],
        loaded = 0,
        currentFrame = 0,
        totalFrames = imgList.length;
    var rotate360Interval, start_x;

    var bg = new createjs.Shape();
    stage.addChild(bg);

    var bmp = new createjs.Bitmap();
    stage.addChild(bmp);

    // var myTxt = new createjs.Text("360 prototype", '13px Roboto', "#E81280");
    // myTxt.x = myTxt.y =0;
    // myTxt.alpha = 0.5;
    // stage.addChild(myTxt);
    var btnInit = document.getElementsByClassName('init-button-360')[0];
    function load360Image() {
        var img = new Image();
        img.src = imgList[loaded];
        img.onload = img360Loaded;
        images[loaded] = img;
    }

    function img360Loaded(event) {
        loaded++;
        bg.graphics.clear();
        bg.graphics.beginFill("#fff").drawRect(0, 0, stage.canvas.width * loaded / totalFrames, stage.canvas.height);
        bg.graphics.endFill();
        btnInit.addEventListener('click', start360);
        if (loaded == totalFrames){
            update360(1);
            addNavigation();
        } else load360Image();
    }
    function start360() {
        // document.body.style.cursor = 'none';

        // 360 icon
        // var iconImage = new Image();
        // iconImage.src = "http://jsrun.it/assets/y/n/D/c/ynDcT.png";
        // iconImage.onload = iconLoaded;

        // update-draw
        update360(0);

        // first rotation
        rotate360Interval = setInterval(function() {
            btnInit.style.display = 'none';
            if (currentFrame === totalFrames - 1) {
                clearInterval(rotate360Interval);
                btnInit.style.display = 'block';
            }
            update360(1);
        }, 200);
    }

    function iconLoaded(event) {
        var iconBmp = new createjs.Bitmap();
        iconBmp.image = event.target;
        iconBmp.x = 20;
        iconBmp.y = canvas.height - iconBmp.image.height - 20;
        stage.addChild(iconBmp);
    }

    function update360(dir) {
        currentFrame += dir;
        if (currentFrame < 0) currentFrame = totalFrames - 1;
        else if (currentFrame > totalFrames - 1) currentFrame = 0;
        bmp.image = images[currentFrame];
    }

    //-------------------------------
    function addNavigation() {
        stage.onMouseOver = mouseOver;
        stage.onMouseDown = mousePressed;
        document.body.style.cursor = 'auto';
    }

    function mouseOver(event) {
        document.body.style.cursor = 'pointer';
    }

    function mousePressed(event) {
        start_x = event.rawX;
        stage.onMouseMove = mouseMoved;
        stage.onMouseUp = mouseUp;

        document.body.style.cursor = 'w-resize';
    }

    function mouseMoved(event) {
        var dx = event.rawX - start_x;
        var abs_dx = Math.abs(dx);

        if (abs_dx > 5) {
            update360(dx / abs_dx);
            start_x = event.rawX;
        }
    }

    function mouseUp(event) {
        stage.onMouseMove = null;
        stage.onMouseUp = null;
        document.body.style.cursor = 'pointer';
    }

    function handleTick() {
        stage.update();
    }

    document.body.style.cursor = 'progress';
    load360Image();

    // TICKER
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(24);
    createjs.Ticker.useRAF = true;
    canvas.addEventListener('click', function() {
        clearInterval(rotate360Interval);
        update360(0);
        btnInit.style.display = 'block';
    });
}
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};
// Init
img.addEventListener('click', init, false);