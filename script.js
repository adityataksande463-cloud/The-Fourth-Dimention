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

/**
 * ==================================================================
 * VIGYAN BHAIRAV · 30 TECHNIQUES
 * Pure Imagination – A Living Database of Meditations
 * ==================================================================
 * Each technique is a doorway: with name, essence, steps, benefits,
 * and breath-timing for the visualizer. Crafted from the ancient
 * text, ready for the modern seeker.
 * 
 * "In the pause between breaths, the universe reveals itself."
 * ==================================================================
 */

const techniques = {
  1: {
    id: 1,
    name: 'Witnessing the Breath',
    sanskritName: 'Śvāsa–Praśvāsa Dharana',
    essence: 'Breath awareness anchors consciousness in the present moment.',
    steps: [
      'Take a slow inhale through the nose – 4 seconds.',
      'Take a slow exhale through the nose – 4–5 seconds.',
      'Do not force breathing. Let it become natural.',
      'Bring full attention to the breath: feel air entering and leaving the nostrils.',
      'If thoughts appear, gently return to breath.'
    ],
    duration: '10–20 minutes',
    breathTiming: { inhale: 4, exhale: 4 },  // initial pattern, then natural
    benefits: {
      student: '📚 Improves concentration and memory – ideal for studies.',
      employee: '💼 Reduces workplace stress and increases focus.',
      anxious: '🌿 Calms the nervous system and stabilizes emotions.',
      overthinker: '🧠 Quiets mental chatter.',
      beginner: '🌈 Perfect introduction to meditation.'
    },
    tags: ['beginner', 'breath', 'student', 'employee', 'anxious']
  },

  2: {
    id: 2,
    name: 'Awareness of the Gap Between Breaths',
    sanskritName: 'Madhya Dharana',
    essence: 'The doorway to stillness lies in the pause between breaths.',
    steps: [
      'Inhale slowly – 4–5 seconds.',
      'At the top of inhalation, notice the tiny pause.',
      'Exhale slowly – 4–5 seconds.',
      'At the end of exhalation, notice another pause.',
      'Focus on those two silent gaps. Do not hold breath intentionally; just observe.'
    ],
    duration: '15 minutes',
    breathTiming: { inhale: 4, exhale: 4 },  // pause is natural, no hold
    benefits: {
      ceo: '🔮 Accesses deep intuition beyond logic.',
      seeker: '∞ Opens to the formless dimension.',
      overthinker: '⏸️ Breaks the chain of thoughts.',
      advanced: '🌌 Leads to profound stillness.'
    },
    tags: ['advanced', 'breath', 'ceo', 'seeker', 'overthinker']
  },

  3: {
    id: 3,
    name: 'Breath Traveling Through the Spine',
    sanskritName: 'Sushumna Dharana',
    essence: 'Breath carries awareness through the body’s central channel.',
    steps: [
      'Sit with spine very straight.',
      'Inhale slowly (5 sec): imagine energy moving from base of spine to top of head.',
      'Hold breath gently (2 sec).',
      'Exhale slowly (5 sec): imagine energy flowing from head back to base of spine.',
      'Repeat continuously.'
    ],
    duration: '10–15 minutes',
    breathTiming: { inhale: 5, hold: 2, exhale: 5 },
    benefits: {
      student: '⚡ Improves focus and vitality.',
      employee: '🌀 Increases energy and reduces fatigue.',
      seeker: '🌟 Awakens subtle body awareness.',
      beginner: '🌱 Builds concentration.'
    },
    tags: ['breath', 'energy', 'spine', 'intermediate']
  },

  4: {
    id: 4,
    name: 'Concentration on the Third Eye',
    sanskritName: 'Bhrūmadhya Dharana',
    essence: 'Attention becomes powerful when gathered in one point.',
    steps: [
      'Sit comfortably, eyes closed.',
      'Bring attention to the point between eyebrows.',
      'Do not strain your eyes.',
      'Breathe naturally.',
      'If thoughts arise, gently bring attention back.'
    ],
    duration: '10–20 minutes',
    breathTiming: null,
    benefits: {
      student: '🎯 Powerful concentration training – improves memory.',
      employee: '🧠 Increases mental stability.',
      seeker: '🔮 Deepens meditation and intuition.',
      overthinker: '🧘 Focuses scattered thoughts.'
    },
    tags: ['focus', 'third eye', 'intermediate', 'student', 'overthinker']
  },

  5: {
    id: 5,
    name: 'Witnessing Thoughts',
    sanskritName: 'Sākṣī Bhāva',
    essence: 'You are the observer, not the thinker.',
    steps: [
      'Sit comfortably with eyes closed.',
      'Relax your breathing.',
      'Watch thoughts as they appear – do not suppress or follow.',
      'Just observe each thought disappear.',
      'Continue observing the next thought.'
    ],
    duration: '15 minutes',
    breathTiming: null,
    benefits: {
      overthinker: '🧘 Freedom from overthinking.',
      anxious: '🌊 Emotional stability.',
      ceo: '🎯 Improved clarity and decision-making.',
      seeker: '💫 Deeper self-awareness.'
    },
    tags: ['witness', 'mindfulness', 'intermediate', 'overthinker', 'anxious']
  },

  6: {
    id: 6,
    name: 'Listening to External Sounds Without Labeling',
    sanskritName: 'Śabda Dharana',
    essence: 'Sound becomes a gateway to silence when the mind stops labeling it.',
    steps: [
      'Sit comfortably in a natural environment.',
      'Relax your breathing.',
      'Listen to all surrounding sounds – wind, traffic, birds, footsteps.',
      'Do not name the sounds; experience them as raw vibration.',
      'Let sounds come to you naturally.'
    ],
    duration: '15–20 minutes',
    breathTiming: null,
    benefits: {
      employee: '👂 Reduces mental chatter and improves focus.',
      student: '🔊 Enhances sensory awareness.',
      anxious: '🌿 Calms the mind through open listening.',
      beginner: '🎧 Easy entry to mindfulness.'
    },
    tags: ['sound', 'mindfulness', 'beginner', 'employee', 'anxious']
  },

  7: {
    id: 7,
    name: 'Inner Sound Meditation',
    sanskritName: 'Anāhata Nāda Dharana',
    essence: 'Within silence the body itself produces subtle sound.',
    steps: [
      'Sit in a quiet room, spine straight.',
      'Gently close your ears with fingers or earplugs.',
      'Bring attention inside the head.',
      'Listen carefully – you may hear humming, ringing, buzzing.',
      'Do not analyze; simply listen deeply.'
    ],
    duration: '10–15 minutes',
    breathTiming: null,
    benefits: {
      seeker: '🎵 Deep inward awareness.',
      advanced: '🌀 Quiets mental noise.',
      mystic: '✨ Prepares mind for deep meditation.'
    },
    tags: ['sound', 'inner', 'advanced', 'seeker']
  },

  8: {
    id: 8,
    name: 'Gazing Into Darkness',
    sanskritName: 'Śūnya Dharana',
    essence: 'Darkness is not empty – it is a field of awareness.',
    steps: [
      'Sit comfortably, eyes closed gently.',
      'Observe the dark space behind the eyelids.',
      'Do not imagine anything.',
      'Watch the darkness like a sky – ignore any patterns or lights.',
      'Stay with the background darkness.'
    ],
    duration: '15 minutes',
    breathTiming: null,
    benefits: {
      overthinker: '🌑 Deep relaxation and quiet mind.',
      anxious: '🌙 Calms the nervous system.',
      seeker: '🌟 Increases inner awareness.',
      beginner: '🌌 Easy and profound.'
    },
    tags: ['darkness', 'stillness', 'beginner', 'overthinker', 'anxious']
  },

  9: {
    id: 9,
    name: 'Sudden Awareness Technique',
    sanskritName: 'Kṣaṇika Smriti',
    essence: 'A moment of full awareness can break hours of unconscious living.',
    steps: [
      'During daily life, suddenly stop whatever you are doing.',
      'Become aware of your body, breathing, surroundings, sounds, posture.',
      'Observe everything simultaneously for 5–10 seconds.',
      'Then continue your activity.',
      'Practice 10–20 times per day – while walking, studying, eating, using phone.'
    ],
    duration: '5–10 seconds per session',
    breathTiming: null,
    benefits: {
      employee: '⏰ Powerful mindfulness training in daily life.',
      student: '📚 Breaks unconscious habits.',
      ceo: '💡 Increases presence and awareness.'
    },
    tags: ['mindfulness', 'daily life', 'beginner', 'employee', 'student']
  },

  10: {
    id: 10,
    name: 'Mantra with Breath',
    sanskritName: 'So-Ham Dharana',
    essence: 'Breath and awareness become one continuous flow.',
    steps: [
      'Sit comfortably.',
      'Inhale slowly (4 sec) and silently think “So”.',
      'Exhale slowly (5 sec) and silently think “Ham”.',
      'Continue naturally, letting the mantra synchronize with breath.',
      'With practice, the mantra becomes automatic.'
    ],
    duration: '15–20 minutes',
    breathTiming: { inhale: 4, exhale: 5 },
    benefits: {
      student: '🔤 Deep concentration and memory.',
      employee: '🧘 Emotional balance and calm.',
      anxious: '🌊 Calms nervous system.',
      seeker: '🕉️ Connects breath with mantra.'
    },
    tags: ['mantra', 'breath', 'beginner', 'student', 'anxious']
  },

  11: {
    id: 11,
    name: 'Sky Awareness Meditation',
    sanskritName: 'Ākāśa Dharana',
    essence: 'Mind becomes as vast and open as the sky.',
    steps: [
      'Sit or stand where you can see the open sky.',
      'Relax the eyes and gaze softly into the vast sky.',
      'Do not focus on any object like clouds or birds.',
      'Breathe slowly and naturally.',
      'Let your awareness expand with the vastness of the sky.'
    ],
    duration: '10–20 minutes',
    breathTiming: { inhale: 4, exhale: 5 },
    benefits: {
      overthinker: '🌤️ Expands awareness, reduces mental pressure.',
      employee: '🌥️ Induces deep calmness.',
      seeker: '🌦️ Improves concentration.'
    },
    tags: ['gaze', 'sky', 'beginner', 'overthinker', 'employee']
  },

  12: {
    id: 12,
    name: 'Candle Flame Concentration',
    sanskritName: 'Trataka Dharana',
    essence: 'Single-pointed focus stabilizes the mind.',
    steps: [
      'Place a candle at eye level about 1–1.5 meters away.',
      'Sit with a straight spine.',
      'Gaze steadily at the flame without blinking.',
      'If tears come, gently close eyes and visualize the flame internally.',
      'Open eyes and continue gazing.'
    ],
    duration: '5–15 minutes',
    breathTiming: null,
    benefits: {
      student: '🔥 Strong concentration and memory.',
      ceo: '🎯 Improves focus and decision clarity.',
      overthinker: '🧠 Calms mental restlessness.'
    },
    tags: ['gaze', 'trataka', 'intermediate', 'student', 'ceo']
  },

  13: {
    id: 13,
    name: 'Heart Center Meditation',
    sanskritName: 'Hridaya Dharana',
    essence: 'Awareness in the heart awakens inner harmony.',
    steps: [
      'Sit comfortably with eyes closed.',
      'Place awareness in the center of the chest (heart area).',
      'Breathe slowly and gently.',
      'Feel the subtle sensation or warmth in the heart region.',
      'Remain aware of this center.'
    ],
    duration: '15–20 minutes',
    breathTiming: { inhale: 5, exhale: 5 },
    benefits: {
      employee: '❤️ Emotional balance and reduced stress.',
      seeker: '🌟 Compassion and empathy.',
      anxious: '🌿 Inner calmness.'
    },
    tags: ['heart', 'emotion', 'intermediate', 'employee', 'seeker']
  },

  14: {
    id: 14,
    name: 'Body Sensation Awareness',
    sanskritName: 'Sharira Smriti Dharana',
    essence: 'Conscious awareness dissolves bodily tension.',
    steps: [
      'Sit or lie down comfortably.',
      'Close the eyes.',
      'Slowly move awareness through the body: head → neck → shoulders → arms → chest → abdomen → legs → feet.',
      'Observe sensations without reacting.',
      'Feel each part with gentle attention.'
    ],
    duration: '15–20 minutes',
    breathTiming: null,
    benefits: {
      employee: '🧘 Deep relaxation, reduces physical tension.',
      anxious: '🌊 Calms nervous system.',
      beginner: '🦶 Improves body awareness.'
    },
    tags: ['body scan', 'relaxation', 'beginner', 'employee', 'anxious']
  },

  15: {
    id: 15,
    name: 'Slow Breath Meditation',
    sanskritName: 'Prāṇa Śānti Dharana',
    essence: 'Slow breath creates a calm and steady mind.',
    steps: [
      'Sit with spine straight.',
      'Slowly inhale through the nose (5 sec).',
      'Slowly exhale through the nose, slightly longer than inhale (7 sec).',
      'Maintain a smooth, gentle rhythm.',
      'Continue for 10–20 minutes.'
    ],
    duration: '10–20 minutes',
    breathTiming: { inhale: 5, exhale: 7 },
    benefits: {
      anxious: '🌬️ Deep relaxation, reduces anxiety.',
      employee: '🧘 Improves oxygen efficiency.',
      overthinker: '🌊 Stabilizes mind.'
    },
    tags: ['breath', 'calming', 'beginner', 'anxious', 'employee']
  },

  16: {
    id: 16,
    name: 'Walking Awareness Meditation',
    sanskritName: 'Chalana Smriti Dharana',
    essence: 'Every step becomes an act of awareness.',
    steps: [
      'Walk slowly in a quiet place.',
      'Keep spine straight and body relaxed.',
      'Bring full awareness to the movement of the feet.',
      'Feel the heel touching ground, then sole, then toes lifting.',
      'Synchronize breath naturally with steps.'
    ],
    duration: '10–20 minutes',
    breathTiming: null,
    benefits: {
      employee: '🚶 Improves mindfulness in daily life.',
      student: '🧠 Enhances body coordination.',
      anxious: '🌿 Reduces mental distraction.'
    },
    tags: ['walking', 'mindfulness', 'beginner', 'employee', 'anxious']
  },

  17: {
    id: 17,
    name: 'Observation of Emotions',
    sanskritName: 'Bhāva Avalokana Dharana',
    essence: 'Observing emotions dissolves their control over the mind.',
    steps: [
      'Sit comfortably, eyes closed.',
      'Bring attention to the present emotional state.',
      'If an emotion arises (anger, joy, sadness), observe it without suppression.',
      'Notice how it moves through the body.',
      'Allow it to dissolve naturally without reacting.'
    ],
    duration: '10–15 minutes',
    breathTiming: { inhale: 4, exhale: 5 },
    benefits: {
      employee: '🧘 Emotional stability and reduced impulsive reactions.',
      overthinker: '🌀 Greater self-understanding.',
      heart: '❤️ Increased mental clarity.'
    },
    tags: ['emotion', 'witness', 'intermediate', 'employee', 'overthinker']
  },

  18: {
    id: 18,
    name: 'Listening to Silence',
    sanskritName: 'Mauna Śravaṇa Dharana',
    essence: 'Silence is the background of all sound.',
    steps: [
      'Sit in a quiet environment.',
      'Close eyes and relax body.',
      'Listen to surrounding sounds first.',
      'Gradually shift attention to the silence behind the sounds.',
      'Remain aware of that silence.'
    ],
    duration: '15–20 minutes',
    breathTiming: null,
    benefits: {
      seeker: '🔇 Deep inner calm and heightened perception.',
      overthinker: '🌌 Reduces mental noise.',
      advanced: '🧘 Improves concentration.'
    },
    tags: ['silence', 'sound', 'advanced', 'seeker', 'overthinker']
  },

  19: {
    id: 19,
    name: 'Whole-Body Awareness',
    sanskritName: 'Sarva Sharira Bodha Dharana',
    essence: 'The body becomes a single field of awareness.',
    steps: [
      'Sit comfortably, eyes closed.',
      'Relax the entire body.',
      'Bring awareness to the body as a whole, not individual parts.',
      'Feel the entire body simultaneously as one field of sensation.',
      'Maintain steady awareness.'
    ],
    duration: '15 minutes',
    breathTiming: null,
    benefits: {
      employee: '🧘 Integration of body and mind, deep relaxation.',
      anxious: '🌊 Increased sensory awareness.',
      beginner: '🦶 Stabilizes attention.'
    },
    tags: ['body', 'awareness', 'beginner', 'employee', 'anxious']
  },

  20: {
    id: 20,
    name: 'Breath Touch Awareness',
    sanskritName: 'Nāsa Sparsha Dharana',
    essence: 'Subtle sensations anchor the mind in the present moment.',
    steps: [
      'Sit comfortably, eyes closed.',
      'Focus attention on the tip of the nose.',
      'Feel the sensation of air touching the nostrils during inhalation and exhalation.',
      'Maintain steady awareness of this subtle contact.'
    ],
    duration: '15–20 minutes',
    breathTiming: { inhale: 4, exhale: 5 },
    benefits: {
      student: '👃 Strong concentration and improved breath awareness.',
      overthinker: '🧠 Reduces mental wandering.',
      beginner: '🌬️ Increases mindfulness.'
    },
    tags: ['breath', 'focus', 'beginner', 'student', 'overthinker']
  },

  21: {
    id: 21,
    name: 'Expansion of Awareness',
    sanskritName: 'Vistāra Dharana',
    essence: 'Awareness is not limited to the body.',
    steps: [
      'Sit comfortably, eyes closed.',
      'Relax body completely.',
      'Become aware of your body and breathing.',
      'Gradually imagine your awareness expanding beyond the body.',
      'Extend this awareness into surrounding space, outward without limit.'
    ],
    duration: '15–20 minutes',
    breathTiming: { inhale: 5, exhale: 6 },
    benefits: {
      seeker: '🌌 Reduces feeling of limitation, expands perception.',
      ceo: '🎯 Creates deep calmness and mental openness.',
      advanced: '🌀 Improves meditation depth.'
    },
    tags: ['expansion', 'awareness', 'advanced', 'seeker', 'ceo']
  },

  22: {
    id: 22,
    name: 'Spine Awareness Meditation',
    sanskritName: 'Meru Smriti Dharana',
    essence: 'The spine becomes a pathway of awareness.',
    steps: [
      'Sit with spine straight.',
      'Close eyes and relax body.',
      'Bring awareness to the spinal column.',
      'Slowly move attention from base of spine upward to the neck.',
      'Repeat this upward and downward awareness along the spine.'
    ],
    duration: '15 minutes',
    breathTiming: { inhale: 5, exhale: 5 },
    benefits: {
      employee: '🧘 Improves posture and energy flow.',
      student: '⚡ Enhances body awareness and focus.'
    },
    tags: ['spine', 'energy', 'intermediate', 'employee', 'student']
  },

  23: {
    id: 23,
    name: 'Total Relaxation Meditation',
    sanskritName: 'Vishrānti Dharana',
    essence: 'Complete relaxation opens the mind to awareness.',
    steps: [
      'Lie down comfortably on your back.',
      'Close eyes.',
      'Relax each body part gradually: feet → legs → abdomen → chest → arms → neck → face.',
      'Release all muscular tension.',
      'Remain aware of the relaxed body.'
    ],
    duration: '15–20 minutes',
    breathTiming: null,
    benefits: {
      anxious: '🛌 Deep physical relaxation, stress reduction.',
      employee: '😴 Improves sleep quality.',
      beginner: '🌙 Releases body tension.'
    },
    tags: ['relaxation', 'body scan', 'beginner', 'anxious', 'employee']
  },

  24: {
    id: 24,
    name: 'Awareness at the Edge of Sleep',
    sanskritName: 'Nidra Anta Smriti Dharana',
    essence: 'Awareness continues even at the boundary of sleep.',
    steps: [
      'Lie down comfortably before sleep.',
      'Close eyes and relax body.',
      'Observe the mind as it slowly moves toward sleep.',
      'Watch thoughts and images appearing before sleep.',
      'Maintain awareness until sleep naturally occurs.'
    ],
    duration: 'Until sleep',
    breathTiming: null,
    benefits: {
      seeker: '🌙 Improves sleep awareness and dream recall.',
      anxious: '💤 Deep relaxation.',
      advanced: '🧘 Develops subtle mental observation.'
    },
    tags: ['sleep', 'awareness', 'advanced', 'seeker', 'anxious']
  },

  25: {
    id: 25,
    name: 'Momentary Breath Suspension',
    sanskritName: 'Kumbhaka Kṣaṇa Dharana',
    essence: 'Still breath creates still awareness.',
    steps: [
      'Sit with spine straight.',
      'Inhale deeply (5 sec).',
      'Hold breath gently for a short moment (3 sec).',
      'Observe the stillness inside the body.',
      'Slowly exhale (6 sec).',
      'Repeat.'
    ],
    duration: '10–15 minutes',
    breathTiming: { inhale: 5, hold: 3, exhale: 6 },
    benefits: {
      ceo: '⏸️ Deepens concentration and mental clarity.',
      seeker: '🌀 Increases inner stillness.',
      advanced: '🌌 Improves breath control.'
    },
    tags: ['breath', 'kumbhaka', 'advanced', 'ceo', 'seeker']
  },

  26: {
    id: 26,
    name: 'Awareness of Space Around the Body',
    sanskritName: 'Āvaraṇa Śūnya Dharana',
    essence: 'Awareness expands beyond the physical body.',
    steps: [
      'Sit with spine straight, eyes closed.',
      'First feel the body normally.',
      'Then shift awareness to the space surrounding the body.',
      'Sense the empty space around head, shoulders, entire body.',
      'Maintain awareness of this surrounding space rather than the body.'
    ],
    duration: '15–20 minutes',
    breathTiming: { inhale: 5, exhale: 6 },
    benefits: {
      seeker: '🌌 Expands spatial awareness, reduces body identification.',
      ceo: '🧘 Creates mental calmness.',
      advanced: '🌀 Improves meditation depth.'
    },
    tags: ['space', 'awareness', 'advanced', 'seeker', 'ceo']
  },

  27: {
    id: 27,
    name: 'Mindful Eating Meditation',
    sanskritName: 'Āhāra Smriti Dharana',
    essence: 'Eating becomes a conscious act of awareness.',
    steps: [
      'Sit calmly while eating.',
      'Observe the food carefully before eating.',
      'Take a small bite.',
      'Chew slowly, feeling texture and taste.',
      'Notice smell, flavor, and chewing movement.',
      'Eat without distraction or conversation.'
    ],
    duration: 'During the entire meal',
    breathTiming: null,
    benefits: {
      employee: '🍽️ Improves digestion and mindfulness.',
      student: '🧠 Prevents overeating, enhances sensory awareness.',
      beginner: '🥗 Develops present-moment attention.'
    },
    tags: ['mindfulness', 'eating', 'beginner', 'employee', 'student']
  },

  28: {
    id: 28,
    name: 'Present Moment Awareness',
    sanskritName: 'Vartamāna Smriti Dharana',
    essence: 'Complete awareness exists only in the present moment.',
    steps: [
      'Bring full attention to whatever activity you are doing.',
      'Observe body movement, breath, and environment simultaneously.',
      'Avoid thinking about past or future.',
      'Continue the activity with complete awareness.'
    ],
    duration: 'Throughout daily activities',
    breathTiming: null,
    benefits: {
      employee: '⏰ Improves focus and reduces mental stress.',
      student: '📚 Enhances productivity and mindfulness.',
      ceo: '🎯 Strengthens present-moment awareness.'
    },
    tags: ['mindfulness', 'daily life', 'beginner', 'employee', 'student']
  },

  29: {
    id: 29,
    name: 'Inner Light Meditation',
    sanskritName: 'Jyoti Antar Dharana',
    essence: 'Inner awareness reveals subtle light within consciousness.',
    steps: [
      'Sit comfortably, eyes closed.',
      'Focus attention behind the closed eyelids.',
      'Observe subtle light patterns appearing in the mind.',
      'Do not imagine or force any image.',
      'Simply watch the natural light phenomena.'
    ],
    duration: '15–20 minutes',
    breathTiming: { inhale: 4, exhale: 5 },
    benefits: {
      seeker: '✨ Deep inward concentration and subtle perception.',
      advanced: '🌟 Enhances mental clarity.',
      mystic: '🌀 Develops meditation depth.'
    },
    tags: ['light', 'inner', 'advanced', 'seeker', 'mystic']
  },

  30: {
    id: 30,
    name: 'Total Witnessing Meditation',
    sanskritName: 'Sākṣī Sarva Dharana',
    essence: 'Pure witnessing reveals the true nature of awareness.',
    steps: [
      'Sit comfortably, eyes closed.',
      'Observe breathing, thoughts, sensations, and sounds simultaneously.',
      'Do not interfere with any experience.',
      'Maintain the role of a silent observer.',
      'Allow everything to arise and pass naturally.'
    ],
    duration: '20 minutes',
    breathTiming: null,
    benefits: {
      seeker: '🧘 Deep self-awareness, freedom from mental attachment.',
      ceo: '🎯 Increased emotional stability.',
      advanced: '🌌 Advanced meditation state.'
    },
    tags: ['witness', 'awareness', 'advanced', 'seeker', 'ceo']
  }
};

