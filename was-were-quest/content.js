(function(root){
'use strict';
const questions=[];
function add(type,category,prompt,es,answer,choices,explanation,image,example,speaking,followUp){
 questions.push({id:'be-'+String(questions.length+1).padStart(2,'0'),type,category,prompt,es,answer,choices,explanation,image,example,speaking,followUp});
}
const agree='Use was with I, he, she, it, and one person or thing. Use were with you, we, they, and plural subjects.';
const negative='Put not after was or were. Was not becomes wasn’t; were not becomes weren’t. Do not use did with be.';
const inquiry='In a question, put was or were before the subject. Put a WH-word first when you need more information.';
const speak={
 school:['How was your first day of class?','Were your classmates friendly?'],
 work:['What was your first job?','How was your first day at work?'],
 feeling:['Were you tired yesterday?','Why were you tired?'],
 weather:['How was the weather yesterday?','Was it sunny or cloudy?'],
 home:['Were you at home last night?','Who was with you?'],
 travel:['Where were you last weekend?','How was the weather there?'],
 interview:['Were you nervous at your last interview?','Was the interviewer friendly?'],
 shopping:['Was your last shopping trip expensive?','Was the store busy?']
};
const examples={
 school:'The students were friendly on the first day.',
 work:'My first job was in a restaurant.',
 feeling:'I was nervous yesterday.',
 weather:'It was sunny last weekend.',
 home:'We were at home last night.',
 travel:'They were in a new city last week.',
 interview:'The interview was short.',
 shopping:'The store was busy yesterday.'
};
function pick(cat,p,es,a,opts,rule,img){
 const [s,f]=speak[img];add('choose',cat,p,es,a,opts,rule,img,examples[img],s,f);
}
const forms=['was','were'];
[
 ['I ___ tired after work yesterday.','Yo estaba cansado después del trabajo ayer.','was','feeling'],
 ['You ___ at home last night.','Tú estabas en casa anoche.','were','home'],
 ['My teacher ___ kind on the first day.','Mi profesor fue amable el primer día.','was','school'],
 ['We ___ in class last week.','Estábamos en clase la semana pasada.','were','school'],
 ['The store ___ closed yesterday.','La tienda estaba cerrada ayer.','was','shopping'],
 ['My co-workers ___ helpful on my first day.','Mis compañeros de trabajo fueron serviciales en mi primer día.','were','work'],
 ['She ___ my supervisor two years ago.','Ella era mi supervisora hace dos años.','was','work'],
 ['They ___ nervous before the interview.','Estaban nerviosos antes de la entrevista.','were','interview'],
 ['It ___ cold and windy yesterday.','Hacía frío y viento ayer.','was','weather'],
 ['My brother and I ___ at the restaurant last night.','Mi hermano y yo estábamos en el restaurante anoche.','were','work'],
 ['The questions ___ difficult at my interview.','Las preguntas fueron difíciles en mi entrevista.','were','interview'],
 ['His phone battery ___ low this morning.','Su teléfono tenía poca batería esta mañana.','was','home']
].forEach(r=>pick('Was or were',r[0],r[1],r[2],forms,agree,r[3]));
[
 ['Make it negative: She ___ at home last night.','Hazla negativa: Ella no estaba en casa anoche.','wasn’t','home'],
 ['Make it negative: They ___ in class yesterday.','Hazla negativa: Ellos no estaban en clase ayer.','weren’t','school'],
 ['Make it negative: I ___ busy last weekend.','Hazla negativa: Yo no estaba ocupado el fin de semana pasado.','wasn’t','feeling'],
 ['Make it negative: You ___ late yesterday.','Hazla negativa: Tú no llegaste tarde ayer.','weren’t','school'],
 ['Make it negative: The weather ___ warm yesterday.','Hazla negativa: Ayer no hacía calor.','wasn’t','weather'],
 ['Make it negative: We ___ at work last night.','Hazla negativa: No estábamos en el trabajo anoche.','weren’t','work']
].forEach(r=>pick('Negative forms',r[0],r[1],r[2],['wasn’t','weren’t','didn’t'],negative,r[3]));
function order(prompt,es,chunks,category,img,rule=inquiry){
 const [s,f]=speak[img];add('order',category,prompt,es,chunks,chunks,rule,img,examples[img],s,f);
}
order('Build a question. Start with Were.','Forma una pregunta. Empieza con Were.',['Were','you','busy','yesterday?'],'Question order','work');
order('Build a question. Start with Was.','Forma una pregunta. Empieza con Was.',['Was','she','at work','yesterday?'],'Question order','work');
order('Build a question. Start with Where.','Forma una pregunta. Empieza con Where.',['Where','were','you','last night?'],'WH-questions','home');
order('Build a question. Start with How.','Forma una pregunta. Empieza con How.',['How','was','your first day','at school?'],'WH-questions','school');
order('Build a question. Start with Who.','Forma una pregunta. Empieza con Who.',['Who','was','with you','last weekend?'],'WH-questions','home');
order('Build a question. Start with Why.','Forma una pregunta. Empieza con Why.',['Why','were','they','nervous?'],'WH-questions','interview');
order('Build a question. Start with When.','Forma una pregunta. Empieza con When.',['When','was','your interview?'],'WH-questions','interview');
order('Build a question. Start with What.','Forma una pregunta. Empieza con What.',['What','was','your first job?'],'WH-questions','work');
order('Build a statement. Put last night at the end.','Forma una oración. Pon last night al final.',['We','were','at home','last night.'],'Statements','home',agree+' In this activity, put the time expression at the end.');
order('Build a negative statement. Start with The students.','Forma una oración negativa. Empieza con The students.',['The students','weren’t','late','yesterday.'],'Negative order','school',negative);
order('Build a statement. Start with My first job.','Forma una oración. Empieza con My first job.',['My first job','was','two years','ago.'],'Past-time expressions','work','Put ago after the time period: two years ago.');
order('Build a question. Start with How.','Forma una pregunta. Empieza con How.',['How','was','the weather','yesterday?'],'WH-questions','weather');
[
 ['Were you tired yesterday? Answer YES.','¿Estabas cansado ayer? Responde SÍ.','Yes, I was.',['Yes, I was.','Yes, you were.','Yes, I were.'],'feeling'],
 ['Were you at work last night? Answer NO.','¿Estabas en el trabajo anoche? Responde NO.','No, I wasn’t.',['No, I wasn’t.','No, I weren’t.','No, you weren’t.'],'work'],
 ['Was she your supervisor? Answer YES.','¿Ella era tu supervisora? Responde SÍ.','Yes, she was.',['Yes, she was.','Yes, she were.','Yes, she is.'],'work'],
 ['Were they in class yesterday? Answer NO.','¿Estaban ellos en clase ayer? Responde NO.','No, they weren’t.',['No, they weren’t.','No, they wasn’t.','No, they didn’t.'],'school'],
 ['Was the store closed yesterday? Answer YES.','¿Estaba cerrada la tienda ayer? Responde SÍ.','Yes, it was.',['Yes, it was.','Yes, they were.','Yes, it is.'],'shopping'],
 ['Were the roads busy this morning? Answer YES.','¿Había mucho tráfico esta mañana? Responde SÍ.','Yes, they were.',['Yes, they were.','Yes, it was.','Yes, they was.'],'travel']
].forEach(r=>pick('Short answers',r[0],r[1],r[2],r[3],'Match the answer to the subject and the requested yes/no meaning. When someone asks Were you…?, answer with I was or I wasn’t.',r[4]));
[
 ['The weather ___ great now.','Hace buen tiempo ahora.','is','weather'],
 ['The weather ___ terrible yesterday.','Hacía muy mal tiempo ayer.','was','weather'],
 ['My classmates ___ here now.','Mis compañeros de clase están aquí ahora.','are','school'],
 ['My classmates ___ absent yesterday.','Mis compañeros de clase estuvieron ausentes ayer.','were','school'],
 ['She ___ a manager today.','Ella es gerente hoy.','is','work'],
 ['She ___ an assistant five years ago.','Ella era asistente hace cinco años.','was','work']
].forEach(r=>pick('Present or past',r[0],r[1],r[2],['is','are','was','were'],'Use is/are for the present (now, today). Use was/were for completed past situations (yesterday, years ago). Check the subject too.',r[3]));
[
 ['Correct: I were nervous yesterday.','Corrige: Yo estaba nervioso ayer.','I was nervous yesterday.',['I was nervous yesterday.','I am nervous yesterday.','I did nervous yesterday.'],agree,'feeling'],
 ['Correct: You was late last week.','Corrige: Tú llegaste tarde la semana pasada.','You were late last week.',['You were late last week.','You was not late last week.','You be late last week.'],agree,'school'],
 ['Correct: Did you were busy yesterday?','Corrige la pregunta: ¿Estabas ocupado ayer?','Were you busy yesterday?',['Were you busy yesterday?','Did you was busy yesterday?','Was you busy yesterday?'],inquiry+' Do not use did with was/were.','work'],
 ['Correct: She didn’t was home last night.','Corrige: Ella no estaba en casa anoche.','She wasn’t home last night.',['She wasn’t home last night.','She weren’t home last night.','She didn’t were home last night.'],negative,'home'],
 ['Correct: Where you were yesterday?','Corrige la pregunta: ¿Dónde estabas ayer?','Where were you yesterday?',['Where were you yesterday?','Where was you yesterday?','Where did you were yesterday?'],inquiry,'travel'],
 ['Correct: The questions no were easy.','Corrige: Las preguntas no eran fáciles.','The questions weren’t easy.',['The questions weren’t easy.','The questions wasn’t easy.','The questions didn’t easy.'],negative,'interview'],
 ['Choose the correct past-time expression.','Elige la expresión de tiempo pasado correcta.','three years ago',['three years ago','ago three years','before three years'],'Put ago after the time period.','travel'],
 ['Choose the contraction of were not.','Elige la contracción de were not.','weren’t',['weren’t','wasn’t','we’re'],'Were not = weren’t. We’re means we are in the present.','home']
].forEach(r=>pick('Fix the mistake',r[0],r[1],r[2],r[3],r[4],r[5]));
const images={school:{verb:'teach',alt:'A teacher in a classroom'},work:{verb:'speak',alt:'People talking at work'},feeling:{verb:'think',alt:'A person thinking'},weather:{verb:'blow',alt:'Wind as a weather clue'},home:{verb:'sleep',alt:'A person resting at home'},travel:{verb:'drive',alt:'A person traveling by car'},interview:{verb:'shake',alt:'A greeting with a handshake'},shopping:{verb:'buy',alt:'A person shopping'}};
function shuffle(values,random=Math.random){const a=[...values];for(let i=a.length-1;i>0;i--){let j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a}
function isCorrect(q,value){return q.type==='order'?Array.isArray(value)&&value.length===q.answer.length&&value.every((x,i)=>x===q.answer[i]):value===q.answer}
function validate(){const errors=[];const ids=new Set();for(const q of questions){if(ids.has(q.id))errors.push('Duplicate '+q.id);ids.add(q.id);for(const key of ['prompt','es','explanation','example','speaking','followUp'])if(!q[key])errors.push(q.id+' missing '+key);if(!images[q.image])errors.push(q.id+' missing image');if(q.type==='choose'&&(!q.choices.includes(q.answer)||new Set(q.choices).size!==q.choices.length))errors.push(q.id+' invalid options');if(q.type==='order'&&JSON.stringify([...q.answer].sort())!==JSON.stringify([...q.choices].sort()))errors.push(q.id+' invalid order');}return errors}
const api={questions,images,shuffle,isCorrect,validate};
if(typeof module==='object'&&module.exports)module.exports=api;else root.BeQuest=api;
})(typeof window!=='undefined'?window:globalThis);
