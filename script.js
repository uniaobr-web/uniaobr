const obs = new IntersectionObserver(entries => {
  entries.forEach((e,i) => {
    if(e.isIntersecting){ setTimeout(()=>e.target.classList.add('on'), i*100); obs.unobserve(e.target); }
  });
},{threshold:.08});
document.querySelectorAll('.rv').forEach(el=>obs.observe(el));