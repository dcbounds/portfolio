document.addEventListener("click",function(e){var d=document.querySelector("details.cs");if(d&&!d.contains(e.target))d.removeAttribute("open")});
(function(){var c=document.querySelector(".car");if(!c)return;var wrap=c.parentNode,cards=[].slice.call(c.children),btns=document.querySelectorAll(".car-btn"),dots=document.querySelector(".dots"),h=document.querySelector(".know h2"),reduce=matchMedia("(prefers-reduced-motion:reduce)").matches,GAP=32;
cards.forEach(function(_,i){var b=document.createElement("button");b.className="dot";b.setAttribute("aria-label","Go to card "+(i+1));b.onclick=function(){go(i)};dots.appendChild(b)});
function step(){return cards[0].getBoundingClientRect().width+GAP}
function maxL(){return c.scrollWidth-c.clientWidth}
function go(i){c.scrollTo({left:Math.min(maxL(),Math.max(0,i*step())),behavior:reduce?"auto":"smooth"})}
function start(){return h?h.getBoundingClientRect().left:0}
function align(){if(h){var l=Math.max(0,Math.round(start()-wrap.getBoundingClientRect().left));wrap.style.setProperty("--start",l+"px")}}
function idx(){var s=c.scrollLeft;return s>=maxL()-2&&maxL()>0?cards.length-1:Math.max(0,Math.min(cards.length-1,Math.round(s/step())))}
function upd(){var i=idx(),vr=c.getBoundingClientRect(),st=start();[].forEach.call(dots.children,function(d,j){d.classList.toggle("on",j===i);d.setAttribute("aria-current",j===i?"true":"false")});
cards.forEach(function(k){var r=k.getBoundingClientRect();k.classList.toggle("on",r.left>=st-12&&r.right<=vr.right+2)});
btns[0].disabled=c.scrollLeft<4;btns[1].disabled=c.scrollLeft>=maxL()-4}
btns.forEach(function(b){b.addEventListener("click",function(){var d=b.dataset.d==="n"?1:-1;go(idx()+d)})});
var tick=false;c.addEventListener("scroll",function(){if(tick)return;tick=true;requestAnimationFrame(function(){tick=false;upd()})},{passive:true});
function relayout(){align();upd()}window.addEventListener("resize",relayout);
c.addEventListener("keydown",function(e){if(e.key==="ArrowRight"){go(idx()+1);e.preventDefault()}if(e.key==="ArrowLeft"){go(idx()-1);e.preventDefault()}});
var down=false,sx=0,sl=0,lx=0,lt=0,v=0,moved=false;
c.addEventListener("pointerdown",function(e){if(e.pointerType!=="mouse"||e.button!==0)return;down=true;moved=false;sx=lx=e.clientX;sl=c.scrollLeft;lt=performance.now();v=0});
window.addEventListener("pointermove",function(e){if(!down)return;var dx=e.clientX-sx;if(!moved&&Math.abs(dx)>4){moved=true;c.classList.add("drag")}if(!moved)return;var now=performance.now(),dt=Math.max(1,now-lt);v=.8*v+.2*((lx-e.clientX)/dt);lx=e.clientX;lt=now;c.scrollLeft=sl-dx});
window.addEventListener("pointerup",function(){if(!down)return;down=false;if(!moved)return;c.classList.remove("drag");var target=c.scrollLeft+v*220,i=Math.round(target/step());go(i)});
c.addEventListener("click",function(e){if(moved){e.preventDefault();e.stopPropagation();moved=false}},true);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(relayout);relayout()})();
(function(){var tabs=[].slice.call(document.querySelectorAll('[role=tab]'));if(!tabs.length)return;
function show(id,push){tabs.forEach(function(t){var on=t.getAttribute("aria-controls")===id;t.setAttribute("aria-selected",on);t.tabIndex=on?0:-1;document.getElementById(t.getAttribute("aria-controls")).hidden=!on});if(push)history.replaceState(null,"","#"+(id==="p-new"?"whats-new":"search"))}
tabs.forEach(function(t,i){t.addEventListener("click",function(){show(t.getAttribute("aria-controls"),true)});t.addEventListener("keydown",function(e){var n=e.key==="ArrowRight"?i+1:e.key==="ArrowLeft"?i-1:-1;if(n<0)return;n=(n+tabs.length)%tabs.length;tabs[n].focus();tabs[n].click()})});
show(location.hash==="#whats-new"?"p-new":"p-search",false)})();
