// ==================== 112 TECHNIQUES DATA ====================
const techniques = {};
const techniqueNames = [
    "Witnessing the Breath","Awareness of the Gap Between Breaths","Breath Traveling Through the Spine","Concentration on the Third Eye","Witnessing Thoughts",
    "Listening to Inner Resonance","Gazing into Darkness","Heart Center Meditation","Body Sensation Awareness","Slow Breath Meditation",
    "Walking Awareness","Observation of Emotions","Listening to Silence","Whole-Body Awareness","Expansion of Awareness",
    "Spine Awareness","Total Relaxation","Edge of Sleep","Momentary Suspension","Perceiving the Space Between",
    "Feeling the Void","Embodied Light","Dissolving into Sound","Touching the Sky","Savoring the Source",
    "Radiating Love","Itching and Tingling","Flame Contemplation","Pulse of Life","Empty Sky",
    "Luminous Void","Elemental Contact","Breath as Cosmic Wind","Stillness Between Heartbeats","Spontaneous Satori",
    "Scent of the Absolute","Expanding to Horizon","Centering in Navel","Cave of the Heart","Unstruck Sound",
    "Shakti Rising","Kundalini Awakening","Absorption in Color","Inner Moon","Sun in Solar Plexus",
    "Void Gazing","Darkness Beyond Form","Guru's Grace","Dissolving Ego","Surrendering to What Is",
    "Non-Doing","Effortless Being","Resting in Natural State","Unconditional Love","Compassion Meditation",
    "Joy Unbound","Equanimity","Forgiveness Practice","Gratitude Shower","Body as Temple",
    "Skeleton Awareness","Dissolving Boundaries","Elemental Purification","Fire Offering Within","Waterfall of Grace",
    "Mountain Stillness","Wind of Change","Space Unbounded","Earth Rooting","Cosmic Dance",
    "Timeless Awareness","Dreamlike Illusion","Lucid Waking","Sleep as Yoga","Twilight Contemplation",
    "Midnight Vigil","Dawn Awakening","Noon Radiance","Dusk Surrender","Seasons Within",
    "Age as Wisdom","Death Awareness","Rebirth Visualization","Ancestor Connection","Guardian Spirits",
    "Divine Child","Inner Mother","Cosmic Father","Friend of All","Teacher Within",
    "Healer's Touch","Warrior's Courage","Sage's Silence","Lover's Embrace","Creator's Joy",
    "Destroyer's Clarity","Preserver's Patience","Dancer's Grace","Beggar's Humility","King's Sovereignty",
    "Jester's Laughter","Fool's Leap","Seeker's Quest","Finder's Rest","Praise to the Void",
    "Hymn to the Heart","Mantra of Light","Seed Syllable","Whispered Prayer","Silent Reverence",
    "Offering of Breath","Gift of Presence","Service to All","Union with All"
];
const categories = ['breath','body','heart','sound','gaze','void','energy','light','touch','space','stillness','emotion','awareness','devotion'];
const postures = ['Sukhasana','Padmasana','Vajrasana','Shavasana','Siddhasana','Standing','Walking','Ardha Padmasana'];
const mudrasList = ['Chin mudra','Jnana mudra','Dhyana mudra','Bhairavi mudra','Shambhavi mudra','Khechari mudra','Yoni mudra','Viparita Karani'];
const breaths = ['Natural','Ujjayi','Nadi Shodhana','Kapalabhati','Sama Vritti','Dirga','Bhastrika','Visualized'];

for (let i = 1; i <= 112; i++) {
    const idx = i-1;
    const cat = categories[idx % categories.length];
    const name = techniqueNames[idx % techniqueNames.length];
    const sanskrit = `Sūtra ${i}: ${name.replace(/ /g, '')}`;
    const essence = `A profound ${cat} practice that opens the door to direct experience.`;
    const wisdom = `Osho: "In this technique, you become the witness. Let the experience wash over you."`;
    const posture = postures[idx % postures.length];
    const mudra = mudrasList[idx % mudrasList.length];
    const breath = breaths[idx % breaths.length];
    const duration = `${10 + (idx % 15)}-${20 + (idx % 15)} min`;
    const steps = [
        `Find a comfortable ${posture.toLowerCase()} posture.`,
        `Allow the body to relax completely.`,
        `Bring awareness to ${cat === 'breath' ? 'the natural flow of breath' : cat === 'sound' ? 'subtle sounds around you' : cat === 'gaze' ? 'a single point' : 'the chosen object of meditation'}.`,
        `When distracted, gently return without judgment.`,
        `Stay present for the duration.`
    ];
    const benefits = {
        student: "enhanced focus and memory",
        employee: "reduced stress and increased clarity",
        seeker: "deeper connection to inner self"
    };
    techniques[i] = { id:i, name, sanskrit, category:cat, essence, wisdom, posture, mudra, breath, duration, steps, benefits };
}

// Override key techniques
techniques[1] = { id:1, name:"Witnessing the Breath", sanskrit:"Śvāsa–Praśvāsa Dharana", category:"breath", essence:"Breath is the bridge between body and mind.", wisdom:"Osho: 'Just watch the breath. Don't control it.'", posture:"Sukhasana", mudra:"Chin mudra", breath:"Natural", duration:"10-20 min", steps:["Sit comfortably.","Close eyes.","Observe natural breath.","Return when distracted."], benefits:{ student:"concentration", employee:"stress relief", seeker:"calm mind" } };
techniques[4] = { id:4, name:"Concentration on the Third Eye", sanskrit:"Bhrūmadhya Dharana", category:"gaze", essence:"Attention becomes powerful when gathered in one point.", wisdom:"Osho: 'Between the eyebrows is the center of intuition.'", posture:"Comfortable", mudra:"Jnana mudra", breath:"Natural", duration:"10-20 min", steps:["Close eyes.","Focus between eyebrows.","Return when distracted."], benefits:{ student:"memory", employee:"stability", seeker:"meditation depth" } };

