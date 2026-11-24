/**
 * RALSEI COMPANION CONTROLLER — DELTARUNE SPRITE ENGINE v2.5
 * Uses individual 100% clean transparent PNG frames (zero holes, pixelated).
 * Handles animated walk cycles, dynamic expressions, overworld movement,
 * sparkle particles, speech bubbles, and portrait typewriter synchronization.
 */
(function (global) {
  'use strict';

  const SPRITES = {
    front_idle: './assets/ralsei/front_idle.png',
    front_talk: './assets/ralsei/front_talk.png',
    front_smile: './assets/ralsei/front_smile.png',
    front_surprised: './assets/ralsei/front_surprised.png',
    front_happy: './assets/ralsei/front_happy.png',
    walk_down: [
      './assets/ralsei/walk_down_0.png',
      './assets/ralsei/walk_down_1.png',
      './assets/ralsei/walk_down_2.png',
      './assets/ralsei/walk_down_3.png',
      './assets/ralsei/walk_down_4.png'
    ],
    walk_side: [
      './assets/ralsei/walk_side_0.png',
      './assets/ralsei/walk_side_1.png',
      './assets/ralsei/walk_side_2.png',
      './assets/ralsei/walk_side_3.png',
      './assets/ralsei/walk_side_4.png'
    ],
    walk_up: [
      './assets/ralsei/walk_up_0.png',
      './assets/ralsei/walk_up_1.png',
      './assets/ralsei/walk_up_2.png',
      './assets/ralsei/walk_up_3.png',
      './assets/ralsei/walk_up_4.png'
    ]
  };

  const FUN_FACTS = [
    '💡 <b>Fun Fact Firefly:</b> Firefly Algorithm terinspirasi dari daya tarik kilau kunang-kunang! Semakin terang cahayanya, semakin kuat partikel lain tertarik menyusuri ruang pencarian global!',
    '🦇 <b>Fun Fact Bat:</b> Bat Algorithm memanfaatkan sonar ultrasonic dan modulasi frekuensi gelombang untuk mengunci mangsa di kegelapan! Sangat cepat dalam eksploitasi lokal!',
    '🪄 <b>Mantra Rebalancing:</b> Standar Deviasi (SD) adalah mantra rahasiaku! Saat ada VM yang kelelahan/overload, tugas dipindahkan ke VM yang masih santai!',
    '📊 <b>GoCJ 600 Data:</b> Pada 600 tugas riil GoCJ, FireBat mencatat Makespan tercepat <b>4058.0 detik</b> dan Degree of Imbalance terendah <b>0.0779</b>!',
    '⚡ <b>Pro-Tip Presentasi:</b> Tekan tombol <b>ACT / SIMULATE</b> di bawah untuk melihat Cloudlet bertarung secara interaktif melawan VM!',
    '🌟 <b>Validasi Ilmiah:</b> Seluruh hasil eksperimen divalidasi 100% konsisten terhadap engine CloudSim 3.0.3 dengan selisih Makespan <b>0.000%</b> (Valid)!',
    '🛡️ <b>Party Check:</b> Klik kartu nama anggota Kelompok 4 di Chapter 1 untuk memeriksa detail peranan, NIM, dan kontribusi proyek mereka!',
    '⚖️ <b>Kejujuran Akademis:</b> Jangan lupa sebutkan trade-off komputasi CPU time dan parameter threshold agar presentasi objektif tanpa overclaim!',
    '💖 <b>Semangat Kelompok 4:</b> Persiapan kalian luar biasa! Kris, Susie, dan aku mendukung kelancaran presentasi ini 100%!'
  ];

  let companionEl = null;
  let spriteImg = null;
  let speechBubble = null;
  let sparkleContainer = null;
  let currentMood = 'idle';
  let isWalking = false;
  let walkTimer = null;
  let portraitInterval = null;
  let speechTimeout = null;
  let posX = 85; // percentage
  let facing = 'right';

  const RalseiCompanion = {
    SPRITES,

    /**
     * Mounts the Stage Companion into the DOM
     */
    init(mountTarget) {
      if (!mountTarget) mountTarget = document.getElementById('chapter-stage') || document.body;

      // Remove existing companion if any
      const existing = document.getElementById('ralsei-companion-root');
      if (existing) existing.remove();

      companionEl = document.createElement('div');
      companionEl.id = 'ralsei-companion-root';
      companionEl.className = 'ralsei-companion';
      companionEl.setAttribute('title', 'Klik Ralsei untuk Fun Fact & Tips Presentasi!');

      companionEl.innerHTML = `
        <div class="ralsei-speech-bubble" id="ralsei-speech" style="display:none;"></div>
        <div class="ralsei-sparkles" id="ralsei-sparkles"></div>
        <div class="ralsei-shadow"></div>
        <img src="${SPRITES.front_idle}" class="ralsei-sprite" id="ralsei-sprite-img" alt="Ralsei Companion" />
        <div class="ralsei-name-tag">♥ RALSEI</div>
      `;

      mountTarget.appendChild(companionEl);

      spriteImg = companionEl.querySelector('#ralsei-sprite-img');
      speechBubble = companionEl.querySelector('#ralsei-speech');
      sparkleContainer = companionEl.querySelector('#ralsei-sparkles');

      // Click interaction
      companionEl.addEventListener('click', (e) => {
        e.stopPropagation();
        this.triggerInteraction();
      });

      // Default positioning and mood
      this.setExpression('idle');
    },

    /**
     * Change facial expression
     */
    setExpression(mood) {
      currentMood = mood;
      if (!spriteImg) return;
      if (mood === 'idle') spriteImg.src = SPRITES.front_idle;
      else if (mood === 'talk') spriteImg.src = SPRITES.front_talk;
      else if (mood === 'smile') spriteImg.src = SPRITES.front_smile;
      else if (mood === 'surprised') spriteImg.src = SPRITES.front_surprised;
      else if (mood === 'happy') {
        spriteImg.src = SPRITES.front_happy;
        this.triggerSparkles();
      }
    },

    /**
     * Triggers sparkle particles burst
     */
    triggerSparkles() {
      if (!sparkleContainer) return;
      sparkleContainer.innerHTML = '';
      const colors = ['#ffde00', '#75fbed', '#eb0095', '#ffffff'];
      for (let i = 0; i < 14; i++) {
        const star = document.createElement('div');
        star.className = 'ralsei-sparkle-star';
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.floor(Math.random() * 80) + 10;
        const top = Math.floor(Math.random() * 80) + 10;
        const delay = (Math.random() * 0.3).toFixed(2);
        star.style.left = `${left}%`;
        star.style.top = `${top}%`;
        star.style.background = color;
        star.style.boxShadow = `0 0 8px ${color}`;
        star.style.animationDelay = `${delay}s`;
        sparkleContainer.appendChild(star);
      }

      if (global.DeltaruneSFX) global.DeltaruneSFX.playChime();

      setTimeout(() => {
        if (sparkleContainer) sparkleContainer.innerHTML = '';
      }, 1500);
    },

    /**
     * Displays a temporary speech bubble above Ralsei (opens safely leftward)
     */
    showSpeech(htmlText, durationMs = 4500) {
      if (!speechBubble) return;
      if (speechTimeout) clearTimeout(speechTimeout);

      speechBubble.innerHTML = htmlText;
      speechBubble.style.display = 'block';
      speechBubble.classList.add('pop-in');

      speechTimeout = setTimeout(() => {
        speechBubble.style.display = 'none';
        speechBubble.classList.remove('pop-in');
      }, durationMs);
    },

    /**
     * Interactive click reaction
     */
    triggerInteraction() {
      if (global.DeltaruneSFX) global.DeltaruneSFX.playConfirm();

      if (companionEl) {
        companionEl.classList.remove('bounce');
        void companionEl.offsetWidth; // re-flow
        companionEl.classList.add('bounce');
      }

      this.setExpression('happy');
      const randomFact = FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)];
      this.showSpeech(randomFact, 5000);

      setTimeout(() => {
        if (currentMood === 'happy') this.setExpression('smile');
      }, 2500);
    },

    /**
     * Sync bottom dialogue portrait with typewriter speaking state
     */
    syncPortrait(isTyping, mood = 'normal') {
      const portraitImg = document.getElementById('dialogue-portrait-img');
      if (!portraitImg) return;

      if (isTyping) {
        if (!portraitInterval) {
          let tick = 0;
          portraitInterval = setInterval(() => {
            tick++;
            portraitImg.src = tick % 2 === 0 ? SPRITES.front_talk : SPRITES.front_smile;
          }, 140);
        }
      } else {
        if (portraitInterval) {
          clearInterval(portraitInterval);
          portraitInterval = null;
        }
        if (mood === 'happy') {
          portraitImg.src = SPRITES.front_happy;
        } else if (mood === 'surprised') {
          portraitImg.src = SPRITES.front_surprised;
        } else if (mood === 'talk') {
          portraitImg.src = SPRITES.front_talk;
        } else {
          portraitImg.src = SPRITES.front_idle;
        }
      }
    },

    /**
     * Animated Walk Cycle
     */
    walk(direction = 'right', steps = 8, onComplete) {
      if (!spriteImg || !companionEl) return;
      if (isWalking) return;

      isWalking = true;
      facing = direction;
      let stepIndex = 0;
      let moved = 0;

      const frames = direction === 'up' ? SPRITES.walk_up : (direction === 'down' ? SPRITES.walk_down : SPRITES.walk_side);

      // Handle flip for left facing
      if (direction === 'left') {
        spriteImg.style.transform = 'scaleX(-1)';
      } else {
        spriteImg.style.transform = 'scaleX(1)';
      }

      walkTimer = setInterval(() => {
        spriteImg.src = frames[stepIndex % frames.length];
        stepIndex++;
        moved++;

        // Shift position slightly
        if (direction === 'right') posX = Math.min(90, posX + 1.2);
        else if (direction === 'left') posX = Math.max(8, posX - 1.2);

        companionEl.style.right = 'auto';
        companionEl.style.left = `${posX}%`;

        if (moved >= steps) {
          clearInterval(walkTimer);
          walkTimer = null;
          isWalking = false;
          spriteImg.src = SPRITES.front_idle;
          if (typeof onComplete === 'function') onComplete();
        }
      }, 110);
    },

    /**
     * Walk to a specific point on the stage (e.g., towards active VM or chart)
     */
    walkToPercent(targetX, onArrival) {
      if (!companionEl) return;
      const currentX = posX;
      const diff = targetX - currentX;
      if (Math.abs(diff) < 2) {
        if (onArrival) onArrival();
        return;
      }
      const dir = diff > 0 ? 'right' : 'left';
      const steps = Math.min(24, Math.max(6, Math.round(Math.abs(diff) / 1.2)));
      this.walk(dir, steps, onArrival);
    }
  };

  global.RalseiCompanion = RalseiCompanion;
})(window);
