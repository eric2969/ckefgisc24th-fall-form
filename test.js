		//var R = 10;
		var counting = 0;
		var n = 40;
		var X = [657,906,594,551,902, 848,1093,507,729,857, 862,344,544,512,273, 176,950,593,578,510,597,207,263,239,527,729,120,901,917,1451,556,1848,616,842,54,146,462,780,508,155];
		var Y = [0,90,375,963,495,137,1,600,606,340, 513,1133,454,916,788, 1259,47,384,833,0,785,1008,880,1099,858,379,690,315,316,1,1142,0,387,412,949,684,793,229,614,831];
		var R = [n];
		var Vx = [n];
		var Vy = [n];
		for(var i=0;i<n;i++){
			if(Y[i] > 1000) Y[i] -= 500;
			Vx[i] = Math.floor(Math.random()*5-2); 
			Vy[i] = Math.floor(Math.random()*5-2);
			R[i] = Math.floor(Math.random()*3+2);
			if(Vx[i]==0) Vx[i] = 1;
			if(Vy[i]==0) Vy[i] = 1;
			if(Math.random()>0.75) Y[i] += (Math.random()*900);
		}
		var temp=true,XD;
		var canvas = document.getElementById('OAO');
		var ctx = canvas.getContext('2d');
		function draw_point(){
			for(var i=0;i<n;i++){
				ctx.beginPath();
				ctx.arc(X[i],Y[i],R[i],0,2*Math.PI);
		    	ctx.fillStyle = "#e6ffff";
		    	if(Math.random()>0.9999) temp = !temp;
		    	if(temp) XD = 0.3;
		    	else XD = 1;
		    	ctx.globalAlpha = XD;
		    	ctx.fill();
		    	ctx.closePath();
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
		    for(var a=0;a<n;a++){
		    	Y[a]+=Vy[a];
		    	X[a]+=Vx[a];
		    	if( X[a]*X[a] + Y[a]*Y[a] < 490000) {
		    		Vx[a] = (Vx[a]<0) ? Vx[a]*(-1) : Vx[a];
		    		Vy[a] = (Vy[a]<0) ? Vy[a]*(-1) : Vy[a];
		    		continue;
		    	}
		    	if( (X[a]+400)*(X[a]+400) + Y[a]*Y[a] >1960000) {
		    		Vx[a] = (Vx[a]>0) ? Vx[a]*(-1) : Vx[a];
		    		Vy[a] = (Vy[a]>0) ? Vy[a]*(-1) : Vy[a];
		 			continue;
		    	}
		    	if( Y[a]>=canvas.height||Y[a]<=0) Vy[a]*=-1;
		    	if(X[a]>=canvas.width||X[a]<=0) Vx[a]*=-1;
		    	if(Math.floor(Math.random()*1000)%900==2) Vx[a]*=-1;
		    	if(Math.floor(Math.random()*1000)%900==2) Vy[a]*=-1;
		    }
		    counting ++;
		}
		function draw() {
		  ctx.clearRect(0, 0, canvas.width, canvas.height);
		  draw_point();
		}
		setInterval(draw, 10);/*
		function stop(){
			var strx="",stry="";
			for(var A=0;A<n;A++){
				strx +=(X[A]+",")
			}
			for(var A=0;A<n;A++){
				stry +=(Y[A]+",")
			}
			document.getElementById('x').innerHTML = strx;
			document.getElementById('y').innerHTML = stry;

		}*/