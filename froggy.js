addEventListener('fetch', event => {
  event.respondWith(
    fetch('https://raw.githubusercontent.com/code-andrewy/jumpman64beta/refs/heads/main/Froggy.html')
      .then(response => response.text())
      .then(html => new Response(html, { headers: { 'Content-Type': 'text/html' } }))
  );
});
