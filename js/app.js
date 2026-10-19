/* ====== TEMAS ====== */
const TH={
claro:{n:'Claro',v:{'--bg':'#f4f5f9','--bg2':'#fff','--crd':'#fff','--crd2':'#f0f1f5','--bdr':'#dde0e8','--fg':'#1a1d2b','--fg2':'#6b7490','--ac':'#d08a10','--ac2':'rgba(208,138,16,.12)','--ac3':'#b87808','--ok':'#16a34a','--ok2':'rgba(22,163,74,.1)','--nf':'#0ea5e9','--nf2':'rgba(14,165,233,.1)','--er':'#dc2626','--er2':'rgba(220,38,38,.1)','--wr':'#ca8a04','--mt':'#94a3b8','--mt2':'rgba(148,163,184,.1)','--gb':'rgba(255,255,255,.88)','--s1':'0 8px 30px rgba(0,0,0,.08)','--s2':'0 2px 8px rgba(0,0,0,.06)','--ib':'#f4f5f9','--af':'#fff'}},
escuro:{n:'Escuro',v:{'--bg':'#0d1017','--bg2':'#131720','--crd':'#1a1f2e','--crd2':'#212740','--bdr':'#2a3048','--fg':'#e4e7ef','--fg2':'#8891a8','--ac':'#e8a020','--ac2':'rgba(232,160,32,.15)','--ac3':'#d08a10','--ok':'#34d399','--ok2':'rgba(52,211,153,.15)','--nf':'#38bdf8','--nf2':'rgba(56,189,248,.15)','--er':'#f87171','--er2':'rgba(248,113,113,.15)','--wr':'#fbbf24','--mt':'#6b7490','--mt2':'rgba(107,116,144,.15)','--gb':'rgba(26,31,46,.85)','--s1':'0 8px 30px rgba(0,0,0,.4)','--s2':'0 2px 8px rgba(0,0,0,.3)','--ib':'#131720','--af':'#0d1017'}},
descanso:{n:'Descanso',v:{'--bg':'#f0e6d3','--bg2':'#f5edd9','--crd':'#faf3e5','--crd2':'#f0e8d4','--bdr':'#d8ccb4','--fg':'#3a3226','--fg2':'#7d7263','--ac':'#b87318','--ac2':'rgba(184,115,24,.15)','--ac3':'#9d6112','--ok':'#4d8c5e','--ok2':'rgba(77,140,94,.15)','--nf':'#5a8fa8','--nf2':'rgba(90,143,168,.15)','--er':'#b84c4c','--er2':'rgba(184,76,76,.15)','--wr':'#a8842a','--mt':'#8a7d6a','--mt2':'rgba(138,125,106,.15)','--gb':'rgba(250,243,229,.88)','--s1':'0 8px 30px rgba(58,50,38,.12)','--s2':'0 2px 8px rgba(58,50,38,.08)','--ib':'#f0e6d3','--af':'#fff'}}
};
let cTH='escuro';
function apTH(id){cTH=id;const r=document.documentElement;for(const[k,v]of Object.entries(TH[id].v))r.style.setProperty(k,v);document.querySelectorAll('.tb2').forEach(b=>b.classList.toggle('on',b.dataset.t===id))}

/* ====== CONSTANTES ====== */
const CP=['#38bdf8','#34d399','#fb7185','#a78bfa','#f97316','#06b6d4','#84cc16','#e879f9'];
const AL=['Analista','Assistente','Coordenador'];
const ALC={'Analista':'#38bdf8','Assistente':'#34d399','Coordenador':'#e8a020'};
const ALB={'Analista':'rgba(56,189,248,.15)','Assistente':'rgba(52,211,153,.15)','Coordenador':'rgba(232,160,32,.15)'};
const TT={'bug':{l:'Bug Fix',i:'fa-bug',c:'#f87171',b:'rgba(248,113,113,.15)'},'feature':{l:'Feature',i:'fa-rocket',c:'#38bdf8',b:'rgba(56,189,248,.15)'},'melhoria':{l:'Melhoria',i:'fa-arrow-up',c:'#34d399',b:'rgba(52,211,153,.15)'},'documentacao':{l:'Documentação',i:'fa-file-lines',c:'#a78bfa',b:'rgba(167,139,250,.15)'},'suporte':{l:'Suporte',i:'fa-headset',c:'#fbbf24',b:'rgba(251,191,36,.15)'},'planejamento':{l:'Planejamento',i:'fa-chart-gantt',c:'#e8a020',b:'rgba(232,160,32,.15)'},'manutencao':{l:'Manutenção',i:'fa-wrench',c:'#6b7490',b:'rgba(107,116,144,.15)'}};
const SM={'nao-iniciado':{l:'Não Iniciado',c:'var(--mt)',b:'var(--mt2)'},'em-andamento':{l:'Em Andamento',c:'var(--ac)',b:'var(--ac2)'},'em-revisao':{l:'Em Revisão',c:'var(--nf)',b:'var(--nf2)'},'concluido':{l:'Concluído',c:'var(--ok)',b:'var(--ok2)'}};
const PM={'baixa':{l:'Baixa',c:'var(--ok)'},'media':{l:'Média',c:'var(--wr)'},'alta':{l:'Alta',c:'var(--er)'}};

/* ====== DADOS ====== */
function dn(n){const d=new Date();d.setDate(d.getDate()+n);return d.toISOString().split('T')[0]}
let U=[{id:'admin',nm:'Carlos Mendes',rl:'admin',in:'CM',co:'#e8a020',ph:'(11)99876-5432',em:'carlos@taskflow.com',al:'Coordenador'},{id:'col1',nm:'Ana Silva',rl:'col',in:'AS',co:'#38bdf8',ph:'(21)98765-4321',em:'ana.silva@taskflow.com',al:'Analista'},{id:'col2',nm:'Pedro Santos',rl:'col',in:'PS',co:'#34d399',ph:'(31)97654-3210',em:'pedro.santos@taskflow.com',al:'Assistente'},{id:'col3',nm:'Maria Costa',rl:'col',in:'MC',co:'#fb7185',ph:'(41)96543-2109',em:'maria.costa@taskflow.com',al:'Coordenador'}];
let nU=4;
let TK=[{id:1,t:'Desenvolver Landing Page',tp:'feature',ai:'col1',s:'em-andamento',pr:'alta',sd:dn(-8),ed:dn(4),du:12},{id:2,t:'Design Sistema de Ícones',tp:'melhoria',ai:'col2',s:'em-revisao',pr:'media',sd:dn(-14),ed:dn(-2),du:12},{id:3,t:'Integração API Pagamentos',tp:'feature',ai:'col1',s:'nao-iniciado',pr:'alta',sd:dn(2),ed:dn(21),du:19},{id:4,t:'Relatório Mensal de Vendas',tp:'documentacao',ai:'col3',s:'concluido',pr:'baixa',sd:dn(-20),ed:dn(-11),du:9},{id:5,t:'Testes de Usabilidade',tp:'suporte',ai:'col2',s:'em-andamento',pr:'media',sd:dn(-6),ed:dn(8),du:14},{id:6,t:'Configurar CI/CD Pipeline',tp:'manutencao',ai:'col1',s:'em-andamento',pr:'alta',sd:dn(-11),ed:dn(-1),du:10},{id:7,t:'Corrigir bug no checkout',tp:'bug',ai:'col3',s:'nao-iniciado',pr:'alta',sd:dn(1),ed:dn(15),du:14},{id:8,t:'Otimização de Performance',tp:'melhoria',ai:'col1',s:'em-revisao',pr:'alta',sd:dn(-12),ed:dn(-3),du:9},{id:9,t:'Campanha Email Marketing',tp:'planejamento',ai:'col3',s:'em-andamento',pr:'media',sd:dn(-5),ed:dn(7),du:12},{id:10,t:'Refatorar Módulo de Auth',tp:'bug',ai:'col1',s:'em-andamento',pr:'alta',sd:dn(-15),ed:dn(-5),du:10}];
let nT=11;

