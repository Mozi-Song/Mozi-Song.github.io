var alerts = ["啊！你戳我！", "这位飞鱼，您好", "你谁啊？", "晚饭撸串？", "下班了？", "这里只有两条飞鱼，其他都是咸鱼，咸鱼仔，咸鱼干", "hohoho", "hahaha", "科技始终来源于人性，Ken Thompson写出Unix内核是因为他想玩\"太空旅游\"", "优秀的人做一件事，即使需要排山倒海也会做到", "开源的理念激励人们更好地写出自己的代码，且能得到其他人的指点"];

var flyingRecord = "查看我的<a href=\"https://www.cnblogs.com/mozi-song/p/9188339.html\">飞行记录<a/>";
function clicked(){
	var index = getRandomArbitrary(0,alerts.length-1);
	document.getElementById("demo").innerHTML = alerts[index];
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clickedP(){
	window.location.href = "html/portal.html";
	document.getElementById("demo").innerHTML = flyingRecord;
}

