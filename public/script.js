document.addEventListener('DOMContentLoaded', async () => {
    const linksContainer = document.getElementById('links'); // usa o ID certo!
  
    try {
      const res = await fetch('http://localhost:5000/api/links');
      const links = await res.json();
  
      linksContainer.innerHTML = '';
  
      links.forEach(link => {
        const a = document.createElement('a');
        a.className = 'link-item';
        a.href = link.url;
        a.textContent = link.title;
        linksContainer.appendChild(a);
      });
    } catch (err) {
      console.error('Erro ao carregar os links:', err);
    }
  });
  