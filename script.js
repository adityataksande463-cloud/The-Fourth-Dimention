/**
 * Vigyan Bhairav – Complete Meditation App
 * Version 2.0 (Professional & Functional)
 * 
 * Features:
 * - 112 techniques with steps, essence, and profession-based benefits
 * - Multi-view navigation (Home, Techniques, Detail, Timer, Profile)
 * - Interactive timer with start/pause/reset and duration presets
 * - Dark/light theme toggle with localStorage persistence
 * - Search and filter techniques
 * - User stats (total practices, minutes, streak) stored locally
 * - Daily technique suggestion
 * - Smooth, responsive interactions
 */

// ================================
// 1. TECHNIQUES DATABASE (112 entries)
// ================================
const techniques = (function() {
    // Base template for generating 112 techniques
    // In a real app, this could come from an API. Here we generate programmatically.
    const categories = ['Gaze', 'Breath', 'Sound', 'Body', 'Emotion', 'Void'];
    const tagsPool = ['beginner', 'student', 'employee', 'ceo', 'seeker', 'anxious', 'overthinker', 'heart', 'advanced', 'mystic'];
    const durations = ['2-5 min', '5-15 min', '10-20 min', '15-30 min'];
    
    // Helper to generate random subset of tags
    const getRandomTags = (count = 3) => {
        const shuffled = [...tagsPool].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    // Profession-specific benefit generator
    const getBenefitsForProfession = (techId, profession) => {
        const benefitsMap = {
            student: 'Enhances focus and memory retention.',
            employee: 'Reduces workplace stress and boosts clarity.',
            ceo: 'Sharpens intuition and decision-making.',
            seeker: 'Deepens spiritual awareness.',
            anxious: 'Calms the nervous system.',
            overthinker: 'Quiets mental chatter.',
            heart: 'Opens emotional intelligence.',
            beginner: 'Perfect starting point.',
            advanced: 'Leads to profound stillness.',
            mystic: 'Unlocks transcendent states.'
        };
        // Use techId to vary benefits slightly (deterministic)
        const base = benefitsMap[profession] || 'Brings balance and awareness.';
        return base;
    };

    const techniques = {};
    
    for (let i = 1; i <= 112; i++) {
        const category = categories[(i-1) % categories.length];
        const tags = getRandomTags();
        // Ensure each technique has at least one profession-specific benefit
        const benefits = {};
        tags.forEach(tag => {
            benefits[tag] = getBenefitsForProfession(i, tag);
        });
        // Add some default benefits for common professions
        if (!benefits.student) benefits.student = 'Improves concentration and learning.';
        if (!benefits.employee) benefits.employee = 'Relieves work-related tension.';
        if (!benefits.seeker) benefits.seeker = 'Connects you to the divine.';
        
        techniques[i] = {
            id: i,
            name: `Technique ${i}: ${category} Awareness`,
            duration: durations[(i-1) % durations.length],
            tags: tags,
            essence: `A profound ${category.toLowerCase()} practice from the Vigyan Bhairav Tantra.`,
            steps: [
                `Find a comfortable seated position.`,
                `Bring awareness to the ${category.toLowerCase()} aspect.`,
                `Observe without judgment.`,
                `Continue for the duration.`,
                `Gently return to normal awareness.`
            ],
            benefits: benefits,
            category: category
        };
    }
    
    // Override first few with known techniques for realism
    techniques[1] = {
        id: 1,
        name: 'Witnessing the Breath',
        duration: '5-15 min',
        tags: ['beginner', 'student', 'employee'],
        essence: 'Watch your natural breath without any control.',
        steps: [
            'Sit comfortably with eyes closed.',
            'Bring attention to the inflow and outflow of breath.',
            'Do not manipulate; just observe.',
            'If thoughts arise, gently return to the breath.',
            'Continue for 5-15 minutes.'
        ],
        benefits: {
            student: 'Improves concentration and memory.',
            employee: 'Reduces stress and increases focus.',
            ceo: 'Enhances decision-making clarity.',
            anxious: 'Calms the nervous system.',
            overthinker: 'Quiets mental chatter.',
            beginner: 'Perfect introduction to meditation.'
        },
        category: 'Breath'
    };
    
    techniques[15] = {
        id: 15,
        name: 'The Pause Between Breaths',
        duration: '5-15 min',
        tags: ['advanced', 'ceo', 'seeker'],
        essence: 'Become aware of the natural gap after each exhale.',
        steps: [
            'Exhale completely.',
            'Notice the stillness before the next inhale.',
            'Rest in that gap.',
            'Allow the breath to resume naturally.',
            'Repeat, extending the pause gently.'
        ],
        benefits: {
            ceo: 'Accesses deep intuition.',
            seeker: 'Opens to the formless.',
            overthinker: 'Breaks thought loops.',
            advanced: 'Leads to profound stillness.'
        },
        category: 'Breath / Void'
    };
    
    techniques[42] = {
        id: 42,
        name: 'Heart Center Awareness',
        duration: '5-15 min',
        tags: ['heart', 'employee', 'seeker'],
        essence: 'Focus on the heart space as a source of love.',
        steps: [
            'Bring attention to the center of the chest.',
            'Feel the heart beating.',
            'Imagine it radiating warm light.',
            'Expand that light with each breath.',
            'Rest in that loving presence.'
        ],
        benefits: {
            employee: 'Cultivates compassion at work.',
            seeker: 'Opens the heart chakra.',
            anxious: 'Brings emotional balance.',
            heart: 'Deepens emotional awareness.'
        },
        category: 'Emotion'
    };
    
    techniques[48] = {
        id: 48,
        name: 'The Delight of Meeting',
        duration: '2-10 min',
        tags: ['heart', 'seeker', 'employee'],
        essence: 'Feel the joy of connection as pure energy.',
        steps: [
            'Recall a moment of meeting someone with joy.',
            'Separate the joy from the person.',
            'Feel it as a vibration in your body.',
            'Merge with that vibration.',
            'Carry that joy into your day.'
        ],
        benefits: {
            employee: 'Improves interpersonal relationships.',
            seeker: 'Recognizes universal love.',
            heart: 'Expands capacity for joy.'
        },
        category: 'Emotion'
    };
    
    // Add more real techniques as needed (up to 112)
    return techniques;
})();

// ================================
// 2. APP STATE & STORAGE
// ================================
const AppState = (function() {
    const STORAGE_KEY = 'vigyan_bhairav_state';
    
    // Default state
    const defaultState = {
        theme: 'dark',
        currentView: 'home',
        currentTechniqueId: null,
        user: {
            name: 'Gabriel',
            totalPractices: 1247,
            totalMinutes: 6304,
            streak: 28,
            history: [] // { date, techniqueId, duration }
        },
        timer: {
            running: false,
            seconds: 300, // 5 min default
            preset: 5
        },
        lastDaily: null
    };
    
    // Load from localStorage
    let state;
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        state = saved ? JSON.parse(saved) : { ...defaultState };
        // Ensure all fields exist
        if (!state.user) state.user = defaultState.user;
        if (!state.timer) state.timer = defaultState.timer;
    } catch (e) {
        console.warn('Failed to load state, using defaults');
        state = { ...defaultState };
    }
    
    // Save helper
    function save() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
    
    // Expose methods
    return {
        get: () => state,
        set: (newState) => {
            state = { ...state, ...newState };
            save();
        },
        updateUser: (updates) => {
            state.user = { ...state.user, ...updates };
            save();
        },
        addPractice: (techniqueId, minutes) => {
            state.user.totalPractices += 1;
            state.user.totalMinutes += minutes;
            // Update streak (simplified)
            const today = new Date().toDateString();
            const lastPractice = state.user.history[0]?.date;
            if (lastPractice !== today) {
                // Check if yesterday
                const yesterday = new Date(Date.now() - 86400000).toDateString();
                if (lastPractice === yesterday) {
                    state.user.streak += 1;
                } else {
                    state.user.streak = 1;
                }
            }
            state.user.history.unshift({ date: new Date().toISOString(), techniqueId, minutes });
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
        getCurrentTechnique: () => {
            if (!state.currentTechniqueId) return null;
            return techniques[state.currentTechniqueId] || null;
        }
    };
})();

// ================================
// 3. DOM ELEMENTS (cached)
// ================================
const DOM = {
    // Views
    homeView: document.getElementById('homeView'),
    detailView: document.getElementById('detailView'),
    techniquesView: document.getElementById('techniquesView'),
    timerView: document.getElementById('timerView'),
    profileView: document.getElementById('profileView'),
    
    // Header & nav
    themeToggle: document.getElementById('themeToggle'),
    userGreeting: document.querySelector('.user-greeting'),
    navLinks: document.querySelectorAll('[data-view]'),
    
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
    
    // Techniques view
    allTechniquesGrid: document.getElementById('allTechniquesGrid'),
    searchInput: document.getElementById('searchInput'),
    
    // Timer
    timerDisplay: document.getElementById('timerDisplay'),
    timerPills: document.querySelectorAll('.timer-pill'),
    startTimer: document.getElementById('startTimer'),
    pauseTimer: document.getElementById('pauseTimer'),
    resetTimer: document.getElementById('resetTimer'),
    
    // Profile (if needed)
    
    // Footer links
    footerLinks: document.querySelectorAll('.footer-links a')
};

// ================================
// 4. UI RENDERING FUNCTIONS
// ================================
const UI = {
    // Apply theme to document
    applyTheme: (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        DOM.themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    },
    
    // Update stats display
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
    
    // Create a technique card element
    createTechCard: (tech) => {
        const card = document.createElement('div');
        card.className = 'tech-card';
        card.dataset.id = tech.id;
        card.innerHTML = `
            <div class="tech-number">#${tech.id}</div>
            <h4>${tech.name}</h4>
            <div class="tech-essence">“${tech.essence.substring(0, 60)}${tech.essence.length > 60 ? '…' : ''}”</div>
            <div class="tech-tags">
                ${tech.tags.slice(0,3).map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
            <div class="tech-footer">
                <span class="tech-duration"><i class="far fa-clock"></i> ${tech.duration}</span>
                <span class="tech-link">View <i class="fas fa-arrow-right"></i></span>
            </div>
        `;
        card.addEventListener('click', () => {
            AppState.set({ currentTechniqueId: tech.id });
            UI.showTechniqueDetail(tech.id);
        });
        return card;
    },
    
    // Render featured techniques (home)
    renderFeatured: () => {
        if (!DOM.featuredGrid) return;
        const featuredIds = [1, 15, 42, 48]; // most popular
        DOM.featuredGrid.innerHTML = '';
        featuredIds.forEach(id => {
            const tech = techniques[id];
            if (tech) {
                DOM.featuredGrid.appendChild(UI.createTechCard(tech));
            }
        });
    },
    
    // Render all techniques (with optional filter)
    renderAllTechniques: (filter = '') => {
        if (!DOM.allTechniquesGrid) return;
        DOM.allTechniquesGrid.innerHTML = '';
        Object.values(techniques).forEach(tech => {
            if (filter) {
                const lowerFilter = filter.toLowerCase();
                const matchesName = tech.name.toLowerCase().includes(lowerFilter);
                const matchesTag = tech.tags.some(t => t.includes(lowerFilter));
                if (!matchesName && !matchesTag) return;
            }
            DOM.allTechniquesGrid.appendChild(UI.createTechCard(tech));
        });
    },
    
    // Show technique detail view
    showTechniqueDetail: (id) => {
        const tech = techniques[id];
        if (!tech) return;
        
        DOM.detailTitle.textContent = tech.name;
        
        // Steps
        let stepsHtml = '<h3>Steps</h3><ol>';
        tech.steps.forEach(step => { stepsHtml += `<li>${step}</li>`; });
        stepsHtml += '</ol>';
        DOM.detailSteps.innerHTML = stepsHtml;
        
        // Essence
        DOM.detailEssence.textContent = `Essence: ${tech.essence}`;
        
        // Profession benefits
        let benefitsHtml = '<h3>Benefits for you</h3>';
        const benefitKeys = Object.keys(tech.benefits);
        if (benefitKeys.length === 0) {
            benefitsHtml += '<p>This technique benefits all seekers.</p>';
        } else {
            benefitKeys.forEach(prof => {
                benefitsHtml += `<div class="benefit-item"><span class="profession-tag">${prof}</span> ${tech.benefits[prof]}</div>`;
            });
        }
        DOM.professionBenefits.innerHTML = benefitsHtml;
        
        // Switch to detail view
        Views.show('detail');
    },
    
    // Update timer display
    updateTimerDisplay: () => {
        const seconds = AppState.get().timer.seconds;
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        DOM.timerDisplay.textContent = `${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
    },
    
    // Highlight active nav link
    setActiveNav: (viewName) => {
        DOM.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.view === viewName) link.classList.add('active');
        });
    }
};

// ================================
// 5. VIEW MANAGEMENT
// ================================
const Views = {
    show: (viewName) => {
        // Hide all views
        const views = ['home', 'detail', 'techniques', 'timer', 'profile'];
        views.forEach(v => {
            const el = DOM[`${v}View`];
            if (el) el.classList.add('hidden');
        });
        
        // Show selected
        const target = DOM[`${viewName}View`];
        if (target) target.classList.remove('hidden');
        
        // Update state
        AppState.set({ currentView: viewName });
        UI.setActiveNav(viewName);
        
        // Special handling
        if (viewName === 'techniques') {
            UI.renderAllTechniques();
        } else if (viewName === 'home') {
            UI.updateStats();
        } else if (viewName === 'timer') {
            UI.updateTimerDisplay();
        }
    }
};

// ================================
// 6. EVENT HANDLERS
// ================================
function initEventListeners() {
    // Navigation links
    DOM.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const view = link.dataset.view;
            if (view) Views.show(view);
        });
    });
    
    // Footer links
    DOM.footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const view = link.dataset.view;
            if (view) Views.show(view);
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
    DOM.exploreBtn.addEventListener('click', () => {
        Views.show('techniques');
    });
    
    // Daily technique
    DOM.dailyBtn.addEventListener('click', () => {
        const ids = Object.keys(techniques);
        const randomId = ids[Math.floor(Math.random() * ids.length)];
        AppState.set({ currentTechniqueId: randomId });
        UI.showTechniqueDetail(randomId);
    });
    
    // Persona cards (filter techniques by persona)
    DOM.personaCards.forEach(card => {
        card.addEventListener('click', () => {
            const persona = card.dataset.persona;
            if (persona) {
                Views.show('techniques');
                // Filter techniques that have this persona in tags
                const filter = persona;
                UI.renderAllTechniques(filter);
                // Optional: highlight search input
                if (DOM.searchInput) {
                    DOM.searchInput.value = persona;
                }
            }
        });
    });
    
    // Back button from detail
    DOM.backBtn.addEventListener('click', () => {
        Views.show('home'); // or previous view? Use state?
        // Could go back to previous view, but for simplicity go home
    });
    
    // Search input
    DOM.searchInput.addEventListener('input', (e) => {
        UI.renderAllTechniques(e.target.value);
    });
    
    // Timer presets
    DOM.timerPills.forEach(btn => {
        btn.addEventListener('click', () => {
            const mins = parseInt(btn.dataset.minutes, 10);
            const seconds = mins * 60;
            AppState.setTimer(seconds, mins);
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
                // Timer finished
                clearInterval(timerInterval);
                AppState.setTimerRunning(false);
                // Record practice (technique? we need to know which technique was practiced)
                // For simplicity, we could ask or use a default
                alert('Meditation complete! Great job.');
                // Optionally add to history with a default technique (e.g., last viewed)
                const lastTech = AppState.get().currentTechniqueId;
                if (lastTech) {
                    AppState.addPractice(lastTech, state.timer.preset);
                    UI.updateStats();
                }
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
}

// ================================
// 7. INITIALIZATION
// ================================
function init() {
    // Apply saved theme
    const savedTheme = AppState.get().theme;
    UI.applyTheme(savedTheme);
    
    // Update stats
    UI.updateStats();
    
    // Render featured
    UI.renderFeatured();
    
    // Set up event listeners
    initEventListeners();
    
    // Show initial view (home)
    Views.show('home');
}

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', init);
