(function(){
'use strict';
const $=id=>document.getElementById(id), C=window.BeQuest;
const KEY='teaWasWereQuestV1';
let state=null, tick=null, selected=null, audioContext=null, modalFocus=null;
const question=()=>C.questions.find(q=>q.id===state.order[state.index]);
const answerText=q=>q.type==='order'?q.answer.join(' '):q.answer;
function announce(text){$('announcer').textContent=text}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state))}catch{}}
function clearSaved(){try{localStorage.removeItem(KEY)}catch{}}
function stopTimer(){clearInterval(tick);tick=null}
function startTimer(){
 stopTimer();if(!state||state.phase!=='answer')return;
 state.deadline=Date.now()+state.seconds*1000;
 tick=setInterval(()=>{state.seconds=Math.max(0,Math.ceil((state.deadline-Date.now())/1000));paintTimer();save();if(state.seconds===10){announce('Ten seconds remaining.');warn()}if(state.seconds<=0)finishAnswer(false,true)},250);
 paintTimer();
}
function paintTimer(){
 $('timerNumber').textContent='00:'+String(state.seconds).padStart(2,'0');
 $('timer').className='timer '+(state.seconds<=5?'danger':state.seconds<=10?'warning':'normal');
 $('timer').setAttribute('aria-label',state.seconds+' seconds remaining');
}
function warn(){if(state.muted)return;try{audioContext=audioContext||new (window.AudioContext||window.webkitAudioContext)();const o=audioContext.createOscillator(),g=audioContext.createGain();o.frequency.value=600;g.gain.value=.06;o.connect(g);g.connect(audioContext.destination);o.start();o.stop(audioContext.currentTime+.15)}catch{}}
function show(section){['setup','game','results'].forEach(id=>$(id).classList.toggle('hidden',id!==section));$('newGameBtn').classList.toggle('hidden',section==='setup')}
function begin(ids=C.questions.map(q=>q.id),level=$('difficulty').value){
 state={version:1,order:C.shuffle(ids),index:0,level:Number(level),seconds:45,attempts:0,slots:[],choice:null,phase:'answer',correct:0,firstTry:0,missed:[],streak:0,bestStreak:0,muted:false,review:ids.length!==C.questions.length};
 newRound();
}
function newRound(){
 state.seconds=45;state.attempts=0;state.slots=Array(question().type==='order'?question().answer.length:0).fill(null);
 state.choice=null;state.phase='answer';state.options=C.shuffle(question().choices.map((_,i)=>i));selected=null;
 render();startTimer();save();$('questionTitle').focus();announce('Question '+(state.index+1)+' of '+state.order.length+'.');
}
function render(){
 show('game');const q=question(),complete=state.index;
 $('progressText').textContent='Question '+(state.index+1)+' of '+state.order.length+' · '+complete+' completed · '+(state.order.length-complete)+' remaining';
 const pct=Math.round(complete/state.order.length*100);$('progressBar').style.width=pct+'%';$('progress').setAttribute('aria-valuenow',pct);
 $('category').textContent=q.category;$('questionTitle').textContent=q.prompt;$('questionTitle').tabIndex=-1;
 $('streak').textContent='🔥 '+(state.streak ? ((state.streak-1)%3)+1 : 0)+' / 3';$('streak').setAttribute('aria-label','Current streak: '+state.streak+' correct answers');
 $('muteBtn').textContent=state.muted?'🔇':'🔊';$('muteBtn').setAttribute('aria-pressed',String(state.muted));$('muteBtn').setAttribute('aria-label',state.muted?'Unmute timer warning':'Mute timer warning');
 $('levelChip').textContent=['Easy','Medium','Brain Melter 🧠🔥'][state.level-1];
 const support=document.querySelector('.clue-panel');support.classList.toggle('hidden',state.level===3);document.querySelector('.activity').classList.toggle('no-support',state.level===3);
 $('spanishClue').textContent=q.es;$('exampleClue').textContent='Example: '+q.example;
 $('spanishClue').classList.toggle('hidden',state.level!==1);$('exampleClue').classList.toggle('hidden',state.level!==1);
 const info=C.images[q.image],v=window.VerbCore.verbs.find(v=>v.v1===info.verb);
 $('verbPhoto').style.backgroundImage=q.image==='weather'?'url("assets/weather.svg")':'url("../verb-quest/'+v.image+'")';
 $('verbPhoto').style.backgroundSize=q.image==='weather'?'cover':'500% 300%';
 $('verbPhoto').style.backgroundPosition=q.image==='weather'?'center':(v.cell%5*25)+'% '+(Math.floor(v.cell/5)*50)+'%';
 $('verbPhoto').setAttribute('aria-label',info.alt);
 $('interactionHelp').textContent=q.type==='order'?'Drag a tile into a numbered box, or tap a tile and then a box. Tap a filled box to return its tile.':'Select the tile that answers the question, then check your answer.';
 $('attemptMessage').textContent=state.attempts===1&&state.phase==='answer'?'Try again. You have one attempt left.':'';
 renderTiles();paintTimer();
 const done=state.phase==='feedback';
 $('checkBtn').classList.toggle('hidden',done);$('resetBtn').classList.toggle('hidden',done);$('nextBtn').classList.toggle('hidden',!done);$('feedbackPanel').classList.toggle('hidden',!done);
 if(done)renderFeedback();
}
function renderTiles(){
 const q=question(),done=state.phase!=='answer';$('tileBank').replaceChildren();$('answerSlots').replaceChildren();$('answerSlots').classList.toggle('hidden',q.type!=='order');
 if(q.type==='order')state.slots.forEach((value,index)=>{
 const b=document.createElement('button');b.type='button';b.className='order-slot';b.disabled=done;b.setAttribute('aria-label','Position '+(index+1)+(value===null?' empty':': '+q.choices[value]));
 const n=document.createElement('small');n.textContent='Position '+(index+1);const text=document.createElement('strong');text.textContent=value===null?'Place tile':q.choices[value];b.append(n,text);
 b.onclick=()=>{if(selected!==null)place(selected,index);else if(value!==null){state.slots[index]=null;renderTiles();save()}};
 b.ondragover=e=>{if(done)return;e.preventDefault();b.classList.add('over')};b.ondragleave=()=>b.classList.remove('over');b.ondrop=e=>{e.preventDefault();b.classList.remove('over');const val=Number(e.dataTransfer.getData('text/plain'));if(Number.isInteger(val)&&val>=0&&val<q.choices.length)place(val,index)};
 $('answerSlots').append(b);
 });
 state.options.forEach(i=>{
 if(q.type==='order'&&state.slots.includes(i))return;
 const b=document.createElement('button');b.type='button';b.className='verb-tile';b.textContent=q.choices[i];b.disabled=done;
 const active=q.type==='order'?selected===i:state.choice===i;b.classList.toggle('selected',active);b.setAttribute('aria-pressed',String(active));b.draggable=q.type==='order'&&!done;
 b.onclick=()=>{if(q.type==='order')selected=selected===i?null:i;else state.choice=i;renderTiles();save()};
 b.ondragstart=e=>e.dataTransfer.setData('text/plain',String(i));$('tileBank').append(b);
 });
}
function place(value,index){
 if(state.phase!=='answer')return;const old=state.slots.indexOf(value);if(old!==-1)state.slots[old]=null;state.slots[index]=value;selected=null;renderTiles();save();
}
function check(){
 if(!state||state.phase!=='answer')return;const q=question();
 if(q.type==='order'&&state.slots.some(x=>x===null)||q.type==='choose'&&state.choice===null){$('attemptMessage').textContent=q.type==='order'?'Place all the tiles first.':'Select an answer first.';return}
 const val=q.type==='order'?state.slots.map(i=>q.choices[i]):q.choices[state.choice];
 state.attempts++;
 if(C.isCorrect(q,val))finishAnswer(true);
 else if(state.attempts>=2)finishAnswer(false);
 else{$('attemptMessage').textContent='Try again. You have one attempt left.';announce('Try again. One attempt left.');save()}
}
function finishAnswer(correct,timedOut=false){
 if(state.phase!=='answer')return;stopTimer();state.phase='feedback';state.lastCorrect=correct;state.timedOut=timedOut;
 if(correct){state.correct++;if(state.attempts===1)state.firstTry++;state.streak++;state.bestStreak=Math.max(state.bestStreak,state.streak);if(state.streak%3===0)announce('Three-answer streak!')}
 else{state.streak=0;if(!state.missed.includes(question().id))state.missed.push(question().id)}
 selected=null;render();save();$('nextBtn').focus();announce(timedOut?'Time is up. The correct answer is shown.':correct?'Correct!':'The correct answer is shown.');
}
function renderFeedback(){
 const q=question();$('feedbackStatus').textContent=state.timedOut?'Time is up. Let’s review.':state.lastCorrect?'✓ Excellent!':'Let’s learn from this one.';
 $('feedbackStatus').className='feedback-status '+(state.lastCorrect?'good':'bad');
 $('feedbackTitle').textContent=answerText(q);$('explanation').textContent=q.explanation;$('speakingQuestion').textContent=q.speaking;$('followUp').textContent='Follow-up: '+q.followUp;
 $('pronounceBtn').classList.toggle('hidden',!('speechSynthesis' in window));
}
function next(){if(state.phase!=='feedback')return;state.index++;if(state.index>=state.order.length)results();else newRound()}
function results(){
 stopTimer();state.phase='results';save();show('results');$('stats').replaceChildren();
 [['Correct',state.correct+' / '+state.order.length],['First try',state.firstTry],['Best streak',state.bestStreak]].forEach(([label,val])=>{const d=document.createElement('div');d.className='stat';const b=document.createElement('strong');b.textContent=val;d.append(b,document.createTextNode(label));$('stats').append(d)});
 $('difficultQuestions').replaceChildren();$('reviewBtn').disabled=!state.missed.length;
 if(state.missed.length){const details=document.createElement('details');const summary=document.createElement('summary');summary.textContent=state.missed.length+' questions to practice';details.append(summary);const list=document.createElement('ul');state.missed.forEach(id=>{const q=C.questions.find(q=>q.id===id),li=document.createElement('li');li.textContent=q.prompt+' → '+answerText(q);list.append(li)});details.append(list);$('difficultQuestions').append(details)}else $('difficultQuestions').textContent='You answered every question correctly. Well done!';
 $('resultsTitle').tabIndex=-1;$('resultsTitle').focus();
}
function menu(){stopTimer();state=null;clearSaved();show('setup');$('setupTitle').tabIndex=-1;$('setupTitle').focus()}
function openModal(id){
 stopTimer();modalFocus=document.activeElement;$(id).classList.remove('hidden');$(id).querySelector('button').focus();
}
function closeModal(id){$(id).classList.add('hidden');if(modalFocus&&document.contains(modalFocus))modalFocus.focus();if(state&&state.phase==='answer')startTimer()}
function validSave(x){
 return x&&x.version===1&&[1,2,3].includes(x.level)&&Array.isArray(x.order)&&x.order.length>0&&new Set(x.order).size===x.order.length&&x.order.every(id=>C.questions.some(q=>q.id===id))&&Number.isInteger(x.index)&&x.index>=0&&x.index<=(x.phase==='results'?x.order.length:x.order.length-1)&&['answer','feedback','results'].includes(x.phase)&&Number.isFinite(x.seconds)&&x.seconds>=0&&x.seconds<=45&&Array.isArray(x.missed)&&x.missed.every(id=>x.order.includes(id))&&Array.isArray(x.slots)&&Array.isArray(x.options);
}
$('setupForm').onsubmit=e=>{e.preventDefault();begin()};
$('checkBtn').onclick=check;$('resetBtn').onclick=()=>{if(state.phase!=='answer')return;state.choice=null;state.slots.fill(null);selected=null;renderTiles();save()};
$('nextBtn').onclick=next;$('newGameBtn').onclick=()=>openModal('confirmDialog');
$('continueBtn').onclick=()=>closeModal('confirmDialog');$('confirmNewBtn').onclick=()=>{closeModal('confirmDialog');menu()};
$('resultsNewBtn').onclick=menu;$('playAgainBtn').onclick=()=>begin(undefined,state.level);
$('reviewBtn').onclick=()=>{if(state.missed.length)begin([...state.missed],state.level)};
$('muteBtn').onclick=()=>{state.muted=!state.muted;render();save()};
$('pronounceBtn').onclick=()=>{if(!window.speechSynthesis)return;window.speechSynthesis.cancel();const utter=new SpeechSynthesisUtterance(answerText(question()));utter.lang='en-US';utter.rate=.85;window.speechSynthesis.speak(utter)};
$('resumeBtn').onclick=()=>{closeModal('resumeDialog');if(state.phase==='results')results();else{render();startTimer();if(state.seconds===0&&state.phase==='answer')finishAnswer(false,true)}};
$('discardBtn').onclick=()=>{closeModal('resumeDialog');menu()};
document.addEventListener('keydown',e=>{
 const modal=document.querySelector('.modal:not(.hidden)');if(!modal)return;
 if(e.key==='Escape'&&modal.id==='confirmDialog'){e.preventDefault();closeModal('confirmDialog')}
 if(e.key==='Tab'){const buttons=[...modal.querySelectorAll('button')];const first=buttons[0],last=buttons[buttons.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}
});
if(C.validate().length){$('setupTitle').textContent='The game needs a content check.';return}
try{const saved=JSON.parse(localStorage.getItem(KEY));if(validSave(saved)){state=saved;openModal('resumeDialog')}else if(saved)clearSaved()}catch{clearSaved()}
})();
