$(document).ready(function(){
/*$(".t1").click(function(){
	    $("#black").css("display","block");
		$(".vote").addClass('active');
  	});  
 	$(".close").click(function(){
		$("#black").css("display","none");
		$(".vote").removeClass('active');
  	});
    var b=$(".vote").height();
	var a=$("body").width(); 
	$("body").height(a*0.476);
	$("#black").height(b+80);*/
	var vo;
$("#x1,#xs1").click(function(){
	    $('.ms').css("left","34%")
	    $('.ms').css("top","17%")
	    $('#zfq').attr("src","./img/zfq1.png")
		$(".detail").html("当幕布拉开，音乐响起。她用她狂野诱惑的舞姿，性感迷离的嗓音来征服大家的视听。她的每一个动作都仿佛有魔力一般吸引着你，让你目不转睛，让你的每一个细胞都随之激动，逐渐沉沦。她，就是王艺格。")
		$(".name").html("王艺格");
		$(".brief").html("16音表");
		$(".xuanshou").attr("src","./img/xs11.png");
		   var voteNum = $('.voteNum1').text();
    		console.log(voteNum);
    		$(".vote1").text(voteNum);

		vo=1;
		
	});
		
		
		
	$("#x2,#xs2").click(function(){
		$('.ms').css("left","34%")
	    $('.ms').css("top","16%")
		$('#zfq').attr("src","./img/zfq2.png")
		$(".detail").html("进于顽石之灵魂，戏于天地之精魂，历磨难而行蜕变之路，闯四方而创万世芳华。小丑鬼魅的在午夜中步行，转身卸下面具，素颜之下捧托一颗真心与你相见。他是王亦程，行者之路，逆光前行。")
		
		$(".name").html( "王亦程");
		$(".brief").html("14制片");
		
		$(".xuanshou").attr("src","./img/xs22.png");
			 var voteNum = $('.voteNum2').text();
    		console.log(voteNum);
    		$(".vote1").text(voteNum);
		vo=2;
	});
	   
	   
	   
	$("#x3,#xs3").click(function(){
		$('.ms').css("left","34%")
	    $('.ms').css("top","17%")
		$('#zfq').attr("src","./img/zfq3.png")
		$(".detail").html("她，是彩云之南的孔雀，纯粹的水土风情孕育了她不羁起舞的灵魂，活出精彩人生的她，想要将自己的故土用曼妙舞姿深情呈现，展现不一样的云南风韵她，也想在舞台上肆意绽放，展现多面的自己，碰撞出最不一样的色彩她，就是张博。")
		
		$(".name").html( "张博");
		$(".brief").html("北京工商大学");
		
		$(".xuanshou").attr("src","./img/xs33.png");
		var voteNum = $('.voteNum3').text();
    		console.log(voteNum);
    		$(".vote1").text(voteNum);
		vo=3;
	});
 
 
 	$("#x4,#xs4").click(function(){
 		$('.ms').css("left","34%")
	    $('.ms').css("top","17%")
 		$('#zfq').attr("src","./img/zfq4.png")
		$(".detail").html("她能妖娆魅惑，能婉转抒情，更能高昂激震。她渴望做一只小小鸟，在舞台上肆意翱翔，尽展自身色彩。她的歌声浑厚而温柔，让你不知不觉沉迷其中，她的感情发自肺腑，唤起你最深处的记忆，她，就是陈鑫")
		
		$(".name").html( "陈鑫");
		$(".brief").html("中央美术学院");
		
		$(".xuanshou").attr("src","./img/xs44.png");
		var voteNum = $('.voteNum4').text();
    		console.log(voteNum);
    		$(".vote1").text(voteNum);
		vo=4;
	});
		
	$("#x5,#xs5").click(function(){
		$('.ms').css("left","34%")
	    $('.ms').css("top","17%")
		$('#zfq').attr("src","./img/zfq5.png")
		$(".detail").html("她从繁华市井与机械轰响中走来，不论世界孤立，不与尘世远方，任你奚落。她独自放歌，与孤独灵魂和飘渺远方共鸣，她亭亭浅吟，与逍遥自在和嘹亮执着联结。色彩激荡，不负她眼中热望。风采别样，相伴她浅酌低唱。她就是申原旗。")
		
		$(".name").html( "申原旗");
		$(".brief").html("华北电力大学");
		
		$(".xuanshou").attr("src","./img/xs55.png");
		var voteNum = $('.voteNum5').text();
    		console.log(voteNum);
    		$(".vote1").text(voteNum);
		vo=5;
	});
		
	$("#x6,#xs6").click(function(){
		$('.ms').css("left","34%")
	    $('.ms').css("top","17%")
		$('#zfq').attr("src","./img/zfq6.png")
		$(".detail").html("一身红大褂、一举一目、一动一稳、一高一昂、一腔一调，是你铿锵而坚定的态度 是你对古之经典的情怀和忠诚 是你正用着你独特的方式诠释京韵传统 深邃的眼眸中 起伏的腔调里 触及你清透的灵魂 体悟你坚毅的力量。你 ，就是陈钰！")
		
		$(".name").html( "陈钰");
		$(".brief").html("14播本");
		
		$(".xuanshou").attr("src","./img/xs66.png");
		var voteNum = $('.voteNum6').text();
    		console.log(voteNum);
    		$(".vote1").text(voteNum);
		vo=6;
	});
		
	$("#x7,#xs7").click(function(){
		$('.ms').css("left","34%")
	    $('.ms').css("top","16%")
		$('#zfq').attr("src","./img/zfq7.png")
		$(".detail").html("他裹挟着如梦烟云，举手投足间镌刻诗意；他踏破红尘俗世，娓娓道来那低吟浅唱。他在人海浮沉，只期许相遇你们的眼眸。低吟浅唱间张扬着音乐的信仰。他是温柔的情歌王，是沉稳的游吟诗人。这就是他，郭一弘。")
		
		$(".name").html( "郭一弘");
		$(".brief").html("北京林业大学");
		
		$(".xuanshou").attr("src","./img/xs77.png");
		var voteNum = $('.voteNum7').text();
    		console.log(voteNum);
    		$(".vote1").text(voteNum);
		vo=7;
	});
		
	$("#x8,#xs8").click(function(){
		$('.ms').css("left","45%")
		$('.ms').css("top","20%")
		$('#zfq').attr("src","./img/zfq8.png")
		$(".detail").html("灵动的指尖描绘各色的音符，婀娜的身姿展现细腻的情感。相同的动作，表现着不同的情感；相异的形态，表现的又是同一种感觉。你中有我，我中有你，相生相存，相互融合。她是胡溪，她是钱美如，她们是SiRi")
		
		$(".name").html( "胡溪  钱美如");
		$(".brief").html("15摄影");
		
		$(".xuanshou").attr("src","./img/xs88.png");
		var voteNum = $('.voteNum8').text();
    		console.log(voteNum);
    		$(".vote1").text(voteNum);
		vo=8;
	});
		
	$("#x9,#xs9").click(function(){
		$('.ms').css("left","45%")
		$('.ms').css("top","20%")
		$('#zfq').attr("src","./img/zfq9.png")
		$(".detail").html("他们，用武术与舞蹈，展现自己的刚柔并济他们，用灿烂阳光的笑容，向他人传递自己的能量，他们以绝对的默契与实力，一路所向披靡，他们走在自己的路上，不畏外界的任何干扰，他们用汗水与热血 碰撞出青春的花火 只为梦想")
		
		$(".name").html( "叶林英子 马睿瀚");
		$(".brief").html("16表演");
		
		$(".xuanshou").attr("src","./img/xs99.png");
		var voteNum = $('.voteNum9').text();
    		console.log(voteNum);
    		$(".vote1").text(voteNum);
		vo=9;
	});
		
	$("#x10,#xs10").click(function(){
		$('.ms').css("left","45%")
		$('.ms').css("top","20%")
		$('#zfq').attr("src","./img/zfq10.png")
		$(".detail").html("张嘉诚、刘巴特尔，一个沉静寡言，一个阳光开朗。出于对相声的热爱，他们走到了一起。他们会为大家带来精彩绝伦的相声，他们只想把最传统最原汁原味的相声呈现给大家。他们是张嘉诚和刘巴特尔，他们是巴诚有戏相声组。")
		
		$(".name").html( "张嘉诚  刘巴特尔");
		$(".brief").html("16表演");
		$(".xuanshou").attr("src","./img/xs1010.png");
		vo=10;
		var voteNum = $('.voteNum10').text();
    		console.log(voteNum);
    		$(".vote1").text(voteNum);

		
	});
		$(".under").click(function(){

			dovote(vo);

		    // alert('活动已结束');
		});
		
});


function dovote(index){
	$.getJSON("/Topic/dovote/type/10/id/"+index,function(data){
        if (data.error >0 ) {   alert(data.msg); } else { alert(data.msg);window.location.reload(); }
   	});
}