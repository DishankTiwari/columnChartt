window.onload = function () {
	var paper = Raphael("container", 800, 650);
	var x = 100;
	var y = 550;
	var arr = []; 
	var c1 = null, c2 = null;

	function draw(){
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
}
draw();
	
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
		.attr("stroke", "lightred")
		.attr("stroke-dasharray", "-.").toBack();
	}
	var a = x,r;
	r = ((chart.width) / arr.length) - 20;
	for(var i = 0; i < arr.length; i++){
		a = a + 20;
		paper.rect(a, y-arr[i], r, arr[i])
		.attr("fill", "skyblue")
		.data("val",chart.list[i].value)
		.mouseover(function() {
            this.attr("fill", "yellow")
            .attr("title",this.data("val"))
        })
        .mouseout(function() {
            this.attr("fill", "skyblue")
        });
		a = a + r;
		/*c1.mouseover(function(){
        	alert();
		});
c1.node.onclick = function () {
    alert(chart.list[i].value);
};*/	paper.text(a-30, y-arr[i]+10, chart.list[i].value)
		.attr("font-size", "15")
		.attr("fill", "blue")
		label : paper.text(a-30, y+10, chart.list[i].label)
		.attr("fill", "brown")
		.attr("font-size", "15");
		//paper.text(x, chart.height-arr.length-j, );
		for(j = 0; j < 500; j+=75){
			line(x, y-j, chart.width+120, y-j);
		}
		captionName : paper.text(chart.width-140, chart.height-470, "Column Chart")
		 .attr("font-size", "50")
		 .attr("fill", "darkBlue");
		yAxisName : paper.text(chart.width-140, chart.height+90, "Monthly Division")
		 .attr("font-size", "20")
		 .attr("fill", "darkRed");
		xAxisName : paper.text(chart.width-450, chart.height-200, "Electric Expences(in Rs.)")
		 .rotate(-90,[chart.width-450],[chart.height-200])
		 .attr("font-size", "20")
		 .attr("fill", "darkRed");
	}
};
