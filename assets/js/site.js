// TERRA Lab site interactions
(function(){
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if(toggle && links){
    toggle.addEventListener('click', function(){ links.classList.toggle('open'); });
    links.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ links.classList.remove('open'); });
    });
  }

  // Back to top
  var top = document.getElementById('toTop');
  if(top){
    window.addEventListener('scroll', function(){
      top.classList.toggle('show', window.scrollY > 400);
    });
    top.addEventListener('click', function(){ window.scrollTo({top:0,behavior:'smooth'}); });
  }

  // Reveal on scroll
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:0.12});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

  // Publication filter
  var chips = document.querySelectorAll('.filterbar .chip');
  if(chips.length){
    chips.forEach(function(chip){
      chip.addEventListener('click', function(){
        chips.forEach(function(c){ c.classList.remove('active'); });
        chip.classList.add('active');
        var f = chip.getAttribute('data-filter');
        document.querySelectorAll('.publist .pub').forEach(function(p){
          var cats = (p.getAttribute('data-cat')||'');
          p.style.display = (f==='all' || cats.indexOf(f)>-1) ? '' : 'none';
        });
      });
    });
  }
})();
