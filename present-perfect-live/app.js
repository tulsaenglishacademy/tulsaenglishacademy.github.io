const QUESTIONS = [
  {f:'already',q:'Have you already eaten today?',es:'¿Ya has comido hoy?',u:'What did you eat?',us:'¿Qué comiste?'},
  {f:'already',q:'What have you already done today?',es:'¿Qué has hecho ya hoy?',u:'Which activity took the most time?',us:'¿Qué actividad tomó más tiempo?'},
  {f:'already',q:'Have you already checked your email today?',es:'¿Ya has revisado tu correo electrónico hoy?',u:'Did you receive anything important?',us:'¿Recibiste algo importante?'},
  {f:'already',q:'Who have you already spoken to today?',es:'¿Con quién has hablado ya hoy?',u:'What did you talk about?',us:'¿De qué hablaron?'},
  {f:'already',q:'Have you already made plans for this weekend?',es:'¿Ya has hecho planes para este fin de semana?',u:'What are you planning to do?',us:'¿Qué planeas hacer?'},
  {f:'already',q:'Which household chores have you already finished this week?',es:'¿Qué tareas del hogar has terminado ya esta semana?',u:'Which chore do you dislike the most?',us:'¿Qué tarea te desagrada más?'},
  {f:'already',q:'Have you already paid your bills this month?',es:'¿Ya has pagado tus facturas este mes?',u:'Which bill is usually the most expensive?',us:'¿Qué factura suele ser la más costosa?'},
  {f:'already',q:'What have you already learned in this English course?',es:'¿Qué has aprendido ya en este curso de inglés?',u:'How have you used it outside class?',us:'¿Cómo lo has usado fuera de clase?'},
  {f:'already',q:'Have you already visited another state this year?',es:'¿Ya has visitado otro estado este año?',u:'Why did you go there?',us:'¿Por qué fuiste allí?'},
  {f:'already',q:'Where have you already traveled in the United States?',es:'¿A qué lugares de Estados Unidos has viajado ya?',u:'Which place did you like the most?',us:'¿Qué lugar te gustó más?'},
  {f:'already',q:'Have you already used English at work?',es:'¿Ya has usado inglés en el trabajo?',u:'What did you need to say?',us:'¿Qué necesitabas decir?'},
  {f:'already',q:'How many personal goals have you already completed this year?',es:'¿Cuántas metas personales has completado ya este año?',u:'Which goal was the most difficult?',us:'¿Qué meta fue la más difícil?'},
  {f:'already',q:'Have you already scheduled your next medical appointment?',es:'¿Ya has programado tu próxima cita médica?',u:'When is your appointment?',us:'¿Cuándo es tu cita?'},
  {f:'already',q:'What important decisions have you already made this year?',es:'¿Qué decisiones importantes has tomado ya este año?',u:'Why did you make that decision?',us:'¿Por qué tomaste esa decisión?'},
  {f:'already',q:'Have you already tried a new restaurant this month?',es:'¿Ya has probado un restaurante nuevo este mes?',u:'What did you order?',us:'¿Qué ordenaste?'},
  {f:'already',q:'Which movies or programs have you already watched this month?',es:'¿Qué películas o programas has visto ya este mes?',u:'Which one would you recommend?',us:'¿Cuál recomendarías?'},
  {f:'already',q:'Have you already bought everything you need for this week?',es:'¿Ya has comprado todo lo que necesitas para esta semana?',u:'Where did you go shopping?',us:'¿Dónde hiciste las compras?'},
  {f:'already',q:'What new technology have you already tried?',es:'¿Qué tecnología nueva has probado ya?',u:'Was it easy or difficult to use?',us:'¿Fue fácil o difícil de usar?'},
  {f:'yet',q:'Have you finished everything you need to do today yet?',es:'¿Ya has terminado todo lo que necesitas hacer hoy?',u:'What do you still need to do?',us:'¿Qué necesitas hacer todavía?'},
  {f:'yet',q:'What haven’t you finished yet today?',es:'¿Qué no has terminado todavía hoy?',u:'When are you going to finish it?',us:'¿Cuándo vas a terminarlo?'},
  {f:'yet',q:'Have you called your doctor yet?',es:'¿Ya has llamado a tu médico?',u:'Why do you need to call?',us:'¿Por qué necesitas llamar?'},
  {f:'yet',q:'Why haven’t you made plans for the weekend yet?',es:'¿Por qué todavía no has hecho planes para el fin de semana?',u:'What would you like to do?',us:'¿Qué te gustaría hacer?'},
  {f:'yet',q:'Have you replied to your important messages yet?',es:'¿Ya has respondido tus mensajes importantes?',u:'Who are you going to answer first?',us:'¿A quién vas a responder primero?'},
  {f:'yet',q:'Which countries haven’t you visited yet?',es:'¿Qué países no has visitado todavía?',u:'Which one would you like to visit first?',us:'¿Cuál te gustaría visitar primero?'},
  {f:'yet',q:'Have you decided what you want to do next weekend yet?',es:'¿Ya has decidido qué quieres hacer el próximo fin de semana?',u:'Who would you like to go with?',us:'¿Con quién te gustaría ir?'},
  {f:'yet',q:'What English skill haven’t you mastered yet?',es:'¿Qué habilidad de inglés no has dominado todavía?',u:'How are you practicing it?',us:'¿Cómo la estás practicando?'},
  {f:'yet',q:'Have you found a good way to practice English outside class yet?',es:'¿Ya has encontrado una buena manera de practicar inglés fuera de clase?',u:'How often do you practice?',us:'¿Con qué frecuencia practicas?'},
  {f:'yet',q:'Why haven’t you completed your personal goal yet?',es:'¿Por qué todavía no has completado tu meta personal?',u:'What is preventing you from completing it?',us:'¿Qué te impide completarla?'},
  {f:'yet',q:'Have you taken a vacation this year yet?',es:'¿Ya has tomado vacaciones este año?',u:'Where would you like to go?',us:'¿Adónde te gustaría ir?'},
  {f:'yet',q:'Who haven’t you spoken to yet today?',es:'¿Con quién no has hablado todavía hoy?',u:'Why do you need to speak to that person?',us:'¿Por qué necesitas hablar con esa persona?'},
  {f:'yet',q:'Have you met all your neighbors yet?',es:'¿Ya has conocido a todos tus vecinos?',u:'Which neighbor do you know best?',us:'¿A qué vecino conoces mejor?'},
  {f:'yet',q:'What haven’t you repaired in your home yet?',es:'¿Qué no has reparado todavía en tu casa?',u:'Why haven’t you repaired it?',us:'¿Por qué no lo has reparado?'},
  {f:'yet',q:'Have you watched the news yet today?',es:'¿Ya has visto las noticias hoy?',u:'What important news did you hear?',us:'¿Qué noticia importante escuchaste?'},
  {f:'yet',q:'Which tasks haven’t you completed at work yet?',es:'¿Qué tareas no has completado todavía en el trabajo?',u:'Which task will you do first?',us:'¿Qué tarea harás primero?'},
  {f:'yet',q:'Have you received the package you were waiting for yet?',es:'¿Ya has recibido el paquete que estabas esperando?',u:'When did you order it?',us:'¿Cuándo lo ordenaste?'},
  {f:'yet',q:'What haven’t you bought yet for your home?',es:'¿Qué no has comprado todavía para tu casa?',u:'Where are you going to buy it?',us:'¿Dónde vas a comprarlo?'},
  {f:'still',q:'Have you still not finished your current project?',es:'¿Todavía no has terminado tu proyecto actual?',u:'What is taking so long?',us:'¿Qué está tomando tanto tiempo?'},
  {f:'still',q:'Why have you still not answered that important message?',es:'¿Por qué todavía no has respondido ese mensaje importante?',u:'When did you receive it?',us:'¿Cuándo lo recibiste?'},
  {f:'still',q:'Have you still not decided what to cook tonight?',es:'¿Todavía no has decidido qué cocinar esta noche?',u:'What ingredients do you have at home?',us:'¿Qué ingredientes tienes en casa?'},
  {f:'still',q:'Who have you still not called this week?',es:'¿A quién todavía no has llamado esta semana?',u:'Why do you need to call that person?',us:'¿Por qué necesitas llamar a esa persona?'},
  {f:'still',q:'Have you still not found the item you lost?',es:'¿Todavía no has encontrado el objeto que perdiste?',u:'Where did you see it last?',us:'¿Dónde lo viste por última vez?'},
  {f:'still',q:'Why have you still not made your medical appointment?',es:'¿Por qué todavía no has programado tu cita médica?',u:'When are you going to call?',us:'¿Cuándo vas a llamar?'},
  {f:'still',q:'Which bill have you still not paid?',es:'¿Qué factura todavía no has pagado?',u:'When is it due?',us:'¿Cuándo vence?'},
  {f:'still',q:'Have you still not started your exercise plan?',es:'¿Todavía no has comenzado tu plan de ejercicio?',u:'What type of exercise do you want to do?',us:'¿Qué tipo de ejercicio quieres hacer?'},
  {f:'still',q:'What useful skill have you still not learned?',es:'¿Qué habilidad útil todavía no has aprendido?',u:'Why would you like to learn it?',us:'¿Por qué te gustaría aprenderla?'},
  {f:'still',q:'Have you still not chosen a gift for that special person?',es:'¿Todavía no has elegido un regalo para esa persona especial?',u:'What kind of gift are you considering?',us:'¿Qué tipo de regalo estás considerando?'},
  {f:'still',q:'Why have you still not spoken to your manager about the problem?',es:'¿Por qué todavía no has hablado con tu gerente sobre el problema?',u:'What do you want your manager to do?',us:'¿Qué quieres que haga tu gerente?'},
  {f:'still',q:'What problem with your car have you still not repaired?',es:'¿Qué problema de tu automóvil todavía no has reparado?',u:'How long has the car had that problem?',us:'¿Cuánto tiempo ha tenido el automóvil ese problema?'},
  {f:'still',q:'Have you still not completed your English homework?',es:'¿Todavía no has completado tu tarea de inglés?',u:'Which part is difficult for you?',us:'¿Qué parte es difícil para ti?'},
  {f:'still',q:'What have you still not done that you have always wanted to do?',es:'¿Qué no has hecho todavía que siempre has querido hacer?',u:'What has prevented you from doing it?',us:'¿Qué te ha impedido hacerlo?'}
];

