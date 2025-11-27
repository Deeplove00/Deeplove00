
function fakeSubmit(e){
  e.preventDefault();
  alert('Thanks! We will get back to you shortly.');
  return false;
}

document.addEventListener('click', function(e){
  const target = e.target.closest('[data-intent]');
  if(target){
    // simple client-side "event" log to show CTA tracking (no analytics)
    console.log('CTA click:', target.getAttribute('data-intent'));
  }
});
