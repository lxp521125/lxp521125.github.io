﻿function play68_init() {
	updateShare(0);
}

function updateShare(bestScore) {
	imgUrl = 'http://weixin.aitboy.cn/game/more/games/heibai/logo.png';
	var domains = ['http://weixin.aitboy.cn/game/more','http://weixin.aitboy.cn/game/more','http://weixin.aitboy.cn/game/more','http://weixin.aitboy.cn/game/more'];
	var domain = domains[new Date().getTime()%4];
	lineLink = 'http://weixin.aitboy.cn/game/more/games/heibai/';
	descContent = "史上导致最多手指和眼珠抽筋的游戏（别踩白块儿）！";
	updateShareScore(bestScore);
	appid = '';
}

function updateShareScore(bestScore) {
	if(bestScore > 0) {
		shareTitle = "我在《别踩白块儿》成绩" + bestScore + "，手指抽筋啦！";
	}
	else{
		shareTitle = "史上导致最多手指和眼珠抽筋的游戏（别踩白块儿）！";
	}
}