/* ====== ESTADO ====== */
let cu=null,cv='dashboard',tf='todos',sq='',sc2=false,nop=false;

/* ====== PROGRESSO AUTO ====== */
function cP(tk){const n=new Date();n.setHours(12,0,0,0);const s=new Date(tk.sd+'T12:00:00'),e=new Date(tk.ed+'T12:00:00');if(tk.s==='concluido')return 100;if(n<=s)return 0;if(n>=e)return 100;return Math.round(((n-s)/(e-s))*100)}
function iO(tk){const n=new Date();n.setHours(12,0,0,0);return n>=new Date(tk.ed+'T12:00:00')&&tk.s!=='concluido'}
function gO(){return TK.filter(t=>iO(t))}

/* ====== UTILS ====== */
function gU(id){return U.find(u=>u.id===id)}
function gC(){return U.filter(u=>u.rl==='col')}
function gI(n){const p=n.trim().split(/\s+/);return p.length>=2?(p[0][0]+p[p.length-1][0]).toUpperCase():p[0].substring(0,2).toUpperCase()}
function dB(a,b){return Math.ceil((new Date(b)-new Date(a))/86400000)}
function cED(s,d){const dt=new Date(s+'T12:00:00');dt.setDate(dt.getDate()+d);return dt.toISOString().split('T')[0]}
function fD(d){return new Date(d+'T12:00:00').toLocaleDateString('pt-BR',{day:'2-digit',month:'short'})}
function fDF(d){return new Date(d+'T12:00:00').toLocaleDateString('pt-BR',{day:'2-digit',month:'long',year:'numeric'})}
function iA(){return cu&&cu.rl==='admin'}
function cE(tk){return iA()||tk.ai===cu.id}
function gV(){let f=iA()?[...TK]:TK.filter(t=>t.ai===cu.id);if(tf!=='todos')f=f.filter(t=>t.s===tf);if(sq){const q=sq.toLowerCase();f=f.filter(t=>t.t.toLowerCase().includes(q))}return f}
function tM(m,tp='success'){const c=document.getElementById('tk');const cl={success:'var(--ok)',error:'var(--er)',info:'var(--nf)',warning:'var(--wr)'};const ic={success:'fa-check-circle',error:'fa-times-circle',info:'fa-info-circle',warning:'fa-exclamation-triangle'};const e=document.createElement('div');e.className='ti';e.style.cssText='pointer-events:auto;display:flex;align-items:center;gap:10px;padding:10px 16px;border-radius:9px;background:var(--crd);border:1px solid var(--bdr);box-shadow:var(--s1);font-size:13px;min-width:260px;color:var(--fg);';e.innerHTML='<i class="fas '+ic[tp]+'" style="color:'+cl[tp]+'"></i><span>'+m+'</span>';c.appendChild(e);setTimeout(()=>{e.classList.add('rm');setTimeout(()=>e.remove(),200)},3000)}
function pH(tk,sh){const p=cP(tk);const sm2=SM[tk.s];const od=iO(tk);let h='<div><div class="flex items-center gap-2" style="min-width:100px"><div class="flex-1 h-1.5 rounded-full" style="background:var(--bdr)"><div class="h-1.5 rounded-full" style="width:'+p+'%;background:'+(od?'var(--er)':sm2.c)+'"></div></div><span class="text-xs font-semibold" style="width:30px;color:'+(od?'var(--er)':'var(--fg2)')+'">'+p+'%</span></div>';if(sh&&od)h+='<div class="ow"><i class="fas fa-exclamation-circle"></i> Tarefa não concluída</div>';h+='</div>';return h}

/* ====== LOGIN ====== */
function rL() {
  const cl = gC();
  document.getElementById('app').innerHTML = `
    <div class="logbg h-screen flex items-center justify-center p-4 overflow-auto">
      <div class="w-full max-w-md py-6">
        <div class="text-center mb-6 su2">
          <div class="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4" 
               style="background:var(--ac2);border:1px solid rgba(232,160,32,.3)">
            <i class="fas fa-diagram-project text-xl" style="color:var(--ac)"></i>
          </div>
          <h1 class="text-3xl font-bold tracking-tight mb-2">GeTa</h1>
          <p style="color:var(--fg2)">Gerenciador de tarefas</p>
        </div>

        <div class="gl rounded-xl p-5 su2" style="animation-delay:.1s">
          <h2 class="font-semibold mb-4">Acesso ao sistema</h2>
          <form onsubmit="event.preventDefault();fL()">
            <label class="text-xs font-medium block mb-1">E-mail</label>
            <input id="le" type="email" autocomplete="username" placeholder="seu@email.com"
                   class="w-full mb-3 px-3 py-2 rounded-lg text-sm"
                   style="background:var(--bg2);border:1px solid var(--bdr);color:var(--fg)" required>

            <label class="text-xs font-medium block mb-1">Senha</label>
            <input id="lp" type="password" autocomplete="current-password" placeholder="Digite sua senha"
                   class="w-full mb-2 px-3 py-2 rounded-lg text-sm"
                   style="background:var(--bg2);border:1px solid var(--bdr);color:var(--fg)" required>

            <div id="lemsg" class="text-xs mb-3" style="display:none;color:var(--er)">
              Sua senha ou login estão incorretos
            </div>

            <div class="text-right mb-4">
              <button type="button" onclick="fS()" class="text-xs" style="color:var(--ac)">
                Esqueceu a senha?
              </button>
            </div>

            <button type="submit" class="bp w-full py-2.5 rounded-lg font-semibold text-sm">
              Entrar
            </button>
          </form>

          <div class="flex items-center gap-3 my-4">
            <div class="flex-1" style="height:1px;background:var(--bdr)"></div>
            <span class="text-xs" style="color:var(--mt)">ou</span>
            <div class="flex-1" style="height:1px;background:var(--bdr)"></div>
          </div>

          <button type="button" onclick="gL()" 
                  class="w-full py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2"
                  style="background:var(--crd);border:1px solid var(--bdr)">
            <i class="fab fa-google" style="color:#4285f4"></i> Entrar com Google (Gmail)
          </button>
        </div>
      </div>
    </div>
  `;
}
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// Inicializa o cliente Supabase com suas credenciais reais
const supabase = createClient(
  "https://SEU-PROJECT-URL.supabase.co",   // coloque seu SUPABASE_URL
  "SEU-PUBLISHABLE-KEY"                    // coloque seu SUPABASE_KEY
);

