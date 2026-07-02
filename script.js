/**
 * ============================================================
 * VIGYAAN BHAIRAV · PEACEFUL MEDITATION PLATFORM
 * Complete JavaScript Application
 * Version 2.0.0
 * ============================================================
 */

(function() {
    'use strict';

    // ============================================================
    // 1. DATA: 112 TECHNIQUES
    // ============================================================
    const TECHNIQUES = {};

    const techniqueNames = [
        "Witnessing the Breath", "Awareness of the Gap", "Spinal Current Meditation", "Third Eye Gazing",
        "Witnessing Thoughts", "Inner Resonance", "Gazing into Darkness", "Heart Center Meditation",
        "Body Sensation Awareness", "Slow Breath Meditation", "Walking Awareness", "Observation of Emotions",
        "Listening to Silence", "Whole-Body Awareness", "Expansion of Awareness", "Spine Awareness",
        "Total Relaxation", "Edge of Sleep", "Momentary Suspension", "Perceiving the Space Between",
        "Feeling the Void", "Embodied Light", "Dissolving into Sound", "Touching the Sky",
        "Savoring the Source", "Radiating Love", "Itching and Tingling", "Flame Contemplation",
        "Pulse of Life", "Empty Sky", "Luminous Void", "Elemental Contact",
        "Breath as Cosmic Wind", "Stillness Between Heartbeats", "Spontaneous Satori", "Scent of the Absolute",
        "Expanding to Horizon", "Centering in Navel", "Cave of the Heart", "Unstruck Sound",
        "Shakti Rising", "Kundalini Awakening", "Absorption in Color", "Inner Moon",
        "Sun in Solar Plexus", "Void Gazing", "Darkness Beyond Form", "Guru's Grace",
        "Dissolving Ego", "Surrendering to What Is", "Non-Doing", "Effortless Being",
        "Resting in Natural State", "Unconditional Love", "Compassion Meditation", "Joy Unbound",
        "Equanimity", "Forgiveness Practice", "Gratitude Shower", "Body as Temple",
        "Skeleton Awareness", "Dissolving Boundaries", "Elemental Purification", "Fire Offering Within",
        "Waterfall of Grace", "Mountain Stillness", "Wind of Change", "Space Unbounded",
        "Earth Rooting", "Cosmic Dance", "Timeless Awareness", "Dreamlike Illusion",
        "Lucid Waking", "Sleep as Yoga", "Twilight Contemplation", "Midnight Vigil",
        "Dawn Awakening", "Noon Radiance", "Dusk Surrender", "Seasons Within",
        "Age as Wisdom", "Death Awareness", "Rebirth Visualization", "Ancestor Connection",
        "Guardian Spirits", "Divine Child", "Inner Mother", "Cosmic Father",
        "Friend of All", "Teacher Within", "Healer's Touch", "Warrior's Courage",
        "Sage's Silence", "Lover's Embrace", "Creator's Joy", "Destroyer's Clarity",
        "Preserver's Patience", "Dancer's Grace", "Beggar's Humility", "King's Sovereignty",
        "Jester's Laughter", "Fool's Leap", "Seeker's Quest", "Finder's Rest",
        "Praise to the Void", "Hymn to the Heart", "Mantra of Light", "Seed Syllable",
        "Whispered Prayer", "Silent Reverence", "Offering of Breath", "Gift of Presence"
    ];

    const sanskritNames = [
        "Śvāsa Praśvāsa", "Antar Śvāsa", "Suṣumṇā Śvāsa", "Bhrūmadhya Dhyāna",
        "Vikalpa Sākṣī", "Anāhata Nāda", "Tamas Dhyāna", "Hṛdaya Ākāśa",
        "Deha Anubhava", "Manda Śvāsa", "Caraṇa Jāgṛta", "Bhāva Dṛṣṭi",
        "Mauna Śravaṇa", "Sarvāṅga Bodha", "Caitanya Vistāra", "Merudaṇḍa",
        "Pūrṇa Viśrāma", "Svapna Antara", "Kṣaṇa Vilamba", "Antarikṣa Spṛś",
        "Śūnya Sparśa", "Tejas Mūrti", "Nāda Laya", "Gagan Sparśa",
        "Srota Āsvāda", "Premākāra", "Kaṇḍūti", "Agni Cintana",
        "Nāḍī Spandana", "Ākāśa Śūnya", "Prakāśa Śūnya", "Bhūta Saṃsparśa",
        "Prāṇa Vāyu", "Hṛdaya Spandana", "Sahaja Samādhi", "Para Gandha",
        "Dik Vistāra", "Nābhi Kendra", "Guhā Hṛdaya", "Anāhata Dhvani",
        "Śakti Uthāna", "Kuṇḍalinī Bodha", "Varṇa Layana", "Candra Antar",
        "Sūrya Maṇipūra", "Śūnya Dṛṣṭi", "Tamas Para", "Guru Kṛpā",
        "Ahaṅkāra Tyāga", "Tathatā Samarpaṇa", "Akriyā", "Sahaja Sthiti",
        "Prakṛti Viśrāma", "Prema Akhaṇḍa", "Karuṇā Dhyāna", "Ānanda Akhaṇḍa",
        "Samatā", "Kṣamā Sādhana", "Kṛtajñatā Snāna", "Deha Mandira",
        "Asthi Bodha", "Sīmā Vilaya", "Bhūta Śodhana", "Antar Agnihotra",
        "Amṛta Dhārā", "Acala Sthiti", "Vāyu Parivartana", "Ākāśa Ananta",
        "Pṛthvī Mūla", "Brahmāṇḍa Nṛtya", "Kāla Bodha", "Svapna Māyā",
        "Jāgrat Svapna", "Yoganidrā", "Sandhyā Dhyāna", "Ardha Rātri",
        "Prātaḥ Bodha", "Madhyāhna Tejas", "Sandhyā Samarpaṇa", "Ṛtu Antar",
        "Vayasa Prajñā", "Maraṇa Sati", "Punarjanma Dhyāna", "Pitṛ Saṃyoga",
        "Devatā Rakṣā", "Divya Bāla", "Antar Mātā", "Brahma Pitā",
        "Sarva Mitra", "Antar Guru", "Hasta Cikitsā", "Vīrya Śaurya",
        "Muni Mauna", "Premāliṅgana", "Ānanda Sṛṣṭi", "Saṃhāra Śuddhi",
        "Sthiti Kṣamā", "Nartana Lāvaṇya", "Dīnatā", "Rāja Sattva",
        "Hāsya Vilāsa", "Ātma Līlā", "Sādhaka Patha", "Lābha Viśrāma",
        "Śūnya Stuti", "Hṛdaya Stotra", "Jyotir Mantra", "Bīja Akṣara",
        "Upāṃśu Prārthanā", "Mauna Bhakti", "Prāṇa Arghya", "Sādhana Upasthāna"
    ];

    const categories = ['breath', 'body', 'heart', 'sound', 'gaze', 'void', 'energy', 'light', 'touch', 'space', 'stillness',
        'emotion', 'awareness', 'devotion'
    ];
    const chakras = ['Root', 'Sacral', 'Solar Plexus', 'Heart', 'Throat', 'Third Eye', 'Crown'];
    const elements = ['Earth', 'Water', 'Fire', 'Air', 'Ether'];

    for (let i = 1; i <= 112; i++) {
        const idx = i - 1;
        const cat = categories[idx % categories.length];
        const chakra = chakras[i % chakras.length];
        const element = elements[i % elements.length];
        const name = techniqueNames[idx % techniqueNames.length];
        const sanskrit = sanskritNames[idx % sanskritNames.length];
        TECHNIQUES[i] = {
            id: i,
            name: name,
            sanskrit: sanskrit,
            category: cat,
            chakra: chakra,
            element: element,
            essence: `The Vigyan Bhairav Tantra reveals: “${name} is a direct portal to the formless. When you rest in this awareness, the universe meditates through you.”`,
            steps: `1. Find a quiet, comfortable seat. 2. Close your eyes gently. 3. Bring your attention to ${cat === 'breath' ? 'the natural flow of breath' : 'the present moment'}. 4. Allow thoughts to arise and dissolve without engagement. 5. Continue for 10-20 minutes.`,
            wisdom: `Shiva whispers: “Radiant one, this experience may dawn between two breaths.”`,
            posture: "Sukhasana or Vajrasana",
            mudra: "Chin Mudra or Jnana Mudra",
            breath: "Natural, effortless",
            duration: "15-20 minutes",
            benefits: { student: "Enhanced focus", employee: "Stress relief", seeker: "Deeper awareness" }
        };
    }

    // Enhance first few with authentic details
    TECHNIQUES[1] = Object.assign({}, TECHNIQUES[1], {
        essence: "Shiva: 'Between two breaths, the beneficence. Watch the breath coming in and going out. Don't control, just witness.'",
        steps: "1. Sit comfortably. 2. Close your eyes. 3. Observe the breath at the nostrils. 4. Don't follow it inside. 5. If awareness drifts, gently return."
    });
    TECHNIQUES[4] = Object.assign({}, TECHNIQUES[4], {
        essence: "Fix your attention at the third eye. Let the mind dissolve into that light. This is the gateway to the infinite.",
        steps: "1. Sit with a straight spine. 2. Close your eyes. 3. Gently gaze upward to the space between eyebrows. 4. Feel subtle pressure or light. 5. Rest in that awareness."
    });

    // ============================================================
    // 2. PROFESSIONS / ARCHETYPES
    // ============================================================
    const professions = [
        { name: "Student", icon: "fa-graduation-cap", desc: "Focus & Memory", keywords: ["focus", "memory",
                "concentration"
            ] },
        { name: "Employee", icon: "fa-briefcase", desc: "Stress & Work-life", keywords: ["stress", "work",
                "balance"
            ] },
        { name: "Seeker", icon: "fa-infinity", desc: "Spiritual Path", keywords: ["spiritual", "awakening",
                "awareness"
            ] },
        { name: "Anxious", icon: "fa-heartbeat", desc: "Calm Anxiety", keywords: ["anxiety", "calm", "peace"] },
        { name: "Artist", icon: "fa-paint-brush", desc: "Flow State", keywords: ["creativity", "flow"] },
        { name: "Leader", icon: "fa-crown", desc: "Clarity & Presence", keywords: ["leadership", "clarity",
                "presence"
            ] },
        { name: "Healer", icon: "fa-hand-holding-heart", desc: "Compassion", keywords: ["compassion", "healing",
                "care"
            ] }
    ];

    function getRecommendedTechniques(prof) {
        const scored = Object.values(TECHNIQUES).map(function(t) {
            var score = prof.keywords.reduce(function(s, k) {
                return s + (t.name.toLowerCase().includes(k) ? 5 : 0) + (t.category.includes(k) ? 3 : 0);
            }, 0);
            return { tech: t, score: score };
        });
        scored.sort(function(a, b) { return b.score - a.score; });
        return scored.slice(0, 12).map(function(s) { return s.tech; });
    }

    // ============================================================
    // 3. QUOTES LIBRARY
    // ============================================================
    const QUOTE_LIBRARY = [
        { text: "The pause between two breaths is the doorway to the infinite.", author: "Shiva" },
        { text: "You are the timeless sky, thoughts are just clouds passing by.", author: "Rumi" },
        { text: "Realize that you are already free.", author: "Ramana Maharshi" },
        { text: "Stillness is the language of God.", author: "Osho" },
        { text: "When you become aware of silence, you become aware of yourself.", author: "Eckhart Tolle" },
        { text: "The only way to live is by accepting each minute as an unrepeatable miracle.", author: "Tara Brach" },
        { text: "Let go of the battle. Breathe quietly and let it be.", author: "Buddha" },
        { text: "Be content with what you have; rejoice in the way things are.", author: "Lao Tzu" },
        { text: "The mind is everything. What you think you become.", author: "Buddha" },
        { text: "Peace comes from within. Do not seek it without.", author: "Buddha" },
        { text: "The journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
        { text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },
        { text: "He who has a why can bear almost any how.", author: "Nietzsche" },
        { text: "The kingdom of God is within you.", author: "Jesus" },
        { text: "Yoga is the cessation of the mind's fluctuations.", author: "Patanjali" },
        { text: "Arise, awake, stop not till the goal is reached.", author: "Swami Vivekananda" },
        { text: "Truth is a pathless land.", author: "Krishnamurti" },
        { text: "Don't worry, be happy.", author: "Meher Baba" },
        { text: "The quieter you become, the more you can hear.", author: "Ram Dass" },
        { text: "Be here now.", author: "Ram Dass" },
        { text: "You are not a drop in the ocean. You are the entire ocean in a drop.", author: "Rumi" },
        { text: "The wound is the place where the Light enters you.", author: "Rumi" }
    ];

    // ============================================================
    // 4. BREATH PROTOCOLS
    // ============================================================
    const BREATH_PROTOCOLS = {
        box: { name: 'Box 4-4-6-4', phases: ['inhale', 'hold', 'exhale', 'hold'], timings: [4, 4, 6, 4] },
        '478': { name: '4-7-8 Relax', phases: ['inhale', 'hold', 'exhale'], timings: [4, 7, 8] },
        nadi: { name: 'Nadi Shodhana', phases: ['inhale left', 'hold', 'exhale right', 'inhale right', 'hold',
                'exhale left'
            ], timings: [4, 4, 4, 4, 4, 4] },
        ujjayi: { name: 'Ujjayi Ocean', phases: ['ujjayi inhale', 'ujjayi exhale'], timings: [5, 5] },
        kapal: { name: 'Kapalabhati', phases: ['rapid exhale', 'rest'], timings: [20, 10] },
        bhramari: { name: 'Bhramari Hum', phases: ['inhale', 'exhale with hum'], timings: [4, 6] },
        coherent: { name: 'Coherent 5.5', phases: ['inhale', 'exhale'], timings: [5.5, 5.5] },
        sitali: { name: 'Sitali Cool', phases: ['inhale through curled tongue', 'exhale'], timings: [4, 6] },
        bastrika: { name: 'Bhastrika', phases: ['rapid breath', 'rest'], timings: [20, 10] },
        tummo: { name: 'Tummo Inner Fire', phases: ['inhale', 'hold', 'exhale'], timings: [6, 12, 6] },
        sama: { name: 'Sama Vritti', phases: ['inhale', 'exhale'], timings: [5, 5] },
        wimhof: { name: 'Wim Hof', phases: ['deep inhale', 'exhale', 'retention'], timings: [2, 0, 30] }
    };

    // ============================================================
    // 5. ACHIEVEMENT DEFINITIONS
    // ============================================================
    const ACHIEVEMENT_DEFS = [
        { id: 'first', name: 'First Step', desc: 'Complete your first practice', target: 1, get: function() { return user
                    .totalPractices; } },
        { id: 'streak3', name: '3-Day Presence', desc: '3 days streak', target: 3, get: function() { return user
                    .streak; } },
        { id: 'streak7', name: 'Week of Light', desc: '7 days streak', target: 7, get: function() { return user
                    .streak; } },
        { id: 'streak30', name: 'One Month', desc: '30 days streak', target: 30, get: function() { return user
                    .streak; } },
        { id: 'minutes100', name: '100 Minutes', desc: '100 total minutes', target: 100, get: function() { return user
                    .totalMinutes; } },
        { id: 'minutes500', name: '500 Minutes', desc: '500 total minutes', target: 500, get: function() { return user
                    .totalMinutes; } },
        { id: 'diary5', name: 'Reflective Soul', desc: '5 diary entries', target: 5, get: function() { return user
                    .diary.length; } },
        { id: 'diary20', name: 'Wisdom Keeper', desc: '20 diary entries', target: 20, get: function() { return user
                    .diary.length; } },
        { id: 'techniques20', name: 'Explorer', desc: '20 different techniques', target: 20, get: function() { return new Set(
                    user.practicedTechniques.map(function(p) { return p.id; })).size; } }
    ];

    // ============================================================
    // 6. USER STATE & PERSISTENCE
    // ============================================================
    var user = {
        totalPractices: parseInt(localStorage.getItem('tp')) || 0,
        totalMinutes: parseInt(localStorage.getItem('tm')) || 0,
        streak: parseInt(localStorage.getItem('streak')) || 0,
        lastDate: localStorage.getItem('lastDate') || null,
        favorites: JSON.parse(localStorage.getItem('favs')) || [],
        diary: JSON.parse(localStorage.getItem('diary')) || [],
        plan: JSON.parse(localStorage.getItem('plan')) || [],
        practiceDays: JSON.parse(localStorage.getItem('practiceDays')) || {},
        practicedTechniques: JSON.parse(localStorage.getItem('practicedTechs')) || [],
        savedQuotes: JSON.parse(localStorage.getItem('savedQuotes')) || [],
        achievements: JSON.parse(localStorage.getItem('achievements')) || {},
        moodHistory: JSON.parse(localStorage.getItem('moodHistory')) || []
    };

    function saveAll() {
        localStorage.setItem('tp', user.totalPractices);
        localStorage.setItem('tm', user.totalMinutes);
        localStorage.setItem('streak', user.streak);
        localStorage.setItem('lastDate', user.lastDate);
        localStorage.setItem('favs', JSON.stringify(user.favorites));
        localStorage.setItem('diary', JSON.stringify(user.diary));
        localStorage.setItem('plan', JSON.stringify(user.plan));
        localStorage.setItem('practiceDays', JSON.stringify(user.practiceDays));
        localStorage.setItem('practicedTechs', JSON.stringify(user.practicedTechniques));
        localStorage.setItem('savedQuotes', JSON.stringify(user.savedQuotes));
        localStorage.setItem('achievements', JSON.stringify(user.achievements));
        localStorage.setItem('moodHistory', JSON.stringify(user.moodHistory));
        updateUI();
        checkAchievements();
        updateLevel();
    }

    function getToday() {
        return new Date().toISOString().slice(0, 10);
    }

    function getYesterday() {
        var d = new Date();
        d.setDate(d.getDate() - 1);
        return d.toISOString().slice(0, 10);
    }

    // ============================================================
    // 7. CORE FUNCTIONS
    // ============================================================
    function addPractice(techId, techName, minutes) {
        minutes = minutes || 15;
        user.practicedTechniques.unshift({ id: techId, name: techName, date: new Date().toISOString(), minutes: minutes });
        user.totalPractices++;
        user.totalMinutes += minutes;

        var today = getToday();
        var yesterday = getYesterday();

        if (!user.practiceDays[today]) {
            user.practiceDays[today] = true;
            if (user.lastDate === yesterday) {
                user.streak++;
            } else if (user.lastDate !== today) {
                user.streak = 1;
            }
            user.lastDate = today;
        }

        saveAll();
        showToast('🧘 Practiced: ' + techName + ' · +' + minutes + ' min', 'success');
    }

    function updateLevel() {
        var mins = user.totalMinutes;
        var level = "Novice 🌿";
        if (mins >= 5000) level = "Mahasiddha 🕉️";
        else if (mins >= 2500) level = "Enlightened 🌟";
        else if (mins >= 1000) level = "Adept 🔮";
        else if (mins >= 300) level = "Seeker 🌱";

        var levelBadge = document.getElementById('userLevelBadge');
        var enhLevel = document.getElementById('enhLevel');
        if (levelBadge) levelBadge.textContent = level;
        if (enhLevel) enhLevel.textContent = level;

        var progress = Math.min(100, (mins % 1000) / 10);
        var progBar = document.getElementById('levelProgress');
        if (progBar) progBar.value = progress;
    }

    function showToast(message, type) {
        type = type || 'info';
        var existing = document.querySelector('.toast');
        if (existing) existing.remove();

        var toast = document.createElement('div');
        toast.className = 'toast ' + type;
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(function() {
            if (toast.parentNode) toast.remove();
        }, 2800);
    }

    function saveQuoteToDiary(text, author) {
        user.savedQuotes.push({ text: text, author: author, date: new Date().toISOString() });
        user.diary.unshift({ date: new Date(), text: '📖 Saved Quote: "' + text + '" — ' + author });
        saveAll();
        showToast('📖 Quote saved to diary', 'success');
    }

    // ============================================================
    // 8. ACHIEVEMENTS
    // ============================================================
    function checkAchievements() {
        var unlocked = 0;
        ACHIEVEMENT_DEFS.forEach(function(def) {
            if (user.achievements[def.id]) return;
            var current = def.get();
            if (current >= def.target) {
                user.achievements[def.id] = { unlockedAt: new Date().toISOString() };
                unlocked++;
                showToast('🏆 Achievement: ' + def.name, 'success');
            }
        });
        if (unlocked > 0) saveAll();
    }

    function renderAchievements() {
        var container = document.getElementById('achievementsList');
        if (!container) return;

        var html = '';
        ACHIEVEMENT_DEFS.forEach(function(def) {
            var unlocked = !!user.achievements[def.id];
            var current = def.get();
            var progress = Math.min(100, (current / def.target) * 100);
            html +=
                '<div class="achievement-item">' +
                '<div class="ach-header">' +
                '<span class="ach-name"><i class="fas ' + (unlocked ? 'fa-trophy' : 'fa-lock') + '"></i> ' + def.name +
                '</span>' +
                '<span class="ach-progress-text">' + current + '/' + def.target + '</span>' +
                '</div>' +
                '<div class="achievement-bar"><div class="achievement-progress" style="width:' + progress +
                '%;"></div></div>' +
                '<div style="font-size:0.7rem;color:var(--text-secondary);opacity:0.6;margin-top:0.2rem;">' + def.desc +
                '</div>' +
                '</div>';
        });
        container.innerHTML = html;
    }

    // ============================================================
    // 9. BREATHWORK ENGINE
    // ============================================================
    var breathActive = false;
    var breathInterval = null;

    function startBreathPractice(type) {
        if (breathInterval) clearInterval(breathInterval);
        breathActive = true;
        var stopBtn = document.getElementById('stopBreathBtn');
        if (stopBtn) stopBtn.style.display = 'inline-block';

        var protocol = BREATH_PROTOCOLS[type];
        if (!protocol) return;

        var phases = protocol.phases;
        var timings = protocol.timings;
        var phaseIdx = 0;
        var cycle = 0;
        var maxCycles = 6;

        var instructionPanel = document.getElementById('breathInstructionPanel');
        if (instructionPanel) {
            instructionPanel.innerHTML = '<strong>🧘 ' + protocol.name +
                '</strong><br>Follow the guided rhythm. Focus on your breath.';
        }

        function runPhase() {
            if (!breathActive) return;
            if (phaseIdx >= phases.length) {
                phaseIdx = 0;
                cycle++;
                if (cycle >= maxCycles) {
                    resetBreathUI();
                    addPractice(0, protocol.name + ' Breathwork', 3);
                    showToast('🌬️ Breath session complete', 'success');
                    return;
                }
            }

            var timer = timings[phaseIdx];
            var phase = phases[phaseIdx];
            var remaining = timer;

            var phaseLabel = document.getElementById('breathPhaseLabel');
            var phaseText = document.getElementById('breathPhaseText');
            var timerDisplay = document.getElementById('breathTimerDisplay');

            if (phaseLabel) phaseLabel.textContent = phase.includes('inhale') ? '🌬️' : (phase.includes('hold') ? '🌀' :
                '💨');
            if (phaseText) phaseText.textContent = phase.toUpperCase();

            var interval = setInterval(function() {
                if (!breathActive) { clearInterval(interval); return; }
                remaining = Math.round(remaining - 0.1);
                if (remaining < 0) remaining = 0;
                if (timerDisplay) timerDisplay.textContent = Math.ceil(remaining);

                var progress = ((timer - remaining) / timer) * 860;
                var ring = document.querySelector('.progress-circle');
                if (ring) ring.style.strokeDashoffset = 860 - Math.min(860, progress);

                if (remaining <= 0) {
                    clearInterval(interval);
                    phaseIdx++;
                    runPhase();
                }
            }, 100);

            breathInterval = interval;
        }

        runPhase();
    }

    function resetBreathUI() {
        if (breathInterval) clearInterval(breathInterval);
        breathActive = false;
        var stopBtn = document.getElementById('stopBreathBtn');
        if (stopBtn) stopBtn.style.display = 'none';

        var phaseLabel = document.getElementById('breathPhaseLabel');
        var phaseText = document.getElementById('breathPhaseText');
        var timerDisplay = document.getElementById('breathTimerDisplay');
        var ring = document.querySelector('.progress-circle');
        var instructionPanel = document.getElementById('breathInstructionPanel');

        if (phaseLabel) phaseLabel.textContent = '🌀';
        if (phaseText) phaseText.textContent = 'Ready';
        if (timerDisplay) timerDisplay.textContent = '0';
        if (ring) ring.style.strokeDashoffset = 860;
        if (instructionPanel) instructionPanel.innerHTML = '✨ Select a breath technique to begin your pranic journey.';
    }

    // ============================================================
    // 10. TIMER ENGINE
    // ============================================================
    var timerSec = 300;
    var timerInt = null;
    var timerRunning = false;

    function updateTimerDisplay() {
        var mins = Math.floor(timerSec / 60);
        var secs = timerSec % 60;
        var display = document.getElementById('timerDisplay');
        if (display) {
            display.textContent = String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
        }

        var progress = 1 - (timerSec / 300);
        var offset = 597 - (progress * 597);
        var ring = document.querySelector('.timer-progress');
        if (ring) ring.style.strokeDashoffset = Math.max(0, Math.min(597, offset));
    }

    function playBell() {
        try {
            var audio = new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3');
            audio.volume = 0.3;
            audio.play().catch(function() {});
        } catch (e) {}
    }

    // ============================================================
    // 11. UI UPDATE FUNCTIONS
    // ============================================================
    function updateUI() {
        var enhPractices = document.getElementById('enhTotalPractices');
        var enhMinutes = document.getElementById('enhTotalMinutes');
        var enhStreak = document.getElementById('enhStreak');
        var streakDisplay = document.getElementById('streakDisplay');
        var totalPracticesDisplay = document.getElementById('totalPracticesDisplay');
        var totalMinutesDisplay = document.getElementById('totalMinutesDisplay');

        if (enhPractices) enhPractices.textContent = user.totalPractices;
        if (enhMinutes) enhMinutes.textContent = user.totalMinutes;
        if (enhStreak) enhStreak.textContent = user.streak;
        if (streakDisplay) streakDisplay.textContent = user.streak;
        if (totalPracticesDisplay) totalPracticesDisplay.textContent = user.totalPractices;
        if (totalMinutesDisplay) totalMinutesDisplay.textContent = user.totalMinutes;

        updateLevel();
        renderDiary();
        renderCalendar();
        renderAchievements();
        updateCharts();

        // Cosmic weather
        var vib = Math.floor(60 + Math.random() * 35);
        var vibEl = document.getElementById('vibrationLevel');
        if (vibEl) vibEl.textContent = vib + '%';
    }

    function renderDiary() {
        var container = document.getElementById('diaryList');
        if (!container) return;

        if (user.diary.length === 0) {
            container.innerHTML =
                '<div style="color:var(--text-secondary);opacity:0.5;text-align:center;padding:1rem 0;">No entries yet. Begin your journey.</div>';
            return;
        }

        var html = '';
        var entries = user.diary.slice().reverse().slice(0, 30);
        entries.forEach(function(entry) {
            var date = new Date(entry.date);
            var dateStr = date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit',
                minute: '2-digit' });
            var id = entry.id || Math.random().toString(36);
            html +=
                '<div class="diary-entry-item">' +
                '<div class="entry-header">' +
                '<span>' + dateStr + '</span>' +
                '<button class="entry-delete" data-id="' + id + '" aria-label="Delete entry"><i class="fas fa-trash-alt"></i></button>' +
                '</div>' +
                '<div class="entry-text">' + entry.text + '</div>' +
                '</div>';
        });
        container.innerHTML = html;

        // Delete handlers
        container.querySelectorAll('.entry-delete').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var id = this.dataset.id;
                var idx = user.diary.findIndex(function(e) { return (e.id || e._id) === id; });
                if (idx !== -1) {
                    user.diary.splice(idx, 1);
                    saveAll();
                    renderDiary();
                    showToast('Entry deleted', 'warning');
                }
            });
        });
    }

    function renderCalendar() {
        var container = document.getElementById('calendarTracker');
        if (!container) return;

        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth();
        var firstDay = new Date(year, month, 1).getDay();
        var daysInMonth = new Date(year, month + 1, 0).getDate();
        var todayStr = getToday();

        var html = '';
        var weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        weekdays.forEach(function(d) {
            html += '<div class="calendar-day weekday">' + d + '</div>';
        });

        for (var i = 0; i < firstDay; i++) {
            html += '<div class="calendar-day"></div>';
        }

        for (var d = 1; d <= daysInMonth; d++) {
            var monthStr = String(month + 1).padStart(2, '0');
            var dayStr = String(d).padStart(2, '0');
            var dateStr = year + '-' + monthStr + '-' + dayStr;
            var practiced = !!user.practiceDays[dateStr];
            var isToday = dateStr === todayStr;
            var classes = 'calendar-day';
            if (practiced) classes += ' practiced';
            if (isToday) classes += ' today';
            html += '<div class="' + classes + '">' + d + '</div>';
        }

        container.innerHTML = html;
    }

    var progressChartInstance = null;
    var categoryChartInstance = null;

    function updateCharts() {
        // Weekly progress
        var weekData = [0, 0, 0, 0, 0, 0, 0];
        user.practicedTechniques.forEach(function(p) {
            var d = new Date(p.date);
            var day = d.getDay();
            weekData[day] += p.minutes || 15;
        });

        var ctx1 = document.getElementById('progressChart');
        if (ctx1) {
            if (progressChartInstance) progressChartInstance.destroy();
            if (typeof Chart !== 'undefined') {
                progressChartInstance = new Chart(ctx1, {
                    type: 'line',
                    data: {
                        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                        datasets: [{
                            label: 'Minutes',
                            data: weekData,
                            borderColor: '#9d7bff',
                            backgroundColor: 'rgba(157,123,255,0.08)',
                            fill: true,
                            tension: 0.3,
                            pointBackgroundColor: '#9d7bff',
                            pointRadius: 3
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins: {
                            legend: { display: false }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                grid: { color: 'rgba(255,255,255,0.05)' },
                                ticks: { color: 'var(--text-secondary)' }
                            },
                            x: {
                                grid: { display: false },
                                ticks: { color: 'var(--text-secondary)' }
                            }
                        }
                    }
                });
            }
        }

        // Category breakdown
        var catCount = {};
        user.practicedTechniques.forEach(function(p) {
            var t = TECHNIQUES[p.id];
            if (t) {
                var cat = t.category || 'other';
                catCount[cat] = (catCount[cat] || 0) + 1;
            }
        });

        var ctx2 = document.getElementById('categoryChart');
        if (ctx2) {
            if (categoryChartInstance) categoryChartInstance.destroy();
            if (typeof Chart !== 'undefined') {
                var colors = ['#9d7bff', '#ffb3a0', '#6b4eff', '#ff8a6c', '#c4b5fd', '#ffd58c', '#7ae0b0'];
                var labels = Object.keys(catCount);
                var data = Object.values(catCount);
                categoryChartInstance = new Chart(ctx2, {
                    type: 'doughnut',
                    data: {
                        labels: labels,
                        datasets: [{
                            data: data,
                            backgroundColor: colors.slice(0, labels.length),
                            borderColor: 'rgba(0,0,0,0.3)',
                            borderWidth: 2
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins: {
                            legend: {
                                position: 'bottom',
                                labels: { color: 'var(--text-secondary)', padding: 12, font: { size: 10 } }
                            }
                        }
                    }
                });
            }
        }
    }

    // ============================================================
    // 12. NAVIGATION
    // ============================================================
    var viewMap = {
        home: 'homeView',
        techniques: 'techniquesView',
        breathwork: 'breathworkView',
        quotes: 'quotesView',
        diary: 'diaryView',
        timer: 'timerView',
        enhanced: 'enhancedView'
    };

    function showView(name) {
        // Hide all views
        for (var key in viewMap) {
            if (viewMap.hasOwnProperty(key)) {
                var el = document.getElementById(viewMap[key]);
                if (el) el.classList.remove('active-view');
            }
        }

        // Show target
        var target = document.getElementById(viewMap[name]);
        if (target) target.classList.add('active-view');

        // Update nav
        var navLinks = document.querySelectorAll('.nav a[data-view]');
        navLinks.forEach(function(a) {
            a.classList.toggle('active', a.dataset.view === name);
        });

        // Refresh content if needed
        if (name === 'enhanced') {
            renderCalendar();
            updateCharts();
            renderAchievements();
        }
        if (name === 'diary') renderDiary();
        if (name === 'home') {
            updateHomeQuote();
            updateUI();
        }
    }

    // ============================================================
    // 13. QUOTE FUNCTIONS
    // ============================================================
    var currentQuotes = QUOTE_LIBRARY.slice();
    var libQuoteIndex = 0;
    var homeQuoteIndex = 0;

    function updateHomeQuote() {
        var q = QUOTE_LIBRARY[homeQuoteIndex % QUOTE_LIBRARY.length];
        var textEl = document.getElementById('homeQuoteText');
        var authorEl = document.getElementById('homeQuoteAuthor');
        if (textEl) textEl.textContent = '“' + q.text + '”';
        if (authorEl) authorEl.textContent = '— ' + q.author;
    }

    function updateLibQuote() {
        if (currentQuotes.length === 0) {
            var textEl = document.getElementById('quoteTextLarge');
            var authorEl = document.getElementById('quoteAuthorLarge');
            if (textEl) textEl.textContent = 'No quotes found';
            if (authorEl) authorEl.textContent = '';
            return;
        }
        var q = currentQuotes[libQuoteIndex % currentQuotes.length];
        var textEl = document.getElementById('quoteTextLarge');
        var authorEl = document.getElementById('quoteAuthorLarge');
        if (textEl) textEl.textContent = '“' + q.text + '”';
        if (authorEl) authorEl.textContent = '— ' + q.author;
    }

    // ============================================================
    // 14. TECHNIQUES UI
    // ============================================================
    var currentTechList = [];
    var currentTechIdx = 0;

    function renderTechCarousel() {
        var t = currentTechList[currentTechIdx];
        if (!t) return;
        var container = document.getElementById('techCarouselContent');
        if (!container) return;
        container.innerHTML =
            '<div class="glass-card" style="padding:1.2rem;">' +
            '<h3 style="font-size:1.2rem;">' + t.name + '</h3>' +
            '<div style="font-size:0.8rem;color:var(--text-secondary);">' + t.sanskrit + ' · ' + t.chakra +
            ' chakra · ' + t.element + '</div>' +
            '<div style="margin:0.8rem 0;font-size:0.9rem;">' + t.essence + '</div>' +
            '<div style="font-size:0.85rem;color:var(--text-secondary);"><strong>Steps:</strong> ' + t.steps +
            '</div>' +
            '<div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:0.8rem;">' +
            '<span style="background:rgba(157,123,255,0.12);padding:0.2rem 0.8rem;border-radius:20px;font-size:0.7rem;">' +
            t.category + '</span>' +
            '<span style="background:rgba(157,123,255,0.12);padding:0.2rem 0.8rem;border-radius:20px;font-size:0.7rem;">' +
            t.duration + '</span>' +
            '</div>' +
            '</div>';
    }

    // ============================================================
    // 15. INITIALIZATION
    // ============================================================
    function init() {
        // --- Navigation ---
        document.querySelectorAll('.nav a[data-view]').forEach(function(el) {
            el.addEventListener('click', function(e) {
                e.preventDefault();
                showView(this.dataset.view);
            });
        });

        document.querySelectorAll('footer a[data-view]').forEach(function(el) {
            el.addEventListener('click', function(e) {
                e.preventDefault();
                showView(this.dataset.view);
            });
        });

        // --- Theme Toggle ---
        var themeToggle = document.getElementById('themeToggle');
        var html = document.documentElement;
        var savedTheme = localStorage.getItem('theme') || 'dark';
        html.setAttribute('data-theme', savedTheme);
        if (themeToggle) {
            themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-moon"></i>' :
            '<i class="fas fa-sun"></i>';
            themeToggle.addEventListener('click', function() {
                var current = html.getAttribute('data-theme');
                var next = current === 'dark' ? 'light' : 'dark';
                html.setAttribute('data-theme', next);
                localStorage.setItem('theme', next);
                this.innerHTML = next === 'dark' ? '<i class="fas fa-moon"></i>' :
                '<i class="fas fa-sun"></i>';
            });
        }

        // --- Home: Explore & Daily ---
        var exploreBtn = document.getElementById('exploreBtn');
        var dailyBtn = document.getElementById('dailyBtn');
        if (exploreBtn) exploreBtn.addEventListener('click', function() { showView('techniques'); });
        if (dailyBtn) {
            dailyBtn.addEventListener('click', function() {
                var rand = Math.floor(Math.random() * 112) + 1;
                var t = TECHNIQUES[rand];
                showToast('Today\'s technique: ' + t.name + ' · ' + t.chakra + ' chakra', 'info');
            });
        }

        // --- Home: Next Quote ---
        var nextQuoteBtn = document.getElementById('nextHomeQuote');
        if (nextQuoteBtn) {
            nextQuoteBtn.addEventListener('click', function() {
                homeQuoteIndex = (homeQuoteIndex + 1) % QUOTE_LIBRARY.length;
                updateHomeQuote();
            });
        }

        var saveHomeQuoteBtn = document.getElementById('saveHomeQuoteBtn');
        if (saveHomeQuoteBtn) {
            saveHomeQuoteBtn.addEventListener('click', function() {
                var q = QUOTE_LIBRARY[homeQuoteIndex % QUOTE_LIBRARY.length];
                saveQuoteToDiary(q.text, q.author);
            });
        }

        // --- Mood Buttons ---
        document.querySelectorAll('.mood-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.mood-btn').forEach(function(b) { b.classList.remove(
                    'selected'); });
                this.classList.add('selected');
                var mood = this.dataset.mood;

                user.moodHistory.push({ mood: mood, date: new Date().toISOString() });
                saveAll();

                var recId;
                if (mood === 'serene' || mood === 'curious') recId = Math.floor(Math.random() * 20) + 1;
                else if (mood === 'anxious') recId = [1, 3, 8, 20][Math.floor(Math.random() * 4)];
                else if (mood === 'focused') recId = [4, 5, 10, 15][Math.floor(Math.random() * 4)];
                else recId = Math.floor(Math.random() * 40) + 1;

                var rec = TECHNIQUES[recId] || TECHNIQUES[1];
                var moodRec = document.getElementById('moodRecommend');
                if (moodRec) {
                    moodRec.innerHTML = '🌀 Based on your mood, we recommend: <strong>' + rec.name +
                        '</strong> (' + rec.chakra + ' chakra) — ' + rec.essence.substring(0, 80) +
                        '...';
                }
            });
        });

        // --- Quotes Library ---
        var prevLibBtn = document.getElementById('prevLibQuote');
        var nextLibBtn = document.getElementById('nextLibQuote');
        var saveLibBtn = document.getElementById('saveLibQuoteBtn');
        var quoteSearch = document.getElementById('quoteSearchInput');

        if (prevLibBtn) {
            prevLibBtn.addEventListener('click', function() {
                if (currentQuotes.length) {
                    libQuoteIndex = (libQuoteIndex - 1 + currentQuotes.length) % currentQuotes.length;
                    updateLibQuote();
                }
            });
        }
        if (nextLibBtn) {
            nextLibBtn.addEventListener('click', function() {
                if (currentQuotes.length) {
                    libQuoteIndex = (libQuoteIndex + 1) % currentQuotes.length;
                    updateLibQuote();
                }
            });
        }
        if (saveLibBtn) {
            saveLibBtn.addEventListener('click', function() {
                if (currentQuotes.length) {
                    var q = currentQuotes[libQuoteIndex % currentQuotes.length];
                    saveQuoteToDiary(q.text, q.author);
                }
            });
        }
        if (quoteSearch) {
            quoteSearch.addEventListener('input', function() {
                var term = this.value.toLowerCase();
                currentQuotes = QUOTE_LIBRARY.filter(function(q) {
                    return q.text.toLowerCase().includes(term) || q.author.toLowerCase().includes(
                    term);
                });
                libQuoteIndex = 0;
                updateLibQuote();
            });
        }

        // --- Diary ---
        var saveDiaryBtn = document.getElementById('saveDiary');
        var diaryEntry = document.getElementById('diaryEntry');
        var exportDiaryBtn = document.getElementById('exportDiaryPDFBtn');

        if (saveDiaryBtn) {
            saveDiaryBtn.addEventListener('click', function() {
                var text = diaryEntry ? diaryEntry.value.trim() : '';
                if (text) {
                    user.diary.unshift({ date: new Date(), text: text });
                    if (diaryEntry) diaryEntry.value = '';
                    saveAll();
                    renderDiary();
                    showToast('📓 Diary entry saved', 'success');
                } else {
                    showToast('Please write something before saving', 'warning');
                }
            });
        }

        if (exportDiaryBtn) {
            exportDiaryBtn.addEventListener('click', function() {
                if (typeof window.jspdf !== 'undefined' && window.jspdf.jsPDF) {
                    var doc = new window.jspdf.jsPDF();
                    doc.text("Cosmic Diary", 20, 20);
                    var y = 30;
                    var entries = user.diary.slice(0, 30);
                    if (entries.length === 0) {
                        doc.text("No entries yet.", 20, 30);
                    } else {
                        entries.forEach(function(e) {
                            var text = new Date(e.date).toLocaleString() + ': ' + e.text
                            .substring(0, 120);
                            doc.text(text, 20, y, { maxWidth: 170 });
                            y += 10;
                            if (y > 280) { doc.addPage();
                                y = 20; }
                        });
                    }
                    doc.save('diary_' + new Date().toISOString().slice(0, 10) + '.pdf');
                    showToast('📄 Diary exported as PDF', 'success');
                } else {
                    showToast('PDF library loading... please try again', 'warning');
                }
            });
        }

        // --- Timer ---
        document.querySelectorAll('.timer-preset').forEach(function(btn) {
            btn.addEventListener('click', function() {
                timerSec = parseInt(this.dataset.min) * 60;
                updateTimerDisplay();
                document.querySelectorAll('.timer-preset').forEach(function(b) { b.classList.remove(
                    'active'); });
                this.classList.add('active');
                if (timerRunning) {
                    clearInterval(timerInt);
                    timerRunning = false;
                }
                var msg = document.getElementById('timerMsg');
                if (msg) msg.textContent = this.dataset.min + ' min timer set';
            });
        });

        var startTimerBtn = document.getElementById('startTimer');
        var pauseTimerBtn = document.getElementById('pauseTimer');
        var resetTimerBtn = document.getElementById('resetTimer');

        if (startTimerBtn) {
            startTimerBtn.addEventListener('click', function() {
                if (timerRunning) return;
                if (timerSec <= 0) {
                    showToast('Please set a timer duration first', 'warning');
                    return;
                }
                timerRunning = true;
                timerInt = setInterval(function() {
                    timerSec--;
                    updateTimerDisplay();
                    if (timerSec <= 0) {
                        clearInterval(timerInt);
                        timerRunning = false;
                        playBell();
                        addPractice(0, "Meditation Timer", Math.floor((300 - timerSec) / 60) || 5);
                        var msg = document.getElementById('timerMsg');
                        if (msg) msg.textContent = '✨ Meditation complete! ✨';
                    }
                }, 1000);
                var msg = document.getElementById('timerMsg');
                if (msg) msg.textContent = '🧘 Focus on your breath...';
            });
        }

        if (pauseTimerBtn) {
            pauseTimerBtn.addEventListener('click', function() {
                if (timerRunning) {
                    clearInterval(timerInt);
                    timerRunning = false;
                    var msg = document.getElementById('timerMsg');
                    if (msg) msg.textContent = '⏸️ Paused';
                }
            });
        }

        if (resetTimerBtn) {
            resetTimerBtn.addEventListener('click', function() {
                clearInterval(timerInt);
                timerRunning = false;
                timerSec = 300;
                updateTimerDisplay();
                document.querySelectorAll('.timer-preset').forEach(function(b) { b.classList.remove(
                    'active'); });
                var msg = document.getElementById('timerMsg');
                if (msg) msg.textContent = '↻ Reset to 5 minutes';
            });
        }

        // --- Ambient Sounds ---
        var currentSound = null;
        document.querySelectorAll('.sound-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var sound = this.dataset.sound;
                if (currentSound) {
                    currentSound.pause();
                    currentSound.currentTime = 0;
                    currentSound = null;
                }
                document.querySelectorAll('.sound-btn').forEach(function(b) { b.classList.remove(
                    'active'); });
                if (sound === 'silence') {
                    showToast('🔇 Silence', 'info');
                    return;
                }
                this.classList.add('active');
                try {
                    var audio = new Audio();
                    if (sound === 'rain') {
                        audio.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
                    } else if (sound === 'forest') {
                        audio.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3';
                    }
                    audio.loop = true;
                    audio.volume = 0.15;
                    audio.play().catch(function() {});
                    currentSound = audio;
                    showToast('🌿 Playing: ' + sound, 'info');
                } catch (e) {
                    showToast('Sound playback not available', 'warning');
                }
            });
        });

        // --- Breathwork ---
        document.querySelectorAll('.start-breath').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                var type = this.dataset.type;
                startBreathPractice(type);
            });
        });

        var stopBreathBtn = document.getElementById('stopBreathBtn');
        if (stopBreathBtn) stopBreathBtn.addEventListener('click', resetBreathUI);

        // --- Techniques: Archetype Grid ---
        var profGrid = document.getElementById('professionGrid');
        if (profGrid) {
            var profHtml = '';
            professions.forEach(function(p) {
                profHtml +=
                    '<div class="prof-card" data-prof=\'' + JSON.stringify(p) + '\'>' +
                    '<i class="fas ' + p.icon + '"></i>' +
                    '<span>' + p.name + '</span>' +
                    '<div class="prof-desc">' + p.desc + '</div>' +
                    '</div>';
            });
            profGrid.innerHTML = profHtml;

            profGrid.querySelectorAll('.prof-card').forEach(function(card) {
                card.addEventListener('click', function() {
                    var prof = JSON.parse(this.dataset.prof);
                    var recs = getRecommendedTechniques(prof);
                    currentTechList = recs;
                    currentTechIdx = 0;
                    renderTechCarousel();

                    var profSel = document.getElementById('professionSelectionView');
                    var recView = document.getElementById('recommendedTechniquesView');
                    var allView = document.getElementById('allTechniquesView');
                    var archetypeBtn = document.getElementById('showArchetypeBtn');

                    if (profSel) profSel.classList.add('hidden');
                    if (recView) recView.classList.remove('hidden');
                    if (allView) allView.classList.add('hidden');
                    if (archetypeBtn) archetypeBtn.textContent = '🌀 ' + prof.name + ' · ' + recs
                        .length + ' techniques';
                });
            });
        }

        // --- Tech Carousel Controls ---
        var prevTechBtn = document.getElementById('prevTechBtn');
        var nextTechBtn = document.getElementById('nextTechBtn');
        var practiceTechBtn = document.getElementById('practiceTechBtn');
        var readFullBtn = document.getElementById('readFullChapterBtn');
        var backToProfBtn = document.getElementById('backToProfessionsBtn');

        if (prevTechBtn) {
            prevTechBtn.addEventListener('click', function() {
                if (currentTechList.length) {
                    currentTechIdx = (currentTechIdx - 1 + currentTechList.length) % currentTechList
                    .length;
                    renderTechCarousel();
                }
            });
        }
        if (nextTechBtn) {
            nextTechBtn.addEventListener('click', function() {
                if (currentTechList.length) {
                    currentTechIdx = (currentTechIdx + 1) % currentTechList.length;
                    renderTechCarousel();
                }
            });
        }
        if (practiceTechBtn) {
            practiceTechBtn.addEventListener('click', function() {
                if (currentTechList[currentTechIdx]) {
                    var t = currentTechList[currentTechIdx];
                    addPractice(t.id, t.name, 15);
                }
            });
        }
        if (readFullBtn) {
            readFullBtn.addEventListener('click', function() {
                if (currentTechList[currentTechIdx]) {
                    var t = currentTechList[currentTechIdx];
                    alert('📖 Full Chapter: ' + t.name + '\n\n' + t.sanskrit + '\n\n' + t.essence +
                        '\n\n' + t.steps + '\n\nWisdom: ' + t.wisdom + '\n\nChakra: ' + t.chakra +
                        '\nElement: ' + t.element);
                }
            });
        }
        if (backToProfBtn) {
            backToProfBtn.addEventListener('click', function() {
                var profSel = document.getElementById('professionSelectionView');
                var recView = document.getElementById('recommendedTechniquesView');
                var archetypeBtn = document.getElementById('showArchetypeBtn');
                if (profSel) profSel.classList.remove('hidden');
                if (recView) recView.classList.add('hidden');
                if (archetypeBtn) archetypeBtn.textContent = 'Archetype Selection';
            });
        }

        // --- All Techniques ---
        var showAllBtn = document.getElementById('showAllTechBtn');
        if (showAllBtn) {
            showAllBtn.addEventListener('click', function() {
                var container = document.getElementById('allTechniquesGrid');
                if (!container) return;
                container.innerHTML = '';
                for (var id in TECHNIQUES) {
                    if (TECHNIQUES.hasOwnProperty(id)) {
                        var t = TECHNIQUES[id];
                        var card = document.createElement('div');
                        card.className = 'tech-card';
                        card.innerHTML =
                            '<div class="tech-name">' + t.name + '</div>' +
                            '<div class="tech-sanskrit">' + t.sanskrit + '</div>' +
                            '<div class="tech-meta">' + t.chakra + ' · ' + t.element + '</div>' +
                            '<button class="btn-outline btn-sm practice-tech" data-id="' + t.id +
                            '" style="margin-top:0.5rem;">Practice</button>';
                        var practiceBtn = card.querySelector('.practice-tech');
                        if (practiceBtn) {
                            practiceBtn.addEventListener('click', function(e) {
                                e.stopPropagation();
                                var techId = parseInt(this.dataset.id);
                                var tech = TECHNIQUES[techId];
                                if (tech) addPractice(techId, tech.name, 15);
                            });
                        }
                        card.addEventListener('click', function() {
                            var tech = TECHNIQUES[parseInt(this.dataset.id || this.querySelector(
                                '.practice-tech')?.dataset.id)];
                            if (tech) {
                                alert('📖 ' + tech.name + '\n\n' + tech.sanskrit + '\n\n' + tech
                                    .essence + '\n\nSteps: ' + tech.steps + '\n\nChakra: ' +
                                    tech.chakra);
                            }
                        }.bind(card, t));
                        // Store id on card
                        card.dataset.id = t.id;
                        container.appendChild(card);
                    }
                }
                var profSel = document.getElementById('professionSelectionView');
                var recView = document.getElementById('recommendedTechniquesView');
                var allView = document.getElementById('allTechniquesView');
                if (profSel) profSel.classList.add('hidden');
                if (recView) recView.classList.add('hidden');
                if (allView) allView.classList.remove('hidden');
            });
        }

        var showArchetypeBtn = document.getElementById('showArchetypeBtn');
        if (showArchetypeBtn) {
            showArchetypeBtn.addEventListener('click', function() {
                var profSel = document.getElementById('professionSelectionView');
                var recView = document.getElementById('recommendedTechniquesView');
                var allView = document.getElementById('allTechniquesView');
                if (profSel) profSel.classList.remove('hidden');
                if (recView) recView.classList.add('hidden');
                if (allView) allView.classList.add('hidden');
                this.textContent = 'Archetype Selection';
            });
        }

        // --- Search Techniques ---
        var techSearch = document.getElementById('techSearchInput');
        if (techSearch) {
            techSearch.addEventListener('input', function() {
                var term = this.value.toLowerCase();
                var cards = document.querySelectorAll('#allTechniquesGrid .tech-card');
                cards.forEach(function(card) {
                    var text = card.textContent.toLowerCase();
                    card.style.display = text.includes(term) ? '' : 'none';
                });
            });
        }

        // --- Export Techniques PDF ---
        var exportTechPdfBtn = document.getElementById('exportTechniquesPDFBtn');
        if (exportTechPdfBtn) {
            exportTechPdfBtn.addEventListener('click', function() {
                if (typeof window.jspdf !== 'undefined' && window.jspdf.jsPDF) {
                    var doc = new window.jspdf.jsPDF();
                    doc.text("112 Techniques of Vigyan Bhairav Tantra", 20, 20);
                    var y = 30;
                    var techs = Object.values(TECHNIQUES);
                    techs.slice(0, 112).forEach(function(t) {
                        doc.text(t.id + '. ' + t.name + ' (' + t.sanskrit + ')', 20, y);
                        y += 6;
                        if (y > 280) { doc.addPage();
                            y = 20; }
                    });
                    doc.save('techniques_' + new Date().toISOString().slice(0, 10) + '.pdf');
                    showToast('📄 Techniques exported as PDF', 'success');
                } else {
                    showToast('PDF library loading... try again', 'warning');
                }
            });
        }

        // --- Data Export/Import ---
        var exportDataBtn = document.getElementById('exportDataBtn');
        var importDataBtn = document.getElementById('importDataBtn');
        var importFileInput = document.getElementById('importFileInput');

        if (exportDataBtn) {
            exportDataBtn.addEventListener('click', function() {
                var data = JSON.stringify({ user: user, exportDate: new Date().toISOString() }, null, 2);
                var blob = new Blob([data], { type: 'application/json' });
                var url = URL.createObjectURL(blob);
                var a = document.createElement('a');
                a.href = url;
                a.download = 'tantra_backup_' + new Date().toISOString().slice(0, 10) + '.json';
                a.click();
                URL.revokeObjectURL(url);
                showToast('💾 Data exported', 'success');
            });
        }

        if (importDataBtn && importFileInput) {
            importDataBtn.addEventListener('click', function() {
                importFileInput.click();
            });
            importFileInput.addEventListener('change', function(e) {
                var file = this.files[0];
                if (!file) return;
                var reader = new FileReader();
                reader.onload = function(ev) {
                    try {
                        var data = JSON.parse(ev.target.result);
                        if (data.user) {
                            for (var key in data.user) {
                                if (data.user.hasOwnProperty(key)) {
                                    user[key] = data.user[key];
                                }
                            }
                            saveAll();
                            showToast('📥 Data imported successfully', 'success');
                            updateUI();
                        } else {
                            showToast('Invalid backup file', 'error');
                        }
                    } catch (err) {
                        showToast('Error importing: ' + err.message, 'error');
                    }
                };
                reader.readAsText(file);
                this.value = '';
            });
        }

        // --- Scroll to Top ---
        var scrollBtn = document.getElementById('scrollTop');
        if (scrollBtn) {
            window.addEventListener('scroll', function() {
                scrollBtn.classList.toggle('show', window.scrollY > 300);
            });
            scrollBtn.addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // --- Initial Load ---
        updateHomeQuote();
        updateLibQuote();
        updateUI();
        renderAchievements();
        showView('home');

        // Periodic cosmic weather update
        setInterval(function() {
            var vib = Math.floor(60 + Math.random() * 35);
            var vibEl = document.getElementById('vibrationLevel');
            if (vibEl) vibEl.textContent = vib + '%';
        }, 30000);

        // Greeting based on time
        var hour = new Date().getHours();
        var greeting = '✨ Seeker';
        if (hour < 12) greeting = '🌅 Good morning, Seeker';
        else if (hour < 17) greeting = '☀️ Good afternoon, Seeker';
        else greeting = '🌙 Good evening, Seeker';
        var greetEl = document.getElementById('greetingUser');
        if (greetEl) greetEl.textContent = greeting;

        console.log('🧘 Vigyan Bhairav · Peaceful Meditation Platform loaded');
        console.log('📊 ' + user.totalPractices + ' practices · ' + user.totalMinutes + ' minutes · ' + user
            .streak + ' day streak');
    }

    // ============================================================
    // 16. DOM READY
    // ============================================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