// ==================== PROFESSIONS ====================
const professions = [
    { name:"Student", icon:"fa-graduation-cap", desc:"focus · exams", fullDesc:"Ideal for students seeking improved concentration, memory retention, and exam performance.", keywords:["focus","concentration","memory","exam","study"] },
    { name:"Employee", icon:"fa-briefcase", desc:"stress · work-life", fullDesc:"Helps manage workplace stress, improve work-life balance, and maintain calm under pressure.", keywords:["stress","work","balance","employee"] },
    { name:"CEO", icon:"fa-chart-line", desc:"clarity · decisions", fullDesc:"Enhances clarity of thought, sharp decision-making, and leadership presence.", keywords:["clarity","decision","leadership"] },
    { name:"Seeker", icon:"fa-infinity", desc:"spiritual path", fullDesc:"For those on a spiritual journey—deepens awareness, expands consciousness, and opens the heart.", keywords:["spiritual","awareness","consciousness"] },
    { name:"Anxious", icon:"fa-heartbeat", desc:"calm · anxiety", fullDesc:"Soothes anxiety, calms the nervous system, and restores inner peace.", keywords:["anxiety","calm","fear","peace"] },
    { name:"Overthinker", icon:"fa-brain", desc:"still mind", fullDesc:"Quiets mental chatter, stops overthinking, and brings stillness to the restless mind.", keywords:["overthink","mind","thoughts","stillness"] },
    { name:"Healthcare", icon:"fa-hospital-user", desc:"compassion", fullDesc:"Nurtures compassion, emotional resilience, and healing presence for caregivers.", keywords:["compassion","healing","care"] },
    { name:"Teacher", icon:"fa-chalkboard", desc:"patience", fullDesc:"Cultivates patience, empathy, and the ability to inspire others.", keywords:["patience","teach","guide"] },
    { name:"Developer", icon:"fa-laptop-code", desc:"focus", fullDesc:"Sharpens mental focus, reduces burnout, and enhances problem-solving skills.", keywords:["focus","code","mental clarity"] },
    { name:"Artist", icon:"fa-paint-brush", desc:"flow", fullDesc:"Unlocks creative flow, dissolves blocks, and connects with inspiration.", keywords:["creativity","flow","inspiration"] },
    { name:"Parent", icon:"fa-child", desc:"self-care", fullDesc:"Balances nurturing others with self-care, reducing parental stress and increasing presence.", keywords:["parent","care","balance","self-care"] },
    { name:"Entrepreneur", icon:"fa-rocket", desc:"resilience", fullDesc:"Builds resilience, mental toughness, and the ability to pivot under pressure.", keywords:["resilience","drive","stress"] },
    { name:"FirstResponder", icon:"fa-fire-extinguisher", desc:"grounding", fullDesc:"Provides grounding techniques to process trauma and maintain stability in high-stress roles.", keywords:["grounding","trauma","calm"] },
    { name:"Retiree", icon:"fa-umbrella-beach", desc:"peace", fullDesc:"Invites deep relaxation, contentment, and the wisdom of aging gracefully.", keywords:["peace","relaxation","wisdom"] },
    { name:"Freelancer", icon:"fa-user-tie", desc:"balance", fullDesc:"Helps balance work deadlines with personal well-being, preventing burnout.", keywords:["balance","work-life","focus"] },
    { name:"Athlete", icon:"fa-running", desc:"performance", fullDesc:"Optimizes focus, body awareness, and mental toughness for peak performance.", keywords:["performance","focus","body awareness"] }
];

function getRecommendedTechniques(prof) {
    return Object.values(techniques).sort((a,b)=> {
        const aScore = prof.keywords.reduce((s,k)=> s + (a.name.toLowerCase().includes(k) ? 5 : (a.category.includes(k) ? 3 : 0)),0);
        const bScore = prof.keywords.reduce((s,k)=> s + (b.name.toLowerCase().includes(k) ? 5 : (b.category.includes(k) ? 3 : 0)),0);
        return bScore - aScore;
    }).slice(0,12);
}

// ==================== USER STATE ====================
let user = {
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
    achievements: JSON.parse(localStorage.getItem('achievements')) || {}
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
    updateUI();
    checkAchievements();
    updateStats();
}

function updateUI() {
    document.getElementById('enhTotalPractices').innerText = user.totalPractices;
    document.getElementById('enhTotalMinutes').innerText = user.totalMinutes;
    document.getElementById('enhStreak').innerText = user.streak;
    document.getElementById('statTotalPractices').innerText = user.totalPractices;
    document.getElementById('statTotalMinutes').innerText = user.totalMinutes;
    document.getElementById('statStreak').innerText = user.streak;
    renderCalendar();
    renderProfileSections();
    renderPlan();
    renderDiary();
    renderAchievements();
    updateCharts();
}

function updateStats() {
    const categoryCount = {};
    user.practicedTechniques.forEach(p => {
        const tech = techniques[p.id];
        if(tech) categoryCount[tech.category] = (categoryCount[tech.category] || 0) + 1;
    });
    let favCat = Object.keys(categoryCount).reduce((a,b) => categoryCount[a] > categoryCount[b] ? a : b, 'None');
    document.getElementById('statFavoriteCategory').innerText = favCat !== 'None' ? favCat : '-';
    const techCount = {};
    user.practicedTechniques.forEach(p => { techCount[p.name] = (techCount[p.name] || 0) + 1; });
    let mostPracticed = Object.keys(techCount).reduce((a,b) => techCount[a] > techCount[b] ? a : b, 'None');
    document.getElementById('statMostPracticed').innerText = mostPracticed !== 'None' ? mostPracticed : '-';
    let avg = user.practicedTechniques.length ? Math.round(user.totalMinutes / user.practicedTechniques.length) : 0;
    document.getElementById('statAvgSession').innerText = avg;
}

function updateCharts() {
    const ctx = document.getElementById('progressChart')?.getContext('2d');
    if(ctx && window.progressChart) window.progressChart.destroy();
    if(ctx) {
        window.progressChart = new Chart(ctx, {
            type: 'line',
            data: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], datasets: [{ label:'minutes', data: getWeeklyMinutes(), borderColor:'#9d7bff', tension:0.3, fill:false }] },
            options: { responsive: true, maintainAspectRatio: true }
        });
    }
    const catCtx = document.getElementById('categoryChart')?.getContext('2d');
    if(catCtx && window.categoryChart) window.categoryChart.destroy();
    if(catCtx) {
        const catCount = {};
        user.practicedTechniques.forEach(p => {
            const tech = techniques[p.id];
            if(tech) catCount[tech.category] = (catCount[tech.category] || 0) + 1;
        });
        window.categoryChart = new Chart(catCtx, {
            type: 'doughnut',
            data: { labels: Object.keys(catCount), datasets: [{ data: Object.values(catCount), backgroundColor: ['#9d7bff','#ffb3a0','#6b4eff','#ff8a6c','#c4b5fd'] }] },
            options: { responsive: true }
        });
    }
}