const $ = id => document.getElementById(id);
const ui = Object.fromEntries(['setupView','gameView','teacherTab','studentTab','teacherForm','studentForm','teacherName','studentName','roomCodeInput','createRoomButton','joinRoomButton','joinError','connectionPill','connectionText','roomCodeDisplay','copyRoomButton','shareRoomButton','progressText','progressBar','playerList','playerCount','mobilePlayerCount','emptyPlayers','hostActions','newGameButton','endRoomButton','roleBadge','questionNumber','focusChip','questionEnglish','questionSpanish','followEnglish','followSpanish','selectedPlayer','selectedPlayerName','startGameButton','spinButton','completeButton','turnInstruction','playersToggle','classPanel','toast'].map(id=>[id,$(id)]));

const alphabet='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
let peer=null, hostConnection=null, isHost=false, roomCode='', localName='', state=null;
let connections=new Map(), spinTimer=null, toastTimer=null;

function makeCode(){return Array.from({length:6},()=>alphabet[Math.floor(Math.random()*alphabet.length)]).join('')}
function shuffleIndexes(){const a=QUESTIONS.map((_,i)=>i);for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function setStatus(text,kind=''){ui.connectionText.textContent=text;ui.connectionPill.className=`connection-pill ${kind}`}
function showToast(text){ui.toast.textContent=text;ui.toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>ui.toast.classList.remove('show'),2200)}
function hostId(code){return `tea-present-perfect-${code.toLowerCase()}`}
function cleanName(value){return value.trim().replace(/\s+/g,' ').slice(0,24)}
function newState(){return{started:false,complete:false,busy:false,index:0,deck:shuffleIndexes(),selectedId:null,players:[],version:Date.now()}}
function activePlayers(){return state.players.filter(p=>p.connected)}

