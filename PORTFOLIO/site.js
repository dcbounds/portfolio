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
if(btns.length){btns[0].disabled=c.scrollLeft<4;btns[1].disabled=c.scrollLeft>=maxL()-4}}
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
function hf(id){return id==="p-new"?"whats-new":id==="p-search"?"search":id.replace(/^p-/,"")}
function show(id,push){tabs.forEach(function(t){var on=t.getAttribute("aria-controls")===id;t.setAttribute("aria-selected",on);t.tabIndex=on?0:-1;document.getElementById(t.getAttribute("aria-controls")).hidden=!on});if(push)history.replaceState(null,"","#"+hf(id))}
tabs.forEach(function(t,i){t.addEventListener("click",function(){show(t.getAttribute("aria-controls"),true)});t.addEventListener("keydown",function(e){var n=e.key==="ArrowRight"?i+1:e.key==="ArrowLeft"?i-1:-1;if(n<0)return;n=(n+tabs.length)%tabs.length;tabs[n].focus();tabs[n].click()})});
var h0=tabs.filter(function(t){return "#"+hf(t.getAttribute("aria-controls"))===location.hash})[0];show((h0||tabs[0]).getAttribute("aria-controls"),false);
[].forEach.call(document.querySelectorAll("a[data-tab]"),function(a){a.addEventListener("click",function(e){e.preventDefault();var t=tabs.filter(function(x){return x.getAttribute("aria-controls")===a.getAttribute("data-tab")})[0];if(t){t.click();var b=document.querySelector(".tabs");if(b)window.scrollTo({top:b.getBoundingClientRect().top+scrollY-90,behavior:"smooth"})}})})})();
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
(function(){var cs=document.querySelectorAll(".card");cs.forEach(function(c){c.addEventListener("click",function(){if(matchMedia("(hover:hover)").matches)return;var o=c.classList.contains("open");cs.forEach(function(x){x.classList.remove("open")});if(!o)c.classList.add("open")})})})();

