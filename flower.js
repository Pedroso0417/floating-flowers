for (let i = 0; i < 3; i++) {
      const p = document.createElement('div');
      p.className = 'petal';
      // random offsets
      const dx = (Math.random()*2-1) * window.innerWidth * 0.5 + 'px';
      const dy = -(Math.random()*window.innerHeight*0.5) + 'px';
      p.style.setProperty('--dx', dx);
      p.style.setProperty('--dy', dy);
      // stagger animation
      p.style.animationDelay = `${Math.random()*4}s`;
      document.body.appendChild(p);
    }