function selectRole(role){
  const teacher=role==='teacher';
  ui.teacherTab.classList.toggle('active',teacher);ui.studentTab.classList.toggle('active',!teacher);
  ui.teacherTab.setAttribute('aria-selected',teacher);ui.studentTab.setAttribute('aria-selected',!teacher);
  ui.teacherForm.classList.toggle('hidden',!teacher);ui.studentForm.classList.toggle('hidden',teacher);
  setTimeout(()=>$(teacher?'teacherName':'studentName').focus(),0);
}
ui.teacherTab.onclick=()=>selectRole('teacher');ui.studentTab.onclick=()=>selectRole('student');

function openGame(){
  ui.setupView.classList.add('hidden');ui.gameView.classList.remove('hidden');
  ui.roomCodeDisplay.textContent=roomCode;ui.roleBadge.textContent=isHost?'Teacher':'Student';ui.hostActions.classList.toggle('hidden',!isHost);
  history.replaceState(null,'',`${location.pathname}?room=${roomCode}`);render();
}

function initPeer(id){
  return new Promise((resolve,reject)=>{
    if(typeof Peer==='undefined'){reject(new Error('Connection service did not load. Check the internet connection.'));return}
    const p=new Peer(id||undefined,{debug:0});
    const timer=setTimeout(()=>{p.destroy();reject(new Error('The connection timed out. Please try again.'))},14000);
    p.on('open',()=>{clearTimeout(timer);resolve(p)});
    p.on('error',error=>{clearTimeout(timer);reject(error)});
  });
}

