/**
 * DELTARUNE 3D INTERACTIVE TASK-TO-VM BATTLE ARENA (CHAPTER 4)
 * FireBat Cyber Quest — Kris Dark World Architecture
 *
 * Analogi Visual 3D Intuitif untuk Awam:
 * 1. VM-1 s.d. VM-4: 4 Menara Kristal Server Heterogen (MIPS 85 s.d. 175)
 * 2. Cloudlet Queue: Portal antrean data 3D dengan partikel energi
 * 3. 4 Mode Visual Algoritma yang Sangat Berbeda & Jelas:
 *    - FA (Firefly): Partikel berpendar bioluminesen, meliuk mencari cahaya, konvergensi lambat.
 *    - BA (Bat): Gelombang sonar echolocation melingkar 3D, menukik cepat & terjebak di VM-1.
 *    - HGACO (2025): Jalur pita feromon tebal teal ke VM-1 menyebabkan macet total (high DOI).
 *    - FireBat (Hybrid): Dual populasi emas-cyan + sinar laser SD Rebalancing yang memindahkan
 *      tugas dari VM-1 ke VM-2, VM-3, VM-4 hingga tinggi menara seimbang sempurna!
 * 4. Interaksi: OrbitControls, Klik Menara/Queue untuk penjelasan awam, Preset Kamera.
 */
