(function(){
  const STORAGE_KEY='site-theme';
  function setTheme(t){
    document.documentElement.setAttribute('data-theme',t);
    localStorage.setItem(STORAGE_KEY,t);
    const b=document.getElementById('themeToggle');
    if(b){b.textContent=t==='dark'?'☀️ Light':'🌙 Dark';}
  }
  function init(){
    let t=localStorage.getItem(STORAGE_KEY)|| (window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
    setTheme(t);
    const btn=document.createElement('button');
    btn.id='themeToggle';btn.style='position:fixed;bottom:1rem;right:1rem;padding:.5rem .8rem;border-radius:.5rem;border:1px solid #ccc;cursor:pointer;z-index:999;';
    btn.textContent=t==='dark'?'☀️ Light':'🌙 Dark';
    btn.onclick=()=>setTheme(document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark');
    document.body.appendChild(btn);
  }
  document.addEventListener('DOMContentLoaded',init);
})();