ui.teacherForm.onsubmit=async event=>{
  event.preventDefault();localName=cleanName(ui.teacherName.value)||'Teacher';isHost=true;ui.createRoomButton.disabled=true;setStatus('Creating room…');
  for(let tries=0;tries<4;tries++){
    roomCode=makeCode();
    try{peer=await initPeer(hostId(roomCode));break}catch(error){if(error.type!=='unavailable-id'&&tries===3){showSetupError(error.message);return}}
  }
  if(!peer){showSetupError('A room could not be created. Please try again.');return}
  state=newState();peer.on('connection',acceptConnection);peer.on('disconnected',()=>setStatus('Reconnecting…','problem'));peer.on('close',()=>setStatus('Room closed','problem'));
  setStatus('Room is live','connected');openGame();
};

ui.studentForm.onsubmit=async event=>{
  event.preventDefault();ui.joinError.textContent='';localName=cleanName(ui.studentName.value);roomCode=ui.roomCodeInput.value.trim().toUpperCase();
  if(!localName||roomCode.length!==6){ui.joinError.textContent='Enter your name and the 6-character room code.';return}
  isHost=false;ui.joinRoomButton.disabled=true;setStatus('Joining room…');
  try{peer=await initPeer();hostConnection=peer.connect(hostId(roomCode),{reliable:true,metadata:{role:'student'}});wireStudentConnection(hostConnection)}catch(error){joinFailed(friendlyError(error))}
};

function wireStudentConnection(conn){
  const timer=setTimeout(()=>joinFailed('Room not found. Check the code and try again.'),12000);
  conn.on('open',()=>{clearTimeout(timer);conn.send({type:'join',name:localName});setStatus('Connected to class','connected')});
  conn.on('data',message=>{
    if(message.type==='state'){state=message.state;if(ui.gameView.classList.contains('hidden'))openGame();else render()}
    if(message.type==='spin')animateSpin(message.names,message.winnerId);
    if(message.type==='notice')showToast(message.text);
    if(message.type==='ended'){setStatus('Teacher ended the room','problem');showToast('The room has ended.');setTimeout(()=>location.href=location.pathname,1800)}
  });
  conn.on('close',()=>{clearTimeout(timer);setStatus('Teacher disconnected','problem');ui.turnInstruction.textContent='The teacher’s host screen is no longer connected.';disableGameButtons()});
  conn.on('error',error=>joinFailed(friendlyError(error)));
}

function acceptConnection(conn){
  conn.on('open',()=>connections.set(conn.peer,conn));
  conn.on('data',message=>{
    if(message.type==='join')addPlayer(conn,message.name);
    if(message.type==='action')handleAction(message.action,conn.peer);
  });
  conn.on('close',()=>disconnectPlayer(conn.peer));
}

function addPlayer(conn,name){
  name=cleanName(name)||'Student';
  let player=state.players.find(p=>p.name.toLowerCase()===name.toLowerCase()&&!p.connected);
  if(player){player.id=conn.peer;player.connected=true}
  else{
    let unique=name,n=2;while(state.players.some(p=>p.name.toLowerCase()===unique.toLowerCase()))unique=`${name} ${n++}`;
    player={id:conn.peer,name:unique,turns:0,connected:true};state.players.push(player);
  }
  broadcastState();broadcastNotice(`${player.name} joined the room.`);render();
}
function disconnectPlayer(id){const p=state.players.find(item=>item.id===id);if(p){p.connected=false;if(state.selectedId===id)state.selectedId=null;broadcastState();render()}connections.delete(id)}