// ==================================================================
// To use: replace the existing 'techniques' object in your script
// with this one. It integrates seamlessly with the existing
// AppState, UI, and BreathVisual modules. Each technique includes
// breathTiming where applicable, which triggers the breathing
// visualizer in the detail view.
// ==================================================================
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
/**
 * Gargantua Black Hole – Inspired by Interstellar
 * Pure canvas animation, responsive, with glowing accretion disk.
 */
(function initBlackHole() {
    const canvas = document.getElementById('blackholeCanvas');
    if (!canvas) return;

    let ctx = canvas.getContext('2d');
    let width, height;
    let time = 0;

    function resize() {
        const container = canvas.parentElement;
        width = container.clientWidth;
        height = container.clientHeight;
        canvas.width = width;
        canvas.height = height;
    }

    function drawBlackHole() {
        ctx.clearRect(0, 0, width, height);

        const centerX = width / 2;
        const centerY = height / 2;
        const maxRadius = Math.min(width, height) * 0.4; // 40% of smallest dimension

        // 1. Event Horizon (pure black sphere)
        const horizonRadius = maxRadius * 0.3;
        ctx.beginPath();
        ctx.arc(centerX, centerY, horizonRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#000000';
        ctx.shadowColor = '#000';
        ctx.shadowBlur = 30;
        ctx.fill();
        ctx.shadowBlur = 0;

        // 2. Inner accretion disk – hottest, brightest (white/yellow)
        const innerGradient = ctx.createRadialGradient(
            centerX, centerY, horizonRadius * 1.2,
            centerX, centerY, maxRadius * 0.6
        );
        innerGradient.addColorStop(0, 'rgba(255, 255, 200, 0.9)'); // white-hot
        innerGradient.addColorStop(0.3, 'rgba(255, 200, 100, 0.7)');
        innerGradient.addColorStop(0.6, 'rgba(200, 100, 50, 0.4)');
        innerGradient.addColorStop(1, 'rgba(100, 50, 20, 0)');

        ctx.beginPath();
        ctx.arc(centerX, centerY, maxRadius * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = innerGradient;
        ctx.fill();

        // 3. Outer accretion disk – cooler, more diffuse
        const outerGradient = ctx.createRadialGradient(
            centerX, centerY, maxRadius * 0.5,
            centerX, centerY, maxRadius * 0.9
        );
        outerGradient.addColorStop(0, 'rgba(150, 100, 255, 0.5)'); // purple/blue
        outerGradient.addColorStop(0.5, 'rgba(100, 50, 150, 0.3)');
        outerGradient.addColorStop(1, 'rgba(50, 20, 80, 0)');

        ctx.beginPath();
        ctx.arc(centerX, centerY, maxRadius * 0.9, 0, Math.PI * 2);
        ctx.fillStyle = outerGradient;
        ctx.fill();

        // 4. Accretion disk texture – swirling lines (simulated with arcs)
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(time * 0.02); // slow rotation

        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const radius1 = maxRadius * 0.5;
            const radius2 = maxRadius * 0.8;

            ctx.beginPath();
            ctx.arc(0, 0, radius1, angle, angle + 0.3);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(0, 0, radius2, angle, angle + 0.2);
            ctx.strokeStyle = 'rgba(200, 180, 255, 0.4)';
            ctx.lineWidth = 3;
            ctx.stroke();
        }

        // 5. Einstein ring – thin bright ring around the black hole
        ctx.beginPath();
        ctx.arc(0, 0, horizonRadius * 1.8, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 220, 150, 0.6)';
        ctx.lineWidth = 4;
        ctx.shadowColor = '#ffaa00';
        ctx.shadowBlur = 20;
        ctx.stroke();

        ctx.restore();

        // 6. Gravitational lensing effect – stretched stars (simulated with tiny arcs)
        ctx.shadowBlur = 0;
        for (let s = 0; s < 30; s++) {
            const dist = 0.3 + Math.random() * 0.6;
            const ang = Math.random() * Math.PI * 2;
            const x = centerX + Math.cos(ang) * maxRadius * dist;
            const y = centerY + Math.sin(ang) * maxRadius * dist;
            const lensFactor = 1 + (maxRadius / (Math.hypot(x - centerX, y - centerY) || 1)) * 0.5;
            ctx.beginPath();
            ctx.arc(x, y, 1 * lensFactor, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + Math.random() * 0.5})`;
            ctx.fill();
        }
    }

    function animate() {
        time += 1;
        drawBlackHole();
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        resize();
        drawBlackHole();
    });

    resize();
    animate();
})();
