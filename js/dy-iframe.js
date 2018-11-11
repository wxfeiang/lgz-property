
// function reinitIframe(){
//     var iframe = document.getElementById("test");
//     try{
//     var bHeight = iframe.contentWindow.document.body.scrollHeight;
//     var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
//     var height = Math.max(bHeight, dHeight);
//     iframe.height = height;
//     console.log(height);
//     }catch (ex){}
//     }
//     window.setInterval("reinitIframe()", 200);
function treeFrameT(){
    var hmainT = document.getElementById("treeFrame");
    var bheightT = document.documentElement.clientHeight;
    hmainT .style.width = '100%';
    hmainT .style.height = (bheightT-70) + 'px';
}
treeFrameT();
window.onresize=function(){  
    treeFrameT();
};
