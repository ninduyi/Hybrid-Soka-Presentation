/**
 * DELTARUNE 3D STORYTELLING ENGINE FOR CLOUD SCHEDULING
 * 6-Step Interactive Datacenter Scene:
 *  - VM-1 (85 MIPS) to VM-4 (175 MIPS) Server Towers
 *  - Task Migration Particles flying between servers in Step 5
 *  - Deltarune Cyber World Colors (#75fbed Cyan, #eb0095 Pink, #ffde00 Gold)
 */
(function (global) {
  'use strict';

  function initStory3D(container) {
    if (!container) return { setStep() {}, destroy() {} };

    let width = container.clientWidth || 700;
    let height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050524);
    scene.fog = new THREE.FogExp2(0x050524, 0.022);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 4.5, 12);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2.05;

    // Lighting
    scene.add(new THREE.AmbientLight(0xc7e3f2, 0.5));

    const lightCyan = new THREE.PointLight(0x75fbed, 2.0, 30);
    lightCyan.position.set(-6, 7, 4);
    scene.add(lightCyan);

    const lightPink = new THREE.PointLight(0xeb0095, 2.0, 30);
    lightPink.position.set(6, 7, 4);
    scene.add(lightPink);

    // Datacenter Base Pedestal
    const floorGeo = new THREE.CylinderGeometry(8.2, 8.8, 0.35, 48);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x090b3b,
      roughness: 0.6,
      metalness: 0.8
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.position.y = -1.2;
    scene.add(floor);

    // Cyber Ring Grid
    const radarRing = new THREE.Mesh(
      new THREE.RingGeometry(4.8, 4.95, 48),
      new THREE.MeshBasicMaterial({ color: 0x75fbed, side: THREE.DoubleSide, transparent: true, opacity: 0.5 })
    );
    radarRing.rotation.x = -Math.PI / 2;
    radarRing.position.y = -1.01;
    scene.add(radarRing);

    // 4 VIRTUAL MACHINE SERVER TOWERS
    const vmData = [
      { id: 1, name: 'VM-1 (Small)', mips: 85, x: -3.6, color: 0xeb0095 }, // Overload Pink
      { id: 2, name: 'VM-2 (Medium)', mips: 115, x: -1.2, color: 0xffde00 }, // Gold
      { id: 3, name: 'VM-3 (Large)', mips: 145, x: 1.2, color: 0x75fbed }, // Kris Cyan
      { id: 4, name: 'VM-4 (X-Large)', mips: 175, x: 3.6, color: 0x00ff87 } // Green
    ];

    const vmRacks = [];
    const rackGroup = new THREE.Group();

    vmData.forEach((vm) => {
      const g = new THREE.Group();
      g.position.set(vm.x, -1.0, 0);

      // Chassis Stand
      const pedestal = new THREE.Mesh(
        new THREE.CylinderGeometry(0.85, 0.95, 0.22, 24),
        new THREE.MeshStandardMaterial({ color: 0x0b0b3b, metalness: 0.8, roughness: 0.3 })
      );
      pedestal.position.y = 0.11;
      g.add(pedestal);

      // Inner Skeleton Wireframe
      const skeleton = new THREE.Mesh(
        new THREE.BoxGeometry(0.9, 3.6, 0.7),
        new THREE.MeshBasicMaterial({ color: 0x6a7bc4, wireframe: true })
      );
      skeleton.position.y = 1.9;
      g.add(skeleton);

      // Dynamic Workload Stack Block
      const stackMat = new THREE.MeshStandardMaterial({
        color: vm.color,
        emissive: vm.color,
        emissiveIntensity: 0.4,
        roughness: 0.2
      });
      const stackMesh = new THREE.Mesh(new THREE.BoxGeometry(0.82, 1, 0.62), stackMat);
      stackMesh.position.y = 0.5 + 0.22;
      g.add(stackMesh);

      // Beacon on top
      const beaconGeo = new THREE.OctahedronGeometry(0.18, 0);
      const beaconMat = new THREE.MeshBasicMaterial({ color: vm.color, wireframe: true });
      const beacon = new THREE.Mesh(beaconGeo, beaconMat);
      beacon.position.y = 3.9;
      g.add(beacon);

      rackGroup.add(g);
      vmRacks.push({ group: g, stackMesh, beacon, stackMat, data: vm });
    });
    scene.add(rackGroup);

    // Floating Task Cloudlets Group
    const cloudletGroup = new THREE.Group();
    const cloudletCount = 28;
    const cloudlets = [];

    const cloudletGeo = new THREE.SphereGeometry(0.12, 12, 12);
    for (let i = 0; i < cloudletCount; i++) {
      const mat = new THREE.MeshBasicMaterial({ color: i % 2 === 0 ? 0x75fbed : 0xeb0095 });
      const mesh = new THREE.Mesh(cloudletGeo, mat);
      mesh.position.set(
        (Math.random() - 0.5) * 8.0,
        2.5 + Math.random() * 2.5,
        (Math.random() - 0.5) * 3.0
      );
      cloudletGroup.add(mesh);
      cloudlets.push({ mesh, vy: -0.01 - Math.random() * 0.02, initialPos: mesh.position.clone() });
    }
    scene.add(cloudletGroup);

    // Task Migration Particles (Step 5)
    const migrationGroup = new THREE.Group();
    const migParticles = [];
    for (let i = 0; i < 12; i++) {
      const pMat = new THREE.MeshBasicMaterial({ color: 0xffde00 });
      const pMesh = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), pMat);
      pMesh.visible = false;
      migrationGroup.add(pMesh);
      migParticles.push(pMesh);
    }
    scene.add(migrationGroup);

    let activeStep = 1;
    let animId = null;
    const clock = new THREE.Clock();

    function updateStepVisuals(step) {
      activeStep = step;

      // Heights of VM stacks according to step logic
      const HEIGHTS = {
        1: [0.6, 0.6, 0.6, 0.6],      // Step 1: Initial arrival
        2: [3.2, 1.8, 1.4, 0.6],      // Step 2: Imbalance (VM-1 overload!)
        3: [2.8, 2.0, 1.8, 1.2],      // Step 3: FA Explore
        4: [2.4, 2.2, 2.0, 1.6],      // Step 4: BA Exploit
        5: [1.8, 2.1, 2.1, 2.2],      // Step 5: Migration (VM-1 -> VM-4)
        6: [2.1, 2.1, 2.1, 2.1]       // Step 6: Perfectly balanced!
      };

      const targetH = HEIGHTS[step] || HEIGHTS[1];

      vmRacks.forEach((rack, idx) => {
        const h = targetH[idx];
        rack.targetHeight = h;

        // Highlight colors
        if (step === 2 && idx === 0) {
          rack.stackMat.color.setHex(0xeb0095); // Pink Overload
          rack.stackMat.emissive.setHex(0xeb0095);
        } else if (step === 6) {
          rack.stackMat.color.setHex(0x00ff87); // Green Perfect
          rack.stackMat.emissive.setHex(0x00ff87);
        } else {
          rack.stackMat.color.setHex(rack.data.color);
          rack.stackMat.emissive.setHex(rack.data.color);
        }
      });

      // Show/hide task cloudlets & migration arc
      cloudletGroup.visible = (step === 1 || step === 3 || step === 4);
      migrationGroup.children.forEach((p) => p.visible = (step === 5));
    }

    function animate() {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth height interpolation for server stacks
      vmRacks.forEach((rack) => {
        if (rack.targetHeight !== undefined) {
          const currentH = rack.stackMesh.scale.y;
          const newH = currentH + (rack.targetHeight - currentH) * 0.08;
          rack.stackMesh.scale.y = newH;
          rack.stackMesh.position.y = (newH / 2) + 0.22;
        }
        rack.beacon.rotation.y += 0.03;
      });

      // Task cloudlets floating
      if (cloudletGroup.visible) {
        cloudlets.forEach((c) => {
          c.mesh.position.y += Math.sin(elapsed * 2 + c.mesh.position.x) * 0.005;
        });
      }

      // Step 5 Task Migration Arc Animation (VM-1 -> VM-4)
      if (activeStep === 5) {
        migParticles.forEach((p, idx) => {
          p.visible = true;
          const progress = (elapsed * 0.8 + idx * 0.1) % 1.0;
          const startX = vmData[0].x;
          const endX = vmData[3].x;
          p.position.x = startX + (endX - startX) * progress;
          p.position.y = 1.8 + Math.sin(progress * Math.PI) * 1.5;
          p.position.z = Math.sin(progress * Math.PI * 2) * 0.3;
        });
      }

      radarRing.rotation.z += 0.005;
      controls.update();
      renderer.render(scene, camera);
    }

    animate();
    updateStepVisuals(1);

    function onResize() {
      if (!container) return;
      width = container.clientWidth || 700;
      height = container.clientHeight || 450;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    window.addEventListener('resize', onResize);

    return {
      setStep: updateStepVisuals,
      destroy() {
        if (animId) cancelAnimationFrame(animId);
        window.removeEventListener('resize', onResize);
      }
    };
  }

  global.Story3D = { initStory3D };
})(window);
