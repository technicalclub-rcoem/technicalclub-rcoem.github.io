Stage(function(stage){

	stage.viewbox(50,50).pin('handle',-0.5);

	
	createTileGrid = function(obj){
		var space = Stage.image('bg').appendTo(stage).pin('handle',0.5);
		space.pin({
			offsetX : obj.i *10,
			offsetY : obj.j *10
		});

		var tile = Stage.image('-').appendTo(stage).pin('handle',0.5);
		tile.pin({
			offsetX : obj.i *10,
			offsetY : obj.j *10
		});

		tile.on('click',function(){ 		// Mouse-Click : stage
			console.log("MouseClicked");
			this.image('x');
		});
	}

	for(var i=-1;i<=1;i++){
		for(var j=-1;j<=1;j++){
			createTileGrid({
				i:i,
				j:j
			});
		}
	}
});

Stage({
	textures : {
		'bg' : Stage.canvas(function(ctx){
			ratio = 10 ; 
			this.size(10,10,ratio);
			ctx.scale(ratio,ratio);

			ctx.moveTo(0,0);
			ctx.lineTo(0,10);
			ctx.moveTo(0,10);
			ctx.lineTo(10,10);
			ctx.moveTo(10,10);
			ctx.lineTo(10,0);
			ctx.moveTo(10,0);
			ctx.lineTo(0,0);

			ctx.lineWidth = 1;
			ctx.stroke();
		}),
		'x' : Stage.canvas(function(ctx){
			ratio = 10 ; 
			this.size(10,10,ratio);
			ctx.scale(ratio,ratio);

			ctx.moveTo(0,0);
			ctx.lineTo(10,10);
			ctx.moveTo(10,0);
			ctx.lineTo(0,10);

			ctx.lineWidth = 1;
			ctx.stroke();
		}),
		'-' : Stage.canvas(function(ctx){
			ratio =10;
			this.size(10,10);
			ctx.scale(ratio,ratio);
		})
	}
});
