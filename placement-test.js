window.addEventListener("error",function(e){console.error("Placement test error:",e.error||e.message);});

const questions=[
{level:"A1",skill:"Grammar",prompt:"Where do you work? I work _____ a restaurant.",instruction:"Choose one correct answer.",type:"single",options:["on","at","into","from"],answer:[1]},
{level:"A1",skill:"Grammar",prompt:"Maria has a brother. _____ name is Carlos.",instruction:"Choose one correct answer.",type:"single",options:["Her","His","He","Him"],answer:[1]},
{level:"A1",skill:"Listening",prompt:"How old is Daniel?",instruction:"Listen and choose one correct answer.",type:"single",listen:"My name is Daniel. I'm thirty-eight years old, and I live in Tulsa with my wife.",options:["28","30","38","48"],answer:[2]},
{level:"A1",skill:"Grammar",prompt:"_____ three people waiting in the office.",instruction:"Choose one correct answer.",type:"single",options:["There is","There are","They are","It is"],answer:[1]},
{level:"A1",skill:"Grammar",prompt:"My husband _____ to work at 7:00 every morning.",instruction:"Choose one correct answer.",type:"single",options:["go","goes","going","is go"],answer:[1]},
{level:"A1",skill:"Grammar",prompt:"Look! The children _____ outside.",instruction:"Choose one correct answer.",type:"single",options:["play","plays","are playing","is playing"],answer:[2]},
{level:"A1",skill:"Listening",prompt:"What time does the speaker leave home?",instruction:"Listen and choose one correct answer.",type:"single",listen:"I usually eat breakfast at seven. I leave home at seven forty-five and start work at eight thirty.",options:["7:00","7:30","7:45","8:30"],answer:[2]},
{level:"A1",skill:"Grammar",prompt:"Yesterday I _____ groceries after work.",instruction:"Choose one correct answer.",type:"single",options:["buy","bought","buying","buys"],answer:[1]},
{level:"A1",skill:"Grammar",prompt:"Ana went to the mall, but she _____ anything.",instruction:"Choose one correct answer.",type:"single",options:["didn't buy","didn't bought","doesn't buy","not bought"],answer:[0]},
{level:"A1",skill:"Practical English",prompt:"I _____ come to class tonight because I have to work.",instruction:"Choose one correct answer.",type:"single",options:["no","don't","can't","not"],answer:[2]},
{level:"A1",skill:"Practical English",prompt:"You are at a store and need help finding milk. What is the most natural question?",instruction:"Choose one correct answer.",type:"single",options:["Where milk is?","Where is the milk?","Milk where?","Where the milk?"],answer:[1]},

{level:"A2",skill:"Vocabulary",prompt:"My mother's sister is my _____.",instruction:"Choose one correct answer.",type:"single",options:["cousin","aunt","niece","grandmother"],answer:[1]},
{level:"A2",skill:"Grammar",prompt:"This apartment is _____ than my old apartment.",instruction:"Choose one correct answer.",type:"single",options:["big","biggest","bigger","more big"],answer:[2]},
{level:"A2",skill:"Practical English",prompt:"Server: “What would you like to order?”",instruction:"Choose two natural answers.",type:"multi",options:["I'd like the chicken, please.","Could I have the chicken, please?","I like have chicken.","I could chicken, please."],answer:[0,1]},
{level:"A2",skill:"Grammar",prompt:"Carlos is a very _____ driver. He always drives _____.",instruction:"Choose one correct answer.",type:"single",options:["careful / carefully","carefully / careful","careful / careful","carefully / carefully"],answer:[0]},
{level:"A2",skill:"Listening",prompt:"What are they going to do Saturday?",instruction:"Listen and choose one correct answer.",type:"single",listen:"We were going to stay home Saturday, but my sister invited us to dinner. So we're going to her house instead.",options:["Stay home","Go to a restaurant","Visit his sister","Visit her sister"],answer:[3]},
{level:"A2",skill:"Grammar",prompt:"Look at those dark clouds. It _____ rain.",instruction:"Choose one correct answer.",type:"single",options:["going","is going to","goes to","will going"],answer:[1]},
{level:"A2",skill:"Grammar",prompt:"I _____ dinner when my phone rang.",instruction:"Choose one correct answer.",type:"single",options:["cooked","am cooking","was cooking","have cooked"],answer:[2]},
{level:"A2",skill:"Grammar",prompt:"Have you ever _____ to New York?",instruction:"Choose one correct answer.",type:"single",options:["go","went","been","going"],answer:[2]},
{level:"A2",skill:"Grammar",prompt:"I have lived in Tulsa _____ 2022.",instruction:"Choose one correct answer.",type:"single",options:["for","since","during","from"],answer:[1]},
{level:"A2",skill:"Listening",prompt:"What changed?",instruction:"Listen and choose one correct answer.",type:"single",listen:"Hello, this is Doctor Miller's office. Your appointment tomorrow has been moved from ten a.m. to eleven thirty a.m. Please call us if that time doesn't work for you.",options:["The doctor","The date","The appointment time","The location"],answer:[2]},
{level:"A2",skill:"Vocabulary",prompt:"At the clothing store, Maria _____ her jacket before she _____ a new one.",instruction:"Choose one correct answer.",type:"single",options:["took off / tried on","took out / tried in","took on / tried off","took away / tried over"],answer:[0]},
{level:"A2",skill:"Reading",prompt:"What time should Javier arrive this week?",instruction:"Read the paragraph and choose one correct answer.",type:"single",passage:"Javier works at a warehouse. His normal shift begins at 8:00 a.m., but this week his supervisor asked him to arrive thirty minutes earlier because the company is very busy.",options:["7:00","7:30","8:00","8:30"],answer:[1]},

{level:"B1",skill:"Grammar",prompt:"Before I bought a car, I _____ the bus to work every day.",instruction:"Choose one correct answer.",type:"single",options:["used to take","use to took","used to taking","use take"],answer:[0]},
{level:"B1",skill:"Grammar",prompt:"I _____ at this company for six years.",instruction:"Choose one correct answer.",type:"single",options:["work","worked","have worked","am working"],answer:[2]},
{level:"B1",skill:"Listening",prompt:"Why does the speaker prefer the current job?",instruction:"Listen and choose one correct answer.",type:"single",listen:"I liked my old job because the schedule was flexible, but my current job pays much better. If I had to choose, I'd probably stay where I am now.",options:["The schedule is better.","It is closer to home.","It pays more.","The work is easier."],answer:[2]},
{level:"B1",skill:"Vocabulary",prompt:"After waiting two hours for the doctor, Carlos became very frustrated. Which TWO words are closest in meaning to “frustrated”?",instruction:"Choose two correct answers.",type:"multi",options:["annoyed","irritated","excited","relaxed"],answer:[0,1]},
{level:"B1",skill:"Practical English",prompt:"Customer: “May I speak to Ms. Torres?” Receptionist: “She's in a meeting right now. May I take your number and ask her to _____?”",instruction:"Choose one correct answer.",type:"single",options:["call you back","call back you","return you","phone back to"],answer:[0]},
{level:"B1",skill:"Grammar",prompt:"The class is challenging, _____ I think it is very useful.",instruction:"Choose one correct answer.",type:"single",options:["because","but","so","unless"],answer:[1]},
{level:"B1",skill:"Grammar",prompt:"If I _____ enough time after work, I _____ to the gym.",instruction:"Choose one correct answer.",type:"single",options:["have / will go","will have / go","had / will go","have / went"],answer:[0]},

];

