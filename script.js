const header=document.querySelector('[data-header]'),button=document.querySelector('[data-menu-toggle]'),nav=document.querySelector('[data-nav-links]');
const updateHeader=()=>header?.classList.toggle('scrolled',scrollY>16);updateHeader();addEventListener('scroll',updateHeader,{passive:true});
button?.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!open));button.setAttribute('aria-label',open?'Open navigation':'Close navigation');button.classList.toggle('active',!open);nav?.classList.toggle('open',!open)});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{button?.setAttribute('aria-expanded','false');button?.setAttribute('aria-label','Open navigation');button?.classList.remove('active');nav.classList.remove('open')}));
addEventListener('keydown',event=>{if(event.key==='Escape'&&nav?.classList.contains('open')){button.click();button.focus()}});
const items=document.querySelectorAll('.reveal'),reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduced||!('IntersectionObserver'in window))items.forEach(item=>item.classList.add('visible'));else{const observer=new IntersectionObserver((entries,o)=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');o.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -40px'});items.forEach(item=>observer.observe(item))}
const year=document.querySelector('[data-year]');if(year)year.textContent=new Date().getFullYear();