async function fL() {
  const email = document.getElementById('le').value.trim().toLowerCase();
  const password = document.getElementById('lp').value;
  const m = document.getElementById('lemsg');

  // Autenticação real via Supabase
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    // Mostra mensagem de erro
    m.style.display = 'block';
  } else {
    // Esconde mensagem de erro e chama sua função de redirecionamento
    m.style.display = 'none';
    sR(data.user.id); 
  }
}
async function fS() {
  const email = document.getElementById('le').value.trim().toLowerCase();

  if (!email) {
    tM('Digite seu e-mail para recuperar a senha.', 'info');
    return;
  }

  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "https://SEU-SITE.com/reset" // URL para onde o usuário será redirecionado após redefinir
  });

  if (error) {
    tM('Erro ao enviar link de recuperação: ' + error.message, 'info');
  } else {
    tM('Um link de recuperação foi enviado para seu e-mail.', 'info');
  }
}
async function gL() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: "https://SEU-SITE.com/dashboard" // URL para onde o usuário será redirecionado após login
    }
  });

  if (error) {
    tM('Erro ao tentar login com Google: ' + error.message, 'info');
  } else {
    tM('Redirecionando para login com Google...', 'info');
  }
}

function sR(userId) {
  // Busca os dados do usuário autenticado no Supabase
  const user = supabase.auth.getUser().then(({ data, error }) => {
    if (error) {
      tM('Erro ao recuperar dados do usuário: ' + error.message, 'info');
      return;
    }

    // Aqui você pode salvar os dados do usuário em variáveis globais
    cu = {
      id: userId,
      nm: data.user.email // ou outro campo que você queira exibir
    };

    // Configurações de navegação
    cv = 'dashboard';
    tf = 'todos';
    sq = '';

    // Renderiza a aplicação
    rA();
    

    // Mensagem de boas-vindas
    tM('Bem-vindo(a), ' + cu.nm + '!', 'success');
  });
}

/* ====== APP ====== */
function rA(){const ap=document.getElementById('app');const ad=iA();const od=gO();const oc=od.length;const nv=[{id:'dashboard',ic:'fa-th-large',lb:'Painel'},{id:'tasks',ic:'fa-list-check',lb:'Tarefas'},...(ad?[{id:'team',ic:'fa-users',lb:'Equipe'}]:[]),{id:'gantt',ic:'fa-timeline',lb:'Gantt'}];const thH=Object.entries(TH).map(([id,t])=>'<button class="tb2 '+(cTH===id?'on':'')+' t'+(id==='claro'?'c':id==='escuro'?'e':'d')+'" data-t="'+id+'" onclick="apTH(\''+id+'\')" title="'+t.n+'"><div></div></button>').join('');const thL='<div class="tlb flex items-center gap-1 mt-1">'+Object.entries(TH).map(([id])=>'<span class="text-center flex-1" style="font-size:9px;color:'+(cTH===id?'var(--ac)':'var(--mt)')+';font-weight:'+(cTH===id?'600':'400')+'">'+TH[id].n+'</span>').join('')+'</div>';const ndH=ad&&oc>0?'<div class="ndd" id="ndd" style="display:'+(nop?'block':'none')+'"><div class="px-3 py-2" style="border-bottom:1px solid var(--bdr)"><div class="flex items-center gap-2"><i class="fas fa-exclamation-circle" style="color:var(--er)"></i><span class="font-semibold text-sm">'+oc+' tarefa'+(oc>1?'s':'')+' vencida'+(oc>1?'s':'')+'</span></div><div class="text-xs mt-1" style="color:var(--fg2)">Edite as datas para liberar</div></div><div style="max-height:260px;overflow:auto">'+od.map(t=>{const a=gU(t.ai);return'<div class="flex items-center gap-2 px-3 py-2 cursor-pointer" onclick="nop=false;rA();oEM('+t.id+')" style="border-bottom:1px solid var(--bdr)"><div class="flex-1 min-w-0"><div class="text-sm font-medium truncate">'+t.t+'</div><div class="text-xs" style="color:var(--fg2)">'+(a?a.nm:'—')+' · '+t.du+'d · Prazo: '+fD(t.ed)+'</div></div><button class="bp" style="padding:3px 8px;font-size:10px">Editar</button></div>'}).join('')+'</div></div>':'';ap.innerHTML='<div class="flex h-screen"><aside id="sb" class="flex flex-col '+(sc2?'cc':'')+'"><button class="tbt" onclick="tSB()" title="'+(sc2?'Expandir':'Recolher')+'"><i class="fas fa-chevron-left"></i></button><div class="flex items-center px-3 py-3" style="min-height:50px"><div class="flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0" style="background:var(--ac2)"><i class="fas fa-diagram-project" style="color:var(--ac);font-size:13px"></i></div><span class="sb2 text-sm font-bold ml-2">TaskFlow</span></div><nav class="flex-1 px-2 mt-1">'+nv.map(n=>'<div class="relative mb-0.5"><button onclick="sV(\''+n.id+'\')" class="ni '+(cv===n.id?'ac2':'')+' w-full flex items-center px-3 py-2 text-sm" style="color:'+(cv===n.id?'var(--ac)':'var(--fg2)')+'"><i class="fas '+n.ic+' w-5 text-center flex-shrink-0" style="font-size:13px"></i><span class="st ml-2">'+n.lb+'</span></button></div>').join('')+'</nav><div class="px-3 py-2" style="border-top:1px solid var(--bdr)"><div class="flex items-center gap-1 justify-center">'+thH+'</div>'+thL+'</div><div class="px-2 py-2" style="border-top:1px solid var(--bdr)"><div class="flex items-center"><div class="av flex-shrink-0" style="background:'+cu.co+';color:var(--af)">'+cu.in+'</div><div class="su flex-1 min-w-0 ml-2"><div class="text-xs font-medium truncate">'+cu.nm+'</div><div class="text-xs" style="color:var(--mt)">'+(ad?'Admin':'Colaborador')+'</div></div><button onclick="lo()" class="p-1.5 rounded hover:bg-white/5 flex-shrink-0" title="Sair do sistema"><i class="fas fa-sign-out-alt" style="color:var(--er);font-size:12px"></i></button></div></div></aside><div class="flex-1 flex flex-col min-w-0"><header class="flex items-center justify-between px-5 py-3" style="border-bottom:1px solid var(--bdr);background:var(--bg2)"><div><h1 class="text-lg font-bold" id="vt"></h1><p class="text-xs mt-0.5" style="color:var(--fg2)" id="vs"></p></div><div class="flex items-center gap-2"><div class="relative"><i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-xs" style="color:var(--mt)"></i><input type="text" placeholder="Buscar..." class="pl-8 pr-3 py-1.5 text-xs w-40" style="background:var(--crd)" oninput="sq=this.value;rV()"></div>'+(ad&&oc>0?'<div class="relative"><button class="nb p-1.5 rounded-lg hover:bg-white/5" onclick="tN()"><i class="fas fa-bell" style="color:var(--er);font-size:15px"></i><span class="nbd">'+oc+'</span></button>'+ndH+'</div>':'')+(ad?'<button onclick="oCM()" class="bp flex items-center gap-1 text-xs"><i class="fas fa-plus" style="font-size:10px"></i> Nova</button>':'')+'</div></header><main id="mc" class="flex-1 overflow-auto p-5" style="background:var(--bg)"></main></div></div><div id="mbd" class="fixed inset-0 z-40 mo flex items-center justify-center p-4" style="display:none" onclick="if(event.target===this)cM2()"><div id="mbo" class="mc gl rounded-xl w-full max-w-lg max-h-[90vh] overflow-auto"></div></div>';rV()}
function tSB(){sc2=!sc2;const s=document.getElementById('sb');if(s)s.classList.toggle('cc',sc2)}
function tN(){nop=!nop;const d=document.getElementById('ndd');if(d)d.style.display=nop?'block':'none'}
function sV(v){cv=v;tf='todos';rA()}function lo(){cu=null;rL()}
function rV(){const t=document.getElementById('vt'),s=document.getElementById('vs'),c=document.getElementById('mc'),a=iA();const tl={dashboard:['Painel',a?'Visão geral de todas as tarefas':'Visão geral das suas tarefas'],tasks:['Tarefas',a?'Designar e gerenciar tarefas':'Suas tarefas'],gantt:['Gantt','Visualização temporal'],team:['Equipe','Gerenciar membros']};t.textContent=tl[cv]?.[0]||'';s.textContent=tl[cv]?.[1]||'';({dashboard:rD,tasks:rT,gantt:rG,team:rE}[cv]||rD)(c)}

