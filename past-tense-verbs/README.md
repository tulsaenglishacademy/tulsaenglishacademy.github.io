# 100 Everyday Past-Tense Verbs

Tulsa English Academy activity: 50 regular and 50 irregular everyday verbs. Students select the simple-past form in a contextual sentence. Cards include broad American English IPA, Spanish meanings and examples, context-specific action/state labels, two contextual synonyms or related meanings, audio, a searchable library, a mixed quick quiz, and saved progress.

## Content references

Original examples and translations were authored for this activity. Grammar checks use the British Council explanations of [past simple](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/past-simple) and [stative verbs](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/stative-verbs). Action/state labels describe the meaning in the supplied sentence, rather than every use of the verb. Synonyms are contextual approximations; some require different sentence structures.

## Artwork

Mode: built-in image-generation tool.
Project asset: `past-tense-verbs/assets/scenes.webp`.
Twenty-five realistic scenes are shared by relevant verb lessons. CSS displays one square panel from the atlas at a time.

Final generation prompt:

Use case: illustration-story. Asset type: ONE square sprite atlas for an adult ESL vocabulary website. Create a polished realistic editorial illustration contact sheet with EXACTLY 5 columns and 5 rows, 25 equally sized square panels, panels edge-to-edge no gutters or borders, no text or numbers anywhere. Natural anatomy and realistic proportions, contemporary diverse adults, softly lit real daily environments, photographic detail with subtle painterly softness. Each panel an independent centered scene, whole subject comfortably inside its own square. Row-major content strictly: Row1: (1) relaxed adult smiling at home; (2) adult proudly beside their own car with car key; (3) adult eating breakfast; (4) adult drinking water; (5) adult waking in bed. Row2: (6) adult walking on a sidewalk with tote bag; (7) adult jogging in park; (8) adult sitting on a chair reading book; (9) adult standing waiting at bus stop; (10) adult driving car safely with seatbelt. Row3: (11) adult writing in notebook; (12) two friends having conversation at cafe; (13) adult wearing headphones; (14) adult considering options on a paper with hand on chin; (15) adult finding keys inside a drawer. Row4: (16) grocery shopper paying cashier; (17) adult carrying grocery bag into home; (18) adult chopping vegetables in kitchen; (19) adult washing dishes; (20) adult opening front door. Row5: (21) adult in video call at laptop; (22) adult handing a small wrapped gift to friend; (23) adult riding bicycle with helmet; (24) adult playing ball at park; (25) two adults studying a notebook together. No graphic labels, no writing, no watermarks, no decorative outer frame. Clear everyday contexts, consistent realistic aesthetic, square overall composition.

## Validation

`node --check past-tense-verbs/app.js`
`node --check past-tense-verbs/data.js`
The content validator checks 100 unique verbs, the 50/50 split, four distinct answer choices, two contexts per verb, examples, and image mappings. A DOM harness verifies all 100 cards, correct and incorrect feedback, retries, IPA and translations, saved progress, library filters, search, the results summary, and mixed quiz scoring. Live desktop-browser checks verify answer feedback, contextual synonyms, search, a non-action lesson, saved progress after reload, and quiz navigation.

