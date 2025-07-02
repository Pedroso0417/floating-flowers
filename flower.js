// for (let i = 0; i < 3; i++) {
//     const p = document.createElement('div');
//     p.className = 'petal';
    
//     // Random offsets (relative to the window size)
//     const dx = (Math.random() * 2 - 1) * window.innerWidth * 0.5 + 'px';
//     const dy = -(Math.random() * window.innerHeight * 0.5) + 'px';
    
//     // Setting custom properties (CSS variables)
//     p.style.setProperty('--dx', dx);
//     p.style.setProperty('--dy', dy);

//     // Stagger animation delay (random between 0 and 4 seconds)
//     p.style.animationDelay = `${Math.random() * 4}s`;

//     // Append to the document body
//     document.body.appendChild(p);
// }
for (let i = 0; i < 30; i++) {  // More petals for a fuller effect
    const p = document.createElement('div');
    p.className = 'petal';
    
    // Random offsets (relative to the window size)
    const dx = (Math.random() * 2 - 1) * window.innerWidth * 0.5 + 'px';
    const dy = -(Math.random() * window.innerHeight * 0.5) + 'px';
    
    // Setting custom properties (CSS variables)
    p.style.setProperty('--dx', dx);
    p.style.setProperty('--dy', dy);

    // Stagger animation delay (random between 0 and 4 seconds)
    p.style.animationDelay = `${Math.random() * 4}s`;

    // Append to the document body
    document.body.appendChild(p);
}
