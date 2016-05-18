var canteens;
var canteen;
var heatproducts;
var product;

function load()
{
	url = "http://api.shundaoer.net.cn/v1/canteens";
	ajax = {url,function(str){
		canteens = JSON.parse(str);
	}};
	url = "http://api.shundaoer.net.cn/v1/canteens/<"+id+">/";
	ajax = {url,function(str){
		canteen = JSON.parse(str);
	}};
	url = "http://api.shundaoer.net.cn/v1/heatproducts/";
	ajax = {url,function(str){
		heatproduct = JSON.parse(str);
	}};	
}