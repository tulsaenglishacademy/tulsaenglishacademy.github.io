(function(root){
'use strict';
const words=[
  {
    "id": "past-001",
    "word": "go",
    "past": "went",
    "answer": "went",
    "ipa": "/ɡoʊ/",
    "pastIpa": "/wɛnt/",
    "es": "ir",
    "type": "Action",
    "regular": false,
    "cloze": "I {{}} to the store yesterday.",
    "example": "I went to the store yesterday.",
    "exampleEs": "Fui a la tienda ayer.",
    "scene": 5,
    "category": "Travel & movement",
    "synonyms": [
      {
        "word": "travel",
        "context": "go to another city",
        "es": "viajar"
      },
      {
        "word": "leave",
        "context": "go away from home",
        "es": "salir"
      }
    ],
    "note": "Go → went: the past form changes completely.",
    "distractors": [
      "go",
      "goes",
      "going"
    ]
  },
  {
    "id": "past-002",
    "word": "work",
    "past": "worked",
    "answer": "worked",
    "ipa": "/wɜrk/",
    "pastIpa": "/wɜrkt/",
    "es": "trabajar; funcionar",
    "type": "Action",
    "regular": true,
    "cloze": "I {{}} at the hotel yesterday.",
    "example": "I worked at the hotel yesterday.",
    "exampleEs": "Trabajé en el hotel ayer.",
    "scene": 20,
    "category": "Work & study",
    "synonyms": [
      {
        "word": "be employed",
        "context": "work at a company",
        "es": "estar empleado"
      },
      {
        "word": "function",
        "context": "the machine works",
        "es": "funcionar"
      }
    ],
    "note": "Worked ends in /t/, not an extra syllable.",
    "distractors": [
      "work",
      "works",
      "working"
    ]
  },
  {
    "id": "past-003",
    "word": "be",
    "past": "was / were",
    "answer": "was",
    "ipa": "/bi/",
    "pastIpa": "/wʌz/ · /wɜr/",
    "es": "ser; estar",
    "type": "Non-action",
    "regular": false,
    "cloze": "I {{}} tired after work yesterday.",
    "example": "I was tired after work yesterday.",
    "exampleEs": "Estaba cansado después del trabajo ayer.",
    "scene": 0,
    "category": "States & feelings",
    "synonyms": [
      {
        "word": "feel",
        "context": "be tired",
        "es": "sentirse"
      },
      {
        "word": "be located",
        "context": "be at home",
        "es": "estar ubicado"
      }
    ],
    "note": "Use was with I/he/she/it and were with you/we/they. Here, be describes a state.",
    "distractors": [
      "is",
      "were",
      "been"
    ]
  },
  {
    "id": "past-004",
    "word": "study",
    "past": "studied",
    "answer": "studied",
    "ipa": "/ˈstʌdi/",
    "pastIpa": "/ˈstʌdid/",
    "es": "estudiar",
    "type": "Action",
    "regular": true,
    "cloze": "We {{}} English last night.",
    "example": "We studied English last night.",
    "exampleEs": "Estudiamos inglés anoche.",
    "scene": 24,
    "category": "Work & study",
    "synonyms": [
      {
        "word": "learn",
        "context": "study English",
        "es": "aprender"
      },
      {
        "word": "examine",
        "context": "study a map",
        "es": "examinar"
      }
    ],
    "note": "Consonant + y changes to -ied: study → studied.",
    "distractors": [
      "study",
      "studies",
      "studying"
    ]
  },
  {
    "id": "past-005",
    "word": "have",
    "past": "had",
    "answer": "had",
    "ipa": "/hæv/",
    "pastIpa": "/hæd/",
    "es": "tener; tomar; comer",
    "type": "Non-action",
    "regular": false,
    "cloze": "We {{}} a small car last year.",
    "example": "We had a small car last year.",
    "exampleEs": "Teníamos un carro pequeño el año pasado.",
    "scene": 1,
    "category": "States & feelings",
    "synonyms": [
      {
        "word": "own",
        "context": "have a car",
        "es": "poseer"
      },
      {
        "word": "eat",
        "context": "have breakfast",
        "es": "comer"
      }
    ],
    "note": "Have is non-action for possession, but action in have breakfast or have a party.",
    "distractors": [
      "have",
      "has",
      "having"
    ]
  },
  {
    "id": "past-006",
    "word": "learn",
    "past": "learned",
    "answer": "learned",
    "ipa": "/lɜrn/",
    "pastIpa": "/lɜrnd/",
    "es": "aprender",
    "type": "Action",
    "regular": true,
    "cloze": "She {{}} ten new words yesterday.",
    "example": "She learned ten new words yesterday.",
    "exampleEs": "Aprendió diez palabras nuevas ayer.",
    "scene": 24,
    "category": "Work & study",
    "synonyms": [
      {
        "word": "study",
        "context": "learn English",
        "es": "estudiar"
      },
      {
        "word": "find out",
        "context": "learn the news",
        "es": "enterarse"
      }
    ],
    "note": "We use American English learned. Learnt is also correct, especially in British English.",
    "distractors": [
      "learn",
      "learns",
      "learning"
    ]
  },
  {
    "id": "past-007",
    "word": "do",
    "past": "did",
    "answer": "did",
    "ipa": "/du/",
    "pastIpa": "/dɪd/",
    "es": "hacer",
    "type": "Action",
    "regular": false,
    "cloze": "I {{}} the dishes after dinner.",
    "example": "I did the dishes after dinner.",
    "exampleEs": "Lavé los platos después de cenar.",
    "scene": 18,
    "category": "Home & routines",
    "synonyms": [
      {
        "word": "complete",
        "context": "do homework",
        "es": "completar"
      },
      {
        "word": "perform",
        "context": "do a task",
        "es": "realizar"
      }
    ],
    "note": "Do → did. Do the dishes means wash the dishes.",
    "distractors": [
      "do",
      "does",
      "doing"
    ]
  },
  {
    "id": "past-008",
    "word": "play",
    "past": "played",
    "answer": "played",
    "ipa": "/pleɪ/",
    "pastIpa": "/pleɪd/",
    "es": "jugar; tocar",
    "type": "Action",
    "regular": true,
    "cloze": "We {{}} soccer last Sunday.",
    "example": "We played soccer last Sunday.",
    "exampleEs": "Jugamos fútbol el domingo pasado.",
    "scene": 23,
    "category": "Free time",
    "synonyms": [
      {
        "word": "take part",
        "context": "play a game",
        "es": "participar"
      },
      {
        "word": "perform",
        "context": "play music",
        "es": "interpretar"
      }
    ],
    "note": "Vowel + y keeps the y: play → played.",
    "distractors": [
      "play",
      "plays",
      "playing"
    ]
  },
  {
    "id": "past-009",
    "word": "come",
    "past": "came",
    "answer": "came",
    "ipa": "/kʌm/",
    "pastIpa": "/keɪm/",
    "es": "venir",
    "type": "Action",
    "regular": false,
    "cloze": "My sister {{}} to my house yesterday.",
    "example": "My sister came to my house yesterday.",
    "exampleEs": "Mi hermana vino a mi casa ayer.",
    "scene": 19,
    "category": "Travel & movement",
    "synonyms": [
      {
        "word": "arrive",
        "context": "come to my house",
        "es": "llegar"
      },
      {
        "word": "approach",
        "context": "come closer",
        "es": "acercarse"
      }
    ],
    "note": "Come usually describes movement toward the speaker or a reference place.",
    "distractors": [
      "come",
      "comes",
      "coming"
    ]
  },
  {
    "id": "past-010",
    "word": "watch",
    "past": "watched",
    "answer": "watched",
    "ipa": "/wɑtʃ/",
    "pastIpa": "/wɑtʃt/",
    "es": "mirar; observar; vigilar",
    "type": "Action",
    "regular": true,
    "cloze": "We {{}} a movie last night.",
    "example": "We watched a movie last night.",
    "exampleEs": "Vimos una película anoche.",
    "scene": 0,
    "category": "Free time",
    "synonyms": [
      {
        "word": "view",
        "context": "watch a film",
        "es": "ver"
      },
      {
        "word": "monitor",
        "context": "watch the children",
        "es": "vigilar"
      }
    ],
    "note": "Watched ends in /t/. Watch is active attention; see can be simple perception.",
    "distractors": [
      "watch",
      "watches",
      "watching"
    ]
  },
  {
    "id": "past-011",
    "word": "get",
    "past": "got",
    "answer": "got",
    "ipa": "/ɡɛt/",
    "pastIpa": "/ɡɑt/",
    "es": "recibir; conseguir; llegar",
    "type": "Action",
    "regular": false,
    "cloze": "I {{}} a message from my friend yesterday.",
    "example": "I got a message from my friend yesterday.",
    "exampleEs": "Recibí un mensaje de mi amigo ayer.",
    "scene": 20,
    "category": "Communication",
    "synonyms": [
      {
        "word": "receive",
        "context": "get a message",
        "es": "recibir"
      },
      {
        "word": "arrive",
        "context": "get home",
        "es": "llegar"
      }
    ],
    "note": "The meaning of get depends on context. Past simple: got.",
    "distractors": [
      "get",
      "gets",
      "getting"
    ]
  },
  {
    "id": "past-012",
    "word": "listen",
    "past": "listened",
    "answer": "listened",
    "ipa": "/ˈlɪsən/",
    "pastIpa": "/ˈlɪsənd/",
    "es": "escuchar",
    "type": "Action",
    "regular": true,
    "cloze": "I {{}} to music on the bus yesterday.",
    "example": "I listened to music on the bus yesterday.",
    "exampleEs": "Escuché música en el autobús ayer.",
    "scene": 12,
    "category": "Communication",
    "synonyms": [
      {
        "word": "pay attention",
        "context": "listen to instructions",
        "es": "prestar atención"
      },
      {
        "word": "hear out",
        "context": "listen to someone's whole story",
        "es": "escuchar hasta el final"
      }
    ],
    "note": "Use listen to before the person or sound. The t is silent.",
    "distractors": [
      "listen",
      "listens",
      "listening"
    ]
  },
  {
    "id": "past-013",
    "word": "make",
    "past": "made",
    "answer": "made",
    "ipa": "/meɪk/",
    "pastIpa": "/meɪd/",
    "es": "hacer; preparar; fabricar",
    "type": "Action",
    "regular": false,
    "cloze": "She {{}} dinner for her family last night.",
    "example": "She made dinner for her family last night.",
    "exampleEs": "Preparó la cena para su familia anoche.",
    "scene": 17,
    "category": "Home & routines",
    "synonyms": [
      {
        "word": "prepare",
        "context": "make dinner",
        "es": "preparar"
      },
      {
        "word": "create",
        "context": "make a plan",
        "es": "crear"
      }
    ],
    "note": "Make → made. Make often means create or produce something.",
    "distractors": [
      "make",
      "makes",
      "making"
    ]
  },
  {
    "id": "past-014",
    "word": "cook",
    "past": "cooked",
    "answer": "cooked",
    "ipa": "/kʊk/",
    "pastIpa": "/kʊkt/",
    "es": "cocinar",
    "type": "Action",
    "regular": true,
    "cloze": "He {{}} rice for lunch yesterday.",
    "example": "He cooked rice for lunch yesterday.",
    "exampleEs": "Cocinó arroz para el almuerzo ayer.",
    "scene": 17,
    "category": "Food & shopping",
    "synonyms": [
      {
        "word": "prepare",
        "context": "cook a meal",
        "es": "preparar"
      },
      {
        "word": "heat",
        "context": "cook food until it is ready",
        "es": "calentar para cocinar"
      }
    ],
    "note": "Cooked ends in /t/, with no extra syllable.",
    "distractors": [
      "cook",
      "cooks",
      "cooking"
    ]
  },
  {
    "id": "past-015",
    "word": "take",
    "past": "took",
    "answer": "took",
    "ipa": "/teɪk/",
    "pastIpa": "/tʊk/",
    "es": "tomar; llevar",
    "type": "Action",
    "regular": false,
    "cloze": "I {{}} the bus to work yesterday.",
    "example": "I took the bus to work yesterday.",
    "exampleEs": "Tomé el autobús para ir al trabajo ayer.",
    "scene": 8,
    "category": "Travel & movement",
    "synonyms": [
      {
        "word": "use",
        "context": "take the bus",
        "es": "usar"
      },
      {
        "word": "carry",
        "context": "take a bag to work",
        "es": "llevar"
      }
    ],
    "note": "Take → took. Take often describes movement away from a reference point.",
    "distractors": [
      "take",
      "takes",
      "taking"
    ]
  },
  {
    "id": "past-016",
    "word": "clean",
    "past": "cleaned",
    "answer": "cleaned",
    "ipa": "/klin/",
    "pastIpa": "/klind/",
    "es": "limpiar",
    "type": "Action",
    "regular": true,
    "cloze": "We {{}} the kitchen yesterday.",
    "example": "We cleaned the kitchen yesterday.",
    "exampleEs": "Limpiamos la cocina ayer.",
    "scene": 18,
    "category": "Home & routines",
    "synonyms": [
      {
        "word": "wash",
        "context": "clean dishes",
        "es": "lavar"
      },
      {
        "word": "wipe",
        "context": "clean a table with a cloth",
        "es": "limpiar con un paño"
      }
    ],
    "note": "Cleaned ends in /d/.",
    "distractors": [
      "clean",
      "cleans",
      "cleaning"
    ]
  },
  {
    "id": "past-017",
    "word": "give",
    "past": "gave",
    "answer": "gave",
    "ipa": "/ɡɪv/",
    "pastIpa": "/ɡeɪv/",
    "es": "dar",
    "type": "Action",
    "regular": false,
    "cloze": "He {{}} me a birthday gift last week.",
    "example": "He gave me a birthday gift last week.",
    "exampleEs": "Me dio un regalo de cumpleaños la semana pasada.",
    "scene": 21,
    "category": "Friends & family",
    "synonyms": [
      {
        "word": "hand",
        "context": "give someone a cup",
        "es": "entregar"
      },
      {
        "word": "donate",
        "context": "give money to a charity",
        "es": "donar"
      }
    ],
    "note": "Give → gave. Give someone something or give something to someone.",
    "distractors": [
      "give",
      "gives",
      "giving"
    ]
  },
  {
    "id": "past-018",
    "word": "wash",
    "past": "washed",
    "answer": "washed",
    "ipa": "/wɑʃ/",
    "pastIpa": "/wɑʃt/",
    "es": "lavar",
    "type": "Action",
    "regular": true,
    "cloze": "I {{}} the dishes after breakfast.",
    "example": "I washed the dishes after breakfast.",
    "exampleEs": "Lavé los platos después del desayuno.",
    "scene": 18,
    "category": "Home & routines",
    "synonyms": [
      {
        "word": "clean",
        "context": "wash the dishes",
        "es": "limpiar"
      },
      {
        "word": "rinse",
        "context": "wash vegetables with water",
        "es": "enjuagar"
      }
    ],
    "note": "Washed ends in /t/. Rinse specifically means wash with water to remove something.",
    "distractors": [
      "wash",
      "washes",
      "washing"
    ]
  },
  {
    "id": "past-019",
    "word": "eat",
    "past": "ate",
    "answer": "ate",
    "ipa": "/it/",
    "pastIpa": "/eɪt/",
    "es": "comer",
    "type": "Action",
    "regular": false,
    "cloze": "I {{}} eggs for breakfast yesterday.",
    "example": "I ate eggs for breakfast yesterday.",
    "exampleEs": "Comí huevos en el desayuno ayer.",
    "scene": 2,
    "category": "Food & shopping",
    "synonyms": [
      {
        "word": "have",
        "context": "eat breakfast",
        "es": "desayunar; tomar"
      },
      {
        "word": "consume",
        "context": "eat food",
        "es": "consumir"
      }
    ],
    "note": "Eat → ate. Ate is the past simple; eaten is a different form.",
    "distractors": [
      "eat",
      "eats",
      "eating"
    ]
  },
  {
    "id": "past-020",
    "word": "open",
    "past": "opened",
    "answer": "opened",
    "ipa": "/ˈoʊpən/",
    "pastIpa": "/ˈoʊpənd/",
    "es": "abrir",
    "type": "Action",
    "regular": true,
    "cloze": "She {{}} the front door this morning.",
    "example": "She opened the front door this morning.",
    "exampleEs": "Abrió la puerta principal esta mañana.",
    "scene": 19,
    "category": "Home & routines",
    "synonyms": [
      {
        "word": "unlock",
        "context": "open a locked door",
        "es": "desbloquear"
      },
      {
        "word": "begin",
        "context": "open a meeting",
        "es": "iniciar"
      }
    ],
    "note": "Open and unlock are related, but an unlocked door can still be closed.",
    "distractors": [
      "open",
      "opens",
      "opening"
    ]
  },
  {
    "id": "past-021",
    "word": "drink",
    "past": "drank",
    "answer": "drank",
    "ipa": "/drɪŋk/",
    "pastIpa": "/dræŋk/",
    "es": "beber; tomar",
    "type": "Action",
    "regular": false,
    "cloze": "We {{}} water after our walk.",
    "example": "We drank water after our walk.",
    "exampleEs": "Bebimos agua después de nuestra caminata.",
    "scene": 3,
    "category": "Food & shopping",
    "synonyms": [
      {
        "word": "have",
        "context": "drink a cup of coffee",
        "es": "tomar"
      },
      {
        "word": "sip",
        "context": "drink slowly in small amounts",
        "es": "beber a sorbos"
      }
    ],
    "note": "Drink → drank. Drunk is the past participle, not the past simple.",
    "distractors": [
      "drink",
      "drinks",
      "drinking"
    ]
  },
  {
    "id": "past-022",
    "word": "close",
    "past": "closed",
    "answer": "closed",
    "ipa": "/kloʊz/",
    "pastIpa": "/kloʊzd/",
    "es": "cerrar",
    "type": "Action",
    "regular": true,
    "cloze": "He {{}} the door before leaving.",
    "example": "He closed the door before leaving.",
    "exampleEs": "Cerró la puerta antes de salir.",
    "scene": 19,
    "category": "Home & routines",
    "synonyms": [
      {
        "word": "shut",
        "context": "close a door",
        "es": "cerrar"
      },
      {
        "word": "end",
        "context": "close a meeting",
        "es": "terminar"
      }
    ],
    "note": "The verb close has a /z/ sound. Closed ends in /d/.",
    "distractors": [
      "close",
      "closes",
      "closing"
    ]
  },
  {
    "id": "past-023",
    "word": "sleep",
    "past": "slept",
    "answer": "slept",
    "ipa": "/slip/",
    "pastIpa": "/slɛpt/",
    "es": "dormir",
    "type": "Action",
    "regular": false,
    "cloze": "I {{}} for eight hours last night.",
    "example": "I slept for eight hours last night.",
    "exampleEs": "Dormí ocho horas anoche.",
    "scene": 4,
    "category": "Home & routines",
    "synonyms": [
      {
        "word": "rest",
        "context": "sleep after a long day",
        "es": "descansar"
      },
      {
        "word": "nap",
        "context": "sleep briefly during the day",
        "es": "dormir una siesta"
      }
    ],
    "note": "Sleep describes an activity, even though the person is not moving much.",
    "distractors": [
      "sleep",
      "sleeps",
      "sleeping"
    ]
  },
  {
    "id": "past-024",
    "word": "start",
    "past": "started",
    "answer": "started",
    "ipa": "/stɑrt/",
    "pastIpa": "/ˈstɑrtɪd/",
    "es": "empezar; iniciar",
    "type": "Action",
    "regular": true,
    "cloze": "We {{}} class at six yesterday.",
    "example": "We started class at six yesterday.",
    "exampleEs": "Empezamos la clase a las seis ayer.",
    "scene": 24,
    "category": "Work & study",
    "synonyms": [
      {
        "word": "begin",
        "context": "start a class",
        "es": "empezar"
      },
      {
        "word": "launch",
        "context": "start a new project",
        "es": "lanzar"
      }
    ],
    "note": "After /t/ or /d/, -ed adds a syllable: started /ɪd/.",
    "distractors": [
      "start",
      "starts",
      "starting"
    ]
  },
  {
    "id": "past-025",
    "word": "wake",
    "past": "woke",
    "answer": "woke",
    "ipa": "/weɪk/",
    "pastIpa": "/woʊk/",
    "es": "despertar; despertarse",
    "type": "Action",
    "regular": false,
    "cloze": "I {{}} at six this morning.",
    "example": "I woke at six this morning.",
    "exampleEs": "Me desperté a las seis esta mañana.",
    "scene": 4,
    "category": "Home & routines",
    "synonyms": [
      {
        "word": "awaken",
        "context": "wake from sleep",
        "es": "despertarse"
      },
      {
        "word": "rouse",
        "context": "wake someone else",
        "es": "despertar a alguien"
      }
    ],
    "note": "Wake → woke. Wake up is also common in everyday speech.",
    "distractors": [
      "wake",
      "wakes",
      "waking"
    ]
  },
  {
    "id": "past-026",
    "word": "finish",
    "past": "finished",
    "answer": "finished",
    "ipa": "/ˈfɪnɪʃ/",
    "pastIpa": "/ˈfɪnɪʃt/",
    "es": "terminar",
    "type": "Action",
    "regular": true,
    "cloze": "I {{}} my homework last night.",
    "example": "I finished my homework last night.",
    "exampleEs": "Terminé mi tarea anoche.",
    "scene": 10,
    "category": "Work & study",
    "synonyms": [
      {
        "word": "complete",
        "context": "finish homework",
        "es": "completar"
      },
      {
        "word": "end",
        "context": "finish a meeting",
        "es": "terminar"
      }
    ],
    "note": "Finished ends in /t/.",
    "distractors": [
      "finish",
      "finishes",
      "finishing"
    ]
  },
  {
    "id": "past-027",
    "word": "sit",
    "past": "sat",
    "answer": "sat",
    "ipa": "/sɪt/",
    "pastIpa": "/sæt/",
    "es": "sentarse; estar sentado",
    "type": "Action",
    "regular": false,
    "cloze": "She {{}} on the sofa after work.",
    "example": "She sat on the sofa after work.",
    "exampleEs": "Se sentó en el sofá después del trabajo.",
    "scene": 7,
    "category": "Home & routines",
    "synonyms": [
      {
        "word": "take a seat",
        "context": "sit in a chair",
        "es": "tomar asiento"
      },
      {
        "word": "be seated",
        "context": "sit at a table",
        "es": "estar sentado"
      }
    ],
    "note": "Sit → sat. Sat is the past form, not sitted.",
    "distractors": [
      "sit",
      "sits",
      "sitting"
    ]
  },
  {
    "id": "past-028",
    "word": "stop",
    "past": "stopped",
    "answer": "stopped",
    "ipa": "/stɑp/",
    "pastIpa": "/stɑpt/",
    "es": "parar; detenerse; dejar de",
    "type": "Action",
    "regular": true,
    "cloze": "We {{}} at a café on the way home.",
    "example": "We stopped at a café on the way home.",
    "exampleEs": "Paramos en un café de camino a casa.",
    "scene": 11,
    "category": "Travel & movement",
    "synonyms": [
      {
        "word": "halt",
        "context": "stop moving",
        "es": "detenerse"
      },
      {
        "word": "quit",
        "context": "stop doing an activity",
        "es": "dejar de hacer"
      }
    ],
    "note": "Double the final p: stop → stopped. The ending is /t/.",
    "distractors": [
      "stop",
      "stops",
      "stopping"
    ]
  },
  {
    "id": "past-029",
    "word": "stand",
    "past": "stood",
    "answer": "stood",
    "ipa": "/stænd/",
    "pastIpa": "/stʊd/",
    "es": "estar de pie; ponerse de pie",
    "type": "Action",
    "regular": false,
    "cloze": "We {{}} in line at the bus stop.",
    "example": "We stood in line at the bus stop.",
    "exampleEs": "Estuvimos de pie en la fila de la parada de autobús.",
    "scene": 8,
    "category": "Travel & movement",
    "synonyms": [
      {
        "word": "be on your feet",
        "context": "stand in line",
        "es": "estar de pie"
      },
      {
        "word": "get to your feet",
        "context": "stand up",
        "es": "ponerse de pie"
      }
    ],
    "note": "Stand → stood. Stand up describes the movement to a standing position.",
    "distractors": [
      "stand",
      "stands",
      "standing"
    ]
  },
  {
    "id": "past-030",
    "word": "wait",
    "past": "waited",
    "answer": "waited",
    "ipa": "/weɪt/",
    "pastIpa": "/ˈweɪtɪd/",
    "es": "esperar",
    "type": "Action",
    "regular": true,
    "cloze": "I {{}} for the bus yesterday.",
    "example": "I waited for the bus yesterday.",
    "exampleEs": "Esperé el autobús ayer.",
    "scene": 8,
    "category": "Travel & movement",
    "synonyms": [
      {
        "word": "stay",
        "context": "wait here until someone arrives",
        "es": "quedarse"
      },
      {
        "word": "hold on",
        "context": "wait a moment",
        "es": "esperar un momento"
      }
    ],
    "note": "Wait for someone or something. Waited adds the syllable /ɪd/.",
    "distractors": [
      "wait",
      "waits",
      "waiting"
    ]
  },
  {
    "id": "past-031",
    "word": "run",
    "past": "ran",
    "answer": "ran",
    "ipa": "/rʌn/",
    "pastIpa": "/ræn/",
    "es": "correr; dirigir; funcionar",
    "type": "Action",
    "regular": false,
    "cloze": "He {{}} in the park yesterday.",
    "example": "He ran in the park yesterday.",
    "exampleEs": "Corrió en el parque ayer.",
    "scene": 6,
    "category": "Free time",
    "synonyms": [
      {
        "word": "jog",
        "context": "run slowly for exercise",
        "es": "trotar"
      },
      {
        "word": "manage",
        "context": "run a business",
        "es": "dirigir"
      }
    ],
    "note": "Run → ran. Run a business has a different meaning from run in a park.",
    "distractors": [
      "run",
      "runs",
      "running"
    ]
  },
  {
    "id": "past-032",
    "word": "help",
    "past": "helped",
    "answer": "helped",
    "ipa": "/hɛlp/",
    "pastIpa": "/hɛlpt/",
    "es": "ayudar",
    "type": "Action",
    "regular": true,
    "cloze": "I {{}} my friend with her homework.",
    "example": "I helped my friend with her homework.",
    "exampleEs": "Ayudé a mi amiga con su tarea.",
    "scene": 24,
    "category": "Friends & family",
    "synonyms": [
      {
        "word": "assist",
        "context": "help a person",
        "es": "ayudar"
      },
      {
        "word": "support",
        "context": "help someone through a problem",
        "es": "apoyar"
      }
    ],
    "note": "Helped ends in /t/.",
    "distractors": [
      "help",
      "helps",
      "helping"
    ]
  },
  {
    "id": "past-033",
    "word": "read",
    "past": "read",
    "answer": "read",
    "ipa": "/rid/",
    "pastIpa": "/rɛd/",
    "es": "leer",
    "type": "Action",
    "regular": false,
    "cloze": "I {{}} a book last night.",
    "example": "I read a book last night.",
    "exampleEs": "Leí un libro anoche.",
    "scene": 7,
    "category": "Work & study",
    "synonyms": [
      {
        "word": "look through",
        "context": "read a document",
        "es": "revisar"
      },
      {
        "word": "interpret",
        "context": "read a person's expression",
        "es": "interpretar"
      }
    ],
    "note": "The spelling stays read, but the past pronunciation is /rɛd/, like red.",
    "distractors": [
      "reads",
      "reading",
      "readed"
    ]
  },
  {
    "id": "past-034",
    "word": "call",
    "past": "called",
    "answer": "called",
    "ipa": "/kɔl/",
    "pastIpa": "/kɔld/",
    "es": "llamar",
    "type": "Action",
    "regular": true,
    "cloze": "She {{}} her mother yesterday.",
    "example": "She called her mother yesterday.",
    "exampleEs": "Llamó a su madre ayer.",
    "scene": 20,
    "category": "Communication",
    "synonyms": [
      {
        "word": "phone",
        "context": "call a friend",
        "es": "llamar por teléfono"
      },
      {
        "word": "name",
        "context": "call a child Ana",
        "es": "nombrar"
      }
    ],
    "note": "Called ends in /d/. Call can mean phone or give a name.",
    "distractors": [
      "call",
      "calls",
      "calling"
    ]
  },
  {
    "id": "past-035",
    "word": "write",
    "past": "wrote",
    "answer": "wrote",
    "ipa": "/raɪt/",
    "pastIpa": "/roʊt/",
    "es": "escribir",
    "type": "Action",
    "regular": false,
    "cloze": "He {{}} a shopping list yesterday.",
    "example": "He wrote a shopping list yesterday.",
    "exampleEs": "Escribió una lista de compras ayer.",
    "scene": 10,
    "category": "Communication",
    "synonyms": [
      {
        "word": "compose",
        "context": "write a message",
        "es": "redactar"
      },
      {
        "word": "note down",
        "context": "write a phone number",
        "es": "anotar"
      }
    ],
    "note": "Write → wrote. The w is silent in both forms.",
    "distractors": [
      "write",
      "writes",
      "writing"
    ]
  },
  {
    "id": "past-036",
    "word": "text",
    "past": "texted",
    "answer": "texted",
    "ipa": "/tɛkst/",
    "pastIpa": "/ˈtɛkstɪd/",
    "es": "enviar un mensaje de texto",
    "type": "Action",
    "regular": true,
    "cloze": "I {{}} my sister this morning.",
    "example": "I texted my sister this morning.",
    "exampleEs": "Le envié un mensaje de texto a mi hermana esta mañana.",
    "scene": 20,
    "category": "Communication",
    "synonyms": [
      {
        "word": "message",
        "context": "text a friend",
        "es": "enviar un mensaje"
      },
      {
        "word": "send a text",
        "context": "text someone an address",
        "es": "enviar un mensaje de texto"
      }
    ],
    "note": "Texted adds a syllable because text ends in /t/.",
    "distractors": [
      "text",
      "texts",
      "texting"
    ]
  },
  {
    "id": "past-037",
    "word": "speak",
    "past": "spoke",
    "answer": "spoke",
    "ipa": "/spik/",
    "pastIpa": "/spoʊk/",
    "es": "hablar",
    "type": "Action",
    "regular": false,
    "cloze": "We {{}} English in class yesterday.",
    "example": "We spoke English in class yesterday.",
    "exampleEs": "Hablamos inglés en clase ayer.",
    "scene": 11,
    "category": "Communication",
    "synonyms": [
      {
        "word": "talk",
        "context": "speak to a friend",
        "es": "hablar"
      },
      {
        "word": "address",
        "context": "speak to an audience",
        "es": "dirigirse a"
      }
    ],
    "note": "Speak → spoke. Spoke is the past simple, not spoken.",
    "distractors": [
      "speak",
      "speaks",
      "speaking"
    ]
  },
  {
    "id": "past-038",
    "word": "ask",
    "past": "asked",
    "answer": "asked",
    "ipa": "/æsk/",
    "pastIpa": "/æskt/",
    "es": "preguntar; pedir",
    "type": "Action",
    "regular": true,
    "cloze": "He {{}} a question in class yesterday.",
    "example": "He asked a question in class yesterday.",
    "exampleEs": "Hizo una pregunta en clase ayer.",
    "scene": 24,
    "category": "Communication",
    "synonyms": [
      {
        "word": "inquire",
        "context": "ask about a price",
        "es": "preguntar"
      },
      {
        "word": "request",
        "context": "ask for help",
        "es": "pedir"
      }
    ],
    "note": "Asked ends in /t/. Ask a question, but ask for help.",
    "distractors": [
      "ask",
      "asks",
      "asking"
    ]
  },
  {
    "id": "past-039",
    "word": "say",
    "past": "said",
    "answer": "said",
    "ipa": "/seɪ/",
    "pastIpa": "/sɛd/",
    "es": "decir",
    "type": "Action",
    "regular": false,
    "cloze": "She {{}} hello to me this morning.",
    "example": "She said hello to me this morning.",
    "exampleEs": "Me saludó esta mañana.",
    "scene": 20,
    "category": "Communication",
    "synonyms": [
      {
        "word": "state",
        "context": "say what happened",
        "es": "declarar; decir"
      },
      {
        "word": "remark",
        "context": "say something about the weather",
        "es": "comentar"
      }
    ],
    "note": "Say → said: the vowel changes to /ɛ/.",
    "distractors": [
      "say",
      "says",
      "saying"
    ]
  },
  {
    "id": "past-040",
    "word": "answer",
    "past": "answered",
    "answer": "answered",
    "ipa": "/ˈænsər/",
    "pastIpa": "/ˈænsərd/",
    "es": "responder; contestar",
    "type": "Action",
    "regular": true,
    "cloze": "I {{}} the phone this afternoon.",
    "example": "I answered the phone this afternoon.",
    "exampleEs": "Contesté el teléfono esta tarde.",
    "scene": 20,
    "category": "Communication",
    "synonyms": [
      {
        "word": "reply",
        "context": "answer a question",
        "es": "responder"
      },
      {
        "word": "pick up",
        "context": "answer the phone",
        "es": "contestar el teléfono"
      }
    ],
    "note": "The w in answer is silent.",
    "distractors": [
      "answer",
      "answers",
      "answering"
    ]
  },
  {
    "id": "past-041",
    "word": "tell",
    "past": "told",
    "answer": "told",
    "ipa": "/tɛl/",
    "pastIpa": "/toʊld/",
    "es": "decir; contar",
    "type": "Action",
    "regular": false,
    "cloze": "He {{}} me a funny story yesterday.",
    "example": "He told me a funny story yesterday.",
    "exampleEs": "Me contó una historia graciosa ayer.",
    "scene": 11,
    "category": "Communication",
    "synonyms": [
      {
        "word": "inform",
        "context": "tell someone the news",
        "es": "informar"
      },
      {
        "word": "narrate",
        "context": "tell a story",
        "es": "narrar"
      }
    ],
    "note": "Tell → told. Usually tell someone something; say something to someone.",
    "distractors": [
      "tell",
      "tells",
      "telling"
    ]
  },
  {
    "id": "past-042",
    "word": "talk",
    "past": "talked",
    "answer": "talked",
    "ipa": "/tɔk/",
    "pastIpa": "/tɔkt/",
    "es": "hablar; conversar",
    "type": "Action",
    "regular": true,
    "cloze": "We {{}} about our weekend plans.",
    "example": "We talked about our weekend plans.",
    "exampleEs": "Hablamos de nuestros planes para el fin de semana.",
    "scene": 11,
    "category": "Communication",
    "synonyms": [
      {
        "word": "chat",
        "context": "talk with friends",
        "es": "charlar"
      },
      {
        "word": "discuss",
        "context": "talk about a problem",
        "es": "conversar sobre"
      }
    ],
    "note": "The l in talk is silent. Talked ends in /t/.",
    "distractors": [
      "talk",
      "talks",
      "talking"
    ]
  },
  {
    "id": "past-043",
    "word": "hear",
    "past": "heard",
    "answer": "heard",
    "ipa": "/hɪr/",
    "pastIpa": "/hɜrd/",
    "es": "oír; enterarse",
    "type": "Non-action",
    "regular": false,
    "cloze": "I {{}} music from the next room.",
    "example": "I heard music from the next room.",
    "exampleEs": "Oí música desde la habitación de al lado.",
    "scene": 12,
    "category": "States & feelings",
    "synonyms": [
      {
        "word": "perceive",
        "context": "hear a sound",
        "es": "percibir"
      },
      {
        "word": "learn",
        "context": "hear some news",
        "es": "enterarse"
      }
    ],
    "note": "Hear describes perception here. Listen means pay attention deliberately.",
    "distractors": [
      "hear",
      "hears",
      "hearing"
    ]
  },
  {
    "id": "past-044",
    "word": "live",
    "past": "lived",
    "answer": "lived",
    "ipa": "/lɪv/",
    "pastIpa": "/lɪvd/",
    "es": "vivir; residir",
    "type": "Action",
    "regular": true,
    "cloze": "We {{}} in Tulsa last year.",
    "example": "We lived in Tulsa last year.",
    "exampleEs": "Vivimos en Tulsa el año pasado.",
    "scene": 0,
    "category": "Home & routines",
    "synonyms": [
      {
        "word": "reside",
        "context": "live in a city",
        "es": "residir"
      },
      {
        "word": "survive",
        "context": "live after an accident",
        "es": "sobrevivir"
      }
    ],
    "note": "Live can use continuous forms for a temporary situation: I am living in Tulsa.",
    "distractors": [
      "live",
      "lives",
      "living"
    ]
  },
  {
    "id": "past-045",
    "word": "see",
    "past": "saw",
    "answer": "saw",
    "ipa": "/si/",
    "pastIpa": "/sɔ/",
    "es": "ver; reunirse con",
    "type": "Non-action",
    "regular": false,
    "cloze": "I {{}} a bicycle outside my house.",
    "example": "I saw a bicycle outside my house.",
    "exampleEs": "Vi una bicicleta afuera de mi casa.",
    "scene": 22,
    "category": "States & feelings",
    "synonyms": [
      {
        "word": "notice",
        "context": "see something with your eyes",
        "es": "notar; ver"
      },
      {
        "word": "meet",
        "context": "see a friend for lunch",
        "es": "reunirse con"
      }
    ],
    "note": "See is perception here, but see a friend can describe the action of meeting them.",
    "distractors": [
      "see",
      "sees",
      "seeing"
    ]
  },
  {
    "id": "past-046",
    "word": "stay",
    "past": "stayed",
    "answer": "stayed",
    "ipa": "/steɪ/",
    "pastIpa": "/steɪd/",
    "es": "quedarse; alojarse",
    "type": "Action",
    "regular": true,
    "cloze": "We {{}} at home last night.",
    "example": "We stayed at home last night.",
    "exampleEs": "Nos quedamos en casa anoche.",
    "scene": 0,
    "category": "Home & routines",
    "synonyms": [
      {
        "word": "remain",
        "context": "stay at home",
        "es": "permanecer"
      },
      {
        "word": "lodge",
        "context": "stay at a hotel",
        "es": "alojarse"
      }
    ],
    "note": "Vowel + y keeps the y: stay → stayed.",
    "distractors": [
      "stay",
      "stays",
      "staying"
    ]
  },
  {
    "id": "past-047",
    "word": "know",
    "past": "knew",
    "answer": "knew",
    "ipa": "/noʊ/",
    "pastIpa": "/nu/",
    "es": "saber; conocer",
    "type": "Non-action",
    "regular": false,
    "cloze": "I {{}} the answer in class yesterday.",
    "example": "I knew the answer in class yesterday.",
    "exampleEs": "Sabía la respuesta en clase ayer.",
    "scene": 24,
    "category": "States & feelings",
    "synonyms": [
      {
        "word": "be aware",
        "context": "know about a problem",
        "es": "estar al tanto"
      },
      {
        "word": "be acquainted",
        "context": "know a person",
        "es": "conocer a una persona"
      }
    ],
    "note": "Know describes knowledge, a state. The k is silent; knew sounds like new.",
    "distractors": [
      "know",
      "knows",
      "knowing"
    ]
  },
  {
    "id": "past-048",
    "word": "visit",
    "past": "visited",
    "answer": "visited",
    "ipa": "/ˈvɪzɪt/",
    "pastIpa": "/ˈvɪzɪtɪd/",
    "es": "visitar",
    "type": "Action",
    "regular": true,
    "cloze": "I {{}} my grandparents last weekend.",
    "example": "I visited my grandparents last weekend.",
    "exampleEs": "Visité a mis abuelos el fin de semana pasado.",
    "scene": 21,
    "category": "Friends & family",
    "synonyms": [
      {
        "word": "see",
        "context": "visit a relative",
        "es": "ver; visitar"
      },
      {
        "word": "tour",
        "context": "visit a museum",
        "es": "recorrer"
      }
    ],
    "note": "Visited adds /ɪd/ because visit ends in /t/.",
    "distractors": [
      "visit",
      "visits",
      "visiting"
    ]
  },
  {
    "id": "past-049",
    "word": "think",
    "past": "thought",
    "answer": "thought",
    "ipa": "/θɪŋk/",
    "pastIpa": "/θɔt/",
    "es": "pensar; creer",
    "type": "Non-action",
    "regular": false,
    "cloze": "I {{}} the movie was interesting.",
    "example": "I thought the movie was interesting.",
    "exampleEs": "Me pareció que la película era interesante.",
    "scene": 13,
    "category": "States & feelings",
    "synonyms": [
      {
        "word": "believe",
        "context": "think an idea is good",
        "es": "creer"
      },
      {
        "word": "consider",
        "context": "think about a decision",
        "es": "considerar"
      }
    ],
    "note": "Think is non-action for an opinion here, but action when considering a decision.",
    "distractors": [
      "think",
      "thinks",
      "thinking"
    ]
  },
  {
    "id": "past-050",
    "word": "travel",
    "past": "traveled",
    "answer": "traveled",
    "ipa": "/ˈtrævəl/",
    "pastIpa": "/ˈtrævəld/",
    "es": "viajar",
    "type": "Action",
    "regular": true,
    "cloze": "We {{}} to Dallas last month.",
    "example": "We traveled to Dallas last month.",
    "exampleEs": "Viajamos a Dallas el mes pasado.",
    "scene": 9,
    "category": "Travel & movement",
    "synonyms": [
      {
        "word": "journey",
        "context": "travel to another city",
        "es": "viajar"
      },
      {
        "word": "go",
        "context": "travel by bus",
        "es": "ir"
      }
    ],
    "note": "Traveled is the American spelling. Travelled is also correct in British English.",
    "distractors": [
      "travel",
      "travels",
      "traveling"
    ]
  },
  {
    "id": "past-051",
    "word": "understand",
    "past": "understood",
    "answer": "understood",
    "ipa": "/ˌʌndərˈstænd/",
    "pastIpa": "/ˌʌndərˈstʊd/",
    "es": "entender; comprender",
    "type": "Non-action",
    "regular": false,
    "cloze": "I {{}} the instructions yesterday.",
    "example": "I understood the instructions yesterday.",
    "exampleEs": "Entendí las instrucciones ayer.",
    "scene": 24,
    "category": "States & feelings",
    "synonyms": [
      {
        "word": "comprehend",
        "context": "understand instructions",
        "es": "comprender"
      },
      {
        "word": "see",
        "context": "understand someone's point",
        "es": "entender"
      }
    ],
    "note": "Understand describes comprehension, a mental state.",
    "distractors": [
      "understand",
      "understands",
      "understanding"
    ]
  },
  {
    "id": "past-052",
    "word": "walk",
    "past": "walked",
    "answer": "walked",
    "ipa": "/wɔk/",
    "pastIpa": "/wɔkt/",
    "es": "caminar; pasear",
    "type": "Action",
    "regular": true,
    "cloze": "I {{}} to the park yesterday.",
    "example": "I walked to the park yesterday.",
    "exampleEs": "Caminé al parque ayer.",
    "scene": 5,
    "category": "Travel & movement",
    "synonyms": [
      {
        "word": "stroll",
        "context": "walk slowly for pleasure",
        "es": "pasear"
      },
      {
        "word": "go on foot",
        "context": "walk to work",
        "es": "ir a pie"
      }
    ],
    "note": "The l is silent. Walked ends in /t/.",
    "distractors": [
      "walk",
      "walks",
      "walking"
    ]
  },
  {
    "id": "past-053",
    "word": "feel",
    "past": "felt",
    "answer": "felt",
    "ipa": "/fil/",
    "pastIpa": "/fɛlt/",
    "es": "sentirse; sentir; tocar",
    "type": "Non-action",
    "regular": false,
    "cloze": "I {{}} happy after class yesterday.",
    "example": "I felt happy after class yesterday.",
    "exampleEs": "Me sentí feliz después de clase ayer.",
    "scene": 0,
    "category": "States & feelings",
    "synonyms": [
      {
        "word": "experience",
        "context": "feel an emotion",
        "es": "experimentar"
      },
      {
        "word": "touch",
        "context": "feel a fabric to check it",
        "es": "tocar"
      }
    ],
    "note": "Feel describes a state here. Feeling a surface with your hand is an action.",
    "distractors": [
      "feel",
      "feels",
      "feeling"
    ]
  },
  {
    "id": "past-054",
    "word": "dance",
    "past": "danced",
    "answer": "danced",
    "ipa": "/dæns/",
    "pastIpa": "/dænst/",
    "es": "bailar",
    "type": "Action",
    "regular": true,
    "cloze": "We {{}} at the party last Saturday.",
    "example": "We danced at the party last Saturday.",
    "exampleEs": "Bailamos en la fiesta el sábado pasado.",
    "scene": 23,
    "category": "Free time",
    "synonyms": [
      {
        "word": "move to music",
        "context": "dance at a party",
        "es": "moverse al ritmo de la música"
      },
      {
        "word": "perform",
        "context": "dance on a stage",
        "es": "actuar; bailar"
      }
    ],
    "note": "Dance already ends in e, so add -d. Danced ends in /t/.",
    "distractors": [
      "dance",
      "dances",
      "dancing"
    ]
  },
  {
    "id": "past-055",
    "word": "find",
    "past": "found",
    "answer": "found",
    "ipa": "/faɪnd/",
    "pastIpa": "/faʊnd/",
    "es": "encontrar",
    "type": "Action",
    "regular": false,
    "cloze": "I {{}} my keys in the drawer.",
    "example": "I found my keys in the drawer.",
    "exampleEs": "Encontré mis llaves en el cajón.",
    "scene": 14,
    "category": "Problems & plans",
    "synonyms": [
      {
        "word": "locate",
        "context": "find your keys",
        "es": "localizar"
      },
      {
        "word": "discover",
        "context": "find a useful website",
        "es": "descubrir"
      }
    ],
    "note": "Find → found. Found here is the past of find, not the verb meaning establish.",
    "distractors": [
      "find",
      "finds",
      "finding"
    ]
  },
  {
    "id": "past-056",
    "word": "exercise",
    "past": "exercised",
    "answer": "exercised",
    "ipa": "/ˈɛksərsaɪz/",
    "pastIpa": "/ˈɛksərsaɪzd/",
    "es": "hacer ejercicio; ejercer",
    "type": "Action",
    "regular": true,
    "cloze": "She {{}} in the park yesterday.",
    "example": "She exercised in the park yesterday.",
    "exampleEs": "Hizo ejercicio en el parque ayer.",
    "scene": 6,
    "category": "Free time",
    "synonyms": [
      {
        "word": "work out",
        "context": "exercise at a gym",
        "es": "hacer ejercicio"
      },
      {
        "word": "use",
        "context": "exercise your right to vote",
        "es": "ejercer"
      }
    ],
    "note": "Exercise ends in e, so add -d. Exercised ends in /d/.",
    "distractors": [
      "exercise",
      "exercises",
      "exercising"
    ]
  },
  {
    "id": "past-057",
    "word": "lose",
    "past": "lost",
    "answer": "lost",
    "ipa": "/luz/",
    "pastIpa": "/lɔst/",
    "es": "perder",
    "type": "Action",
    "regular": false,
    "cloze": "He {{}} his keys yesterday.",
    "example": "He lost his keys yesterday.",
    "exampleEs": "Perdió sus llaves ayer.",
    "scene": 14,
    "category": "Problems & plans",
    "synonyms": [
      {
        "word": "misplace",
        "context": "lose your keys",
        "es": "extraviar"
      },
      {
        "word": "be defeated",
        "context": "lose a game",
        "es": "ser derrotado"
      }
    ],
    "note": "Lose → lost. Lose /luz/ is different from loose /lus/.",
    "distractors": [
      "lose",
      "loses",
      "losing"
    ]
  },
  {
    "id": "past-058",
    "word": "need",
    "past": "needed",
    "answer": "needed",
    "ipa": "/nid/",
    "pastIpa": "/ˈnidɪd/",
    "es": "necesitar",
    "type": "Non-action",
    "regular": true,
    "cloze": "I {{}} help with my homework.",
    "example": "I needed help with my homework.",
    "exampleEs": "Necesitaba ayuda con mi tarea.",
    "scene": 24,
    "category": "States & feelings",
    "synonyms": [
      {
        "word": "require",
        "context": "need more time",
        "es": "requerir"
      },
      {
        "word": "depend on",
        "context": "need someone's support",
        "es": "depender de"
      }
    ],
    "note": "Need describes a requirement, a state. Needed adds /ɪd/.",
    "distractors": [
      "need",
      "needs",
      "needing"
    ]
  },
  {
    "id": "past-059",
    "word": "leave",
    "past": "left",
    "answer": "left",
    "ipa": "/liv/",
    "pastIpa": "/lɛft/",
    "es": "salir; dejar",
    "type": "Action",
    "regular": false,
    "cloze": "We {{}} the house at eight yesterday.",
    "example": "We left the house at eight yesterday.",
    "exampleEs": "Salimos de la casa a las ocho ayer.",
    "scene": 19,
    "category": "Travel & movement",
    "synonyms": [
      {
        "word": "depart",
        "context": "leave home",
        "es": "salir"
      },
      {
        "word": "forget",
        "context": "leave your keys at home",
        "es": "olvidar; dejar"
      }
    ],
    "note": "Leave → left. Left can also mean izquierda in a different context.",
    "distractors": [
      "leave",
      "leaves",
      "leaving"
    ]
  },
  {
    "id": "past-060",
    "word": "want",
    "past": "wanted",
    "answer": "wanted",
    "ipa": "/wɑnt/",
    "pastIpa": "/ˈwɑntɪd/",
    "es": "querer",
    "type": "Non-action",
    "regular": true,
    "cloze": "She {{}} a cup of water after her walk.",
    "example": "She wanted a cup of water after her walk.",
    "exampleEs": "Quería un vaso de agua después de su caminata.",
    "scene": 3,
    "category": "States & feelings",
    "synonyms": [
      {
        "word": "desire",
        "context": "want something",
        "es": "desear"
      },
      {
        "word": "would like",
        "context": "want a drink",
        "es": "quisiera; querer"
      }
    ],
    "note": "Want describes a desire, a state. Wanted adds /ɪd/.",
    "distractors": [
      "want",
      "wants",
      "wanting"
    ]
  },
  {
    "id": "past-061",
    "word": "bring",
    "past": "brought",
    "answer": "brought",
    "ipa": "/brɪŋ/",
    "pastIpa": "/brɔt/",
    "es": "traer; llevar hacia un lugar",
    "type": "Action",
    "regular": false,
    "cloze": "He {{}} groceries home yesterday.",
    "example": "He brought groceries home yesterday.",
    "exampleEs": "Trajo las compras a casa ayer.",
    "scene": 16,
    "category": "Home & routines",
    "synonyms": [
      {
        "word": "carry",
        "context": "bring a bag here",
        "es": "traer; llevar"
      },
      {
        "word": "deliver",
        "context": "bring an order to someone",
        "es": "entregar"
      }
    ],
    "note": "Bring → brought. Bring often describes movement toward a reference point.",
    "distractors": [
      "bring",
      "brings",
      "bringing"
    ]
  },
  {
    "id": "past-062",
    "word": "like",
    "past": "liked",
    "answer": "liked",
    "ipa": "/laɪk/",
    "pastIpa": "/laɪkt/",
    "es": "gustar",
    "type": "Non-action",
    "regular": true,
    "cloze": "I {{}} the book we read last week.",
    "example": "I liked the book we read last week.",
    "exampleEs": "Me gustó el libro que leímos la semana pasada.",
    "scene": 7,
    "category": "States & feelings",
    "synonyms": [
      {
        "word": "enjoy",
        "context": "like a book",
        "es": "disfrutar"
      },
      {
        "word": "be fond of",
        "context": "like a person",
        "es": "tener cariño a"
      }
    ],
    "note": "Like describes a preference here. Liked ends in /t/.",
    "distractors": [
      "like",
      "likes",
      "liking"
    ]
  },
  {
    "id": "past-063",
    "word": "buy",
    "past": "bought",
    "answer": "bought",
    "ipa": "/baɪ/",
    "pastIpa": "/bɔt/",
    "es": "comprar",
    "type": "Action",
    "regular": false,
    "cloze": "I {{}} fruit at the store yesterday.",
    "example": "I bought fruit at the store yesterday.",
    "exampleEs": "Compré fruta en la tienda ayer.",
    "scene": 15,
    "category": "Food & shopping",
    "synonyms": [
      {
        "word": "purchase",
        "context": "buy groceries",
        "es": "comprar"
      },
      {
        "word": "accept",
        "context": "buy an explanation informally",
        "es": "creer; aceptar"
      }
    ],
    "note": "Buy → bought. Buy a story can informally mean believe it.",
    "distractors": [
      "buy",
      "buys",
      "buying"
    ]
  },
  {
    "id": "past-064",
    "word": "love",
    "past": "loved",
    "answer": "loved",
    "ipa": "/lʌv/",
    "pastIpa": "/lʌvd/",
    "es": "amar; encantar",
    "type": "Non-action",
    "regular": true,
    "cloze": "We {{}} the food at the restaurant.",
    "example": "We loved the food at the restaurant.",
    "exampleEs": "Nos encantó la comida del restaurante.",
    "scene": 2,
    "category": "States & feelings",
    "synonyms": [
      {
        "word": "adore",
        "context": "love a person",
        "es": "adorar"
      },
      {
        "word": "really enjoy",
        "context": "love a meal",
        "es": "disfrutar mucho"
      }
    ],
    "note": "Love describes a feeling here. Loved ends in /d/.",
    "distractors": [
      "love",
      "loves",
      "loving"
    ]
  },
  {
    "id": "past-065",
    "word": "pay",
    "past": "paid",
    "answer": "paid",
    "ipa": "/peɪ/",
    "pastIpa": "/peɪd/",
    "es": "pagar",
    "type": "Action",
    "regular": false,
    "cloze": "She {{}} for the groceries yesterday.",
    "example": "She paid for the groceries yesterday.",
    "exampleEs": "Pagó las compras ayer.",
    "scene": 15,
    "category": "Food & shopping",
    "synonyms": [
      {
        "word": "settle",
        "context": "pay a bill",
        "es": "liquidar; pagar"
      },
      {
        "word": "compensate",
        "context": "pay someone for work",
        "es": "remunerar"
      }
    ],
    "note": "Pay → paid, not payed when talking about money.",
    "distractors": [
      "pay",
      "pays",
      "paying"
    ]
  },
  {
    "id": "past-066",
    "word": "hate",
    "past": "hated",
    "answer": "hated",
    "ipa": "/heɪt/",
    "pastIpa": "/ˈheɪtɪd/",
    "es": "odiar; detestar",
    "type": "Non-action",
    "regular": true,
    "cloze": "I {{}} the loud noise last night.",
    "example": "I hated the loud noise last night.",
    "exampleEs": "Detesté el ruido fuerte de anoche.",
    "scene": 12,
    "category": "States & feelings",
    "synonyms": [
      {
        "word": "detest",
        "context": "hate something",
        "es": "detestar"
      },
      {
        "word": "strongly dislike",
        "context": "hate waiting",
        "es": "disgustar mucho"
      }
    ],
    "note": "Hate describes a strong feeling. Hated adds /ɪd/.",
    "distractors": [
      "hate",
      "hates",
      "hating"
    ]
  },
  {
    "id": "past-067",
    "word": "spend",
    "past": "spent",
    "answer": "spent",
    "ipa": "/spɛnd/",
    "pastIpa": "/spɛnt/",
    "es": "gastar; pasar tiempo",
    "type": "Action",
    "regular": false,
    "cloze": "We {{}} twenty dollars on lunch.",
    "example": "We spent twenty dollars on lunch.",
    "exampleEs": "Gastamos veinte dólares en el almuerzo.",
    "scene": 15,
    "category": "Food & shopping",
    "synonyms": [
      {
        "word": "use",
        "context": "spend money on food",
        "es": "usar; gastar"
      },
      {
        "word": "pass",
        "context": "spend time with friends",
        "es": "pasar"
      }
    ],
    "note": "Spend → spent. Spend money on something; spend time with someone.",
    "distractors": [
      "spend",
      "spends",
      "spending"
    ]
  },
  {
    "id": "past-068",
    "word": "prefer",
    "past": "preferred",
    "answer": "preferred",
    "ipa": "/prɪˈfɜr/",
    "pastIpa": "/prɪˈfɜrd/",
    "es": "preferir",
    "type": "Non-action",
    "regular": true,
    "cloze": "She {{}} tea to coffee last year.",
    "example": "She preferred tea to coffee last year.",
    "exampleEs": "Prefería el té al café el año pasado.",
    "scene": 3,
    "category": "States & feelings",
    "synonyms": [
      {
        "word": "favor",
        "context": "prefer one option",
        "es": "favorecer; preferir"
      },
      {
        "word": "like better",
        "context": "prefer tea to coffee",
        "es": "gustar más"
      }
    ],
    "note": "Double the final r: prefer → preferred. Prefer A to B.",
    "distractors": [
      "prefer",
      "prefers",
      "preferring"
    ]
  },
  {
    "id": "past-069",
    "word": "meet",
    "past": "met",
    "answer": "met",
    "ipa": "/mit/",
    "pastIpa": "/mɛt/",
    "es": "conocer; reunirse con",
    "type": "Action",
    "regular": false,
    "cloze": "I {{}} a new neighbor yesterday.",
    "example": "I met a new neighbor yesterday.",
    "exampleEs": "Conocí a un nuevo vecino ayer.",
    "scene": 11,
    "category": "Friends & family",
    "synonyms": [
      {
        "word": "get acquainted",
        "context": "meet someone for the first time",
        "es": "conocerse"
      },
      {
        "word": "gather",
        "context": "meet with friends",
        "es": "reunirse"
      }
    ],
    "note": "Meet → met. Meet is an event; know describes familiarity.",
    "distractors": [
      "meet",
      "meets",
      "meeting"
    ]
  },
  {
    "id": "past-070",
    "word": "believe",
    "past": "believed",
    "answer": "believed",
    "ipa": "/bɪˈliv/",
    "pastIpa": "/bɪˈlivd/",
    "es": "creer",
    "type": "Non-action",
    "regular": true,
    "cloze": "I {{}} his story yesterday.",
    "example": "I believed his story yesterday.",
    "exampleEs": "Creí su historia ayer.",
    "scene": 11,
    "category": "States & feelings",
    "synonyms": [
      {
        "word": "trust",
        "context": "believe a person's story",
        "es": "confiar en"
      },
      {
        "word": "think",
        "context": "believe an idea is true",
        "es": "pensar; creer"
      }
    ],
    "note": "Believe describes a belief, a mental state.",
    "distractors": [
      "believe",
      "believes",
      "believing"
    ]
  },
  {
    "id": "past-071",
    "word": "send",
    "past": "sent",
    "answer": "sent",
    "ipa": "/sɛnd/",
    "pastIpa": "/sɛnt/",
    "es": "enviar",
    "type": "Action",
    "regular": false,
    "cloze": "He {{}} me a message this morning.",
    "example": "He sent me a message this morning.",
    "exampleEs": "Me envió un mensaje esta mañana.",
    "scene": 20,
    "category": "Communication",
    "synonyms": [
      {
        "word": "mail",
        "context": "send a letter",
        "es": "enviar por correo"
      },
      {
        "word": "forward",
        "context": "send a message onward",
        "es": "reenviar"
      }
    ],
    "note": "Send → sent.",
    "distractors": [
      "send",
      "sends",
      "sending"
    ]
  },
  {
    "id": "past-072",
    "word": "remember",
    "past": "remembered",
    "answer": "remembered",
    "ipa": "/rɪˈmɛmbər/",
    "pastIpa": "/rɪˈmɛmbərd/",
    "es": "recordar; acordarse de",
    "type": "Non-action",
    "regular": true,
    "cloze": "I {{}} her name yesterday.",
    "example": "I remembered her name yesterday.",
    "exampleEs": "Recordaba su nombre ayer.",
    "scene": 13,
    "category": "States & feelings",
    "synonyms": [
      {
        "word": "recall",
        "context": "remember a name",
        "es": "recordar"
      },
      {
        "word": "keep in mind",
        "context": "remember some advice",
        "es": "tener presente"
      }
    ],
    "note": "Remember describes memory here; actively trying to remember can describe a process.",
    "distractors": [
      "remember",
      "remembers",
      "remembering"
    ]
  },
  {
    "id": "past-073",
    "word": "drive",
    "past": "drove",
    "answer": "drove",
    "ipa": "/draɪv/",
    "pastIpa": "/droʊv/",
    "es": "conducir; manejar",
    "type": "Action",
    "regular": false,
    "cloze": "She {{}} to work yesterday.",
    "example": "She drove to work yesterday.",
    "exampleEs": "Condujo al trabajo ayer.",
    "scene": 9,
    "category": "Travel & movement",
    "synonyms": [
      {
        "word": "operate",
        "context": "drive a car",
        "es": "manejar"
      },
      {
        "word": "take by car",
        "context": "drive someone home",
        "es": "llevar en carro"
      }
    ],
    "note": "Drive → drove. Driven is the past participle.",
    "distractors": [
      "drive",
      "drives",
      "driving"
    ]
  },
  {
    "id": "past-074",
    "word": "agree",
    "past": "agreed",
    "answer": "agreed",
    "ipa": "/əˈɡri/",
    "pastIpa": "/əˈɡrid/",
    "es": "estar de acuerdo; aceptar",
    "type": "Non-action",
    "regular": true,
    "cloze": "We {{}} with our teacher yesterday.",
    "example": "We agreed with our teacher yesterday.",
    "exampleEs": "Estábamos de acuerdo con nuestro profesor ayer.",
    "scene": 24,
    "category": "States & feelings",
    "synonyms": [
      {
        "word": "share an opinion",
        "context": "agree with someone",
        "es": "compartir una opinión"
      },
      {
        "word": "consent",
        "context": "agree to a request",
        "es": "aceptar"
      }
    ],
    "note": "Agree describes a shared opinion here. Agreeing to do something can be an action.",
    "distractors": [
      "agree",
      "agrees",
      "agreeing"
    ]
  },
  {
    "id": "past-075",
    "word": "ride",
    "past": "rode",
    "answer": "rode",
    "ipa": "/raɪd/",
    "pastIpa": "/roʊd/",
    "es": "montar; viajar en",
    "type": "Action",
    "regular": false,
    "cloze": "I {{}} my bicycle yesterday.",
    "example": "I rode my bicycle yesterday.",
    "exampleEs": "Monté en bicicleta ayer.",
    "scene": 22,
    "category": "Travel & movement",
    "synonyms": [
      {
        "word": "cycle",
        "context": "ride a bicycle",
        "es": "andar en bicicleta"
      },
      {
        "word": "travel",
        "context": "ride on a bus",
        "es": "viajar"
      }
    ],
    "note": "Ride → rode. Rode sounds like road.",
    "distractors": [
      "ride",
      "rides",
      "riding"
    ]
  },
  {
    "id": "past-076",
    "word": "hope",
    "past": "hoped",
    "answer": "hoped",
    "ipa": "/hoʊp/",
    "pastIpa": "/hoʊpt/",
    "es": "esperar; tener esperanza",
    "type": "Non-action",
    "regular": true,
    "cloze": "I {{}} the weather would be nice.",
    "example": "I hoped the weather would be nice.",
    "exampleEs": "Esperaba que hiciera buen tiempo.",
    "scene": 13,
    "category": "States & feelings",
    "synonyms": [
      {
        "word": "wish",
        "context": "hope for a good result",
        "es": "desear"
      },
      {
        "word": "be hopeful",
        "context": "hope things improve",
        "es": "tener esperanza"
      }
    ],
    "note": "Drop the final e before adding -ed: hope → hoped. No double p.",
    "distractors": [
      "hope",
      "hopes",
      "hoping"
    ]
  },
  {
    "id": "past-077",
    "word": "wear",
    "past": "wore",
    "answer": "wore",
    "ipa": "/wɛr/",
    "pastIpa": "/wɔr/",
    "es": "llevar puesto; usar",
    "type": "Action",
    "regular": false,
    "cloze": "He {{}} a helmet on his bike ride.",
    "example": "He wore a helmet on his bike ride.",
    "exampleEs": "Llevó puesto un casco durante su paseo en bicicleta.",
    "scene": 22,
    "category": "Home & routines",
    "synonyms": [
      {
        "word": "have on",
        "context": "wear a jacket",
        "es": "llevar puesto"
      },
      {
        "word": "use",
        "context": "wear glasses",
        "es": "usar"
      }
    ],
    "note": "Wear → wore. Put on describes getting dressed; wear describes having clothing on.",
    "distractors": [
      "wear",
      "wears",
      "wearing"
    ]
  },
  {
    "id": "past-078",
    "word": "plan",
    "past": "planned",
    "answer": "planned",
    "ipa": "/plæn/",
    "pastIpa": "/plænd/",
    "es": "planear; organizar",
    "type": "Action",
    "regular": true,
    "cloze": "We {{}} a family dinner yesterday.",
    "example": "We planned a family dinner yesterday.",
    "exampleEs": "Planeamos una cena familiar ayer.",
    "scene": 13,
    "category": "Problems & plans",
    "synonyms": [
      {
        "word": "arrange",
        "context": "plan an event",
        "es": "organizar"
      },
      {
        "word": "intend",
        "context": "plan to do something",
        "es": "tener intención de"
      }
    ],
    "note": "Double the final n: plan → planned.",
    "distractors": [
      "plan",
      "plans",
      "planning"
    ]
  },
  {
    "id": "past-079",
    "word": "put",
    "past": "put",
    "answer": "put",
    "ipa": "/pʊt/",
    "pastIpa": "/pʊt/",
    "es": "poner; colocar",
    "type": "Action",
    "regular": false,
    "cloze": "I {{}} my keys in the drawer last night.",
    "example": "I put my keys in the drawer last night.",
    "exampleEs": "Puse mis llaves en el cajón anoche.",
    "scene": 14,
    "category": "Home & routines",
    "synonyms": [
      {
        "word": "place",
        "context": "put something on a table",
        "es": "colocar"
      },
      {
        "word": "set",
        "context": "put a cup down",
        "es": "poner"
      }
    ],
    "note": "Put has the same base and past form: put → put.",
    "distractors": [
      "puts",
      "putting",
      "putted"
    ]
  },
  {
    "id": "past-080",
    "word": "try",
    "past": "tried",
    "answer": "tried",
    "ipa": "/traɪ/",
    "pastIpa": "/traɪd/",
    "es": "intentar; probar",
    "type": "Action",
    "regular": true,
    "cloze": "I {{}} a new recipe yesterday.",
    "example": "I tried a new recipe yesterday.",
    "exampleEs": "Probé una receta nueva ayer.",
    "scene": 17,
    "category": "Problems & plans",
    "synonyms": [
      {
        "word": "attempt",
        "context": "try to finish a task",
        "es": "intentar"
      },
      {
        "word": "test",
        "context": "try a new product",
        "es": "probar"
      }
    ],
    "note": "Consonant + y changes to -ied: try → tried.",
    "distractors": [
      "try",
      "tries",
      "trying"
    ]
  },
  {
    "id": "past-081",
    "word": "cut",
    "past": "cut",
    "answer": "cut",
    "ipa": "/kʌt/",
    "pastIpa": "/kʌt/",
    "es": "cortar; reducir",
    "type": "Action",
    "regular": false,
    "cloze": "She {{}} vegetables for dinner.",
    "example": "She cut vegetables for dinner.",
    "exampleEs": "Cortó verduras para la cena.",
    "scene": 17,
    "category": "Home & routines",
    "synonyms": [
      {
        "word": "chop",
        "context": "cut vegetables",
        "es": "picar"
      },
      {
        "word": "reduce",
        "context": "cut costs",
        "es": "reducir"
      }
    ],
    "note": "Cut has the same base and past form: cut → cut.",
    "distractors": [
      "cuts",
      "cutting",
      "cutted"
    ]
  },
  {
    "id": "past-082",
    "word": "use",
    "past": "used",
    "answer": "used",
    "ipa": "/juz/",
    "pastIpa": "/juzd/",
    "es": "usar; utilizar",
    "type": "Action",
    "regular": true,
    "cloze": "I {{}} my phone to check the time.",
    "example": "I used my phone to check the time.",
    "exampleEs": "Usé mi teléfono para ver la hora.",
    "scene": 20,
    "category": "Home & routines",
    "synonyms": [
      {
        "word": "employ",
        "context": "use a tool",
        "es": "utilizar"
      },
      {
        "word": "consume",
        "context": "use electricity",
        "es": "consumir"
      }
    ],
    "note": "The verb use has a /z/ sound. Used here ends in /d/.",
    "distractors": [
      "use",
      "uses",
      "using"
    ]
  },
  {
    "id": "past-083",
    "word": "break",
    "past": "broke",
    "answer": "broke",
    "ipa": "/breɪk/",
    "pastIpa": "/broʊk/",
    "es": "romper; incumplir",
    "type": "Action",
    "regular": false,
    "cloze": "I {{}} a glass while washing dishes.",
    "example": "I broke a glass while washing dishes.",
    "exampleEs": "Rompí un vaso mientras lavaba los platos.",
    "scene": 18,
    "category": "Problems & plans",
    "synonyms": [
      {
        "word": "damage",
        "context": "break an object",
        "es": "dañar"
      },
      {
        "word": "violate",
        "context": "break a rule",
        "es": "incumplir"
      }
    ],
    "note": "Break → broke. Broken is the past participle.",
    "distractors": [
      "break",
      "breaks",
      "breaking"
    ]
  },
  {
    "id": "past-084",
    "word": "move",
    "past": "moved",
    "answer": "moved",
    "ipa": "/muv/",
    "pastIpa": "/muvd/",
    "es": "mover; mudarse",
    "type": "Action",
    "regular": true,
    "cloze": "We {{}} to a new apartment last month.",
    "example": "We moved to a new apartment last month.",
    "exampleEs": "Nos mudamos a un apartamento nuevo el mes pasado.",
    "scene": 16,
    "category": "Travel & movement",
    "synonyms": [
      {
        "word": "relocate",
        "context": "move to a new home",
        "es": "mudarse"
      },
      {
        "word": "shift",
        "context": "move a chair",
        "es": "mover"
      }
    ],
    "note": "Move ends in e, so add -d.",
    "distractors": [
      "move",
      "moves",
      "moving"
    ]
  },
  {
    "id": "past-085",
    "word": "choose",
    "past": "chose",
    "answer": "chose",
    "ipa": "/tʃuz/",
    "pastIpa": "/tʃoʊz/",
    "es": "elegir; escoger",
    "type": "Action",
    "regular": false,
    "cloze": "She {{}} a gift for her friend.",
    "example": "She chose a gift for her friend.",
    "exampleEs": "Eligió un regalo para su amiga.",
    "scene": 21,
    "category": "Problems & plans",
    "synonyms": [
      {
        "word": "select",
        "context": "choose a gift",
        "es": "seleccionar"
      },
      {
        "word": "pick",
        "context": "choose one option",
        "es": "escoger"
      }
    ],
    "note": "Choose → chose. The past form has one o.",
    "distractors": [
      "choose",
      "chooses",
      "choosing"
    ]
  },
  {
    "id": "past-086",
    "word": "check",
    "past": "checked",
    "answer": "checked",
    "ipa": "/tʃɛk/",
    "pastIpa": "/tʃɛkt/",
    "es": "revisar; comprobar",
    "type": "Action",
    "regular": true,
    "cloze": "I {{}} my email this morning.",
    "example": "I checked my email this morning.",
    "exampleEs": "Revisé mi correo electrónico esta mañana.",
    "scene": 20,
    "category": "Work & study",
    "synonyms": [
      {
        "word": "inspect",
        "context": "check a bicycle",
        "es": "inspeccionar"
      },
      {
        "word": "verify",
        "context": "check an answer",
        "es": "comprobar"
      }
    ],
    "note": "Checked ends in /t/.",
    "distractors": [
      "check",
      "checks",
      "checking"
    ]
  },
  {
    "id": "past-087",
    "word": "forget",
    "past": "forgot",
    "answer": "forgot",
    "ipa": "/fərˈɡɛt/",
    "pastIpa": "/fərˈɡɑt/",
    "es": "olvidar; olvidarse de",
    "type": "Non-action",
    "regular": false,
    "cloze": "I {{}} my friend's name yesterday.",
    "example": "I forgot my friend's name yesterday.",
    "exampleEs": "Olvidé el nombre de mi amigo ayer.",
    "scene": 13,
    "category": "States & feelings",
    "synonyms": [
      {
        "word": "fail to remember",
        "context": "forget a name",
        "es": "no recordar"
      },
      {
        "word": "leave behind",
        "context": "forget your bag at home",
        "es": "dejar olvidado"
      }
    ],
    "note": "Forget → forgot. This example describes a lapse in memory.",
    "distractors": [
      "forget",
      "forgets",
      "forgetting"
    ]
  },
  {
    "id": "past-088",
    "word": "order",
    "past": "ordered",
    "answer": "ordered",
    "ipa": "/ˈɔrdər/",
    "pastIpa": "/ˈɔrdərd/",
    "es": "pedir; ordenar",
    "type": "Action",
    "regular": true,
    "cloze": "We {{}} lunch at the café.",
    "example": "We ordered lunch at the café.",
    "exampleEs": "Pedimos el almuerzo en el café.",
    "scene": 11,
    "category": "Food & shopping",
    "synonyms": [
      {
        "word": "request",
        "context": "order food",
        "es": "pedir"
      },
      {
        "word": "command",
        "context": "order someone to leave",
        "es": "ordenar"
      }
    ],
    "note": "Order can mean request a purchase or give a command.",
    "distractors": [
      "order",
      "orders",
      "ordering"
    ]
  },
  {
    "id": "past-089",
    "word": "begin",
    "past": "began",
    "answer": "began",
    "ipa": "/bɪˈɡɪn/",
    "pastIpa": "/bɪˈɡæn/",
    "es": "empezar; comenzar",
    "type": "Action",
    "regular": false,
    "cloze": "Class {{}} at six yesterday.",
    "example": "Class began at six yesterday.",
    "exampleEs": "La clase empezó a las seis ayer.",
    "scene": 24,
    "category": "Work & study",
    "synonyms": [
      {
        "word": "start",
        "context": "begin a class",
        "es": "empezar"
      },
      {
        "word": "commence",
        "context": "begin an event formally",
        "es": "comenzar"
      }
    ],
    "note": "Begin → began. Begun is the past participle.",
    "distractors": [
      "begin",
      "begins",
      "beginning"
    ]
  },
  {
    "id": "past-090",
    "word": "borrow",
    "past": "borrowed",
    "answer": "borrowed",
    "ipa": "/ˈbɑroʊ/",
    "pastIpa": "/ˈbɑroʊd/",
    "es": "pedir prestado; tomar prestado",
    "type": "Action",
    "regular": true,
    "cloze": "I {{}} a book from my friend.",
    "example": "I borrowed a book from my friend.",
    "exampleEs": "Tomé prestado un libro de mi amigo.",
    "scene": 7,
    "category": "Friends & family",
    "synonyms": [
      {
        "word": "take on loan",
        "context": "borrow a book",
        "es": "tomar prestado"
      },
      {
        "word": "use temporarily",
        "context": "borrow someone's bicycle",
        "es": "usar temporalmente"
      }
    ],
    "note": "Borrow means receive temporarily. Lend means give temporarily.",
    "distractors": [
      "borrow",
      "borrows",
      "borrowing"
    ]
  },
  {
    "id": "past-091",
    "word": "win",
    "past": "won",
    "answer": "won",
    "ipa": "/wɪn/",
    "pastIpa": "/wʌn/",
    "es": "ganar",
    "type": "Action",
    "regular": false,
    "cloze": "Our team {{}} the game yesterday.",
    "example": "Our team won the game yesterday.",
    "exampleEs": "Nuestro equipo ganó el partido ayer.",
    "scene": 23,
    "category": "Free time",
    "synonyms": [
      {
        "word": "be victorious",
        "context": "win a game",
        "es": "salir victorioso"
      },
      {
        "word": "earn",
        "context": "win someone's trust",
        "es": "ganarse"
      }
    ],
    "note": "Win → won. Won sounds like one.",
    "distractors": [
      "win",
      "wins",
      "winning"
    ]
  },
  {
    "id": "past-092",
    "word": "save",
    "past": "saved",
    "answer": "saved",
    "ipa": "/seɪv/",
    "pastIpa": "/seɪvd/",
    "es": "ahorrar; guardar; salvar",
    "type": "Action",
    "regular": true,
    "cloze": "She {{}} money for a new bicycle.",
    "example": "She saved money for a new bicycle.",
    "exampleEs": "Ahorró dinero para una bicicleta nueva.",
    "scene": 15,
    "category": "Food & shopping",
    "synonyms": [
      {
        "word": "put aside",
        "context": "save money",
        "es": "apartar; ahorrar"
      },
      {
        "word": "store",
        "context": "save a file",
        "es": "guardar"
      }
    ],
    "note": "Save ends in e, so add -d. The meaning depends on context.",
    "distractors": [
      "save",
      "saves",
      "saving"
    ]
  },
  {
    "id": "past-093",
    "word": "teach",
    "past": "taught",
    "answer": "taught",
    "ipa": "/titʃ/",
    "pastIpa": "/tɔt/",
    "es": "enseñar",
    "type": "Action",
    "regular": false,
    "cloze": "He {{}} us a new English word.",
    "example": "He taught us a new English word.",
    "exampleEs": "Nos enseñó una palabra nueva en inglés.",
    "scene": 24,
    "category": "Work & study",
    "synonyms": [
      {
        "word": "instruct",
        "context": "teach a skill",
        "es": "instruir"
      },
      {
        "word": "show",
        "context": "teach someone how to cook",
        "es": "mostrar"
      }
    ],
    "note": "Teach → taught. The gh is silent.",
    "distractors": [
      "teach",
      "teaches",
      "teaching"
    ]
  },
  {
    "id": "past-094",
    "word": "worry",
    "past": "worried",
    "answer": "worried",
    "ipa": "/ˈwɜri/",
    "pastIpa": "/ˈwɜrid/",
    "es": "preocuparse",
    "type": "Non-action",
    "regular": true,
    "cloze": "I {{}} about my exam last night.",
    "example": "I worried about my exam last night.",
    "exampleEs": "Me preocupé por mi examen anoche.",
    "scene": 13,
    "category": "States & feelings",
    "synonyms": [
      {
        "word": "be concerned",
        "context": "worry about a problem",
        "es": "estar preocupado"
      },
      {
        "word": "feel anxious",
        "context": "worry about the future",
        "es": "sentirse ansioso"
      }
    ],
    "note": "Worry describes an emotional state here. Consonant + y changes to -ied.",
    "distractors": [
      "worry",
      "worries",
      "worrying"
    ]
  },
  {
    "id": "past-095",
    "word": "catch",
    "past": "caught",
    "answer": "caught",
    "ipa": "/kætʃ/",
    "pastIpa": "/kɔt/",
    "es": "atrapar; tomar; contagiarse de",
    "type": "Action",
    "regular": false,
    "cloze": "I {{}} the bus at eight yesterday.",
    "example": "I caught the bus at eight yesterday.",
    "exampleEs": "Tomé el autobús a las ocho ayer.",
    "scene": 8,
    "category": "Travel & movement",
    "synonyms": [
      {
        "word": "take",
        "context": "catch a bus",
        "es": "tomar"
      },
      {
        "word": "capture",
        "context": "catch a ball",
        "es": "atrapar"
      }
    ],
    "note": "Catch → caught. Catch the bus means get on it in time.",
    "distractors": [
      "catch",
      "catches",
      "catching"
    ]
  },
  {
    "id": "past-096",
    "word": "enjoy",
    "past": "enjoyed",
    "answer": "enjoyed",
    "ipa": "/ɪnˈdʒɔɪ/",
    "pastIpa": "/ɪnˈdʒɔɪd/",
    "es": "disfrutar",
    "type": "Action",
    "regular": true,
    "cloze": "We {{}} a long walk yesterday.",
    "example": "We enjoyed a long walk yesterday.",
    "exampleEs": "Disfrutamos de una larga caminata ayer.",
    "scene": 5,
    "category": "Free time",
    "synonyms": [
      {
        "word": "have fun",
        "context": "enjoy an activity",
        "es": "divertirse"
      },
      {
        "word": "appreciate",
        "context": "enjoy good food",
        "es": "apreciar; disfrutar"
      }
    ],
    "note": "Enjoy describes an experience here and can use continuous forms.",
    "distractors": [
      "enjoy",
      "enjoys",
      "enjoying"
    ]
  },
  {
    "id": "past-097",
    "word": "hold",
    "past": "held",
    "answer": "held",
    "ipa": "/hoʊld/",
    "pastIpa": "/hɛld/",
    "es": "sostener; celebrar; mantener",
    "type": "Action",
    "regular": false,
    "cloze": "He {{}} the grocery bag for me.",
    "example": "He held the grocery bag for me.",
    "exampleEs": "Me sostuvo la bolsa de compras.",
    "scene": 16,
    "category": "Home & routines",
    "synonyms": [
      {
        "word": "carry",
        "context": "hold a bag",
        "es": "sostener; llevar"
      },
      {
        "word": "organize",
        "context": "hold a meeting",
        "es": "celebrar; organizar"
      }
    ],
    "note": "Hold → held. Hold a meeting has a different meaning from hold a bag.",
    "distractors": [
      "hold",
      "holds",
      "holding"
    ]
  },
  {
    "id": "past-098",
    "word": "seem",
    "past": "seemed",
    "answer": "seemed",
    "ipa": "/sim/",
    "pastIpa": "/simd/",
    "es": "parecer",
    "type": "Non-action",
    "regular": true,
    "cloze": "She {{}} happy after class.",
    "example": "She seemed happy after class.",
    "exampleEs": "Parecía feliz después de clase.",
    "scene": 0,
    "category": "States & feelings",
    "synonyms": [
      {
        "word": "appear",
        "context": "seem happy",
        "es": "parecer"
      },
      {
        "word": "look",
        "context": "seem tired visually",
        "es": "verse"
      }
    ],
    "note": "Seem describes an impression, a state. Seemed ends in /d/.",
    "distractors": [
      "seem",
      "seems",
      "seeming"
    ]
  },
  {
    "id": "past-099",
    "word": "keep",
    "past": "kept",
    "answer": "kept",
    "ipa": "/kip/",
    "pastIpa": "/kɛpt/",
    "es": "guardar; conservar; mantener",
    "type": "Action",
    "regular": false,
    "cloze": "I {{}} the receipt after shopping.",
    "example": "I kept the receipt after shopping.",
    "exampleEs": "Guardé el recibo después de hacer las compras.",
    "scene": 15,
    "category": "Home & routines",
    "synonyms": [
      {
        "word": "retain",
        "context": "keep a receipt",
        "es": "conservar"
      },
      {
        "word": "maintain",
        "context": "keep a room clean",
        "es": "mantener"
      }
    ],
    "note": "Keep → kept. Keep can also mean continue in keep working.",
    "distractors": [
      "keep",
      "keeps",
      "keeping"
    ]
  },
  {
    "id": "past-100",
    "word": "own",
    "past": "owned",
    "answer": "owned",
    "ipa": "/oʊn/",
    "pastIpa": "/oʊnd/",
    "es": "poseer; ser dueño de",
    "type": "Non-action",
    "regular": true,
    "cloze": "We {{}} a small car last year.",
    "example": "We owned a small car last year.",
    "exampleEs": "Éramos dueños de un carro pequeño el año pasado.",
    "scene": 1,
    "category": "States & feelings",
    "synonyms": [
      {
        "word": "possess",
        "context": "own a car",
        "es": "poseer"
      },
      {
        "word": "have",
        "context": "own a home",
        "es": "tener"
      }
    ],
    "note": "Own describes possession, a state. Owned ends in /d/.",
    "distractors": [
      "own",
      "owns",
      "owning"
    ]
  }
];
const sceneDescriptions=["An adult relaxing happily at home", "An adult standing by their car with a key", "An adult eating breakfast", "An adult drinking water", "An adult waking in bed", "An adult walking outside", "An adult running in a park", "An adult reading on a sofa", "An adult waiting at a bus stop", "An adult driving a car", "An adult writing in a notebook", "Friends talking at a caf\u00e9", "An adult wearing headphones", "An adult considering a paper", "An adult finding keys in a drawer", "An adult paying at a grocery store", "An adult carrying groceries home", "An adult preparing vegetables", "An adult washing dishes", "An adult opening a front door", "An adult using a laptop for a call", "An adult giving a gift to a friend", "An adult riding a bicycle", "An adult playing soccer", "Adults studying a notebook together"];
function shuffle(a,random=Math.random){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b}
function validate(){const errors=[];if(words.length!==100)errors.push('Expected 100 verbs');if(words.filter(w=>w.regular).length!==50)errors.push('Expected 50 regular verbs');const ids=new Set(),bases=new Set();for(const w of words){if(ids.has(w.id)||bases.has(w.word))errors.push('Duplicate '+w.id);ids.add(w.id);bases.add(w.word);if(new Set([w.answer,...w.distractors]).size!==4)errors.push('Invalid choices '+w.id);if(w.synonyms.length!==2)errors.push('Missing contexts '+w.id);if(!w.cloze.includes('{{}}')||w.example!==w.cloze.replace('{{}}',w.answer))errors.push('Invalid example '+w.id);if(!Number.isInteger(w.scene)||w.scene<0||w.scene>=25)errors.push('Invalid scene '+w.id);if(!['Action','Non-action'].includes(w.type))errors.push('Invalid type '+w.id);for(const k of ['word','past','answer','ipa','pastIpa','es','example','exampleEs','category','note'])if(!w[k])errors.push('Missing '+k+' '+w.id)}return errors}
const api={words,sceneDescriptions,shuffle,validate};
if(typeof module==='object'&&module.exports)module.exports=api;else root.PAST_VERBS=api;
})(typeof window!=='undefined'?window:globalThis);
