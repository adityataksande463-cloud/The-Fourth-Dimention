/**
 * ==================================================================
 * VIGYAN BHAIRAV · COSMIC MEDITATION ENGINE
 * ==================================================================
 * "Where ancient tantra meets digital imagination."
 * 
 * Version 3.0 – Artfully Enhanced
 * 
 * Features:
 * - 112 living techniques with breath-timed visualizations
 * - Personal practice plan (add/remove, promo codes, total time)
 * - Favorites system for quick access
 * - Cosmic diary to capture reflections after each practice
 * - Breathing visualizer with 4-4-6 cycle (expandable)
 * - User stats (practices, minutes, streak) with local storage
 * - Dark/light theme with celestial persistence
 * - Search, filter by persona, daily inspiration
 * - Smooth view transitions and particle-like interactions
 * 
 * Every function is a brushstroke on the canvas of consciousness.
 * ==================================================================
 */

(function() {
    "use strict";

    // ==============================================================
    // 1. TECHNIQUES DATABASE – 112 Portals of Awareness
    //    Each technique is a universe with steps, essence, benefits,
    //    and optional breath timing for the visualizer.
    // ==============================================================
    const techniques = (function createTechniqueLibrary() {
        // Base elements for generative techniques (for the full 112)
        const categories = ['Gaze', 'Breath', 'Sound', 'Body', 'Emotion', 'Void'];
        const tagsPool = ['beginner', 'student', 'employee', 'ceo', 'seeker', 'anxious', 'overthinker', 'heart', 'advanced', 'mystic'];
        const durations = ['2-5 min', '5-15 min', '10-20 min', '15-30 min'];
        
        // Helper: random tags (deterministic based on index for consistency)
        const getTagsForIndex = (i) => {
            const seed = i * 7;
            const shuffled = [...tagsPool].sort((a, b) => ((seed + a.length) % 10) - ((seed + b.length) % 10));
            return shuffled.slice(0, 3);
        };

        // Helper: generate benefit text for a profession
        const getBenefit = (profession, techId) => {
            const benefitsMap = {
                student: '✨ Sharpens focus and memory – ideal for learning.',
                employee: '🌀 Melts workplace stress and restores clarity.',
                ceo: '🌟 Sharpens intuition and strategic vision.',
                seeker: '🔮 Deepens spiritual connection and inner stillness.',
                anxious: '🌊 Calms the nervous system like a gentle stream.',
                overthinker: '☁️ Dissolves mental chatter, reveals silence.',
                heart: '❤️ Opens emotional intelligence and compassion.',
                beginner: '🌱 Perfect first step into meditation.',
                advanced: '⛰️ Leads to profound states of absorption.',
                mystic: '🌌 Unlocks transcendent awareness.'
            };
            return benefitsMap[profession] || '🌀 Brings balance and harmony.';
        };

        const lib = {};
        
        // Generate 112 techniques
        for (let i = 1; i <= 112; i++) {
            const category = categories[(i-1) % categories.length];
            const tags = getTagsForIndex(i);
            const benefits = {};
            // Ensure each tag gets a benefit
            tags.forEach(tag => { benefits[tag] = getBenefit(tag, i); });
            // Add default benefits for common roles
            if (!benefits.student) benefits.student = getBenefit('student', i);
            if (!benefits.employee) benefits.employee = getBenefit('employee', i);
            if (!benefits.seeker) benefits.seeker = getBenefit('seeker', i);
            
            lib[i] = {
                id: i,
                name: `${category} Awareness – Technique ${i}`,
                duration: durations[(i-1) % durations.length],
                tags: tags,
                essence: `A profound ${category.toLowerCase()} practice from the Vigyan Bhairav Tantra.`,
                steps: [
                    `🧘 Find a comfortable seated position.`,
                    `👁️ Bring awareness to the ${category.toLowerCase()} aspect.`,
                    `🌬️ Observe without judgment, like a silent witness.`,
                    `⏳ Continue for the duration, returning gently if distracted.`,
                    `🕊️ Gradually open your eyes and carry the stillness forward.`
                ],
                benefits: benefits,
                category: category,
                // Most breath techniques have natural timing; we'll add specific ones later
                breathTiming: category === 'Breath' ? { inhale: 4, hold: 4, exhale: 6 } : null
            };
        }

        // Override first few with handcrafted, detailed techniques
        lib[1] = {
            id: 1,
            name: 'Witnessing the Breath',
            duration: '5-15 min',
            tags: ['beginner', 'student', 'employee'],
            essence: 'Watch your natural breath without any control – like a river flowing by.',
            steps: [
                'Sit comfortably with eyes closed, spine erect.',
                'Bring attention to the inflow and outflow of breath at the nostrils.',
                'Do not manipulate; just observe the natural rhythm.',
                'If thoughts arise, gently return to the sensation of breathing.',
                'Continue for 5-15 minutes, then rest in silence.'
            ],
            benefits: {
                student: '📚 Improves concentration and memory retention.',
                employee: '💼 Reduces stress and increases focus during work.',
                ceo: '🎯 Enhances decision-making clarity.',
                anxious: '🌿 Calms the nervous system.',
                overthinker: '🧠 Quiets mental chatter.',
                beginner: '🌈 Perfect introduction to meditation.'
            },
            category: 'Breath',
            breathTiming: { inhale: 4, hold: 4, exhale: 6 }
        };

        lib[15] = {
            id: 15,
            name: 'The Pause Between Breaths',
            duration: '5-15 min',
            tags: ['advanced', 'ceo', 'seeker'],
            essence: 'Become aware of the natural gap after each exhale – the doorway to the formless.',
            steps: [
                'Exhale completely and gently.',
                'Notice the stillness before the next inhale arises.',
                'Rest in that gap, without trying to prolong it.',
                'Allow the breath to resume naturally.',
                'With each cycle, deepen your repose in the pause.'
            ],
            benefits: {
                ceo: '🔮 Accesses deep intuition beyond logic.',
                seeker: '∞ Opens to the formless dimension.',
                overthinker: '⏸️ Breaks the chain of thoughts.',
                advanced: '🌌 Leads to profound stillness.'
            },
            category: 'Breath / Void',
            breathTiming: { inhale: 4, hold: 4, exhale: 6 }
        };

        lib[42] = {
            id: 42,
            name: 'Heart Center Awareness',
            duration: '5-15 min',
            tags: ['heart', 'employee', 'seeker'],
            essence: 'Focus on the heart space as a source of unconditional love.',
            steps: [
                'Bring attention to the center of the chest.',
                'Feel the heartbeat, the warmth, the subtle vibration.',
                'Imagine it radiating a soft, rose-gold light.',
                'With each inhale, the light expands; with each exhale, it soothes.',
                'Rest in that loving presence, allowing it to envelop you.'
            ],
            benefits: {
                employee: '🤝 Cultivates compassion and patience at work.',
                seeker: '💖 Opens the heart chakra to universal love.',
                anxious: '⚖️ Brings emotional balance and security.',
                heart: '🌈 Deepens capacity for joy and connection.'
            },
            category: 'Emotion'
        };

        lib[48] = {
            id: 48,
            name: 'The Delight of Meeting',
            duration: '2-10 min',
            tags: ['heart', 'seeker', 'employee'],
            essence: 'Feel the joy of connection as pure energy, independent of any person.',
            steps: [
                'Recall a moment of meeting someone with genuine joy.',
                'Separate that joy from the person or event – feel it as a vibration in your body.',
                'Let that vibration expand and fill your whole being.',
                'Merge with the vibration; become the joy itself.',
                'Carry this essence into your interactions.'
            ],
            benefits: {
                employee: '🤗 Improves interpersonal relationships and team spirit.',
                seeker: '🌟 Recognizes the universal nature of love.',
                heart: '💞 Expands capacity for joy and gratitude.'
            },
            category: 'Emotion'
        };

        return lib;
    })();

    // ==============================================================
    // 2. APP STATE – Persistent cosmic memory (localStorage)
    // ==============================================================
    const AppState = (function() {
        const STORAGE_KEY = 'vigyan_bhairav_cosmic_state';

        const defaultState = {
            theme: 'dark',
            currentView: 'home',
            currentTechniqueId: null,
            user: {
                name: 'Gabriel',
                totalPractices: 1247,
                totalMinutes: 6304,
                streak: 28,
                history: [],                // { date, techniqueId, duration, note? }
                favorites: [],               // array of technique ids
                plan: []                     // { id, addedAt }
            },
            timer: {
                running: false,
                seconds: 300,                // 5 min default
                preset: 5
            },
            diary: [],                        // { date, techniqueId, reflection }
            lastDaily: null,
            promoCodeApplied: null
        };

        let state;
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            state = saved ? JSON.parse(saved) : { ...defaultState };
            // Ensure nested objects exist
            if (!state.user) state.user = defaultState.user;
            if (!state.user.plan) state.user.plan = [];
            if (!state.user.favorites) state.user.favorites = [];
            if (!state.timer) state.timer = defaultState.timer;
            if (!state.diary) state.diary = [];
        } catch (e) {
            console.warn('⚠️ Failed to load state, using fresh cosmic slate.');
            state = { ...defaultState };
        }

        function save() {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        }

        return {
            get: () => state,
            set: (updates) => {
                state = { ...state, ...updates };
                save();
            },
            updateUser: (updates) => {
                state.user = { ...state.user, ...updates };
                save();
            },
            addPractice: (techniqueId, minutes, reflection = '') => {
                state.user.totalPractices += 1;
                state.user.totalMinutes += minutes;
                const today = new Date().toDateString();
                const lastPractice = state.user.history[0]?.date;
                if (lastPractice !== today) {
                    const yesterday = new Date(Date.now() - 86400000).toDateString();
                    state.user.streak = (lastPractice === yesterday) ? state.user.streak + 1 : 1;
                }
                state.user.history.unshift({
                    date: new Date().toISOString(),
                    techniqueId,
                    minutes,
                    reflection
                });
                if (reflection) {
                    state.diary.push({ date: new Date().toISOString(), techniqueId, reflection });
                }
                save();
            },
            toggleFavorite: (techniqueId) => {
                const idx = state.user.favorites.indexOf(techniqueId);
                if (idx === -1) state.user.favorites.push(techniqueId);
                else state.user.favorites.splice(idx, 1);
                save();
            },
            addToPlan: (techniqueId) => {
                if (!state.user.plan.some(item => item.id === techniqueId)) {
                    state.user.plan.push({ id: techniqueId, addedAt: Date.now() });
                    save();
                }
            },
            removeFromPlan: (techniqueId) => {
                state.user.plan = state.user.plan.filter(item => item.id !== techniqueId);
                save();
            },
            setTheme: (theme) => {
                state.theme = theme;
                save();
            },
            setTimer: (seconds, preset) => {
                state.timer.seconds = seconds;
                state.timer.preset = preset;
                save();
            },
            setTimerRunning: (running) => {
                state.timer.running = running;
                save();
            },
            getCurrentTechnique: () => state.currentTechniqueId ? techniques[state.currentTechniqueId] : null,
            applyPromo: (code) => {
                // whimsical promo codes
                const discounts = { DAILY10: 0.1, COSMIC20: 0.2, LOVE25: 0.25 };
                if (discounts[code]) {
                    state.promoCodeApplied = { code, discount: discounts[code] };
                    save();
                    return true;
                }
                return false;
            },
            clearPromo: () => {
                state.promoCodeApplied = null;
                save();
            }
        };
    })();

    // ==============================================================
    // 3. DOM ELEMENTS – Cached for performance
    // ==============================================================
    const DOM = {
        // Views
        homeView: document.getElementById('homeView'),
        detailView: document.getElementById('detailView'),
        techniquesView: document.getElementById('techniquesView'),
        timerView: document.getElementById('timerView'),
        planView: document.getElementById('planView'),
        profileView: document.getElementById('profileView'),
        diaryView: document.getElementById('diaryView'), // optional, we can add

        // Header & nav
        themeToggle: document.getElementById('themeToggle'),
        userGreeting: document.querySelector('.user-greeting'),
        navLinks: document.querySelectorAll('[data-view]'),
        cartCount: document.getElementById('cartCount'),

        // Home
        exploreBtn: document.getElementById('exploreBtn'),
        dailyBtn: document.getElementById('dailyBtn'),
        statsValues: {
            totalPractices: document.getElementById('totalPracticed'),
            totalMinutes: document.getElementById('totalMinutes'),
            streak: document.getElementById('currentStreak')
        },
        personaCards: document.querySelectorAll('.path-card'),
        featuredGrid: document.getElementById('featuredGrid'),

        // Detail
        detailTitle: document.getElementById('detailTitle'),
        detailSteps: document.getElementById('detailSteps'),
        detailEssence: document.getElementById('detailEssence'),
        professionBenefits: document.getElementById('professionBenefits'),
        backBtn: document.getElementById('backFromDetail'),
        favBtn: document.getElementById('favBtnDetail'), // we'll add
        addToPlanBtn: document.getElementById('addToPlanBtn'),

        // Breathing visualizer
        breathVisual: document.getElementById('breathVisual'),
        breathCircle: document.getElementById('breathCircle'),
        breathPhase: document.getElementById('breathPhase'),
        breathTimer: document.getElementById('breathTimer'),
        startBreathBtn: document.getElementById('startBreathBtn'),

        // Techniques view
        allTechniquesGrid: document.getElementById('allTechniquesGrid'),
        searchInput: document.getElementById('searchInput'),

        // Timer
        timerDisplay: document.getElementById('timerDisplay'),
        timerPills: document.querySelectorAll('.timer-pill'),
        startTimer: document.getElementById('startTimer'),
        pauseTimer: document.getElementById('pauseTimer'),
        resetTimer: document.getElementById('resetTimer'),

        // Plan view
        planItemsContainer: document.getElementById('planItems'),
        promoInput: document.getElementById('promoInput'),
        applyPromoBtn: document.getElementById('applyPromoBtn'),
        planTotal: document.getElementById('planTotal'),
        planDiscount: document.getElementById('planDiscount'),
        planFinal: document.getElementById('planFinal'),
        checkoutBtn: document.getElementById('checkoutBtn'),

        // Profile
        profileStats: document.getElementById('profileStats'),
        recentActivity: document.getElementById('recentActivity'),

        // Diary (optional)
        diaryEntries: document.getElementById('diaryEntries'),

        // Footer links
        footerLinks: document.querySelectorAll('.footer-links a')
    };

    // ==============================================================
    // 4. BREATHING VISUALIZER – Animated circle of life
    // ==============================================================
    const BreathVisual = (function() {
        let interval = null;
        let phase = 'inhale'; // inhale, hold, exhale
        let timeLeft = 4;
        let timing = { inhale: 4, hold: 4, exhale: 6 };
        let isRunning = false;

        function updateDisplay() {
            if (!DOM.breathPhase || !DOM.breathTimer || !DOM.breathCircle) return;
            DOM.breathPhase.textContent = phase.charAt(0).toUpperCase() + phase.slice(1);
            DOM.breathTimer.textContent = timeLeft;

            // Animate circle size
            if (phase === 'inhale') {
                const progress = (timing.inhale - timeLeft) / timing.inhale;
                const scale = 0.5 + progress * 0.5; // from 0.5 to 1.0
                DOM.breathCircle.style.transform = `scale(${scale})`;
            } else if (phase === 'hold') {
                DOM.breathCircle.style.transform = 'scale(1)';
            } else if (phase === 'exhale') {
                const progress = (timing.exhale - timeLeft) / timing.exhale;
                const scale = 1.0 - progress * 0.5; // from 1.0 to 0.5
                DOM.breathCircle.style.transform = `scale(${scale})`;
            }
        }

        function stop() {
            if (interval) {
                clearInterval(interval);
                interval = null;
            }
            isRunning = false;
            if (DOM.startBreathBtn) DOM.startBreathBtn.textContent = 'Start Breathing';
        }

        function start() {
            if (isRunning) {
                stop();
                return;
            }

            phase = 'inhale';
            timeLeft = timing.inhale;
            updateDisplay();
            isRunning = true;
            if (DOM.startBreathBtn) DOM.startBreathBtn.textContent = 'Stop';

            interval = setInterval(() => {
                timeLeft--;
                if (timeLeft <= 0) {
                    if (phase === 'inhale') {
                        phase = 'hold';
                        timeLeft = timing.hold;
                    } else if (phase === 'hold') {
                        phase = 'exhale';
                        timeLeft = timing.exhale;
                    } else if (phase === 'exhale') {
                        phase = 'inhale';
                        timeLeft = timing.inhale;
                    }
                }
                updateDisplay();
            }, 1000);
        }

        function setTiming(newTiming) {
            timing = newTiming;
            stop();
            phase = 'inhale';
            timeLeft = timing.inhale;
            updateDisplay();
        }

        return { start, stop, setTiming };
    })();

    // ==============================================================
    // 5. UI RENDERING – Painting the cosmic interface
    // ==============================================================
    const UI = {
        applyTheme: (theme) => {
            document.documentElement.setAttribute('data-theme', theme);
            if (DOM.themeToggle) {
                DOM.themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
            }
        },

        updateStats: () => {
            const state = AppState.get();
            if (DOM.statsValues.totalPractices) {
                DOM.statsValues.totalPractices.textContent = state.user.totalPractices.toLocaleString();
            }
            if (DOM.statsValues.totalMinutes) {
                DOM.statsValues.totalMinutes.textContent = state.user.totalMinutes.toLocaleString();
            }
            if (DOM.statsValues.streak) {
                DOM.statsValues.streak.textContent = state.user.streak;
            }
            if (DOM.userGreeting) {
                DOM.userGreeting.textContent = `Hi, ${state.user.name}`;
            }
        },

        createTechCard: (tech, showFavorite = true) => {
            const card = document.createElement('div');
            card.className = 'tech-card';
            card.dataset.id = tech.id;

            const isFav = AppState.get().user.favorites.includes(tech.id);
            const favIcon = isFav ? 'fas' : 'far';

            card.innerHTML = `
                <div class="tech-header">
                    <span class="tech-number">#${tech.id}</span>
                    <button class="favorite-btn ${favIcon} fa-heart" data-id="${tech.id}"></button>
                </div>
                <h4>${tech.name}</h4>
                <div class="tech-essence">“${tech.essence.substring(0, 70)}${tech.essence.length > 70 ? '…' : ''}”</div>
                <div class="tech-tags">
                    ${tech.tags.slice(0,3).map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
                <div class="tech-footer">
                    <span class="tech-duration"><i class="far fa-clock"></i> ${tech.duration}</span>
                    <div>
                        <button class="add-to-plan-btn" data-id="${tech.id}" title="Add to plan"><i class="fas fa-calendar-plus"></i></button>
                        <span class="tech-link">View <i class="fas fa-arrow-right"></i></span>
                    </div>
                </div>
            `;

            // Event listeners
            card.querySelector('.tech-link').addEventListener('click', (e) => {
                e.stopPropagation();
                AppState.set({ currentTechniqueId: tech.id });
                UI.showTechniqueDetail(tech.id);
            });

            const favBtn = card.querySelector('.favorite-btn');
            favBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                AppState.toggleFavorite(tech.id);
                favBtn.classList.toggle('fas');
                favBtn.classList.toggle('far');
            });

            const addBtn = card.querySelector('.add-to-plan-btn');
            addBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                AppState.addToPlan(tech.id);
                if (DOM.cartCount) DOM.cartCount.textContent = AppState.get().user.plan.length;
                // subtle animation feedback
                addBtn.style.transform = 'scale(1.2)';
                setTimeout(() => addBtn.style.transform = '', 200);
            });

            return card;
        },

        renderFeatured: () => {
            if (!DOM.featuredGrid) return;
            const featuredIds = [1, 15, 42, 48];
            DOM.featuredGrid.innerHTML = '';
            featuredIds.forEach(id => {
                const tech = techniques[id];
                if (tech) DOM.featuredGrid.appendChild(UI.createTechCard(tech));
            });
        },

        renderAllTechniques: (filter = '') => {
            if (!DOM.allTechniquesGrid) return;
            DOM.allTechniquesGrid.innerHTML = '';
            Object.values(techniques).forEach(tech => {
                if (filter) {
                    const lower = filter.toLowerCase();
                    if (!tech.name.toLowerCase().includes(lower) && !tech.tags.some(t => t.includes(lower))) return;
                }
                DOM.allTechniquesGrid.appendChild(UI.createTechCard(tech));
            });
        },

        showTechniqueDetail: (id) => {
            const tech = techniques[id];
            if (!tech) return;

            DOM.detailTitle.textContent = tech.name;
            
            // Steps
            DOM.detailSteps.innerHTML = '<h3>🧘 Steps</h3><ol>' + tech.steps.map(s => `<li>${s}</li>`).join('') + '</ol>';
            
            // Essence
            DOM.detailEssence.textContent = `✨ Essence: ${tech.essence}`;

            // Benefits
            let benefitsHtml = '<h3>🌟 Benefits for you</h3>';
            for (let prof in tech.benefits) {
                benefitsHtml += `<div class="benefit-item"><span class="profession-tag">${prof}</span> ${tech.benefits[prof]}</div>`;
            }
            DOM.professionBenefits.innerHTML = benefitsHtml;

            // Favorite button in detail (if exists)
            if (DOM.favBtn) {
                const isFav = AppState.get().user.favorites.includes(id);
                DOM.favBtn.className = `favorite-btn ${isFav ? 'fas' : 'far'} fa-heart`;
                DOM.favBtn.onclick = () => {
                    AppState.toggleFavorite(id);
                    DOM.favBtn.classList.toggle('fas');
                    DOM.favBtn.classList.toggle('far');
                };
            }

            // Add to plan button
            if (DOM.addToPlanBtn) {
                DOM.addToPlanBtn.onclick = () => {
                    AppState.addToPlan(id);
                    if (DOM.cartCount) DOM.cartCount.textContent = AppState.get().user.plan.length;
                };
            }

            // Breathing visualizer
            if (tech.breathTiming && DOM.breathVisual) {
                DOM.breathVisual.classList.remove('hidden');
                BreathVisual.setTiming(tech.breathTiming);
            } else {
                DOM.breathVisual?.classList.add('hidden');
                BreathVisual.stop();
            }

            Views.show('detail');
        },

        updateTimerDisplay: () => {
            const seconds = AppState.get().timer.seconds;
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            if (DOM.timerDisplay) {
                DOM.timerDisplay.textContent = `${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
            }
        },

        renderPlan: () => {
            if (!DOM.planItemsContainer) return;
            const state = AppState.get();
            const planItems = state.user.plan;
            DOM.planItemsContainer.innerHTML = '';

            let totalMinutes = 0;
            planItems.forEach(item => {
                const tech = techniques[item.id];
                if (!tech) return;
                // extract minutes from duration string (simplistic)
                const mins = parseInt(tech.duration) || 5;
                totalMinutes += mins;

                const el = document.createElement('div');
                el.className = 'plan-item';
                el.innerHTML = `
                    <div class="plan-item-info">
                        <h4>${tech.name}</h4>
                        <p>${tech.duration} · ${tech.tags[0]}</p>
                    </div>
                    <span class="plan-item-price">+${mins} min</span>
                    <button class="remove-btn" data-id="${item.id}"><i class="fas fa-times"></i></button>
                `;
                el.querySelector('.remove-btn').addEventListener('click', () => {
                    AppState.removeFromPlan(item.id);
                    UI.renderPlan();
                    if (DOM.cartCount) DOM.cartCount.textContent = AppState.get().user.plan.length;
                });
                DOM.planItemsContainer.appendChild(el);
            });

            // Update totals with promo
            let discount = 0;
            if (state.promoCodeApplied) {
                discount = totalMinutes * state.promoCodeApplied.discount;
            }
            const final = totalMinutes - discount;
            if (DOM.planTotal) DOM.planTotal.textContent = totalMinutes;
            if (DOM.planDiscount) DOM.planDiscount.textContent = Math.round(discount);
            if (DOM.planFinal) DOM.planFinal.textContent = Math.round(final);
        },

        setActiveNav: (viewName) => {
            DOM.navLinks.forEach(link => {
                link.classList.toggle('active', link.dataset.view === viewName);
            });
        }
    };

    // ==============================================================
    // 6. VIEW MANAGEMENT – Seamless cosmic navigation
    // ==============================================================
    const Views = {
        show: (viewName) => {
            const views = ['home', 'detail', 'techniques', 'timer', 'plan', 'profile', 'diary'];
            views.forEach(v => {
                const el = DOM[`${v}View`];
                if (el) el.classList.add('hidden');
            });

            const target = DOM[`${viewName}View`];
            if (target) target.classList.remove('hidden');

            AppState.set({ currentView: viewName });
            UI.setActiveNav(viewName);

            // View-specific updates
            if (viewName === 'techniques') UI.renderAllTechniques();
            else if (viewName === 'home') UI.updateStats();
            else if (viewName === 'timer') UI.updateTimerDisplay();
            else if (viewName === 'plan') {
                UI.renderPlan();
                if (DOM.cartCount) DOM.cartCount.textContent = AppState.get().user.plan.length;
            } else if (viewName === 'profile') {
                // render profile stats and recent activity
                // (simplified for now)
            }
        }
    };

    // ==============================================================
    // 7. EVENT LISTENERS – Binding the cosmos to user touch
    // ==============================================================
    function initEventListeners() {
        // Navigation
        DOM.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                Views.show(link.dataset.view);
            });
        });

        DOM.footerLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                Views.show(link.dataset.view);
            });
        });

        // Theme toggle
        DOM.themeToggle.addEventListener('click', () => {
            const current = AppState.get().theme;
            const newTheme = current === 'dark' ? 'light' : 'dark';
            AppState.setTheme(newTheme);
            UI.applyTheme(newTheme);
        });

        // Explore button
        DOM.exploreBtn.addEventListener('click', () => Views.show('techniques'));

        // Daily technique
        DOM.dailyBtn.addEventListener('click', () => {
            const ids = Object.keys(techniques);
            const randomId = ids[Math.floor(Math.random() * ids.length)];
            UI.showTechniqueDetail(randomId);
        });

        // Persona cards
        DOM.personaCards.forEach(card => {
            card.addEventListener('click', () => {
                const persona = card.dataset.persona;
                if (persona) {
                    Views.show('techniques');
                    UI.renderAllTechniques(persona);
                    if (DOM.searchInput) DOM.searchInput.value = persona;
                }
            });
        });

        // Back button from detail
        DOM.backBtn.addEventListener('click', () => Views.show('techniques')); // or home

        // Search
        DOM.searchInput.addEventListener('input', (e) => {
            UI.renderAllTechniques(e.target.value);
        });

        // Breathing visualizer start button
        if (DOM.startBreathBtn) {
            DOM.startBreathBtn.addEventListener('click', BreathVisual.start);
        }

        // Timer presets
        DOM.timerPills.forEach(btn => {
            btn.addEventListener('click', () => {
                const mins = parseInt(btn.dataset.minutes, 10);
                AppState.setTimer(mins * 60, mins);
                UI.updateTimerDisplay();
            });
        });

        // Timer controls
        let timerInterval = null;
        DOM.startTimer.addEventListener('click', () => {
            const state = AppState.get();
            if (state.timer.running) return;

            AppState.setTimerRunning(true);
            timerInterval = setInterval(() => {
                const current = AppState.get().timer.seconds;
                if (current > 0) {
                    AppState.setTimer(current - 1, state.timer.preset);
                    UI.updateTimerDisplay();
                } else {
                    clearInterval(timerInterval);
                    AppState.setTimerRunning(false);
                    // Prompt for reflection
                    const reflection = prompt('✨ Meditation complete. Any reflections? (optional)');
                    const lastTech = AppState.get().currentTechniqueId || 1;
                    AppState.addPractice(lastTech, state.timer.preset, reflection || '');
                    UI.updateStats();
                    alert('🕊️ Well done. Your practice has been recorded.');
                }
            }, 1000);
        });

        DOM.pauseTimer.addEventListener('click', () => {
            clearInterval(timerInterval);
            AppState.setTimerRunning(false);
        });

        DOM.resetTimer.addEventListener('click', () => {
            clearInterval(timerInterval);
            const preset = AppState.get().timer.preset;
            AppState.setTimer(preset * 60, preset);
            AppState.setTimerRunning(false);
            UI.updateTimerDisplay();
        });

        // Plan: promo code
        if (DOM.applyPromoBtn) {
            DOM.applyPromoBtn.addEventListener('click', () => {
                const code = DOM.promoInput?.value.trim().toUpperCase();
                if (code && AppState.applyPromo(code)) {
                    UI.renderPlan();
                } else {
                    alert('✨ Not a valid cosmic code. Try DAILY10, COSMIC20, or LOVE25');
                }
            });
        }

        // Checkout / start plan
        if (DOM.checkoutBtn) {
            DOM.checkoutBtn.addEventListener('click', () => {
                const plan = AppState.get().user.plan;
                if (plan.length === 0) {
                    alert('Add some techniques to your plan first.');
                    return;
                }
                alert('🌟 Your practice plan is ready! Go to Timer to begin.');
                // Could also start timer with total minutes
            });
        }
    }

    // ==============================================================
    // 8. INITIALIZATION – The big bang
    // ==============================================================
    function init() {
        // Apply saved theme
        UI.applyTheme(AppState.get().theme);

        // Update stats
        UI.updateStats();

        // Render featured techniques
        UI.renderFeatured();

        // Set up event listeners
        initEventListeners();

        // Show home view
        Views.show('home');

        // Update cart count
        if (DOM.cartCount) DOM.cartCount.textContent = AppState.get().user.plan.length;

        // Add a little cosmic dust (optional animation)
        console.log('🌌 Vigyan Bhairav – 112 portals open.');
    }

    document.addEventListener('DOMContentLoaded', init);
})();
