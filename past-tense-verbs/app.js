(function(){
'use strict';
const C=window.PAST_VERBS,words=C.words,$=id=>document.getElementById(id);
const KEY='tea-past-tense-verbs-v1';
let index=0,learned=new Set(),answers={},quiz=[],quizAt=0,score=0,quizAnswered=false;
try{const v=JSON.parse(localStorage.getItem(KEY));if(v&&v.version===1){if(Number.isInteger(v.index)&&v.index>=0&&v.index<words.length)index=v.index;learned=new Set((Array.isArray(v.learned)?v.learned:[]).filter(id=>words.some(w=>w.id===id)));for(const [id,choice] of Object.entries(v.answers||{})){const w=words.find(w=>w.id===id);if(w&&[w.answer,...w.distractors].includes(choice))answers[id]=choice}}}catch{}
function save(){try{localStorage.setItem(KEY,JSON.stringify({version:1,index,learned:[...learned],answers}))}catch{}}
function speak(text,rate=.86){if(!('speechSynthesis' in window)){toast('Pronunciation is not available in this browser.');return}speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='en-US';u.rate=rate;const voices=speechSynthesis.getVoices();u.voice=voices.find(v=>v.lang==='en-US'&&/Natural|Samantha|Google US English/i.test(v.name))||voices.find(v=>v.lang==='en-US')||null;speechSynthesis.speak(u)}
function toast(text){$('toast').textContent=text;$('toast').classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('toast').classList.remove('show'),2300)}
function el(tag,text,className){const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(className)e.className=className;return e}
function optionButton(text,correct,chosen,className='meaning-option'){
 const b=el('button',text,className);b.type='button';b.dataset.value=text;
 if(chosen!==undefined){b.disabled=true;if(text===correct){b.classList.add('correct');b.textContent='✓ '+text}else if(text===chosen){b.classList.add('wrong');b.textContent='✕ '+text}}
 return b;
}
function render(){
 const w=words[index],chosen=answers[w.id],done=chosen!==undefined;
 $('counter').textContent='VERB '+(index+1)+' OF '+words.length;$('word').textContent=w.word;$('ipa').textContent=w.ipa;
 $('regularTag').textContent=w.regular?'Regular · -ed':'Irregular · Forma especial';
 $('actionTag').textContent=w.type==='Action'?'Action in this sentence · Acción':'Non-action in this sentence · Estado';
 $('spanish').textContent=w.es;$('categoryBadge').textContent=w.category;
 $('example').textContent=done?w.example:w.cloze.replace('{{}}','_____');$('exampleSpanish').textContent=w.exampleEs;
 $('pastForm').textContent=w.past;$('pastIpa').textContent=w.pastIpa;$('usageNote').textContent=w.note;
 for(const id of ['exampleSpanish','sentenceBtn','pastCard','usageNote','retryBtn'])$(id).hidden=!done;
 $('scene').style.backgroundPosition=(w.scene%5*25)+'% '+(Math.floor(w.scene/5)*25)+'%';$('scene').setAttribute('aria-label',C.sceneDescriptions[w.scene]+'. Context illustration for '+w.word+'.');
 $('progressBar').style.width=((index+1)/words.length*100)+'%';
 $('knownBtn').disabled=!done;$('knownBtn').classList.toggle('active',learned.has(w.id));$('knownBtn').textContent=learned.has(w.id)?'✓ Learned':'✓ Mark learned';$('knownBtn').setAttribute('aria-pressed',String(learned.has(w.id)));
 $('prevBtn').disabled=index===0;$('nextBtn').textContent=index===words.length-1?'See Results':'Next →';
 $('meaningOptions').replaceChildren();
 C.shuffle([w.answer,...w.distractors]).forEach(text=>{const b=optionButton(text,w.answer,chosen);b.onclick=()=>choose(text);$('meaningOptions').append(b)});
 $('meaningFeedback').textContent=done?(chosen===w.answer?'✓ Correct! ':'✕ Not quite. ')+w.word+' → '+w.past+'.':'';
 $('synonymList').replaceChildren();
 w.synonyms.forEach(s=>{const row=el('div',undefined,'synonym-row');const translation=el('p',s.es);translation.lang='es';row.append(el('strong',s.word),el('p','Context: '+s.context),translation);$('synonymList').append(row)});
 save();
}
function choose(text){const w=words[index];if(answers[w.id]!==undefined)return;answers[w.id]=text;render();$('announcer').textContent=$('meaningFeedback').textContent+' '+w.example}
function move(amount){const next=Math.max(0,Math.min(words.length-1,index+amount));if(next===index&&amount>0){showPracticeResults();return}index=next;render();$('lesson').focus();$('announcer').textContent=words[index].word+', '+(index+1)+' of 100.'}
function buildLibrary(){
 const cat=$('categorySelect').value||'All',type=$('typeSelect').value||'All',q=$('searchInput').value.trim().toLowerCase();
 $('learnedCount').textContent=learned.size+' learned · '+Object.keys(answers).length+' practiced';$('wordGrid').replaceChildren();
 words.forEach((w,i)=>{
  if(cat!=='All'&&w.category!==cat)return;
  if(type==='Regular'&&!w.regular||type==='Irregular'&&w.regular||['Action','Non-action'].includes(type)&&w.type!==type)return;
  if(q&&!(w.word+' '+w.past+' '+w.es).toLowerCase().includes(q))return;
  const b=el('button',undefined,'word-chip'+(learned.has(w.id)?' learned':''));b.type='button';
  b.append(el('strong',(i+1)+'. '+w.word+(answers[w.id]!==undefined?' → '+w.past:'')),el('span',w.es),el('span',(w.regular?'Regular':'Irregular')+' · '+w.type));
  b.onclick=()=>{index=i;$('libraryDialog').close();render();$('lesson').focus()};$('wordGrid').append(b);
 });
 if(!$('wordGrid').children.length)$('wordGrid').append(el('p','No matching verbs. Try changing the search or filters.'));
}
['All',...new Set(words.map(w=>w.category))].forEach(cat=>{const o=el('option',cat);o.value=cat;$('categorySelect').append(o)});
function startQuiz(){
 const r=C.shuffle(words.filter(w=>w.regular)).slice(0,2),ir=C.shuffle(words.filter(w=>!w.regular)).slice(0,2),remaining=words.filter(w=>![...r,...ir].includes(w));
 quiz=C.shuffle([...r,...ir,C.shuffle(remaining)[0]]);quizAt=0;score=0;
 $('quizEyebrow').textContent='5 QUESTIONS · REGULAR + IRREGULAR';$('quizTitle').textContent='Quick Past-Tense Quiz';
 if(!$('quizDialog').open)$('quizDialog').showModal();renderQuiz();
}
function renderQuiz(){
 const box=$('quizContent');box.replaceChildren();quizAnswered=false;
 if(quizAt===quiz.length){
  const d=el('div',undefined,'quiz-result'),total=el('strong',score+'/5');
  const b=el('button','Try Another Quiz','button primary quiz-next');b.type='button';b.onclick=startQuiz;
  d.append(el('p','Quiz complete'),total,el('p',score===5?'Excellent work!':score>=3?'Good work—keep practicing!':'Review the past forms and try again.'),b);box.append(d);total.tabIndex=-1;total.focus();return;
 }
 const w=quiz[quizAt],progress=el('p','Question '+(quizAt+1)+' of 5','quiz-progress');
 const prompt=el('p','Complete the sentence with the past of “'+w.word+'”.','quiz-question');prompt.tabIndex=-1;
 const sentence=el('p',w.cloze.replace('{{}}','_____'),'quiz-sentence'),opts=el('div',undefined,'quiz-options');
 const feedback=el('p',undefined,'quiz-feedback');feedback.setAttribute('aria-live','polite');
 const next=el('button',quizAt===4?'See Results':'Next Question →','button primary quiz-next');next.type='button';next.hidden=true;next.onclick=()=>{quizAt++;renderQuiz()};
 C.shuffle([w.answer,...w.distractors]).forEach(text=>{
  const b=optionButton(text,w.answer,undefined,'quiz-option');
  b.onclick=()=>{if(quizAnswered)return;quizAnswered=true;const ok=text===w.answer;if(ok)score++;[...opts.children].forEach(x=>{x.disabled=true;if(x.dataset.value===w.answer){x.classList.add('correct');x.textContent='✓ '+x.dataset.value}else if(x===b){x.classList.add('wrong');x.textContent='✕ '+text}});sentence.textContent=w.example;feedback.textContent=(ok?'Correct! ':'Not quite. ')+w.word+' → '+w.past+'. '+w.exampleEs;next.hidden=false};opts.append(b);
 });box.append(progress,prompt,sentence,opts,feedback,next);prompt.focus();
}
function showPracticeResults(){
 const practiced=words.filter(w=>answers[w.id]!==undefined),correct=practiced.filter(w=>answers[w.id]===w.answer),toReview=words.filter(w=>answers[w.id]!==w.answer);
 $('quizEyebrow').textContent='YOUR PRACTICE';$('quizTitle').textContent='Past-Tense Progress';
 const box=$('quizContent');box.replaceChildren();const d=el('div',undefined,'quiz-result'),total=el('strong',correct.length+'/100');
 const review=el('button',toReview.length?'Review & Continue':'Practice Again','button primary quiz-next');review.type='button';
 review.onclick=()=>{index=toReview.length?words.indexOf(toReview[0]):0;delete answers[words[index].id];$('quizDialog').close();render();$('lesson').focus()};
 d.append(el('p','Correct answers'),total,el('p',practiced.length+' practiced · '+(practiced.length-correct.length)+' to retry · '+(100-practiced.length)+' remaining · '+learned.size+' learned','result-stats'),review);box.append(d);
 if(!$('quizDialog').open)$('quizDialog').showModal();total.tabIndex=-1;total.focus();
}
$('prevBtn').onclick=()=>move(-1);$('nextBtn').onclick=()=>move(1);
$('retryBtn').onclick=()=>{delete answers[words[index].id];render();$('announcer').textContent='Choose the past form again.'};
$('knownBtn').onclick=()=>{const w=words[index];if(answers[w.id]===undefined)return;learned.has(w.id)?learned.delete(w.id):learned.add(w.id);render();toast(learned.has(w.id)?'Marked as learned!':'Removed from learned verbs')};
$('libraryBtn').onclick=()=>{buildLibrary();$('libraryDialog').showModal();$('searchInput').focus()};
$('quizBtn').onclick=startQuiz;$('searchInput').oninput=buildLibrary;$('categorySelect').onchange=buildLibrary;$('typeSelect').onchange=buildLibrary;
$('speakBtn').onclick=()=>speak(words[index].word==='read'?'I read every day.':words[index].word,.85);
$('pastSpeakBtn').onclick=()=>{const w=words[index];if(w.word==='read')speak('I read a book yesterday.');else speak(w.word==='be'?'was, were':w.past,.85)};
$('sentenceBtn').onclick=()=>speak(words[index].example,.9);
document.addEventListener('keydown',e=>{if(document.querySelector('dialog[open]')||/INPUT|SELECT|TEXTAREA|BUTTON|SUMMARY/.test(e.target.tagName))return;if(e.key==='ArrowRight'){e.preventDefault();move(1)}if(e.key==='ArrowLeft'){e.preventDefault();move(-1)}});
if(C.validate().length){$('word').textContent='Content could not be loaded.';return}
render();
})();
