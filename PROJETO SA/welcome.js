const loading = document.getElementById('loading');
const content = document.getElementById('content');

setTimeout(function() {
  loading.style.display = 'none';
  content.style.display = 'block';
}, 5000); 
