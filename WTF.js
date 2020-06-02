$(document).ready(function(){
	$("#sub").click(function(){
		var a =  $("#sex >span").text();
		if($("#sex >span").text()==$("#sex >span").data("key")) a = "";
		var b=$("#fp >span").text();
		if($("#fp >span").text()==$("#fp >span").data("key")) b = "";
		var c=$("#cp >span").text();
		if($("#cp >span").text()==$("#cp >span").data("key")) c = "";
		var d=$("#grade >span").text();
		if($("#grade >span").text()==$("#grade >span").data("key")) d = "";
		var ID="none", bir="none";
		if($("#hotel").prop("checked")){
			ID = $("#ID").val();
			bir= $("#bir").val();
		}
		var ta;
		if($("#t_a").val()=="") ta = "none";
		else ta = $("#t_a").val();
		$.ajax({
			type: "POST",
			url: "http://ckefgisc.org/sign_up.php",
			datatype: "json",
			data:{
				name: $("#name").val(),
				sex: a,
				fg_p: b,
				ck_p: c,
				school: $("#school").val(),
				club: $("#club").val(),
				grade: d,
				fg: $("#j_f ").prop("checked"),
				ck: $("#j_c ").prop("checked"),
				night: $("#night").prop("checked"),
				hotel: $("#hotel").prop("checked"),
				Taipei: $("#Taipei").prop("checked"),
				ID: ID,
				bir: bir,
				mail: $("#mail").val(),
				phone: $("#phone").val(),
				par: $("#par").val(),
				who: $("#who").val(),
				p_p: $("#p_p").val(),
				t_a: ta,
			},
			contentType: "application/x-www-form-urlencoded;charset=UTF-8",
			success: function(data) {
                if(data=="報名成功"){
                 	$("#success").css('display','block');
               		$('#f_main').css('display','none');
             	}
              	else if(data=="error")  {
              		$("#fail").css('display','block');
               		$('#f_main').css('display','none');
           		}
                else $("#empty").css('display','block');

            },
            error: function(jqXHR) {
               $("#fail").css('display','block');
               $('#f_main').css('display','none');
               //alert("發生錯誤: " + jqXHR.status +"\n發生錯誤!QAQQQQ\n請稍後再試\n或者與我們聯繫");
            }
		})
	})
});