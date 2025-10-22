
// Main JS for navbar active link and simple mobile toggle
document.addEventListener('DOMContentLoaded',function(){
  // set active link based on current filename
  const path = window.location.pathname.split("/").pop() || 'index.html';
  document.querySelectorAll('.navlinks a').forEach(a=>{
    if(a.getAttribute('href')===path) a.classList.add('active');
  });

  // mobile toggle
  const toggle = document.getElementById('mobile-toggle');
  const nav = document.querySelector('.navlinks');
  if(toggle){
    toggle.addEventListener('click',()=>{
      if(nav.style.display==='flex'){ nav.style.display='none'; }
      else { nav.style.display='flex'; nav.style.flexDirection='column'; }
    });
  }

  // simple contact form validation
  const form = document.querySelector('#contact-form');
  if(form){
    form.addEventListener('submit', e=>{
      const name = form.querySelector('input[name="name"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();
      const msg = form.querySelector('textarea[name="message"]').value.trim();
      if(!name || !email || !msg){
        e.preventDefault();
        alert('Please complete all fields before sending.');
      }
    });
  }
});

const btn=document.getElementById('theme-toggle');
  const body=document.body;
  let t=localStorage.getItem('theme')||'dark';
  if(t==='light')body.classList.add('light');
  btn.textContent=body.classList.contains('light')?'🌞':'🌙';
  btn.addEventListener('click',()=>{
    body.classList.toggle('light');
    const mode=body.classList.contains('light')?'light':'dark';
    localStorage.setItem('theme',mode);
    btn.textContent=mode==='light'?'🌞':'🌙';
  });

const downloadBtn = document.getElementById('Resume');

        downloadBtn.addEventListener('click', function() {
            downloadBtn.href = resumeUrl;});
