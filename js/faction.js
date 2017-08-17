

window.onload = function() {
				var kj = document.getElementById('kj'); //通过ID获取外面的大盒子
				var btn = kj.getElementsByTagName('li'); //获取kj里面所有的li
				var divs = kj.getElementsByTagName('div'); //获取kj里所有的div
				var box = divs[0]; //获取kj里第一个div
				var boxDiv = box.getElementsByTagName('div'); //获取kj里第一个div里面所有的div
//				for(var i = 0; i < btn.length; i++) {
//					btn[i].index = i;
//					btn[i].onmouseover = function() {
//						for(var i = 0; i < btn.length; i++) {
//							btn[i].className = "";
//							boxDiv[i].className = "";
//						}
//						this.className = "current";
//						boxDiv[this.index].className = "current";
//					}
//				}
				for(var i = 0; i < btn.length; i++ ){
					btn[i].index = i;
					btn[i].onmouseover = function(){
						for(var j = 0; j < btn.length; j++){
							if(btn[j]){
								btn[j].className = "";
							}
							if(boxDiv[j]){
								boxDiv[j].className = "";
							}
						}
						this.className = "current";
						if(boxDiv[this.index] ){
							boxDiv[this.index].className = "current";
						}
					}
				}
			}
