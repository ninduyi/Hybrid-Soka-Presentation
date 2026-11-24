/**
 * DELTARUNE GAME ENGINE APP CONTROLLER — FIREBAT CYBER QUEST
 * Handles multi-beat typewriter dialogues without overflow, Ralsei portrait
 * & stage synchronization, audio SFX, keyboard/touch navigation, and modal management.
 */
(function (global) {
  'use strict';

  const chapters = global.DeltaruneChapters || [];
  const sfx = global.DeltaruneSFX || {
    playSelect() {}, playConfirm() {}, playTypewriter() {}, playCancel() {}, playChime() {}, toggleMute() { return false; }
  };

  let currentChapterIdx = 0;
  let currentBeatIdx = 0;
  let currentBeats = [];
  let typewriterInterval = null;
  let fullDialogueText = '';
  let isTypewriterRunning = false;

  // DOM Elements
  const stageMain = document.getElementById('chapter-stage');
  const dialogueBox = document.getElementById('dr-dialogue-box');
  const dialogueSpeaker = document.getElementById('dialogue-speaker');
  const dialogueText = document.getElementById('dialogue-text');
  const dialoguePortrait = document.getElementById('dialogue-portrait');
  const dialoguePortraitImg = document.getElementById('dialogue-portrait-img');
  const dialoguePrompt = document.getElementById('dialogue-prompt');

  const navDotsContainer = document.getElementById('nav-dots');
  const btnPartyTop = document.getElementById('btn-party-top');
  const btnNotes = document.getElementById('btn-notes');
  const btnSfx = document.getElementById('btn-sfx');
  const btnFs = document.getElementById('btn-fs');
  const notesModal = document.getElementById('notes-modal');
  const notesText = document.getElementById('notes-text');
  const btnCloseNotes = document.getElementById('btn-close-notes');

  const imgModal = document.getElementById('img-modal');
  const imgModalTitle = document.getElementById('img-modal-title');
  const imgModalTag = document.getElementById('img-modal-tag');
  const btnCloseImgModal = document.getElementById('btn-close-img-modal');

  const partyModal = document.getElementById('party-modal');

  const appAPI = {
    playSFX(name) {
      if (name === 'select') sfx.playSelect();
      else if (name === 'confirm') sfx.playConfirm();
      else if (name === 'typewriter') sfx.playTypewriter();
      else if (name === 'cancel') sfx.playCancel();
      else if (name === 'chime') sfx.playChime();
    },

    typeDialogue(speaker, text, mood = 'smile') {
      if (typewriterInterval) clearInterval(typewriterInterval);

      dialogueSpeaker.textContent = speaker || 'SYSTEM';
      fullDialogueText = text || '';
      dialogueText.textContent = '';
      isTypewriterRunning = true;
      if (dialoguePrompt) dialoguePrompt.style.display = 'none';

      // Sync portrait animation
      if (global.RalseiCompanion) {
        global.RalseiCompanion.syncPortrait(true, mood);
      }

      let charIdx = 0;
      typewriterInterval = setInterval(() => {
        if (charIdx < fullDialogueText.length) {
          dialogueText.textContent += fullDialogueText.charAt(charIdx);
          if (charIdx % 2 === 0) sfx.playTypewriter();
          charIdx++;
        } else {
          clearInterval(typewriterInterval);
          typewriterInterval = null;
          isTypewriterRunning = false;
          if (dialoguePrompt) {
            const hasMoreBeats = currentBeatIdx < currentBeats.length - 1;
            dialoguePrompt.textContent = hasMoreBeats ? '♥ NEXT [Z] ▶' : '♥ NEXT CHAPTER ▶';
            dialoguePrompt.style.display = 'block';
          }
          if (global.RalseiCompanion) {
            global.RalseiCompanion.syncPortrait(false, mood);
          }
        }
      }, 22);
    },

    skipTypewriter() {
      if (isTypewriterRunning && typewriterInterval) {
        clearInterval(typewriterInterval);
        typewriterInterval = null;
        dialogueText.textContent = fullDialogueText;
        isTypewriterRunning = false;
        if (dialoguePrompt) {
          const hasMoreBeats = currentBeatIdx < currentBeats.length - 1;
          dialoguePrompt.textContent = hasMoreBeats ? '♥ NEXT [Z] ▶' : '♥ NEXT CHAPTER ▶';
          dialoguePrompt.style.display = 'block';
        }
        if (global.RalseiCompanion) {
          const chapter = chapters[currentChapterIdx];
          global.RalseiCompanion.syncPortrait(false, chapter ? chapter.mood : 'smile');
        }
      }
    },

    advanceDialogueOrChapter() {
      if (isTypewriterRunning) {
        this.skipTypewriter();
      } else if (currentBeatIdx < currentBeats.length - 1) {
        sfx.playSelect();
        currentBeatIdx++;
        const chapter = chapters[currentChapterIdx];
        this.typeDialogue(chapter.speaker, currentBeats[currentBeatIdx], chapter.mood || 'smile');
      } else if (currentChapterIdx < chapters.length - 1) {
        sfx.playConfirm();
        this.goToChapter(currentChapterIdx + 1);
      }
    },

    openImageModal(src, title) {
      if (imgModal && imgModalTag) {
        imgModalTag.src = src;
        imgModalTitle.textContent = title || 'Visual Preview';
        imgModal.classList.remove('hidden');
      }
    },

    goToChapter(idx) {
      if (idx < 0 || idx >= chapters.length) return;
      currentChapterIdx = idx;
      currentBeatIdx = 0;
      const chapter = chapters[currentChapterIdx];

      // Prepare Dialogue Beats
      if (Array.isArray(chapter.dialogueBeats) && chapter.dialogueBeats.length > 0) {
        currentBeats = chapter.dialogueBeats;
      } else if (chapter.dialogue) {
        currentBeats = [chapter.dialogue];
      } else {
        currentBeats = ['...'];
      }

      // Pan 3D background camera
      if (global.Background3D && typeof global.Background3D.setSlideIndex === 'function') {
        global.Background3D.setSlideIndex(currentChapterIdx);
      }

      // Clear & render chapter stage
      stageMain.innerHTML = '';
      if (typeof chapter.render === 'function') {
        chapter.render(stageMain, appAPI);
      }

      // Start Typewriter Dialogue with first beat
      this.typeDialogue(chapter.speaker, currentBeats[0], chapter.mood || 'smile');

      // Update Navigation Dots
      if (navDotsContainer) {
        navDotsContainer.querySelectorAll('.dr-nav-dot').forEach((dot, i) => {
          dot.classList.toggle('active', i === currentChapterIdx);
        });
      }

      // Update Speaker Notes Text
      if (notesText) {
        notesText.textContent = chapter.notes || 'Tidak ada catatan khusus untuk chapter ini.';
      }

      // Update Hero Party Active State
      const heroChips = document.querySelectorAll('.dr-hero-chip');
      heroChips.forEach(chip => chip.classList.remove('active'));
      if (currentChapterIdx === 0 && heroChips[0]) heroChips[0].classList.add('active');
      else if (currentChapterIdx === 1 && heroChips[1]) heroChips[1].classList.add('active');
      else if (currentChapterIdx === 2 && heroChips[2]) heroChips[2].classList.add('active');
      else if (currentChapterIdx >= 3 && heroChips[3]) heroChips[3].classList.add('active');

      // Update Action Menu Button Active State
      const actBtns = document.querySelectorAll('.dr-act-btn');
      actBtns.forEach(btn => btn.classList.remove('active'));
      if (currentChapterIdx === 0 && actBtns[0]) actBtns[0].classList.add('active');
      else if (currentChapterIdx >= 1 && currentChapterIdx <= 3) {
        if (actBtns[1]) actBtns[1].classList.add('active');
      } else if (currentChapterIdx === 4 || currentChapterIdx === 5) {
        if (actBtns[2]) actBtns[2].classList.add('active');
      } else if (currentChapterIdx === 6 && actBtns[3]) actBtns[3].classList.add('active');
    }
  };

  // Build Top Navigation Dots
  function buildNavDots() {
    if (!navDotsContainer) return;
    navDotsContainer.innerHTML = chapters.map((ch, idx) => `
      <button class="dr-nav-dot ${idx === 0 ? 'active' : ''}" data-idx="${idx}" title="${ch.title}">
        ${idx + 1}
      </button>
    `).join('');

    navDotsContainer.querySelectorAll('.dr-nav-dot').forEach(dot => {
      dot.onclick = () => {
        sfx.playSelect();
        appAPI.goToChapter(Number(dot.dataset.idx));
      };
    });
  }

  // Setup Keyboard & Mouse Listeners
  function initControls() {
    window.addEventListener('keydown', (e) => {
      // Escape closes modals
      if (e.key === 'Escape') {
        if (notesModal && !notesModal.classList.contains('hidden')) {
          notesModal.classList.add('hidden');
          sfx.playCancel();
          return;
        }
        if (imgModal && !imgModal.classList.contains('hidden')) {
          imgModal.classList.add('hidden');
          sfx.playCancel();
          return;
        }
        if (partyModal && !partyModal.classList.contains('hidden')) {
          partyModal.classList.add('hidden');
          sfx.playCancel();
          return;
        }
      }

      // Advance / Skip controls
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        if (isTypewriterRunning) {
          appAPI.skipTypewriter();
        } else if (currentChapterIdx < chapters.length - 1) {
          sfx.playSelect();
          appAPI.goToChapter(currentChapterIdx + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (currentChapterIdx > 0) {
          sfx.playSelect();
          appAPI.goToChapter(currentChapterIdx - 1);
        }
      } else if (e.key === ' ' || e.key === 'z' || e.key === 'Z' || e.key === 'Enter') {
        appAPI.advanceDialogueOrChapter();
      } else if (e.key === 'x' || e.key === 'X' || e.key === 'Shift') {
        appAPI.skipTypewriter();
      } else if (e.key === 'p' || e.key === 'P') {
        if (btnPartyTop) btnPartyTop.click();
      } else if (e.key === 'n' || e.key === 'N') {
        btnNotes.click();
      } else if (e.key === 'm' || e.key === 'M') {
        btnSfx.click();
      } else if (e.key === 'f' || e.key === 'F') {
        btnFs.click();
      } else if (e.key >= '1' && e.key <= '7') {
        sfx.playConfirm();
        appAPI.goToChapter(Number(e.key) - 1);
      }
    });

    // Dialogue Box Click -> Advance beat or skip typewriter
    if (dialogueBox) {
      dialogueBox.onclick = () => {
        appAPI.advanceDialogueOrChapter();
      };
    }

    // Dialogue Portrait Click -> Ralsei Mascot Interaction
    if (dialoguePortrait) {
      dialoguePortrait.onclick = (e) => {
        e.stopPropagation();
        if (global.RalseiCompanion) {
          global.RalseiCompanion.triggerInteraction();
        }
      };
    }

    // Top Header Buttons
    if (btnPartyTop) {
      btnPartyTop.onclick = () => {
        sfx.playConfirm();
        if (typeof global.openPartyMemberModal === 'function') {
          global.openPartyMemberModal(1, appAPI);
        }
      };
    }
    if (btnNotes) {
      btnNotes.onclick = () => {
        sfx.playConfirm();
        notesModal.classList.toggle('hidden');
      };
    }
    if (btnCloseNotes) {
      btnCloseNotes.onclick = () => {
        sfx.playCancel();
        notesModal.classList.add('hidden');
      };
    }
    if (btnCloseImgModal) {
      btnCloseImgModal.onclick = () => {
        sfx.playCancel();
        imgModal.classList.add('hidden');
      };
    }

    if (btnSfx) {
      btnSfx.onclick = () => {
        const isMuted = sfx.toggleMute();
        btnSfx.innerHTML = isMuted ? '🔇 MUTE' : '🎵 SFX ON';
        if (!isMuted) sfx.playConfirm();
      };
    }

    if (btnFs) {
      btnFs.onclick = () => {
        sfx.playConfirm();
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen?.();
        } else {
          document.exitFullscreen?.();
        }
      };
    }

    // Action Menu Buttons Click Handlers
    const actBtns = document.querySelectorAll('.dr-act-btn');
    if (actBtns[0]) actBtns[0].onclick = () => { sfx.playConfirm(); appAPI.goToChapter(0); }; // Cover & Team
    if (actBtns[1]) actBtns[1].onclick = () => { sfx.playConfirm(); appAPI.goToChapter(3); }; // Chapter 4: Interactive Battle Arena
    if (actBtns[2]) actBtns[2].onclick = () => { sfx.playConfirm(); appAPI.goToChapter(4); }; // Chapter 5: Data Lab
    if (actBtns[3]) actBtns[3].onclick = () => { sfx.playConfirm(); appAPI.goToChapter(6); }; // Chapter 7: Summary & Refs
  }

  // Init App on Load
  document.addEventListener('DOMContentLoaded', () => {
    buildNavDots();
    initControls();
    appAPI.goToChapter(0);
  });

  global.DeltaruneApp = appAPI;
})(window);
