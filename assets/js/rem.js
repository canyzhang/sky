
// 设置 rem
;(function(w, h, m){
	var docElem = document.documentElement,
		base = 100, design, client, callback;
	if( typeof w === 'number' && h === false ){
		design = w;
	}
	if( w === false && typeof h === 'number' ){
		design = h;
	}
	callback = function(){
		client = docElem[w ? 'clientWidth': 'clientHeight'];
		if( w && (m || !m && (m = w)) && (client > m) ){
			client = m;
		}
		docElem.style.fontSize = (base / design) * client + 'px';
	};
	callback();
	window.addEventListener('resize', callback, false);
})(960, false);


/**
 * width: number | false
 * height: number | false
 * max: <number>
 * 
 */
