/* RCHAT — NAVIGATION & FLUIDITÉ */
(()=>{'use strict';
 const file=(location.pathname.split('/').pop()||'index.html').toLowerCase();
 const aliases={'index.html':'home','profil.html':'profil','ia.html':'ia','defis.html':'defis','conversations.html':'conversations','premium.html':'premium','administrateur.html':'admin'};
 const current=aliases[file];
 document.body.classList.add('rchat-enter');
 document.querySelectorAll('header nav a, header .nav a, header .primary-nav a').forEach(a=>{
   const href=(a.getAttribute('href')||'').split('#')[0].toLowerCase();
   const target=href.split('/').pop();
   if(target===file){a.classList.add('active');a.setAttribute('aria-current','page');}
   else if(a.getAttribute('aria-current')==='page'){a.removeAttribute('aria-current');}
 });
 // Smoothly reveal same-site page transitions without delaying navigation.
 document.addEventListener('click',e=>{
   const a=e.target.closest('a[href]'); if(!a||e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
   const href=a.getAttribute('href'); if(!href||href.startsWith('#')||href.startsWith('mailto:')||href.startsWith('tel:')||a.target==='_blank'||a.hasAttribute('download'))return;
   let url;try{url=new URL(href,location.href)}catch(_){return}
   if(url.origin!==location.origin||url.pathname===location.pathname&&url.hash)return;
   if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
   // Keep navigation immediate: no artificial timeout or click interception.
   document.body.classList.add('rchat-leaving');
 },{passive:true});
 window.addEventListener('pageshow',()=>document.body.classList.remove('rchat-leaving'));
 // Give horizontally scrollable navigation a useful keyboard/focus experience.
 document.querySelectorAll('header nav,header .nav,header .primary-nav').forEach(nav=>{
   nav.setAttribute('aria-label',nav.getAttribute('aria-label')||'Navigation principale');
   nav.addEventListener('keydown',e=>{if(e.key==='End')nav.scrollTo({left:nav.scrollWidth,behavior:'smooth'});if(e.key==='Home')nav.scrollTo({left:0,behavior:'smooth'});});
 });
})();
