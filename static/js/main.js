$(function(){
	var lotteryNum = 0;
    var startTimeout = 100;
		scrollTimeout = null;
	var _circleTimes = 3,
		_breakTime = 10,
		_allNum = 5;
	
	function lottery(id, callback){
		var _stepNum = _allNum * _circleTimes + id;
		//    ¼ÓÃÉ²ã
		$('.J_cards .card-box').removeClass('card-normal').removeClass('card-checked').addClass('card-mask');
		$('.card-box' + (lotteryNum % _allNum)).removeClass('card-mask').addClass('card-checked');
		scrollTimeout = setTimeout(function(){
			lottery(id, callback);
		}, startTimeout+_breakTime);
		lotteryNum++;
		startTimeout+=_breakTime;
		if(lotteryNum >=_stepNum){
			clearTimeout(scrollTimeout);
			lotteryNum = 0;
			startTimeout = 100;
			if(callback){
				callback();
			}
		}
	}
	
	$('.J_getGf').on('click', getGift);
	function getGift(){
		//    Ä£Äâ³é½±
		var giftId = Math.floor(Math.random() * 5);
		lottery(giftId, function(){});
	}
})