(function (global) {
  'use strict';

  function isWebGLSupported() {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }

  // Configurations for 4 Heterogeneous VM Nodes
  const VM_DEFS = [
    {
      id: 0,
      key: 'vm1',
      name: 'VM-1 (Small)',
      mips: 85,
      role: 'Mesin Ringan',
      posX: -5.4,
      posZ: -0.4,
      capacityH: 3.2,
      baseColor: 0xeb0095, // Pinkish
      descAwam: 'Kapasitas terkecil (85 MIPS). Rentan menjadi korban kemacetan jika algoritma menumpuk tugas ke sini.'
    },
    {
      id: 1,
      key: 'vm2',
      name: 'VM-2 (Medium)',
      mips: 115,
      role: 'Mesin Sedang',
      posX: -1.8,
      posZ: -0.4,
      capacityH: 4.0,
      baseColor: 0xffde00, // Gold
      descAwam: 'Kapasitas sedang (115 MIPS). Cukup stabil menampung tugas berukuran moderat.'
    },
    {
      id: 2,
      key: 'vm3',
      name: 'VM-3 (Large)',
      mips: 145,
      role: 'Mesin Besar',
      posX: 1.8,
      posZ: -0.4,
      capacityH: 4.8,
      baseColor: 0x75fbed, // Cyan
      descAwam: 'Kapasitas besar (145 MIPS). Mampu mengeksekusi komputasi berat dengan throughput tinggi.'
    },
    {
      id: 3,
      key: 'vm4',
      name: 'VM-4 (X-Large)',
      mips: 175,
      role: 'Mesin Super',
      posX: 5.4,
      posZ: -0.4,
      capacityH: 5.6,
      baseColor: 0x4ce6cf, // Teal/Green
      descAwam: 'Kapasitas terbesar (175 MIPS). Sering menganggur (idle) pada algoritma konvensional karena tidak dimanfaatkan optimal.'
    }
  ];

  // Algorithmic load behavior definitions for intuitive visualization
  const ALGO_MODES = {
    firebat: {
      name: 'FireBat (Hybrid FA + BA + SD)',
      themeColor: 0xffde00,
      glowHex: '#ffde00',
      tag: '★ TERSEIMBANG OPTIMAL (DOI: 0.071)',
      loads: [0.48, 0.52, 0.50, 0.51], // Balanced heights
      shares: [0.24, 0.26, 0.25, 0.25],
      makespanRatio: 15.4,
      doi: 0.071,
      energy: 'ARUR: 96.6%',
      statusTexts: ['● SEIMBANG', '● SEIMBANG', '● SEIMBANG', '● SEIMBANG'],
      statusTypes: ['optimal', 'optimal', 'optimal', 'optimal'],
      explanation: 'FireBat menggabungkan mata penjelajah Firefly, ketajaman sonar Bat, dan formula Standard Deviation (SD) Rebalancing. Begitu ada server mulai sesak, tugas berlebih langsung dipindahkan ke VM yang longgar sehingga tinggi ke-4 menara seimbang rapi!',
      vmExplanations: [
        '✨ VM-1 (85 MIPS): Beban 48% (Optimal). Berkat migrasi SD, tugas yang sempat menumpuk dioper ke VM-3 dan VM-4.',
        '✨ VM-2 (115 MIPS): Beban 52% (Optimal). Bekerja pada kapasitas ideal tanpa risiko bottleneck.',
        '✨ VM-3 (145 MIPS): Beban 50% (Optimal). Menerima limpahan tugas terdistribusi secara adil.',
        '✨ VM-4 (175 MIPS): Beban 51% (Optimal). Dimanfaatkan penuh sehingga tidak ada daya komputasi yang terbuang sia-sia.'
      ]
    },
    fa: {
      name: 'FA (Firefly Algorithm)',
      themeColor: 0x75fbed,
      glowHex: '#75fbed',
      tag: 'EKSPLORASI GLOBAL (KONVERGENSI LAMBAT)',
      loads: [0.72, 0.60, 0.44, 0.32],
      shares: [0.36, 0.30, 0.20, 0.14],
      makespanRatio: 19.3,
      doi: 0.185,
      energy: 'ARUR: 84.2%',
      statusTexts: ['▲ OVERLOAD', '● NORMAL', '● NORMAL', '▼ UNDERLOAD'],
      statusTypes: ['overloaded', 'balanced', 'balanced', 'underloaded'],
      explanation: 'Firefly bergerak mencari menara dengan cahaya paling terang. Eksplorasinya luas, namun lambat mencapai kesepakatan akhir sehingga VM-1 kelebihan beban (72%) sementara VM-4 kurang termanfaatkan (32%).',
      vmExplanations: [
        '⚠️ VM-1 (85 MIPS): Beban 72% (Overload). Menjadi daya tarik utama bagi kunang-kunang sehingga beban menumpuk.',
        '● VM-2 (115 MIPS): Beban 60% (Normal). Mengikuti kelompok kunang-kunang di kuadran tengah.',
        '● VM-3 (145 MIPS): Beban 44% (Normal). Hanya sebagian kecil kunang-kunang yang terbang ke sini.',
        '💤 VM-4 (175 MIPS): Beban 32% (Underload). Mesin paling tangguh ini malah banyak nganggur karena daya tariknya kalah ramai.'
      ]
    },
    ba: {
      name: 'BA (Bat Algorithm)',
      themeColor: 0xeb0095,
      glowHex: '#eb0095',
      tag: 'EKSPLOITASI CEPAT (JEBAKAN LOCAL OPTIMUM)',
      loads: [0.88, 0.54, 0.38, 0.20],
      shares: [0.44, 0.27, 0.19, 0.10],
      makespanRatio: 17.8,
      doi: 0.240,
      energy: 'ARUR: 78.5%',
      statusTexts: ['▲ SANGAT OVERLOAD', '● BUSY', '▼ UNDERLOAD', '▼ IDLE'],
      statusTypes: ['overloaded', 'balanced', 'underloaded', 'underloaded'],
      explanation: 'Bat memancarkan pulsa sonar untuk mengunci target secepat mungkin. Karena VM-1 paling awal memantulkan sinyal sonar yang bagus, seluruh kelelawar menukik ke VM-1 dan terjebak di sana (Local Optimum)!',
      vmExplanations: [
        '🚨 VM-1 (85 MIPS): Beban 88% (Kritis Overload!). Seluruh sonar kelelawar mengunci menara ini tanpa memedulikan kapasitasnya yang kecil!',
        '● VM-2 (115 MIPS): Beban 54% (Sedang). Terisi oleh sisa sonar sekunder.',
        '💤 VM-3 (145 MIPS): Beban 38% (Underload). Kurang dimanfaatkan oleh kawanan kelelawar.',
        '💤 VM-4 (175 MIPS): Beban 20% (Sangat Idle). Mesin super 175 MIPS terabaikan karena sonar kelelawar sudah terlanjur terkunci di VM-1.'
      ]
    },
    hgaco: {
      name: 'HGACO (IEEE 2025 - GA + ACO)',
      themeColor: 0x4ce6cf,
      glowHex: '#4ce6cf',
      tag: 'PENUMPUKAN FEROMON (DOI TINGGI 0.554)',
      loads: [0.94, 0.68, 0.32, 0.16],
      shares: [0.47, 0.34, 0.12, 0.07],
      makespanRatio: 21.5,
      doi: 0.554,
      energy: 'ARUR: 79.5%',
      statusTexts: ['▲ CRITICAL 94%', '● BUSY 68%', '▼ UNDERLOAD', '▼ MACET IDLE'],
      statusTypes: ['overloaded', 'balanced', 'underloaded', 'underloaded'],
      explanation: 'Jejak feromon semut ACO memperkuat rute yang sering dilewati. Akibatnya terjadi efek "bola salju": tugas-tugas terus diarahkan ke jalur VM-1 yang sudah macet total, menciptakan ketimpangan parah (DOI 0.554)!',
      vmExplanations: [
        '💥 VM-1 (85 MIPS): Beban 94% (Kapasitas Nyaris Jebol). Jalur feromon tebal terus membanjiri server ini dengan cloudlet besar.',
        '● VM-2 (115 MIPS): Beban 68% (Padat). Menampung limpahan feromon rute kedua.',
        '💤 VM-3 (145 MIPS): Beban 32% (Kurang Beban). Rute feromon ke sini menguap karena kalah ramai dibanding VM-1.',
        '💤 VM-4 (175 MIPS): Beban 16% (Macet Idle). Sumber daya 175 MIPS mubazir karena tidak terbentuk jalur feromon yang kuat.'
      ]
    }
  };

  /**
   * Helper to build dynamic 3D canvas billboard text sprites
   */
  function createTextSprite(textLines, options = {}) {
    const canvas = document.createElement('canvas');
    canvas.width = options.width || 384;
    canvas.height = options.height || 140;
    const ctx = canvas.getContext('2d');

    function redraw(lines, opt = {}) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background rounded pill
      const bg = opt.bgColor || 'rgba(11, 11, 59, 0.88)';
      const border = opt.borderColor || '#75fbed';
      ctx.fillStyle = bg;
      ctx.strokeStyle = border;
      ctx.lineWidth = 4;

      const r = 16;
      const x = 6, y = 6, w = canvas.width - 12, h = canvas.height - 12;
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Text lines
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Title line
      ctx.font = 'bold 24px "Silkscreen", "Press Start 2P", monospace';
      ctx.fillStyle = opt.titleColor || '#ffde00';
      ctx.fillText(lines[0] || '', canvas.width / 2, 38);

      // Subtitle line (load)
      ctx.font = 'bold 22px "DotGothic16", monospace';
      ctx.fillStyle = opt.subColor || '#75fbed';
      ctx.fillText(lines[1] || '', canvas.width / 2, 72);

      // Badge line
      ctx.font = 'bold 20px "Press Start 2P", monospace';
      ctx.fillStyle = opt.badgeColor || '#eb0095';
      ctx.fillText(lines[2] || '', canvas.width / 2, 105);
    }

    redraw(textLines, options);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    const mat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(options.scaleX || 3.0, options.scaleY || 1.1, 1.0);

    sprite.updateText = function (newLines, newOpts) {
      redraw(newLines, newOpts);
      texture.needsUpdate = true;
    };

    return sprite;
  }

  /**
   * Main Interactive Arena Controller
   */
  function initArena(container, options = {}) {
    if (!container) return null;

    if (!isWebGLSupported()) {
      container.innerHTML = `
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:var(--dr-gold);text-align:center;padding:20px;background:#060624;border:2px dashed var(--dr-cyan);border-radius:8px;">
          <div style="font-family:var(--font-pixel);font-size:14px;margin-bottom:10px;">⚠️ WEBGL TIDAK TERDETEKSI</div>
          <div style="font-size:14px;color:var(--dr-ice);max-width:480px;line-height:1.5;">Browser Anda berjalan pada mode grafis terbatas. Simulasi 2.5D alternatif tetap aktif via kartu status di bawah.</div>
        </div>
      `;
      return {
        setAlgorithm() {},
        setTaskCount() {},
        triggerBattleRun() {},
        resetSimulation() {},
        resetCamera() {},
        focusCamera() {},
        destroy() {}
      };
    }

    let width = container.clientWidth || 760;
    let height = container.clientHeight || 360;

    // THREE SCENE SETUP
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050524);
    scene.fog = new THREE.FogExp2(0x050524, 0.018);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 120);
    const defaultCamPos = new THREE.Vector3(0, 8.8, 16.2);
    const defaultTarget = new THREE.Vector3(0, 1.4, 0);
    camera.position.copy(defaultCamPos);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.maxPolarAngle = Math.PI / 2.05; // Do not go under floor
    controls.minDistance = 6.0;
    controls.maxDistance = 32.0;
    controls.target.copy(defaultTarget);

    // LIGHTING SETUP
    const ambLight = new THREE.AmbientLight(0xc7e3f2, 0.65);
    scene.add(ambLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.85);
    dirLight.position.set(4, 15, 8);
    scene.add(dirLight);

    const pointLights = [];
    VM_DEFS.forEach((vm) => {
      const pl = new THREE.PointLight(vm.baseColor, 1.4, 14);
      pl.position.set(vm.posX, 4.5, vm.posZ);
      scene.add(pl);
      pointLights.push(pl);
    });

    const queueLight = new THREE.PointLight(0x75fbed, 1.6, 12);
    queueLight.position.set(0, 2.5, 4.5);
    scene.add(queueLight);

    // ARENA BASE PLATFORM
    const platformGroup = new THREE.Group();
    const platGeo = new THREE.CylinderGeometry(9.6, 10.2, 0.4, 48);
    const platMat = new THREE.MeshStandardMaterial({
      color: 0x07092b,
      roughness: 0.5,
      metalness: 0.8
    });
    const platMesh = new THREE.Mesh(platGeo, platMat);
    platMesh.position.y = -0.2;
    platformGroup.add(platMesh);

    // Outer Glowing Contour Ring
    const contourGeo = new THREE.RingGeometry(9.7, 9.9, 48);
    const contourMat = new THREE.MeshBasicMaterial({ color: 0x75fbed, side: THREE.DoubleSide });
    const contourMesh = new THREE.Mesh(contourGeo, contourMat);
    contourMesh.rotation.x = -Math.PI / 2;
    contourMesh.position.y = 0.01;
    platformGroup.add(contourMesh);

    // Cyber Grid Floor
    const grid = new THREE.GridHelper(19, 19, 0x75fbed, 0x0b0b3b);
    grid.position.y = 0.02;
    platformGroup.add(grid);
    scene.add(platformGroup);

    // 4 VM HETEROGENEOUS TOWERS
    const vmNodes = [];
    const raycastMeshes = [];

    VM_DEFS.forEach((def, idx) => {
      const nodeGroup = new THREE.Group();
      nodeGroup.position.set(def.posX, 0, def.posZ);

      // Plinth base cylinder
      const baseGeo = new THREE.CylinderGeometry(1.35, 1.5, 0.35, 32);
      const baseMat = new THREE.MeshStandardMaterial({ color: 0x090b3b, roughness: 0.35, metalness: 0.9 });
      const baseMesh = new THREE.Mesh(baseGeo, baseMat);
      baseMesh.position.y = 0.18;
      nodeGroup.add(baseMesh);

      // LED Accent Ring on Base
      const ringGeo = new THREE.RingGeometry(1.37, 1.48, 32);
      const ringMat = new THREE.MeshBasicMaterial({ color: def.baseColor, side: THREE.DoubleSide });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = -Math.PI / 2;
      ringMesh.position.y = 0.36;
      nodeGroup.add(ringMesh);

      // Outer Translucent Cyber Cage (MIPS capacity indicator ceiling)
      const cageGeo = new THREE.BoxGeometry(1.6, def.capacityH, 1.6);
      const cageMat = new THREE.MeshStandardMaterial({
        color: 0x6a7bc4,
        roughness: 0.1,
        metalness: 0.3,
        transparent: true,
        opacity: 0.18,
        wireframe: false
      });
      const cageMesh = new THREE.Mesh(cageGeo, cageMat);
      cageMesh.position.y = (def.capacityH / 2) + 0.35;
      nodeGroup.add(cageMesh);

      // Wireframe Edge Cage Outline
      const cageEdges = new THREE.LineSegments(
        new THREE.EdgesGeometry(cageGeo),
        new THREE.LineBasicMaterial({ color: 0x75fbed, transparent: true, opacity: 0.45 })
      );
      cageEdges.position.copy(cageMesh.position);
      nodeGroup.add(cageEdges);

      // Inner Active Energy Load Pillar
      const coreGeo = new THREE.BoxGeometry(1.2, 1, 1.2);
      const coreMat = new THREE.MeshStandardMaterial({
        color: def.baseColor,
        emissive: def.baseColor,
        emissiveIntensity: 0.45,
        roughness: 0.2,
        metalness: 0.6
      });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      coreMesh.position.y = 0.85;
      coreMesh.scale.y = 1.0;
      nodeGroup.add(coreMesh);

      // Overload Hazard Halo / Warning Wireframe
      const warnGeo = new THREE.OctahedronGeometry(1.3, 0);
      const warnMat = new THREE.MeshBasicMaterial({
        color: 0xeb0095,
        wireframe: true,
        transparent: true,
        opacity: 0
      });
      const warnMesh = new THREE.Mesh(warnGeo, warnMat);
      warnMesh.position.y = def.capacityH + 0.8;
      nodeGroup.add(warnMesh);

      // Floating 3D Info Billboard Sprite
      const spriteY = def.capacityH + 1.6;
      const sprite = createTextSprite(
        [def.name, `85 MIPS · 48%`, '● SEIMBANG'],
        {
          width: 384,
          height: 140,
          scaleX: 2.8,
          scaleY: 1.0,
          titleColor: '#ffde00',
          subColor: '#75fbed',
          badgeColor: '#75fbed',
          borderColor: '#75fbed'
        }
      );
      sprite.position.y = spriteY;
      nodeGroup.add(sprite);

      // Invisible Click Target for Raycasting
      const hitGeo = new THREE.BoxGeometry(2.0, def.capacityH + 2.0, 2.0);
      const hitMat = new THREE.MeshBasicMaterial({ visible: false });
      const hitMesh = new THREE.Mesh(hitGeo, hitMat);
      hitMesh.position.y = (def.capacityH + 2.0) / 2;
      hitMesh.userData = { type: 'vm', vmIdx: idx, def };
      nodeGroup.add(hitMesh);
      raycastMeshes.push(hitMesh);

      scene.add(nodeGroup);

      vmNodes.push({
        def,
        group: nodeGroup,
        coreMesh,
        ringMesh,
        warnMesh,
        sprite,
        cageEdges,
        currentLoad: 0.5,
        targetLoad: 0.5,
        currentH: 1.5,
        targetH: 1.5
      });
    });

    // QUEUE PORTAL / TASK SPAWNER (FRONT CENTER)
    const queueGroup = new THREE.Group();
    queueGroup.position.set(0, 0.2, 5.0);

    // Gateway Pedestal
    const qPed = new THREE.Mesh(
      new THREE.CylinderGeometry(1.4, 1.6, 0.3, 32),
      new THREE.MeshStandardMaterial({ color: 0x090b3b, roughness: 0.4, metalness: 0.8 })
    );
    queueGroup.add(qPed);

    // Dual Spinning Cyber Rings
    const ringOuterGeo = new THREE.TorusGeometry(1.2, 0.05, 16, 48);
    const ringOuterMat = new THREE.MeshStandardMaterial({ color: 0x75fbed, emissive: 0x75fbed, emissiveIntensity: 0.6 });
    const ringOuter = new THREE.Mesh(ringOuterGeo, ringOuterMat);
    ringOuter.position.y = 1.2;
    queueGroup.add(ringOuter);

    const ringInnerGeo = new THREE.TorusGeometry(0.85, 0.04, 16, 36);
    const ringInnerMat = new THREE.MeshStandardMaterial({ color: 0xeb0095, emissive: 0xeb0095, emissiveIntensity: 0.7 });
    const ringInner = new THREE.Mesh(ringInnerGeo, ringInnerMat);
    ringInner.position.y = 1.2;
    queueGroup.add(ringInner);

    // Glowing Core Sphere
    const qCore = new THREE.Mesh(
      new THREE.SphereGeometry(0.45, 24, 24),
      new THREE.MeshStandardMaterial({ color: 0xffde00, emissive: 0xffde00, emissiveIntensity: 0.8 })
    );
    qCore.position.y = 1.2;
    queueGroup.add(qCore);

    // Queue Holographic Label
    const qSprite = createTextSprite(
      ['📥 CLOUDLETS QUEUE', '100 Tasks Standby', '● SIAP BERTARUNG'],
      {
        width: 360,
        height: 120,
        scaleX: 2.6,
        scaleY: 0.9,
        titleColor: '#75fbed',
        subColor: '#ffde00',
        badgeColor: '#4ce6cf',
        borderColor: '#75fbed'
      }
    );
    qSprite.position.set(0, 2.7, 0);
    queueGroup.add(qSprite);

    // Click target for Queue
    const qHitMesh = new THREE.Mesh(new THREE.BoxGeometry(2.4, 3.2, 2.4), new THREE.MeshBasicMaterial({ visible: false }));
    qHitMesh.position.y = 1.6;
    qHitMesh.userData = { type: 'queue' };
    queueGroup.add(qHitMesh);
    raycastMeshes.push(qHitMesh);

    scene.add(queueGroup);

    // DYNAMIC TASK PARTICLES / ENERGY ORBS SWARM
    const NUM_ORBS = 32;
    const orbGroup = new THREE.Group();
    scene.add(orbGroup);

    const orbGeometry = new THREE.SphereGeometry(0.16, 12, 12);
    const orbs = [];

    for (let i = 0; i < NUM_ORBS; i++) {
      const orbMat = new THREE.MeshBasicMaterial({ color: 0xffde00 });
      const mesh = new THREE.Mesh(orbGeometry, orbMat);
      mesh.visible = false;
      orbGroup.add(mesh);

      orbs.push({
        mesh,
        t: Math.random(), // 0 to 1 along path
        speed: 0.005 + Math.random() * 0.008,
        targetVmIdx: 0,
        waveOffset: Math.random() * Math.PI * 2,
        active: false
      });
    }

    // SONAR WAVE EXPANDING RINGS (BAT ALGORITHM FX)
    const NUM_SONARS = 6;
    const sonarRings = [];
    for (let i = 0; i < NUM_SONARS; i++) {
      const sRingGeo = new THREE.RingGeometry(0.2, 0.32, 32);
      const sRingMat = new THREE.MeshBasicMaterial({
        color: 0xeb0095,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0
      });
      const sMesh = new THREE.Mesh(sRingGeo, sRingMat);
      sMesh.rotation.x = -Math.PI / 2;
      sMesh.visible = false;
      scene.add(sMesh);

      sonarRings.push({
        mesh: sMesh,
        scale: 0.2,
        opacity: 0,
        active: false,
        timer: i * 25
      });
    }

    // PHEROMONE ROUTE TRAILS (HGACO ALGORITHM FX)
    const pheromoneTrails = [];
    VM_DEFS.forEach((vm, idx) => {
      const curve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(0, 0.4, 5.0),
        new THREE.Vector3(vm.posX * 0.6, 1.8, 2.2),
        new THREE.Vector3(vm.posX, 0.4, vm.posZ)
      );
      const points = curve.getPoints(36);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x4ce6cf,
        transparent: true,
        opacity: 0.25,
        linewidth: 2
      });
      const trailLine = new THREE.Line(lineGeo, lineMat);
      trailLine.visible = false;
      scene.add(trailLine);

      pheromoneTrails.push({ line: trailLine, curve, vmIdx: idx });
    });

    // DYNAMIC SD REBALANCING BEAMS (FIREBAT ALGORITHM FX)
    const rebalanceBeams = [];
    // Connections from VM-1 to VM-2, VM-3, VM-4
    [1, 2, 3].forEach((targetIdx) => {
      const targetVm = VM_DEFS[targetIdx];
      const curve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(VM_DEFS[0].posX, 3.2, VM_DEFS[0].posZ),
        new THREE.Vector3((VM_DEFS[0].posX + targetVm.posX) / 2, 5.2, -1.2),
        new THREE.Vector3(targetVm.posX, 3.2, targetVm.posZ)
      );
      const points = curve.getPoints(32);
      const beamGeo = new THREE.BufferGeometry().setFromPoints(points);
      const beamMat = new THREE.LineDashedMaterial({
        color: 0xffde00,
        dashSize: 0.35,
        gapSize: 0.15,
        transparent: true,
        opacity: 0.8
      });
      const beamLine = new THREE.Line(beamGeo, beamMat);
      beamLine.computeLineDistances();
      beamLine.visible = false;
      scene.add(beamLine);

      // Traveling rebalance transfer orb
      const orbMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.18, 12, 12),
        new THREE.MeshBasicMaterial({ color: 0xffde00 })
      );
      orbMesh.visible = false;
      scene.add(orbMesh);

      rebalanceBeams.push({
        line: beamLine,
        curve,
        orbMesh,
        t: Math.random(),
        targetIdx
      });
    });

    // STATE VARIABLES
    let currentAlgoKey = 'firebat';
    let currentTaskCount = 100;
    let isBattleAnimating = false;
    let battleProgress = 0; // 0 to 1
    let battleStep = 0;

    // CAMERA FOCUS PRESETS & SMOOTH LERP
    const CAM_PRESETS = {
      all: { pos: new THREE.Vector3(0, 8.8, 16.2), target: new THREE.Vector3(0, 1.4, 0) },
      vm1: { pos: new THREE.Vector3(-5.4, 4.2, 5.8), target: new THREE.Vector3(-5.4, 2.0, -0.4) },
      vm2: { pos: new THREE.Vector3(-1.8, 4.2, 5.8), target: new THREE.Vector3(-1.8, 2.0, -0.4) },
      vm3: { pos: new THREE.Vector3(1.8, 4.2, 5.8), target: new THREE.Vector3(1.8, 2.0, -0.4) },
      vm4: { pos: new THREE.Vector3(5.4, 4.2, 5.8), target: new THREE.Vector3(5.4, 2.0, -0.4) },
      top: { pos: new THREE.Vector3(0, 19.5, 0.2), target: new THREE.Vector3(0, 0, 0) }
    };

    let targetCamPos = CAM_PRESETS.all.pos.clone();
    let targetControlsTarget = CAM_PRESETS.all.target.clone();

    function setCameraPreset(presetKey) {
      const p = CAM_PRESETS[presetKey] || CAM_PRESETS.all;
      targetCamPos.copy(p.pos);
      targetControlsTarget.copy(p.target);
    }

    // UPDATE SIMULATION STATE
    function applyAlgorithmState(algoKey, taskCount) {
      currentAlgoKey = algoKey;
      currentTaskCount = taskCount;
      const algo = ALGO_MODES[algoKey] || ALGO_MODES.firebat;

      // Update VM Tower Heights and Status
      vmNodes.forEach((node, idx) => {
        const loadRatio = algo.loads[idx];
        node.targetLoad = loadRatio;
        // Map load ratio into height within capacity ceiling
        node.targetH = Math.max(0.6, loadRatio * (node.def.capacityH * 0.95));

        const tasksAssigned = Math.round(taskCount * algo.shares[idx]);
        const statusText = algo.statusTexts[idx];
        const statusType = algo.statusTypes[idx];

        let badgeCol = '#75fbed';
        let borderCol = '#75fbed';
        let coreCol = algo.themeColor;

        if (statusType === 'overloaded') {
          badgeCol = '#eb0095';
          borderCol = '#eb0095';
          coreCol = 0xeb0095;
          node.warnMesh.material.opacity = 0.85;
        } else if (statusType === 'optimal') {
          badgeCol = '#ffde00';
          borderCol = '#ffde00';
          coreCol = 0xffde00;
          node.warnMesh.material.opacity = 0.0;
        } else if (statusType === 'underloaded') {
          badgeCol = '#6a7bc4';
          borderCol = '#6a7bc4';
          coreCol = 0x6a7bc4;
          node.warnMesh.material.opacity = 0.0;
        } else {
          node.warnMesh.material.opacity = 0.0;
        }

        // Update Materials & Light
        node.coreMesh.material.color.setHex(coreCol);
        node.coreMesh.material.emissive.setHex(coreCol);
        node.ringMesh.material.color.setHex(coreCol);
        pointLights[idx].color.setHex(coreCol);

        // Update Billboard Sprite
        node.sprite.updateText(
          [node.def.name, `${node.def.mips} MIPS · ${Math.round(loadRatio * 100)}% (${tasksAssigned} T)`, statusText],
          {
            titleColor: statusType === 'optimal' ? '#ffde00' : '#c7e3f2',
            subColor: statusType === 'overloaded' ? '#eb0095' : '#75fbed',
            badgeColor: badgeCol,
            borderColor: borderCol
          }
        );
      });

      // Update Queue Sprite
      qSprite.updateText(
        ['📥 CLOUDLETS QUEUE', `${taskCount} Tasks (${algo.name.split(' ')[0]})`, `● ${algo.tag}`],
        {
          titleColor: algo.glowHex,
          subColor: '#c7e3f2',
          badgeColor: algo.glowHex,
          borderColor: algo.glowHex
        }
      );

      // Configure Algorithm Visual Effects
      // 1. FA: Cyan/Gold glow orbs wandering with sine waves
      // 2. BA: Sonar rings active, particles dart fast
      // 3. HGACO: Pheromone trails visible, heavy line to VM-1
      // 4. FireBat: Dual particles + SD Rebalance laser arcs active

      pheromoneTrails.forEach((trail) => {
        if (algoKey === 'hgaco') {
          trail.line.visible = true;
          // Heavily thicken trail to VM-1
          if (trail.vmIdx === 0) {
            trail.line.material.opacity = 0.95;
            trail.line.material.color.setHex(0xeb0095); // Congested red/pink
          } else {
            trail.line.material.opacity = 0.18;
            trail.line.material.color.setHex(0x4ce6cf);
          }
        } else {
          trail.line.visible = false;
        }
      });

      rebalanceBeams.forEach((b) => {
        b.line.visible = algoKey === 'firebat';
        b.orbMesh.visible = algoKey === 'firebat';
      });

      sonarRings.forEach((s) => {
        s.active = algoKey === 'ba' || algoKey === 'firebat';
        s.mesh.visible = s.active;
      });

      // Reassign target VM indices for floating orbs according to algo shares
      orbs.forEach((o, i) => {
        o.active = true;
        o.mesh.visible = true;

        // Probabilistic assignment based on algo shares
        const r = Math.random();
        if (r < algo.shares[0]) o.targetVmIdx = 0;
        else if (r < algo.shares[0] + algo.shares[1]) o.targetVmIdx = 1;
        else if (r < algo.shares[0] + algo.shares[1] + algo.shares[2]) o.targetVmIdx = 2;
        else o.targetVmIdx = 3;

        // Orb color based on algorithm
        if (algoKey === 'fa') {
          o.mesh.material.color.setHex(i % 2 === 0 ? 0x75fbed : 0xffde00);
          o.speed = 0.005 + Math.random() * 0.006;
        } else if (algoKey === 'ba') {
          o.mesh.material.color.setHex(0xeb0095);
          o.speed = 0.012 + Math.random() * 0.014; // High speed
        } else if (algoKey === 'hgaco') {
          o.mesh.material.color.setHex(0x4ce6cf);
          o.speed = 0.007 + Math.random() * 0.008;
        } else {
          // FireBat: Dual population (half FA cyan, half BA gold)
          o.mesh.material.color.setHex(i % 2 === 0 ? 0xffde00 : 0x75fbed);
          o.speed = 0.009 + Math.random() * 0.009;
        }
      });
    }

    // RUN BATTLE INTERACTIVE STEP ANIMATION
    let battleTimer = null;
    function triggerBattleRun(onStepChange, onComplete) {
      if (isBattleAnimating) {
        if (battleTimer) clearInterval(battleTimer);
        isBattleAnimating = false;
        return;
      }

      isBattleAnimating = true;
      battleStep = 0;

      // Temporarily lower heights to show live allocation
      vmNodes.forEach((n) => {
        n.currentH = 0.4;
        n.coreMesh.scale.y = 0.4;
      });

      battleTimer = setInterval(() => {
        battleStep++;

        if (battleStep === 1) {
          if (typeof onStepChange === 'function') {
            onStepChange(1, '⚡ FASE 1: Tugas keluar dari antrean portal menuju cloud datacenter...');
          }
          // Fast particle surge
          orbs.forEach((o) => (o.speed *= 1.8));
        } else if (battleStep === 2) {
          if (typeof onStepChange === 'function') {
            onStepChange(2, `🔍 FASE 2: ${ALGO_MODES[currentAlgoKey].name} memetakan kapasitas VM...`);
          }
          // Towers rise to half height
          vmNodes.forEach((n) => {
            n.targetH = n.targetLoad * (n.def.capacityH * 0.5);
          });
        } else if (battleStep === 3) {
          if (typeof onStepChange === 'function') {
            onStepChange(3, currentAlgoKey === 'firebat' 
              ? '🪄 FASE 3: Standard Deviation Rebalancing memindahkan beban berlebih VM-1!' 
              : '⚠️ FASE 3: Konvergensi akhir selesai. Perhatikan ketimpangan beban!');
          }
          // Towers rise to full target
          applyAlgorithmState(currentAlgoKey, currentTaskCount);
        } else if (battleStep >= 4) {
          clearInterval(battleTimer);
          battleTimer = null;
          isBattleAnimating = false;
          orbs.forEach((o) => (o.speed /= 1.8));
          if (typeof onComplete === 'function') onComplete();
        }
      }, 950);
    }

    function resetSimulation() {
      if (battleTimer) clearInterval(battleTimer);
      battleTimer = null;
      isBattleAnimating = false;
      setCameraPreset('all');
      applyAlgorithmState('firebat', 100);
    }

    // RAYCASTING & INTERACTION (CLICK & HOVER)
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function onPointerClick(event) {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(raycastMeshes);

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        const data = hit.userData;

        if (typeof options.onElementClick === 'function') {
          options.onElementClick(data, currentAlgoKey);
        }
      }
    }

    renderer.domElement.addEventListener('click', onPointerClick);

    // MOUSE HOVER CURSOR
    function onPointerMove(event) {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(raycastMeshes);
      renderer.domElement.style.cursor = intersects.length > 0 ? 'pointer' : 'default';
    }

    renderer.domElement.addEventListener('mousemove', onPointerMove);

    // RENDER LOOP
    let animId = null;
    const clock = new THREE.Clock();

    function animate() {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth Tower Height Lerp
      vmNodes.forEach((node, idx) => {
        node.currentH += (node.targetH - node.currentH) * 0.08;
        node.coreMesh.scale.y = Math.max(0.2, node.currentH);
        node.coreMesh.position.y = (node.currentH / 2) + 0.35;

        // Subtle idle pulse
        if (node.warnMesh.material.opacity > 0) {
          node.warnMesh.rotation.y += 0.03;
          node.warnMesh.rotation.x = Math.sin(elapsed * 4) * 0.2;
          node.warnMesh.scale.setScalar(1.0 + Math.sin(elapsed * 6) * 0.12);
        }
      });

      // Rotate Queue Rings
      ringOuter.rotation.z += 0.02;
      ringOuter.rotation.x = Math.sin(elapsed * 1.5) * 0.3;
      ringInner.rotation.z -= 0.03;
      ringInner.rotation.y = Math.cos(elapsed * 1.5) * 0.3;
      qCore.scale.setScalar(1.0 + Math.sin(elapsed * 3) * 0.08);

      // Animate Flying Cloudlet Particles
      orbs.forEach((o, i) => {
        if (!o.active) return;
        o.t += o.speed;
        if (o.t > 1.0) o.t = 0.0;

        const targetNode = vmNodes[o.targetVmIdx];
        const startX = 0;
        const startY = 1.2;
        const startZ = 5.0;

        const endX = targetNode.def.posX;
        const endY = targetNode.currentH + 0.5;
        const endZ = targetNode.def.posZ;

        // Quadratic bezier arc interpolation
        const midY = 3.8 + Math.sin(elapsed * 2 + o.waveOffset) * 0.6;
        const midX = (startX + endX) * 0.5 + Math.sin(elapsed * 3 + o.waveOffset) * 0.4;
        const midZ = (startZ + endZ) * 0.5;

        const t = o.t;
        const oneMinusT = 1.0 - t;
        const x = oneMinusT * oneMinusT * startX + 2 * oneMinusT * t * midX + t * t * endX;
        const y = oneMinusT * oneMinusT * startY + 2 * oneMinusT * t * midY + t * t * endY;
        const z = oneMinusT * oneMinusT * startZ + 2 * oneMinusT * t * midZ + t * t * endZ;

        o.mesh.position.set(x, y, z);

        // Firefly bioluminescence flicker
        if (currentAlgoKey === 'fa') {
          const flicker = 0.7 + Math.sin(elapsed * 8 + o.waveOffset) * 0.3;
          o.mesh.scale.setScalar(flicker);
        } else {
          o.mesh.scale.setScalar(1.0);
        }
      });

      // Animate Sonar Expanding Rings (BA FX)
      sonarRings.forEach((s) => {
        if (!s.active) return;
        s.scale += 0.05;
        s.opacity = Math.max(0, 0.9 - (s.scale / 3.8));
        s.mesh.scale.set(s.scale, s.scale, s.scale);
        s.mesh.material.opacity = s.opacity;

        if (s.scale > 3.8) {
          s.scale = 0.2;
          s.mesh.position.set(0, 0.4, 5.0);
        }
      });

      // Animate SD Rebalancing Beams (FireBat FX)
      rebalanceBeams.forEach((b) => {
        if (!b.line.visible) return;
        b.t += 0.015;
        if (b.t > 1.0) b.t = 0.0;
        const pt = b.curve.getPoint(b.t);
        b.orbMesh.position.copy(pt);
      });

      // Smooth Camera & Controls Lerp
      camera.position.lerp(targetCamPos, 0.06);
      controls.target.lerp(targetControlsTarget, 0.06);
      controls.update();

      renderer.render(scene, camera);
    }

    animate();

    // RESIZE LISTENER
    function onResize() {
      if (!container) return;
      width = container.clientWidth || 760;
      height = container.clientHeight || 360;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    window.addEventListener('resize', onResize);

    // Initial state setup
    applyAlgorithmState('firebat', 100);

    return {
      setAlgorithm: applyAlgorithmState,
      setTaskCount(count) {
        applyAlgorithmState(currentAlgoKey, count);
      },
      triggerBattleRun,
      resetSimulation,
      resetCamera() {
        setCameraPreset('all');
      },
      focusCamera(key) {
        setCameraPreset(key);
      },
      getCurrentAlgoInfo() {
        return ALGO_MODES[currentAlgoKey];
      },
      destroy() {
        if (animId) cancelAnimationFrame(animId);
        if (battleTimer) clearInterval(battleTimer);
        window.removeEventListener('resize', onResize);
        renderer.domElement.removeEventListener('click', onPointerClick);
        renderer.domElement.removeEventListener('mousemove', onPointerMove);
        if (renderer.domElement.parentElement) {
          renderer.domElement.parentElement.removeChild(renderer.domElement);
        }
        renderer.dispose();
      }
    };
  }

  // Compatibility wrapper for cleanSlides if called
  function initSimulation(container) {
    const arena = initArena(container);
    let running = false;
    return {
      setFocusMode(mode) {
        if (!arena) return;
        if (mode === 'fa') arena.setAlgorithm('fa', 100);
        else if (mode === 'ba') arena.setAlgorithm('ba', 100);
        else if (mode === 'hgaco') arena.setAlgorithm('hgaco', 100);
        else if (mode === 'fb') arena.setAlgorithm('firebat', 100);
        else arena.resetCamera();
      },
      start(cb) {
        if (!arena) return;
        running = true;
        arena.triggerBattleRun(
          (step) => {
            if (cb) cb(step * 25, 100, { fa: 19.3, ba: 17.8, fb: 15.4 });
          },
          () => {
            running = false;
            if (cb) cb(100, 100, { fa: 19.3, ba: 17.8, fb: 15.4 });
          }
        );
      },
      pause() {
        running = false;
        if (arena) arena.resetSimulation();
      },
      reset() {
        running = false;
        if (arena) arena.resetSimulation();
      },
      isRunning() {
        return running;
      },
      destroy() {
        if (arena) arena.destroy();
      }
    };
  }

  global.InteractiveSim3D = {
    initArena,
    initSimulation,
    VM_DEFS,
    ALGO_MODES
  };
})(window);
