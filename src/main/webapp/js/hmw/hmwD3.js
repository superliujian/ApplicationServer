hmw.d3 = {};

/**
 * Create Bar Chart
 * parameter : div id, xyAxis(2 dim Array), color (1 dim Array), range(1 dim Array)
 */
hmw.d3.barchart = function(divId, xyData, color, range){ 
	var barHeight = 17;
	var minusWidth=15;
	$('#'+divId).empty();
	var div = d3.select('#'+divId).append("svg")
				.attr("id","barChart")
				.attr("width",$('#'+divId).width()) 
				.attr("height",barHeight*xyData[0].length);
//	console.log(div);	console.log(xyData[0]);	console.log(color);	console.log(range);
	var maxData = d3.max(xyData[0]);  
	var x = d3.scale.linear()
			.domain([0, maxData])
			.range([0,$('#'+divId).width()]); 
	div.selectAll('rect')
				.data(xyData[0])
				.enter()
					.append('rect')
					.attr('x',0)
					.attr('y',function(d,i){
						return i*barHeight;
					})
					.attr('width',function(d){
						return x(d)-minusWidth;
					})
					.attr('height',barHeight-2)
					.attr('fill',function(d,i){
						for(var z=0; z<range.length; z++) 
							if(xyData[0][i] <=range[z]){ 
								return color[z];
							}
						return color[color.length];
					});
	div.selectAll('g')
				.data(xyData[1])
				.enter()
				.append('text')
					.attr('x',0)
					.attr('y',function(d,i){
						return i*barHeight+barHeight-5;
					})
					//.attr('dy','.15em')
					.attr('font-weight','bold')
					.attr('font-size','0.2em')
					.text(function(d){ 
						return d;
					});
	div.selectAll('g')
					.data(xyData[0])
					.enter()
					.append('text')
						.attr('x',function(d){
							return x(d)-minusWidth;
						})
						.attr('y',function(d,i){
							return i*barHeight+12;
						})
						.attr('dy','.15em')
						.attr('fill','black')
						.attr('font-size','0.1em')
						.attr('font-weight','bold')
						.text(function(d){
							return d;
						});
};