function getWeeklyMinutes() {
    const weekMinutes = [0,0,0,0,0,0,0];
    user.practicedTechniques.forEach(p => {
        const date = new Date(p.date);
        const day = date.getDay();
        weekMinutes[day] += p.minutes;
    });
    return weekMinutes;
}

function renderCalendar() {
    const container = document.getElementById('calendarTracker'); if(!container) return;
    const today = new Date(), year = today.getFullYear(), month = today.getMonth(), firstDay = new Date(year, month, 1).getDay(), daysInMonth = new Date(year, month+1, 0).getDate();
    container.innerHTML = '';
    ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].forEach(day => { const d = document.createElement('div'); d.className='calendar-day weekday'; d.innerText=day; container.appendChild(d); });
    for(let i=0;i<firstDay;i++) { const blank = document.createElement('div'); blank.className='calendar-day'; container.appendChild(blank); }
    for(let d=1; d<=daysInMonth; d++) {
        const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
        const isPracticed = user.practiceDays[dateStr], isToday = d===today.getDate() && month===today.getMonth() && year===today.getFullYear();
        const dayDiv = document.createElement('div'); dayDiv.className = `calendar-day ${isPracticed ? 'practiced' : ''} ${isToday ? 'today' : ''}`; dayDiv.innerText = d;
        dayDiv.addEventListener('click',()=>{ if(!user.practiceDays[dateStr]) { user.practiceDays[dateStr]=true; saveAll(); showToast(`Marked practice on ${dateStr}`); } else if(confirm('Remove practice mark?')){ delete user.practiceDays[dateStr]; saveAll(); } });
        container.appendChild(dayDiv);
    }
}

function renderProfileSections() {
    const practicedDiv = document.getElementById('practicedList');
    if(practicedDiv) practicedDiv.innerHTML = user.practicedTechniques.slice(0,50).map(p => `<div class="profile-list-item">🧘 ${p.name} · ${new Date(p.date).toLocaleDateString()} (${p.minutes} min)</div>`).join('') || "<em>No practices recorded yet.</em>";
    const quotesDiv = document.getElementById('savedQuotesList');
    if(quotesDiv) quotesDiv.innerHTML = user.savedQuotes.slice(0,50).map(q => `<div class="profile-list-item">“${q.text.substring(0,120)}”<br>— ${q.author} <small>${new Date(q.date).toLocaleDateString()}</small></div>`).join('') || "<em>No saved quotes.</em>";
    const notesDiv = document.getElementById('profileDiaryList');
    if(notesDiv) notesDiv.innerHTML = user.diary.slice().reverse().slice(0,50).map(e => `<div class="profile-list-item"><small>${new Date(e.date).toLocaleString()}</small><p>${e.text}</p></div>`).join('') || "<em>No diary entries yet.</em>";
}

function addPracticedTechnique(techId, techName, minutes=15) {
    user.practicedTechniques.unshift({ id:techId, name:techName, date:new Date().toISOString(), minutes });
    user.totalPractices++;
    user.totalMinutes += minutes;
    const today = new Date().toDateString();
    if(user.lastDate !== today){ const yesterday = new Date(Date.now()-86400000).toDateString(); user.streak = user.lastDate===yesterday ? user.streak+1 : 1; user.lastDate=today; }
    user.practiceDays[new Date().toISOString().slice(0,10)] = true;
    saveAll();
    showToast(`🧘 Practiced: ${techName} +${minutes} min`);
    if (Notification.permission === 'granted') new Notification('Practice Complete!', { body: `You completed ${techName} for ${minutes} minutes.` });
}

function saveQuoteToBoth(text, author) {
    user.savedQuotes.unshift({ text, author, date: new Date().toISOString() });
    user.diary.unshift({ date: new Date(), text: `📖 Saved Quote: "${text}" — ${author}` });
    saveAll();
    renderProfileSections();
    renderDiary();
    showToast("Quote saved");
}

function renderDiary() {
    const list = document.getElementById('diaryList');
    if(list) list.innerHTML = user.diary.slice().reverse().map(e=>`<div class="glass-card" style="margin-bottom:0.5rem;padding:0.5rem;"><small>${new Date(e.date).toLocaleString()}</small><p>${e.text}</p></div>`).join('');
}

function renderPlan() {
    const container = document.getElementById('planItems'); if(!container) return;
    container.innerHTML = ''; let total=0;
    user.plan.forEach(id => {
        if(techniques[id]) {
            total += 15;
            const div = document.createElement('div'); div.className = 'plan-item glass-card'; div.style.marginBottom='0.8rem'; div.style.padding='0.8rem';
            div.innerHTML = `<div><strong>${techniques[id].name}</strong> (15 min)</div><button class="remove-plan" data-id="${id}" style="background:none; border:none; color:var(--accent-secondary); cursor:pointer;"><i class="fas fa-trash"></i></button>`;
            div.querySelector('.remove-plan').addEventListener('click', () => { user.plan = user.plan.filter(i=>i!==id); saveAll(); renderPlan(); showToast('removed'); });
            container.appendChild(div);
        }
    });
    document.getElementById('planTotal').innerText = total;
}

// ==================== ACHIEVEMENTS ====================
const achievementsList = [
    { id: 'first_practice', name: 'First Step', desc: 'Complete your first practice', condition: () => user.totalPractices >= 1 },
    { id: 'seven_streak', name: '7-Day Streak', desc: 'Practice 7 days in a row', condition: () => user.streak >= 7 },
    { id: 'hundred_practices', name: 'Century', desc: '100 total practices', condition: () => user.totalPractices >= 100 },
    { id: 'thousand_minutes', name: 'Time Lord', desc: '1000 minutes of practice', condition: () => user.totalMinutes >= 1000 },
    { id: 'master_of_breath', name: 'Master of Breath', desc: 'Complete 10 breathwork sessions', condition: () => user.practicedTechniques.filter(p => p.name.includes('Breathwork')).length >= 10 },
    { id: 'wisdom_seeker', name: 'Wisdom Seeker', desc: 'Save 10 quotes', condition: () => user.savedQuotes.length >= 10 },
    { id: 'technique_collector', name: 'Technique Collector', desc: 'Practice 20 different techniques', condition: () => new Set(user.practicedTechniques.map(p => p.id)).size >= 20 },
    { id: 'dedicated', name: 'Dedicated', desc: 'Practice 30 days total', condition: () => Object.keys(user.practiceDays).length >= 30 }
];

