document.addEventListener("click",function(e){var d=document.querySelector("details.cs");if(d&&!d.contains(e.target))d.removeAttribute("open")});
(function(){var c=document.querySelector(".car");if(!c)return;var cards=[].slice.call(c.children),btns=document.querySelectorAll(".car-btn"),dots=document.querySelector(".dots");
cards.forEach(function(_,i){var b=document.createElement("button");b.className="dot";b.setAttribute("aria-label","Go to card "+(i+1));b.onclick=function(){cards[i].scrollIntoView({behavior:"smooth",inline:"start",block:"nearest"})};dots.appendChild(b)});
function step(){return cards[0].getBoundingClientRect().width+32}
function upd(){var i=Math.round(c.scrollLeft/step());i=Math.max(0,Math.min(cards.length-1,i));[].forEach.call(dots.children,function(d,j){d.classList.toggle("on",j===i)});
btns[0].disabled=c.scrollLeft<4;btns[1].disabled=c.scrollLeft+c.clientWidth>=c.scrollWidth-4}
btns.forEach(function(b){b.addEventListener("click",function(){c.scrollBy({left:(b.dataset.d==="n"?1:-1)*step(),behavior:"smooth"})})});
c.addEventListener("scroll",function(){requestAnimationFrame(upd)},{passive:true});window.addEventListener("resize",upd);
c.addEventListener("keydown",function(e){if(e.key==="ArrowRight"){c.scrollBy({left:step(),behavior:"smooth"});e.preventDefault()}if(e.key==="ArrowLeft"){c.scrollBy({left:-step(),behavior:"smooth"});e.preventDefault()}});
var down=false,sx=0,sl=0,moved=false;c.addEventListener("pointerdown",function(e){if(e.pointerType!=="mouse")return;down=true;moved=false;sx=e.clientX;sl=c.scrollLeft;c.classList.add("drag")});
window.addEventListener("pointermove",function(e){if(!down)return;var dx=e.clientX-sx;if(Math.abs(dx)>3)moved=true;c.scrollLeft=sl-dx});
window.addEventListener("pointerup",function(){if(!down)return;down=false;c.classList.remove("drag");var i=Math.round(c.scrollLeft/step());c.scrollTo({left:i*step(),behavior:"smooth"})});upd()})();
(function(){var tabs=[].slice.call(document.querySelectorAll('[role=tab]'));if(!tabs.length)return;
function show(id,push){tabs.forEach(function(t){var on=t.getAttribute("aria-controls")===id;t.setAttribute("aria-selected",on);t.tabIndex=on?0:-1;document.getElementById(t.getAttribute("aria-controls")).hidden=!on});if(push)history.replaceState(null,"","#"+(id==="p-new"?"whats-new":"search"))}
tabs.forEach(function(t,i){t.addEventListener("click",function(){show(t.getAttribute("aria-controls"),true)});t.addEventListener("keydown",function(e){var n=e.key==="ArrowRight"?i+1:e.key==="ArrowLeft"?i-1:-1;if(n<0)return;n=(n+tabs.length)%tabs.length;tabs[n].focus();tabs[n].click()})});
show(location.hash==="#whats-new"?"p-new":"p-search",false)})();