let current=0, answers=Array(questions.length).fill(null), student={};

const startCard=document.getElementById("startCard");
const testArea=document.getElementById("testArea");
const resultCard=document.getElementById("resultCard");
const studentForm=document.getElementById("studentForm");
const firstName=document.getElementById("firstName");
const lastName=document.getElementById("lastName");
const email=document.getElementById("email");
const whatsapp=document.getElementById("whatsapp");
const questionCard=document.getElementById("questionCard");
const progressBar=document.getElementById("progressBar");
const progressText=document.getElementById("progressText");
const answeredText=document.getElementById("answeredText");
const questionGrid=document.getElementById("questionGrid");
const prevBtn=document.getElementById("prevBtn");
const nextBtn=document.getElementById("nextBtn");
const submitBtn=document.getElementById("submitBtn");
const studentGreeting=document.getElementById("studentGreeting");
const resultLevel=document.getElementById("resultLevel");
const recommendation=document.getElementById("recommendation");
const resultExplanation=document.getElementById("resultExplanation");
const a1Score=document.getElementById("a1Score");
const a2Score=document.getElementById("a2Score");
const b1Score=document.getElementById("b1Score");
const skillList=document.getElementById("skillList");
const emailStatus=document.getElementById("emailStatus");

studentForm.addEventListener("submit",e=>{
 e.preventDefault();
 student={firstName:firstName.value.trim(),lastName:lastName.value.trim(),email:email.value.trim(),whatsapp:whatsapp.value.trim()};
 startCard.classList.add("hidden");
 testArea.classList.remove("hidden");
 try{
   renderQuestion();
 }catch(err){
   console.error(err);
   startCard.classList.remove("hidden");
   testArea.classList.add("hidden");
   alert("The test could not start. Please refresh the page and try again.");
   return;
 }
 window.scrollTo({top:0,behavior:"smooth"});
});
function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]))}
function visualHTML(type){
 if(type==="clock") return '<div class="visual"><div class="clock"><div class="clock-dot"></div></div></div>';
 if(type==="frequency") return '<div class="visual freq"><div class="freq-labels"><span>Never 0%</span><span>Always 100%</span></div><div class="freq-line"></div><div class="freq-icons"><span>🚗</span><span>🚌</span></div></div>';
 if(type==="map") return '<div class="visual"><div class="map"><div>D</div><div>A</div><div>C</div><div class="street"></div><div>B</div><div>🏪</div><div>🏦</div></div></div>';
 return "";
}
function spanishInstruction(s){
 const map={"Choose one correct answer.":"Elige una respuesta correcta.","Choose two correct answers.":"Elige dos respuestas correctas.","Choose two natural answers.":"Elige dos respuestas naturales.","Listen and choose one correct answer.":"Escucha y elige una respuesta correcta.","Look at the map, listen and choose one correct answer.":"Mira el mapa, escucha y elige una respuesta correcta.","Look at the picture and choose one correct answer.":"Mira la imagen y elige una respuesta correcta.","Read the paragraph and choose one correct answer.":"Lee el párrafo y elige una respuesta correcta."};
 return map[s]||"Elige la mejor respuesta.";
}
function renderQuestion(){
 const q=questions[current], saved=answers[current]||[];
 let html='<div class="q-meta"><span>Question '+(current+1)+' of '+questions.length+'</span><span>Placement Assessment</span></div>';
 html+='<h2 class="q-title">'+esc(q.prompt)+'</h2>';
 html+='<div class="instruction">'+esc(q.instruction)+'<span class="es-sub">'+esc(spanishInstruction(q.instruction))+'</span></div>';
 if(q.passage) html+='<div class="passage">'+esc(q.passage)+'</div>';
 if(q.visual) html+=visualHTML(q.visual);
 if(q.listen) html+='<div class="listen-box"><button type="button" id="playAudio" aria-label="Play listening audio">▶</button><div><strong>Play audio</strong><br><small>Escucha el audio antes de responder.</small></div></div>';
 html+='<div class="options">';
 q.options.forEach((opt,i)=>{
  const checked=saved.includes(i), inputType=q.type==="multi"?"checkbox":"radio";
  html+='<label class="option '+(checked?'selected':'')+'"><input type="'+inputType+'" name="answer" value="'+i+'" '+(checked?'checked':'')+'><span>'+esc(opt)+'</span></label>';
 });
 html+='</div>';
 questionCard.innerHTML=html;
 questionCard.querySelectorAll('input[name="answer"]').forEach(input=>input.addEventListener("change",saveAnswer));
 const p=document.getElementById("playAudio"); if(p)p.addEventListener("click",()=>speak(q.listen));
 prevBtn.disabled=current===0;
 nextBtn.classList.toggle("hidden",current===questions.length-1);
 submitBtn.classList.toggle("hidden",current!==questions.length-1);
 progressBar.style.width=((current+1)/questions.length*100)+"%";
 progressText.textContent="Question "+(current+1)+" of "+questions.length;
 answeredText.textContent=answers.filter(Boolean).length+" answered";
 renderGrid();
}
function saveAnswer(){
 const q=questions[current], inputs=[...questionCard.querySelectorAll('input[name="answer"]:checked')];
 answers[current]=inputs.length?inputs.map(x=>Number(x.value)):null;
 if(q.type==="single"&&answers[current]) answers[current]=[answers[current][0]];
 questionCard.querySelectorAll(".option").forEach(l=>l.classList.toggle("selected",l.querySelector("input").checked));
 answeredText.textContent=answers.filter(Boolean).length+" answered";renderGrid();
}
function renderGrid(){
 questionGrid.innerHTML=questions.map((q,i)=>'<button type="button" class="q-jump '+(answers[i]?'done ':'')+(i===current?'current':'')+'" data-i="'+i+'">'+(i+1)+'</button>').join("");
 questionGrid.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{current=Number(b.dataset.i);renderQuestion();window.scrollTo({top:testArea.offsetTop-80,behavior:"smooth"})}));
}
let preferredVoice=null;
function choosePreferredVoice(){
 const voices=speechSynthesis.getVoices();
 const preferredNames=["Microsoft Jenny Online (Natural) - English (United States)","Microsoft Ava Online (Natural) - English (United States)","Microsoft Aria Online (Natural) - English (United States)","Google UK English Female","Google US English","Samantha","Zira"];
 preferredVoice=preferredNames.map(n=>voices.find(v=>v.name===n)).find(Boolean)
   || voices.find(v=>/en-US/i.test(v.lang)&&/(Jenny|Ava|Aria|Samantha|Zira|female|natural)/i.test(v.name))
   || voices.find(v=>/en-US/i.test(v.lang))
   || voices.find(v=>/^en/i.test(v.lang))
   || null;
}
if("speechSynthesis" in window){
 choosePreferredVoice();
 speechSynthesis.onvoiceschanged=choosePreferredVoice;
}
function speak(text){
 if(!("speechSynthesis" in window)){alert("Audio playback is not supported in this browser.");return}
 speechSynthesis.cancel();
 choosePreferredVoice();
 const u=new SpeechSynthesisUtterance(text);
 u.lang="en-US";
 if(preferredVoice)u.voice=preferredVoice;
 u.rate=.84;
 u.pitch=1.0;
 u.volume=1;
 speechSynthesis.speak(u);
}
prevBtn.addEventListener("click",()=>{if(current>0){current--;renderQuestion();window.scrollTo({top:testArea.offsetTop-80,behavior:"smooth"})}});
nextBtn.addEventListener("click",()=>{if(current<questions.length-1){current++;renderQuestion();window.scrollTo({top:testArea.offsetTop-80,behavior:"smooth"})}});
submitBtn.addEventListener("click",submitTest);