function checkAchievements() {
    let changed = false;
    achievementsList.forEach(ach => {
        if (!user.achievements[ach.id] && ach.condition()) {
            user.achievements[ach.id] = { unlocked: true, date: new Date().toISOString() };
            changed = true;
            showToast(`🏆 Achievement Unlocked: ${ach.name}!`);
            if (Notification.permission === 'granted') new Notification('Achievement Unlocked!', { body: ach.name });
        }
    });
    if (changed) saveAll();
}

function renderAchievements() {
    const container = document.getElementById('achievementsList');
    if (!container) return;
    container.innerHTML = achievementsList.map(ach => {
        const unlocked = user.achievements[ach.id];
        return `<div class="achievement-badge ${!unlocked ? 'locked' : ''}"><i class="fas ${unlocked ? 'fa-trophy' : 'fa-lock'}"></i> ${ach.name}<small>${ach.desc}</small></div>`;
    }).join('');
}

// ==================== QUOTES (RICH COLLECTION) ====================
const fullQuotesList = [
    { text: "Three things cannot long be hidden: the sun, the moon, and the truth.", author: "Buddha" },
    { text: "Peace comes from within. Do not seek it without.", author: "Buddha" },
    { text: "The journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
    { text: "When I let go of what I am, I become what I might be.", author: "Lao Tzu" },
    { text: "Happiness is the absence of the striving for happiness.", author: "Zhuangzi" },
    { text: "The mind is the Buddha, and the Buddha is the mind.", author: "Bodhidharma" },
    { text: "Where do you search me? I am with you.", author: "Kabir" },
    { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
    { text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },
    { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
    { text: "The kingdom of God is within you.", author: "Jesus" },
    { text: "Yoga is the cessation of the fluctuations of the mind.", author: "Patanjali" },
    { text: "Arise, awake, and stop not till the goal is reached.", author: "Swami Vivekananda" },
    { text: "Truth is a pathless land.", author: "Jiddu Krishnamurti" },
    { text: "Don’t worry, be happy.", author: "Meher Baba" },
    { text: "All life is yoga.", author: "Sri Aurobindo" }
];

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

let shuffledQuotes = shuffleArray([...fullQuotesList]);
let currentLibIndex = 0;
let homeQuotes = shuffleArray([...fullQuotesList]);
let currentHomeIndex = 0;

function updateHomeQuote() {
    const q = homeQuotes[currentHomeIndex];
    document.getElementById('homeQuoteText').innerHTML = `“${q.text}”`;
    document.getElementById('homeQuoteAuthor').innerHTML = `— ${q.author}`;
}

function updateLibQuote() {
    const q = shuffledQuotes[currentLibIndex];
    document.getElementById('quoteText').innerHTML = `“${q.text}”`;
    document.getElementById('quoteAuthor').innerHTML = `— ${q.author}`;
}

function nextHomeQuote() {
    currentHomeIndex = (currentHomeIndex + 1) % homeQuotes.length;
    updateHomeQuote();
}

function prevHomeQuote() {
    currentHomeIndex = (currentHomeIndex - 1 + homeQuotes.length) % homeQuotes.length;
    updateHomeQuote();
}

function nextLibQuote() {
    currentLibIndex = (currentLibIndex + 1) % shuffledQuotes.length;
    updateLibQuote();
}

function prevLibQuote() {
    currentLibIndex = (currentLibIndex - 1 + shuffledQuotes.length) % shuffledQuotes.length;
    updateLibQuote();
}

function saveCurrentHomeQuote() {
    const q = homeQuotes[currentHomeIndex];
    saveQuoteToBoth(q.text, q.author);
}

function saveCurrentLibQuote() {
    const q = shuffledQuotes[currentLibIndex];
    saveQuoteToBoth(q.text, q.author);
}

// ==================== MUDRA CAROUSEL ====================
const mudrasData = [
    { name:"Bhumisparsa", sanskrit:"Bhūmisparśa Mudrā", meaning:"Earth-Touching Gesture", how:"Sit in meditation posture. Left hand rests in lap. Right hand reaches down and touches the earth.", essence:"When the mind disappears, the whole existence becomes your witness.", meditation:"Sit silently. Touch the ground. Feel that the whole universe supports your consciousness.", svg:`<svg viewBox="0 0 100 100"><path stroke="currentColor" stroke-width="2" d="M50,70 L50,30 M30,50 L70,50 M40,60 L60,40 M40,40 L60,60"/><circle cx="50" cy="50" r="25" fill="none" stroke="currentColor"/></svg>` },
    { name:"Dhyana", sanskrit:"Dhyāna Mudrā", meaning:"Meditation Gesture", how:"Sit in lotus. Hands rest in lap, right over left, thumbs touching.", essence:"Perfect equilibrium. The triangle of body, mind, consciousness.", meditation:"Hold the mudra, breathe slowly, observe thoughts. Find the gap between thoughts.", svg:`<svg viewBox="0 0 100 100"><path stroke="currentColor" stroke-width="2" d="M35,65 L65,65 M40,55 L60,55 M45,45 L55,45"/><circle cx="50" cy="50" r="30" fill="none" stroke="currentColor"/></svg>` },
    { name:"Abhaya", sanskrit:"Abhaya Mudrā", meaning:"Fearlessness Gesture", how:"Raise the right hand. Palm faces outward, fingers pointing upward.", essence:"Fear exists because the ego exists. When you realize your true consciousness, fear dissolves.", meditation:"Raise the hand and feel life flowing through you, existence supporting you.", svg:`<svg viewBox="0 0 100 100"><path stroke="currentColor" stroke-width="2" d="M40,60 L60,60 M50,70 L50,40"/><path d="M35,50 L45,50 M55,50 L65,50"/><circle cx="50" cy="50" r="28" fill="none" stroke="currentColor"/></svg>` },
    { name:"Dharmachakra", sanskrit:"Dharmacakra Mudrā", meaning:"Turning the Wheel of Dharma", how:"Both hands near the chest. Thumb and index finger form circles. Hands face outward.", essence:"Truth cannot be taught directly; it can only be shared through presence.", meditation:"Sit calmly. Feel wisdom flowing from your heart outward. Radiating awareness.", svg:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="22" fill="none" stroke="currentColor"/><circle cx="50" cy="50" r="10" fill="none"/><path d="M40,35 L60,65 M60,35 L40,65" stroke="currentColor"/></svg>` },
    { name:"Jnana", sanskrit:"Jñāna Mudrā", meaning:"Gesture of Knowledge", how:"Touch thumb and index finger tip. Other fingers extended. Hands rest on knees.", essence:"Thumb represents universal consciousness; index finger the individual ego. When they meet, ego merges into cosmic.", meditation:"Sit quietly. Observe breath. Realize: you are not the mind — you are the awareness behind it.", svg:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="22" fill="none" stroke="currentColor"/><path d="M42,42 L58,58 M42,58 L58,42"/><circle cx="50" cy="50" r="8" fill="none" stroke="currentColor"/></svg>` },
    { name:"Karana", sanskrit:"Karaṇa Mudrā", meaning:"Gesture of Dispelling Negativity", how:"Index and little finger extended. Middle and ring fingers folded. Thumb holds them down.", essence:"Negativity arises from unconsciousness. Awareness dispels it.", meditation:"Visualize negativity leaving the mind. Breathe deeply. Purification.", svg:`<svg viewBox="0 0 100 100"><path stroke="currentColor" stroke-width="2" d="M35,55 L65,45 M35,45 L65,55 M50,65 L50,35"/><circle cx="50" cy="50" r="25" fill="none" stroke="currentColor"/></svg>` },
    { name:"Uttarabodhi", sanskrit:"Uttarabodhi Mudrā", meaning:"Gesture of Supreme Enlightenment", how:"Interlock fingers. Extend index fingers upward. Thumbs crossed.", essence:"Rising energy of awakening. Expanding consciousness beyond mind.", meditation:"Imagine energy rising from spine toward head. Feel expansion to infinity.", svg:`<svg viewBox="0 0 100 100"><path stroke="currentColor" stroke-width="2" d="M30,55 L70,55 M50,30 L50,70 M40,40 L60,60 M40,60 L60,40"/><circle cx="50" cy="50" r="28" fill="none" stroke="currentColor"/></svg>` },
    { name:"Vitarka", sanskrit:"Vitarka Mudrā", meaning:"Gesture of Teaching", how:"Thumb and index finger form a circle. Palm faces outward. Hand slightly raised.", essence:"Conscious dialogue. Truth grows through questioning and reflection.", meditation:"Hold mudra while contemplating a question. Let answer arise from silence.", svg:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor"/><path d="M38,45 L62,55 M38,55 L62,45"/><circle cx="50" cy="50" r="8" fill="none" stroke="currentColor"/></svg>` },
    { name:"Namaskara", sanskrit:"Namaskāra Mudrā", meaning:"Prayer Gesture", how:"Palms pressed together near the heart.", essence:"'The divine in me honors the divine in you.' Recognition of unity.", meditation:"Bring palms together at heart. Feel meeting of opposites. Offer respect to all beings.", svg:`<svg viewBox="0 0 100 100"><path stroke="currentColor" stroke-width="2" d="M30,60 L70,60 M50,40 L50,70 M40,45 L60,55 M40,55 L60,45"/><circle cx="50" cy="50" r="25" fill="none" stroke="currentColor"/></svg>` },
    { name:"Tarjani", sanskrit:"Tarjanī Mudrā", meaning:"Gesture of Warning", how:"Index finger extended, other fingers folded. Hand raised.", essence:"Awareness pointing toward ignorance. Wake up call.", meditation:"Raise the index finger as a reminder to yourself: 'Wake up. Don't be unconscious.'", svg:`<svg viewBox="0 0 100 100"><path stroke="currentColor" stroke-width="2" d="M50,65 L50,30 M40,45 L60,45"/><circle cx="50" cy="30" r="4" fill="none"/><circle cx="50" cy="50" r="22" fill="none" stroke="currentColor"/></svg>` },
    { name:"Kesapana", sanskrit:"Keśapana Mudrā", meaning:"Gesture of Sprinkling Immortal Nectar", how:"Two hands together, fingers intertwined, as if sprinkling.", essence:"Showering of wisdom and compassion. Bestowing blessings.", meditation:"Imagine cool, luminous nectar flowing from hands into your heart and out to all beings.", svg:`<svg viewBox="0 0 100 100"><path stroke="currentColor" stroke-width="2" d="M35,55 L65,45 M35,45 L65,55 M45,65 L55,35 M45,35 L55,65"/><circle cx="50" cy="50" r="28" fill="none" stroke="currentColor"/></svg>` }
];

let currentMudraIndex = 0;

function renderMudra(index) {
    const mudra = mudrasData[index];
    const container = document.getElementById('mudraContent');
    if (!container) return;
    container.innerHTML = `
        <div class="mudra-svg">${mudra.svg}</div>
        <div class="mudra-name">${mudra.name}</div>
        <div class="mudra-sanskrit">${mudra.sanskrit}</div>
        <div class="mudra-section"><h4>✨ Meaning</h4><p>${mudra.meaning}</p></div>
        <div class="mudra-section"><h4>🖐️ How to Form</h4><p>${mudra.how}</p></div>
        <div class="mudra-section"><h4>💎 Essence</h4><p>${mudra.essence}</p></div>
        <div class="mudra-section"><h4>🧘 Inner Meditation</h4><p>${mudra.meditation}</p></div>
    `;
    document.getElementById('mudraCounter').innerText = `${index + 1} / ${mudrasData.length}`;
}

function nextMudra() { currentMudraIndex = (currentMudraIndex + 1) % mudrasData.length; renderMudra(currentMudraIndex); }
function prevMudra() { currentMudraIndex = (currentMudraIndex - 1 + mudrasData.length) % mudrasData.length; renderMudra(currentMudraIndex); }
function saveCurrentMudraToDiary() {
    const mudra = mudrasData[currentMudraIndex];
    const entry = `🧘 Mudra: ${mudra.name} (${mudra.sanskrit})\n\nMeaning: ${mudra.meaning}\n\nHow to Form: ${mudra.how}\n\nEssence: ${mudra.essence}\n\nInner Meditation: ${mudra.meditation}`;
    saveQuoteToBoth(entry, `Mudra: ${mudra.name}`);
}

// ==================== TECHNIQUES UI (Fixed) ====================
function buildTechCard(t, showPractice=true) {
    const div = document.createElement('div'); div.className = 'tech-card';
    const isFav = user.favorites.includes(t.id);
    div.innerHTML = `
        <div class="tech-name">${t.name}</div>
        <div class="tech-category">${t.category}</div>
        <div class="tech-essence">“${t.essence.substring(0,80)}”</div>
        <div class="tech-footer"><span><i class="far fa-clock"></i> ${t.duration}</span><div><button class="favorite-btn ${isFav ? 'fas' : 'far'} fa-heart" data-id="${t.id}"></button>${showPractice ? `<button class="practice-btn" data-id="${t.id}" data-name="${t.name}"><i class="fas fa-play"></i> Practice</button>` : ''}</div></div>
    `;
    div.querySelector('.favorite-btn')?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (user.favorites.includes(t.id)) user.favorites = user.favorites.filter(f => f !== t.id);
        else user.favorites.push(t.id);
        saveAll();
        e.target.classList.toggle('fas'); e.target.classList.toggle('far');
        showToast(user.favorites.includes(t.id) ? 'Added to favorites' : 'Removed');
    });
    if(showPractice) {
        div.querySelector('.practice-btn')?.addEventListener('click', (e) => {
            e.stopPropagation();
            addPracticedTechnique(t.id, t.name, 15);
        });
    }
    div.addEventListener('click', () => showModal(t));
    return div;
}

function showModal(t) {
    let modal = document.getElementById('detailModal');
    if(!modal) {
        modal = document.createElement('div');
        modal.id = 'detailModal';
        modal.className = 'modal';
        document.body.appendChild(modal);
    }
    modal.innerHTML = `<div class="modal-content glass-card"><h2>${t.name}</h2><p><em>${t.sanskrit}</em> · ${t.category}</p><div style="background: rgba(157,123,255,0.2); padding:1rem; border-radius:20px; margin:1rem 0;"><i class="fas fa-quote-left"></i> ${t.wisdom}</div><h3>🧘 Step-by-Step</h3><ol>${t.steps.map(s=>`<li>${s}</li>`).join('')}</ol><h3>🪷 Posture & Mudra</h3><p>${t.posture} · ${t.mudra}</p><h3>🌟 Benefits</h3><p>✨ Students: ${t.benefits.student}<br>✨ Employees: ${t.benefits.employee}<br>✨ Seekers: ${t.benefits.seeker}</p><button class="btn-primary addPlanBtn">➕ Add to My Plan</button><button class="btn-outline closeModal">Close</button></div>`;
    modal.classList.add('active');
    modal.querySelector('.addPlanBtn').addEventListener('click', () => { if(!user.plan.includes(t.id)) { user.plan.push(t.id); saveAll(); renderPlan(); showToast('added to plan'); } });
    modal.querySelector('.closeModal').addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => { if(e.target === modal) modal.classList.remove('active'); });
}

// Archetype grid and carousel
const profGrid = document.getElementById('professionGrid');
profGrid.innerHTML = professions.map(p => `<div class="prof-card" data-prof='${JSON.stringify(p)}'><i class="fas ${p.icon}"></i><span>${p.name}</span><div class="prof-desc">${p.desc}</div><div class="prof-full-desc">${p.fullDesc}</div></div>`).join('');

let currentTechList = [];
let currentTechIndex = 0;

function renderTechCarousel() {
    const tech = currentTechList[currentTechIndex];
    if(!tech) return;
    document.getElementById('techCarouselContent').innerHTML = `
        <div class="tech-name" style="font-size:1.6rem; font-weight:700;">${tech.name}</div>
        <div style="font-size:0.9rem; color:var(--accent-secondary);">${tech.sanskrit} · ${tech.category}</div>
        <div class="tech-detail-section"><h4>✨ Essence</h4><p>${tech.essence}</p></div>
        <div class="tech-detail-section"><h4>💎 Wisdom</h4><p>${tech.wisdom}</p></div>
        <div class="tech-detail-section"><h4>🧘 Step-by-Step</h4><ol>${tech.steps.map(s=>`<li>${s}</li>`).join('')}</ol></div>
        <div class="tech-detail-section"><h4>🪷 Posture & Mudra</h4><p>${tech.posture} · ${tech.mudra}</p></div>
        <div class="tech-detail-section"><h4>🌬️ Breath</h4><p>${tech.breath}</p></div>
        <div class="tech-detail-section"><h4>⏱️ Duration</h4><p>${tech.duration}</p></div>
        <div class="tech-detail-section"><h4>🌟 Benefits</h4><p>✨ Students: ${tech.benefits.student}<br>✨ Employees: ${tech.benefits.employee}<br>✨ Seekers: ${tech.benefits.seeker}</p></div>
    `;
    document.getElementById('techCounter').innerText = `${currentTechIndex+1} / ${currentTechList.length}`;
    const favBtn = document.getElementById('favoriteTechBtn');
    favBtn.innerHTML = user.favorites.includes(tech.id) ? '<i class="fas fa-heart"></i> Favorite' : '<i class="far fa-heart"></i> Favorite';
    favBtn.dataset.id = tech.id;
}

function nextTech() { if(currentTechList.length) { currentTechIndex = (currentTechIndex+1) % currentTechList.length; renderTechCarousel(); } }
function prevTech() { if(currentTechList.length) { currentTechIndex = (currentTechIndex-1+currentTechList.length) % currentTechList.length; renderTechCarousel(); } }
function practiceCurrentTech() { if(currentTechList[currentTechIndex]) addPracticedTechnique(currentTechList[currentTechIndex].id, currentTechList[currentTechIndex].name, 15); }
function addCurrentTechToPlan() { const t = currentTechList[currentTechIndex]; if(t && !user.plan.includes(t.id)) { user.plan.push(t.id); saveAll(); renderPlan(); showToast('Added to My Plan'); } else showToast('Already in plan'); }
function toggleFavoriteCurrentTech() { const t = currentTechList[currentTechIndex]; if(t) { if(user.favorites.includes(t.id)) user.favorites = user.favorites.filter(f=>f!==t.id); else user.favorites.push(t.id); saveAll(); renderTechCarousel(); showToast(user.favorites.includes(t.id)?'Added to favorites':'Removed from favorites'); } }

// Attach archetype click handlers
document.querySelectorAll('.prof-card').forEach(card => {
    card.addEventListener('click', () => {
        const prof = JSON.parse(card.dataset.prof);
        currentTechList = getRecommendedTechniques(prof);
        currentTechIndex = 0;
        renderTechCarousel();
        document.getElementById('professionSelectionView').classList.add('hidden');
        document.getElementById('recommendedTechniquesView').classList.remove('hidden');
        document.getElementById('allTechniquesView').classList.add('hidden');
        document.getElementById('selectedProfessionTitle').innerHTML = `🌀 ${prof.name} · Recommended Techniques`;
    });
});

document.getElementById('backToProfessionsBtn').addEventListener('click', () => {
    document.getElementById('professionSelectionView').classList.remove('hidden');
    document.getElementById('recommendedTechniquesView').classList.add('hidden');
    document.getElementById('allTechniquesView').classList.add('hidden');
});
document.getElementById('showArchetypeBtn').addEventListener('click', () => {
    document.getElementById('professionSelectionView').classList.remove('hidden');
    document.getElementById('recommendedTechniquesView').classList.add('hidden');
    document.getElementById('allTechniquesView').classList.add('hidden');
});
document.getElementById('showAllTechBtn').addEventListener('click', () => {
    document.getElementById('professionSelectionView').classList.add('hidden');
    document.getElementById('recommendedTechniquesView').classList.add('hidden');
    document.getElementById('allTechniquesView').classList.remove('hidden');
    const grid = document.getElementById('allTechniquesGrid');
    grid.innerHTML = '';
    Object.values(techniques).forEach(t => grid.appendChild(buildTechCard(t, true)));
    const searchInput = document.getElementById('techSearchInput');
    searchInput.oninput = () => {
        const term = searchInput.value.toLowerCase();
        grid.innerHTML = '';
        Object.values(techniques).filter(t => t.name.toLowerCase().includes(term) || t.category.includes(term)).forEach(t => grid.appendChild(buildTechCard(t, true)));
    };
});

document.getElementById('prevTechBtn').addEventListener('click', prevTech);
document.getElementById('nextTechBtn').addEventListener('click', nextTech);
document.getElementById('practiceTechBtn').addEventListener('click', practiceCurrentTech);
document.getElementById('addToPlanTechBtn').addEventListener('click', addCurrentTechToPlan);
document.getElementById('favoriteTechBtn').addEventListener('click', toggleFavoriteCurrentTech);

// ==================== BREATHWORK ====================
const breathInstructions = {
    box: "Inhale 4s → Hold 4s → Exhale 6s → Hold 4s. Calms nervous system.",
    "478": "Inhale 4s → Hold 7s → Exhale 8s. Deep relaxation.",
    nadi: "Alternate nostril: close right, inhale left; close left, exhale right. Balances hemispheres.",
    kapal: "Rapid forceful exhales, passive inhales. 30 breaths then rest. Cleanses lungs.",
    ujjayi: "Ocean breath: slight throat constriction, audible hiss. Soothes mind."
};
let breathActive=false, breathInterval=null;

function startBreathPractice(type) {
    if(breathInterval) clearInterval(breathInterval);
    breathActive=true;
    document.getElementById('stopBreathBtn').style.display='inline-block';
    document.getElementById('breathInstructionPanel').innerHTML=`<strong>📖 How to practice:</strong> ${breathInstructions[type]}<br><br>🧘 Starting guided session...`;
    let phases=[], timings=[];
    if(type==='box'){ phases=['inhale','hold','exhale','hold']; timings=[4,4,6,4]; }
    else if(type==='478'){ phases=['inhale','hold','exhale']; timings=[4,7,8]; }
    else if(type==='nadi'){ phases=['inhale left','hold','exhale right','inhale right','hold','exhale left']; timings=[4,4,4,4,4,4]; }
    else if(type==='kapal'){ phases=['rapid exhale','rest']; timings=[20,10]; }
    else if(type==='ujjayi'){ phases=['ujjayi inhale','ujjayi exhale']; timings=[5,5]; }
    let phaseIdx=0, cycle=0, maxCycles=4;
    const runPhase=()=>{
        if(!breathActive) return;
        if(phaseIdx>=phases.length){ phaseIdx=0; cycle++; if(cycle>=maxCycles){ resetBreathUI(); addPracticedTechnique(0,`${type.toUpperCase()} Breathwork`,5); showToast('Practice complete'); return; } }
        let timer=timings[phaseIdx];
        const phase=phases[phaseIdx];
        document.getElementById('breathPhaseLabel').innerHTML=phase.includes('inhale')?'🌬️':(phase.includes('hold')?'🌀':'💨');
        document.getElementById('breathPhaseText').innerHTML=phase.toUpperCase();
        let step=0;
        const interval=setInterval(()=>{
            if(!breathActive){ clearInterval(interval); return; }
            step++;
            document.getElementById('breathTimerDisplay').innerHTML=timer-step;
            const progress=(step/timer)*100;
            document.querySelector('.progress-circle').style.strokeDashoffset=860-(progress/100)*860;
            if(step>=timer){ clearInterval(interval); phaseIdx++; runPhase(); }
        },1000);
        breathInterval=interval;
    };
    runPhase();
}

function resetBreathUI() {
    if(breathInterval) clearInterval(breathInterval);
    breathActive=false;
    document.getElementById('stopBreathBtn').style.display='none';
    document.getElementById('breathInstructionPanel').innerHTML="✨ Select a breath technique to see detailed instructions and begin your practice.";
    document.getElementById('breathPhaseLabel').innerHTML='🌀';
    document.getElementById('breathPhaseText').innerHTML='Ready';
    document.getElementById('breathTimerDisplay').innerHTML='0';
    document.querySelector('.progress-circle').style.strokeDashoffset=860;
}

document.querySelectorAll('.start-breath').forEach(btn=>btn.addEventListener('click',(e)=>{ e.stopPropagation(); const type=btn.closest('.breath-card').dataset.breath; startBreathPractice(type); }));
document.getElementById('stopBreathBtn').addEventListener('click',resetBreathUI);

// ==================== TIMER ====================
let timerSec=300, timerInt=null, running=false;
const timerDisplay=document.getElementById('timerDisplay'), timerCircle=document.querySelector('.timer-progress');
const circumferenceTimer=553;
function updateTimerDisplay() {
    const mins=Math.floor(timerSec/60), secs=timerSec%60;
    timerDisplay.innerText=`${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
    const progress=(timerSec<=0?0:(300-timerSec)/300);
    const offset=circumferenceTimer-(progress*circumferenceTimer);
    if(timerCircle) timerCircle.style.strokeDashoffset=Math.min(circumferenceTimer,Math.max(0,offset));
}
document.querySelectorAll('.timer-pill').forEach(btn=>btn.addEventListener('click',(e)=>{ timerSec=parseInt(e.target.dataset.min)*60; updateTimerDisplay(); }));
document.getElementById('customMinutes')?.addEventListener('change',(e)=>{ if(e.target.value>0) timerSec=parseInt(e.target.value)*60; updateTimerDisplay(); });
document.getElementById('startTimer').addEventListener('click',()=>{
    if(running) return;
    running=true;
    timerInt=setInterval(()=>{
        if(timerSec<=0){
            clearInterval(timerInt); running=false;
            addPracticedTechnique(0, "Focused Meditation", Math.floor((300-timerSec)/60)||5);
            document.getElementById('timerMsg').innerText='✨ Complete! +xp ✨';
            showToast('Meditation completed!');
            updateTimerDisplay();
        } else { timerSec--; updateTimerDisplay(); }
    },1000);
});
document.getElementById('pauseTimer').addEventListener('click',()=>{ clearInterval(timerInt); running=false; });
document.getElementById('resetTimer').addEventListener('click',()=>{ clearInterval(timerInt); running=false; timerSec=300; updateTimerDisplay(); document.getElementById('timerMsg').innerText=''; });

// ==================== AMBIENT SOUNDS ====================
let currentSound = null;
const soundFiles = {
    rain: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    forest: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    ocean: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    fire: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
};
function playSound(sound) {
    if (currentSound) { currentSound.pause(); currentSound.currentTime = 0; }
    if (sound === 'silence') { currentSound = null; return; }
    const audio = new Audio(soundFiles[sound]);
    audio.loop = true;
    audio.volume = 0.3;
    audio.play().catch(e => console.log('Autoplay blocked'));
    currentSound = audio;
}
document.querySelectorAll('.sound-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const sound = btn.dataset.sound;
        playSound(sound);
        document.querySelectorAll('.sound-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// ==================== DIARY ====================
document.getElementById('saveDiary').addEventListener('click',()=>{ const txt = document.getElementById('diaryEntry').value.trim(); if(txt){ user.diary.unshift({ date: new Date(), text: txt }); saveAll(); renderDiary(); renderProfileSections(); document.getElementById('diaryEntry').value=''; showToast('saved'); } });

// ==================== EXPORT DATA ====================
function exportData() {
    const data = { user, exportDate: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vigyan_bhairav_data_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Data exported');
}
function exportCSV() {
    let csv = "Date,Technique,Minutes\n";
    user.practicedTechniques.forEach(p => {
        csv += `"${new Date(p.date).toISOString().slice(0,10)}","${p.name}",${p.minutes}\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `practice_history_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('CSV exported');
}
document.getElementById('exportDataBtn')?.addEventListener('click', exportData);
document.getElementById('exportCSVBtn')?.addEventListener('click', exportCSV);

// ==================== PROFILE TABS ====================
document.querySelectorAll('.tab-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
        const tab=btn.dataset.profileTab;
        document.querySelectorAll('.profile-section-container').forEach(sec=>sec.classList.remove('active-tab'));
        document.getElementById(`profile${tab.charAt(0).toUpperCase()+tab.slice(1)}`).classList.add('active-tab');
        document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// ==================== NOTIFICATIONS ====================
if ('Notification' in window && Notification.permission !== 'granted') {
    Notification.requestPermission();
}

// ==================== THEME ====================
const themeBtn=document.getElementById('themeToggle');
themeBtn.addEventListener('click',()=>{ const html=document.documentElement; const cur=html.getAttribute('data-theme'); html.setAttribute('data-theme', cur==='dark'?'light':'dark'); themeBtn.innerHTML=cur==='dark'?'<i class="fas fa-sun"></i>':'<i class="fas fa-moon"></i>'; localStorage.setItem('theme',html.getAttribute('data-theme')); });
const savedTheme=localStorage.getItem('theme')||'dark'; document.documentElement.setAttribute('data-theme',savedTheme); themeBtn.innerHTML=savedTheme==='dark'?'<i class="fas fa-moon"></i>':'<i class="fas fa-sun"></i>';

// ==================== TOAST & SCROLL ====================
function showToast(msg){ const t=document.createElement('div'); t.className='toast'; t.innerText=msg; document.body.appendChild(t); setTimeout(()=>t.remove(),3000); }
const scrollBtn=document.getElementById('scrollTop');
window.addEventListener('scroll',()=>scrollBtn.style.opacity=window.scrollY>200?'1':'0');
scrollBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

// ==================== NAVIGATION ====================
const views={ home:'homeView', techniques:'techniquesView', breathwork:'breathworkView', quotes:'quotesView', diary:'diaryView', timer:'timerView', plan:'planView', profile:'profileView', enhanced:'enhancedView', stats:'statsView', achievements:'achievementsView' };
function showView(viewName) {
    Object.values(views).forEach(id=>document.getElementById(id).classList.add('hidden'));
    document.getElementById(views[viewName]).classList.remove('hidden');
    document.querySelectorAll('.nav a').forEach(a=>a.classList.remove('active'));
    const activeNav=document.querySelector(`.nav a[data-view="${viewName}"]`);
    if(activeNav) activeNav.classList.add('active');
}
document.querySelectorAll('[data-view]').forEach(el=>el.addEventListener('click',(e)=>{ e.preventDefault(); showView(el.dataset.view); }));
document.getElementById('exploreBtn').addEventListener('click',()=>showView('techniques'));
document.getElementById('dailyBtn').addEventListener('click',()=>{ const ids=Object.keys(techniques); alert(`Today's technique: ${techniques[ids[Math.floor(Math.random()*ids.length)]].name}`); });

// ==================== INITIAL RENDERING ====================
renderMudra(0);
updateHomeQuote();
updateLibQuote();
renderPlan();
renderDiary();
renderProfileSections();
updateUI();
showView('home');