/* ===== motion layer ===== */
(function(){
var RM=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
var FINE=window.matchMedia&&matchMedia("(hover: hover) and (pointer: fine)").matches;

/* nav: gliding selected + hover pills, hover dropdown */
(function(){var nav=document.querySelector(".nav");if(!nav)return;
var sel=document.createElement("span");sel.className="nv-pill nv-sel";var hov=document.createElement("span");hov.className="nv-pill nv-hov";
nav.insertBefore(hov,nav.firstChild);nav.insertBefore(sel,nav.firstChild);
function items(){return [].slice.call(nav.querySelectorAll(":scope>a,:scope summary"))}
function place(p,el,instant){var r=el.getBoundingClientRect(),n=nav.getBoundingClientRect();
 if(instant){p.style.transition="none"}
 p.style.width=r.width+"px";p.style.transform="translateX("+(r.left-n.left)+"px)";
 if(instant){p.offsetWidth;p.style.transition=""}}
function cur(){return nav.querySelector(".on")}
function sync(){var c=cur();if(c)place(sel,c,true)}
sync();window.addEventListener("resize",sync);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(sync);
var first=true;
items().forEach(function(el){el.addEventListener("mouseenter",function(){if(!FINE)return;place(hov,el,!nav.classList.contains("hv"));nav.classList.add("hv")});
 el.addEventListener("focus",function(){place(hov,el,!nav.classList.contains("hv"));nav.classList.add("hv")});
 el.addEventListener("blur",function(){nav.classList.remove("hv")})});
nav.addEventListener("mouseleave",function(){nav.classList.remove("hv")});
var cs=nav.querySelector("details.cs");if(cs&&FINE){var t,sum=cs.querySelector("summary");
 function open(){clearTimeout(t);if(cs.open&&!cs.classList.contains("closing"))return;cs.classList.remove("closing");cs.open=true;cs.classList.add("opening")}
 function close(){clearTimeout(t);t=setTimeout(function(){if(!cs.open)return;cs.classList.remove("opening");cs.classList.add("closing");t=setTimeout(function(){cs.open=false;cs.classList.remove("closing")},RM?0:230)},140)}
 cs.addEventListener("mouseenter",open);cs.addEventListener("mouseleave",close);
 sum.addEventListener("click",function(e){e.preventDefault();if(cs.open&&!cs.classList.contains("closing")){close()}else{open()}});
 document.addEventListener("keydown",function(e){if(e.key==="Escape"&&cs.open){cs.classList.remove("opening");cs.open=false}})}
})();

/* headline word reveal */
(function(){if(RM)return;var tg=[];var h1=document.querySelector("body.home .hero h1,body.home h1");if(h1)tg.push(h1);
var gh=document.querySelector(".glance h2");if(gh)tg.push(gh);
tg.forEach(function(el){var txt=el.textContent.replace(/\s+/g," ").trim();var words=txt.split(" ");el.setAttribute("aria-label",txt);
 el.innerHTML=words.map(function(w,i){return '<span class="wm" aria-hidden="true"><span class="wi" style="--i:'+i+'">'+w+'</span></span>'}).join(" ");el.classList.add("wr")});
function go(el){el.classList.add("in")}
tg.forEach(function(el){if("IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){setTimeout(function(){go(el)},120);io.disconnect()}})},{threshold:.2});io.observe(el)}else go(el)})})();

/* count up */
(function(){var els=[].slice.call(document.querySelectorAll(".kpi b"));if(!els.length)return;
els.forEach(function(b){var tn=b.firstChild;if(!tn||tn.nodeType!==3)return;var m=tn.textContent.match(/^(\D*)([\d.]+)(\D*)$/);if(!m)return;
 var pre=m[1],val=parseFloat(m[2]),dec=(m[2].split(".")[1]||"").length,suf=m[3];
 function run(){if(RM)return;var t0=null;(function f(ts){if(!t0)t0=ts;var p=Math.min((ts-t0)/1200,1),e=1-Math.pow(1-p,3);tn.textContent=pre+(val*e).toFixed(dec)+suf;if(p<1)requestAnimationFrame(f)})(performance.now?performance.now():0)}
 if(RM||!("IntersectionObserver" in window))return;
 tn.textContent=pre+(0).toFixed(dec)+suf;
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){run();io.disconnect()}})},{threshold:.6});io.observe(b)})})();

/* sliding pill for case study tabs */
(function(){var bar=document.querySelector(".tabs");if(!bar)return;var p=document.createElement("span");p.className="tp";bar.insertBefore(p,bar.firstChild);
function pos(instant){var s=bar.querySelector('[aria-selected="true"]');if(!s)return;if(instant)p.style.transition="none";
 p.style.width=s.offsetWidth+"px";p.style.height=s.offsetHeight+"px";p.style.top=s.offsetTop+"px";p.style.transform="translateX("+s.offsetLeft+"px)";
 if(instant){p.offsetWidth;p.style.transition=""}}
function init(){pos(true);bar.classList.add("ready")}
init();window.addEventListener("resize",function(){pos(true)});if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){pos(true)});
new MutationObserver(function(){pos(false)}).observe(bar,{attributes:true,subtree:true,attributeFilter:["aria-selected"]})})();

