/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 //var windowData ;
// loadData('http://api.shundaoer.net.cn/v1/home',windowData);

function initPaypage(win){

    cart_money = getCookie("cartmoney"+win);
    document.getElementById('cost_money').innerHTML = '¥ '+ cart_money;
}


function initOrderform(win){        //获取窗口编号  
    var cart_money = getCookie("cartmoney"+win);
    var cart_count = getCookie("cartnum"+win);
    document.getElementById('order_money').innerHTML = '¥ '+ cart_money;
    document.getElementById('cost_money').innerHTML = '¥ '+ cart_money;
    
    for(var i=1;i<cart_count;i++){
        var c_name ="cart"+win+"com"+i;
        var c = getCookie(c_name);
        if(c!==""){
             var para = document.createElement("p");
             para.className = "menu_cai";
             para.innerHTML = "<span class=\"menu_name\">"+ i           //i是名字，需要改，cookie里不存
                     +"</span> <span class=\"menu_cot\">x "+ c +"</span> <span class=\"menu_cost\">"+ 15*c  //15是价格，cookie里不存
                     +" 元</span>";
            document.getElementById("order_cart").appendChild(para); 
        }
    }
}


function checkCookie(win){          //窗口号
    var cart_money = getCookie("cartmoney"+win);   //窗口购物车总金额
    var cart_count = getCookie("cartnum"+win);    //窗口中窗口种类个数
    if (cart_money == null || cart_money=="" || cart_money=="undefined" ||cart_money ==0 ||cart_money=='NaN'){
       //分别是窗口商品数 和 窗口购物车总金额
        setCookie("cartnum"+win,7,365);
        setCookie("cartmoney"+win,0,365); 
    }else{
        document.getElementById('f_money').innerHTML = '¥ '+ cart_money;  
        document.getElementById('f_pay').style.display = 'block';  
        document.getElementById('clear_cart').style.display = 'block';
    }

    for(var i=1;i<cart_count;i++){
        var c_name ="cart"+win+"com"+i;
        var c = getCookie(c_name);
        if(c!==""){
            var tr = document.createElement("tr");
            var tdN = document.createElement("td");
            var tdP = document.createElement("td");
            var tdC = document.createElement("td");
            var tdO = document.createElement("td");
            tdN.innerHTML = i;
            tdC.innerHTML = 
                    "<span class='am' onclick='RedItem(\""+win+"\",\""+i+"\")'>-&nbsp</span>" + c + "<span class='am' onclick='AddItem(\""+win+"\",\""+i+"\")'>&nbsp+</span>";
            tdP.innerHTML = 15;
            tdO.innerHTML = "<span onclick='DelItem(\""+win+"\",\""+i+"\")'>×</span>";
            
            tr.appendChild(tdN);
            tr.appendChild(tdP);
            tr.appendChild(tdC);
            tr.appendChild(tdO);
            document.getElementById("tablebody").appendChild(tr);          
        }
    }

}



function addToCart(num , win){       //num是商品号，按顺序从1开始  win是窗口号
    var value = getCookie("cart"+win+"com"+num);    //当前窗口购物车的cookie

    if (value==null || value=="" || value=="undefined" || value =='NaN'){
        setCookie("cart"+win+"com"+num,1,365);      //存的是该商品的个数
    }else{       
        value = parseInt(value) + 1;
        setCookie("cart"+win+"com"+num,value,365);       
    }
    
    var cart_money = getCookie("cartmoney"+win); 
    var money = parseInt(cart_money) + 15;//15是商品价格 还未交互
    setCookie("cartmoney"+win,money,365);
    window.parent.location.reload(true);
}

function AddItem(win,num){
    var cart_money = getCookie("cartmoney"+win); 
    var count = getCookie("cart"+win+"com"+num);

    var count = parseInt(count) + 1;
    setCookie("cart"+win+"com"+num,count,365);  
  
    var money = parseInt(cart_money) + 15;//15是商品价格 还未交互
    setCookie("cartmoney"+win,money,365);  

    location.reload(true);
    document.getElementById('shopping_cart').style.display = 'block'; 
    document.getElementById('clear_cart').style.display = 'block';
}

function RedItem(win,num){
    var cart_money = getCookie("cartmoney"+win); 
    var count = getCookie("cart"+win+"com"+num);
    if(parseInt(count)==1){ 
        DelCookie("cart"+win+"com"+num);
    }else{
        var count = parseInt(count) - 1;
        setCookie("cart"+win+"com"+num,count,365);  
    }
    
    var money = parseInt(cart_money) - 15; //15是商品价格 还未交互
    setCookie("cartmoney"+win,money,365);  
    
    location.reload(true);
}

function DelAllItem(win){
    var cart_count = getCookie("cartnum"+win);
    for(var i=1;i<cart_count;i++){
        var c_name ="cart"+win+"com"+i;
        var c = getCookie(c_name);
        if(c!==""){
            DelItem(win,i);
        }
    }
}

function DelItem(win,num){
    var cart_money = getCookie("cartmoney"+win); 
    var count = getCookie("cart"+win+"com"+num);
    var money = parseInt(cart_money) - 15 * parseInt(count);
    setCookie("cartmoney"+win,money,365);  
    DelCookie("cart"+win+"com"+num);
    
    location.reload(true);
    document.getElementById('shopping_cart').style.display = 'block'; 
}

function getCookie(c_name){
    if (document.cookie.length>0){ 
        c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!==-1){ 
            c_start=c_start + c_name.length+1 ;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end===-1)
                c_end=document.cookie.length;
    return unescape(document.cookie.substring(c_start,c_end));
        } 
    }
    return "";
}


function setCookie(c_name,value,expiredays){
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=c_name+ "=" +escape(value)+((expiredays===null) ? "" : "; expires="+exdate.toGMTString());
}

function DelCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    document.cookie = name + "=; expires=" + exp.toGMTString();
}

/*
function register(){
    var username = document.getElementById("inputname").value;
    setCookie('username',username,365);
    window.history.back(-1);
}

function checkCookieExist(){
    username=getCookie('username');
    if (username!==null && username!=="" && username!=="undefined"){
        document.getElementById('register').innerHTML=" &nbsp<a href='#' onclick='logout()' > logout </a> &nbsp";
        document.getElementById('register').style.width = "101px";
        document.getElementById('welcome').innerHTML="Welcome, "+username;
    }
}

function logout(){
    DelCookie('username');
    DelCookie("count");
    for(var i=0;i<12;i++){
        DelCookie('cart'+i);
    }
    for(var i=0;i<12;i++){
        DelCookie('order'+i);
    }
}



function pay(){
    if(getCookie('username')==="")
        window.location.href = "register.html";
    else{
        var count = getCookie("count");
        if(count==="0")
            window.location.href = "jumpPage.html";
        else{
            for(var i=1;i<12;i++){
                if(getCookie("cart"+i)!==""){
                    var date = new Date();
                    var str = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
                    setCookie("order"+i,str,365);
                    DelCookie("cart"+i);
                }
            }
            window.location.href = "orderForm.html";
        }
    }
}
*/