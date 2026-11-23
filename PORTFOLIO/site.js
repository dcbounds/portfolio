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
(function(){var d=document.documentElement;if(matchMedia("(prefers-reduced-motion:reduce)").matches||!("IntersectionObserver" in window))return;d.classList.add("js");var els=[].slice.call(document.querySelectorAll(".hero h1,.hero .sub,.hero .ctas,.ai .eyebrow,.ai h2,.ai-lede,.ai-grid article,.know h2,.kpi,.cx,.glance>*,.proj>*:not(img.wide956):not(img.wide937),.projects img.wide956,.projects img.wide937,.exp h2,.exp .job,.skills,.ft .col,.s,.qt,.chd>*"));var io=new IntersectionObserver(function(es){var k=0;es.forEach(function(e){if(e.isIntersecting){var t=e.target;t.style.transitionDelay=(k++*90)+"ms";t.classList.add("in");setTimeout(function(){t.style.transitionDelay=""},1500);io.unobserve(e.target)}})},{rootMargin:"0px 0px -8% 0px",threshold:.05});els.forEach(function(el){el.classList.add("rv");io.observe(el)})})();
(function(){var host=document.getElementById("dchart");if(!host)return;var D=[30,25,110,160,155,80,75,55,45,90,150,100,85,78,85,25,60,85,90,110,60,15,35,170,125,580,700,480,135,180,770,580,870,700,590,170,190,690,910,900,665,630,210,270,725],M=["Sep","Oct","Nov"];function lab(i){var d=new Date(2026,8,26+i);return M[d.getMonth()-8]+" "+d.getDate()}var L=26-0;var LAUNCH=25;
var W=860,H=300,pl=40,pr=14,pt=16,pb=34,iw=W-pl-pr,ih=H-pt-pb,mx=1000,n=D.length;function X(i){return pl+iw*i/(n-1)}function Y(v){return pt+ih*(1-v/mx)}
var ns="http://www.w3.org/2000/svg",h='<svg viewBox="0 0 '+W+' '+H+'" tabindex="0" aria-label="Line chart. Page views rise sharply after the October 21 launch. Use left and right arrow keys to read values."><defs><linearGradient id="dcg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b6bcb" stop-opacity=".22"/><stop offset="1" stop-color="#0b6bcb" stop-opacity="0"/></linearGradient></defs>';
[0,250,500,750,1000].forEach(function(v){h+='<line class="gx" x1="'+pl+'" x2="'+(W-pr)+'" y1="'+Y(v)+'" y2="'+Y(v)+'"/><text x="'+(pl-8)+'" y="'+(Y(v)+4)+'" text-anchor="end">'+v+'</text>'});
[1,8,15,22,29,36,43].forEach(function(i){h+='<text x="'+X(i)+'" y="'+(H-10)+'" text-anchor="middle">'+lab(i)+'</text>'});
var pts=D.map(function(v,i){return X(i).toFixed(1)+","+Y(v).toFixed(1)}).join(" ");
h+='<polygon class="ar" points="'+X(0)+","+Y(0)+" "+pts+" "+X(n-1)+","+Y(0)+'"/><polyline id="dcl" class="ln" points="'+pts+'"/>';
h+='<line class="lm" x1="'+X(LAUNCH)+'" x2="'+X(LAUNCH)+'" y1="'+pt+'" y2="'+Y(0)+'"/><text class="lt" x="'+(X(LAUNCH)-8)+'" y="'+(pt+12)+'" text-anchor="end">Redesign live Oct 21</text>';
h+='<line id="dcc" class="cur" y1="'+pt+'" y2="'+Y(0)+'" style="display:none"/><circle id="dcd" class="dot" r="5" style="display:none"/></svg><div class="dtip" id="dct"></div>';host.innerHTML=h;
var svg=host.querySelector("svg"),cur=host.querySelector("#dcc"),dot=host.querySelector("#dcd"),tip=host.querySelector("#dct"),line=host.querySelector("#dcl"),at=-1;
function show(i){i=Math.max(0,Math.min(n-1,i));at=i;var x=X(i),y=Y(D[i]);cur.setAttribute("x1",x);cur.setAttribute("x2",x);cur.style.display="";dot.setAttribute("cx",x);dot.setAttribute("cy",y);dot.style.display="";var r=svg.getBoundingClientRect(),k=r.width/W;tip.style.left=(x*k)+"px";tip.style.top=(y*k)+"px";tip.innerHTML="<b>~"+D[i]+"</b>"+lab(i)+(i>=LAUNCH?" · after redesign":" · before redesign");tip.style.opacity=1}
function hide(){cur.style.display="none";dot.style.display="none";tip.style.opacity=0;at=-1}
svg.addEventListener("pointermove",function(e){var r=svg.getBoundingClientRect(),x=(e.clientX-r.left)/r.width*W;show(Math.round((x-pl)/iw*(n-1)))});
svg.addEventListener("pointerleave",hide);svg.addEventListener("blur",hide);
svg.addEventListener("keydown",function(e){if(e.key==="ArrowRight"){show(at<0?0:at+1);e.preventDefault()}if(e.key==="ArrowLeft"){show(at<0?n-1:at-1);e.preventDefault()}if(e.key==="Escape")hide()});
if(!matchMedia("(prefers-reduced-motion:reduce)").matches&&"IntersectionObserver" in window){var len=line.getTotalLength();line.style.strokeDasharray=len;line.style.strokeDashoffset=len;var io=new IntersectionObserver(function(es){if(es[0].isIntersecting){line.style.transition="stroke-dashoffset 1.6s cubic-bezier(.2,.7,.2,1)";line.style.strokeDashoffset=0;io.disconnect()}},{threshold:.3});io.observe(host)}})();
