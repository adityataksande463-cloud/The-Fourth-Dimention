/**
 * ==================================================================
 * VIGYAN BHAIRAV · EXPANDED PROFESSIONS DATABASE
 * 30 Techniques · 30 Professions · Tailored Benefits
 * ==================================================================
 * Each technique now includes benefits for multiple professions,
 * addressing the specific mental health needs of modern workers.
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
    breathTiming: { inhale: 4, exhale: 4 },
    benefits: {
      student: '📚 Improves concentration and memory – ideal for studies.',
      employee: '💼 Reduces workplace stress and increases focus.',
      anxious: '🌿 Calms the nervous system and stabilizes emotions.',
      overthinker: '🧠 Quiets mental chatter.',
      beginner: '🌈 Perfect introduction to meditation.',
      'software-developer': '💻 Reduces mental fatigue and improves focus during long coding sessions.',
      teacher: '🍎 Helps maintain calm in a chaotic classroom environment.',
      'healthcare-worker': '🏥 Provides a moment of stillness amidst trauma and long shifts.',
      'customer-service': '📞 Builds patience and emotional resilience with difficult customers.',
      entrepreneur: '🚀 Clears mental clutter for better decision-making.',
      journalist: '📝 Anchors attention during deadline pressure.',
      lawyer: '⚖️ Enhances focus during complex case analysis.',
      accountant: '🧮 Reduces stress from precision work and deadlines.',
      researcher: '🔬 Calms imposter syndrome and sharpens concentration.',
      'first-responder': '🚒 Provides grounding in high-stress emergencies.',
      athlete: '🏃 Improves performance through breath control.',
      parent: '👶 Offers a quick reset during chaotic parenting moments.',
      retiree: '👵 Brings peace and presence in the new phase of life.',
      unemployed: '🤝 Reduces anxiety about job searching and builds self-worth.',
      freelancer: '🎨 Helps manage work-life boundaries and isolation.',
      chef: '🍳 Cools down the heat of a busy kitchen.',
      driver: '🚗 Reduces road rage and increases alertness.',
      musician: '🎵 Enhances focus during practice and performance.',
      therapist: '🛋️ Prevents burnout through self-awareness.',
      'it-support': '🖥️ Calms frustration with repetitive user issues.'
    },
    tags: ['beginner', 'breath', 'student', 'employee', 'anxious', 'software-developer', 'teacher', 'healthcare-worker', 'customer-service', 'entrepreneur', 'journalist', 'lawyer', 'accountant', 'researcher', 'first-responder', 'athlete', 'parent', 'retiree', 'unemployed', 'freelancer', 'chef', 'driver', 'musician', 'therapist', 'it-support']
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
    breathTiming: { inhale: 4, exhale: 4 },
    benefits: {
      ceo: '🔮 Accesses deep intuition beyond logic.',
      seeker: '∞ Opens to the formless dimension.',
      overthinker: '⏸️ Breaks the chain of thoughts.',
      advanced: '🌌 Leads to profound stillness.',
      entrepreneur: '💡 Enhances creative problem-solving by accessing the gap.',
      'corporate-executive': '🏢 Provides clarity in high-pressure decisions.',
      artist: '🎨 Unlocks creative flow by resting in the pause.',
      researcher: '🔍 Helps overcome mental blocks in research.',
      lawyer: '⚖️ Allows strategic thinking between arguments.',
      musician: '🎶 Creates space for improvisation.',
      therapist: '🛋️ Deepens presence with clients.',
      'software-developer': '💻 Breaks the cycle of over-engineering.',
      writer: '✍️ Overcomes writer’s block by resting in silence.'
    },
    tags: ['advanced', 'breath', 'ceo', 'seeker', 'overthinker', 'entrepreneur', 'corporate-executive', 'artist', 'researcher', 'lawyer', 'musician', 'therapist', 'software-developer', 'writer']
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
      beginner: '🌱 Builds concentration.',
      'healthcare-worker': '🏥 Restores energy after long shifts.',
      athlete: '🏋️ Enhances body awareness and performance.',
      driver: '🚛 Reduces physical strain from long hours.',
      construction: '🪚 Increases stamina and reduces fatigue.',
      chef: '🍳 Boosts energy during peak hours.',
      musician: '🎸 Improves posture and breath support.',
      parent: '👨‍👩‍👧 Recharges during demanding days.',
      retiree: '🧘 Maintains spinal health and vitality.'
    },
    tags: ['breath', 'energy', 'spine', 'intermediate', 'student', 'employee', 'seeker', 'healthcare-worker', 'athlete', 'driver', 'construction', 'chef', 'musician', 'parent', 'retiree']
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
      overthinker: '🧘 Focuses scattered thoughts.',
      'software-developer': '💻 Sharpens focus for debugging.',
      researcher: '🔬 Enhances analytical thinking.',
      accountant: '🧮 Improves attention to detail.',
      lawyer: '⚖️ Boosts concentration during case prep.',
      journalist: '📝 Helps maintain focus on complex stories.',
      'it-support': '🖥️ Increases problem-solving efficiency.',
      entrepreneur: '🚀 Clarifies vision and goals.',
      artist: '🎨 Deepens creative concentration.'
    },
    tags: ['focus', 'third eye', 'intermediate', 'student', 'employee', 'overthinker', 'software-developer', 'researcher', 'accountant', 'lawyer', 'journalist', 'it-support', 'entrepreneur', 'artist']
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
      seeker: '💫 Deeper self-awareness.',
      'software-developer': '💻 Breaks rumination on code issues.',
      teacher: '🍎 Reduces emotional reactivity in class.',
      'healthcare-worker': '🏥 Helps process traumatic experiences.',
      'customer-service': '📞 Builds emotional detachment from rude customers.',
      entrepreneur: '🚀 Quiets the inner critic.',
      artist: '🎨 Overcomes self-doubt.',
      therapist: '🛋️ Essential for maintaining boundaries.',
      parent: '👶 Reduces guilt and judgment.',
      unemployed: '🤝 Builds self-worth beyond job status.',
      freelancer: '🎨 Manages fear of failure.'
    },
    tags: ['witness', 'mindfulness', 'intermediate', 'overthinker', 'anxious', 'ceo', 'seeker', 'software-developer', 'teacher', 'healthcare-worker', 'customer-service', 'entrepreneur', 'artist', 'therapist', 'parent', 'unemployed', 'freelancer']
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
      beginner: '🎧 Easy entry to mindfulness.',
      'customer-service': '📞 Helps detach from angry voices.',
      journalist: '📻 Improves active listening in interviews.',
      musician: '🎵 Develops deeper listening skills.',
      therapist: '🛋️ Enhances presence with clients.',
      teacher: '🍎 Increases awareness of classroom dynamics.',
      'first-responder': '🚒 Improves situational awareness.',
      driver: '🚗 Reduces road rage by accepting sounds.',
      retiree: '👵 Connects with nature and reduces loneliness.'
    },
    tags: ['sound', 'mindfulness', 'beginner', 'employee', 'anxious', 'customer-service', 'journalist', 'musician', 'therapist', 'teacher', 'first-responder', 'driver', 'retiree']
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
      mystic: '✨ Prepares mind for deep meditation.',
      musician: '🎶 Enhances inner hearing and pitch.',
      researcher: '🔬 Develops sustained attention.',
      artist: '🎨 Connects to creative source.',
      retiree: '👵 Provides inner companionship.',
      therapist: '🛋️ Deepens self-awareness for better guidance.'
    },
    tags: ['sound', 'inner', 'advanced', 'seeker', 'musician', 'researcher', 'artist', 'retiree', 'therapist']
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
      beginner: '🌌 Easy and profound.',
      'software-developer': '💻 Reduces eye strain and mental fatigue.',
      driver: '🚗 Helps rest eyes during breaks.',
      'healthcare-worker': '🏥 Quick reset between shifts.',
      parent: '👶 Moment of stillness amid chaos.',
      freelancer: '🎨 Recharges creativity.',
      retiree: '👵 Comforts with inner vastness.'
    },
    tags: ['darkness', 'stillness', 'beginner', 'overthinker', 'anxious', 'software-developer', 'driver', 'healthcare-worker', 'parent', 'freelancer', 'retiree']
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
      ceo: '💡 Increases presence and awareness.',
      'software-developer': '💻 Prevents autopilot coding and bugs.',
      teacher: '🍎 Stays present with students.',
      'customer-service': '📞 Resets between calls.',
      driver: '🚗 Increases alertness on long drives.',
      chef: '🍳 Stays mindful during prep.',
      construction: '🪚 Enhances safety awareness.',
      retail: '🛍️ Improves customer interactions.',
      parent: '👶 Brings presence to parenting.',
      freelancer: '🎨 Breaks procrastination cycles.'
    },
    tags: ['mindfulness', 'daily life', 'beginner', 'employee', 'student', 'ceo', 'software-developer', 'teacher', 'customer-service', 'driver', 'chef', 'construction', 'retail', 'parent', 'freelancer']
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
      seeker: '🕉️ Connects breath with mantra.',
      'healthcare-worker': '🏥 Portable calm during shifts.',
      musician: '🎵 Improves rhythm and breath.',
      athlete: '🏃 Enhances performance through breath-mantra sync.',
      parent: '👶 Provides quick centering.',
      retiree: '👵 Brings peace and purpose.'
    },
    tags: ['mantra', 'breath', 'beginner', 'student', 'anxious', 'employee', 'seeker', 'healthcare-worker', 'musician', 'athlete', 'parent', 'retiree']
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
      seeker: '🌦️ Improves concentration.',
      entrepreneur: '🚀 Provides perspective on challenges.',
      artist: '🎨 Inspires creativity through vastness.',
      freelancer: '🎈 Reduces isolation by connecting to openness.',
      retiree: '👵 Offers a sense of freedom.',
      unemployed: '🤝 Expands vision beyond job search.',
      driver: '🚗 Relaxes on breaks.',
      construction: '🪚 Provides mental escape from physical labor.'
    },
    tags: ['gaze', 'sky', 'beginner', 'overthinker', 'employee', 'seeker', 'entrepreneur', 'artist', 'freelancer', 'retiree', 'unemployed', 'driver', 'construction']
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
      overthinker: '🧠 Calms mental restlessness.',
      'software-developer': '💻 Enhances debugging focus.',
      researcher: '🔬 Develops sustained attention.',
      accountant: '🧮 Improves accuracy.',
      lawyer: '⚖️ Sharpens case analysis.',
      artist: '🎨 Deepens creative focus.',
      musician: '🎵 Improves practice discipline.'
    },
    tags: ['gaze', 'trataka', 'intermediate', 'student', 'ceo', 'overthinker', 'software-developer', 'researcher', 'accountant', 'lawyer', 'artist', 'musician']
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
      anxious: '🌿 Inner calmness.',
      'healthcare-worker': '🏥 Prevents compassion fatigue.',
      teacher: '🍎 Cultivates patience and empathy.',
      therapist: '🛋️ Essential for maintaining compassion.',
      parent: '👶 Deepens connection with children.',
      'social-worker': '🤝 Protects against burnout.',
      'customer-service': '📞 Builds genuine empathy.',
      entrepreneur: '🚀 Aligns business with heart values.'
    },
    tags: ['heart', 'emotion', 'intermediate', 'employee', 'seeker', 'anxious', 'healthcare-worker', 'teacher', 'therapist', 'parent', 'social-worker', 'customer-service', 'entrepreneur']
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
      beginner: '🦶 Improves body awareness.',
      'software-developer': '💻 Relieves neck and shoulder tension.',
      driver: '🚗 Reduces back pain from long hours.',
      construction: '🪚 Prevents chronic pain.',
      chef: '🍳 Eases foot and back strain.',
      musician: '🎵 Releases performance tension.',
      athlete: '🏃 Enhances body awareness and injury prevention.',
      parent: '👶 Relaxes after carrying children.'
    },
    tags: ['body scan', 'relaxation', 'beginner', 'employee', 'anxious', 'software-developer', 'driver', 'construction', 'chef', 'musician', 'athlete', 'parent']
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
      overthinker: '🌊 Stabilizes mind.',
      'healthcare-worker': '🏥 Quick stress relief between patients.',
      'first-responder': '🚒 Calms after emergencies.',
      athlete: '🏃 Improves endurance and recovery.',
      musician: '🎵 Enhances breath control.',
      speaker: '🎤 Reduces stage fright.',
      parent: '👶 Soothes during stressful moments.'
    },
    tags: ['breath', 'calming', 'beginner', 'anxious', 'employee', 'overthinker', 'healthcare-worker', 'first-responder', 'athlete', 'musician', 'speaker', 'parent']
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
      anxious: '🌿 Reduces mental distraction.',
      retiree: '👵 Gentle exercise and mindfulness.',
      freelancer: '🎨 Breaks sedentary cycles.',
      driver: '🚗 Reconnects with body after long drives.',
      construction: '🪚 Promotes body awareness for safety.',
      parent: '👶 Calming activity with kids.',
      musician: '🎵 Improves rhythm and grounding.'
    },
    tags: ['walking', 'mindfulness', 'beginner', 'employee', 'anxious', 'retiree', 'freelancer', 'driver', 'construction', 'parent', 'musician']
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
      heart: '❤️ Increased mental clarity.',
      'healthcare-worker': '🏥 Processes emotional toll of work.',
      therapist: '🛋️ Essential for self-care.',
      'customer-service': '📞 Manages frustration with clients.',
      teacher: '🍎 Reduces emotional exhaustion.',
      parent: '👶 Helps respond calmly to children.',
      artist: '🎨 Channels emotions into creativity.',
      entrepreneur: '🚀 Handles ups and downs of business.'
    },
    tags: ['emotion', 'witness', 'intermediate', 'employee', 'overthinker', 'healthcare-worker', 'therapist', 'customer-service', 'teacher', 'parent', 'artist', 'entrepreneur']
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
      advanced: '🧘 Improves concentration.',
      retiree: '👵 Comforts with stillness.',
      freelancer: '🎨 Breaks isolation by connecting to silence.',
      musician: '🎵 Enhances appreciation of rests.',
      writer: '✍️ Finds inspiration in quiet.',
      researcher: '🔬 Develops sustained focus.'
    },
    tags: ['silence', 'sound', 'advanced', 'seeker', 'overthinker', 'retiree', 'freelancer', 'musician', 'writer', 'researcher']
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
      beginner: '🦶 Stabilizes attention.',
      athlete: '🏃 Enhances proprioception.',
      dancer: '💃 Improves movement awareness.',
      musician: '🎵 Develops embodied performance.',
      driver: '🚗 Increases body awareness for safety.',
      construction: '🪚 Prevents injury through awareness.'
    },
    tags: ['body', 'awareness', 'beginner', 'employee', 'anxious', 'athlete', 'dancer', 'musician', 'driver', 'construction']
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
      beginner: '🌬️ Increases mindfulness.',
      'software-developer': '💻 Enhances focus during complex tasks.',
      researcher: '🔬 Develops sustained attention.',
      musician: '🎵 Improves breath control.',
      athlete: '🏃 Enhances performance through breath focus.'
    },
    tags: ['breath', 'focus', 'beginner', 'student', 'overthinker', 'software-developer', 'researcher', 'musician', 'athlete']
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
      advanced: '🌀 Improves meditation depth.',
      entrepreneur: '🚀 Provides big-picture perspective.',
      artist: '🎨 Inspires expansive creativity.',
      retiree: '👵 Offers sense of freedom.',
      freelancer: '🎈 Reduces isolation.',
      researcher: '🔬 Opens mind to new ideas.'
    },
    tags: ['expansion', 'awareness', 'advanced', 'seeker', 'ceo', 'entrepreneur', 'artist', 'retiree', 'freelancer', 'researcher']
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
      student: '⚡ Enhances body awareness and focus.',
      'software-developer': '💻 Corrects posture, reduces back pain.',
      driver: '🚗 Maintains spinal health.',
      construction: '🪚 Prevents back injuries.',
      musician: '🎵 Improves posture for performance.',
      athlete: '🏃 Enhances core awareness.',
      parent: '👶 Relieves back strain from carrying.'
    },
    tags: ['spine', 'energy', 'intermediate', 'employee', 'student', 'software-developer', 'driver', 'construction', 'musician', 'athlete', 'parent']
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
      beginner: '🌙 Releases body tension.',
      'healthcare-worker': '🏥 Essential for recovery between shifts.',
      'first-responder': '🚒 Helps unwind after trauma.',
      driver: '🚗 Relieves physical fatigue.',
      construction: '🪚 Promotes muscle recovery.',
      parent: '👶 Quick reset during naps.',
      retiree: '👵 Promotes restorative rest.'
    },
    tags: ['relaxation', 'body scan', 'beginner', 'anxious', 'employee', 'healthcare-worker', 'first-responder', 'driver', 'construction', 'parent', 'retiree']
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
      advanced: '🧘 Develops subtle mental observation.',
      'software-developer': '💻 Helps wind down after screen time.',
      entrepreneur: '🚀 Quiets racing mind at night.',
      parent: '👶 Allows rest despite interruptions.',
      retiree: '👵 Enhances sleep quality.',
      freelancer: '🎨 Separates work from rest.'
    },
    tags: ['sleep', 'awareness', 'advanced', 'seeker', 'anxious', 'software-developer', 'entrepreneur', 'parent', 'retiree', 'freelancer']
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
      advanced: '🌌 Improves breath control.',
      athlete: '🏃 Enhances lung capacity.',
      musician: '🎵 Improves breath support.',
      speaker: '🎤 Calms nerves before speaking.',
      'first-responder': '🚒 Provides instant calm in chaos.',
      'software-developer': '💻 Resets focus during deep work.'
    },
    tags: ['breath', 'kumbhaka', 'advanced', 'ceo', 'seeker', 'athlete', 'musician', 'speaker', 'first-responder', 'software-developer']
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
      advanced: '🌀 Improves meditation depth.',
      artist: '🎨 Enhances spatial perception.',
      architect: '🏛️ Improves design awareness.',
      driver: '🚗 Increases spatial awareness for safety.',
      athlete: '🏃 Enhances court/field awareness.'
    },
    tags: ['space', 'awareness', 'advanced', 'seeker', 'ceo', 'artist', 'architect', 'driver', 'athlete']
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
      beginner: '🥗 Develops present-moment attention.',
      chef: '👨‍🍳 Deepens appreciation of food.',
      'healthcare-worker': '🏥 Encourages proper nutrition during breaks.',
      athlete: '🏋️ Optimizes fueling.',
      parent: '👶 Models healthy eating for children.',
      retiree: '👵 Enhances enjoyment of meals.'
    },
    tags: ['mindfulness', 'eating', 'beginner', 'employee', 'student', 'chef', 'healthcare-worker', 'athlete', 'parent', 'retiree']
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
      ceo: '🎯 Strengthens present-moment awareness.',
      'software-developer': '💻 Reduces context-switching overhead.',
      teacher: '🍎 Stays present with students.',
      therapist: '🛋️ Essential for therapeutic presence.',
      parent: '👶 Fully engages with children.',
      artist: '🎨 Deepens creative flow.'
    },
    tags: ['mindfulness', 'daily life', 'beginner', 'employee', 'student', 'ceo', 'software-developer', 'teacher', 'therapist', 'parent', 'artist']
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
      mystic: '🌀 Develops meditation depth.',
      artist: '🎨 Inspires visual creativity.',
      researcher: '🔬 Sharpens intuition.',
      musician: '🎵 Enhances inner hearing.',
      retiree: '👵 Provides inner illumination.'
    },
    tags: ['light', 'inner', 'advanced', 'seeker', 'artist', 'researcher', 'musician', 'retiree']
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
      advanced: '🌌 Advanced meditation state.',
      therapist: '🛋️ Deepens therapeutic presence.',
      artist: '🎨 Access creative source.',
      researcher: '🔬 Enhances objective observation.',
      parent: '👶 Responds rather than reacts to children.',
      'healthcare-worker': '🏥 Maintains compassion without burnout.'
    },
    tags: ['witness', 'awareness', 'advanced', 'seeker', 'ceo', 'therapist', 'artist', 'researcher', 'parent', 'healthcare-worker']
  }
};

// ==================================================================
// PROFESSIONS LIST (for UI filtering and reference)
// ==================================================================
const professions = [
  { slug: 'software-developer', name: 'Software Developer', icon: '💻' },
  { slug: 'teacher', name: 'Teacher', icon: '🍎' },
  { slug: 'healthcare-worker', name: 'Healthcare Worker', icon: '🏥' },
  { slug: 'customer-service', name: 'Customer Service', icon: '📞' },
  { slug: 'sales', name: 'Sales Professional', icon: '📈' },
  { slug: 'entrepreneur', name: 'Entrepreneur', icon: '🚀' },
  { slug: 'corporate-executive', name: 'Corporate Executive', icon: '🏢' },
  { slug: 'artist', name: 'Artist', icon: '🎨' },
  { slug: 'journalist', name: 'Journalist', icon: '📝' },
  { slug: 'lawyer', name: 'Lawyer', icon: '⚖️' },
  { slug: 'accountant', name: 'Accountant', icon: '🧮' },
  { slug: 'student', name: 'Student', icon: '📚' },
  { slug: 'researcher', name: 'Researcher', icon: '🔬' },
  { slug: 'social-worker', name: 'Social Worker', icon: '🤝' },
  { slug: 'first-responder', name: 'First Responder', icon: '🚒' },
  { slug: 'military', name: 'Military', icon: '🎖️' },
  { slug: 'athlete', name: 'Athlete', icon: '🏃' },
  { slug: 'parent', name: 'Parent', icon: '👶' },
  { slug: 'caregiver', name: 'Caregiver', icon: '👵' },
  { slug: 'retiree', name: 'Retiree', icon: '👵' },
  { slug: 'unemployed', name: 'Unemployed / Job Seeker', icon: '🤝' },
  { slug: 'freelancer', name: 'Freelancer', icon: '🎨' },
  { slug: 'chef', name: 'Chef', icon: '🍳' },
  { slug: 'driver', name: 'Driver', icon: '🚗' },
  { slug: 'construction', name: 'Construction Worker', icon: '🪚' },
  { slug: 'retail', name: 'Retail Worker', icon: '🛍️' },
  { slug: 'musician', name: 'Musician', icon: '🎵' },
  { slug: 'therapist', name: 'Therapist', icon: '🛋️' },
  { slug: 'hr', name: 'HR Professional', icon: '📋' },
  { slug: 'it-support', name: 'IT Support', icon: '🖥️' }
];

// ==================================================================
// To use: replace the existing 'techniques' object in your script
// with this one. It integrates seamlessly with the existing
// AppState, UI, and BreathVisual modules. Each technique includes
// breathTiming where applicable, and benefits for 30 professions.
// ==================================================================
