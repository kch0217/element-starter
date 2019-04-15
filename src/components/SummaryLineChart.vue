<template>
	<div>



	</div>

</template>

<script>
	import * as d3 from "d3"

	export default {
		name: 'Summarychart',
		props: ['chosen'],
		data(){
			return {
				xid: 'xAxisG',
				yid: 'yAxisG',
				all_data:[],
				xExtent: [],
				yValues: [],
				yMin : 0,
				yMax:0
			}
		},
		mounted() {
			var num = function(max) {
				return Math.abs(Math.floor(Math.random() * max) + (max - 200));
			}
			var data = [];
			d3.timeDay.range(new Date(2019, 0, 1), new Date(), 1).forEach(function(date) {
				var i = 0;
				var obj = {date: date}
				obj["edX"] = num(10000)
				obj["Moodle"] = num(5000)
				obj["Trumptech"] = num(1000)
				data.push(obj)
			});



			var svg = d3.select(this.$el)
			.append('svg')
			.attr('width', "100%")
			.attr('height', "100%")
			.attr('viewBox', "0 0 1100 500")
			.attr('preserveAspectRatio', "xMidYMid meet")


			var xExtent = d3.extent(data, function(d, i) { return d.date; })

			var yValues = [];

			data.forEach(function(d) {
				for (var key in d) {
					if (key !== 'date') {
						yValues.push(d[key]);
					}
				}	
			});


			var yMin = d3.min(yValues, function(d, i) { return d; });
			var yMax = d3.max(yValues, function(d, i) { return d; });

			var xOrigScale = d3.scaleTime()
			.domain([ new Date(xExtent[0]), new Date(xExtent[1]) ])
			.range([80,1000]);

			var xScale = xOrigScale.copy();

			var yScale = d3.scaleLinear()
			.domain([yMin, yMax])
			.range([440,2]);

			var xAxis = d3.axisBottom(xScale).ticks(6);
			var yAxis = d3.axisLeft(yScale);

			var xAxisG = svg.append('g')
			.attr('id', 'xAxisG')
			.attr('transform', 'translate(0,440)')
			.call(xAxis);

			var yAxisG = svg.append('g')
			.attr('id', 'yAxisG')
			.attr('transform', 'translate(80,0)')
			.call(yAxis);

			svg.append("text")
	        .attr("x", (1100 / 2))             
	        .attr("y", 480 )
	        .attr("text-anchor", "middle")  
	        .style("font-size", "16px") 
	        .style("text-decoration", "underline")  
	        .text("Daily xAPI Logs Received");


        //  var color = d3.scaleOrdinal()
        // .range(['#40c9c6', '#FF9C42', '#FFF06A']);
	        var color = {"edX": '#40c9c6', "Moodle":'#36a3f7', "Trumptech":'#f4516c'}

	        var linesG = svg.append('g');

	        var legend = svg.append('g')
	        .attr('id', 'legend')
	        .attr('transform', 'translate(600, 480)')
	        .style('opacity', '1');


	        var dateText = legend.append('text')
	        .attr('id', 'date-text')
	        .attr('class', 'legend-text')
	        .attr('x', 0)
	        .attr('y', 20);

	        var lines = {};
	        var paths = {};

	        var index = Object.keys(data[0]).length - 1;

	        for (var key in data[0]) {

	        	if (key !== 'date') {

	        		var line = d3.line()
	        		.x(function(d) {
	        			return xScale(new Date(d.date));
	        		})
	        		.y(function(d) {
	        			return yScale(d[key]);
	        		})
	        		.curve(d3.curveCatmullRom.alpha(0.5));

	        		lines[key] = line;


	        		var lineOpacity = "0.45";
	        		var lineOpacityHover = "0.85";
	        		var otherLinesOpacityHover = "0.1";
	        		var lineStroke = "1.5px";
	        		var lineStrokeHover = "3px";

	        		var circleOpacity = '0.85';
	        		var circleOpacityOnLineHover = "0.25"
	        		var circleRadius = 3;
	        		var circleRadiusHover = 6;

	        		var path = linesG.append('path')
	        		.attr('class', 'line line-'+key) 
	        		.attr('d', line(data))
	        		.attr('id', key)
	        		.attr('fill', 'none')
	        		.style('opacity', lineOpacity)
	        		.attr('stroke', function(d) { return color[key]; })
	        		.attr('stroke-width', 2).on("mouseover", function(d) {
	        			d3.selectAll('.line')
	        			.style('opacity', otherLinesOpacityHover);
	        			d3.selectAll('.circle')
	        			.style('opacity', circleOpacityOnLineHover);
	        			d3.select(this)
	        			.style('opacity', lineOpacityHover)
	        			.style("stroke-width", lineStrokeHover)
	        			.style("cursor", "pointer");
	        		})
	        		.on("mouseout", function(d) {
	        			d3.selectAll(".line")
	        			.style('opacity', lineOpacity);
	        			d3.selectAll('.circle')
	        			.style('opacity', circleOpacity);
	        			d3.select(this)
	        			.style("stroke-width", lineStroke)
	        			.style("cursor", "none");
	        		});;




        var totalLength = path.node().getTotalLength();



        path
          .attr('stroke-dasharray', totalLength + ' ' + totalLength)
          .attr('stroke-dashoffset', totalLength)
          .transition()
          .duration(2000)
            .ease(d3.easeCubicInOut)
          .attr('stroke-dashoffset', 0);

        paths[key] = path;


        legend.append("circle").attr("cx",
        	function(){
        		return index*100
        	})
        .attr("cy",0).attr("r", 6).style("fill", color[key])


        legend.append('text')
          .attr('id', 'text' + key)
          .attr('class', 'legend-text')
          .attr('fill', 'black')
          .attr('x', function() {
            return 80 * index+index*index*6+25;
          })
          .attr('y', 5).text(key);

        index--;
    }
}

    //     var clipPath = svg.append('clipPath')
    //     .attr('id', 'clip')
    //     .append('rect')
    //     .attr('x', 40)
    //     .attr('y', 0)
    //     .attr('height', 240)
    //     .attr('width', 500);

    // var focus = svg.append('g')
    //   .attr('class', 'focus')
    //   .style('display', 'none');

    // focus.append('line')
    //   .attr('id', 'dotted-line')
    //   .attr('x1', 0)
    //   .attr('y1', 0)
    //   .attr('x2', 0)
    //   .attr('y2', 220)
    //   .attr('stroke', 'black')
    //   .attr('stroke-dasharray', '1, 2');


    // svg.append("rect")
    //   .attr("class", "overlay")
    //   .attr("width", 1000)
    //   .attr("height", 600)
    //   .on("mouseout", function() { 
    //     focus.style('display', 'none');
    //     legend
    //       .transition()
    //       .duration(100)
    //       .style('opacity', '0');
    //   })
    //   .style('cursor', 'move')
    //   .attr('clip-path', 'url(#clip)');


    // var zoom = d3.zoom()
    //     .scaleExtent([1, 10])
    //     .on('zoom', zoomed);

    // svg.call(zoom);

    // function zoomed() {
    //   console.log('zoomed');

    //   xScale = d3.event.transform.rescaleX(xOrigScale);

    //   xAxisG.call(xAxis.scale(d3.event.transform.rescaleX(xOrigScale)));

    //   for (key in data[0]) {
    //       if (key !== 'date') {

    //         line = lines[key];
    //         path = paths[key];

    //         totalLength = path.node().getTotalLength();

    //         path
    //           .attr('stroke-dasharray', totalLength + ' ' + totalLength)
    //           .attr('stroke-dashoffset', totalLength)
    //           .attr('stroke-dashoffset', 0);

    //         path.attr('d', line(data));
    //         path.attr('clip-path', 'url(#clip)');

    //       }
    //     }

    // }

    // var bisectDate = d3.bisector(function(d) { return new Date(d.date); }).left;

    // function mousemove() {
    //   var x = d3.mouse(this)[0];

    //   var x0 = xScale.invert(d3.mouse(this)[0]),
    //     i = bisectDate(data, x0, 1),
    //     d0 = data[i - 1],
    //     d1 = data[i],
    //     d = x0 - d0.date > d1.date - x0 ? d1 : d0;

    //   focus.style('display', 'block');
    //   dateText.style('display', 'block');
    //   legend
    //     .transition()
    //     .duration(90)
    //     .style('opacity', '1');

    //   focus.attr("transform", "translate(" + xScale( new Date(d.date)) + ",0)");

    //   var date = new Date(d.date);
    //   date = date.toUTCString().split(' ');
    //   date = date[0] + ' ' + date[1] + ' ' + date[2] + ' ' + date[3];

    //   dateText.text(date);

    //   for (key in data[0]) {
    //       if (key !== 'date') {
    //         svg.select('#text' + key)
    //           .text(Number(d[key]).toLocaleString());

    //     }
    //   }
    // }





	},
	watch:{
		chosen:function(newVal, oldVal) { // watch it
          // console.log('Prop changed: ', newVal, ' | was: ', oldVal)
          	        		var lineOpacity = "0.45";
	        		var lineOpacityHover = "0.85";
	        		var otherLinesOpacityHover = "0.1";
	        		var lineStroke = "1.5px";
	        		var lineStrokeHover = "3px";
	        		d3.selectAll('.line')
	        			.style('opacity', otherLinesOpacityHover);
          if (newVal=="edX"){
          	d3.select(".line-edX")
	        			.style('opacity', lineOpacityHover)
	        			.style("stroke-width", lineStrokeHover)
	        			.style("cursor", "pointer");
          }else           if (newVal=="Moodle"){
          	d3.select(".line-Moodle")
	        			.style('opacity', lineOpacityHover)
	        			.style("stroke-width", lineStrokeHover)
	        			.style("cursor", "pointer");
        } else           if (newVal=="Trumptech"){
          	d3.select(".line-Trumptech")
	        			.style('opacity', lineOpacityHover)
	        			.style("stroke-width", lineStrokeHover)
	        			.style("cursor", "pointer");
	        		}
	        		else {
	        				        			d3.selectAll(".line")
	        			.style('opacity', lineOpacity);
	        		}

    	}
			
	},
	methods: {



	},
}


</script>


<style lang="sass" scoped>




</style>