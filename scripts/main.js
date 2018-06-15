var alerts = ["啊！你戳我！"， "这位飞鱼，您好"， "你谁啊？", "晚饭撸串？", "下班了？", "这里只有两条飞鱼，其他都是咸鱼，咸鱼仔，咸鱼干", "hohoho", "hahaha"]

document.querySelector('button').click = function(){
	var random = getRandomArbitrary(0, 7)
	alert("jibu");
}
alert("jibu");
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}