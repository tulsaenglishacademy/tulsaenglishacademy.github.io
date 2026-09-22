(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.VerbCore=api;})(typeof self!=='undefined'?self:this,function(){
const rows=`
be|was / were|been|ser / estar|I was tired after work.|I have been busy all week.
become|became|become|convertirse|She became a nurse last year.|She has become more confident.
begin|began|begun|empezar|The class began at six.|The lesson has begun already.
break|broke|broken|romper|He broke his phone yesterday.|He has broken two screens this year.
bring|brought|brought|traer|I brought my lunch to work.|I have brought all the documents.
build|built|built|construir|They built a new house.|They have built three homes nearby.
buy|bought|bought|comprar|We bought groceries yesterday.|We have bought everything we need.
catch|caught|caught|atrapar|She caught the ball.|She has caught the early bus all week.
choose|chose|chosen|elegir|I chose the blue shirt.|I have chosen a new career.
come|came|come|venir|My friend came early.|My friend has come to every class.
cost|cost|cost|costar|The repair cost five hundred dollars.|The project has cost more than expected.
cut|cut|cut|cortar|He cut the vegetables.|He has cut the paper into squares.
do|did|done|hacer|I did my homework last night.|I have done all my assignments.
draw|drew|drawn|dibujar|She drew a beautiful portrait.|She has drawn many pictures.
drink|drank|drunk|beber|We drank coffee this morning.|We have drunk enough water today.
drive|drove|driven|conducir|He drove to Dallas yesterday.|He has driven this route many times.
eat|ate|eaten|comer|They ate dinner at seven.|They have eaten at that restaurant before.
fall|fell|fallen|caer|He fell on the ice.|Several leaves have fallen today.
feel|felt|felt|sentir|I felt better yesterday.|I have felt tired all week.
find|found|found|encontrar|She found her keys.|She has found a better job.
fly|flew|flown|volar|We flew to Miami last summer.|We have flown together twice.
forget|forgot|forgotten|olvidar|I forgot my password.|I have forgotten his name.
forgive|forgave|forgiven|perdonar|She forgave her friend.|She has forgiven him completely.
freeze|froze|frozen|congelar|The lake froze last night.|The pipes have frozen again.
get|got|got / gotten|obtener|He got a new job.|He has gotten much better at English.
give|gave|given|dar|She gave me good advice.|She has given us plenty of time.
go|went|gone|ir|We went to the market.|They have gone home already.
grow|grew|grown|crecer|The plant grew quickly.|The children have grown so much.
have|had|had|tener|I had a busy day.|I have had this car for five years.
hear|heard|heard|oír|We heard a strange noise.|I have heard that song before.
hide|hid|hidden|esconder|The child hid behind the door.|He has hidden the gift upstairs.
hit|hit|hit|golpear|The ball hit the window.|The storm has hit the coast.
hold|held|held|sostener|She held the baby carefully.|I have held this position since May.
keep|kept|kept|guardar|He kept the receipt.|We have kept every promise.
know|knew|known|saber / conocer|I knew the answer.|I have known her for ten years.
leave|left|left|salir / dejar|They left work early.|She has left her phone at home.
lend|lent|lent|prestar|I lent him twenty dollars.|She has lent me her book.
let|let|let|permitir|My manager let me leave early.|They have let us use the room.
lose|lost|lost|perder|We lost the game.|I have lost my keys again.
make|made|made|hacer / fabricar|She made a chocolate cake.|We have made good progress.
mean|meant|meant|significar|I meant every word.|This has meant a lot to me.
meet|met|met|conocer / reunirse|We met at work.|I have met the new teacher.
pay|paid|paid|pagar|He paid the bill.|We have paid this month's rent.
put|put|put|poner|I put the keys on the table.|She has put everything away.
read|read|read|leer|He read the email yesterday.|I have read that book twice.
ride|rode|ridden|montar|She rode her bike to work.|She has ridden a horse before.
ring|rang|rung|sonar / llamar|The phone rang at midnight.|The bell has rung three times.
run|ran|run|correr|He ran five miles yesterday.|He has run three races this year.
say|said|said|decir|She said hello to everyone.|I have said everything I needed to say.
see|saw|seen|ver|We saw a great movie.|I have seen that doctor before.
sell|sold|sold|vender|They sold their old car.|She has sold all the tickets.
send|sent|sent|enviar|I sent the message this morning.|We have sent the application.
shake|shook|shaken|sacudir|We shook hands after the meeting.|The news has shaken the community.
show|showed|shown|mostrar|He showed me the photo.|She has shown great improvement.
sing|sang|sung|cantar|They sang my favorite song.|He has sung on this stage before.
sit|sat|sat|sentarse|We sat near the window.|I have sat here for an hour.
sleep|slept|slept|dormir|The baby slept all night.|I have slept better this week.
speak|spoke|spoken|hablar|She spoke to her manager.|We have spoken about this before.
spend|spent|spent|gastar / pasar|I spent fifty dollars.|They have spent the day together.
stand|stood|stood|estar de pie|He stood by the entrance.|She has stood there for ten minutes.
steal|stole|stolen|robar|Someone stole his wallet.|A thief has stolen the painting.
swim|swam|swum|nadar|We swam in the lake.|She has swum in the ocean many times.
take|took|taken|tomar / llevar|I took the bus to work.|He has taken this course before.
teach|taught|taught|enseñar|She taught English last year.|He has taught here since 2020.
tell|told|told|decir / contar|They told us the truth.|I have told you everything.
think|thought|thought|pensar|I thought about your idea.|We have thought about moving.
throw|threw|thrown|lanzar|He threw the ball across the field.|She has thrown the old papers away.
understand|understood|understood|entender|I understood the instructions.|They have understood the main idea.
wake|woke|woken|despertar|She woke at five this morning.|I have woken up early all week.
wear|wore|worn|llevar puesto|He wore a suit yesterday.|She has worn those shoes twice.
win|won|won|ganar|Our team won yesterday.|Our team has won three games this month.
write|wrote|written|escribir|I wrote a letter last night.|She has written several reports.
bite|bit|bitten|morder|The dog bit the toy.|A mosquito has bitten my arm.
blow|blew|blown|soplar|He blew out the candles.|The wind has blown the door open.
deal|dealt|dealt|tratar / repartir|She dealt the cards quickly.|We have dealt with this problem before.`.trim().split('\n').map(x=>x.split('|'));

const fallback=['🧍','🦋','🏁','💔','📦','🏗️','🛍️','🥎','☝️','👋','💵','✂️','✅','✏️','🥤','🚗','🍽️','🍂','💭','🔎','✈️','🤔','🤝','🧊','🎁','🙌','🚶','🌱','🤲','👂','🙈','🔨','✋','🔐','💡','🚪','🤲','🟢','❓','🛠️','💬','🤝','💳','📥','📖','🚲','🔔','🏃','🗣️','👀','🏷️','📨','🤝','🖼️','🎤','🪑','😴','💬','💸','🧍','🥷','🏊','🤏','👩‍🏫','📣','🧠','🥏','👌','⏰','👕','🏆','✍️','🦷','🌬️','🃏'];
const verbs=rows.map((r,i)=>({id:`verb-${String(i+1).padStart(2,'0')}-${r[0]}`,v1:r[0],v2:r[1],v3:r[2],es:r[3],pastExample:r[4],perfectExample:r[5],image:`assets/verbs/verbs-${String(Math.floor(i/15)+1).padStart(2,'0')}.webp`,imageAlt:'Realistic photographic clue for the target action; no written text.',sheet:Math.floor(i/15),cell:i%15,fallback:fallback[i],difficulty:i<25?1:i<50?2:i<65?3:4}));
function normalize(s){return String(s||'').toLowerCase().trim().replace(/\s+/g,' ')}
function accepts(input,answer){return answer.split(' / ').some(a=>normalize(input)===normalize(a))||normalize(input)===normalize(answer)}
function formNote(v){const a=normalize(v.v1),b=normalize(v.v2),c=normalize(v.v3);if(a===b&&b===c)return'All three forms are the same.';if(b===c)return'V2 and V3 have the same form.';if(a===c)return'V1 and V3 have the same form.';if(a===b)return'V1 and V2 have the same form.';return'All three forms change.'}
function progressMeta(index,total){const card=Math.min(index+1,total),completed=Math.min(index,total),pct=total?Math.round(card/total*100):0,remaining=Math.max(0,total-card);return{completed,pct,remaining,text:`Card ${card} of ${total} · ${pct}% complete · ${remaining} remaining`}}
function validateData(list=verbs){const errors=[];if(list.length!==75)errors.push(`Expected 75 verbs; found ${list.length}.`);const ids=new Set();list.forEach((v,i)=>{['id','v1','v2','v3','es','image','imageAlt','pastExample','perfectExample'].forEach(k=>{if(!v[k])errors.push(`Entry ${i+1} is missing ${k}.`)});if(ids.has(v.id))errors.push(`Duplicate ID: ${v.id}`);ids.add(v.id)});return errors}
function shuffled(a,rand=Math.random){const out=[...a];for(let i=out.length-1;i>0;i--){const j=Math.floor(rand()*(i+1));[out[i],out[j]]=[out[j],out[i]]}return out}
return{verbs,accepts,formNote,progressMeta,validateData,shuffled,normalize};
});
