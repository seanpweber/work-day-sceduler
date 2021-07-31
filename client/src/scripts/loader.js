document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
         document.getElementById('contents').style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(function(){
           document.getElementById('interactive');
           document.getElementById('loader').style.height="0";
           document.getElementById('loader').style.display="none";
           document.getElementById('loader').className="";
           document.getElementById('contents').style.visibility="visible";
        },1000);
    }
  }