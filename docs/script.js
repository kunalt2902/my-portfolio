function toggleMenu(){
  const nav = document.querySelector('nav');
  if(!nav) return;
  nav.classList.toggle('open');
}
document.getElementById('year').textContent = new Date().getFullYear();