function handleAction(action,source){
  if(!isHost||!state)return;
  if(action==='start')startGame();
  if(action==='spin')spin();
  if(action==='complete')completeTurn();
  if(action==='new'&&source==='host')resetGame();
}
function requestAction(action){if(isHost)handleAction(action,'host');else if(hostConnection?.open)hostConnection.send({type:'action',action})}
function broadcast(payload){for(const conn of connections.values())if(conn.open)conn.send(payload)}
function broadcastState(){state.version=Date.now();broadcast({type:'state',state:structuredClone(state)})}
function broadcastNotice(text){broadcast({type:'notice',text});showToast(text)}

function startGame(){
  if(activePlayers().length<2){broadcastNotice('At least two students must join before the game starts.');return}
  state.started=true;state.complete=false;state.index=0;state.selectedId=null;state.busy=false;broadcastState();render();
}
function spin(){
  if(!state.started||state.complete||state.busy||state.selectedId)return;
  const pool=activePlayers();if(pool.length<2){broadcastNotice('At least two connected students are needed to spin.');return}
  let candidates=pool;if(state.lastSelectedId&&pool.length>1)candidates=pool.filter(p=>p.id!==state.lastSelectedId);
  const winner=candidates[Math.floor(Math.random()*candidates.length)];state.busy=true;state.selectedId=winner.id;state.lastSelectedId=winner.id;
  const event={type:'spin',names:pool.map(p=>({id:p.id,name:p.name})),winnerId:winner.id};broadcast(event);animateSpin(event.names,event.winnerId);
  clearTimeout(spinTimer);spinTimer=setTimeout(()=>{state.busy=false;broadcastState();render()},2100);
}
function completeTurn(){
  if(!state.started||state.complete||state.busy||!state.selectedId)return;
  const player=state.players.find(p=>p.id===state.selectedId);if(player)player.turns++;
  state.index++;state.selectedId=null;if(state.index>=QUESTIONS.length)state.complete=true;
  broadcastState();render();
}
function resetGame(){state.started=false;state.complete=false;state.busy=false;state.index=0;state.selectedId=null;state.lastSelectedId=null;state.deck=shuffleIndexes();state.players.forEach(p=>p.turns=0);broadcastState();render();broadcastNotice('A new game is ready.')}

function animateSpin(names,winnerId){
  if(!names.length)return;ui.selectedPlayer.classList.add('show','spinning');let i=0;
  const cycle=setInterval(()=>{ui.selectedPlayerName.textContent=names[i++%names.length].name},90);
  setTimeout(()=>{clearInterval(cycle);const winner=names.find(p=>p.id===winnerId);ui.selectedPlayerName.textContent=winner?.name||'Student';ui.selectedPlayer.classList.remove('spinning')},1800);
  setTimeout(()=>ui.selectedPlayer.classList.remove('show'),2050);
}

