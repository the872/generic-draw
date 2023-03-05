const srcList = [`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <rect x="0" y="0" width="400" height="400" fill="#ffffff"/>
  <circle cx="50" cy="50" r="40" fill="#f44336"/>
  <circle cx="150" cy="50" r="40" fill="#9c27b0"/>
  <circle cx="250" cy="50" r="40" fill="#2196f3"/>
  <circle cx="350" cy="50" r="40" fill="#4caf50"/>
  <circle cx="50" cy="150" r="40" fill="#ffc107"/>
  <circle cx="150" cy="150" r="40" fill="#ff5722"/>
  <circle cx="250" cy="150" r="40" fill="#795548"/>
  <circle cx="350" cy="150" r="40" fill="#00bcd4"/>
  <circle cx="50" cy="250" r="40" fill="#673ab7"/>
  <circle cx="150" cy="250" r="40" fill="#8bc34a"/>
  <circle cx="250" cy="250" r="40" fill="#607d8b"/>
  <circle cx="350" cy="250" r="40" fill="#f44336"/>
  <circle cx="50" cy="350" r="40" fill="#9c27b0"/>
  <circle cx="150" cy="350" r="40" fill="#2196f3"/>
  <circle cx="250" cy="350" r="40" fill="#4caf50"/>
  <circle cx="350" cy="350" r="40" fill="#ffc107"/>
  <path d="M50 50 L350 50" stroke="#000000" stroke-width="10" fill="none"/>
  <path d="M50 150 L350 150" stroke="#000000" stroke-width="10" fill="none"/>
  <path d="M50 250 L350 250" stroke="#000000" stroke-width="10" fill="none"/>
  <path d="M50 350 L350 350" stroke="#000000" stroke-width="10" fill="none"/>
  <path d="M50 50 L50 350" stroke="#000000" stroke-width="10" fill="none"/>
  <path d="M150 50 L150 350" stroke="#000000" stroke-width="10" fill="none"/>
  <path d="M250 50 L250 350" stroke="#000000" stroke-width="10" fill="none"/>
  <path d="M350 50 L350 350" stroke="#000000" stroke-width="10" fill="none"/>
</svg>`,`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
<!-- Background -->
<rect x="0" y="0" width="400" height="400" fill="#f4f4f4"/>
<!-- Circles -->
<circle cx="75" cy="75" r="50" fill="#4a4a4a"/>
<circle cx="225" cy="75" r="50" fill="#c7c7c7"/>
<circle cx="75" cy="225" r="50" fill="#c7c7c7"/>
<circle cx="225" cy="225" r="50" fill="#4a4a4a"/>
<!-- Paths -->
<path d="M75 75 C100 25 175 25 200 75" stroke="#ffffff" stroke-width="20" fill="none"/>
<path d="M225 75 C250 25 325 25 300 75" stroke="#ffffff" stroke-width="20" fill="none"/>
<path d="M75 225 C100 275 175 275 200 225" stroke="#ffffff" stroke-width="20" fill="none"/>
<path d="M225 225 C250 275 325 275 300 225" stroke="#ffffff" stroke-width="20" fill="none"/>
</svg>`,`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
<!-- Background -->
<rect x="0" y="0" width="400" height="400" fill="#fcf8f3"/>
<!-- Circles -->
<circle cx="75" cy="150" r="50" fill="#f4a582"/>
<circle cx="150" cy="75" r="50" fill="#9ebcda"/>
<circle cx="225" cy="150" r="50" fill="#c7e9c0"/>
<circle cx="300" cy="75" r="50" fill="#e28413"/>
<circle cx="75" cy="250" r="50" fill="#9ebcda"/>
<circle cx="150" cy="325" r="50" fill="#c7e9c0"/>
<circle cx="225" cy="250" r="50" fill="#e28413"/>
<circle cx="300" cy="325" r="50" fill="#f4a582"/>
<!-- Paths -->
<path d="M125 100 C125 50 200 50 200 100" stroke="#f4a582" stroke-width="20" fill="none"/>
<path d="M200 125 C250 125 250 200 200 200" stroke="#9ebcda" stroke-width="20" fill="none"/>
<path d="M275 100 C275 50 200 50 200 100" stroke="#c7e9c0" stroke-width="20" fill="none"/>
<path d="M200 175 C250 175 250 250 200 250" stroke="#e28413" stroke-width="20" fill="none"/>
<path d="M75 225 C75 275 150 275 150 225" stroke="#9ebcda" stroke-width="20" fill="none"/>
<path d="M150 300 C200 300 200 375 150 375" stroke="#c7e9c0" stroke-width="20" fill="none"/>
<path d="M225 225 C225 275 300 275 300 225" stroke="#e28413" stroke-width="20" fill="none"/>
<path d="M300 300 C250 300 250 375 300 375" stroke="#f4a582" stroke-width="20" fill="none"/>
</svg>
`,`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
<!-- Background -->
<rect x="0" y="0" width="400" height="400" fill="#2c3e50"/>
<!-- Circles -->
<circle cx="120" cy="120" r="50" fill="#f39c12" stroke="#ffffff" stroke-width="5"/>
<circle cx="120" cy="280" r="50" fill="#9b59b6" stroke="#ffffff" stroke-width="5"/>
<circle cx="280" cy="120" r="50" fill="#e74c3c" stroke="#ffffff" stroke-width="5"/>
<circle cx="280" cy="280" r="50" fill="#2ecc71" stroke="#ffffff" stroke-width="5"/>
<!-- Paths -->
<path d="M170 170 L230 230" stroke="#ffffff" stroke-width="5" fill="none"/>
<path d="M170 230 L230 170" stroke="#ffffff" stroke-width="5" fill="none"/>
<path d="M120 120 L280 280" stroke="#ffffff" stroke-width="5" fill="none"/>
<path d="M120 280 L280 120" stroke="#ffffff" stroke-width="5" fill="none"/>
</svg>
`,`
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <!-- Background -->
  <rect x="0" y="0" width="400" height="400" fill="#f9f7f7"/>
  <!-- Outer Circle -->
  <circle cx="200" cy="200" r="150" fill="#e9e9e9" stroke="#6b6b6b" stroke-width="10"/>
  <!-- Smaller Circles -->
  <circle cx="125" cy="125" r="30" fill="#e28413"/>
  <circle cx="125" cy="275" r="30" fill="#9ebcda"/>
  <circle cx="275" cy="125" r="30" fill="#f4a582"/>
  <circle cx="275" cy="275" r="30" fill="#c7e9c0"/>
  <!-- Inner Circles -->
  <circle cx="200" cy="200" r="90" fill="#f4a582"/>
  <circle cx="200" cy="200" r="70" fill="#9ebcda"/>
  <circle cx="200" cy="200" r="50" fill="#c7e9c0"/>
  <circle cx="200" cy="200" r="30" fill="#e28413"/>
</svg>
`,`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
<!-- Background -->
<rect x="0" y="0" width="400" height="400" fill="#2b2b2b"/>
<!-- Outer Circle -->
<circle cx="200" cy="200" r="160" fill="#a6dcef" stroke="#1c1c1c" stroke-width="10"/>
<!-- Smaller Circles -->
<circle cx="150" cy="150" r="50" fill="#f4a582"/>
<circle cx="250" cy="250" r="50" fill="#f4a582"/>
<circle cx="150" cy="250" r="50" fill="#f4a582"/>
<circle cx="250" cy="150" r="50" fill="#f4a582"/>
</svg>
`,`<svg xmlns="http://www.w3.org/2000/svg" width="2400" height="1200" viewBox="0 0 2400 1200">
<!-- Background -->
<rect x="0" y="0" width="2400" height="1200" fill="#faa077"/>
<rect x="0" y="600" width="2400" height="600" fill="#fbd1a2"/>
<!-- Sun -->
<circle cx="200" cy="200" r="150" fill="#f8d4a3"/>
<circle cx="200" cy="200" r="130" fill="#fbbf82"/>
<circle cx="200" cy="200" r="110" fill="#f8d4a3"/>
<circle cx="200" cy="200" r="90" fill="#fbbf82"/>
<circle cx="200" cy="200" r="70" fill="#f8d4a3"/>
<!-- Cars -->
<rect x="400" y="450" width="200" height="100" fill="#ffffff"/>
<rect x="1000" y="450" width="200" height="100" fill="#ffffff"/>
<rect x="430" y="500" width="140" height="50" fill="#f15a22"/>
<rect x="1030" y="500" width="140" height="50" fill="#f15a22"/>
<rect x="470" y="460" width="40" height="40" fill="#4d4d4d"/>
<rect x="1070" y="460" width="40" height="40" fill="#4d4d4d"/>
<rect x="510" y="460" width="40" height="40" fill="#4d4d4d"/>
<rect x="1110" y="460" width="40" height="40" fill="#4d4d4d"/>
<!-- Road -->
<rect x="0" y="750" width="2400" height="300" fill="#6b6b6b"/>
<rect x="100" y="800" width="2200" height="200" fill="#ffffff"/>
<rect x="100" y="850" width="2200" height="100" fill="#ebebeb"/>
<rect x="400" y="800" width="200" height="200" fill="#b7b7b7"/>
<rect x="1000" y="800" width="200" height="200" fill="#b7b7b7"/>
<!-- Mountains -->
<path d="M0,1200 0,800 400,1100Z" fill="#c7c7c7"/>
<path d="M600,1200 400,1000 800,900Z" fill="#c7c7c7"/>
<path d="M800,1200 600,950 1000,1000Z" fill="#c7c7c7"/>
<path d="M1600,1200 1000,900 1200,1100Z" fill="#c7c7c7"/>
<path d="M2200,1200 2000,1000 2400,900" fill="#c7c7c7" />
<path d="M2400,1200 2000,950 2400,800Z" fill="#c7c7c7"/>
<!-- Sun rays -->
<line x1="200" y1="50" x2="200" y2="350" stroke="#fbbf82" stroke-width="30"/>
<line x1="50" y1="200" x2="350" y2="200" stroke="#fbbf82" stroke-width="30"/>
<line x1="106" y1="106" x2="294" y2="294" stroke="#fbbf82" stroke-width="30"/>
<line x1="106" y1="294" x2="294" y2="106" stroke="#fbbf82" stroke-width="30"/>
</svg>
`,`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
<!-- Background -->
<rect x="0" y="0" width="400" height="400" fill="#fdfdfd"/>
<!-- Circles -->
<circle cx="100" cy="100" r="60" fill="#1abc9c"/>
<circle cx="300" cy="100" r="60" fill="#f1c40f"/>
<circle cx="100" cy="300" r="60" fill="#e74c3c"/>
<circle cx="300" cy="300" r="60" fill="#3498db"/>
<!-- Paths -->
<path d="M100 100 L300 100" stroke="#fdfdfd" stroke-width="20" fill="none"/>
<path d="M300 100 L300 300" stroke="#fdfdfd" stroke-width="20" fill="none"/>
<path d="M300 300 L100 300" stroke="#fdfdfd" stroke-width="20" fill="none"/>
<path d="M100 300 L100 100" stroke="#fdfdfd" stroke-width="20" fill="none"/>
</svg>
`,`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
<!-- Background -->
<rect x="0" y="0" width="400" height="400" fill="#ffffff"/>
<!-- Circles -->
<circle cx="50" cy="50" r="40" fill="#f44336"/>
<circle cx="150" cy="50" r="40" fill="#9c27b0"/>
<circle cx="250" cy="50" r="40" fill="#2196f3"/>
<circle cx="350" cy="50" r="40" fill="#4caf50"/>
<circle cx="50" cy="150" r="40" fill="#ffc107"/>
<circle cx="150" cy="150" r="40" fill="#ff5722"/>
<circle cx="250" cy="150" r="40" fill="#795548"/>
<circle cx="350" cy="150" r="40" fill="#00bcd4"/>
<circle cx="50" cy="250" r="40" fill="#673ab7"/>
<circle cx="150" cy="250" r="40" fill="#8bc34a"/>
<circle cx="250" cy="250" r="40" fill="#607d8b"/>
<circle cx="350" cy="250" r="40" fill="#f44336"/>
<circle cx="50" cy="350" r="40" fill="#9c27b0"/>
<circle cx="150" cy="350" r="40" fill="#2196f3"/>
<circle cx="250" cy="350" r="40" fill="#4caf50"/>
<circle cx="350" cy="350" r="40" fill="#ffc107"/>
<!-- Paths -->
<path d="M50 50 L350 50" stroke="#000000" stroke-width="10" fill="none"/>
<path d="M50 150 L350 150" stroke="#000000" stroke-width="10" fill="none"/>
<path d="M50 250 L350 250" stroke="#000000" stroke-width="10" fill="none"/>
<path d="M50 350 L350 350" stroke="#000000" stroke-width="10" fill="none"/>
<path d="M50 50 L50 350" stroke="#000000" stroke-width="10" fill="none"/>
<path d="M150 50 L150 350" stroke="#000000" stroke-width="10" fill="none"/>
<path d="M250 50 L250 350" stroke="#000000" stroke-width="10" fill="none"/>
<path d="M350 50 L350 350" stroke="#000000" stroke-width="10" fill="none"/>
</svg>
`,`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
<rect x="50" y="50" width="50" height="50" fill="#ff1c1c" />
<rect x="300" y="50" width="50" height="50" fill="#1c57ff" />
<rect x="50" y="300" width="50" height="50" fill="#ffff00" />
<rect x="300" y="300" width="50" height="50" fill="#00ff00" />
<path d="M 75 75 Q 125 50 175 75 T 275 75" stroke="#fff" stroke-width="8" fill="none" />
<path d="M 325 75 Q 275 50 225 75 T 125 75" stroke="#fff" stroke-width="8" fill="none" />
<path d="M 75 325 Q 125 350 175 325 T 275 325" stroke="#fff" stroke-width="8" fill="none" />
<path d="M 325 325 Q 275 350 225 325 T 125 325" stroke="#fff" stroke-width="8" fill="none" />
<circle cx="125" cy="200" r="50" fill="#ff1c1c" />
<circle cx="275" cy="200" r="50" fill="#1c57ff" />
<path d="M 200 50 Q 225 75 250 50 Q 275 25 300 50 L 325 75 Q 300 100 325 125 Q 350 150 325 175 L 300 200 Q 275 225 250 200 Q 225 175 200 200 L 175 175 Q 200 150 175 125 Q 150 100 175 75 L 200 50" fill="#ffff00" />
<path d="M 200 350 Q 225 325 250 350 Q 275 375 300 350 L 325 325 Q 300 300 325 275 Q 350 250 325 225 L 300 200 Q 275 175 250 200 Q 225 225 200 200 L 175 225 Q 200 250 175 275 Q 150 300 175 325 L 200 350" fill="#00ff00" />
<path d="M 200 75 Q 150 125 200 175 Q 250 125 200 75 Z" fill="#1c57ff" />
<path d="M 200 325 Q 150 275 200 225 Q 250 275 200 325 Z" fill="#ff1c1c" />
</svg>
`,`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
<!-- Background -->
<rect x="0" y="0" width="400" height="400" fill="#333333"/>
<!-- Rectangles -->
<rect x="50" y="50" width="300" height="300" fill="#ffca28" stroke="#ffffff" stroke-width="10"/>
<rect x="100" y="100" width="200" height="200" fill="#4caf50" stroke="#ffffff" stroke-width="10"/>
<rect x="150" y="150" width="100" height="100" fill="#2196f3" stroke="#ffffff" stroke-width="10"/>
<!-- Triangles -->
<path d="M150 150 L250 150 L200 50 Z" fill="#e91e63" stroke="#ffffff" stroke-width="10"/>
<path d="M150 250 L250 250 L200 350 Z" fill="#f44336" stroke="#ffffff" stroke-width="10"/>
<!-- Paths -->
<path d="M50 200 L150 200" stroke="#ffffff" stroke-width="10" fill="none"/>
<path d="M250 200 L350 200" stroke="#ffffff" stroke-width="10" fill="none"/>
<path d="M200 50 L200 150" stroke="#ffffff" stroke-width="10" fill="none"/>
<path d="M200 250 L200 350" stroke="#ffffff" stroke-width="10" fill="none"/>
</svg>
`,`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
<rect x="0" y="0" width="400" height="400" fill="#3d3d3d"/>
<circle cx="100" cy="200" r="60" fill="#e74c3c"/>
<rect x="190" y="50" width="60" height="100" fill="#f1c40f"/>
<circle cx="300" cy="250" r="80" fill="#3498db"/>
<circle cx="70" cy="70" r="30" fill="#9b59b6"/>
<rect x="230" y="200" width="90" height="60" fill="#2ecc71"/>
<circle cx="250" cy="90" r="50" fill="#e67e22"/>
<rect x="50" y="300" width="100" height="40" fill="#95a5a6"/>
<circle cx="350" cy="50" r="70" fill="#f39c12"/>
</svg>
`,`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
<rect x="0" y="0" width="400" height="400" fill="#222"/>
<circle cx="100" cy="100" r="80" fill="#f1c40f"/>
<rect x="230" y="50" width="60" height="100" fill="#9b59b6"/>
<circle cx="300" cy="300" r="60" fill="#e74c3c"/>
<circle cx="50" cy="200" r="40" fill="#3498db"/>
<rect x="150" y="150" width="70" height="60" fill="#2ecc71"/>
<circle cx="250" cy="200" r="50" fill="#f39c12"/>
<rect x="50" y="300" width="100" height="40" fill="#95a5a6"/>
<circle cx="350" cy="50" r="70" fill="#e67e22"/>
</svg>
`,`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
<rect x="0" y="0" width="400" height="400" fill="#F5F5F5"/>
<circle cx="100" cy="100" r="10" fill="#3F51B5"/>
<circle cx="120" cy="80" r="5" fill="#F44336"/>
<circle cx="150" cy="130" r="7" fill="#4CAF50"/>
<circle cx="180" cy="80" r="12" fill="#FF9800"/>
<circle cx="210" cy="100" r="15" fill="#9C27B0"/>
<circle cx="260" cy="120" r="20" fill="#2196F3"/>
<circle cx="300" cy="80" r="25" fill="#FFC107"/>
<circle cx="340" cy="100" r="8" fill="#795548"/>
<circle cx="370" cy="150" r="18" fill="#FF5722"/>
<rect x="150" y="200" width="60" height="30" fill="#4CAF50"/>
<rect x="250" y="250" width="40" height="20" fill="#FF9800"/>
<rect x="300" y="320" width="80" height="50" fill="#F44336"/>
<rect x="80" y="300" width="70" height="40" fill="#9C27B0"/>
</svg>
`,`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
<!-- Background -->
<rect x="0" y="0" width="400" height="400" fill="#f5f5f5"/>
<!-- Circles -->
<circle cx="150" cy="150" r="50" fill="#4caf50" stroke="#f5f5f5" stroke-width="10"/>
<circle cx="250" cy="150" r="50" fill="#f44336" stroke="#f5f5f5" stroke-width="10"/>
<circle cx="150" cy="250" r="50" fill="#2196f3" stroke="#f5f5f5" stroke-width="10"/>
<circle cx="250" cy="250" r="50" fill="#9c27b0" stroke="#f5f5f5" stroke-width="10"/>
<!-- Paths -->
<path d="M100 150 L200 150" stroke="#f5f5f5" stroke-width="10" fill="none"/>
<path d="M150 100 L150 200" stroke="#f5f5f5" stroke-width="10" fill="none"/>
<path d="M250 100 L250 200" stroke="#f5f5f5" stroke-width="10" fill="none"/>
<path d="M200 250 L300 250" stroke="#f5f5f5" stroke-width="10" fill="none"/>
<path d="M250 200 L250 300" stroke="#f5f5f5" stroke-width="10" fill="none"/>
<path d="M150 200 L150 300" stroke="#f5f5f5" stroke-width="10" fill="none"/>
<path d="M100 250 L200 250" stroke="#f5f5f5" stroke-width="10" fill="none"/>
<path d="M150 300 L150 400" stroke="#f5f5f5" stroke-width="10" fill="none"/>
</svg>
`]

export default srcList;