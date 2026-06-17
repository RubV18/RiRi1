/* ============================================================
   SHELL CONDIVISO - logica Broccoletto + cuori
   ============================================================ */

// --- markup mascotte iniettato (cosi' non va ripetuto in ogni HTML) ---
function mountBrocco(){
  if(document.getElementById('brocco')) return document.getElementById('brocco');
  const b=document.createElement('div');
  b.id='brocco';
  b.innerHTML=`
    <div class="pix ciuffo"></div>
    <div class="pix bub b6"></div>
    <div class="pix bub b7"></div>
    <div class="pix bub b1"></div>
    <div class="pix bub b3"></div>
    <div class="pix bub d b4"></div>
    <div class="pix bub d b5"></div>
    <div class="pix bub b2"></div>
    <div class="pix gambo"></div>
    <div class="pix gambo-l"></div>
    <div class="pix gambo-r"></div>
    <div class="pix occhio l"><div class="pupilla"></div></div>
    <div class="pix occhio r"><div class="pupilla"></div></div>
    <div class="pix bocca"></div>
    <div class="pix pozza" id="pozza"></div>
    <div class="pix lacrima l"></div>
    <div class="pix lacrima r"></div>`;
  document.body.appendChild(b);
  return b;
}

// --- stato mascotte ---
function setMood(el,m){ el.className=m; }

// --- cuori al tocco ---
function spawnHeart(x,y,opts={}){
  const h=document.createElement('div');
  h.className='heartfx';
  h.textContent=opts.symbol||'♥';
  const dx=(Math.random()-0.5)*40, dy=(Math.random()-0.5)*20;
  h.style.left=(x+dx)+'px';h.style.top=(y+dy)+'px';
  h.style.fontSize=(opts.size||16+Math.random()*14)+'px';
  h.style.color=opts.color||(Math.random()>0.5?'var(--giallo)':'var(--rosa-medio)');
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),1000);
}
function tapHearts(x,y){ const n=3+Math.floor(Math.random()*2); for(let i=0;i<n;i++) spawnHeart(x,y); }
function enableTouchHearts(){
  document.addEventListener('pointerdown',e=>tapHearts(e.clientX,e.clientY));
}

// --- lettura scelta dalla URL (?v=A | ?v=B) ---
function getVariant(){
  const p=new URLSearchParams(location.search);
  return p.get('v')==='B'?'B':'A';
}
