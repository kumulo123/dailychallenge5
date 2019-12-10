var res =  null;
var num1 = null;
var num2 = null;
var total = null;
var sign = "";
$(document).ready(function(){
$(document).click(function(event) {
    var text = $(event.target).html();
    if($(event.target).attr('class')==="box" && Number.isInteger(parseInt(text, 10))){
    	res = res*10+parseInt(text, 10);
    	$("#res").val(res);
    }

    if(!Number.isInteger(parseInt(text, 10)) && $(event.target).attr('class')==="box"){
    	if(text === "+" || text === "-" || text === "/" || text === "*"){
    		
    		
    		if(num1 === null){
				num1 = res;
    		}
    		if(num1 !== null){
    			num2 = res;
    		}
    		res = 0;
    		$("#res").val(text);
    		sign = text;
    	}
    	if(text === "="){
    		num2 = res;
    		if(sign === "+"){
    			total = num1 + num2;
    		}
    		if(sign === "-"){
    			total = num1 - num2;
    		}
    		if(sign === "*"){
    			total = num1 * num2;
    		}
    		if(sign === "/"){
    			total = num1 / num2;
    		}
    		$("#res").val(total);
    		num1 = total;
    	}
    }
});
});