/**
 * Vigyan Bhairav - Complete Cosmic OS
 * script.js - Main application logic
 * 
 * This file contains all functionality for the meditation website:
 * - 112 techniques database
 * - User state management (localStorage)
 * - Technique cards and detail modal
 * - Category filters and search
 * - Path cards (16 professions)
 * - Timer with XP and streak tracking
 * - Audio player
 * - Diary (journal)
 * - Social feed with posts
 * - Chat (mock)
 * - Challenges
 * - Plan (my practice plan)
 * - Profile and enhanced profile with chart
 * - Breathing widget
 * - Theme toggle
 * - Toasts and notifications
 * - Scroll to top
 * - View navigation
 */

// ================================
// 1. TECHNIQUES DATABASE (112 entries)
// ================================
const techniques = (function() {
  const categories = ['breath', 'void', 'body', 'heart', 'sound', 'gaze', 'energy', 'light', 'sleep', 'emotion'];
  const postures = ['Sukhasana', 'Siddhasana', 'Padmasana', 'Vajrasana', 'Shavasana'];
  const mudras = ['Chin mudra', 'Dhyana mudra', 'Jnana mudra', 'Khechari mudra', 'Shambhavi mudra'];
  
  // First two techniques (authentic)
  const techs = {
    1: {
      id: 1,
      name: 'Witnessing the Breath',
      sanskrit: 'Śvāsa–Praśvāsa Dharana',
      category: 'breath',
      essence: 'Breath awareness anchors consciousness.',
      posture: 'Sukhasana',
      mudra: 'Chin mudra',
      breath: 'Natural',
      duration: '15-20 min',
      tags: ['beginner', 'breath'],
      steps: [
        'Sit comfortably with spine straight.',
        'Close your eyes.',
        'Observe natural breath without control.',
        'When mind wanders, return to breath.',
        'Continue for 15-20 minutes.'
      ],
      benefits: {
        student: 'improves concentration',
        employee: 'reduces stress',
        anxious: 'calms mind'
      }
    },
    2: {
      id: 2,
      name: 'Pause Between Breaths',
      sanskrit: 'Madhya Dharana',
      category: 'breath',
      essence: 'Rest in the gap after exhale.',
      posture: 'Siddhasana',
      mudra: 'Dhyana mudra',
      breath: 'Natural with pause',
      duration: '15 min',
      tags: ['advanced', 'breath'],
      steps: [
        'Exhale completely.',
        'Notice the stillness before next inhale.',
        'Rest in that gap.',
        'Allow inhale to arise naturally.'
      ],
      benefits: {
        ceo: 'sharpens intuition',
        seeker: 'deepens stillness'
      }
    }
  };

  // Generate remaining 110 techniques
  for (let i = 3; i <= 112; i++) {
    let cat = categories[i % categories.length];
    techs[i] = {
      id: i,
      name: `Technique ${i}: ${cat} practice`,
      sanskrit: `Sanskrit ${i}`,
      category: cat,
      essence: `A profound ${cat} practice.`,
      posture: postures[i % postures.length],
      mudra: mudras[i % mudras.length],
      breath: i % 3 === 0 ? '4-4-6' : 'Natural',
      duration: '15-20 min',
      tags: [cat, i % 2 === 0 ? 'beginner' : 'intermediate'],
      steps: [
        'Find a comfortable seated posture.',
        'Close your eyes.',
        'Follow the inner guidance.',
        'Observe without judgment.',
        'Return gently when distracted.'
      ],
      benefits: {
        student: 'focus',
        employee: 'calm',
        seeker: 'awareness'
      }
    };
  }
  return techs;
})();

// ================================
// 2. USER STATE (with localStorage)
// ================================
let user = {
  totalPractices: parseInt(localStorage.getItem('totalPractices')) || 1248,
  totalMinutes: parseInt(localStorage.getItem('totalMinutes')) || 6304,
  streak: parseInt(localStorage.getItem('streak')) || 1,
  lastPracticeDate: localStorage.getItem('lastPracticeDate') || null,
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  diary: JSON.parse(localStorage.getItem('diary')) || [],
  plan: JSON.parse(localStorage.getItem('plan')) || [],
  xp: parseInt(localStorage.getItem('xp')) || 450,
  level: parseInt(localStorage.getItem('level')) || 4
};