/* ====== DASHBOARD ====== */
function rD(el){const al=iA()?TK:TK.filter(t=>t.ai===cu.id);const oc=al.filter(t=>iO(t)).length;const st={t:al.length,a:al.filter(t=>t.s==='em-andamento').length,c:al.filter(t=>t.s==='concluido').length};const av=al.length?Math.round(al.reduce((s,t)=>s+cP(t),0)/al.length):0;el.innerHTML='<div class="fi">'+(oc>0?'<div class="mb-4 p-3 rounded-lg flex items-center gap-3" style="background:var(--er2);border:1px solid rgba(248,113,113,.3)"><i class="fas fa-exclamation-triangle" style="color:var(--er)"></i><div><div class="font-semibold text-sm" style="color:var(--er)">'+oc+' tarefa'+(oc>1?'s':'')+' com prazo vencido</div><div class="text-xs" style="color:var(--fg2)">Edite as datas para liberar para a equipe</div></div></div>':'')+'<div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5"><div class="sc rounded-lg p-4" style="background:var(--crd);border:1px solid var(--bdr)"><div class="text-xs" style="color:var(--fg2)">Total</div><div class="text-2xl font-bold mt-1">'+st.t+'</div></div><div class="sc rounded-lg p-4" style="background:var(--crd);border:1px solid var(--bdr)"><div class="text-xs" style="color:var(--fg2)">Em Andamento</div><div class="text-2xl font-bold mt-1" style="color:var(--ac)">'+st.a+'</div></div><div class="sc rounded-lg p-4" style="background:var(--crd);border:1px solid var(--bdr)"><div class="text-xs" style="color:var(--fg2)">Concluídas</div><div class="text-2xl font-bold mt-1" style="color:var(--ok)">'+st.c+'</div></div><div class="sc rounded-lg p-4" style="background:var(--crd);border:1px solid var(--bdr)"><div class="text-xs" style="color:var(--er)">Vencidas</div><div class="text-2xl font-bold mt-1" style="color:var(--er)">'+oc+'</div></div></div><div class="rounded-lg p-4" style="background:var(--crd);border:1px solid var(--bdr)"><h3 class="font-semibold text-sm mb-3">Tarefas Recentes</h3><div class="space-y-2">'+al.slice(0,6).map(t=>{const a=gU(t.ai);const sm2=SM[t.s];const tp2=TT[t.tp]||TT['manutencao'];return'<div class="flex items-center gap-2 p-2 rounded-lg cursor-pointer" onclick="oDM('+t.id+')" style="background:var(--mt2)"><div class="av" style="background:'+(a?a.co:'var(--mt)')+';color:var(--af);font-size:9px;width:24px;height:24px">'+(a?a.in:'?')+'</div><div class="flex-1 min-w-0"><div class="text-xs font-medium truncate">'+t.t+'</div><div class="text-xs" style="color:var(--fg2)">'+fD(t.sd)+' — '+fD(t.ed)+'</div></div><div class="tbadge" style="background:'+tp2.b+';color:'+tp2.c+'"><i class="fas '+tp2.i+'" style="font-size:8px"></i></div><div class="badge" style="background:'+sm2.b+';color:'+sm2.c+'">'+sm2.l+'</div></div>'}).join('')+'</div></div></div>'}

