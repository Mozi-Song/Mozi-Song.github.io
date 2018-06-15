var alerts = ["啊！你戳我！", "这位飞鱼，您好", "你谁啊？", "晚饭撸串？", "下班了？", "这里只有两条飞鱼，其他都是咸鱼，咸鱼仔，咸鱼干", "hohoho", "hahaha"];

function clicked(){
	var index = getRandomArbitrary(0,7);
	document.getElementById("demo").innerHTML = alerts[index];
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