function updateStorage() {
  localStorage.setItem('totalPractices', user.totalPractices);
  localStorage.setItem('totalMinutes', user.totalMinutes);
  localStorage.setItem('streak', user.streak);
  localStorage.setItem('lastPracticeDate', user.lastPracticeDate || '');
  localStorage.setItem('favorites', JSON.stringify(user.favorites));
  localStorage.setItem('diary', JSON.stringify(user.diary));
  localStorage.setItem('plan', JSON.stringify(user.plan));
  localStorage.setItem('xp', user.xp);
  localStorage.setItem('level', user.level);

  // Update DOM elements
  document.getElementById('totalPracticed').textContent = user.totalPractices;
  document.getElementById('totalMinutes').textContent = user.totalMinutes;
  document.getElementById('currentStreak').textContent = user.streak;
  document.getElementById('cartCount').textContent = user.plan.length;
  document.getElementById('profileStreak').textContent = user.streak;
  document.getElementById('profilePractices').textContent = user.totalPractices;
  document.getElementById('xpFill').style.width = (user.xp % 100) + '%';
}

// ================================
// 3. HELPER FUNCTIONS
// ================================
function showToast(msg) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ================================
// 4. TECHNIQUE CARD RENDERING
// ================================
function createTechCard(t) {
  const div = document.createElement('div');
  div.className = 'tech-card';
  div.dataset.id = t.id;
  const isFav = user.favorites.includes(t.id);
  div.innerHTML = `
    <div class="tech-header">
      <span class="tech-number">#${t.id}</span>
      <span class="tech-sanskrit">${t.sanskrit}</span>
    </div>
    <div class="tech-name">${t.name}</div>
    <div class="tech-category">${t.category}</div>
    <div class="tech-essence">“${t.essence}”</div>
    <div class="tech-details">
      <i class="fas fa-arrows-alt"></i> ${t.posture} · ${t.mudra}
    </div>
    <div class="tech-tags">
      ${t.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
    </div>
    <div class="tech-footer">
      <span class="tech-duration"><i class="far fa-clock"></i> ${t.duration}</span>
      <button class="favorite-btn ${isFav ? 'fas' : 'far'} fa-heart" data-id="${t.id}"></button>
    </div>
  `;

  div.querySelector('.favorite-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    const id = t.id;
    if (user.favorites.includes(id)) {
      user.favorites = user.favorites.filter(f => f !== id);
      showToast('removed from favorites');
    } else {
      user.favorites.push(id);
      showToast('added to favorites');
    }
    updateStorage();
    e.target.classList.toggle('fas');
    e.target.classList.toggle('far');
  });

  div.addEventListener('click', () => showDetailModal(t));
  return div;
}

function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (grid) {
    grid.innerHTML = '';
    for (let i = 1; i <= 2; i++) {
      grid.appendChild(createTechCard(techniques[i]));
    }
  }
}

function renderTechniques(filter = 'all', search = '') {
  const grid = document.getElementById('techniquesGrid');
  if (!grid) return;
  grid.innerHTML = '';
  Object.values(techniques).forEach(t => {
    if (filter !== 'all' && t.category !== filter) return;
    if (search && !t.name.toLowerCase().includes(search.toLowerCase()) && !t.category.toLowerCase().includes(search.toLowerCase())) return;
    grid.appendChild(createTechCard(t));
  });
}

// ================================
// 5. DETAIL MODAL
// ================================
const modal = document.getElementById('detailModal');
const modalContent = document.getElementById('detailContent');

function showDetailModal(t) {
  let benefitsHtml = '';
  for (let [prof, benefit] of Object.entries(t.benefits)) {
    benefitsHtml += `<div class="benefit-item"><strong>${prof}:</strong> ${benefit}</div>`;
  }
  modalContent.innerHTML = `
    <h2>${t.name}</h2>
    <p style="color:var(--accent-tertiary);">${t.sanskrit}</p>
    <p>${t.category}</p>
    <p>“${t.essence}”</p>
    <h3>steps</h3>
    <ol>${t.steps.map(s => `<li>${s}</li>`).join('')}</ol>
    <p>${t.posture} · ${t.mudra} · ${t.breath}</p>
    <h3>benefits</h3>
    ${benefitsHtml}
    <button class="btn-primary" id="addToPlanFromDetail">add to plan</button>
    <button class="btn-outline" id="closeModalBtn">close</button>
  `;
  modalContent.querySelector('#addToPlanFromDetail').addEventListener('click', () => {
    if (!user.plan.includes(t.id)) {
      user.plan.push(t.id);
      updateStorage();
      renderPlan();
      showToast('added to plan');
    }
  });
  modalContent.querySelector('#closeModalBtn').addEventListener('click', () => modal.classList.remove('active'));
  modal.classList.add('active');
}

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('active');
});

