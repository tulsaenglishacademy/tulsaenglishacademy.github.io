(function(){
'use strict';
const C=window.PHRASAL_VERBS,words=C.words,$=id=>document.getElementById(id);
const KEY='tea-phrasal-verbs-v1';
let index=0,learned=new Set(),answers={},quiz=[],quizAt=0,score=0,quizAnswered=false;
try{const v=JSON.parse(localStorage.getItem(KEY));if(v&&v.version===1){if(Number.isInteger(v.index)&&v.index>=0&&v.index<words.length)index=v.index;learned=new Set((Array.isArray(v.learned)?v.learned:[]).filter(id=>words.some(w=>w.id===id)));for(const [id,choice] of Object.entries(v.answers||{})){const w=words.find(w=>w.id===id);if(w&&[w.meaning,...w.distractors].includes(choice))answers[id]=choice}}}catch{}
function save(){try{localStorage.setItem(KEY,JSON.stringify({version:1,index,learned:[...learned],answers}))}catch{}}
function speak(text,rate=.86){if(!('speechSynthesis' in window)){toast('Pronunciation is not available in this browser.');return}speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='en-US';u.rate=rate;const voices=speechSynthesis.getVoices();u.voice=voices.find(v=>v.lang==='en-US'&&/Natural|Samantha|Google US English/i.test(v.name))||voices.find(v=>v.lang==='en-US')||null;speechSynthesis.speak(u)}
function toast(text){$('toast').textContent=text;$('toast').classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('toast').classList.remove('show'),2300)}
function optionButton(text,correct,chosen){
 const b=document.createElement('button');b.type='button';b.className='meaning-option';b.textContent=text;b.dataset.value=text;
 if(chosen!==undefined){b.disabled=true;if(text===correct){b.classList.add('correct');b.textContent='✓ '+text}else if(text===chosen){b.classList.add('wrong');b.textContent='✕ '+text}}
 return b;
}
function render(){
 const w=words[index],chosen=answers[w.id],done=chosen!==undefined;
 $('counter').textContent='PHRASAL VERB '+(index+1)+' OF '+words.length;$('word').textContent=w.word;$('ipa').textContent=w.ipa;$('example').textContent=w.example;$('exampleSpanish').textContent=w.exampleEs;$('spanish').textContent=w.es;$('categoryBadge').textContent=w.category;
 $('scene').style.backgroundPosition=(w.scene%5*25)+'% '+(Math.floor(w.scene/5)*100/3)+'%';$('scene').setAttribute('aria-label',C.sceneDescriptions[w.scene]+'. Context illustration for '+w.word+'.');
 $('progressBar').style.width=((index+1)/words.length*100)+'%';
 $('translationCard').hidden=!done;$('exampleSpanish').hidden=!done;
 $('knownBtn').disabled=!done;$('knownBtn').classList.toggle('active',learned.has(w.id));$('knownBtn').textContent=learned.has(w.id)?'✓ Learned':'✓ Mark learned';$('knownBtn').setAttribute('aria-pressed',String(learned.has(w.id)));
 $('prevBtn').disabled=index===0;$('nextBtn').textContent=index===words.length-1?'Finish':'Next →';
 $('meaningOptions').replaceChildren();
 C.shuffle([w.meaning,...w.distractors]).forEach(text=>{const b=optionButton(text,w.meaning,chosen);b.onclick=()=>choose(text);$('meaningOptions').append(b)});
 $('meaningFeedback').textContent=done?(chosen===w.meaning?'✓ Correct! ':'✕ Not quite. ')+ 'In this sentence, “'+w.word+'” means “'+w.meaning+'”.':'';
 save();
}
function choose(text){const w=words[index];if(answers[w.id]!==undefined)return;answers[w.id]=text;render();$('announcer').textContent=$('meaningFeedback').textContent}
function move(amount){const next=Math.max(0,Math.min(words.length-1,index+amount));if(next===index&&amount>0){toast('End of the library. '+Object.keys(answers).length+' of 100 practiced.');return}index=next;render();$('lesson').focus();$('announcer').textContent=words[index].word+', '+(index+1)+' of 100.'}
function buildLibrary(){
 const cat=$('categorySelect').value||'All',q=$('searchInput').value.trim().toLowerCase();$('learnedCount').textContent=learned.size+' learned · '+Object.keys(answers).length+' practiced';$('wordGrid').replaceChildren();
 words.forEach((w,i)=>{if(cat!=='All'&&w.category!==cat||q&&!((w.word+' '+w.es).toLowerCase().includes(q)))return;const b=document.createElement('button');b.type='button';b.className='word-chip'+(learned.has(w.id)?' learned':'');const strong=document.createElement('strong');strong.textContent=(i+1)+'. '+w.word;const span=document.createElement('span');span.textContent=(answers[w.id]!==undefined?w.es+' · ':'')+w.category;b.append(strong,span);b.onclick=()=>{index=i;$('libraryDialog').close();render();$('lesson').focus()};$('wordGrid').append(b)});
 if(!$('wordGrid').children.length){const p=document.createElement('p');p.textContent='No matching phrasal verbs.';$('wordGrid').append(p)}
}
['All',...new Set(words.map(w=>w.category))].forEach(cat=>{const o=document.createElement('option');o.value=cat;o.textContent=cat;$('categorySelect').append(o)});
function startQuiz(){quiz=C.shuffle(words).slice(0,5);quizAt=0;score=0;if(!$('quizDialog').open)$('quizDialog').showModal();renderQuiz()}
function renderQuiz(){
 const box=$('quizContent');box.replaceChildren();quizAnswered=false;
 if(quizAt===quiz.length){
 const d=document.createElement('div');d.className='quiz-result';const title=document.createElement('p');title.textContent='Quiz complete';const total=document.createElement('strong');total.textContent=score+'/5';const msg=document.createElement('p');msg.textContent=score===5?'Excellent work!':score>=3?'Good work—keep practicing!':'Review the examples and try again.';const b=document.createElement('button');b.className='button primary quiz-next';b.textContent='Try Another Quiz';b.onclick=startQuiz;d.append(title,total,msg,b);box.append(d);total.tabIndex=-1;total.focus();return;
 }
 const w=quiz[quizAt],progress=document.createElement('p');progress.className='quiz-progress';progress.textContent='Question '+(quizAt+1)+' of 5';
 const prompt=document.createElement('p');prompt.className='quiz-question';prompt.textContent='What does “'+w.word+'” mean in this sentence?';prompt.tabIndex=-1;
 const sentence=document.createElement('p');sentence.textContent=w.example;
 const opts=document.createElement('div');opts.className='quiz-options';
 const feedback=document.createElement('p');feedback.className='quiz-feedback';feedback.setAttribute('aria-live','polite');
 const next=document.createElement('button');next.className='button primary quiz-next';next.textContent=quizAt===4?'See Results':'Next →';next.hidden=true;next.onclick=()=>{quizAt++;renderQuiz()};
 C.shuffle([w.meaning,...w.distractors]).forEach(text=>{
 const b=document.createElement('button');b.type='button';b.className='quiz-option';b.textContent=text;b.dataset.value=text;
 b.onclick=()=>{if(quizAnswered)return;quizAnswered=true;const ok=text===w.meaning;if(ok)score++;[...opts.children].forEach(x=>{x.disabled=true;if(x.dataset.value===w.meaning){x.classList.add('correct');x.textContent='✓ '+x.dataset.value}else if(x===b){x.classList.add('wrong');x.textContent='✕ '+text}});feedback.textContent=(ok?'Correct! ':'Not quite. ')+w.word+' means '+w.meaning+' here. Español: '+w.es+'.';next.hidden=false};opts.append(b);
 });
 box.append(progress,prompt,sentence,opts,feedback,next);prompt.focus();
}
$('prevBtn').onclick=()=>move(-1);$('nextBtn').onclick=()=>move(1);
$('knownBtn').onclick=()=>{const w=words[index];if(answers[w.id]===undefined)return;learned.has(w.id)?learned.delete(w.id):learned.add(w.id);render();toast(learned.has(w.id)?'Marked as learned!':'Removed from learned words')};
$('libraryBtn').onclick=()=>{buildLibrary();$('libraryDialog').showModal();$('searchInput').focus()};
$('quizBtn').onclick=startQuiz;$('searchInput').oninput=buildLibrary;$('categorySelect').onchange=buildLibrary;
$('speakBtn').onclick=()=>speak(words[index].word,.8);$('sentenceBtn').onclick=()=>speak(words[index].example,.88);
document.addEventListener('keydown',e=>{if(document.querySelector('dialog[open]')||/INPUT|SELECT|TEXTAREA|BUTTON/.test(e.target.tagName))return;if(e.key==='ArrowRight'){e.preventDefault();move(1)}if(e.key==='ArrowLeft'){e.preventDefault();move(-1)}});
if(C.validate().length){$('word').textContent='Content could not be loaded.';return}
render();
})();