function isCorrect(i){const a=(answers[i]||[]).slice().sort((x,y)=>x-y), b=questions[i].answer.slice().sort((x,y)=>x-y);return a.length===b.length&&a.every((v,j)=>v===b[j])}
function scoreRange(start,end){let n=0;for(let i=start;i<=end;i++)if(isCorrect(i))n++;return n}
function submitTest(){
 const firstMissing=answers.findIndex(a=>!a);
 if(firstMissing!==-1){alert("Please answer all 30 questions before submitting. / Por favor responde las 40 preguntas antes de enviar.");current=firstMissing;renderQuestion();window.scrollTo({top:testArea.offsetTop-80,behavior:"smooth"});return}
 const levelIndexes={A1:[],A2:[],B1:[]};
 questions.forEach((q,i)=>levelIndexes[q.level].push(i));
 const scoreLevel=l=>levelIndexes[l].reduce((n,i)=>n+(isCorrect(i)?1:0),0);
 const a1=scoreLevel("A1"),a2=scoreLevel("A2"),b1=scoreLevel("B1"),total=a1+a2+b1;
 const a1Max=levelIndexes.A1.length,a2Max=levelIndexes.A2.length,b1Max=levelIndexes.B1.length;
 let level,rec,explain;
 const a1Pct=a1/a1Max, a2Pct=a2/a2Max, b1Pct=b1/b1Max;
 if(a1Pct<0.58){level="A1 Foundations";rec="Recommended starting point: A1 Foundations";explain="You are building the basic grammar, vocabulary, listening, and everyday English needed for A1."}
 else if(a2Pct<0.58){level="A1";rec="Recommended class: A1";explain="You show a basic command of everyday English. An A1 course will strengthen your foundation before moving into A2 material."}
 else if(a1Pct>=0.82&&a2Pct>=0.75&&b1Pct>=0.67){level="B1";rec="Recommended class: B1";explain="You show consistent understanding across A1 and A2 and enough B1 comprehension to begin B1-level study."}
 else if(a1Pct>=0.75&&a2Pct>=0.67&&b1Pct>=0.50){level="High A2 / Low B1";rec="Recommended class: High A2 / Low B1";explain="Your A1 and A2 foundation is strong and you are beginning to understand B1 material. A transition-level class is the best fit."}
 else{level="A2";rec="Recommended class: A2";explain="You understand much of the A1 and A2 material, but more practice is recommended before moving fully into B1."}
 const skills={};
 questions.forEach((q,i)=>{skills[q.skill]??={ok:0,total:0};skills[q.skill].total++;if(isCorrect(i))skills[q.skill].ok++});
 studentGreeting.textContent=student.firstName+", your estimated English level is:";
 resultLevel.textContent=level;recommendation.textContent=rec;resultExplanation.textContent=explain;
 a1Score.textContent=a1+"/"+a1Max;a2Score.textContent=a2+"/"+a2Max;b1Score.textContent=b1+"/"+b1Max;
 skillList.innerHTML=Object.entries(skills).map(([k,v])=>'<div class="skill"><span>'+esc(k)+'</span><strong>'+v.ok+'/'+v.total+'</strong></div>').join("");
 testArea.classList.add("hidden");resultCard.classList.remove("hidden");window.scrollTo({top:resultCard.offsetTop-90,behavior:"smooth"});
 sendResults({a1,a2,b1,a1Max,a2Max,b1Max,total,level,rec,skills});
}
async function sendResults(r){
 const status=emailStatus;
 const skillText=Object.entries(r.skills).map(([k,v])=>k+": "+v.ok+"/"+v.total).join("\n");
 const payload=new FormData();
 payload.append("_subject","Tulsa English Academy Placement Test - "+student.firstName+" "+student.lastName+" - "+r.level);
 payload.append("_template","table");
 payload.append("_captcha","false");
 payload.append("_cc",student.email);
 payload.append("Student",student.firstName+" "+student.lastName);
 payload.append("Email",student.email);
 payload.append("WhatsApp",student.whatsapp);
 payload.append("Estimated Level",r.level);
 payload.append("Recommended Placement",r.rec);
 payload.append("Total Score",r.total+"/30");
 payload.append("A1 Score",r.a1+"/"+r.a1Max);
 payload.append("A2 Score",r.a2+"/"+r.a2Max);
 payload.append("B1 Score",r.b1+"/"+r.b1Max);
 payload.append("Skill Snapshot",skillText);
 try{
  const res=await fetch("https://formsubmit.co/ajax/tulsaoutreachnetwork@gmail.com",{method:"POST",headers:{"Accept":"application/json"},body:payload});
  if(!res.ok)throw new Error("send failed");
  status.className="notice success";
  status.innerHTML="<strong>Result sent.</strong> A copy has been sent to Tulsa English Academy and to "+esc(student.email)+".";
 }catch(e){
  status.className="notice";
  status.innerHTML="<strong>Your result is saved on this screen.</strong> We could not confirm email delivery. Please take a screenshot of your result or contact Tulsa English Academy.";
 }
}
