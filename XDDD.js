		var R = 10;
		var counting = 0;
		var X = [0,81,2,29,9,100,189,2,3,12,3];
		var Y = [12,3,1,23,534,46,2,36,2,67];
		var Vx = [1,2,2,2,1,2,2,2,1,1,1];
		var Vy = [2,1,2,1,2,2,1,1,2,2,2];
		var n = 40;
		var color = ['#f66','#80bfff','#ffff99','black'];
		for(var i=0;i<n;i++){
			X[i] = Math.floor(Math.random()*400+90);
			Y[i] = Math.floor(Math.random()*1300+200);
			Vx[i] = Math.floor(Math.random()*5-2); 
			Vy[i] = Math.floor(Math.random()*5-2);
			if(Vx[i]==0) Vx[i]=1;
			if(Vy[i]==0) Vy[i]=1;

		}
		var canvas = document.getElementById('OAO');
		var ctx = canvas.getContext('2d');
		var red = Math.floor(Math.random()*n+0);
		function draw_point(){
			for(var i=0;i<n;i++){
		    	for(var j=0;j<n;j++){
		    		if( (X[i]-X[j])*(X[i]-X[j]) + (Y[i]-Y[j])*(Y[i]-Y[j]) >25000) continue;
		    		if( (X[i]-X[(j+1)%n])*(X[i]-X[(j+1)%n]) + (Y[i]-Y[(j+1)%n])*(Y[i]-Y[(j+1)%n]) >25000) continue;
		    		if( (X[j]-X[(j+1)%n])*(X[j]-X[(j+1)%n]) + (Y[j]-Y[(j+1)%n])*(Y[j]-Y[(j+1)%n]) >25000) continue;
		    		ctx.beginPath();
		    		ctx.moveTo(X[i],Y[i]);
		    		ctx.lineTo(X[j],Y[j]);
		    		ctx.lineTo(X[(j+1)%n],Y[(j+1)%n]);
		    		ctx.fillStyle = "pink";
		    		ctx.globalAlpha=0.5;
		    		ctx.fill();
		    		ctx.closePath();
		    	}			
			}
			for(var i=0;i<n;i++){
				for(var j=0;j<n;j++){
		    		if((X[i]-X[j])*(X[i]-X[j])+(Y[i]-Y[j])*(Y[i]-Y[j])>25000) continue;
		    		ctx.beginPath();
		    		ctx.moveTo(X[i],Y[i]);
		    		ctx.lineTo(X[j],Y[j]);
		    		ctx.strokeStyle = "white";
		    		ctx.globalAlpha=1;
		    		ctx.stroke();
		    		ctx.closePath();
		    	}
		    }

			/*for(var a=0;a<n;a++){
		    	colortx.beginPath();
		    	ctx.globalAlpha=1;
		    	ctx.arc(X[a],Y[a],R,0,Math.PI*2);
		    	var temp = color[a] ;
		    	ctx.fillStyle = temp;
		    	ctx.fill();
		    	ctx.fillStyle = black;
		    	ctx.stroke();
		    	ctx.closePath();
		    }
		    for(var a=0;a<n;a++){
		    	ctx.beginPath();
		    	ctx.globalAlpha=1;
		    	ctx.arc(X[a],Y[a],R,0,Math.PI*2);
		    	var temp = color[a] ;
		    	ctx.fillStyle = temp;
		    	ctx.fill();
		    	ctx.fillStyle = black;
		    	ctx.stroke();
		    	ctx.closePath();
		    }*/
		    for(var a=0;a<n;a++){
		    	//if((X[a]>=100&&X[a]<=400)&&(Y[a]>=100&&Y[a]<=200)) {Vx[a] = 0;Vy[a] = 0;}
		    	/*if((X[a]-250)*(X[a]-250)+(Y[a]-250)*(Y[a]-250)<=(200*200)) {
		    		var temp;
		   			for(var j=0;j<n;j++){
			    		if((X[a]-X[j])*(X[a]-X[j])+(Y[a]-Y[j])*(Y[a]-Y[j])<=2000 && Vx[j]==0) 
			    			{
			    				temp = false;
			    				break;
			    			}
			    		temp=true;
				    }
		    		if(temp){Vx[a] = 0;Vy[a] = 0;}
		    	}*/
		    	//if((X[a]-325)*(X[a]-325)+(Y[a]-100)*(Y[a]-100)<=(75*75)) {Vx[a] = 0;Vy[a] = 0;}
		    	//if((X[a]<=400||X[a]>=100)&&((X[a]-250)*(X[a]-250)+(Y[a]-250)*(Y[a]-250)<=(150*150*2))) {Vx[a] = 0;Vy[a] = 0;}
		    	X[a]+=Vx[a];
		    	Y[a]+=Vy[a];
		    	if(Math.floor(Math.random()*1000)%900==2) Vx[a]*=-1;
		    	if(Math.floor(Math.random()*1000)%900==2) Vy[a]*=-1;
		    	if(X[a]>=canvas.width||X[a]<=0) Vx[a]*=-1;
		    	if(Y[a]>=canvas.height||Y[a]<=0) Vy[a]*=-1;
		    }
		    counting ++;
		}
		function draw() {
		  ctx.clearRect(0, 0, canvas.width, canvas.height);
		  draw_point();
		}
		