/* ====== TAREFAS ====== */
function rT(el){const vis=gV();const ad=iA();const al2=ad?TK:TK.filter(t=>t.ai===cu.id);const fl=[{id:'todos',l:'Todos',c:al2.length},...Object.entries(SM).map(([k,v])=>({id:k,l:v.l,c:al2.filter(t=>t.s===k).length}))];let rows='';if(vis.length===0){rows='<tr><td colspan="9" class="text-center py-10" style="color:var(--mt)"><i class="fas fa-inbox text-2xl mb-2 block" style="opacity:.3"></i>Nenhuma tarefa</td></tr>'}else{vis.forEach(t=>{const a=gU(t.ai);const sm2=SM[t.s];const pm=PM[t.pr];const tp2=TT[t.tp]||TT['manutencao'];const ed2=cE(t);const an=a?a.in:'?';const ac2=a?a.co:'var(--mt)';const nm=a?a.nm:'—';rows+='<tr class="tr" style="border-bottom:1px solid var(--bdr)"><td class="px-3 py-2"><div class="font-medium text-xs cursor-pointer hover:underline" onclick="oDM('+t.id+')">'+t.t+'</div></td><td class="px-3 py-2"><div class="tbadge" style="background:'+tp2.b+';color:'+tp2.c+'"><i class="fas '+tp2.i+' mr-1" style="font-size:8px"></i>'+tp2.l+'</div></td>'+(ad?'<td class="px-3 py-2"><div class="flex items-center gap-1"><div class="av" style="background:'+ac2+';color:var(--af);font-size:8px;width:20px;height:20px">'+an+'</div><span class="text-xs">'+nm+'</span></div></td>':'')+'<td class="px-3 py-2">'+(ed2?'<select onchange="uS('+t.id+',this.value)" class="text-xs font-medium py-0.5 px-1.5 rounded cursor-pointer" style="background:'+sm2.b+';color:'+sm2.c+';border:none">'+Object.entries(SM).map(([k])=>'<option value="'+k+'" '+(k===t.s?'selected':'')+' style="background:var(--crd);color:var(--fg)">'+SM[k].l+'</option>').join('')+'</select>':'<div class="badge" style="background:'+sm2.b+';color:'+sm2.c+'">'+sm2.l+'</div>')+'</td><td class="px-3 py-2"><div class="flex items-center gap-1"><span class="pdot" style="background:'+pm.c+'"></span><span class="text-xs" style="color:var(--fg2)">'+pm.l+'</span></div></td><td class="px-3 py-2">'+pH(t,true)+'</td><td class="px-3 py-2"><span class="text-xs font-bold" style="color:var(--nf)">'+t.du+'d</span></td><td class="px-3 py-2" style="color:var(--fg2)"><span class="text-xs">'+fD(t.sd)+'</span><span class="mx-0.5 text-xs" style="color:var(--mt)">→</span><span class="text-xs">'+fD(t.ed)+'</span></td><td class="px-3 py-2 text-center">'+(ad?'<button onclick="oEM('+t.id+')" class="p-1 rounded hover:bg-white/5" title="Editar"><i class="fas fa-pen text-xs" style="color:var(--ac)"></i></button>':'')+'<button onclick="oDM('+t.id+')" class="p-1 rounded hover:bg-white/5" title="Detalhes"><i class="fas fa-eye text-xs" style="color:var(--mt)"></i></button>'+(ad?'<button onclick="dTK('+t.id+')" class="p-1 rounded hover:bg-white/5 ml-0.5" title="Excluir"><i class="fas fa-trash text-xs" style="color:var(--er)"></i></button>':'')+'</td></tr>'})}el.innerHTML='<div class="fi"><div class="flex items-center gap-2 mb-4 flex-wrap">'+fl.map(f=>'<button onclick="tf=\''+f.id+'\';rV()" class="px-2.5 py-1 rounded-lg text-xs font-medium transition-all" style="background:'+(tf===f.id?'var(--ac2)':'var(--crd)')+';color:'+(tf===f.id?'var(--ac)':'var(--fg2)')+';border:1px solid '+(tf===f.id?'var(--ac)':'var(--bdr)')+'">'+f.l+' <span class="ml-1 opacity-60">'+f.c+'</span></button>').join('')+'</div><div class="rounded-lg overflow-hidden" style="background:var(--crd);border:1px solid var(--bdr)"><div class="overflow-x-auto"><table class="w-full text-xs"><thead><tr style="background:var(--bg2);border-bottom:1px solid var(--bdr)"><th class="text-left px-3 py-2 font-semibold" style="color:var(--fg2)">Tarefa</th><th class="text-left px-3 py-2 font-semibold" style="color:var(--fg2)">Tipo</th>'+(ad?'<th class="text-left px-3 py-2 font-semibold" style="color:var(--fg2)">Resp.</th>':'')+'<th class="text-left px-3 py-2 font-semibold" style="color:var(--fg2)">Status</th><th class="text-left px-3 py-2 font-semibold" style="color:var(--fg2)">Prio.</th><th class="text-left px-3 py-2 font-semibold" style="color:var(--fg2)">Progresso</th><th class="text-left px-3 py-2 font-semibold" style="color:var(--fg2)">Dur.</th><th class="text-left px-3 py-2 font-semibold" style="color:var(--fg2)">Período</th><th class="text-center px-3 py-2 font-semibold" style="color:var(--fg2)">Ações</th></tr></thead><tbody>'+rows+'</tbody></table></div></div></div>'}
function uS(id,s){const t=TK.find(x=>x.id===id);if(!t)return;t.s=s;rV();tM('Status: '+SM[s].l,'success')}
function dTK(id){const t=TK.find(x=>x.id===id);if(!t)return;const m=document.getElementById('mbd'),b=document.getElementById('mbo');b.innerHTML='<div class="p-5"><h2 class="font-bold mb-3">Excluir "'+t.t+'"?</h2><div class="flex gap-2"><button onclick="TK=TK.filter(x=>x.id!=='+id+');cM2();rV();tM(\'Excluída\',\'warning\')" class="bd flex-1">Excluir</button><button onclick="cM2()" class="bs flex-1">Cancelar</button></div></div>';m.style.display='flex'}

