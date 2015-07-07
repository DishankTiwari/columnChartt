var chart = {
	width : 500,
	height : 500,
		list : [
		{
			"label":"Jan",
			"value":"500"
		},
		{
			"label":"Feb",
			"value":"200"
		},
		{
			"label":"March",
			"value":"400"
		},
		{
			"label":"April",
			"value":"150"
		},
		{
			"label":"May",
			"value":"300"
		},
		{
			"label":"June",
			"value":"400"
		}
		]
	};
window.onload = function () {
	var paper = Raphael("container", 1000, 1000);
	var x = 100;
	var y = 550;
	var arr = []; 
	var rect = paper.rect(100, 50, (chart.width)+20, chart.height)
	.attr("stroke", "red")
	.attr("stroke-width", "3")
	//debugger;
	for(i in chart){
		//console.log(i);
		if(i==="list"){
			for(var j = 0; j < chart.list.length; j++){
				arr[j] = chart.list[j].value;
			}	

		}
	}
	var max = 0;
	for (var j = 0; j < arr.length; j++) {
	if(arr[j] > max)
	max = arr[j];
	}
	//console.log(max);
	if(max >= chart.height){
		var c = max/chart.height;
		c = c + 0.2;
		for(j = 0;j < arr.length; j++){
			arr[j] = arr[j]/c;
		}
	}
	function line(startX,startY,endX,endY){
		return paper.path("M"+startX+" "+startY+"L"+endX+" "+endY)
		.attr("stroke-dasharray", "-.").toBack();
	}
	var a = x,r;
	r = ((chart.width) / arr.length) - 20;
	for(var i = 0; i < arr.length; i++){
		a = a + 20;
		paper.rect(a, y-arr[i], r, arr[i])
		.attr("fill", "blue");
		a = a + r;
		paper.text(a-30, y+10, chart.list[i].label)
		.attr("fill", "brown")
		.attr("font-size", "15");
		//paper.text(x, chart.height-arr.length-j, );
		for(j = 0; j < 450; j+=50){
			line(x, chart.height-arr.length-j, chart.width+120, chart.height-arr.length-j);
		}
		paper.text(chart.width-140, chart.height-470, "Column Chart")
		 .attr("font-size", "50")
		 .attr("fill", "darkBlue");
		paper.text(chart.width-140, chart.height+90, "Monthly Division")
		 .attr("font-size", "20")
		 .attr("fill", "darkRed");
		paper.text(chart.width-450, chart.height-200, "Electric Expences")
		 .rotate(-90,[chart.width-450],[chart.height-200])
		 .attr("font-size", "20")
		 .attr("fill", "darkRed");
	}
};