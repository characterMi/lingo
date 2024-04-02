export const footerFlags = [
  {
    src: "/hr.svg",
    label: "Croatian",
  },
  {
    src: "/es.svg",
    label: "Spanish",
  },
  {
    src: "/fr.svg",
    label: "French",
  },
  {
    src: "/it.svg",
    label: "Italian",
  },
  {
    src: "/jp.svg",
    label: "Japanese",
  },
];

export const sidebarItems = [
  {
    link: "/learn",
    label: "Learn",
    iconSrc: "/learn.svg",
  },
  {
    link: "/leaderboard",
    label: "Leaderboard",
    iconSrc: "/leaderboard.svg",
  },
  {
    link: "/quests",
    label: "Quests",
    iconSrc: "/quests.svg",
  },
  {
    link: "/shop",
    label: "Shop",
    iconSrc: "/shop.svg",
  },
];

export const quests = [
  {
    title: "Earn 20 XP",
    value: 20,
  },
  {
    title: "Earn 50 XP",
    value: 50,
  },
  {
    title: "Earn 100 XP",
    value: 100,
  },
  {
    title: "Earn 500 XP",
    value: 500,
  },
  {
    title: "Earn 1000 XP",
    value: 1000,
  },
];

export const dataToInsert = {
  languages: [
    {
      title: "Spanish",
      imgSrc: "/es.svg",
    },
    {
      title: "Japanese",
      imgSrc: "/jp.svg",
    },
    {
      title: "French",
      imgSrc: "/fr.svg",
    },
    {
      title: "Croatian",
      imgSrc: "/hr.svg",
    },
    {
      title: "Italian",
      imgSrc: "/it.svg",
    },
  ],
  units: [
    {
      id: 1,
      courseId: 1, // Spanish
      title: "Unit 1",
      description: "Learn the basics of Spanish",
      order: 1,
    },
  ],
  lessons: [
    {
      id: 1,
      unitId: 1, // Unit 1 (Learn the basics...)
      order: 1,
      title: "Nouns",
    },
    {
      id: 2,
      unitId: 1, // Unit 1 (Learn the basics...)
      order: 2,
      title: "Verbs",
    },
  ],
  challenges: [
    {
      id: 1,
      lessonId: 1, // Nouns
      type: "SELECT",
      order: 1,
      question: 'Which one of these is the "the man"?',
    },
    {
      id: 2,
      lessonId: 1, // Nouns
      type: "ASSIST",
      order: 2,
      question: '"the man"',
    },
    {
      id: 3,
      lessonId: 1, // Nouns
      type: "SELECT",
      order: 3,
      question: 'Which one of these is the "the robot"?',
    },
    {
      id: 4,
      lessonId: 2, // Verbs
      type: "SELECT",
      order: 1,
      question: 'Which one of these is the "the man"?',
    },
    {
      id: 5,
      lessonId: 2, // Verbs
      type: "ASSIST",
      order: 2,
      question: '"the robot"',
    },
    {
      id: 6,
      lessonId: 2, // Verbs
      type: "SELECT",
      order: 3,
      question: 'Which one of these is the "the woman"?',
    },
  ],
  challengeOptions: [
    {
      challengeId: 1, // Which one of these is "the man"?
      imgSrc: "/man.svg",
      correct: true,
      text: "el hombre",
      audioSrc: "/es_man.mp3",
    },
    {
      challengeId: 1,
      imgSrc: "/woman.svg",
      correct: false,
      text: "la mujer",
      audioSrc: "/es_woman.mp3",
    },
    {
      challengeId: 1,
      imgSrc: "/robot.svg",
      correct: false,
      text: "el robot",
      audioSrc: "/es_robot.mp3",
    },
    {
      challengeId: 2, // "the man"?
      correct: true,
      text: "el hombre",
      audioSrc: "/es_man.mp3",
    },
    {
      challengeId: 2,
      correct: false,
      text: "la mujer",
      audioSrc: "/es_woman.mp3",
    },
    {
      challengeId: 2,
      correct: false,
      text: "el robot",
      audioSrc: "/es_robot.mp3",
    },
    {
      challengeId: 3, // Which one of these is the "the robot"?
      imgSrc: "/man.svg",
      correct: false,
      text: "el hombre",
      audioSrc: "/es_man.mp3",
    },
    {
      challengeId: 3,
      imgSrc: "/woman.svg",
      correct: false,
      text: "la mujer",
      audioSrc: "/es_woman.mp3",
    },
    {
      challengeId: 3,
      imgSrc: "/robot.svg",
      correct: true,
      text: "el robot",
      audioSrc: "/es_robot.mp3",
    },
    {
      challengeId: 4, // Which one of these is "the man"?
      imgSrc: "/man.svg",
      correct: true,
      text: "el hombre",
      audioSrc: "/es_man.mp3",
    },
    {
      challengeId: 4,
      imgSrc: "/woman.svg",
      correct: false,
      text: "la mujer",
      audioSrc: "/es_woman.mp3",
    },
    {
      challengeId: 4,
      imgSrc: "/robot.svg",
      correct: false,
      text: "el robot",
      audioSrc: "/es_robot.mp3",
    },
    {
      challengeId: 5, // "the robot"?
      correct: false,
      text: "el hombre",
      audioSrc: "/es_man.mp3",
    },
    {
      challengeId: 5,
      correct: false,
      text: "la mujer",
      audioSrc: "/es_woman.mp3",
    },
    {
      challengeId: 5,
      correct: true,
      text: "el robot",
      audioSrc: "/es_robot.mp3",
    },
    {
      challengeId: 6, // Which one of these is the "the woman"?
      imgSrc: "/man.svg",
      correct: false,
      text: "el hombre",
      audioSrc: "/es_man.mp3",
    },
    {
      challengeId: 6,
      imgSrc: "/woman.svg",
      correct: true,
      text: "la mujer",
      audioSrc: "/es_woman.mp3",
    },
    {
      challengeId: 6,
      imgSrc: "/robot.svg",
      correct: false,
      text: "el robot",
      audioSrc: "/es_robot.mp3",
    },
  ],
};
