$(document).ready(function(){
	$("#sub").click(function(){
		$.ajax({
			type: "POST",
			url: "http://localhost/sign_up.php",
			datatype: "json",
			data:{
				name: $("#name").val(),
				sex: $("#sex >span").text(),
				fg_p: $("#fp >span").text(),
				ck_p: $("#cp >span").text(),
				school: $("#school").val(),
				club: $("#club").val(),
				grade: $("#grade >span").text(),
				fg: $("#j_f ").prop("checked"),
				ck: $("#j_c ").prop("checked"),
				night: $("#night").prop("checked"),
				hotel: $("#hotel").prop("checked"),
				ID: $("#ID").val(),
				bir: $("#bir").val(),
				mail: $("#mail").val(),
				phone: $("#phone").val(),
				par: $("#par").val(),
				p_p: $("#p_p").val(),
			},
			contentType: "application/x-www-form-urlencoded;charset=UTF-8",
			success: function(data) {
                alert("shit");      
            },
            error: function(jqXHR) {
                alert("發生錯誤: " + jqXHR.status +"\n發生錯誤!QAQQQQ\n請稍後再試\n或者與我們聯繫");
            }
		})
	})
});