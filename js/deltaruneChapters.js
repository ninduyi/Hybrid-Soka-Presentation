/**
 * DELTARUNE CHAPTERS DEFINITIONS — FIREBAT CYBER QUEST
 * Comprehensive presentation content, 100% preserved academic metrics,
 * RPG Party Stats Modal, and Interactive CloudSim Battle Arena.
 */
(function (global) {
  'use strict';

  // =========================================================================
  // KELOMPOK 4 RPG CHARACTER DATA
  // =========================================================================
  const KELOMPOK_4_MEMBERS = [
    {
      id: 1,
      name: 'Thio Billy Amansyah',
      nim: '5027231007',
      role: 'Lead Algorithm Architect & Simulation Engine Developer',
      heroClass: 'Cyber Mage · Systems Architect',
      icon: '🧙‍♂️',
      avatar: './assets/kris_spritesheet.png',
      stats: {
        hp: '120/120',
        tp: '100%',
        lv: 4,
        atk: 95,
        def: 92,
        mag: 98
      },
      skills: [
        { label: 'Algorithm Design & Engine', val: 96, pct: '96%' },
        { label: 'CloudSim Simulation', val: 92, pct: '92%' },
        { label: 'State Machine & UI Logic', val: 95, pct: '95%' },
        { label: 'Documentation & Paper', val: 90, pct: '90%' }
      ],
      equipment: {
        weapon: 'Dual Metaheuristic Compiler',
        armor: 'CloudSim 3.0.3 Kernel Mantle',
        accessory: 'Heuristic Ring of Low Makespan'
      },
      contributions: [
        'Merancang arsitektur penjadwalan hybrid FireBat dan alur kerja 6 tahap di CloudSim 3.0.3.',
        'Mengembangkan simulasi visual 3D realtime, integrasi state machine antarmuka, dan sinkronisasi audio Web Audio API.',
        'Mengkoordinasikan validasi matematis makespan dan derajat ketimpangan (DOI).'
      ],
      specialMove: '🔮 Overworld Kernel Compile: Mengonsolidasikan seluruh antrean task heterogen ke jadwal teroptimal dalam hitungan milidetik.'
    },
    {
      id: 2,
      name: 'Putri Joselina Silitonga',
      nim: '5027241116',
      role: 'Metaheuristic Operator & Firefly Parameter Tuner',
      heroClass: 'Light Paladin · Metaheuristic Specialist',
      icon: '✨',
      avatar: './assets/ralsei/front_idle.png',
      stats: {
        hp: '115/115',
        tp: '100%',
        lv: 4,
        atk: 88,
        def: 94,
        mag: 96
      },
      skills: [
        { label: 'FA Operator Tuning', val: 98, pct: '98%' },
        { label: 'Light Attractiveness (β, γ)', val: 95, pct: '95%' },
        { label: 'CloudSim Experiment Runs', val: 93, pct: '93%' },
        { label: 'Paper & Comparative Analysis', val: 92, pct: '92%' }
      ],
      equipment: {
        weapon: 'Bioluminescent Scepter',
        armor: 'Absorption Barrier Robe (γ=1.0)',
        accessory: 'Prism of Infinite Exploration'
      },
      contributions: [
        'Menyetel parameter daya tarik kunang-kunang: β0 = 1.0, koefisien absorpsi γ = 1.0, dan faktor acak α = 0.2.',
        'Menganalisis mekanisme eksplorasi global agar kandidat jadwal tidak prematurely konvergen ke local minima.',
        'Memvalidasi hasil pengujian komparasi terhadap baseline heuristik RASA dan Max-Min.'
      ],
      specialMove: '🌟 Luminescence Scatter: Memancarkan pulsa cahaya kunang-kunang untuk memperluas ruang pencarian solusi ke seluruh server.'
    },
    {
      id: 3,
      name: 'Muhammad Khairul Yahya',
      nim: '5027241092',
      role: 'CloudSim Experiment Runner & Stochastic Evaluator',
      heroClass: 'Data Berserker · CloudSim Engineer',
      icon: '⚔️',
      avatar: './assets/kris_spritesheet.png',
      stats: {
        hp: '130/130',
        tp: '100%',
        lv: 4,
        atk: 96,
        def: 90,
        mag: 88
      },
      skills: [
        { label: 'CloudSim 3.0.3 Batch Runner', val: 98, pct: '98%' },
        { label: 'GoCJ 600-Task Stochastic Test', val: 96, pct: '96%' },
        { label: 'Scalability (200-1000 Tasks)', val: 94, pct: '94%' },
        { label: 'Boxplot & Stability Verification', val: 93, pct: '93%' }
      ],
      equipment: {
        weapon: 'Twin GoCJ Dataset Hammers',
        armor: 'Heterogeneous Cluster Plate (15 VMs)',
        accessory: 'Stochastic Stopwatch (30 Runs)'
      },
      contributions: [
        'Mengeksekusi 30 stochastic runs berulang pada dataset riil Google Cloud Jobs (GoCJ) 600 tasks di 15 VM heterogen.',
        'Mengonfirmasi Makespan terbaik FireBat sebesar 4058.00 s dan mean 4260.57 s dengan deviasi terkontrol.',
        'Memastikan 100% konsistensi metrik dengan selisih 0.000% terhadap engine CloudSim 3.0.3.'
      ],
      specialMove: '💥 30-Run Stochastic Barrage: Mengeksekusi pengujian Monte Carlo berulang secara paralel untuk memastikan stabilitas statistik.'
    },
    {
      id: 4,
      name: 'Nabilah Anindya Paramesti',
      nim: '5027241006',
      role: 'Bat Echolocation & Multi-Objective Fitness Analyst',
      heroClass: 'Sonar Ranger · Fitness Function Analyst',
      icon: '🎯',
      avatar: './assets/ralsei/front_smile.png',
      stats: {
        hp: '110/110',
        tp: '100%',
        lv: 4,
        atk: 92,
        def: 89,
        mag: 97
      },
      skills: [
        { label: 'Bat Echolocation Modeling', val: 97, pct: '97%' },
        { label: 'Pulse Emission & Loudness', val: 95, pct: '95%' },
        { label: 'Multi-Objective Fitness Evaluation', val: 94, pct: '94%' },
        { label: 'Comparative Study (HGACO vs FB)', val: 92, pct: '92%' }
      ],
      equipment: {
        weapon: 'Ultrasonic Pulse Longbow',
        armor: 'Frequency Tuned Quiver [0, 2.0]',
        accessory: 'Sonar Scope of Precision Convergence'
      },
      contributions: [
        'Memformulasikan fungsi fitness multi-objektif yang memadukan Makespan, Degree of Imbalance (DOI), dan utilisasi ARUR.',
        'Menyetel parameter ekolokasi kelelawar: frekuensi fmin=0, fmax=2.0, loudness A=0.5, dan laju pulsa r=0.5.',
        'Mengevaluasi kinerja komparasi terhadap paper IEEE 2025 HGACO pada dataset yang identik.'
      ],
      specialMove: '🦇 Ultrasonic Echolocation Wave: Mengirimkan gelombang sonar frekuensi tinggi untuk mengunci posisi jadwal terbaik dengan cepat.'
    },
    {
      id: 5,
      name: 'Zahra Hafizhah',
      nim: '5027241121',
      role: 'Standard Deviation Migration Balancer & Documentation Lead',
      heroClass: 'Balance Priest · Load Rebalancer',
      icon: '⚖️',
      avatar: './assets/ralsei/front_happy.png',
      stats: {
        hp: '118/118',
        tp: '100%',
        lv: 4,
        atk: 86,
        def: 95,
        mag: 96
      },
      skills: [
        { label: 'Standard Deviation (SD) Rebalance', val: 98, pct: '98%' },
        { label: 'Task Migration Protocol', val: 95, pct: '95%' },
        { label: 'Energy Consumption Analysis', val: 93, pct: '93%' },
        { label: 'Scientific Paper Documentation', val: 96, pct: '96%' }
      ],
      equipment: {
        weapon: 'Staff of Equal Distribution',
        armor: 'Variance Nullifying Chasuble',
        accessory: 'Holy Emblem of Low DOI (0.0779)'
      },
      contributions: [
        'Mengimplementasikan modul penyeimbang deviasi beban: mengidentifikasi VM overloaded dan memindahkan tugas ke VM underloaded.',
        'Membuktikan reduksi Degree of Imbalance hingga 0.0779 dan efisiensi energi server sebesar 28.5%.',
        'Menuliskan tinjauan pustaka ilmiah lengkap dari Springer Nature (2026), IEEE CCSB (2025), dan MDPI (2018).'
      ],
      specialMove: '🕊️ Zero-Imbalance Sanctuary: Menghapus ketimpangan server dengan memigrasikan tugas berat ke server berkapasitas longgar.'
    }
  ];

  // Helper to open character modal
  function openPartyMemberModal(memberId, app) {
    const member = KELOMPOK_4_MEMBERS.find(m => m.id === Number(memberId)) || KELOMPOK_4_MEMBERS[0];
    const modal = document.getElementById('party-modal');
    const headline = document.getElementById('party-modal-headline');
    const body = document.getElementById('party-modal-body');

    if (!modal || !body) return;

    headline.textContent = `🛡️ PARTY STATS: ${member.name.toUpperCase()} (KELOMPOK 4)`;

    body.innerHTML = `
      <div class="party-modal-card" style="width:100%;padding:0;background:transparent;border:none;box-shadow:none;">
        <div class="party-hero-head">
          <div class="party-hero-avatar-box">
            <span style="font-size:32px;">${member.icon}</span>
          </div>
          <div style="flex:1;">
            <div class="party-hero-title">${member.name}</div>
            <div class="party-hero-role">${member.heroClass}</div>
            <div class="party-hero-nim">NIM: ${member.nim} · LV ${member.stats.lv}</div>
          </div>
          <div style="text-align:right;font-family:var(--font-mono);font-size:14px;">
            <div style="color:var(--dr-cyan);">HP: ${member.stats.hp}</div>
            <div style="color:var(--dr-pink);">TP: ${member.stats.tp}</div>
          </div>
        </div>

        <div style="font-family:var(--font-pixel);font-size:10px;color:var(--dr-gold);margin-top:6px;">
          📊 SKILL & PROJECT CAPABILITY BARS:
        </div>
        <div class="party-stat-bar-group">
          ${member.skills.map(s => `
            <div class="party-stat-row">
              <div class="party-stat-label">${s.label}</div>
              <div class="party-stat-meter">
                <div class="party-stat-fill" style="width:${s.pct};"></div>
              </div>
              <div class="party-stat-val">${s.pct}</div>
            </div>
          `).join('')}
        </div>

        <div style="margin-top:8px;">
          <div style="font-family:var(--font-pixel);font-size:10px;color:var(--dr-cyan);margin-bottom:6px;">
            🎒 EQUIPPED RESEARCH GEAR:
          </div>
          <div style="font-size:14px;color:var(--dr-ice);line-height:1.45;background:rgba(4,4,26,0.65);padding:8px 12px;border-radius:6px;border:1px solid var(--dr-slate);">
            🗡️ <b>Weapon:</b> ${member.equipment.weapon}<br/>
            🛡️ <b>Armor:</b> ${member.equipment.armor}<br/>
            💍 <b>Accessory:</b> ${member.equipment.accessory}
          </div>
        </div>

        <div style="margin-top:8px;">
          <div style="font-family:var(--font-pixel);font-size:10px;color:var(--dr-pink);margin-bottom:6px;">
            📝 KONTRIBUSI SPESIFIK PADA PROYEK:
          </div>
          <ul style="font-size:14px;color:var(--dr-ice);line-height:1.45;padding-left:18px;">
            ${member.contributions.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>

        <div style="margin-top:8px;padding:8px 12px;background:rgba(255,222,0,0.1);border:1px solid var(--dr-gold);border-radius:6px;font-size:13px;color:var(--dr-gold);">
          ${member.specialMove}
        </div>

        <div style="display:flex;justify-content:space-between;margin-top:10px;">
          <button class="dr-sub-btn" id="modal-prev-member">◀ Prev Member</button>
          <button class="dr-sub-btn selected" id="modal-next-member">Next Member ▶</button>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');

    body.querySelector('#modal-prev-member').onclick = () => {
      if (app) app.playSFX('select');
      let prevId = member.id - 1;
      if (prevId < 1) prevId = 5;
      openPartyMemberModal(prevId, app);
    };

    body.querySelector('#modal-next-member').onclick = () => {
      if (app) app.playSFX('select');
      let nextId = member.id + 1;
      if (nextId > 5) nextId = 1;
      openPartyMemberModal(nextId, app);
    };
  }

  // Bind close button once
  document.addEventListener('DOMContentLoaded', () => {
    const btnClose = document.getElementById('btn-close-party-modal');
    const modal = document.getElementById('party-modal');
    if (btnClose && modal) {
      btnClose.onclick = () => {
        if (global.DeltaruneSFX) global.DeltaruneSFX.playCancel();
        modal.classList.add('hidden');
      };
    }
  });

  // =========================================================================
  // CHAPTER DEFINITIONS
  // =========================================================================
  const CHAPTERS = [
    // =======================================================================
    // CHAPTER 1: THE DARK WORLD PORTAL (COVER & KELOMPOK 4)
    // =======================================================================
    {
      id: 'chapter-1',
      number: 1,
      title: 'Chapter 1: Arrival in Cyber Datacenter',
      kicker: 'TUGAS MINGGU 13 · DEMO 1',
      speaker: 'RALSEI GUIDING PRINCE',
      mood: 'smile',
      dialogueBeats: [
        'Selamat datang di Cyber Datacenter! Aku Ralsei, pemandumu hari ini.',
        'Mari jelajahi alokasi tugas cloud berbasis Hybrid Metaheuristik (Firefly × Bat) dari paper Springer Nature 2026!',
        'Klik salah satu dari 5 kartu pahlawan Kelompok 4 di bawah untuk memeriksa RPG stats dan peranan mereka!'
      ],
      notes: 'Buka presentasi secara wajar dan ilmiah: "Selamat pagi/siang Bapak/Ibu dan rekan-rekan. Pada Demo 1 Tugas Minggu 13 ini, kami mempresentasikan salah satu algoritma hybrid dari jurnal ilmiah Springer Nature 2026 bernama FireBat, yang mengombinasikan algoritma Firefly dan Bat. Kami akan menjelaskan alur kerjanya apa adanya, membandingkannya dengan metode asalnya, serta membahas trade-off dan keterbatasannya secara objektif."',

      render(container, app) {
        container.innerHTML = `
          <div class="dr-chapter-container">
            <!-- Cover Header Card with Balanced Spacing -->
            <div class="dr-card gold" style="padding:16px 22px;">
              <span class="dr-chapter-kicker">TUGAS MINGGU 13 · DEMO 1 · SPRINGER NATURE 2026</span>
              <h1 class="dr-chapter-title" style="font-size:20px;margin-bottom:6px;">
                Penjadwalan Cloud:<br/>
                <span style="color:var(--dr-cyan);">Hybrid Firefly × Bat (FireBat)</span>
              </h1>
              <p class="dr-chapter-subtitle" style="margin-bottom:0;font-size:16px;">
                Studi implementasi pola hybrid metaheuristik untuk mengalokasikan tugas komputasi heterogen pada Virtual Machine di CloudSim 3.0.3.
              </p>
            </div>

            <!-- Team Inspector Grid -->
            <div class="dr-card pink" style="padding:16px 20px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <div style="font-family:var(--font-pixel);font-size:10px;color:var(--dr-gold);letter-spacing:1px;">
                  👥 ANGGOTA KELOMPOK 4 (KLIK KARTU UNTUK BUKA RPG STATS):
                </div>
                <div style="font-family:var(--font-mono);font-size:14px;color:var(--dr-cyan);">
                  5 Pahlawan Aktif · LV 4
                </div>
              </div>

              <!-- 5 Clickable Member Cards with mini stats -->
              <div class="dr-party-grid" id="party-card-grid">
                ${KELOMPOK_4_MEMBERS.map(m => `
                  <div class="dr-party-card-btn" data-member="${m.id}" title="Klik untuk membuka detail & stat ${m.name}">
                    <div class="party-icon">${m.icon}</div>
                    <div class="party-name">${m.name}</div>
                    <div class="party-nim">NIM: ${m.nim}</div>
                    <div class="party-role-tag">${m.heroClass.split('·')[0].trim()}</div>
                    <div class="party-mini-bar" title="${m.skills[0].label}: ${m.skills[0].pct}">
                      <div class="party-mini-fill" style="width:${m.skills[0].pct};"></div>
                    </div>
                    <div style="font-family:var(--font-mono);font-size:12px;color:var(--dr-gold);margin-top:2px;">
                      ${m.skills[0].label.split('&')[0].trim()}: ${m.skills[0].pct}
                    </div>
                  </div>
                `).join('')}
              </div>

              <div id="team-info-box" style="margin-top:12px;padding:10px 14px;background:rgba(4,4,26,0.7);border:1px solid var(--dr-slate);border-radius:6px;font-size:15px;color:var(--dr-cyan);display:flex;justify-content:space-between;align-items:center;">
                <span>⚡ <i>Klik salah satu kartu nama di atas untuk melihat detail peranan, kontribusi kode, dan equipment!</i></span>
                <button class="dr-sub-btn selected" id="btn-quick-hero" style="font-size:13px;padding:4px 10px;">Buka Party Stats ➔</button>
              </div>
            </div>
          </div>
        `;

        // Mount Ralsei companion on stage
        if (global.RalseiCompanion) {
          global.RalseiCompanion.init(container);
          global.RalseiCompanion.setExpression('smile');
        }

        // Add Click handlers to Member Cards
        container.querySelectorAll('#party-card-grid .dr-party-card-btn').forEach(card => {
          card.onclick = () => {
            app.playSFX('confirm');
            const id = card.dataset.member;
            openPartyMemberModal(id, app);
            if (global.RalseiCompanion) {
              global.RalseiCompanion.setExpression('happy');
              global.RalseiCompanion.showSpeech('Hebat! Anggota Kelompok 4 siap mempresentasikan alokasi Cloud!', 3500);
            }
          };
        });

        const btnQuick = container.querySelector('#btn-quick-hero');
        if (btnQuick) {
          btnQuick.onclick = () => {
            app.playSFX('confirm');
            openPartyMemberModal(1, app);
          };
        }
      }
    },

    // =======================================================================
    // CHAPTER 2: ENCOUNTER OF TWO METAHEURISTICS (FA vs BA)
    // =======================================================================
    {
      id: 'chapter-2',
      number: 2,
      title: 'Chapter 2: Encounter of Two Metaheuristics',
      kicker: 'LATAR BELAKANG METODE TUNGGAL',
      speaker: 'RALSEI GUIDING PRINCE',
      mood: 'talk',
      dialogueBeats: [
        'Dua Metaheuristik Tunggal memiliki sifat pencarian bertolak belakang!',
        'Firefly unggul dalam Eksplorasi Global Luas, sedangkan Bat sangat cepat dalam Eksploitasi Lokal!',
        'FireBat menggabungkan kedua sifat ini menjadi satu algoritma hybrid yang tangguh!'
      ],
      notes: 'Bawakan secara objektif: "Kita melihat dua metode sebelumnya apa adanya: Firefly kuat dalam menyebar mencari alternatif, tapi lambat mengerucut. Sedangkan Bat sangat cepat mengerucut, tapi rentan terjebak di solusi lokal jika tebakan awalnya kurang pas. Paper Pathania et al. mencoba mengombinasikan kelebihan kedua operator ini."',

      render(container, app) {
        container.innerHTML = `
          <div class="dr-chapter-container">
            <div class="dr-grid-2">
              <!-- Firefly Card -->
              <div class="dr-card" style="padding:18px 22px;display:flex;flex-direction:column;justify-content:space-between;">
                <div>
                  <div style="font-family:var(--font-pixel);font-size:9px;color:var(--dr-cyan);margin-bottom:6px;">METODE TUNGGAL #1 · KUNANG-KUNANG</div>
                  <h3 style="font-family:var(--font-pixel);font-size:16px;color:var(--dr-cyan);margin-bottom:10px;">Firefly Algorithm (FA)</h3>
                  <p style="font-size:16px;color:var(--dr-ice);line-height:1.5;margin-bottom:12px;">
                    Terinspirasi pola kilau cahaya kunang-kunang tropis. Partikel menyusuri ruang pencarian alokasi secara acak dengan keberagaman populasi tinggi.
                  </p>

                  <div style="font-size:14px;color:var(--dr-ice);background:rgba(4,4,26,0.6);padding:10px 14px;border-radius:6px;border:1px solid rgba(117,251,237,0.3);margin-bottom:12px;">
                    <div style="font-family:var(--font-mono);color:var(--dr-cyan);font-weight:bold;margin-bottom:4px;">Parameter Tuning Utama:</div>
                    • Daya tarik dasar (β0): <b>1.0</b><br/>
                    • Koefisien absorpsi (γ): <b>1.0</b> (intensitas meredup seiring jarak)<br/>
                    • Randomization factor (α): <b>0.2</b>
                  </div>
                </div>

                <div style="padding:10px 14px;background:rgba(235,0,149,0.14);border:1px solid var(--dr-pink);border-radius:6px;font-size:14px;color:var(--dr-pink);">
                  ⚠️ <b>Batasan Nyata:</b> Konvergensi lambat di iterasi akhir karena tidak memiliki vektor kecepatan inersia.
                </div>
              </div>

              <!-- Bat Card -->
              <div class="dr-card pink" style="padding:18px 22px;display:flex;flex-direction:column;justify-content:space-between;">
                <div>
                  <div style="font-family:var(--font-pixel);font-size:9px;color:var(--dr-pink);margin-bottom:6px;">METODE TUNGGAL #2 · KELELAWAR</div>
                  <h3 style="font-family:var(--font-pixel);font-size:16px;color:var(--dr-pink);margin-bottom:10px;">Bat Algorithm (BA)</h3>
                  <p style="font-size:16px;color:var(--dr-ice);line-height:1.5;margin-bottom:12px;">
                    Terinspirasi sistem ekolokasi kelelawar mikro. Memancarkan pulsa sonar ultrasonic untuk mengunci kandidat jadwal lokal secara agresif.
                  </p>

                  <div style="font-size:14px;color:var(--dr-ice);background:rgba(4,4,26,0.6);padding:10px 14px;border-radius:6px;border:1px solid rgba(235,0,149,0.3);margin-bottom:12px;">
                    <div style="font-family:var(--font-mono);color:var(--dr-pink);font-weight:bold;margin-bottom:4px;">Parameter Tuning Utama:</div>
                    • Rentang frekuensi (fmin, fmax): <b>[0, 2.0]</b><br/>
                    • Loudness sonar (A): <b>0.5</b> (menurun seiring iterasi)<br/>
                    • Pulse rate emission (r): <b>0.5</b> (meningkat saat mendekati target)
                  </div>
                </div>

                <div style="padding:10px 14px;background:rgba(235,0,149,0.14);border:1px solid var(--dr-pink);border-radius:6px;font-size:14px;color:var(--dr-pink);">
                  ⚠️ <b>Batasan Nyata:</b> Rentan terjebak di local optimum (prematur) jika tebakan awal kurang variatif.
                </div>
              </div>
            </div>
          </div>
        `;

        if (global.RalseiCompanion) {
          global.RalseiCompanion.init(container);
          global.RalseiCompanion.setExpression('talk');
        }
      }
    },

    // =======================================================================
    // CHAPTER 3: THE 6-STEP CLOUD SCHEDULING QUEST
    // =======================================================================
    {
      id: 'chapter-3',
      number: 3,
      title: 'Chapter 3: The 6-Step Cloud Scheduling Quest',
      kicker: 'SKENARIO ALUR PENJADWALAN CLOUD 3D',
      speaker: 'RALSEI GUIDING PRINCE',
      mood: 'smile',
      dialogueBeats: [
        'Mari ikuti 6 langkah alur kerja penyeimbangan beban di Datacenter!',
        'Dari kedatangan task, eksplorasi FA, eksploitasi BA, hingga migrasi standar deviasi!',
        'Gunakan tombol Step 1-6 di atas untuk melihat simulasi 3D real-time!'
      ],
      notes: 'Gunakan tombol Step 1-6 untuk melihat tahapan alur secara runut. Setiap langkah menjelaskan fungsi operator algoritma secara jelas.',

      render(container, app) {
        container.innerHTML = `
          <div class="dr-chapter-container">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2px;">
              <span class="dr-chapter-kicker">SKENARIO 6 LANGKAH FAKTUAL</span>
              <div style="display:flex;gap:8px;">
                <button class="dr-sub-btn" id="btn-step-prev">◀ Prev Step</button>
                <button class="dr-sub-btn selected" id="btn-step-next">Next Step ▶</button>
              </div>
            </div>

            <!-- Step Selector Buttons -->
            <div class="dr-submenu-grid" style="margin-bottom:8px;gap:8px;">
              <button class="dr-sub-btn selected" data-step="1">1. Task Masuk</button>
              <button class="dr-sub-btn" data-step="2">2. Ketimpangan Beban</button>
              <button class="dr-sub-btn" data-step="3">3. Eksplorasi FA</button>
              <button class="dr-sub-btn" data-step="4">4. Eksploitasi BA</button>
              <button class="dr-sub-btn" data-step="5">5. Migrasi Tugas</button>
              <button class="dr-sub-btn" data-step="6">6. Kondisi Akhir</button>
            </div>

            <div class="dr-grid-2" style="grid-template-columns: 1.22fr 0.78fr; gap:16px;">
              <!-- 3D Viewport Container -->
              <div class="dr-card" style="padding:0;position:relative;overflow:hidden;display:flex;flex-direction:column;">
                <div id="canvas-story-3d" style="width:100%;height:270px;"></div>
                <div style="position:absolute;top:8px;left:10px;font-family:var(--font-pixel);font-size:9px;color:var(--dr-gold);background:rgba(4,4,26,0.9);padding:5px 8px;border:1px solid var(--dr-gold);border-radius:4px;" id="story-tag">
                  LANGKAH 1: KEDATANGAN TUGAS
                </div>

                <!-- Live VM Status Bar -->
                <div style="padding:6px 12px;background:rgba(4,4,26,0.95);border-top:1px solid var(--dr-cyan);display:flex;gap:6px;">
                  <div style="flex:1;text-align:center;font-size:12px;color:var(--dr-pink);" id="step-vm-1">VM-1: 85 MIPS</div>
                  <div style="flex:1;text-align:center;font-size:12px;color:var(--dr-gold);" id="step-vm-2">VM-2: 115 MIPS</div>
                  <div style="flex:1;text-align:center;font-size:12px;color:var(--dr-cyan);" id="step-vm-3">VM-3: 145 MIPS</div>
                  <div style="flex:1;text-align:center;font-size:12px;color:var(--dr-green);" id="step-vm-4">VM-4: 175 MIPS</div>
                </div>
              </div>

              <!-- Step Narrative Card -->
              <div class="dr-card gold" style="display:flex;flex-direction:column;justify-content:space-between;padding:16px 20px;">
                <div>
                  <div style="font-family:var(--font-pixel);font-size:9px;color:var(--dr-gold);margin-bottom:4px;" id="story-sub">LANGKAH 1 DARI 6</div>
                  <h3 style="font-family:var(--font-pixel);font-size:15px;color:var(--dr-cyan);margin-bottom:8px;" id="story-title">1. Kedatangan Task Heterogen</h3>
                  <div style="font-size:15px;color:var(--dr-ice);line-height:1.45;" id="story-body">
                    ☁️ Sejumlah tugas komputasi (*cloudlets*) dengan panjang instruksi bervariasi tiba di datacenter. Server virtual yang tersedia memiliki spesifikasi pemrosesan heterogen dari VM-1 (85 MIPS) hingga VM-4 (175 MIPS).
                  </div>
                </div>

                <div style="padding:8px 12px;background:rgba(4,4,26,0.7);border:1px solid var(--dr-gold);border-radius:6px;font-size:13px;color:var(--dr-gold);margin-top:10px;" id="story-metric">
                  ⚡ Status: <b>Tugas Masuk Antrean Buffer</b> · Alokasi: <b>Belum Dimulai</b>
                </div>
              </div>
            </div>
          </div>
        `;

        if (global.RalseiCompanion) {
          global.RalseiCompanion.init(container);
          global.RalseiCompanion.setExpression('idle');
        }

        const simBox = container.querySelector('#canvas-story-3d');
        const story3d = global.Story3D ? global.Story3D.initStory3D(simBox) : null;

        const STEPS_DATA = {
          1: {
            tag: 'LANGKAH 1: KEDATANGAN TUGAS',
            sub: 'LANGKAH 1 DARI 6 · KEDATANGAN TUGAS',
            title: '1. Kedatangan Task Heterogen',
            body: '☁️ Sejumlah tugas komputasi (*cloudlets*) dengan panjang instruksi bervariasi tiba di datacenter. Server virtual heterogen VM-1 (85 MIPS) hingga VM-4 (175 MIPS) siap dipetakan.',
            metric: '⚡ Status: <b>Tugas Masuk Antrean Buffer</b> · Alokasi: <b>Belum Dimulai</b>',
            dialogue: 'Tugas komputasi baru saja tiba! Spesifikasi VM beragam dari 85 MIPS hingga 175 MIPS. Antrean siap dipetakan!',
            mood: 'idle'
          },
          2: {
            tag: 'LANGKAH 2: KETIMPANGAN BEBAN AWAL',
            sub: 'LANGKAH 2 DARI 6 · MASALAH ALOKASI SEDERHANA',
            title: '2. Masalah Ketimpangan Beban (Imbalance)',
            body: '☁️ Tanpa optimasi (misal FCFS biasa), VM berkapasitas kecil (VM-1) menerima terlalu banyak beban, sedangkan VM besar (VM-4) kurang termanfaatkan. Makespan menjadi sangat lambat (~24.5s).',
            metric: '⚡ Makespan: <b style="color:var(--dr-pink)">24.5s (Lambat)</b> · Variansi Beban: <b style="color:var(--dr-pink)">Tinggi (Imbalance)</b>',
            dialogue: 'Gawat! Tanpa optimasi, beban VM-1 menumpuk parah! Waktu Makespan membengkak hingga 24.5 detik!',
            mood: 'surprised'
          },
          3: {
            tag: 'LANGKAH 3: FASE EKSPLORASI FIREFLY',
            sub: 'LANGKAH 3 DARI 6 · OPERATOR FIREFLY',
            title: '3. Fase Eksplorasi Global oleh Firefly',
            body: '☁️ Sub-populasi Firefly menyusuri ruang solusi penugasan secara acak dan luas. Daya tarik kilauan cahaya menjaga agar kandidat jadwal tidak mengerucut terlalu cepat ke satu titik.',
            metric: '⚡ Fokus: <b>Eksplorasi Global Luas</b> · Keberagaman Populasi: <b>Tinggi</b>',
            dialogue: 'Sub-populasi Firefly menyebar menyusuri alternatif jadwal secara luas agar variasi solusi tetap terbuka!',
            mood: 'talk'
          },
          4: {
            tag: 'LANGKAH 4: FASE EKSPLOITASI BAT',
            sub: 'LANGKAH 4 DARI 6 · OPERATOR BAT',
            title: '4. Fase Eksploitasi Lokal oleh Bat Algorithm',
            body: '☁️ Sub-populasi Bat menajamkan kandidat jadwal yang ditemukan. Melalui frekuensi sonar dan laju emisi pulsa, partikel bergerak cepat mencari nilai fitness terbaik di sekitar kandidat unggul.',
            metric: '⚡ Fokus: <b>Eksploitasi Lokal Cepat</b> · Konvergensi: <b>Cepat</b>',
            dialogue: 'Sub-populasi Bat mengunci area solusi potensial dengan gelombang sonar untuk mempercepat konvergensi!',
            mood: 'talk'
          },
          5: {
            tag: 'LANGKAH 5: FASE REBALANCING STANDAR DEVIASI',
            sub: 'LANGKAH 5 DARI 6 · MEKANISME MIGRASI TUGAS',
            title: '5. Fase Penyeimbangan Beban (Task Migration)',
            body: '☁️ Setelah iterasi BA, sistem mengevaluasi Standar Deviasi (SD) beban tiap VM. Jika ada VM yang bebannya melebihi ambang batas (VM-1), tugas dipindahkan ke VM yang di bawah rata-rata (VM-4).',
            metric: '⚡ Mekanisme: <b>Task dialihkan dari VM Overloaded ke VM Underloaded</b>',
            dialogue: 'Evaluasi Standar Deviasi mendeteksi VM-1 terlalu padat! Tugas dipindahkan secara otomatis ke VM-4 yang masih longgar!',
            mood: 'smile'
          },
          6: {
            tag: 'LANGKAH 6: KONDISI AKHIR BEBAN SERVER',
            sub: 'LANGKAH 6 DARI 6 · HASIL EVALUASI',
            title: '6. Kondisi Akhir Beban Server Pasca-Migrasi',
            body: '☁️ Distribusi beban di seluruh server menjadi rata. Waktu Makespan tercatat di kisaran <b>15.4 detik</b> dan derajat ketimpangan (DOI) terukur <b>0.071</b>.',
            metric: '⚡ Makespan: <b style="color:var(--dr-gold)">15.4 detik</b> · Derajat Ketimpangan (DOI): <b style="color:var(--dr-green)">0.071 (Seimbang)</b>',
            dialogue: 'Selesai! Beban server kini seimbang sempurna. Makespan turun ke 15.4s dan DOI menjadi 0.071!',
            mood: 'happy'
          }
        };

        let currentStep = 1;

        function updateStep(stepNum) {
          currentStep = stepNum;
          if (story3d) story3d.setStep(stepNum);

          container.querySelectorAll('.dr-submenu-grid button').forEach(b => {
            b.classList.toggle('selected', Number(b.dataset.step) === stepNum);
          });

          const d = STEPS_DATA[stepNum];
          container.querySelector('#story-tag').textContent = d.tag;
          container.querySelector('#story-sub').textContent = d.sub;
          container.querySelector('#story-title').textContent = d.title;
          container.querySelector('#story-body').innerHTML = d.body;
          container.querySelector('#story-metric').innerHTML = d.metric;

          if (global.RalseiCompanion) {
            global.RalseiCompanion.setExpression(d.mood);
            if (d.mood === 'happy') global.RalseiCompanion.triggerSparkles();
          }

          app.typeDialogue('RALSEI GUIDING PRINCE', d.dialogue, d.mood);
        }

        container.querySelectorAll('.dr-submenu-grid button').forEach(btn => {
          btn.onclick = () => {
            app.playSFX('select');
            updateStep(Number(btn.dataset.step));
          };
        });

        container.querySelector('#btn-step-prev').onclick = () => {
          app.playSFX('select');
          let t = currentStep - 1;
          if (t < 1) t = 6;
          updateStep(t);
        };

        container.querySelector('#btn-step-next').onclick = () => {
          app.playSFX('select');
          let t = currentStep + 1;
          if (t > 6) t = 1;
          updateStep(t);
        };

        updateStep(1);
      }
    },

    // =======================================================================
    // CHAPTER 4: INTERACTIVE CLOUDSIM BATTLE ARENA (ACT / SIMULATE)
    // =======================================================================
    {
      id: 'chapter-4',
      number: 4,
      title: 'Chapter 4: Interactive CloudSim Task-to-VM Battle Arena',
      kicker: 'SIMULASI LIVE BATTLE TASK VS SERVER',
      speaker: 'RALSEI GUIDING PRINCE',
      mood: 'talk',
      dialogueBeats: [
        'Selamat datang di CloudSim Task-to-VM Battle Arena!',
        'Uji langsung Cloudlets (Tasks) bertarung dieksekusi oleh Virtual Machine!',
        'Bandingkan Pure Firefly (FA), Pure Bat (BA), HGACO (IEEE 2025), dan FireBat Hybrid!'
      ],
      notes: 'Sampaikan secara objektif: "Di slide interaktif ini, presenter dapat mengatur jumlah tugas (50 hingga 600) dan memilih algoritma untuk melihat bagaimana paket beban dialokasikan ke VM secara visual. Sinergi fase eksplorasi FA, eksploitasi BA, dan migrasi SD terbukti mencegah bottleneck VM."',

      render(container, app) {
        container.innerHTML = `
          <div class="dr-chapter-container">
            <div class="battle-arena-root">
              <!-- Controls Toolbar -->
              <div class="battle-control-bar">
                <div style="display:flex;align-items:center;gap:10px;">
                  <span style="font-family:var(--font-pixel);font-size:9px;color:var(--dr-gold);">ALGORITMA:</span>
                  <div class="dr-submenu-grid" id="sim-algo-selector">
                    <button class="dr-sub-btn" data-algo="fa" style="color:var(--dr-cyan);">FA (Firefly)</button>
                    <button class="dr-sub-btn" data-algo="ba" style="color:var(--dr-pink);">BA (Bat)</button>
                    <button class="dr-sub-btn" data-algo="hgaco" style="color:#4ce6cf;">HGACO (2025)</button>
                    <button class="dr-sub-btn selected" data-algo="firebat" style="color:var(--dr-gold);font-weight:bold;">★ FireBat (Hybrid)</button>
                  </div>
                </div>

                <div style="display:flex;align-items:center;gap:12px;">
                  <div style="font-family:var(--font-pixel);font-size:9px;color:var(--dr-cyan);">
                    TASKS: <span id="lbl-task-count" style="color:var(--dr-gold);">100</span>
                  </div>
                  <input type="range" min="50" max="600" step="50" value="100" id="rng-tasks" style="width:110px;accent-color:var(--dr-cyan);cursor:pointer;" />

                  <div style="display:flex;gap:6px;">
                    <button class="dr-sub-btn selected" id="btn-run-battle">▶ Run Battle</button>
                    <button class="dr-sub-btn" id="btn-reset-battle">↺ Reset</button>
                  </div>
                </div>
              </div>

              <!-- Real-time Indicator HUD -->
              <div class="dr-grid-3" style="gap:10px;">
                <div class="dr-card gold" style="padding:8px 12px;">
                  <div style="font-size:9px;color:var(--dr-gold);font-family:var(--font-pixel);">MAKESPAN (WAKTU SELESAI)</div>
                  <div style="font-size:18px;font-family:var(--font-pixel);color:var(--dr-gold);margin:2px 0;" id="hud-makespan">15.4 s</div>
                  <div style="font-size:12px;color:var(--dr-ice);" id="hud-makespan-desc">Optimal pada beban uji 100 tasks</div>
                </div>

                <div class="dr-card" style="padding:8px 12px;">
                  <div style="font-size:9px;color:var(--dr-cyan);font-family:var(--font-pixel);">DEGREE OF IMBALANCE (DOI)</div>
                  <div style="font-size:18px;font-family:var(--font-pixel);color:var(--dr-cyan);margin:2px 0;" id="hud-doi">0.071</div>
                  <div style="font-size:12px;color:var(--dr-ice);" id="hud-doi-desc">Distribusi merata (Ideal < 0.15)</div>
                </div>

                <div class="dr-card pink" style="padding:8px 12px;">
                  <div style="font-size:9px;color:var(--dr-pink);font-family:var(--font-pixel);">UTILISASI / EFISIENSI ENERGI</div>
                  <div style="font-size:18px;font-family:var(--font-pixel);color:var(--dr-pink);margin:2px 0;" id="hud-energy">ARUR: 96.6%</div>
                  <div style="font-size:12px;color:var(--dr-ice);" id="hud-energy-desc">↓ 28.5% konsumsi daya idle</div>
                </div>
              </div>

              <!-- 3D Interactive Battle Arena Stage -->
              <div class="battle-3d-stage" id="battle-3d-stage">
                <div id="canvas-battle-3d"></div>
                <div class="battle-3d-hint">👑 3D ARENA: DRAG/ORBIT • SCROLL ZOOM • KLIK MENARA/QUEUE UNTUK INFO AWAM</div>
                <div class="battle-3d-cam-bar">
                  <button class="dr-cam-btn" id="btn-cam-reset" title="Kembalikan sudut pandang isometrik standar">🎥 Reset Cam</button>
                  <button class="dr-cam-btn" id="btn-cam-focus" title="Pusatkan kamera pada menara VM">🔍 Fokus VM</button>
                  <button class="dr-cam-btn" id="btn-cam-top" title="Pandangan atas komparasi 4 menara">📐 Atas</button>
                  <button class="dr-cam-btn" id="btn-cam-help" title="Penjelasan cara kerja visual 3D untuk awam">💡 Panduan</button>
                </div>
                <!-- Interactive Layman Explanation Tooltip -->
                <div class="battle-3d-tooltip hidden" id="battle-3d-tooltip">
                  <div class="tooltip-header">
                    <span class="tooltip-title" id="tooltip-title">INFO MENARA 3D</span>
                    <button class="tooltip-close-btn" id="tooltip-close-btn">&times;</button>
                  </div>
                  <p class="tooltip-body" id="tooltip-body">Klik menara kristal mana saja atau gerbang tugas untuk melihat penjelasan intuitif.</p>
                </div>
              </div>

              <!-- Synchronous Compact Mini-Card Strip for 4 VMs -->
              <div class="battle-vm-summary-strip" id="battle-vm-summary-strip">
                <!-- VM-1 -->
                <div class="battle-vm-mini-card optimal" id="card-vm-1" title="Klik untuk fokus 3D ke VM-1">
                  <div style="display:flex;justify-content:space-between;align-items:center;">
                    <span style="font-family:var(--font-pixel);font-size:9px;color:var(--dr-pink);">VM-1 (Small)</span>
                    <span style="font-size:11px;color:var(--dr-slate);">85 MIPS</span>
                  </div>
                  <div class="battle-load-track" style="margin:2px 0;height:6px;">
                    <div class="battle-load-fill" id="fill-vm-1" style="width:48%;background:var(--dr-gold);"></div>
                  </div>
                  <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--dr-ice);">
                    <span>Tasks: <b id="task-cnt-1">24</b></span>
                    <span id="load-val-1">Load: 48%</span>
                  </div>
                  <div id="status-vm-1" style="font-size:10px;color:var(--dr-cyan);font-family:var(--font-pixel);">● SEIMBANG</div>
                </div>

                <!-- VM-2 -->
                <div class="battle-vm-mini-card optimal" id="card-vm-2" title="Klik untuk fokus 3D ke VM-2">
                  <div style="display:flex;justify-content:space-between;align-items:center;">
                    <span style="font-family:var(--font-pixel);font-size:9px;color:var(--dr-gold);">VM-2 (Medium)</span>
                    <span style="font-size:11px;color:var(--dr-slate);">115 MIPS</span>
                  </div>
                  <div class="battle-load-track" style="margin:2px 0;height:6px;">
                    <div class="battle-load-fill" id="fill-vm-2" style="width:52%;background:var(--dr-gold);"></div>
                  </div>
                  <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--dr-ice);">
                    <span>Tasks: <b id="task-cnt-2">26</b></span>
                    <span id="load-val-2">Load: 52%</span>
                  </div>
                  <div id="status-vm-2" style="font-size:10px;color:var(--dr-cyan);font-family:var(--font-pixel);">● SEIMBANG</div>
                </div>

                <!-- VM-3 -->
                <div class="battle-vm-mini-card optimal" id="card-vm-3" title="Klik untuk fokus 3D ke VM-3">
                  <div style="display:flex;justify-content:space-between;align-items:center;">
                    <span style="font-family:var(--font-pixel);font-size:9px;color:var(--dr-cyan);">VM-3 (Large)</span>
                    <span style="font-size:11px;color:var(--dr-slate);">145 MIPS</span>
                  </div>
                  <div class="battle-load-track" style="margin:2px 0;height:6px;">
                    <div class="battle-load-fill" id="fill-vm-3" style="width:50%;background:var(--dr-gold);"></div>
                  </div>
                  <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--dr-ice);">
                    <span>Tasks: <b id="task-cnt-3">25</b></span>
                    <span id="load-val-3">Load: 50%</span>
                  </div>
                  <div id="status-vm-3" style="font-size:10px;color:var(--dr-cyan);font-family:var(--font-pixel);">● SEIMBANG</div>
                </div>

                <!-- VM-4 -->
                <div class="battle-vm-mini-card optimal" id="card-vm-4" title="Klik untuk fokus 3D ke VM-4">
                  <div style="display:flex;justify-content:space-between;align-items:center;">
                    <span style="font-family:var(--font-pixel);font-size:9px;color:var(--dr-green);">VM-4 (X-Large)</span>
                    <span style="font-size:11px;color:var(--dr-slate);">175 MIPS</span>
                  </div>
                  <div class="battle-load-track" style="margin:2px 0;height:6px;">
                    <div class="battle-load-fill" id="fill-vm-4" style="width:51%;background:var(--dr-gold);"></div>
                  </div>
                  <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--dr-ice);">
                    <span>Tasks: <b id="task-cnt-4">25</b></span>
                    <span id="load-val-4">Load: 51%</span>
                  </div>
                  <div id="status-vm-4" style="font-size:10px;color:var(--dr-cyan);font-family:var(--font-pixel);">● SEIMBANG</div>
                </div>
              </div>

              <!-- Phase Banner & Status Row -->
              <div class="battle-phase-row">
                <span id="phase-banner">✨ FIREBAT HYBRID: FA + BA + REBALANCING SD</span>
                <span id="status-banner">Status: Terseimbang Optimal!</span>
              </div>
            </div>
          </div>
        `;

        if (global.RalseiCompanion) {
          global.RalseiCompanion.init(container);
          global.RalseiCompanion.setExpression('happy');
        }

        // Live Simulation Variables
        let activeAlgo = 'firebat';
        let taskCount = 100;
        let isSimRunning = false;

        const rngSlider = container.querySelector('#rng-tasks');
        const lblTaskCount = container.querySelector('#lbl-task-count');
        const btnRun = container.querySelector('#btn-run-battle');
        const btnReset = container.querySelector('#btn-reset-battle');

        const hudMakespan = container.querySelector('#hud-makespan');
        const hudDoi = container.querySelector('#hud-doi');
        const hudEnergy = container.querySelector('#hud-energy');
        const phaseBanner = container.querySelector('#phase-banner');
        const statusBanner = container.querySelector('#status-banner');

        const tooltip = container.querySelector('#battle-3d-tooltip');
        const tooltipTitle = container.querySelector('#tooltip-title');
        const tooltipBody = container.querySelector('#tooltip-body');
        const tooltipClose = container.querySelector('#tooltip-close-btn');

        if (tooltipClose) {
          tooltipClose.onclick = () => tooltip.classList.add('hidden');
        }

        function showTooltip(title, bodyHtml) {
          if (!tooltip) return;
          tooltipTitle.textContent = title;
          tooltipBody.innerHTML = bodyHtml;
          tooltip.classList.remove('hidden');
        }

        // Initialize 3D Arena Engine
        let sim3dInstance = null;
        const arenaCanvasBox = container.querySelector('#canvas-battle-3d');

        function handle3DElementClick(data, algoKey) {
          app.playSFX('select');
          const algoInfo = global.InteractiveSim3D?.ALGO_MODES[algoKey] || {};
          if (data.type === 'vm') {
            const vmDef = data.def;
            const vmIdx = data.vmIdx;
            const exp = (algoInfo.vmExplanations && algoInfo.vmExplanations[vmIdx])
              ? algoInfo.vmExplanations[vmIdx]
              : `${vmDef.name}: ${vmDef.descAwam}`;
            showTooltip(
              `🏛️ ${vmDef.name} (${vmDef.mips} MIPS) · ${vmDef.role}`,
              `<span style="color:var(--dr-cyan);font-weight:bold;">Status Analisis:</span> ${exp}<br><span style="font-size:12px;color:var(--dr-slate);margin-top:4px;display:block;">ℹ️ <i>Karakteristik Hardware:</i> ${vmDef.descAwam}</span>`
            );
            const mood = algoKey === 'firebat' ? 'happy' : (algoKey === 'fa' ? 'talk' : 'surprised');
            if (global.RalseiCompanion) global.RalseiCompanion.setExpression(mood);
            app.typeDialogue('RALSEI GUIDING PRINCE', exp, mood);
          } else if (data.type === 'queue') {
            showTooltip(
              '📥 CLOUDLETS QUEUE (SUMBER ANTREAN DATA)',
              `Pintu gerbang kedatangan paket tugas komputasi. Saat ini terdapat <b>${taskCount} Cloudlets</b> dalam antrean. Algoritma <b>${algoInfo.name}</b> sedang mengarahkan bola energi tugas menuju ke-4 menara VM server.<br><span style="font-size:12px;color:var(--dr-gold);margin-top:4px;display:block;">💡 Geser slider <b>TASKS</b> untuk menambah beban atau klik <b>Run Battle</b> untuk melihat pergerakan tugas!</span>`
            );
            app.typeDialogue('RALSEI GUIDING PRINCE', `Ada ${taskCount} tugas Cloudlet di antrean siap dieksekusi oleh 4 Virtual Machine!`, 'smile');
          }
        }

        if (global.InteractiveSim3D) {
          sim3dInstance = global.InteractiveSim3D.initArena(arenaCanvasBox, {
            onElementClick: (data, currentAlgo) => {
              handle3DElementClick(data, currentAlgo);
            }
          });
        }

        // Camera control buttons
        const btnCamReset = container.querySelector('#btn-cam-reset');
        const btnCamFocus = container.querySelector('#btn-cam-focus');
        const btnCamTop = container.querySelector('#btn-cam-top');
        const btnCamHelp = container.querySelector('#btn-cam-help');

        let focusCycleIdx = 0;
        const focusTargets = ['all', 'vm1', 'vm2', 'vm3', 'vm4'];

        if (btnCamReset) {
          btnCamReset.onclick = () => {
            app.playSFX('select');
            if (sim3dInstance) sim3dInstance.resetCamera();
            if (btnCamFocus) btnCamFocus.textContent = '🔍 Fokus VM';
          };
        }

        if (btnCamFocus) {
          btnCamFocus.onclick = () => {
            app.playSFX('select');
            focusCycleIdx = (focusCycleIdx + 1) % focusTargets.length;
            const targetKey = focusTargets[focusCycleIdx];
            if (sim3dInstance) sim3dInstance.focusCamera(targetKey);
            btnCamFocus.textContent = targetKey === 'all' ? '🔍 Fokus VM' : `🔍 Fokus ${targetKey.toUpperCase()}`;
            if (targetKey !== 'all') {
              const vmIdx = parseInt(targetKey.replace('vm', '')) - 1;
              handle3DElementClick({ type: 'vm', vmIdx, def: global.InteractiveSim3D?.VM_DEFS[vmIdx] }, activeAlgo);
            }
          };
        }

        if (btnCamTop) {
          btnCamTop.onclick = () => {
            app.playSFX('select');
            if (sim3dInstance) sim3dInstance.focusCamera('top');
            if (btnCamFocus) btnCamFocus.textContent = '🔍 Fokus VM';
          };
        }

        if (btnCamHelp) {
          btnCamHelp.onclick = () => {
            app.playSFX('confirm');
            const algoInfo = global.InteractiveSim3D?.ALGO_MODES[activeAlgo] || {};
            showTooltip(
              `💡 CARA MEMBACA VISUALISASI 3D (${algoInfo.name})`,
              `${algoInfo.explanation}<br><br><b style="color:var(--dr-cyan);">Kontrol Interaksi:</b> Klik & geser kursor untuk memutar kamera 3D (orbit), scroll roda mouse untuk zoom, atau klik menara/gerbang antrean secara langsung!`
            );
            app.typeDialogue('RALSEI GUIDING PRINCE', algoInfo.explanation, activeAlgo === 'firebat' ? 'happy' : 'talk');
          };
        }

        // Mini Cards Synchronous Setup
        const f1 = container.querySelector('#fill-vm-1');
        const f2 = container.querySelector('#fill-vm-2');
        const f3 = container.querySelector('#fill-vm-3');
        const f4 = container.querySelector('#fill-vm-4');

        const c1 = container.querySelector('#card-vm-1');
        const c2 = container.querySelector('#card-vm-2');
        const c3 = container.querySelector('#card-vm-3');
        const c4 = container.querySelector('#card-vm-4');

        const s1 = container.querySelector('#status-vm-1');
        const s2 = container.querySelector('#status-vm-2');
        const s3 = container.querySelector('#status-vm-3');
        const s4 = container.querySelector('#status-vm-4');

        const t1 = container.querySelector('#task-cnt-1');
        const t2 = container.querySelector('#task-cnt-2');
        const t3 = container.querySelector('#task-cnt-3');
        const t4 = container.querySelector('#task-cnt-4');

        const lv1 = container.querySelector('#load-val-1');
        const lv2 = container.querySelector('#load-val-2');
        const lv3 = container.querySelector('#load-val-3');
        const lv4 = container.querySelector('#load-val-4');

        const miniCards = [c1, c2, c3, c4];
        miniCards.forEach((card, idx) => {
          if (!card) return;
          card.onclick = () => {
            const vmKeys = ['vm1', 'vm2', 'vm3', 'vm4'];
            if (sim3dInstance) sim3dInstance.focusCamera(vmKeys[idx]);
            handle3DElementClick({ type: 'vm', vmIdx: idx, def: global.InteractiveSim3D?.VM_DEFS[idx] }, activeAlgo);
          };
        });

        function applySimulationState(algo, count) {
          activeAlgo = algo;
          taskCount = count;

          miniCards.forEach(c => {
            if (c) c.className = 'battle-vm-mini-card';
          });

          if (sim3dInstance) {
            sim3dInstance.setAlgorithm(algo, count);
          }

          if (algo === 'firebat') {
            // Balanced by SD migration
            f1.style.width = '48%'; f2.style.width = '52%'; f3.style.width = '50%'; f4.style.width = '51%';
            f1.style.background = f2.style.background = f3.style.background = f4.style.background = 'var(--dr-gold)';
            c1.classList.add('optimal'); c2.classList.add('optimal'); c3.classList.add('optimal'); c4.classList.add('optimal');
            s1.textContent = s2.textContent = s3.textContent = s4.textContent = '● SEIMBANG';
            s1.style.color = s2.style.color = s3.style.color = s4.style.color = 'var(--dr-cyan)';

            lv1.textContent = 'Load: 48%'; lv2.textContent = 'Load: 52%'; lv3.textContent = 'Load: 50%'; lv4.textContent = 'Load: 51%';

            const ms = (15.4 * (count / 100)).toFixed(1);
            hudMakespan.textContent = `${ms} s`;
            hudDoi.textContent = '0.071';
            hudEnergy.textContent = 'ARUR: 96.6%';
            phaseBanner.textContent = '✨ FIREBAT HYBRID: FA + BA + REBALANCING SD (BEBAN RAPI & SEIMBANG)';
            statusBanner.textContent = 'Status: Terseimbang Optimal!';
            statusBanner.style.color = 'var(--dr-gold)';

            t1.textContent = Math.round(count * 0.24);
            t2.textContent = Math.round(count * 0.26);
            t3.textContent = Math.round(count * 0.25);
            t4.textContent = Math.round(count * 0.25);

            if (global.RalseiCompanion) {
              global.RalseiCompanion.setExpression('happy');
              global.RalseiCompanion.triggerSparkles();
            }
          } else if (algo === 'fa') {
            // Firefly: spread out but slow convergence
            f1.style.width = '72%'; f2.style.width = '60%'; f3.style.width = '44%'; f4.style.width = '32%';
            f1.style.background = f2.style.background = f3.style.background = f4.style.background = 'var(--dr-cyan)';
            c1.classList.add('overloaded'); c2.classList.add('balanced'); c3.classList.add('balanced'); c4.classList.add('balanced');
            s1.textContent = '▲ OVERLOAD'; s2.textContent = '● NORMAL'; s3.textContent = '● NORMAL'; s4.textContent = '▼ UNDERLOAD';
            s1.style.color = 'var(--dr-pink)'; s4.style.color = 'var(--dr-slate)';

            lv1.textContent = 'Load: 72%'; lv2.textContent = 'Load: 60%'; lv3.textContent = 'Load: 44%'; lv4.textContent = 'Load: 32%';

            const ms = (19.3 * (count / 100)).toFixed(1);
            hudMakespan.textContent = `${ms} s`;
            hudDoi.textContent = '0.185';
            hudEnergy.textContent = 'ARUR: 84.2%';
            phaseBanner.textContent = '✨ FIREFLY ALGORITHM: EKSPLORASI GLOBAL LUAS (KONVERGENSI LAMBAT)';
            statusBanner.textContent = 'Status: Ketimpangan (FA Lambat Konvergen)';
            statusBanner.style.color = 'var(--dr-cyan)';

            t1.textContent = Math.round(count * 0.36);
            t2.textContent = Math.round(count * 0.30);
            t3.textContent = Math.round(count * 0.20);
            t4.textContent = Math.round(count * 0.14);

            if (global.RalseiCompanion) global.RalseiCompanion.setExpression('talk');
          } else if (algo === 'ba') {
            // Bat: fast local optimum trap, heavy load on VM-1
            f1.style.width = '88%'; f2.style.width = '54%'; f3.style.width = '38%'; f4.style.width = '20%';
            f1.style.background = f2.style.background = f3.style.background = f4.style.background = 'var(--dr-pink)';
            c1.classList.add('overloaded');
            s1.textContent = '▲ SANGAT OVERLOAD'; s2.textContent = '● BUSY'; s3.textContent = '▼ UNDERLOAD'; s4.textContent = '▼ IDLE';
            s1.style.color = 'var(--dr-pink)'; s4.style.color = 'var(--dr-slate)';

            lv1.textContent = 'Load: 88%'; lv2.textContent = 'Load: 54%'; lv3.textContent = 'Load: 38%'; lv4.textContent = 'Load: 20%';

            const ms = (17.8 * (count / 100)).toFixed(1);
            hudMakespan.textContent = `${ms} s`;
            hudDoi.textContent = '0.240';
            hudEnergy.textContent = 'ARUR: 78.5%';
            phaseBanner.textContent = '🦇 BAT ALGORITHM: EKSPLOITASI LOKAL CEPAT (TERJEBAK LOCAL OPTIMUM VM-1)';
            statusBanner.textContent = 'Status: VM-1 Overload Terjebak!';
            statusBanner.style.color = 'var(--dr-pink)';

            t1.textContent = Math.round(count * 0.44);
            t2.textContent = Math.round(count * 0.27);
            t3.textContent = Math.round(count * 0.19);
            t4.textContent = Math.round(count * 0.10);

            if (global.RalseiCompanion) global.RalseiCompanion.setExpression('surprised');
          } else if (algo === 'hgaco') {
            // HGACO: high imbalance due to pheromone clustering
            f1.style.width = '94%'; f2.style.width = '68%'; f3.style.width = '32%'; f4.style.width = '16%';
            f1.style.background = f2.style.background = f3.style.background = f4.style.background = '#4ce6cf';
            c1.classList.add('overloaded');
            s1.textContent = '▲ CRITICAL 94%'; s2.textContent = '● BUSY 68%'; s3.textContent = '▼ UNDERLOAD'; s4.textContent = '▼ SEVERELY IDLE';
            s1.style.color = 'var(--dr-pink)'; s4.style.color = 'var(--dr-slate)';

            lv1.textContent = 'Load: 94%'; lv2.textContent = 'Load: 68%'; lv3.textContent = 'Load: 32%'; lv4.textContent = 'Load: 16%';

            const ms = (21.5 * (count / 100)).toFixed(1);
            hudMakespan.textContent = `${ms} s`;
            hudDoi.textContent = '0.554';
            hudEnergy.textContent = 'ARUR: 79.5%';
            phaseBanner.textContent = '🐜 HGACO (IEEE 2025): FEROMON ACO MENUMPUK CLOUDLET BESAR KE VM-1';
            statusBanner.textContent = 'Status: DOI Tinggi 0.554 — Bottleneck Kritis!';
            statusBanner.style.color = '#4ce6cf';

            t1.textContent = Math.round(count * 0.47);
            t2.textContent = Math.round(count * 0.34);
            t3.textContent = Math.round(count * 0.12);
            t4.textContent = Math.round(count * 0.07);

            if (global.RalseiCompanion) global.RalseiCompanion.setExpression('surprised');
          }
        }

        // Algo buttons
        container.querySelectorAll('#sim-algo-selector button').forEach(btn => {
          btn.onclick = () => {
            app.playSFX('select');
            container.querySelectorAll('#sim-algo-selector button').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            applySimulationState(btn.dataset.algo, Number(rngSlider.value));
          };
        });

        // Tasks slider
        rngSlider.oninput = () => {
          const v = Number(rngSlider.value);
          lblTaskCount.textContent = v;
          applySimulationState(activeAlgo, v);
        };

        // Battle Run Button (Orchestrated 3D Simulation Step-Through)
        btnRun.onclick = () => {
          app.playSFX('confirm');
          if (isSimRunning) {
            isSimRunning = false;
            btnRun.textContent = '▶ Run Battle';
            if (sim3dInstance) sim3dInstance.resetSimulation();
            return;
          }

          isSimRunning = true;
          btnRun.textContent = '⏸ Pause';

          if (sim3dInstance) {
            sim3dInstance.triggerBattleRun(
              (step, phaseText) => {
                phaseBanner.textContent = phaseText;
                if (step === 1 && global.RalseiCompanion) global.RalseiCompanion.walk('right', 6);
                else if (step === 2 && global.RalseiCompanion) global.RalseiCompanion.setExpression('talk');
                else if (step === 3 && global.RalseiCompanion) global.RalseiCompanion.walk('left', 6);
              },
              () => {
                isSimRunning = false;
                btnRun.textContent = '▶ Run Battle';
                applySimulationState(activeAlgo, Number(rngSlider.value));
                if (global.DeltaruneSFX) global.DeltaruneSFX.playChime();
                if (global.RalseiCompanion) {
                  global.RalseiCompanion.setExpression(activeAlgo === 'firebat' ? 'happy' : 'talk');
                  global.RalseiCompanion.triggerSparkles();
                }
              }
            );
          }
        };

        btnReset.onclick = () => {
          app.playSFX('cancel');
          isSimRunning = false;
          btnRun.textContent = '▶ Run Battle';
          rngSlider.value = 100;
          lblTaskCount.textContent = 100;
          container.querySelectorAll('#sim-algo-selector button').forEach(b => {
            b.classList.toggle('selected', b.dataset.algo === 'firebat');
          });
          if (sim3dInstance) sim3dInstance.resetSimulation();
          applySimulationState('firebat', 100);
        };

        // Initial setup
        applySimulationState('firebat', 100);

        // Store cleanup hook on this chapter
        this.destroy = () => {
          if (sim3dInstance) {
            sim3dInstance.destroy();
            sim3dInstance = null;
          }
        };
      }
    },

    // =======================================================================
    // CHAPTER 5: CYBER DATA LAB & 3D LIVE CHART (ITEM / DATA LAB)
    // =======================================================================
    {
      id: 'chapter-5',
      number: 5,
      title: 'Chapter 5: Cyber Data Lab & 3D Chart (GoCJ 600 Tasks)',
      kicker: 'DATA PENGUJIAN EXPERIMENT RUNNER (30 STOCHASTIC RUNS)',
      speaker: 'RALSEI GUIDING PRINCE',
      mood: 'smile',
      dialogueBeats: [
        'Selamat datang di Cyber Data Lab!',
        'Berikut hasil pengujian 30 stochastic runs pada dataset riil GoCJ 600 task di 15 VM heterogen CloudSim 3.0.3!',
        'Gunakan tab di bawah untuk melihat live 3D bar chart atau tabel validasi 100% konsisten!'
      ],
      notes: 'Bacakan data hasil pengujian kelompok 4: "Pada pengujian utama S1 dengan 600 task riil GoCJ dan 30 run stokastik berulang, FireBat mencatat makespan terbaik 4058.00 s dan nilai DI terendah 0.0779. Seluruh hasil divalidasi 100% konsisten terhadap engine CloudSim 3.0.3 dengan selisih 0.000%."',

      render(container, app) {
        container.innerHTML = `
          <div class="dr-chapter-container">
            <!-- Data Lab Mode Selector -->
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
              <span class="dr-chapter-kicker">CYBER DATA LAB · EXPERIMENT RUNNER 30 RUNS</span>
              <div class="dr-submenu-grid" id="datalab-view-selector">
                <button class="dr-sub-btn selected" data-view="table">📋 Tabel Metrik S1</button>
                <button class="dr-sub-btn" data-view="chart3d">📊 Live 3D Bar Chart</button>
                <button class="dr-sub-btn" data-view="papers">📈 5 Paper Research Charts</button>
              </div>
            </div>

            <!-- View 1: Metric Cards + Table -->
            <div id="datalab-table-view">
              <div class="dr-grid-3" style="margin-bottom:8px;gap:12px;">
                <div class="dr-card gold" style="padding:10px 16px;">
                  <div style="font-size:9px;color:var(--dr-gold);font-family:var(--font-pixel);">FIREBAT BEST MAKESPAN</div>
                  <div style="font-size:18px;font-family:var(--font-pixel);color:var(--dr-gold);margin:2px 0;">4058.0 s</div>
                  <div style="font-size:13px;color:var(--dr-ice);">Mean: 4260.6 s ± 412.4 s (30 runs)</div>
                </div>

                <div class="dr-card" style="padding:10px 16px;">
                  <div style="font-size:9px;color:var(--dr-cyan);font-family:var(--font-pixel);">DEGREE OF IMBALANCE (DI)</div>
                  <div style="font-size:18px;font-family:var(--font-pixel);color:var(--dr-cyan);margin:2px 0;">0.0779</div>
                  <div style="font-size:13px;color:var(--dr-ice);">Distribusi beban paling rata.</div>
                </div>

                <div class="dr-card pink" style="padding:10px 16px;">
                  <div style="font-size:9px;color:var(--dr-pink);font-family:var(--font-pixel);">ARUR UTILISASI (%)</div>
                  <div style="font-size:18px;font-family:var(--font-pixel);color:var(--dr-pink);margin:2px 0;">96.64%</div>
                  <div style="font-size:13px;color:var(--dr-ice);">15 VM aktif optimal tanpa idle.</div>
                </div>
              </div>

              <!-- Interactive Benchmark Table -->
              <div class="dr-card" style="padding:12px 18px;overflow-x:auto;">
                <table style="width:100%;border-collapse:collapse;font-size:14px;color:var(--dr-ice);">
                  <tr style="border-bottom:1px solid var(--dr-slate);font-family:var(--font-pixel);font-size:9px;color:var(--dr-gold);">
                    <th style="text-align:left;padding:6px 10px;">ALGORITMA</th>
                    <th style="text-align:left;padding:6px 10px;">TIPE RUN</th>
                    <th style="text-align:right;padding:6px 10px;">BEST MAKESPAN</th>
                    <th style="text-align:right;padding:6px 10px;">MEAN MAKESPAN</th>
                    <th style="text-align:right;padding:6px 10px;">DI</th>
                    <th style="text-align:right;padding:6px 10px;">ARUR</th>
                    <th style="text-align:right;padding:6px 10px;">VALIDASI CLOUDSIM</th>
                  </tr>
                  <tr style="background:rgba(255,222,0,0.15);font-weight:bold;color:var(--dr-gold);cursor:pointer;" id="row-fb">
                    <td style="padding:8px 10px;">★ FireBat (Hybrid)</td>
                    <td style="padding:8px 10px;">Stokastik (30 run)</td>
                    <td style="text-align:right;padding:8px 10px;">4058.00 s</td>
                    <td style="text-align:right;padding:8px 10px;">4260.57 s</td>
                    <td style="text-align:right;padding:8px 10px;">0.0779</td>
                    <td style="text-align:right;padding:8px 10px;">96.64%</td>
                    <td style="text-align:right;padding:8px 10px;color:var(--dr-green);">0.000% (VALID)</td>
                  </tr>
                  <tr style="border-bottom:1px solid rgba(255,255,255,0.08);cursor:pointer;" id="row-rasa">
                    <td style="padding:6px 10px;">RASA (Baseline)</td>
                    <td style="padding:6px 10px;">Deterministik</td>
                    <td style="text-align:right;padding:6px 10px;">4192.50 s</td>
                    <td style="text-align:right;padding:6px 10px;">4192.50 s</td>
                    <td style="text-align:right;padding:6px 10px;">0.1012</td>
                    <td style="text-align:right;padding:6px 10px;">94.35%</td>
                    <td style="text-align:right;padding:6px 10px;color:var(--dr-green);">0.000% (VALID)</td>
                  </tr>
                  <tr style="border-bottom:1px solid rgba(255,255,255,0.08);cursor:pointer;" id="row-maxmin">
                    <td style="padding:6px 10px;">Max-Min</td>
                    <td style="padding:6px 10px;">Deterministik</td>
                    <td style="text-align:right;padding:6px 10px;">4337.50 s</td>
                    <td style="text-align:right;padding:6px 10px;">4337.50 s</td>
                    <td style="text-align:right;padding:6px 10px;">0.1082</td>
                    <td style="text-align:right;padding:6px 10px;">92.33%</td>
                    <td style="text-align:right;padding:6px 10px;color:var(--dr-green);">0.000% (VALID)</td>
                  </tr>
                  <tr style="cursor:pointer;" id="row-hgaco">
                    <td style="padding:6px 10px;">HGACO (IEEE 2025)</td>
                    <td style="padding:6px 10px;">Stokastik (30 run)</td>
                    <td style="text-align:right;padding:6px 10px;">4451.50 s</td>
                    <td style="text-align:right;padding:6px 10px;">5000.08 s</td>
                    <td style="text-align:right;padding:6px 10px;">0.5541</td>
                    <td style="text-align:right;padding:6px 10px;">79.49%</td>
                    <td style="text-align:right;padding:6px 10px;color:var(--dr-green);">0.000% (VALID)</td>
                  </tr>
                </table>
              </div>
            </div>

            <!-- View 2: Live 3D Bar Chart View (Initially Hidden) -->
            <div id="datalab-3d-view" style="display:none;height:100%;">
              <div class="dr-card gold" style="padding:0;position:relative;height:300px;overflow:hidden;">
                <div id="canvas-result-3d" style="width:100%;height:100%;"></div>
                <div style="position:absolute;top:8px;left:10px;font-family:var(--font-pixel);font-size:9px;color:var(--dr-gold);background:rgba(4,4,26,0.9);padding:4px 8px;border-radius:4px;border:1px solid var(--dr-gold);">
                  👑 LIVE 3D PILLARS: BEST VS MEAN MAKESPAN (ORBIT KONTROL AKTIF)
                </div>
              </div>
            </div>

            <!-- View 3: 5 Scientific Research Charts Strip (Initially Hidden) -->
            <div id="datalab-papers-view" style="display:none;">
              <div style="display:grid;grid-template-columns:repeat(5, 1fr);gap:10px;">
                <button class="dr-party-card-btn" data-img="./assets/chart_s1_makespan_comparison.png" data-title="Makespan Comparison (4 Algoritma)">
                  <span style="font-size:22px;">📊</span>
                  <span class="party-name">Makespan</span>
                  <span class="party-nim">S1 Comparison</span>
                </button>
                <button class="dr-party-card-btn" data-img="./assets/chart_s1_di_and_arur.png" data-title="Degree of Imbalance & ARUR (%)">
                  <span style="font-size:22px;">⚡</span>
                  <span class="party-name">DI & ARUR</span>
                  <span class="party-nim">Balance Ratio</span>
                </button>
                <button class="dr-party-card-btn" data-img="./assets/chart_s1_stability_boxplot.png" data-title="Stability Boxplot (30 Stochastic Runs)">
                  <span style="font-size:22px;">📦</span>
                  <span class="party-name">Boxplot</span>
                  <span class="party-nim">30 Runs Stdev</span>
                </button>
                <button class="dr-party-card-btn" data-img="./assets/chart_s2_scalability.png" data-title="Scalability Evaluation (200 - 1000 Tasks)">
                  <span style="font-size:22px;">📈</span>
                  <span class="party-name">Skalabilitas</span>
                  <span class="party-nim">200-1000 Tasks</span>
                </button>
                <button class="dr-party-card-btn" data-img="./assets/chart_s3_convergence.png" data-title="Convergence Iteration Curves">
                  <span style="font-size:22px;">📉</span>
                  <span class="party-name">Konvergensi</span>
                  <span class="party-nim">Iterasi 1-100</span>
                </button>
              </div>
            </div>
          </div>
        `;

        if (global.RalseiCompanion) {
          global.RalseiCompanion.init(container);
          global.RalseiCompanion.setExpression('smile');
        }

        const viewTable = container.querySelector('#datalab-table-view');
        const view3D = container.querySelector('#datalab-3d-view');
        const viewPapers = container.querySelector('#datalab-papers-view');

        let chart3dInstance = null;

        // View toggle buttons
        container.querySelectorAll('#datalab-view-selector button').forEach(btn => {
          btn.onclick = () => {
            app.playSFX('select');
            container.querySelectorAll('#datalab-view-selector button').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');

            const view = btn.dataset.view;
            viewTable.style.display = view === 'table' ? 'block' : 'none';
            view3D.style.display = view === 'chart3d' ? 'block' : 'none';
            viewPapers.style.display = view === 'papers' ? 'block' : 'none';

            if (view === 'chart3d' && !chart3dInstance) {
              const canvasBox = container.querySelector('#canvas-result-3d');
              if (global.ResultChart3D) {
                chart3dInstance = global.ResultChart3D.init(canvasBox);
              }
            }
          };
        });

        // Clickable rows with Ralsei explanation
        container.querySelector('#row-fb').onclick = () => {
          app.playSFX('confirm');
          app.typeDialogue('RALSEI GUIDING PRINCE', 'FireBat mencatat Makespan terbaik 4058.00 s dan Degree of Imbalance 0.0779. Seluruh hasil 100% konsisten divalidasi ke CloudSim 3.0.3!', 'happy');
          if (global.RalseiCompanion) global.RalseiCompanion.triggerSparkles();
        };

        container.querySelector('#row-rasa').onclick = () => {
          app.playSFX('select');
          app.typeDialogue('RALSEI GUIDING PRINCE', 'RASA adalah heuristik deterministik dengan Makespan 4192.50 s. Cepat dieksekusi tetapi tidak fleksibel terhadap beban acak.', 'talk');
        };

        container.querySelector('#row-maxmin').onclick = () => {
          app.playSFX('select');
          app.typeDialogue('RALSEI GUIDING PRINCE', 'Max-Min memprioritaskan tugas terpanjang terlebih dahulu (Makespan 4337.50 s). Rentan membuat tugas kecil mengantre terlalu lama.', 'talk');
        };

        container.querySelector('#row-hgaco').onclick = () => {
          app.playSFX('select');
          app.typeDialogue('RALSEI GUIDING PRINCE', 'HGACO (IEEE 2025) memiliki ketimpangan beban tinggi (DOI 0.5541) dan waktu komputasi scheduler 2.4x lebih lama (957 ms).', 'surprised');
        };

        // Paper chart image modal clicks
        container.querySelectorAll('#datalab-papers-view button').forEach(btn => {
          btn.onclick = () => {
            app.playSFX('confirm');
            app.openImageModal(btn.dataset.img, btn.dataset.title);
          };
        });
      }
    },

    // =======================================================================
    // CHAPTER 6: SCALABILITY & TECHNICAL TRADE-OFFS
    // =======================================================================
    {
      id: 'chapter-6',
      number: 6,
      title: 'Chapter 6: Scalability & Technical Trade-offs',
      kicker: 'PENGUJIAN SKALABILITAS & KETERBATASAN',
      speaker: 'RALSEI GUIDING PRINCE',
      mood: 'talk',
      dialogueBeats: [
        'Skalabilitas teruji hingga 1.000 task pada berbagai konfigurasi cloud!',
        'Namun perhatikan trade-off teknisnya: overhead CPU pencarian & sensitivitas parameter threshold!',
        'Mari kita bahas batasan ini secara jujur dan akademis tanpa overclaim!'
      ],
      notes: 'Tekankan kejujuran akademis ini: "Penting untuk dipahami bahwa FireBat bukan tanpa kekurangan. Pengurangan energi dan DOI ini disertai trade-off: waktu kalkulasi algoritma lebih lama dan ada parameter tuning tambahan yang harus disetel secara cermat."',

      render(container, app) {
        container.innerHTML = `
          <div class="dr-chapter-container">
            <!-- Workload Scale Slider -->
            <div class="dr-card gold" style="padding:14px 20px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <span style="font-family:var(--font-pixel);font-size:10px;color:var(--dr-gold);">🎛️ SIMULASI SKALABILITAS TASKS CLOUD (200 - 1000 TASKS):</span>
                <span style="font-family:var(--font-pixel);font-size:14px;color:var(--dr-gold);" id="scale-val">600 Tasks</span>
              </div>
              <input type="range" min="200" max="1000" step="200" value="600" id="scale-range" style="width:100%;accent-color:var(--dr-gold);cursor:pointer;" />
            </div>

            <div class="dr-grid-3" style="margin-bottom:8px;gap:12px;">
              <div class="dr-card gold" style="padding:12px 16px;">
                <div style="font-size:9px;color:var(--dr-gold);font-family:var(--font-pixel);">EFISIENSI ENERGI</div>
                <div style="font-size:18px;font-family:var(--font-pixel);color:var(--dr-gold);margin:2px 0;" id="m-energy">↓ 28.5%</div>
                <div style="font-size:13px;color:var(--dr-ice);">Penurunan konsumsi energi server.</div>
              </div>

              <div class="dr-card" style="padding:12px 16px;">
                <div style="font-size:9px;color:var(--dr-cyan);font-family:var(--font-pixel);">KONSISTENSI DOI</div>
                <div style="font-size:18px;font-family:var(--font-pixel);color:var(--dr-cyan);margin:2px 0;" id="m-doi">↓ 12.7%</div>
                <div style="font-size:13px;color:var(--dr-ice);">Derajat ketimpangan tetap rendah.</div>
              </div>

              <div class="dr-card pink" style="padding:12px 16px;">
                <div style="font-size:9px;color:var(--dr-pink);font-family:var(--font-pixel);">PENINGKATAN THROUGHPUT</div>
                <div style="font-size:18px;font-family:var(--font-pixel);color:var(--dr-pink);margin:2px 0;" id="m-tp">↑ 38.0%</div>
                <div style="font-size:13px;color:var(--dr-ice);">Laju tugas selesai per detik.</div>
              </div>
            </div>

            <!-- Honest Academic Limitations Box -->
            <div class="dr-card pink" style="background:rgba(235,0,149,0.08);padding:14px 20px;">
              <div style="font-family:var(--font-pixel);font-size:10px;color:var(--dr-pink);margin-bottom:6px;">
                ⚖️ KETERBATASAN TEKNIS & CATATAN KRITIS (NO OVERCLAIM):
              </div>
              <div style="font-size:14px;color:var(--dr-ice);line-height:1.5;">
                • <b>Overhead Komputasi CPU:</b> Mengelola 2 sub-populasi dan kalkulasi SD membutuhkan waktu CPU scheduler lebih lama.<br/>
                • <b>Sensitivitas Parameter:</b> Efektivitas penyeimbangan sangat bergantung pada ambang batas (threshold) yang ditentukan.<br/>
                • <b>Fokus Cloudlet Independen:</b> Optimal untuk tugas mandiri, belum tentu optimal untuk workflow dependensi (DAG).
              </div>
            </div>
          </div>
        `;

        if (global.RalseiCompanion) {
          global.RalseiCompanion.init(container);
          global.RalseiCompanion.setExpression('talk');
        }

        const slider = container.querySelector('#scale-range');
        const valText = container.querySelector('#scale-val');
        const mEnergy = container.querySelector('#m-energy');
        const mDoi = container.querySelector('#m-doi');
        const mTp = container.querySelector('#m-tp');

        slider.oninput = () => {
          app.playSFX('select');
          const v = Number(slider.value);
          valText.textContent = `${v} Tasks`;
          if (v === 200) {
            mEnergy.textContent = '↓ 18.2%'; mDoi.textContent = '↓ 8.4%'; mTp.textContent = '↑ 22.0%';
          } else if (v === 400) {
            mEnergy.textContent = '↓ 24.1%'; mDoi.textContent = '↓ 10.5%'; mTp.textContent = '↑ 31.5%';
          } else if (v === 600) {
            mEnergy.textContent = '↓ 28.5%'; mDoi.textContent = '↓ 12.7%'; mTp.textContent = '↑ 38.0%';
          } else if (v === 800) {
            mEnergy.textContent = '↓ 31.2%'; mDoi.textContent = '↓ 14.1%'; mTp.textContent = '↑ 42.4%';
          } else if (v === 1000) {
            mEnergy.textContent = '↓ 33.8%'; mDoi.textContent = '↓ 15.6%'; mTp.textContent = '↑ 46.1%';
          }
        };
      }
    },

    // =======================================================================
    // CHAPTER 7: CASTLE TOWN (SUMMARY & ACADEMIC REFERENCES)
    // =======================================================================
    {
      id: 'chapter-7',
      number: 7,
      title: 'Chapter 7: Castle Town & References',
      kicker: 'KESIMPULAN DEMO 1',
      speaker: 'RALSEI GUIDING PRINCE',
      mood: 'happy',
      dialogueBeats: [
        'Selamat! Quest Demo 1 telah selesai!',
        'Seluruh poin evaluasi alokasi cloud terpenuhi secara objektif dan ilmiah!',
        'Terima kasih telah berpetualang bersama Kelompok 4! Siap berlanjut ke Demo 2 di Minggu 14!'
      ],
      notes: 'Tutup secara lugas: "Demikian presentasi Demo 1 kami mengenai FireBat. Sinergi antara operator Firefly, Bat, dan aturan penyeimbangan beban memberikan alternatif solusi penjadwalan cloud yang layak dipertimbangkan, dengan trade-off yang perlu diperhatikan. Terima kasih, kami persilakan jika ada pertanyaan atau tanggapan."',

      render(container, app) {
        container.innerHTML = `
          <div class="dr-chapter-container">
            <div class="dr-grid-2" style="gap:16px;">
              <!-- Summary Card -->
              <div class="dr-card gold" style="display:flex;flex-direction:column;justify-content:space-between;padding:18px 22px;">
                <div>
                  <div style="font-family:var(--font-pixel);font-size:10px;color:var(--dr-gold);margin-bottom:8px;">📌 RINGKASAN EVALUASI OBJEKTIF:</div>
                  <ul style="font-size:15px;color:var(--dr-ice);line-height:1.55;padding-left:16px;">
                    <li><b>Metode Terpilih:</b> FireBat mengombinasikan eksplorasi FA, eksploitasi BA, dan migrasi SD.</li>
                    <li><b>Hasil Pengujian:</b> Terbukti menurunkan Makespan & DI dibanding FA, BA, dan HGACO.</li>
                    <li><b>Keterbatasan:</b> Terdapat trade-off pada waktu kalkulasi pencarian scheduler.</li>
                    <li><b>Langkah Demo 2:</b> Siap diuji pada dataset riil di Minggu 14.</li>
                  </ul>
                </div>
                <div style="font-family:var(--font-pixel);font-size:10px;color:var(--dr-gold);margin-top:10px;">
                  🚀 DEMO 2 (MINGGU 14) READY!
                </div>
              </div>

              <!-- References Library Card -->
              <div class="dr-card" style="padding:18px 22px;">
                <div style="font-family:var(--font-pixel);font-size:10px;color:var(--dr-cyan);margin-bottom:8px;">📚 DAFTAR PUSTAKA ILMIAH WAJIB:</div>
                <div style="font-size:14px;color:var(--dr-ice);line-height:1.5;">
                  <p style="margin-bottom:8px;">
                    <b style="color:var(--dr-gold);">1. Paper Utama FireBat (Springer Nature 2026):</b><br/>
                    Pathania, N. et al. (2026). <i>FireBat: a hybrid approach for load balancing in cloud computing</i>. Journal of Cloud Computing, vol. 15, no. 5. DOI: 10.1186/s13677-025-00805-1.
                  </p>
                  <p style="margin-bottom:8px;">
                    <b style="color:var(--dr-cyan);">2. Paper Pembanding HGACO (IEEE 2025):</b><br/>
                    Yang, H., Xu, X., & Wu, M. (2025). <i>Task Scheduling Based on Hybrid Genetic Ant Colony Algorithm</i>. IEEE 5th CCSB, hlm 400-405. DOI: 10.1109/CCSB66722.2025.11154202.
                  </p>
                  <p>
                    <b style="color:var(--dr-pink);">3. Workload Dataset Riil GoCJ (MDPI 2018):</b><br/>
                    Hussain, A. & Aleem, M. (2018). <i>GoCJ: Google Cloud Jobs Dataset</i>. Data (MDPI).
                  </p>
                </div>
              </div>
            </div>
          </div>
        `;

        if (global.RalseiCompanion) {
          global.RalseiCompanion.init(container);
          global.RalseiCompanion.setExpression('happy');
          global.RalseiCompanion.triggerSparkles();
        }
      }
    }
  ];

  global.DeltaruneChapters = CHAPTERS;
  global.Kelompok4Members = KELOMPOK_4_MEMBERS;
  global.openPartyMemberModal = openPartyMemberModal;
})(window);
