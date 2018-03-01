/**
 * Created by Administrator on 2017/9/15.
 */
var menuImg=document.querySelector(".p1>.menu>img:nth-child(1)");
var closeImg=document.querySelector(".p1>.p_hide>.p_close>img");
var p_hide=document.querySelector(".p1>.p_hide");
//点击图片按钮页面出现
var hammer=new Hammer(menuImg);
hammer.on("tap",function () {
    p_hide.style.display="block"
    p_hide.children[0].style.display="block"

})

//点击页面关闭按钮 让页面关闭
var hammer_close=new Hammer(closeImg)
hammer_close.on("tap",function () {
    p_hide.style.display="none"
    p_hide.children[0].style.display="none"
})