// ================================
// 6. CATEGORY FILTERS
// ================================
const catContainer = document.getElementById('categoryFilters');
if (catContainer) {
  const categories = ['all', 'breath', 'void', 'body', 'heart', 'sound', 'gaze', 'energy', 'light', 'sleep', 'emotion'];
  categories.forEach(c => {
    const span = document.createElement('span');
    span.className = 'category-filter';
    span.dataset.cat = c;
    span.innerText = c;
    span.addEventListener('click', () => {
      document.querySelectorAll('.category-filter').forEach(el => el.classList.remove('active'));
      span.classList.add('active');
      const search = document.getElementById('searchInput').value;
      renderTechniques(c === 'all' ? 'all' : c, search);
    });
    catContainer.appendChild(span);
  });
  catContainer.firstChild.classList.add('active');
}

document.getElementById('searchInput')?.addEventListener('input', (e) => {
  const active = document.querySelector('.category-filter.active')?.dataset.cat || 'all';
  renderTechniques(active, e.target.value);
});

// ================================
// 7. PATH CARDS (16 professions)
// ================================
const profs = [
  'Student', 'Employee', 'CEO', 'Seeker', 'Anxious', 'Overthinker', 'Healthcare', 'Teacher',
  'Developer', 'Artist', 'Parent', 'Entrepreneur', 'First Responder', 'Retiree', 'Freelancer', 'Athlete'
];
const desc = {
  Student: 'exam pressure · focus',
  Employee: 'stress · work-life',
  CEO: 'clarity · decision fatigue',
  Seeker: 'spiritual · purpose',
  Anxious: 'calm · anxiety relief',
  Overthinker: 'still mind',
  Healthcare: 'compassion fatigue',
  Teacher: 'patience',
  Developer: 'focus',
  Artist: 'creative flow',
  Parent: 'self-care',
  Entrepreneur: 'resilience',
  'First Responder': 'grounding',
  Retiree: 'peace',
  Freelancer: 'balance',
  Athlete: 'performance'
};

document.getElementById('pathGrid').innerHTML = profs.map(p => `
  <div class="path-card" data-prof="${p}">
    <i class="fas fa-user"></i>
    <span>${p}</span>
    <small>${desc[p]}</small>
  </div>
`).join('');

document.querySelectorAll('.path-card').forEach(card => {
  card.addEventListener('click', () => {
    const prof = card.dataset.prof;
    showToast(`showing techniques for ${prof}`);
    renderTechniques('all', prof);
    showView('techniques');
  });
});

// ================================
// 8. VIEW NAVIGATION
// ================================
const views = {
  home: 'homeView',
  techniques: 'techniquesView',
  quotes: 'quotesView',
  diary: 'diaryView',
  social: 'socialView',
  chat: 'chatView',
  audio: 'audioView',
  challenges: 'challengesView',
  timer: 'timerView',
  plan: 'planView',
  profile: 'profileView',
  enhancedProfile: 'enhancedProfileView'
};

function showView(viewName) {
  Object.values(views).forEach(id => document.getElementById(id).classList.add('hidden'));
  document.getElementById(views[viewName]).classList.remove('hidden');
  document.querySelectorAll('.top-nav a').forEach(a => a.classList.remove('active'));
  document.querySelector(`.top-nav a[data-view="${viewName}"]`)?.classList.add('active');
}

document.querySelectorAll('[data-view]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    showView(el.dataset.view);
  });
});

// ================================
// 9. TIMER
// ================================
let timerSeconds = 300;
let timerInterval;
let timerRunning = false;
const timerDisplay = document.getElementById('timerDisplay');
const timerMessage = document.getElementById('timerMessage');

document.querySelectorAll('.timer-pill').forEach(btn => {
  btn.addEventListener('click', function() {
    timerSeconds = parseInt(this.dataset.minutes) * 60;
    timerDisplay.textContent = new Date(timerSeconds * 1000).toISOString().substr(14, 5);
  });
});

document.getElementById('startTimer').addEventListener('click', () => {
  if (timerRunning) return;
  timerRunning = true;
  timerInterval = setInterval(() => {
    if (timerSeconds > 0) {
      timerSeconds--;
      timerDisplay.textContent = new Date(timerSeconds * 1000).toISOString().substr(14, 5);
    } else {
      clearInterval(timerInterval);
      timerRunning = false;
      user.totalPractices++;
      user.totalMinutes += 5;
      user.xp += 10;
      const today = new Date().toDateString();
      if (user.lastPracticeDate !== today) {
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        if (user.lastPracticeDate === yesterday) user.streak++;
        else user.streak = 1;
        user.lastPracticeDate = today;
      }
      updateStorage();
      timerMessage.textContent = 'complete! +10xp';
      showToast('meditation complete! +10xp');
    }
  }, 1000);
});