function render(){
  if(!state)return;const total=QUESTIONS.length;const completed=Math.min(state.index,total);const players=state.players;
  ui.progressText.textContent=`${completed} / ${total}`;ui.progressBar.style.width=`${completed/total*100}%`;
  ui.playerCount.textContent=activePlayers().length;ui.mobilePlayerCount.textContent=activePlayers().length;ui.emptyPlayers.classList.toggle('hidden',players.length>0);
  ui.playerList.innerHTML='';players.forEach(player=>{const row=document.createElement('div');row.className=`player-row${player.connected?'':' offline'}`;row.innerHTML=`<span class="avatar">${escapeHtml(player.name.charAt(0).toUpperCase())}</span><div><div class="player-name">${escapeHtml(player.name)}</div><div class="player-meta">${player.connected?'Connected':'Disconnected'}</div></div><span class="turn-count">${player.turns} turn${player.turns===1?'':'s'}</span>`;ui.playerList.appendChild(row)});
  ui.questionNumber.textContent=state.complete?'Game complete':`Question ${Math.min(state.index+1,total)} of ${total}`;
  if(!state.started){showWaiting();return}
  if(state.complete){showComplete();return}
  const question=QUESTIONS[state.deck[state.index]];ui.focusChip.textContent=question.f.toUpperCase();ui.questionEnglish.textContent=question.q;ui.questionSpanish.textContent=question.es;ui.followEnglish.textContent=question.u;ui.followSpanish.textContent=question.us;
  ui.startGameButton.classList.add('hidden');ui.spinButton.classList.toggle('hidden',!!state.selectedId);ui.completeButton.classList.toggle('hidden',!state.selectedId);ui.spinButton.disabled=state.busy||activePlayers().length<2;ui.completeButton.disabled=state.busy;
  const selected=players.find(p=>p.id===state.selectedId);ui.turnInstruction.textContent=selected?`${selected.name} asks the main question. Another student answers and responds to the follow-up.`:'Spin to choose the student who will ask this question.';
}
function showWaiting(){ui.focusChip.textContent='LOBBY';ui.questionEnglish.textContent=activePlayers().length<2?'Waiting for students to join.':'Everyone is ready!';ui.questionSpanish.textContent=activePlayers().length<2?'Esperando que los estudiantes se unan.':'¡Todos están listos!';ui.followEnglish.textContent='Share the room code with the class.';ui.followSpanish.textContent='Comparte el código de la sala con la clase.';ui.startGameButton.classList.remove('hidden');ui.startGameButton.disabled=activePlayers().length<2;ui.spinButton.classList.add('hidden');ui.completeButton.classList.add('hidden');ui.turnInstruction.textContent=activePlayers().length<2?'Wait for at least two students, then begin.':'Any connected player can start the game.'}
function showComplete(){ui.focusChip.textContent='COMPLETE';ui.questionEnglish.textContent='You completed all 50 questions!';ui.questionSpanish.textContent='¡Completaron las 50 preguntas!';ui.followEnglish.textContent='Excellent speaking practice.';ui.followSpanish.textContent='Excelente práctica de conversación.';ui.startGameButton.classList.add('hidden');ui.spinButton.classList.add('hidden');ui.completeButton.classList.add('hidden');ui.turnInstruction.textContent=isHost?'Choose “Start a new game” to play again.':'The teacher can start a new game.'}
function disableGameButtons(){ui.startGameButton.disabled=true;ui.spinButton.disabled=true;ui.completeButton.disabled=true}
function escapeHtml(value){const d=document.createElement('div');d.textContent=value;return d.innerHTML}
function friendlyError(error){if(error?.type==='peer-unavailable')return'Room not found. Check the code and try again.';if(error?.type==='network')return'Network connection failed. Try Wi-Fi or another network.';return error?.message||'Could not connect to the room.'}
function joinFailed(message){ui.joinRoomButton.disabled=false;ui.joinError.textContent=message;setStatus('Not connected','problem');if(peer&&!peer.destroyed)peer.destroy()}
function showSetupError(message){ui.createRoomButton.disabled=false;setStatus('Could not create room','problem');showToast(message)}

ui.startGameButton.onclick=()=>requestAction('start');ui.spinButton.onclick=()=>requestAction('spin');ui.completeButton.onclick=()=>requestAction('complete');
ui.newGameButton.onclick=()=>{if(confirm('Start a new game and reset all turns?'))requestAction('new')};
ui.endRoomButton.onclick=()=>{if(confirm('End this room for everyone?')){broadcast({type:'ended'});peer?.destroy();location.href=location.pathname}};
ui.copyRoomButton.onclick=async()=>{await navigator.clipboard.writeText(roomCode);showToast('Room code copied.')};
ui.shareRoomButton.onclick=async()=>{const url=`${location.origin}${location.pathname}?room=${roomCode}`;const data={title:'Present Perfect Live',text:`Join our Tulsa English Academy game. Room code: ${roomCode}`,url};try{if(navigator.share)await navigator.share(data);else{await navigator.clipboard.writeText(url);showToast('Join link copied.')}}catch{}}
ui.playersToggle.onclick=()=>ui.classPanel.classList.toggle('open');
document.addEventListener('click',event=>{if(innerWidth<=900&&ui.classPanel.classList.contains('open')&&!ui.classPanel.contains(event.target)&&!ui.playersToggle.contains(event.target))ui.classPanel.classList.remove('open')});

const presetRoom=new URLSearchParams(location.search).get('room');if(presetRoom){selectRole('student');ui.roomCodeInput.value=presetRoom.toUpperCase().slice(0,6)}
window.addEventListener('beforeunload',()=>peer?.destroy());
