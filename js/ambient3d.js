/**
 * DELTARUNE 3D CYBER WORLD AMBIENT BACKGROUND
 * Palette:
 *  - Background: #0b0b3b (Deep Dark Navy)
 *  - Primary Grid: #75fbed (Kris Cyan)
 *  - Particles & Soul: #eb0095 (Dark World Magenta / Soul Pink)
 *  - Accent Glow: #c7e3f2 (Ice Blue)
 */
(function (global) {
  'use strict';

  function initBackground3D(container) {
    if (!container) return { setSlideIndex() {}, destroy() {} };

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b0b3b);
    scene.fog = new THREE.FogExp2(0x0b0b3b, 0.025);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 3.5, 12);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Deltarune Lights
    scene.add(new THREE.AmbientLight(0xc7e3f2, 0.4));

    const lightCyan = new THREE.PointLight(0x75fbed, 1.8, 30);
    lightCyan.position.set(-6, 8, 4);
    scene.add(lightCyan);

    const lightPink = new THREE.PointLight(0xeb0095, 1.8, 30);
    lightPink.position.set(6, 6, 2);
    scene.add(lightPink);

    // 1. Cyber World Grid (Kris Cyan)
    const gridRows = 55, gridCols = 55;
    const waveGeo = new THREE.PlaneGeometry(40, 40, gridCols, gridRows);
    waveGeo.rotateX(-Math.PI / 2);

    const waveMat = new THREE.PointsMaterial({
      color: 0x75fbed,
      size: 0.09,
      transparent: true,
      opacity: 0.45
    });
    const wavePoints = new THREE.Points(waveGeo, waveMat);
    wavePoints.position.y = -1.6;
    scene.add(wavePoints);

    // 2. Deltarune Soul & Cyber Particles (Dark World Magenta & Ice Blue)
    const particleCount = 50;
    const particlesGroup = new THREE.Group();
    const sphereGeo = new THREE.SphereGeometry(0.09, 8, 8);

    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      let colorHex = 0x75fbed; // Kris Cyan
      if (i % 3 === 1) colorHex = 0xeb0095; // Soul Pink / Magenta
      if (i % 3 === 2) colorHex = 0xc7e3f2; // Ice Blue

      const mat = new THREE.MeshBasicMaterial({ color: colorHex });
      const mesh = new THREE.Mesh(sphereGeo, mat);

      const angle = Math.random() * Math.PI * 2;
      const radius = 2.5 + Math.random() * 6.5;
      mesh.position.set(
        Math.cos(angle) * radius,
        (Math.random() - 0.2) * 3.5,
        Math.sin(angle) * radius - 2
      );

      particlesGroup.add(mesh);
      particles.push({
        mesh,
        angle,
        radius,
        speed: (0.003 + Math.random() * 0.006) * (Math.random() > 0.5 ? 1 : -1),
        baseY: mesh.position.y
      });
    }
    scene.add(particlesGroup);

    // Camera viewpoints for each chapter index (0 to 6)
    const CAMERA_DESTS = [
      { pos: [0, 3.5, 12], rot: [-0.15, 0, 0] },         // Ch 1: Wide Portal
      { pos: [-3, 2.8, 10], rot: [-0.08, 0.12, 0] },     // Ch 2: Swarm Arena
      { pos: [2.5, 3.0, 9.5], rot: [-0.1, -0.15, 0] },   // Ch 3: Datacenter
      { pos: [0, 4.0, 8.5], rot: [-0.22, 0, 0] },        // Ch 4: 4-Pod Arena
      { pos: [0, 2.6, 9.5], rot: [-0.08, 0, 0] },        // Ch 5: Cyber Data Lab
      { pos: [-1.8, 2.5, 9.5], rot: [-0.05, 0.08, 0] },  // Ch 6: Scalability
      { pos: [0, 3.5, 12], rot: [-0.15, 0, 0] }          // Ch 7: Castle Town
    ];

    let targetCamPos = new THREE.Vector3(0, 3.5, 12);
    let targetCamRot = new THREE.Vector3(-0.15, 0, 0);
    let animId = null;
    let clock = new THREE.Clock();

    function setSlideIndex(idx) {
      const dest = CAMERA_DESTS[idx] || CAMERA_DESTS[0];
      targetCamPos.set(dest.pos[0], dest.pos[1], dest.pos[2]);
      targetCamRot.set(dest.rot[0], dest.rot[1], dest.rot[2]);
    }

    const posAttr = waveGeo.attributes.position;
    const initialY = new Float32Array(posAttr.count);
    for (let i = 0; i < posAttr.count; i++) initialY[i] = posAttr.getY(i);

    function animate() {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Cyber Grid Wave Motion
      for (let i = 0; i < posAttr.count; i++) {
        const x = posAttr.getX(i);
        const z = posAttr.getZ(i);
        const y = Math.sin(elapsedTime * 1.5 + x * 0.4 + z * 0.4) * 0.25;
        posAttr.setY(i, initialY[i] + y);
      }
      posAttr.needsUpdate = true;

      // Particle Motion
      for (const p of particles) {
        p.angle += p.speed;
        p.mesh.position.x = Math.cos(p.angle) * p.radius;
        p.mesh.position.z = Math.sin(p.angle) * p.radius - 2;
        p.mesh.position.y = p.baseY + Math.sin(elapsedTime * 2 + p.angle) * 0.3;
      }

      // Smooth Camera Transition
      camera.position.lerp(targetCamPos, 0.04);
      camera.rotation.x += (targetCamRot.x - camera.rotation.x) * 0.04;
      camera.rotation.y += (targetCamRot.y - camera.rotation.y) * 0.04;
      camera.rotation.z += (targetCamRot.z - camera.rotation.z) * 0.04;

      renderer.render(scene, camera);
    }

    animate();

    function onResize() {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    window.addEventListener('resize', onResize);

    return {
      setSlideIndex,
      destroy() {
        if (animId) cancelAnimationFrame(animId);
        window.removeEventListener('resize', onResize);
      }
    };
  }

  global.Background3D = { initBackground3D };
})(window);