document.getElementById('pauseTimer').addEventListener('click', () => {
  clearInterval(timerInterval);
  timerRunning = false;
});

document.getElementById('resetTimer').addEventListener('click', () => {
  clearInterval(timerInterval);
  timerRunning = false;
  timerSeconds = 300;
  timerDisplay.textContent = '05:00';
  timerMessage.textContent = '';
});

// ================================
// 10. AUDIO PLAYER
// ================================
const audio = new Audio();
let currentTrack = 0;
const tracks = [
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
];

document.querySelectorAll('.track-item').forEach((el, i) => {
  el.addEventListener('click', () => {
    currentTrack = i;
    audio.src = tracks[i];
    audio.play();
    document.getElementById('playPauseBtn').innerHTML = '<i class="fas fa-pause"></i>';
    document.getElementById('trackName').innerText = el.innerText.split(' ')[1];
    showToast(`playing: ${el.innerText}`);
  });
});

document.getElementById('playPauseBtn').addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    document.getElementById('playPauseBtn').innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    audio.pause();
    document.getElementById('playPauseBtn').innerHTML = '<i class="fas fa-play"></i>';
  }
});

audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    const percent = (audio.currentTime / audio.duration) * 100;
    document.getElementById('audioProgressFill').style.width = percent + '%';
  }
});

// ================================
// 11. DIARY
// ================================
document.getElementById('saveDiaryEntry').addEventListener('click', () => {
  const txt = document.getElementById('diaryEntryText').value.trim();
  if (txt) {
    user.diary.push({ date: new Date(), text: txt });
    updateStorage();
    renderDiary();
    document.getElementById('diaryEntryText').value = '';
    showToast('diary entry saved');
  }
});

function renderDiary() {
  const list = document.getElementById('diaryEntriesList');
  if (!list) return;
  list.innerHTML = user.diary.slice().reverse().map(e => `
    <div class="diary-entry">
      <div class="diary-entry-header">${new Date(e.date).toLocaleDateString()}</div>
      <p>${e.text}</p>
    </div>
  `).join('');
}
renderDiary();

// ================================
// 12. QUOTES
// ================================
const quotes = [
  { text: "Meditation is not a way to make your mind quiet. It is a way to enter into the quiet that is already there.", author: "Osho" },
  { text: "The mind is a continuous chattering. Meditation is the state of no-mind.", author: "Osho" },
  { text: "Witnessing is the greatest miracle.", author: "Osho" }
];
document.getElementById('quoteContainer').innerHTML = quotes.map(q => `
  <div class="quote-card">
    <div>“${q.text}”</div>
    <div>— ${q.author}</div>
  </div>
`).join('');

// ================================
// 13. CHAT (MOCK)
// ================================
const friends = [
  { id: 1, name: 'Sarah', avatar: 'S', status: 'online' },
  { id: 2, name: 'Michael', avatar: 'M', status: 'online' },
  { id: 3, name: 'Elena', avatar: 'E', status: 'offline' }
];
function renderFriends() {
  const list = document.getElementById('friendsList');
  if (!list) return;
  list.innerHTML = friends.map(f => `
    <div class="friend-card" data-id="${f.id}">
      <div class="friend-avatar">${f.avatar}</div>
      <div>
        <div class="friend-name">${f.name}</div>
        <div>${f.status}</div>
      </div>
    </div>
  `).join('');
}
renderFriends();

// ================================
// 14. SOCIAL FEED
// ================================
let posts = JSON.parse(localStorage.getItem('posts')) || [
  { user: 'Sarah', avatar: 'S', content: 'just finished 20min of dynamic meditation – felt so alive!', time: Date.now() - 3600000, likes: 5 }
];

function renderFeed() {
  const feedDiv = document.getElementById('feedPosts');
  if (!feedDiv) return;
  feedDiv.innerHTML = posts.map(p => `
    <div class="feed-post">
      <div class="post-header">
        <div class="post-avatar">${p.avatar}</div>
        <strong>${p.user}</strong>
        <span class="post-time">${new Date(p.time).toLocaleString()}</span>
      </div>
      <div>${p.content}</div>
      <div class="post-actions">
        <i class="far fa-heart"></i> ${p.likes}
      </div>
    </div>
  `).join('');
}
renderFeed();