/* before / after toggle */
(function(){var ba=document.getElementById("ba");if(!ba)return;var btns=[].slice.call(ba.querySelectorAll("[data-m]")),side=ba.querySelector(".ba-side"),touched=false;
function set(m){ba.setAttribute("data-mode",m);btns.forEach(function(b){b.setAttribute("aria-pressed",b.dataset.m===m)});
 if(m==="before"&&!RM){side.classList.remove("go");side.offsetWidth;side.classList.add("go")}}
btns.forEach(function(b){b.addEventListener("click",function(){touched=true;set(b.dataset.m)})});
if(!RM&&"IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){io.disconnect();side.classList.add("go");setTimeout(function(){if(!touched)set("after")},1800)}})},{threshold:.6});io.observe(ba)}})();

/* live content type chips */
(function(){var bar=document.querySelector(".SearchResultsTabsV2");if(!bar)return;var counts={"All":181,"Datasets":159,"Tools":22,"Visuals & Reports":5,"Collections":2};
var tabs=[].slice.call(bar.querySelectorAll(".SearchResultsTabsV2__tab")),txt=document.querySelector(".SearchPage__results-text");
txt.innerHTML='Showing <span>1 - <span class="num" data-a>10</span></span> of <span class="num" data-b>181</span> results';
var a=txt.querySelector("[data-a]"),b=txt.querySelector("[data-b]");
var pill=document.createElement("span");pill.className="chip-pill";bar.appendChild(pill);
function pos(instant){var s=bar.querySelector(".is-active");if(!s)return;if(instant)pill.style.transition="none";pill.style.width=s.offsetWidth+"px";pill.style.height=s.offsetHeight+"px";pill.style.transform="translate("+s.offsetLeft+"px,"+s.offsetTop+"px)";if(instant){pill.offsetWidth;pill.style.transition=""}}
pos(true);bar.classList.add("ready");window.addEventListener("resize",function(){pos(true)});if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){pos(true)});
function flip(el,v){el.textContent=v;if(RM)return;el.classList.remove("flip");el.offsetWidth;el.classList.add("flip")}
tabs.forEach(function(t){t.addEventListener("click",function(){tabs.forEach(function(x){x.classList.toggle("is-active",x===t);x.setAttribute("aria-pressed",x===t)});pos(false);var n=counts[t.textContent.trim()];flip(a,Math.min(10,n));flip(b,n)})})})();

/* magnetic buttons */
(function(){if(RM||!FINE)return;[].slice.call(document.querySelectorAll(".pill-o,.pill-d,.cb-link")).forEach(function(el){var R=25;
 el.addEventListener("mousemove",function(e){var r=el.getBoundingClientRect();var cx=r.left+r.width/2,cy=r.top+r.height/2;var dx=(e.clientX-cx)/r.width*10,dy=(e.clientY-cy)/r.height*8;el.style.setProperty("--mx",dx.toFixed(1)+"px");el.style.setProperty("--my",dy.toFixed(1)+"px")});
 el.addEventListener("mouseleave",function(){el.style.setProperty("--mx","0px");el.style.setProperty("--my","0px")})})})();

/* experience spine */
(function(){var exp=document.querySelector(".exp");if(!exp)return;var jobs=[].slice.call(exp.querySelectorAll(".job"));if(!jobs.length)return;
var sp=document.createElement("div");sp.className="spine";var fill=document.createElement("i");sp.appendChild(fill);exp.appendChild(sp);
function layout(){var e=exp.getBoundingClientRect();var f=jobs[0].getBoundingClientRect(),l=jobs[jobs.length-1];var lt=l.getBoundingClientRect();sp.style.top=(f.top-e.top+16)+"px";sp.style.height=(lt.top-f.top)+"px"}
function upd(){var e=sp.getBoundingClientRect();var mid=window.innerHeight*.6;var p=RM?1:Math.max(0,Math.min(1,(mid-e.top)/Math.max(e.height,1)));fill.style.height=(p*100)+"%";
 jobs.forEach(function(j){var y=j.getBoundingClientRect().top+16;j.classList.toggle("reached",RM||y<=mid)})}
layout();upd();window.addEventListener("resize",function(){layout();upd()});var tk=false;window.addEventListener("scroll",function(){if(tk)return;tk=true;requestAnimationFrame(function(){upd();tk=false})},{passive:true});
setTimeout(function(){layout();upd()},800)})();
})();

/* photo gallery lightbox */
(function(){var g=document.querySelector(".pgal");if(!g)return;var imgs=[].slice.call(g.querySelectorAll("img")),i=0,box=null,im=null,last=null;
function build(){box=document.createElement("div");box.className="lb";box.setAttribute("role","dialog");box.setAttribute("aria-modal","true");box.setAttribute("aria-label","Photo viewer");box.hidden=true;
box.innerHTML='<button class="lb-x" aria-label="Close">×</button><button class="lb-p" aria-label="Previous photo">‹</button><img alt=""><button class="lb-n" aria-label="Next photo">›</button>';document.body.appendChild(box);im=box.querySelector("img");
box.addEventListener("click",function(e){if(e.target===box||e.target.classList.contains("lb-x"))close()});box.querySelector(".lb-p").addEventListener("click",function(){go(-1)});box.querySelector(".lb-n").addEventListener("click",function(){go(1)})}
function show(){im.src=imgs[i].currentSrc||imgs[i].src;im.alt=imgs[i].alt}
function go(d){i=(i+d+imgs.length)%imgs.length;show()}
function open(n){if(!box)build();i=n;last=document.activeElement;show();box.hidden=false;document.documentElement.style.overflow="hidden";box.querySelector(".lb-x").focus()}
function close(){box.hidden=true;document.documentElement.style.overflow="";if(last)last.focus()}
imgs.forEach(function(el,n){el.tabIndex=0;el.setAttribute("role","button");el.addEventListener("click",function(){open(n)});el.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();open(n)}})});
document.addEventListener("keydown",function(e){if(!box||box.hidden)return;if(e.key==="Escape")close();else if(e.key==="ArrowRight")go(1);else if(e.key==="ArrowLeft")go(-1)})})();