/* ====== GANTT ====== */
function rG(el){const vis=gV();if(!vis.length){el.innerHTML='<div class="flex flex-col items-center justify-center h-64" style="color:var(--mt)"><i class="fas fa-timeline text-3xl mb-2 opacity-30"></i>Sem tarefas</div>';return}const aD=vis.flatMap(t=>[new Date(t.sd+'T12:00:00'),new Date(t.ed+'T12:00:00')]);const mn=new Date(Math.min(...aD)),mx=new Date(Math.max(...aD));mn.setDate(mn.getDate()-3);mx.setDate(mx.getDate()+4);const tD=Math.ceil((mx-mn)/86400000),dW=36,lW=200,tW=tD*dW,rH=40;const td=new Date();td.setHours(12,0,0,0);const mL=['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];let hC='',mH='',cM2=-1,mS=0;for(let i=0;i<tD;i++){const d=new Date(mn);d.setDate(d.getDate()+i);const we=d.getDay()===0||d.getDay()===6;const tt=d.toDateString()===td.toDateString();const dn=d.getDate();const mo=d.getMonth();if(mo!==cM2){if(cM2!==-1)mH+='<div class="absolute text-xs font-semibold" style="color:var(--fg2);left:'+((mS+.5)*dW)+'px;top:0;line-height:22px">'+mL[cM2]+'</div>';cM2=mo;mS=i}const sl=dn===1||dn%2===1;hC+='<div class="absolute top-5 text-center" style="left:'+(i*dW)+'px;width:'+dW+'px;height:18px;line-height:18px;font-size:9px;color:'+(tt?'var(--er)':we?'var(--mt)':'var(--fg2)')+';font-weight:'+(tt?'700':'400')+'">'+(sl?dn:'')+'</div>'}mH+='<div class="absolute text-xs font-semibold" style="color:var(--fg2);left:'+((mS+.5)*dW)+'px;top:0;line-height:22px">'+mL[cM2]+'</div>';const tO=Math.ceil((td-mn)/86400000),tL=tO*dW+dW/2,sTL=tO>=0&&tO<=tD;let wB='';for(let i=0;i<tD;i++){const d=new Date(mn);d.setDate(d.getDate()+i);if(d.getDay()===0||d.getDay()===6)wB+='<div class="absolute top-0 bottom-0" style="left:'+(i*dW)+'px;width:'+dW+'px;background:var(--mt2)"></div>'}const so2=[...vis].sort((a,b)=>new Date(a.sd)-new Date(b.sd));let tR='';so2.forEach(t=>{const ts=new Date(t.sd+'T12:00:00'),te=new Date(t.ed+'T12:00:00');const so=Math.ceil((ts-mn)/86400000),du=Math.ceil((te-ts)/86400000);const bl=so*dW,bw=Math.max(du*dW,dW);const sm2=SM[t.s];const a=gU(t.ai);const od=iO(t);tR+='<div class="flex" style="height:'+rH+'px;border-bottom:1px solid var(--bdr)"><div style="width:'+lW+'px;min-width:'+lW+'px;position:sticky;left:0;z-index:5;background:var(--crd);border-right:1px solid var(--bdr)" class="flex items-center gap-1.5 px-2"><div class="av" style="background:'+(a?a.co:'var(--mt)')+';color:var(--af);font-size:8px;width:20px;height:20px">'+(a?a.in:'?')+'</div><span class="text-xs font-medium truncate cursor-pointer hover:underline" onclick="oDM('+t.id+')">'+t.t+'</span></div><div class="relative flex-1" style="min-width:'+tW+'px"><div style="position:absolute;height:26px;top:50%;transform:translateY(-50%);left:'+bl+'px;width:'+bw+'px;border-radius:5px;overflow:hidden;cursor:pointer;border:2px solid '+(od?'var(--er)':'transparent')+'" onclick="oDM('+t.id+')"><div style="height:100%;width:'+cP(t)+'%;background:'+(od?'var(--er)':sm2.c)+';opacity:.3;position:absolute;left:0;top:0;border-radius:5px"></div><div style="height:100%;width:100%;background:'+(od?'var(--er)':sm2.c)+';border-radius:5px;display:flex;align-items:center;padding:0 6px;font-size:10px;font-weight:500;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;z-index:1;opacity:.9">'+t.t+'</div></div></div></div>'});el.innerHTML='<div class="fi rounded-lg overflow-hidden" style="background:var(--crd);border:1px solid var(--bdr)"><div class="overflow-auto" style="max-height:calc(100vh - 160px)"><div class="flex sticky top-0 z-10" style="background:var(--bg2);border-bottom:1px solid var(--bdr)"><div style="width:'+lW+'px;min-width:'+lW+'px;position:sticky;left:0;z-index:6;background:var(--bg2);border-right:1px solid var(--bdr);border-bottom:1px solid var(--bdr)" class="flex items-center px-2 text-xs font-semibold" style="color:var(--mt)">TAREFA</div><div class="relative flex-1" style="min-width:'+tW+'px;height:40px">'+mH+hC+(sTL?'<div style="position:absolute;top:0;bottom:0;width:2px;background:var(--er);z-index:4;pointer-events:none;left:'+tL+'px"><div style="position:absolute;top:-3px;width:8px;height:8px;border-radius:50%;background:var(--er);left:-3px"></div></div>':'')+'</div></div><div class="relative"><div class="absolute inset-0 pointer-events-none" style="margin-left:'+lW+'px">'+wB+'</div>'+tR+'</div></div></div>'}

/* ====== EQUIPE ====== */
function rE(el){const cl=gC();el.innerHTML='<div class="fi"><div class="flex items-center justify-between mb-4"><span class="text-xs" style="color:var(--fg2)">'+cl.length+' membro'+(cl.length!==1?'s':'')+'</span><button onclick="oNM()" class="bp flex items-center gap-1 text-xs"><i class="fas fa-user-plus" style="font-size:10px"></i> Novo Membro</button></div><div class="grid md:grid-cols-2 xl:grid-cols-3 gap-3">'+cl.map(u=>{const ut=TK.filter(t=>t.ai===u.id);const cp=ut.filter(t=>t.s==='concluido').length;const ap=ut.length?Math.round(ut.reduce((s,t)=>s+cP(t),0)/ut.length):0;const td2=ut.reduce((s,t)=>s+t.du,0);return'<div class="sc rounded-lg p-4" style="background:var(--crd);border:1px solid var(--bdr)"><div class="flex items-start justify-between mb-3"><div class="flex items-center gap-2"><div class="av" style="background:'+u.co+';color:var(--af);width:38px;height:38px;font-size:13px">'+u.in+'</div><div><div class="font-semibold text-sm">'+u.nm+'</div><div class="badge mt-0.5" style="background:'+(ALB[u.al]||'var(--mt2)')+';color:'+(ALC[u.al]||'var(--mt)')+'">'+u.al+'</div></div></div><div class="flex items-center gap-0.5"><button onclick="oEM2(\''+u.id+'\')" class="p-1 rounded hover:bg-white/5"><i class="fas fa-pen text-xs" style="color:var(--ac)"></i></button><button onclick="dM(\''+u.id+'\')" class="p-1 rounded hover:bg-white/5"><i class="fas fa-trash text-xs" style="color:var(--er)"></i></button></div></div><div class="space-y-1.5 mb-3 pb-3" style="border-bottom:1px solid var(--bdr)"><div class="flex items-center gap-2 text-xs"><i class="fas fa-envelope w-3.5 text-center" style="font-size:9px;color:var(--mt)"></i><span style="color:var(--fg2)">'+u.em+'</span></div><div class="flex items-center gap-2 text-xs"><i class="fas fa-phone w-3.5 text-center" style="font-size:9px;color:var(--mt)"></i><span style="color:var(--fg2)">'+u.ph+'</span></div></div><div class="grid grid-cols-3 gap-1.5 mb-3"><div class="text-center p-1.5 rounded" style="background:var(--bg2)"><div class="text-base font-bold" style="color:var(--ac)">'+ut.length+'</div><div class="text-xs" style="color:var(--mt)">Taref.</div></div><div class="text-center p-1.5 rounded" style="background:var(--bg2)"><div class="text-base font-bold" style="color:var(--ok)">'+cp+'</div><div class="text-xs" style="color:var(--mt)">Feitas</div></div><div class="text-center p-1.5 rounded" style="background:var(--bg2)"><div class="text-base font-bold" style="color:var(--nf)">'+td2+'d</div><div class="text-xs" style="color:var(--mt)">Dur.</div></div></div><div><div class="flex justify-between text-xs mb-1"><span style="color:var(--fg2)">Progresso</span><span class="font-semibold">'+ap+'%</span></div><div class="h-1.5 rounded-full" style="background:var(--bdr)"><div class="h-1.5 rounded-full pbf" style="width:'+ap+'%;background:'+u.co+'"></div></div></div></div>'}).join('')+'</div></div>'}

/* ====== MODAIS MEMBRO ====== */
function oNM(){const m=document.getElementById('mbd'),b=document.getElementById('mbo');b.innerHTML='<div class="p-5"><div class="flex justify-between mb-4"><h2 class="font-bold"><i class="fas fa-user-plus mr-1" style="color:var(--ac)"></i>Novo Membro</h2><button onclick="cM2()" class="p-1 rounded hover:bg-white/5"><i class="fas fa-times" style="color:var(--mt)"></i></button></div><form onsubmit="return hNM(event)"><div class="mb-3"><label class="fl">Nome</label><input type="text" id="mn" required class="fi2"></div><div class="fr mb-3"><div><label class="fl">E-mail</label><input type="email" id="me" required class="fi2"></div><div><label class="fl">Telefone</label><input type="tel" id="mp" required class="fi2"></div></div><div class="mb-3"><label class="fl">Nível de Acesso</label><select id="ma" required class="fi2">'+AL.map(l=>'<option value="'+l+'">'+l+'</option>').join('')+'</select></div><div class="flex gap-2 pt-2"><button type="submit" class="bp flex-1">Adicionar</button><button type="button" onclick="cM2()" class="bs flex-1">Cancelar</button></div></form></div>';m.style.display='flex'}
function hNM(e){e.preventDefault();const nm=document.getElementById('mn').value.trim(),em=document.getElementById('me').value.trim(),ph=document.getElementById('mp').value.trim(),al=document.getElementById('ma').value;if(!nm||!em)return false;U.push({id:'col'+(nU++),nm,rl:'col',in:gI(nm),co:CP[(U.length-1)%CP.length],ph,em,al});cM2();rV();tM('"'+nm+'" adicionado','success');return false}
function oEM2(uid){const u=gU(uid);if(!u)return;const m=document.getElementById('mbd'),b=document.getElementById('mbo');b.innerHTML='<div class="p-5"><div class="flex justify-between mb-4"><h2 class="font-bold"><i class="fas fa-user-pen mr-1" style="color:var(--ac)"></i>Editar Membro</h2><button onclick="cM2()" class="p-1 rounded hover:bg-white/5"><i class="fas fa-times" style="color:var(--mt)"></i></button></div><form onsubmit="return hEM(event,\''+u.id+'\')"><div class="mb-3"><label class="fl">Nome</label><input type="text" id="en" required value="'+u.nm+'" class="fi2"></div><div class="fr mb-3"><div><label class="fl">E-mail</label><input type="email" id="ee" required value="'+u.em+'" class="fi2"></div><div><label class="fl">Telefone</label><input type="tel" id="ep" required value="'+u.ph+'" class="fi2"></div></div><div class="mb-3"><label class="fl">Nível</label><select id="ea" required class="fi2">'+AL.map(l=>'<option value="'+l+'" '+(l===u.al?'selected':'')+'>'+l+'</option>').join('')+'</select></div><div class="flex gap-2 pt-2"><button type="submit" class="bp flex-1">Salvar</button><button type="button" onclick="cM2()" class="bs flex-1">Cancelar</button></div></form></div>';m.style.display='flex'}
function hEM(e,uid){e.preventDefault();const u=gU(uid);if(!u)return false;u.nm=document.getElementById('en').value.trim();u.em=document.getElementById('ee').value.trim();u.ph=document.getElementById('ep').value.trim();u.al=document.getElementById('ea').value;u.in=gI(u.nm);cM2();rV();tM('"'+u.nm+'" atualizado','success');return false}
function dM(uid){const u=gU(uid);if(!u)return;const m=document.getElementById('mbd'),b=document.getElementById('mbo');b.innerHTML='<div class="p-5"><h2 class="font-bold mb-3">Remover '+u.nm+'?</h2><div class="flex gap-2"><button onclick="U=U.filter(x=>x.id!==\''+uid+'\');cM2();rV();tM(\'Removido\',\'warning\')" class="bd flex-1">Remover</button><button onclick="cM2()" class="bs flex-1">Cancelar</button></div></div>';m.style.display='flex'}

/* ====== MODAL CRIAR TAREFA ====== */
function oCM(){const m=document.getElementById('mbd'),b=document.getElementById('mbo');const tm=new Date();tm.setDate(tm.getDate()+1);const ft=d=>d.toISOString().split('T')[0];const cl=gC();b.innerHTML='<div class="p-5"><div class="flex justify-between mb-4"><h2 class="font-bold"><i class="fas fa-clipboard-list mr-1" style="color:var(--ac)"></i>Designar Tarefa</h2><button onclick="cM2()" class="p-1 rounded hover:bg-white/5"><i class="fas fa-times" style="color:var(--mt)"></i></button></div><form onsubmit="return hC(event)"><div class="mb-3"><label class="fl">Nome da Tarefa</label><input type="text" id="ft2" required placeholder="Ex: Implementar notificações" class="fi2"></div><div class="fr mb-3"><div><label class="fl">Tipo da Tarefa</label><select id="fty" required class="fi2">'+Object.entries(TT).map(([k,v])=>'<option value="'+k+'">'+v.l+'</option>').join('')+'</select></div><div><label class="fl">Prioridade</label><select id="fpr" required class="fi2"><option value="baixa">Baixa</option><option value="media" selected>Média</option><option value="alta">Alta</option></select></div></div><div class="mb-3"><label class="fl">Responsável pela Tarefa</label><select id="fas" required class="fi2">'+cl.map(u=>'<option value="'+u.id+'">'+u.nm+' — '+u.al+'</option>').join('')+'</select></div><div class="mb-3"><label class="fl">Duração da Tarefa</label><div class="dr"><div><label class="fl" style="font-size:10px">Início</label><input type="date" id="fsd" required value="'+ft(tm)+'" class="fi2" onchange="uCE()"></div><div><label class="fl" style="font-size:10px">Dias</label><input type="number" id="fdu" required min="1" max="365" value="10" class="fi2" style="text-align:center" oninput="uCE()"></div><div><label class="fl" style="font-size:10px">Término</label><div class="ce" id="fce">'+fD(cED(ft(tm),10))+'</div></div></div></div><div class="mb-3"><label class="fl">Status Inicial</label><select id="fst" class="fi2"><option value="nao-iniciado">Não Iniciado</option><option value="em-andamento">Em Andamento</option></select></div><div class="flex gap-2 pt-3" style="border-top:1px solid var(--bdr);padding-top:12px"><button type="submit" class="bp flex-1"><i class="fas fa-check mr-1"></i>Designar</button><button type="button" onclick="cM2()" class="bs flex-1">Cancelar</button></div></form></div>';m.style.display='flex'}
function uCE(){const s=document.getElementById('fsd'),d=document.getElementById('fdu'),o=document.getElementById('fce');if(s&&d&&o)o.textContent=fD(cED(s.value,Math.max(1,parseInt(d.value)||1)))}
function hC(e){e.preventDefault();const ti=document.getElementById('ft2').value.trim();if(!ti){tM('Informe o nome','error');return false}const sd=document.getElementById('fsd').value,du=Math.max(1,parseInt(document.getElementById('fdu').value)||1);TK.push({id:nT++,t:ti,tp:document.getElementById('fty').value,ai:document.getElementById('fas').value,s:document.getElementById('fst').value,pr:document.getElementById('fpr').value,sd,ed:cED(sd,du),du});cM2();rV();tM('"'+ti+'" designada','success');return false}

/* ====== MODAL EDITAR TAREFA ====== */
function oEM(id){const t=TK.find(x=>x.id===id);if(!t)return;const cl=gC();const m=document.getElementById('mbd'),b=document.getElementById('mbo');b.innerHTML='<div class="p-5"><div class="flex justify-between mb-4"><h2 class="font-bold"><i class="fas fa-pen mr-1" style="color:var(--ac)"></i>Editar Tarefa</h2><button onclick="cM2()" class="p-1 rounded hover:bg-white/5"><i class="fas fa-times" style="color:var(--mt)"></i></button></div><form onsubmit="return hE(event,'+t.id+')"><div class="mb-3"><label class="fl">Nome da Tarefa</label><input type="text" id="et" required value="'+t.t+'" class="fi2"></div><div class="fr mb-3"><div><label class="fl">Tipo</label><select id="etp" required class="fi2">'+Object.entries(TT).map(([k])=>'<option value="'+k+'" '+(k===t.tp?'selected':'')+'>'+TT[k].l+'</option>').join('')+'</select></div><div><label class="fl">Prioridade</label><select id="epr" required class="fi2"><option value="baixa" '+(t.pr==='baixa'?'selected':'')+'>Baixa</option><option value="media" '+(t.pr==='media'?'selected':'')+'>Média</option><option value="alta" '+(t.pr==='alta'?'selected':'')+'>Alta</option></select></div></div><div class="mb-3"><label class="fl">Responsável</label><select id="eai" required class="fi2">'+cl.map(u=>'<option value="'+u.id+'" '+(u.id===t.ai?'selected':'')+'>'+u.nm+' — '+u.al+'</option>').join('')+'</select></div><div class="mb-3"><label class="fl">Duração</label><div class="dr"><div><label class="fl" style="font-size:10px">Início</label><input type="date" id="esd" required value="'+t.sd+'" class="fi2" onchange="uEE()"></div><div><label class="fl" style="font-size:10px">Dias</label><input type="number" id="edu" required min="1" max="365" value="'+t.du+'" class="fi2" style="text-align:center" oninput="uEE()"></div><div><label class="fl" style="font-size:10px">Término</label><div class="ce" id="ece">'+fD(t.ed)+'</div></div></div></div><div class="mb-3"><label class="fl">Status</label><select id="est" class="fi2">'+Object.entries(SM).map(([k])=>'<option value="'+k+'" '+(k===t.s?'selected':'')+'>'+SM[k].l+'</option>').join('')+'</select></div><div class="flex gap-2 pt-3" style="border-top:1px solid var(--bdr);padding-top:12px"><button type="submit" class="bp flex-1">Salvar</button><button type="button" onclick="cM2()" class="bs flex-1">Cancelar</button></div></form></div>';m.style.display='flex'}
function uEE(){const s=document.getElementById('esd'),d=document.getElementById('edu'),o=document.getElementById('ece');if(s&&d&&o)o.textContent=fD(cED(s.value,Math.max(1,parseInt(d.value)||1)))}
function hE(e,id){e.preventDefault();const t=TK.find(x=>x.id===id);if(!t)return false;const ti=document.getElementById('et').value.trim();if(!ti){tM('Informe o nome','error');return false}const sd=document.getElementById('esd').value,du=Math.max(1,parseInt(document.getElementById('edu').value)||1);t.t=ti;t.tp=document.getElementById('etp').value;t.ai=document.getElementById('eai').value;t.pr=document.getElementById('epr').value;t.sd=sd;t.du=du;t.ed=cED(sd,du);t.s=document.getElementById('est').value;cM2();rV();tM('"'+ti+'" atualizada','success');return false}

/* ====== MODAL DETALHES ====== */
function oDM(id){const t=TK.find(x=>x.id===id);if(!t)return;const a=gU(t.ai);const sm2=SM[t.s];const pm=PM[t.pr];const tp2=TT[t.tp]||TT['manutencao'];const ad=iA();const od=iO(t);const pg=cP(t);const an=a?a.nm:'—';const ai2=a?a.in:'?';const ac2=a?a.co:'var(--mt)';const m=document.getElementById('mbd'),b=document.getElementById('mbo');b.innerHTML='<div class="p-5"><div class="flex items-start justify-between mb-3"><div class="flex-1 min-w-0"><h2 class="font-bold">'+t.t+'</h2><div class="flex items-center gap-1.5 mt-1.5"><div class="tbadge" style="background:'+tp2.b+';color:'+tp2.c+'"><i class="fas '+tp2.i+'" style="font-size:8px"></i> '+tp2.l+'</div><div class="badge" style="background:'+sm2.b+';color:'+sm2.c+'">'+sm2.l+'</div></div></div><button onclick="cM2()" class="p-1 rounded hover:bg-white/5 flex-shrink-0 ml-2"><i class="fas fa-times" style="color:var(--mt)"></i></button></div><div class="grid grid-cols-2 gap-2 mb-3"><div class="p-2 rounded" style="background:var(--bg2)"><div class="text-xs mb-0.5" style="color:var(--mt)">Responsável</div><div class="flex items-center gap-1.5"><div class="av" style="background:'+ac2+';color:var(--af);font-size:8px;width:20px;height:20px">'+ai2+'</div><span class="text-xs font-medium">'+an+'</span></div></div><div class="p-2 rounded" style="background:var(--bg2)"><div class="text-xs mb-0.5" style="color:var(--mt)">Prioridade</div><div class="flex items-center gap-1"><span class="pdot" style="background:'+pm.c+'"></span><span class="text-xs font-medium">'+pm.l+'</span></div></div><div class="p-2 rounded" style="background:var(--bg2)"><div class="text-xs mb-0.5" style="color:var(--mt)">Duração</div><span class="text-xs font-bold" style="color:var(--nf)">'+t.du+' dias</span></div><div class="p-2 rounded" style="background:var(--bg2)"><div class="text-xs mb-0.5" style="color:var(--mt)">Período</div><span class="text-xs">'+fD(t.sd)+' → '+fD(t.ed)+'</span></div></div><div class="mb-3"><div class="flex justify-between text-xs mb-1"><span style="color:var(--fg2)">Progresso (automático)</span><span class="font-semibold" style="color:'+(od?'var(--er)':'var(--fg)')+'">'+pg+'%</span></div><div class="h-2 rounded-full" style="background:var(--bdr)"><div class="h-2 rounded-full" style="width:'+pg+'%;background:'+(od?'var(--er)':sm2.c)+'"></div></div>'+(od?'<div style="margin-top:8px;padding:6px 10px;border-radius:6px;background:var(--er2);border:1px solid rgba(248,113,113,.3)"><div class="flex items-center gap-1.5"><i class="fas fa-exclamation-circle" style="color:var(--er)"></i><span class="text-xs font-semibold" style="color:var(--er)">Tarefa não concluída</span></div><div class="text-xs mt-0.5" style="color:var(--fg2)">Prazo encerrou em '+fD(t.ed)+'. '+(ad?'Edite as datas para liberar.':'Solicite extensão ao gerente.')+'</div></div>':'')+'</div>'+(ad?'<div class="flex gap-2 mt-2"><button onclick="cM2();oEM('+t.id+')" class="bp flex-1 flex items-center justify-center gap-1"><i class="fas fa-pen" style="font-size:10px"></i>'+(od?'Editar Datas':'Editar')+'</button><button onclick="cM2();dTK('+t.id+')" class="bd flex-1 flex items-center justify-center gap-1"><i class="fas fa-trash" style="font-size:10px"></i> Excluir</button></div>':'')+'</div>';m.style.display='flex'}

function cM2(){document.getElementById('mbd').style.display='none'}

/* ====== INIT ====== */
apTH(cTH);rL();