document.getElementById('postBtn').addEventListener('click', () => {
  const text = document.getElementById('newPostText').value.trim();
  if (text) {
    posts.unshift({ user: 'You', avatar: '👤', content: text, time: Date.now(), likes: 0 });
    localStorage.setItem('posts', JSON.stringify(posts));
    renderFeed();
    document.getElementById('newPostText').value = '';
    showToast('post shared');
  }
});

// ================================
// 15. PLAN
// ================================
function renderPlan() {
  const container = document.getElementById('planItems');
  if (!container) return;
  container.innerHTML = '';
  let total = 0;
  user.plan.forEach(id => {
    if (techniques[id]) {
      total += 15;
      const div = document.createElement('div');
      div.className = 'plan-item';
      div.innerHTML = `
        <div>
          <h4>${techniques[id].name}</h4>
          <p>15 min</p>
        </div>
        <span class="plan-item-price">+15 min</span>
        <button class="remove-btn" data-id="${id}"><i class="fas fa-times"></i></button>
      `;
      div.querySelector('.remove-btn').addEventListener('click', () => {
        user.plan = user.plan.filter(i => i !== id);
        updateStorage();
        renderPlan();
        showToast('removed from plan');
      });
      container.appendChild(div);
    }
  });
  document.getElementById('planTotal').innerText = total;
}
renderPlan();

document.getElementById('applyPromoBtn').addEventListener('click', () => {
  showToast('promo code applied (demo)');
});

// ================================
// 16. NOTIFICATIONS
// ================================
document.getElementById('notifBell').addEventListener('click', () => {
  showToast('🔔 5 notifications');
});

// ================================
// 17. BREATHING WIDGET
// ================================
const widget = document.getElementById('breathingWidget');
const circle = document.getElementById('breathCircleWidget');
const phase = document.getElementById('breathPhaseWidget');
let breathInterval, breathPhase = 'inhale', breathTime = 4, breathRunning = false;

document.getElementById('fabBreath').addEventListener('click', () => {
  widget.style.display = widget.style.display === 'flex' ? 'none' : 'flex';
});

document.getElementById('toggleBreathWidget').addEventListener('click', () => {
  if (breathRunning) {
    clearInterval(breathInterval);
    breathRunning = false;
    document.getElementById('toggleBreathWidget').textContent = 'start';
  } else {
    breathRunning = true;
    document.getElementById('toggleBreathWidget').textContent = 'stop';
    breathInterval = setInterval(() => {
      breathTime--;
      if (breathTime <= 0) {
        if (breathPhase === 'inhale') { breathPhase = 'hold'; breathTime = 4; }
        else if (breathPhase === 'hold') { breathPhase = 'exhale'; breathTime = 6; }
        else { breathPhase = 'inhale'; breathTime = 4; }
      }
      phase.textContent = breathPhase;
      circle.textContent = breathTime;
      if (breathPhase === 'inhale') {
        circle.style.transform = `scale(${0.5 + (4 - breathTime) / 4 * 0.5})`;
      } else if (breathPhase === 'exhale') {
        circle.style.transform = `scale(${1 - (4 - breathTime) / 4 * 0.5})`;
      }
    }, 1000);
  }
});

document.getElementById('breathPatternBtn').addEventListener('click', () => {
  showToast('4‑4‑6 pattern (inhale‑hold‑exhale)');
});

// ================================
// 18. SCROLL TO TOP
// ================================
const scrollBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
  scrollBtn.style.opacity = window.scrollY > 200 ? '1' : '0';
});
scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ================================
// 19. THEME TOGGLE
// ================================
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  const d = document.documentElement;
  const cur = d.getAttribute('data-theme');
  const newTheme = cur === 'dark' ? 'light' : 'dark';
  d.setAttribute('data-theme', newTheme);
  themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
  localStorage.setItem('theme', newTheme);
});

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';

// ================================
// 20. CHART (Enhanced Profile)
// ================================
const ctx = document.getElementById('progressChart')?.getContext('2d');
if (ctx) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'minutes',
        data: [20, 35, 15, 40, 25, 50, 30],
        borderColor: '#9d7bff',
        tension: 0.3
      }]
    }
  });
}

// ================================
// 21. INITIALIZATION
// ================================
renderFeatured();
updateStorage();
showView('home');

document.getElementById('exploreBtn').addEventListener('click', () => showView('techniques'));
document.getElementById('dailyBtn').addEventListener('click', () => {
  const ids = Object.keys(techniques);
  const randomId = ids[Math.floor(Math.random() * ids.length)];
  alert(`Today's technique: ${techniques[randomId].name}`);
});
