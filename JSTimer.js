function Timer(element){
	var interval;
	var milliseconds = 0;
	var self = this;

	function printValue(){
		var seconds = Math.round(milliseconds/10)/100;
		$(element).empty();
		$(element).text(seconds);
	}

	this.start = function(seconds, countdown){
		if(interval){//if an interval exists clear it first
			clearInterval(interval);
		}
		if(seconds) {//if seconds are passed in reset the milliseconds
			milliseconds = milliseconds + (seconds * 1000);
		}
		interval = setInterval(function(){
			if(countdown) {
				if (milliseconds >= 0) {
					milliseconds -= 10;
					printValue();
				} else {
					self.stop();
				}
			} else {
				milliseconds += 10;
				printValue();
			}
		}, 10);
	};

	this.stop = function(){
		clearInterval(interval);
	};

	this.reset = function(){
		milliseconds = 0;
		printValue();
	};

	this.getValue = function(){
		return milliseconds/1000;
	};
}
