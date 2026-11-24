/**
 * DELTARUNE 3D BENCHMARK SIMULATION ARENA (4 PODS SIDE-BY-SIDE)
 * Pod 1: Firefly (FA) - Kris Cyan #75fbed
 * Pod 2: Bat (BA) - Dark World Magenta #eb0095
 * Pod 3: HGACO (IEEE 2025) - Cyber Teal #4ce6cf
 * Pod 4: FireBat (Hybrid) - Gold #ffde00
 */
(function (global) {
  'use strict';

  function initSimulation(container) {
    if (!container) return { setFocusMode() {}, start() {}, pause() {}, reset() {}, isRunning() { return false; }, destroy() {} };

    let width = container.clientWidth || 700;
    let height = container.clientHeight || 420;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050524);
    scene.fog = new THREE.FogExp2(0x050524, 0.022);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 7.5, 13.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Lighting
    scene.add(new THREE.AmbientLight(0xc7e3f2, 0.5));
    const mainLight = new THREE.DirectionalLight(0xffffff, 0.85);
    mainLight.position.set(5, 14, 8);
    scene.add(mainLight);

    const pCyan = new THREE.PointLight(0x75fbed, 1.6, 25);
    pCyan.position.set(-6, 6, 2);
    scene.add(pCyan);

    const pPink = new THREE.PointLight(0xeb0095, 1.6, 25);
    pPink.position.set(-2, 6, 2);
    scene.add(pPink);

    const pTeal = new THREE.PointLight(0x4ce6cf, 1.6, 25);
    pTeal.position.set(2, 6, 2);
    scene.add(pTeal);

    const pGold = new THREE.PointLight(0xffde00, 1.8, 25);
    pGold.position.set(6, 6, 2);
    scene.add(pGold);

    // Platform Base
    const floorGeo = new THREE.CylinderGeometry(9.5, 10.0, 0.35, 48);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x090b3b, roughness: 0.6, metalness: 0.8 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.position.y = -1.2;
    scene.add(floor);

    // Cyber Grid Floor
    const grid = new THREE.GridHelper(18, 18, 0x75fbed, 0x090b3b);
    grid.position.y = -1.02;
    scene.add(grid);

    // 4 ALGORITHM PODS CONFIGURATIONS
    const podConfigs = [
      {
        id: 'fa',
        name: 'Firefly (FA)',
        colorHex: 0x75fbed,
        centerX: -6.0,
        initialH: [3.4, 2.6, 2.0, 1.4],
        finalH: [3.0, 2.4, 2.0, 1.6],
        makespan: 19.3,
        doi: 0.185
      },
      {
        id: 'ba',
        name: 'Bat (BA)',
        colorHex: 0xeb0095,
        centerX: -2.0,
        initialH: [3.6, 2.2, 1.6, 0.8],
        finalH: [3.5, 2.0, 1.6, 0.9],
        makespan: 17.8,
        doi: 0.240
      },
      {
        id: 'hgaco',
        name: 'HGACO (IEEE 2025)',
        colorHex: 0x4ce6cf,
        centerX: 2.0,
        initialH: [3.5, 2.5, 1.8, 1.2],
        finalH: [3.7, 2.6, 1.9, 1.1],
        makespan: 21.4,
        doi: 0.554
      },
      {
        id: 'fb',
        name: 'FireBat (Hybrid)',
        colorHex: 0xffde00,
        centerX: 6.0,
        initialH: [3.5, 2.2, 1.6, 0.8],
        finalH: [2.1, 2.1, 2.1, 2.1],
        makespan: 15.4,
        doi: 0.071
      }
    ];

    const pods = [];

    podConfigs.forEach((cfg) => {
      const podGroup = new THREE.Group();
      podGroup.position.set(cfg.centerX, -1.0, 0);

      // Base ring pedestal
      const ped = new THREE.Mesh(
        new THREE.CylinderGeometry(1.6, 1.75, 0.18, 32),
        new THREE.MeshStandardMaterial({ color: 0x0b0b3b, roughness: 0.4, metalness: 0.8 })
      );
      ped.position.y = 0.09;
      podGroup.add(ped);

      // Glowing border ring
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(1.62, 1.72, 32),
        new THREE.MeshBasicMaterial({ color: cfg.colorHex, side: THREE.DoubleSide })
      );
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.19;
      podGroup.add(ring);

      // 4 VM Bars per Pod
      const vmBars = [];
      const offsetsX = [-0.9, -0.3, 0.3, 0.9];

      for (let i = 0; i < 4; i++) {
        const initialH = cfg.initialH[i];
        const mat = new THREE.MeshStandardMaterial({
          color: cfg.colorHex,
          emissive: cfg.colorHex,
          emissiveIntensity: 0.35,
          roughness: 0.2
        });

        const bar = new THREE.Mesh(new THREE.BoxGeometry(0.44, 1, 0.44), mat);
        bar.scale.y = initialH;
        bar.position.set(offsetsX[i], (initialH / 2) + 0.19, 0);
        podGroup.add(bar);

        vmBars.push({ mesh: bar, initialH, finalH: cfg.finalH[i], currentH: initialH });
      }

      scene.add(podGroup);

      pods.push({
        cfg,
        group: podGroup,
        bars: vmBars
      });
    });

    // Camera Focus Modes
    const FOCUS_MODES = {
      all: { target: new THREE.Vector3(0, 0, 0), pos: new THREE.Vector3(0, 7.5, 13.5) },
      fa: { target: new THREE.Vector3(-6.0, 0.5, 0), pos: new THREE.Vector3(-6.0, 4.5, 7.5) },
      ba: { target: new THREE.Vector3(-2.0, 0.5, 0), pos: new THREE.Vector3(-2.0, 4.5, 7.5) },
      hgaco: { target: new THREE.Vector3(2.0, 0.5, 0), pos: new THREE.Vector3(2.0, 4.5, 7.5) },
      fb: { target: new THREE.Vector3(6.0, 0.5, 0), pos: new THREE.Vector3(6.0, 4.5, 7.5) }
    };

    let targetCamPos = FOCUS_MODES.all.pos.clone();
    let targetControlsTarget = FOCUS_MODES.all.target.clone();

    function setFocusMode(modeKey) {
      const mode = FOCUS_MODES[modeKey] || FOCUS_MODES.all;
      targetCamPos.copy(mode.pos);
      targetControlsTarget.copy(mode.target);
    }

    // Simulation State
    let isSimRunning = false;
    let simProgress = 0; // 0 to 1
    let onProgressCallback = null;

    function startSimulation(onProgress) {
      isSimRunning = true;
      onProgressCallback = onProgress;
    }

    function pauseSimulation() {
      isSimRunning = false;
    }

    function resetSimulation() {
      isSimRunning = false;
      simProgress = 0;

      pods.forEach((pod) => {
        pod.bars.forEach((b) => {
          b.currentH = b.initialH;
          b.mesh.scale.y = b.initialH;
          b.mesh.position.y = (b.initialH / 2) + 0.19;
        });
      });
    }

    let animId = null;
    const clock = new THREE.Clock();

    function animate() {
      animId = requestAnimationFrame(animate);

      // Simulation Iteration Progress
      if (isSimRunning && simProgress < 1.0) {
        simProgress += 0.008; // ~3 seconds to complete
        if (simProgress > 1.0) simProgress = 1.0;

        pods.forEach((pod) => {
          pod.bars.forEach((b) => {
            const h = b.initialH + (b.finalH - b.initialH) * simProgress;
            b.currentH = h;
            b.mesh.scale.y = h;
            b.mesh.position.y = (h / 2) + 0.19;
          });
        });

        if (typeof onProgressCallback === 'function') {
          const stepInt = Math.floor(simProgress * 100);
          onProgressCallback(stepInt, 100);
        }
      }

      // Smooth Camera & Controls Lerp
      camera.position.lerp(targetCamPos, 0.05);
      controls.target.lerp(targetControlsTarget, 0.05);
      controls.update();

      renderer.render(scene, camera);
    }

    animate();

    function onResize() {
      if (!container) return;
      width = container.clientWidth || 700;
      height = container.clientHeight || 420;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    window.addEventListener('resize', onResize);

    return {
      setFocusMode,
      start: startSimulation,
      pause: pauseSimulation,
      reset: resetSimulation,
      isRunning() { return isSimRunning; },
      destroy() {
        if (animId) cancelAnimationFrame(animId);
        window.removeEventListener('resize', onResize);
      }
    };
  }

  global.InteractiveSim3D = { initSimulation };
})(window);
