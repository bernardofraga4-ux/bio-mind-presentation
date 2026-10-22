import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { 
  ArrowRight, Clock, ShieldCheck, Activity, Check, X, 
  Database, Workflow, Calculator, LayoutDashboard, CalendarDays, Calendar,
  Users, BotMessageSquare, MessageSquare, Search, MoreVertical, Banknote,
  Bell, FileText, Stethoscope, Briefcase, ChevronRight, ChevronLeft, PieChart,
  BarChart3, Upload, Filter, Plus, Phone, FileSignature, Receipt,
  CheckCircle2, Download, ExternalLink, FileSpreadsheet, Sparkles, Award, Star, Building2, HelpCircle, Bot, Share2, CheckCircle,
  SlidersHorizontal, Layers, Plug, Cloud, Grid, Infinity, List, Mail, Menu, Printer, RotateCcw, Settings, Sidebar, Table, User, Volume,
  Lock, Folder, PanelLeftClose
} from 'lucide-react';

// --- ANIMATION VARIANTS ---
const revealUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const scrollToSection = (e, id) => {
  e.preventDefault();
  const lenis = window.lenisInstance;
  if (lenis) {
    lenis.scrollTo(id, { duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), offset: -80 });
  }
};

// --- COMPONENTS ---

const HeroSection = () => {
  return (
    <section id="hero" className="relative bg-white min-h-[90vh] md:min-h-screen w-full flex flex-col justify-center items-center overflow-hidden z-0 pt-32 pb-20">
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center items-center text-center px-4 sm:px-6 relative z-20">
        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex flex-col space-y-6 md:space-y-8 items-center"
        >
          <motion.div variants={revealUp} className="inline-block px-4 py-1.5 md:px-5 md:py-2 mb-2 text-[10px] md:text-xs font-bold tracking-widest text-black uppercase bg-gray-100 rounded-full">
            A NOVA ERA DA GESTÃO CLÍNICA
          </motion.div>
          
          <motion.h1 variants={revealUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] text-black">
            Pare de operar. <br/>
            <span className="text-gray-300">Comece a orquestrar.</span>
          </motion.h1>
          
          <motion.p variants={revealUp} className="text-base sm:text-lg md:text-2xl text-gray-500 max-w-3xl mx-auto mt-6 font-light leading-relaxed">
            Elimine a digitação manual, o caos no WhatsApp e a desorganização financeira. A Bio Mind transforma horas de trabalho operacional em fluxos autônomos geridos por IA.
          </motion.p>
          
          <motion.div variants={revealUp} className="flex items-center gap-4 md:gap-6 pt-8 md:pt-10">
            <button onClick={(e) => scrollToSection(e, '#crm')} className="bg-black text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-medium hover:bg-neutral-800 hover:scale-105 transition-all shadow-xl shadow-black/10 flex items-center gap-3 group text-base md:text-lg">
              <span>Ver Sistema em Ação</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer hover:opacity-70 transition-opacity"
        onClick={(e) => scrollToSection(e, '#clinica')}
      >
        <span translate="no" className="notranslate text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">Descubra</span>
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ 
              y: [0, 15, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

const TheChaosSection = () => (
  <section id="clinica" className="w-full bg-[#f8f9fa] py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 border-y border-gray-200">
    <div className="max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
        className="mb-12 md:mb-20 max-w-4xl"
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-black mb-6 md:mb-8 leading-[1.1]">
          O caos sistêmico está sangrando a sua clínica.
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
          Clinicas tradicionais contratam 5 sistemas diferentes que não se comunicam. A secretária passa o dia copiando dados do WhatsApp para o Excel, do Excel para a Agenda, e da Agenda para o Financeiro.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {[
          { icon: Database, title: "Dados Fragmentados", desc: "Informações espalhadas em planilhas, cadernos e softwares arcaicos que travam." },
          { icon: Clock, title: "Fila de Espera Virtual", desc: "Pacientes esfriando no WhatsApp enquanto a recepção tenta dar conta do presencial." },
          { icon: Banknote, title: "Faturamento Cego", desc: "Glosas não contestadas, repasses médicos confusos e emissão manual de notas fiscais." }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: idx * 0.2 }} viewport={{ once: true }}
            className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-shadow"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
              <item.icon className="w-6 h-6 md:w-7 md:h-7 text-red-500" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{item.title}</h3>
            <p className="text-gray-500 leading-relaxed text-base md:text-lg">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorksSection = () => (
  <section className="w-full bg-white py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24">
    <div className="max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center mb-16 md:mb-24"
      >
        <div className="inline-block px-4 py-1.5 mb-3 text-[10px] md:text-xs font-bold tracking-widest text-black uppercase bg-gray-100 rounded-full">
          ARQUITETURA & BASTIDORES
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black mb-6">
          O verdadeiro poder de um Agente.
        </h2>
        <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
          Esqueça os horários comerciais e os custos de tarefas manuais repetitivas. Um Agente de Apoio atua silenciosamente nos bastidores da sua clínica — organizando planilhas, agilizando confirmações e permitindo que sua recepção foque no olho no olho com o paciente.
        </p>
      </motion.div>

      <div className="relative">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gray-200 -translate-y-1/2 z-0"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
          {[
            { 
              step: '01', 
              badge: 'INGESTÃO UNIFICADA',
              icon: FileSpreadsheet, 
              title: "Centralização Imediata", 
              desc: "Mensagens de pacientes, planilhas antigas e novos contatos são estruturados diretamente no prontuário. Zero digitação duplicada para a equipe de recepção." 
            },
            { 
              step: '02', 
              badge: 'REGRAS DE BASTIDORES',
              icon: SlidersHorizontal, 
              title: "Orquestração Clínica", 
              desc: "O Agente Nexus consulta agendas médicas, cruza regras de convênio e valida horários disponíveis de forma autônoma, sem interrupções nem ruídos na sala de espera." 
            },
            { 
              step: '03', 
              badge: 'AUDITORIA & LIQUIDAÇÃO',
              icon: Receipt, 
              title: "Repasses & Notas em 1 Clique", 
              desc: "Ao encerrar a consulta, o CRM calcula a comissão médica na hora, audita guias TISS contra glosas e transmite notas fiscais em lote com conformidade total." 
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: idx * 0.2 }} viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl flex flex-col items-center text-center relative group hover:border-gray-300 transition-all"
            >
              <div className="absolute -top-6 bg-black text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                Passo {item.step}
              </div>
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-4 mt-3 shadow-md group-hover:scale-105 transition-transform">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-600 mb-2">
                {item.badge}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const CustomizationSection = () => (
  <section className="w-full bg-[#0a0a0b] py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 text-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
      <div className="flex-1 space-y-6 md:space-y-8">
        <div className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-400/10 rounded-full">
          Feito sob medida
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
          Não é um sistema de prateleira.
        </h2>
        <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
          Entendemos que a sua clínica possui processos únicos, taxas de repasse específicas e regras de convênio próprias. O ecossistema Bio Mind não te obriga a mudar como você trabalha. Nós modelamos a arquitetura do CRM e da IA exatamente para as regras do seu negócio, entregando uma solução 100% personalizada.
        </p>
        <ul className="space-y-4 pt-4">
          {["Workflows customizados para sua recepção", "Regras de repasse médico dinâmicas", "Integração nativa com laboratórios e parceiros"].map((feature, idx) => (
            <li key={idx} className="flex items-center gap-4 text-gray-300">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 w-full">
        <div className="aspect-square md:aspect-[4/3] rounded-3xl bg-gradient-to-br from-gray-800 to-black border border-white/10 p-6 md:p-8 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
          
          <div className="bg-[#1a1b1e] w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 relative z-10">
             <div className="flex items-center gap-3 mb-6">
                <Settings className="w-5 h-5 text-gray-400 animate-spin-slow" />
                <span className="font-bold text-sm text-gray-300">Motor de Regras</span>
             </div>
             <div className="space-y-3">
               <div className="bg-black/50 border border-white/5 p-3 rounded-lg flex justify-between items-center">
                 <span className="text-xs text-gray-400 font-medium">Repasse Dr. João (Convênio)</span>
                 <span className="text-xs font-bold text-emerald-400">60% Líquido</span>
               </div>
               <div className="bg-black/50 border border-white/5 p-3 rounded-lg flex justify-between items-center">
                 <span className="text-xs text-gray-400 font-medium">Taxa Administrativa</span>
                 <span className="text-xs font-bold text-red-400">- R$ 15,00</span>
               </div>
               <div className="bg-black/50 border border-white/5 p-3 rounded-lg flex justify-between items-center">
                 <span className="text-xs text-gray-400 font-medium">Glosa Automática (Amil)</span>
                 <span className="text-xs font-bold text-blue-400">Auditoria IA Ativa</span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- CRM REPLICA COMPONENTS ---

// --- DADOS DOS CONTATOS / PACIENTES (SALESFORCE) ---
const mockContacts = [
  {
    id: 1,
    name: 'Mariana Alcantara',
    role: 'Dermatologia • Consulta Geral',
    score: 92,
    scoreColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    origin: 'WhatsApp',
    phone: '+55 11 98452-3310',
    email: 'mariana.alcantara@gmail.com',
    convenio: 'Bradesco Saúde (Top Nacional)',
    medico: 'Dr. Henrique Vasconcelos',
    sala: 'Consultório 02',
    horario: '14:30 (Hoje)',
    status: 'Confirmado via WhatsApp',
    stage: 'qualified',
    fields: [
      { id: 'f1', label: 'Elegibilidade do convênio confirmada', checked: true },
      { id: 'f2', label: 'Prontuário no OneDrive sincronizado', checked: true },
      { id: 'f3', label: 'Horário do Dr. Henrique reservado', checked: true },
      { id: 'f4', label: 'Repasse médico auditado (R$ 180,00)', checked: true }
    ],
    nextAction: 'Paciente já confirmou presença. Chamar silenciosamente para o Consultório 2 ao chegar.'
  },
  {
    id: 2,
    name: 'Carlos Eduardo Silva',
    role: 'Cardiologia • Retorno Exames',
    score: 88,
    scoreColor: 'bg-blue-100 text-blue-800 border-blue-200',
    origin: 'Formulário Site',
    phone: '+55 11 97120-4590',
    email: 'carlos.silva@corp.com.br',
    convenio: 'Unimed Pleno',
    medico: 'Dra. Beatriz Mendes',
    sala: 'Consultório 04',
    horario: '15:15 (Hoje)',
    status: 'Exames Anexados na Nuvem',
    stage: 'working',
    fields: [
      { id: 'f1', label: 'Elegibilidade do convênio confirmada', checked: true },
      { id: 'f2', label: 'Eletrocardiograma anexado na pasta', checked: true },
      { id: 'f3', label: 'Horário reservado com Dra. Beatriz', checked: true },
      { id: 'f4', label: 'Repasse médico auditado (R$ 160,00)', checked: false }
    ],
    nextAction: 'Revisar laudo do ECG recebido no OneDrive antes de liberar entrada na sala.'
  },
  {
    id: 3,
    name: 'Fernanda Lima',
    role: 'Ortopedia • Avaliação Inicial',
    score: 76,
    scoreColor: 'bg-purple-100 text-purple-800 border-purple-200',
    origin: 'Telefone / Recepção',
    phone: '+55 11 96340-8821',
    email: 'fernanda.lima@uol.com.br',
    convenio: 'Particular (PIX/Cartão)',
    medico: 'Dr. Roberto Faro',
    sala: 'Consultório 01',
    horario: '16:00 (Hoje)',
    status: 'Aguardando Pagamento',
    stage: 'lead',
    fields: [
      { id: 'f1', label: 'Ficha cadastral preenchida na recepção', checked: true },
      { id: 'f2', label: 'Pagamento particular confirmado', checked: false },
      { id: 'f3', label: 'Horário com Dr. Roberto alocado', checked: true },
      { id: 'f4', label: 'Emissão da NFS-e na prefeitura', checked: false }
    ],
    nextAction: 'Apresentar QR Code do PIX na recepção e emitir recibo automático com 1 clique.'
  },
  {
    id: 4,
    name: 'Roberto Mendes',
    role: 'Oftalmologia • Fundo de Olho',
    score: 65,
    scoreColor: 'bg-amber-100 text-amber-800 border-amber-200',
    origin: 'Indicação Médica',
    phone: '+55 11 99812-1144',
    email: 'roberto.mendes@adv.br',
    convenio: 'SulAmérica Especial',
    medico: 'Dr. Alexandre Rios',
    sala: 'Consultório 03',
    horario: '16:45 (Hoje)',
    status: 'Aguardando Dilatação',
    stage: 'converted',
    fields: [
      { id: 'f1', label: 'Guia de autorização SulAmérica emitida', checked: true },
      { id: 'f2', label: 'Termo de colírio assinado digitalmente', checked: true },
      { id: 'f3', label: 'Horário com Dr. Alexandre alocado', checked: true },
      { id: 'f4', label: 'Repasse médico liquidado', checked: true }
    ],
    nextAction: 'Encaminhar paciente para a sala de pré-exame com colírio aplicado.'
  }
];

// Ícone vetorial minimalista e nítido do Agente Nexus (substituindo o antigo mascot raster)
const NexusBotIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="3" y="6" width="18" height="14" rx="4" stroke="currentColor" strokeWidth="1.8" className="fill-emerald-500/10" />
    <circle cx="8.5" cy="12" r="1.5" className="fill-emerald-500" />
    <circle cx="15.5" cy="12" r="1.5" className="fill-emerald-500" />
    <path d="M10 16H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M12 2V6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="2" r="1.2" className="fill-emerald-400" />
    <path d="M2 13H3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M21 13H22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// Aba 2: Prontuários & OneDrive (inspirado na arquitetura Multi Saúde)
const CRMProntuariosOneDrive = ({ onShowToast }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const prontuariosList = [
    {
      id: 1,
      paciente: 'Maria Eduarda Silva',
      tipo: 'Evolução Diária • Ansiedade & Pânico',
      resumo: 'Paciente apresentou melhora clínica significativa no quadro de ansiedade após ajuste posológico. Sono regularizado, relata ausência de crises de taquicardia nesta semana.',
      profissional: 'Dra. Júlia Matos (Psiquiatria)',
      data: 'Hoje, 10:30',
      locked: true,
      oneDriveFile: 'Evolucao_MariaEduarda_2026.pdf'
    },
    {
      id: 2,
      paciente: 'Roberto Alves de Toledo',
      tipo: 'Avaliação Inicial • Ortopedia',
      resumo: 'Primeiro contato clínico. Queixa de dor articular crônica no joelho direito após esforço físico. Solicitada ressonância magnética e indicado repouso relativo.',
      profissional: 'Dr. Marcos Valente (Ortopedia)',
      data: 'Ontem, 15:00',
      locked: false,
      oneDriveFile: 'Ficha_RobertoAlves_Avaliacao.pdf'
    },
    {
      id: 3,
      paciente: 'Sofia Mendes Camargo',
      tipo: 'Encaminhamento Médico • Cardiologia',
      resumo: 'Paciente encaminhada para ecocardiograma com Doppler de controle. Teste ergométrico prévio evidenciou resposta pressórica adequada sem sinais isquêmicos.',
      profissional: 'Dra. Beatriz Albuquerque (Cardio)',
      data: '20 Out, 11:20',
      locked: true,
      oneDriveFile: 'Laudo_SofiaMendes_Cardio.pdf'
    },
    {
      id: 4,
      paciente: 'Carlos Eduardo da Silva',
      tipo: 'Retorno Clínico • Dermatologia',
      resumo: 'Lesão epidérmica em dorso com cicatrização completa pós-procedimento. Alta do tratamento tópico prescrito, orientado uso contínuo de fotoprotetor FPS 60.',
      profissional: 'Dra. Juliana Silveira (Dermato)',
      data: '19 Out, 14:15',
      locked: false,
      oneDriveFile: 'Prontuario_CarlosEduardo.pdf'
    }
  ];

  const filtered = prontuariosList.filter(p => 
    p.paciente.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.tipo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
      {/* Header com Busca & Nuvem OneDrive */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <h3 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight">
              Prontuários Eletrônicos & OneDrive
            </h3>
            <span className="text-[10px] bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded-md border border-blue-200">
              NUVEM ATIVA
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Backup automático em nuvem Microsoft OneDrive e controle de sigilo médico LGPD.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar prontuário ou paciente..."
              className="pl-9 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-black w-48 sm:w-64"
            />
          </div>
          <button 
            onClick={() => onShowToast('Editor de nova evolução médica aberto com template clínico!')}
            className="px-3 py-1.5 bg-black hover:bg-gray-800 text-white rounded-xl text-xs font-bold transition-all shadow-2xs flex items-center gap-1.5 shrink-0"
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Nova Evolução</span>
          </button>
        </div>
      </div>

      {/* Status da Sincronização em Nuvem (OneDrive) */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-950 p-4 sm:p-5 rounded-2xl text-white shadow-md flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
            <Cloud className="w-5 h-5 text-blue-300" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold">Microsoft OneDrive Corporativo Integrado</h4>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <p className="text-xs text-blue-200/80 mt-0.5">
              2.418 documentos médicos criptografados em nuvem com conformidade CFM & LGPD.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-lg">
            Sincronizado há 42s
          </span>
          <button 
            onClick={() => onShowToast('Varredura completa do OneDrive realizada: 0 pendências.')}
            className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
            title="Sincronizar Agora"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Grid de Pastas OneDrive & Timeline de Evoluções */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Pastas em Nuvem */}
        <div className="lg:col-span-4 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700">Pastas no OneDrive</h4>
          {[
            { name: '/Prontuarios_2026', count: '1.840 arquivos', icon: Folder, size: '4.2 GB' },
            { name: '/Laudos_Exames_PDF', count: '412 arquivos', icon: FileText, size: '1.8 GB' },
            { name: '/Guias_TISS_Xml', count: '166 arquivos', icon: Receipt, size: '240 MB' },
            { name: '/Termos_Consentimento', count: '98 arquivos', icon: FileSignature, size: '85 MB' }
          ].map((f, i) => (
            <div 
              key={i} 
              onClick={() => onShowToast(`Pasta ${f.name} aberta no OneDrive corporativo.`)}
              className="p-3 bg-white rounded-xl border border-gray-100 hover:border-gray-200 shadow-2xs hover:shadow-xs transition-all flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <f.icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-900 font-mono block leading-tight">{f.name}</span>
                  <span className="text-[10px] text-gray-400">{f.count}</span>
                </div>
              </div>
              <span className="text-[10px] text-gray-500 font-mono">{f.size}</span>
            </div>
          ))}
        </div>

        {/* Timeline de Prontuários */}
        <div className="lg:col-span-8 bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-2xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700">
              Evoluções Médicas Recentes (Timeline)
            </h4>
            <span className="text-[11px] text-gray-400">{filtered.length} registros</span>
          </div>

          <div className="space-y-3">
            {filtered.map((item) => (
              <div key={item.id} className="p-3.5 bg-gray-50/70 hover:bg-gray-100/70 rounded-xl border border-gray-200/70 transition-all space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <strong className="text-xs font-bold text-gray-900">{item.paciente}</strong>
                    {item.locked && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-rose-50 border border-rose-200 text-rose-700 text-[9px] font-bold uppercase tracking-wider rounded-md">
                        <Lock className="w-2.5 h-2.5" /> Sigilo CFM
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-mono text-gray-400">{item.data}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                    {item.tipo}
                  </span>
                  <span className="text-[10px] text-gray-500">• {item.profissional}</span>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed font-light">
                  {item.resumo}
                </p>

                <div className="pt-2 border-t border-gray-200/60 flex items-center justify-between text-[10px]">
                  <span className="text-blue-600 font-mono flex items-center gap-1 truncate max-w-[200px]">
                    <Cloud className="w-3 h-3 text-blue-500 shrink-0" /> {item.oneDriveFile}
                  </span>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => onShowToast(`Download do arquivo ${item.oneDriveFile} concluído!`)}
                      className="text-gray-600 hover:text-black font-bold flex items-center gap-1 hover:underline"
                    >
                      <Download className="w-3 h-3" /> Baixar
                    </button>
                    <button 
                      onClick={() => onShowToast(`Prontuário de ${item.paciente} enviado para impressão térmica!`)}
                      className="text-gray-600 hover:text-black font-bold flex items-center gap-1 hover:underline"
                    >
                      <Printer className="w-3 h-3" /> Imprimir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Aba 3: Operações Médicas, Salas & Repasses (Multi Saúde)
const CRMOperacoesMedicas = ({ onShowToast }) => {
  const medicos = [
    {
      nome: 'Dr. Gabriel Arantes',
      especialidade: 'Ortopedia & Traumatologia',
      crm: 'CRM/SP 142.890',
      sala: 'Consultório 03',
      status: 'Em Atendimento',
      pacienteAtual: 'Carlos Eduardo Silva',
      atendidos: 8,
      repasse: '70%',
      faturamento: 'R$ 2.450,00',
      statusBadge: 'bg-amber-100 text-amber-800 border-amber-200',
      dotColor: 'bg-amber-500'
    },
    {
      nome: 'Dra. Juliana Silveira',
      especialidade: 'Dermatologia Clínica & Cirúrgica',
      crm: 'CRM/SP 168.420',
      sala: 'Consultório 01',
      status: 'Agenda Livre',
      pacienteAtual: 'Próximo: 15:30 (Mariana A.)',
      atendidos: 6,
      repasse: '75%',
      faturamento: 'R$ 2.520,00',
      statusBadge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      dotColor: 'bg-emerald-500'
    },
    {
      nome: 'Dr. Julio Ramos Samos',
      especialidade: 'Neurologia Clínica & Neurofisiologia',
      crm: 'CRM/SP 115.304',
      sala: 'Consultório 02',
      status: 'Em Atendimento',
      pacienteAtual: 'Roberto Mendes',
      atendidos: 7,
      repasse: '70%',
      faturamento: 'R$ 2.800,00',
      statusBadge: 'bg-amber-100 text-amber-800 border-amber-200',
      dotColor: 'bg-amber-500'
    },
    {
      nome: 'Dra. Camila Meirelles',
      especialidade: 'Psicologia Clínica & TCC',
      crm: 'CRP 06/138.992',
      sala: 'Consultório 04',
      status: 'Em Atendimento',
      pacienteAtual: 'Fernanda Lima',
      atendidos: 9,
      repasse: '80%',
      faturamento: 'R$ 1.980,00',
      statusBadge: 'bg-amber-100 text-amber-800 border-amber-200',
      dotColor: 'bg-amber-500'
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <h3 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight">
              Operações Clínicas, Salas & Repasses
            </h3>
            <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-md border border-emerald-200">
              4 SALAS ATIVAS
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Status dos consultórios médicos em tempo real, conciliação TISS e comissões automáticas.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => onShowToast('Escala médica do dia sincronizada com a recepção.')}
            className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-xs font-bold transition-colors"
          >
            Atualizar Escala
          </button>
          <button 
            onClick={() => onShowToast('Relatório de repasses médicos gerado em PDF.')}
            className="px-3 py-1.5 bg-black hover:bg-gray-800 text-white rounded-xl text-xs font-bold transition-all shadow-2xs flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Fechar Caixa</span>
          </button>
        </div>
      </div>

      {/* Cards de Métricas Operacionais */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-gray-100 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Ocupação Hoje</span>
          <p className="text-xl sm:text-2xl font-black text-gray-900 mt-1">79% <span className="text-xs font-bold text-emerald-600">Alta</span></p>
          <span className="text-[10px] text-gray-400">Capacidade: 24 atend/dia</span>
        </div>
        <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-gray-100 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Glosas Convênio</span>
          <p className="text-xl sm:text-2xl font-black text-emerald-600 mt-1">0% <span className="text-xs font-bold text-gray-500">Zero</span></p>
          <span className="text-[10px] text-gray-400">Auditoria TISS ativa</span>
        </div>
        <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-gray-100 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Repasses Pagos</span>
          <p className="text-xl sm:text-2xl font-black text-gray-900 mt-1">R$ 9.750<span className="text-xs font-bold text-gray-400">,00</span></p>
          <span className="text-[10px] text-gray-400">4 especialistas</span>
        </div>
        <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-gray-100 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">NFS-e Emitidas</span>
          <p className="text-xl sm:text-2xl font-black text-blue-600 mt-1">100% <span className="text-xs font-bold text-gray-500">Lote</span></p>
          <span className="text-[10px] text-gray-400">Prefeitura SP Integrada</span>
        </div>
      </div>

      {/* Grid dos Médicos & Consultórios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {medicos.map((m, i) => (
          <div key={i} className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-2xs space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono text-gray-400">{m.crm} • {m.sala}</span>
                <h4 className="text-sm font-bold text-gray-900 mt-0.5">{m.nome}</h4>
                <p className="text-xs text-gray-500">{m.especialidade}</p>
              </div>
              <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full border flex items-center gap-1.5 ${m.statusBadge}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${m.dotColor}`}></span>
                {m.status}
              </span>
            </div>

            <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-100 text-xs flex items-center justify-between">
              <div>
                <span className="text-[10px] text-gray-400 block">Status de Atendimento:</span>
                <strong className="text-gray-800 text-[11px]">{m.pacienteAtual}</strong>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-gray-400 block">Atendidos Hoje:</span>
                <strong className="text-emerald-700 text-[11px]">{m.atendidos} pacientes</strong>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
              <div>
                <span className="text-[10px] text-gray-400 block">Repasse Contratual:</span>
                <strong className="text-gray-900">{m.repasse}</strong>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-gray-400 block">Faturamento Hoje:</span>
                <strong className="text-gray-900 font-mono font-bold">{m.faturamento}</strong>
              </div>
              <button 
                onClick={() => onShowToast(`Extrato detalhado de repasse de ${m.nome} baixado em Excel.`)}
                className="px-2.5 py-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-[11px] font-bold rounded-lg transition-colors"
              >
                Extrato
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const CRMDashboard = ({ onShowToast, isStarred, setIsStarred }) => {
  const [selectedContact, setSelectedContact] = useState(mockContacts[0]);
  const [fields, setFields] = useState(mockContacts[0].fields);

  const handleSelectContact = (c) => {
    setSelectedContact(c);
    setFields(c.fields);
  };

  const toggleField = (id) => {
    setFields(prev => prev.map(f => f.id === id ? { ...f, checked: !f.checked } : f));
  };

  return (
    <div className="space-y-6">
      {/* Top Header da Dashboard Salesforce */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <h3 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight">
              Engajamento & Gestão Clínica
            </h3>
            <span className="text-[10px] bg-gray-100 text-gray-600 font-bold px-2 py-0.5 rounded-md">
              PAINEL SALESFORCE / PANACEA
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Fluxo operacional unificado: triagem, agenda médica, repasses e conexão com planilhas.
          </p>
        </div>

        {/* Action Pill Top-Right (Salesforce style com funções reais) */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto bg-gray-50 border border-gray-200 p-1 rounded-xl">
          <button 
            onClick={() => {
              setIsStarred(!isStarred);
              onShowToast(isStarred ? 'Clínica desmarcada dos favoritos.' : '⭐ Clínica favoritada na sua barra de acesso rápido!');
            }}
            className={`p-1.5 rounded-lg transition-colors ${
              isStarred ? 'bg-amber-100 text-amber-600' : 'hover:bg-white text-gray-500 hover:text-gray-900'
            }`} 
            title={isStarred ? "Favoritado" : "Favoritar"}
          >
            <Star className={`w-4 h-4 ${isStarred ? 'fill-amber-400 text-amber-500' : ''}`} />
          </button>
          <button 
            onClick={() => onShowToast('Link seguro do prontuário copiado para a área de transferência!')}
            className="p-1.5 hover:bg-white rounded-lg text-gray-500 hover:text-gray-900 transition-colors" 
            title="Compartilhar Link"
          >
            <Share2 className="w-4 h-4" />
          </button>
          <button 
            onClick={() => onShowToast('Gerando prontuário e relatório de atendimento em PDF...')}
            className="p-1.5 hover:bg-white rounded-lg text-gray-500 hover:text-gray-900 transition-colors" 
            title="Exportar PDF"
          >
            <Download className="w-4 h-4" />
          </button>
          <button 
            onClick={() => onShowToast('Painel de configurações: backup OneDrive ativo e WhatsApp conectado.')}
            className="p-1.5 hover:bg-white rounded-lg text-gray-500 hover:text-gray-900 transition-colors" 
            title="Configurações"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Régua / Esteira de Atendimento (Salesforce Pipeline Bar) */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-2xs">
        <div className="flex items-center justify-between text-xs font-bold text-gray-600 mb-2">
          <span>Esteira de Atendimento em Tempo Real</span>
          <span className="text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full text-[10px]">
            Etapa Atual: {selectedContact.status}
          </span>
        </div>

        {/* Segmented Rainbow Progress Bar */}
        <div className="grid grid-cols-4 gap-1.5 bg-gray-100 p-1 rounded-xl">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 text-white text-[10px] font-bold py-1.5 px-2 rounded-lg text-center flex items-center justify-center gap-1 shadow-2xs">
            <Check className="w-3 h-3" />
            <span className="truncate">1. Contato</span>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-[10px] font-bold py-1.5 px-2 rounded-lg text-center flex items-center justify-center gap-1 shadow-2xs">
            <Check className="w-3 h-3" />
            <span className="truncate">2. Triagem IA</span>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-[10px] font-bold py-1.5 px-2 rounded-lg text-center flex items-center justify-center gap-1 shadow-2xs">
            <Check className="w-3 h-3" />
            <span className="truncate">3. Confirmado</span>
          </div>
          <div className="bg-gray-200 text-gray-600 text-[10px] font-bold py-1.5 px-2 rounded-lg text-center flex items-center justify-center gap-1">
            <span className="truncate">4. Concluído</span>
          </div>
        </div>
      </div>

      {/* Grid Central de 3 Colunas (Salesforce Dashboard Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Coluna 1: Fila de Atendimento (Work Queue) */}
        <div className="lg:col-span-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gray-500" />
                <span className="font-bold text-xs uppercase tracking-wider text-gray-700">Fila da Recepção</span>
              </div>
              <span className="text-[10px] font-bold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                4 Prioritários
              </span>
            </div>

            <div className="space-y-2">
              {mockContacts.map((c) => {
                const isSelected = selectedContact.id === c.id;
                return (
                  <div
                    key={c.id}
                    onClick={() => handleSelectContact(c)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                      isSelected 
                        ? 'border-gray-900 bg-gray-50/80 shadow-2xs' 
                        : 'border-gray-100 hover:border-gray-200 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-gray-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        {c.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-gray-900 leading-tight">{c.name}</h4>
                        <p className="text-[10px] text-gray-500 truncate max-w-[140px]">{c.role}</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-md border ${c.scoreColor}`}>
                        {c.score}
                      </span>
                      <span className="text-[9px] text-gray-400">{c.origin}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-500 flex items-center justify-between">
            <span>Sincronizado via OneDrive</span>
            <span className="text-emerald-700 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Online
            </span>
          </div>
        </div>

        {/* Coluna 2: Informações do Paciente Selecionado & Checklist */}
        <div className="lg:col-span-5 bg-white p-4 rounded-2xl border border-gray-100 shadow-2xs space-y-4">
          <div className="flex items-start justify-between pb-3 border-b border-gray-100">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                Ficha Rápida do Paciente
              </span>
              <h3 className="text-base font-black text-gray-900 mt-1">{selectedContact.name}</h3>
              <p className="text-xs text-gray-500">{selectedContact.role}</p>
            </div>
            <button className="px-3 py-1.5 bg-black text-white rounded-lg text-xs font-bold hover:bg-neutral-800 transition-colors shadow-2xs flex items-center gap-1.5">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Chamar</span>
            </button>
          </div>

          {/* Dados Rápidos */}
          <div className="grid grid-cols-2 gap-2 text-xs bg-gray-50 p-3 rounded-xl border border-gray-100">
            <div>
              <span className="text-[10px] text-gray-400 block font-medium">Convênio / Pagamento:</span>
              <strong className="text-gray-800 text-[11px]">{selectedContact.convenio}</strong>
            </div>
            <div>
              <span className="text-[10px] text-gray-400 block font-medium">Médico / Sala:</span>
              <strong className="text-gray-800 text-[11px]">{selectedContact.medico} ({selectedContact.sala})</strong>
            </div>
            <div className="mt-2">
              <span className="text-[10px] text-gray-400 block font-medium">WhatsApp:</span>
              <strong className="text-gray-800 text-[11px]">{selectedContact.phone}</strong>
            </div>
            <div className="mt-2">
              <span className="text-[10px] text-gray-400 block font-medium">Horário Marcado:</span>
              <strong className="text-emerald-700 text-[11px]">{selectedContact.horario}</strong>
            </div>
          </div>

          {/* Checklist Campos Chave (Key Fields Salesforce) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              Campos Chave da Recepção (Checklist)
            </h4>
            <div className="space-y-1.5">
              {fields.map((f) => (
                <div 
                  key={f.id}
                  onClick={() => toggleField(f.id)}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors border border-transparent hover:border-gray-200"
                >
                  <div className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors ${
                    f.checked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-gray-300 bg-white'
                  }`}>
                    {f.checked && <Check className="w-3 h-3" />}
                  </div>
                  <span className={`text-xs ${f.checked ? 'text-gray-800 font-semibold' : 'text-gray-500'}`}>
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coluna 3: AI Scoring Gauge (Salesforce) & Diretrizes */}
        <div className="lg:col-span-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-2xs flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-gray-100 mb-3">
              <span className="font-bold text-xs uppercase tracking-wider text-gray-700">AI Scoring</span>
              <Sparkles className="w-4 h-4 text-amber-500" />
            </div>

            {/* Circular Gauge Salesforce Rainbow */}
            <div className="flex flex-col items-center justify-center my-2">
              <div 
                className="w-24 h-24 rounded-full flex items-center justify-center p-2 shadow-inner"
                style={{
                  background: 'conic-gradient(#10b981 0% 35%, #06b6d4 35% 65%, #8b5cf6 65% 85%, #f59e0b 85% 100%)'
                }}
              >
                <div className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center shadow-xs">
                  <span className="text-2xl font-black text-gray-900 leading-none">{selectedContact.score}</span>
                  <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">SCORE IA</span>
                </div>
              </div>
              <span className="text-[11px] font-bold text-gray-700 mt-2">Pontualidade & Eficiência</span>
            </div>

            {/* Top Positivos */}
            <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100 space-y-1.5 text-[11px]">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Top Indicadores:</span>
              <p className="text-gray-700 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Confirmação em 12s
              </p>
              <p className="text-gray-700 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 0 glosas no convênio
              </p>
              <p className="text-gray-700 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> OneDrive sincronizado
              </p>
            </div>
          </div>

          {/* Diretrizes para Sucesso */}
          <div className="bg-emerald-50/60 border border-emerald-100 p-3 rounded-xl space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
              Próxima Ação da Recepção:
            </span>
            <p className="text-xs text-emerald-900 leading-snug">
              {selectedContact.nextAction}
            </p>
          </div>
        </div>
      </div>

      {/* Seção Inferior: Appointment Overview & Calendário (Panacea style) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-2">
        {/* Tabela de Consultas do Dia */}
        <div className="lg:col-span-8 bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-2xs">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
            <div>
              <h4 className="text-sm font-bold text-gray-900">Visão Geral de Agendamentos (Hoje)</h4>
              <p className="text-xs text-gray-500">98 agendados • 87 atendidos • 8 na recepção • 3 desmarcados</p>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
              Taxa de Comparecimento: 97%
            </span>
          </div>

          <div className="space-y-2.5">
            {[
              { time: '08:00', patient: 'Lucas Antunes', spec: 'Clínica Geral', doctor: 'Dr. Henrique', status: 'Concluído', color: 'bg-gray-100 text-gray-700' },
              { time: '09:30', patient: 'Mariana Alcantara', spec: 'Dermatologia', doctor: 'Dr. Henrique', status: 'Em Atendimento', color: 'bg-emerald-100 text-emerald-800' },
              { time: '11:00', patient: 'Carlos Eduardo', spec: 'Cardiologia', doctor: 'Dra. Beatriz', status: 'Aguardando Sala', color: 'bg-blue-100 text-blue-800' },
              { time: '14:00', patient: 'Fernanda Lima', spec: 'Ortopedia', doctor: 'Dr. Roberto', status: 'Confirmado WhatsApp', color: 'bg-purple-100 text-purple-800' },
              { time: '15:30', patient: 'Roberto Mendes', spec: 'Oftalmologia', doctor: 'Dr. Alexandre', status: 'Confirmado WhatsApp', color: 'bg-purple-100 text-purple-800' }
            ].map((row, idx) => (
              <div key={idx} className="flex items-center justify-between p-2.5 sm:p-3 bg-gray-50/70 hover:bg-gray-100/70 rounded-xl transition-colors border border-gray-100 text-xs">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-gray-900 w-12">{row.time}</span>
                  <div>
                    <strong className="text-gray-900 block">{row.patient}</strong>
                    <span className="text-gray-500 text-[11px]">{row.spec} • {row.doctor}</span>
                  </div>
                </div>
                <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${row.color}`}>
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mini Calendário e Estatísticas Rápidas (Panacea style) */}
        <div className="lg:col-span-4 bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
              <span className="font-bold text-xs uppercase tracking-wider text-gray-700">Calendário de Consultórios</span>
              <Calendar className="w-4 h-4 text-gray-400" />
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-xs mb-3 font-semibold text-gray-400">
              <span>SEG</span><span>TER</span><span>QUA</span><span>QUI</span><span>SEX</span><span>SÁB</span><span>DOM</span>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs">
              {[19, 20, 21, 22, 23, 24, 25].map((d, i) => (
                <div 
                  key={i} 
                  className={`py-2 rounded-lg font-bold transition-all ${
                    d === 22 
                      ? 'bg-black text-white shadow-2xs' 
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {d}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 mt-4 space-y-1.5 text-xs">
            <div className="flex justify-between text-gray-600">
              <span>Capacidade Total:</span>
              <strong className="text-gray-900">8 Salas Ativas</strong>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tempo Médio Recepção:</span>
              <strong className="text-emerald-700 font-bold">1 min 40s</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CRMAgenda = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4 md:space-y-6 h-full flex flex-col">
    <div className="flex flex-col sm:flex-row justify-between sm:items-center bg-white p-3 md:p-4 rounded-2xl border border-gray-100 shadow-sm gap-3">
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <div className="relative flex-1 sm:flex-none">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input type="text" placeholder="Buscar..." className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs md:text-sm focus:outline-none focus:border-black" />
        </div>
        <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs md:text-sm font-medium text-gray-700 outline-none w-full sm:w-auto">
          <option>Todos os Médicos</option>
          <option>Dr. Gabriel Magri</option>
        </select>
      </div>
      <div className="flex gap-2 w-full sm:w-auto justify-end">
        <button className="px-3 md:px-4 py-2 bg-gray-100 hover:bg-gray-200 text-xs md:text-sm font-medium rounded-lg transition-colors">Hoje</button>
        <button className="px-3 md:px-4 py-2 bg-black text-white text-xs md:text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-1.5 md:gap-2">
          <Plus className="w-3 h-3 md:w-4 md:h-4"/> Novo
        </button>
      </div>
    </div>
    
    <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-1 md:p-2 overflow-y-auto">
      <div className="space-y-1.5 md:space-y-2">
        {[
          { time: '08:00', name: 'Emily Martins', doctor: 'Dr. Gabriel', status: 'AGENDADO', color: 'bg-emerald-100 text-emerald-700 border-emerald-200', tag: 'Partic.' },
          { time: '09:00', name: 'Davi Lucca', doctor: 'Dra. Juliana', status: 'FINALIZADO', color: 'bg-gray-100 text-gray-700 border-gray-200', tag: 'Amil' },
          { time: '09:30', name: 'Carlos Santos', doctor: 'Dr. Gabriel', status: 'EM ESPERA', color: 'bg-orange-100 text-orange-700 border-orange-200', tag: 'Partic.' },
          { time: '10:30', name: 'Debora Leite', doctor: 'Dr. Gabriel', status: 'CANCELOU', color: 'bg-red-100 text-red-700 border-red-200', tag: 'Retorno' }
        ].map((apt, i) => (
          <div key={i} className="flex gap-2 md:gap-4 items-center p-3 md:p-4 rounded-xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100 cursor-pointer group">
            <span className="font-bold text-gray-400 w-10 md:w-12 text-right text-xs md:text-base">{apt.time}</span>
            <div className={`w-1 h-8 md:h-12 rounded-full flex-shrink-0 ${apt.status === 'AGENDADO' ? 'bg-emerald-400' : apt.status === 'CANCELOU' ? 'bg-red-400' : 'bg-gray-300'}`}></div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-gray-900 text-sm md:text-lg truncate">{apt.name}</h4>
              <p className="text-[10px] md:text-xs text-gray-500 font-medium flex items-center gap-1 md:gap-2 truncate">
                <Stethoscope className="w-2 h-2 md:w-3 md:h-3 flex-shrink-0"/> <span className="truncate">{apt.doctor}</span> <span className="text-gray-300 flex-shrink-0">•</span> <span className="truncate">{apt.tag}</span>
              </p>
            </div>
            <div className={`hidden sm:block px-2 py-1 md:px-3 md:py-1.5 text-[10px] md:text-xs font-bold rounded-full border ${apt.color} w-20 md:w-28 text-center md:ml-4`}>
              {apt.status}
            </div>
            <MoreVertical className="w-4 h-4 md:w-5 md:h-5 text-gray-400 ml-1 md:ml-2 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const CRMPacientes = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {[
        { title: 'Cadastrados', val: '3.782' },
        { title: 'Partic. / Conv.', val: '1.401 / 2.228' },
        { title: 'Pendências', val: '3.698' }
      ].map((k, i) => (
        <div key={i} className="bg-white p-3 md:p-5 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase truncate">{k.title}</p>
          <p className="text-lg md:text-2xl font-black text-gray-800 mt-1">{k.val}</p>
        </div>
      ))}
    </div>
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden flex flex-col">
      <div className="p-3 md:p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between sm:items-center bg-gray-50 gap-3">
        <div className="flex gap-4 md:gap-6 text-xs md:text-sm font-medium overflow-x-auto pb-1">
          <span className="text-black border-b-2 border-black pb-2 whitespace-nowrap">Todos os Pacientes</span>
          <span className="text-gray-500 hover:text-black cursor-pointer pb-2 whitespace-nowrap">Particulares</span>
          <span className="text-gray-500 hover:text-black cursor-pointer pb-2 whitespace-nowrap">Convênios</span>
        </div>
        <button className="px-3 md:px-4 py-1.5 md:py-2 bg-black text-white text-xs md:text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors w-full sm:w-auto">
          + Cadastrar
        </button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left border-collapse min-w-[500px]">
          <thead>
            <tr className="bg-white border-b border-gray-100 text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider">
              <th className="p-3 md:p-4">Paciente & Contato</th>
              <th className="p-3 md:p-4">Identificação</th>
              <th className="p-3 md:p-4">Preenchimento</th>
              <th className="p-3 md:p-4 text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {[
              { n: 'Ana Clara Souza', t: '(11) 98888-7777', cpf: '123.456.789-00', origin: 'IA Nexus', color: 'bg-emerald-100 text-emerald-700' },
              { n: 'Roberto Almeida', t: '(11) 99999-6666', cpf: '098.765.432-11', origin: 'Recepção', color: 'bg-gray-100 text-gray-700' },
              { n: 'Fernanda Lima', t: '(11) 97777-5555', cpf: '111.222.333-44', origin: 'IA Nexus', color: 'bg-emerald-100 text-emerald-700' }
            ].map((p, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="p-3 md:p-4">
                  <p className="font-bold text-gray-900 text-xs md:text-sm">{p.n}</p>
                  <p className="text-[10px] md:text-xs text-gray-500">{p.t}</p>
                </td>
                <td className="p-3 md:p-4 text-xs md:text-sm text-gray-700">{p.cpf}</td>
                <td className="p-3 md:p-4">
                  <div className="flex items-center gap-2">
                    <div className={`flex items-center justify-center w-5 h-5 rounded-md ${p.color} shrink-0`}>
                      {p.origin === 'IA Nexus' ? <BotMessageSquare className="w-3 h-3"/> : <User className="w-3 h-3"/>}
                    </div>
                    <span className="text-[10px] md:text-xs font-bold text-gray-700">{p.origin}</span>
                  </div>
                </td>
                <td className="p-3 md:p-4">
                  <div className="flex items-center justify-end gap-3">
                    <button className="text-blue-600 text-[10px] md:text-sm font-bold hover:underline">Ver Ficha</button>
                    <button className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors" title="Imprimir Ficha">
                      <Printer className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </motion.div>
);

const CRMFaturamento = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
      <div className="p-4 md:p-6 border border-gray-100 rounded-2xl bg-black text-white shadow-lg">
        <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">Receita Bruta (Mês)</span>
        <h3 className="text-3xl md:text-4xl font-black mt-2">R$ 84.500<span className="text-lg md:text-xl text-gray-400">,00</span></h3>
      </div>
      <div className="p-4 md:p-6 border border-gray-100 rounded-2xl bg-white shadow-sm">
        <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">Repasses Pendentes</span>
        <h3 className="text-3xl md:text-4xl font-black mt-2 text-red-500">R$ 12.350<span className="text-lg md:text-xl text-red-300">,00</span></h3>
      </div>
      <div className="p-4 md:p-6 border border-gray-100 rounded-2xl bg-white shadow-sm flex flex-col justify-between">
        <div>
          <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">Repasses Pagos</span>
          <h3 className="text-2xl md:text-3xl font-black mt-2 text-emerald-500">R$ 41.200,00</h3>
        </div>
      </div>
    </div>
    
    <div className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm">
      <div className="px-4 md:px-6 py-3 md:py-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
        <span className="text-xs md:text-sm font-bold text-gray-800">Caixa Diário - Entradas</span>
        <button className="px-2 md:px-3 py-1 md:py-1.5 bg-black text-white rounded-lg text-[10px] md:text-xs font-bold hover:bg-gray-800">+ Manual</button>
      </div>
      <div className="p-0 overflow-x-auto w-full">
        <div className="min-w-[400px]">
          {[
            { doc: 'Dr. Gabriel Magri', desc: 'Consulta Particular - Hoje, 14:00', val: '250,00', type: 'PIX' },
            { doc: 'Dra. Juliana Silva', desc: 'Exame Rotina - Hoje, 15:30', val: '450,00', type: 'Cartão C.' },
            { doc: 'Dr. Gabriel Magri', desc: 'Retorno (Taxa Equip) - Hoje, 16:00', val: '80,00', type: 'Dinheiro' }
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center p-3 md:p-4 px-4 md:px-6 border-b border-gray-50 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 rotate-45" />
                </div>
                <div>
                  <p className="font-bold text-xs md:text-sm text-gray-900">{item.doc}</p>
                  <p className="text-[10px] md:text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-black text-sm md:text-lg text-gray-900">R$ {item.val}</p>
                <p className="text-[8px] md:text-[10px] uppercase font-bold text-gray-400 bg-gray-100 inline-block px-1.5 md:px-2 py-0.5 rounded-sm mt-1">{item.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const CRMComunicacao = () => {
  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-2xs">
        <div>
          <h3 className="text-lg font-black text-gray-900">Central de Comunicação & Automações</h3>
          <p className="text-xs text-gray-500">
            Mensagens programadas, confirmações de presença e simulador em tempo real.
          </p>
        </div>
        <span className="px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full border border-emerald-200">
          ● 4 Automações Ativas
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Coluna 1: Painel de Automações & Mensagens Programadas */}
        <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-gray-100 shadow-2xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <h4 className="font-bold text-xs uppercase tracking-wider text-gray-700">Automações Clínicas Programadas</h4>
            <span className="text-[11px] text-gray-400">Ativado via n8n</span>
          </div>

          <div className="space-y-3">
            {[
              {
                title: "Confirmação D-1 (24h de antecedência)",
                desc: "Envia o lembrete com nome do especialista, endereço e botão de confirmação.",
                stat: "98,4% presença",
                active: true
              },
              {
                title: "Lembrete D-0 (2 horas antes da consulta)",
                desc: "Alerta com rota Google Maps para evitar atrasos e esquecimentos no trânsito.",
                stat: "0 atrasos hoje",
                active: true
              },
              {
                title: "Orientações Pós-Procedimento & Receita",
                desc: "Disparo automático dos cuidados pós-consulta e link do documento digital.",
                stat: "Instantâneo",
                active: true
              },
              {
                title: "Reativação Preventiva (Retorno 6 Meses)",
                desc: "Convite personalizado para exames periódicos e check-ups preventivos.",
                stat: "+34% retornos",
                active: true
              }
            ].map((item, idx) => (
              <div key={idx} className="p-3.5 bg-gray-50 rounded-xl border border-gray-200/70 hover:border-gray-300 transition-all">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <h5 className="font-bold text-xs text-gray-900">{item.title}</h5>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-black rounded-md shrink-0">
                    {item.stat}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coluna 2: Simulador do WhatsApp da Clínica */}
        <div className="lg:col-span-5 bg-white p-4 rounded-2xl border border-gray-100 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100 mb-3 bg-[#075E54] text-white p-3 rounded-xl -m-1">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                🏥
              </div>
              <div>
                <h5 className="font-bold text-xs text-white leading-tight">Clínica Bio Mind • Recepção</h5>
                <span className="text-[10px] text-emerald-200">Online • Agente Nexus + Equipe</span>
              </div>
            </div>

            {/* Balões de conversa WhatsApp */}
            <div className="space-y-2.5 text-xs p-2 bg-[#ECE5DD]/60 rounded-xl border border-gray-200 min-h-[220px]">
              <div className="bg-white p-2.5 rounded-xl rounded-tl-xs shadow-2xs max-w-[85%] text-gray-800">
                <p>Olá, Mariana! Tudo bem? Passando para confirmar sua consulta com o <strong>Dr. Henrique Vasconcelos</strong> amanhã às <strong>14:30</strong>.</p>
                <span className="text-[9px] text-gray-400 block text-right mt-1">10:00 • Nexus IA</span>
              </div>

              <div className="bg-[#DCF8C6] p-2.5 rounded-xl rounded-tr-xs shadow-2xs max-w-[80%] ml-auto text-gray-800">
                <p>Confirmadíssimo! Preciso levar algum exame anterior?</p>
                <span className="text-[9px] text-gray-500 block text-right mt-1">10:02 • Mariana</span>
              </div>

              <div className="bg-white p-2.5 rounded-xl rounded-tl-xs shadow-2xs max-w-[85%] text-gray-800">
                <p>Se tiver exames dos últimos 6 meses pode trazer sim! Qualquer dúvida estou aqui ou posso chamar nossa recepcionista agora mesmo. 😊</p>
                <span className="text-[9px] text-gray-400 block text-right mt-1">10:03 • Nexus IA</span>
              </div>
            </div>
          </div>

          <div className="mt-3 p-2.5 bg-gray-50 rounded-xl text-[11px] text-gray-500 border border-gray-100 flex items-center justify-between">
            <span>Transição Humana Imediata</span>
            <span className="text-emerald-700 font-bold">100% sem atrito</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CRMConexoes = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4 md:space-y-6">
    {/* Banner Filosofia Bio Mind */}
    <div className="bg-gradient-to-r from-gray-900 to-black text-white p-4 sm:p-5 rounded-2xl border border-gray-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
          <img src="/agente-mascote-icon-white.png" alt="Nexus" className="w-6 h-6 object-contain" />
        </div>
        <div>
          <h4 className="font-bold text-sm sm:text-base text-white">Integração Total Sob Medida</h4>
          <p className="text-xs text-gray-300 mt-0.5 leading-relaxed max-w-2xl">
            O carinho e a atenção humana na recepção são <strong>insubstituíveis</strong>. O CRM Bio Mind conecta tudo o que sua clínica usa em uma única plataforma — agindo nos bastidores para que sua equipe foque 100% no acolhimento do paciente.
          </p>
        </div>
      </div>
      <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 rounded-full text-[10px] font-bold tracking-wider uppercase shrink-0">
        6 Conexões Ativas
      </span>
    </div>

    {/* Grid de Conexões Inteligentes */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
      {/* 1. Comunicação Interna Médico ↔ Recepção */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center border border-purple-100">
            <Workflow className="w-5 h-5 text-purple-600" />
          </div>
          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-md text-[10px] font-bold">TEMPO REAL</span>
        </div>
        <div className="my-3">
          <h3 className="font-bold text-gray-900 text-sm sm:text-base">Médicos ↔ Recepção</h3>
          <p className="text-xs text-gray-500 mt-1">Chamada silenciosa de pacientes, status de consultório e avisos sem interfone</p>
        </div>
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[10px]">
          <span className="text-gray-400">9 consultórios interligados</span>
          <span className="text-emerald-600 font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 0 ruído
          </span>
        </div>
      </div>

      {/* 2. Planilhas & Nuvem (OneDrive / Excel) */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100">
            <Cloud className="w-5 h-5 text-blue-500" />
          </div>
          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-md text-[10px] font-bold">SINCRONIZADO</span>
        </div>
        <div className="my-3">
          <h3 className="font-bold text-gray-900 text-sm sm:text-base">Planilhas & OneDrive</h3>
          <p className="text-xs text-gray-500 mt-1">Unificação de tabelas antigas e laudos em nuvem em banco estruturado</p>
        </div>
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[10px]">
          <span className="text-gray-400">Excel / Google Sheets</span>
          <span className="text-emerald-600 font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Atualizado há 1m
          </span>
        </div>
      </div>

      {/* 3. Cálculo de Repasses & TISS / Convênios */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100">
            <Calculator className="w-5 h-5 text-emerald-600" />
          </div>
          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-md text-[10px] font-bold">100% AUTOMÁTICO</span>
        </div>
        <div className="my-3">
          <h3 className="font-bold text-gray-900 text-sm sm:text-base">Repasses & Guias TISS</h3>
          <p className="text-xs text-gray-500 mt-1">Cálculo de comissões médicas e pré-auditoria de glosas sem conciliação manual</p>
        </div>
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[10px]">
          <span className="text-gray-400">8 convênios auditados</span>
          <span className="text-emerald-600 font-semibold">0.5% glosa</span>
        </div>
      </div>

      {/* 4. Emissão Fiscal NFS-e Prefeitura */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center border border-amber-100">
            <Receipt className="w-5 h-5 text-amber-600" />
          </div>
          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-md text-[10px] font-bold">HOMOLOGADO</span>
        </div>
        <div className="my-3">
          <h3 className="font-bold text-gray-900 text-sm sm:text-base">NFS-e Prefeitura SP</h3>
          <p className="text-xs text-gray-500 mt-1">Geração automática de notas fiscais após atendimento sem retrabalho contábil</p>
        </div>
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[10px]">
          <span className="text-gray-400">Webservice v2.04</span>
          <span className="text-emerald-600 font-semibold">142 notas emitidas</span>
        </div>
      </div>
      
      {/* 5. Banco de Dados Legado */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <div className="w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-200">
            <Database className="w-5 h-5 text-gray-600" />
          </div>
          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-md text-[10px] font-bold">SINCRONIZANDO</span>
        </div>
        <div className="my-3">
          <h3 className="font-bold text-gray-900 text-sm sm:text-base">Sistema Legado (SQL)</h3>
          <p className="text-xs text-gray-500 mt-1">Conexão bidirecional com o banco de dados antigo sem perder nenhum prontuário</p>
        </div>
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[10px]">
          <div className="w-24 bg-gray-100 rounded-full h-1.5 overflow-hidden">
            <div className="bg-emerald-500 h-1.5 rounded-full w-[88%]"></div>
          </div>
          <span className="text-gray-400 font-medium">88% migrado</span>
        </div>
      </div>

      {/* 6. WhatsApp Oficial (Canal Opcional e Modular) */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 flex items-center justify-center border border-[#25D366]/20">
            <MessageSquare className="w-5 h-5 text-[#25D366]" />
          </div>
          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-md text-[10px] font-bold">OPCIONAL • MODULAR</span>
        </div>
        <div className="my-3">
          <h3 className="font-bold text-gray-900 text-sm sm:text-base">WhatsApp com IA</h3>
          <p className="text-xs text-gray-500 mt-1">Assistente de apoio fora do horário e em picos de confirmação sem substituir o humano</p>
        </div>
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[10px]">
          <span className="text-gray-400">Suporte 24h</span>
          <span className="text-emerald-600 font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Ativo
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);

const CRMConvenios = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [toastMsg, setToastMsg] = useState(null);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const convenios = [
    { 
      id: 1, 
      nome: 'Bradesco Saúde Top Nacional', 
      ans: '005711', 
      categoria: 'medicina',
      especialidades: 'Ortopedia, Clínica Geral & Cardiologia',
      tuss: '10101012 (Consulta Médica em Consultório)',
      valor: 'R$ 168,00', 
      glosa: '0.4%', 
      status: 'Homologado TISS', 
      tempoMedio: '30 dias',
      tag: 'Mais Utilizado'
    },
    { 
      id: 2, 
      nome: 'SulAmérica Saúde Especial', 
      ans: '006246', 
      categoria: 'psicologia',
      especialidades: 'Psicologia Clínica, Neuro & Psiquiatria',
      tuss: '50000144 (Sessão de Psicoterapia Individual)',
      valor: 'R$ 152,00', 
      glosa: '0.2%', 
      status: 'Homologado TISS', 
      tempoMedio: '30 dias',
      tag: 'Baixa Glosa'
    },
    { 
      id: 3, 
      nome: 'Amil Fácil / One Health', 
      ans: '326305', 
      categoria: 'psicologia',
      especialidades: 'Psicoterapia, Psiquiatria & TCC',
      tuss: '50000470 (Consulta/Atendimento Psicológico)',
      valor: 'R$ 135,00', 
      glosa: '0.5%', 
      status: 'Homologado TISS', 
      tempoMedio: '35 dias',
      tag: 'Ativo 24h'
    },
    { 
      id: 4, 
      nome: 'OdontoPrev Master Platinum', 
      ans: '301949', 
      categoria: 'odonto',
      especialidades: 'Odontologia Clínica & Endodontia',
      tuss: '85100040 (Profilaxia & Raspagem Supragengival)',
      valor: 'R$ 195,00', 
      glosa: '0.8%', 
      status: 'Homologado TISS', 
      tempoMedio: '25 dias',
      tag: 'Odonto Líder'
    },
    { 
      id: 5, 
      nome: 'Care Plus Soberano Executivo', 
      ans: '367281', 
      categoria: 'medicina',
      especialidades: 'Checkup Executivo, Odonto & Saúde Mental',
      tuss: '50000470 (Consulta Multidisciplinar)',
      valor: 'R$ 240,00', 
      glosa: '0.0%', 
      status: 'Homologado TISS', 
      tempoMedio: '15 dias',
      tag: 'Tabela Premium'
    },
    { 
      id: 6, 
      nome: 'Unimed Central Nacional', 
      ans: '339679', 
      categoria: 'fisioterapia',
      especialidades: 'Fisioterapia Motora & RPG',
      tuss: '20104235 (Sessão de Fisioterapia Ambulatorial)',
      valor: 'R$ 115,00', 
      glosa: '1.1%', 
      status: 'Homologado TISS', 
      tempoMedio: '45 dias',
      tag: 'Rede Ampla'
    },
    { 
      id: 7, 
      nome: 'Porto Seguro Saúde Prata', 
      ans: '000582', 
      categoria: 'medicina',
      especialidades: 'Cardiologia, Dermatologia & Cirurgia Geral',
      tuss: '10101012 (Consulta Médica Especializada)',
      valor: 'R$ 175,00', 
      glosa: '0.3%', 
      status: 'Homologado TISS', 
      tempoMedio: '30 dias',
      tag: 'Liquidação Rápida'
    },
    { 
      id: 8, 
      nome: 'Notredame Intermédica (GNDI)', 
      ans: '359017', 
      categoria: 'psicologia',
      especialidades: 'Fonoaudiologia & Psicoterapia Infantil',
      tuss: '50000560 (Terapia Fonoaudiológica/Psico)',
      valor: 'R$ 98,00', 
      glosa: '1.2%', 
      status: 'Homologado TISS', 
      tempoMedio: '40 dias',
      tag: 'Alto Volume'
    }
  ];

  const filtered = convenios.filter(c => {
    const matchesCat = selectedCategory === 'todos' || c.categoria === selectedCategory;
    const matchesSearch = c.nome.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.especialidades.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.ans.includes(searchTerm);
    return matchesCat && matchesSearch;
  });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4 md:space-y-6">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed top-24 right-6 z-50 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-gray-700 animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{toastMsg}</span>
        </div>
      )}

      {/* Top Banner & KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <div className="p-3.5 sm:p-5 border border-gray-100 rounded-2xl bg-white shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">Operadoras Ativas</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black mt-2 text-gray-900">8 Planos</h3>
          <p className="text-[10px] sm:text-xs text-gray-500 mt-1">Conectadas via TISS XML</p>
        </div>

        <div className="p-3.5 sm:p-5 border border-gray-100 rounded-2xl bg-white shadow-sm">
          <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">Faturamento Mês</span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black mt-2 text-gray-900">R$ 42.850<span className="text-xs sm:text-sm text-gray-400 font-normal">,00</span></h3>
          <p className="text-[10px] sm:text-xs text-emerald-600 mt-1 font-semibold flex items-center gap-1">
            <ArrowRight className="w-3 h-3 -rotate-45" /> +18.4% vs mês anterior
          </p>
        </div>

        <div className="p-3.5 sm:p-5 border border-gray-100 rounded-2xl bg-white shadow-sm">
          <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">Taxa Média de Glosa</span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black mt-2 text-emerald-600">0.5%</h3>
          <p className="text-[10px] sm:text-xs text-gray-500 mt-1">Auditada previamente por IA</p>
        </div>

        <div className="p-3.5 sm:p-5 border border-gray-100 rounded-2xl bg-black text-white shadow-sm flex flex-col justify-between">
          <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">Autonomia TISS</span>
          <div className="mt-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100%</h3>
            <p className="text-[10px] sm:text-xs text-gray-400 mt-1">Guias emitidas sem digitação</p>
          </div>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="border border-gray-100 rounded-2xl bg-white shadow-sm overflow-hidden">
        {/* Controls: Filter Tabs + Search */}
        <div className="p-3 sm:p-4 md:p-5 bg-gray-50/80 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {[
              { id: 'todos', label: 'Todos (8)' },
              { id: 'psicologia', label: 'Psicologia & Terapia' },
              { id: 'odonto', label: 'Odontologia' },
              { id: 'medicina', label: 'Medicina' },
              { id: 'fisioterapia', label: 'Fisioterapia' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === cat.id 
                    ? 'bg-black text-white shadow-xs' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Filtrar convênio ou código..."
                className="w-full pl-8 pr-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <button
              onClick={() => showToast('Lote TISS de 24 guias auditado: 0 inconsistências detectadas pelo Nexus!')}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors whitespace-nowrap flex items-center gap-1.5 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Auditar Lote</span>
            </button>
          </div>
        </div>

        {/* Convenios Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50/50">
                <th className="p-3 sm:p-4">Operadora & Registro ANS</th>
                <th className="p-3 sm:p-4">Especialidades Cobertas</th>
                <th className="p-3 sm:p-4">Código TUSS Padrão</th>
                <th className="p-3 sm:p-4 text-right">Valor Repasse</th>
                <th className="p-3 sm:p-4 text-center">Taxa de Glosa</th>
                <th className="p-3 sm:p-4 text-center">Conexão TISS</th>
                <th className="p-3 sm:p-4 text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="p-3 sm:p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center font-bold text-xs text-gray-700 shrink-0">
                        {c.nome.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-gray-900 text-xs sm:text-sm">{c.nome}</p>
                          <span className="hidden sm:inline-block text-[9px] font-bold px-1.5 py-0.5 rounded bg-gray-100 text-gray-600">
                            {c.tag}
                          </span>
                        </div>
                        <p className="text-[10px] text-gray-400">ANS: {c.ans} • Liquidação: {c.tempoMedio}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 sm:p-4">
                    <p className="text-xs text-gray-700 font-medium">{c.especialidades}</p>
                  </td>
                  <td className="p-3 sm:p-4">
                    <span className="text-[11px] font-mono font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      {c.tuss}
                    </span>
                  </td>
                  <td className="p-3 sm:p-4 text-right">
                    <p className="font-black text-xs sm:text-sm text-gray-900">{c.valor}</p>
                    <p className="text-[9px] text-gray-400">Tabela acordada</p>
                  </td>
                  <td className="p-3 sm:p-4 text-center">
                    <span className="inline-block px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold rounded-md">
                      {c.glosa}
                    </span>
                  </td>
                  <td className="p-3 sm:p-4 text-center">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-100/70 text-emerald-800 text-[10px] font-bold rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                      {c.status}
                    </span>
                  </td>
                  <td className="p-3 sm:p-4 text-right">
                    <button
                      onClick={() => showToast(`Tabela TUSS e regras da operadora ${c.nome} sincronizadas com sucesso!`)}
                      className="px-2.5 py-1 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      Tabela
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

const CRMNotas = () => {
  const [filterStatus, setFilterStatus] = useState('todas');
  const [searchTerm, setSearchTerm] = useState('');
  const [toastMsg, setToastMsg] = useState(null);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const notas = [
    {
      id: 'NFS-e #2026-0891',
      rps: 'RPS 1409',
      paciente: 'Ana Clara Mendes',
      cpf: '418.***.***-20',
      servico: 'Consulta Ortopédica Especializada com Retorno',
      valor: 'R$ 350,00',
      data: 'Hoje, 10:45',
      status: 'Autorizada',
      prefeitura: 'Prefeitura SP • Autenticada',
      iss: 'R$ 7,00 (2%)'
    },
    {
      id: 'NFS-e #2026-0890',
      rps: 'RPS 1408',
      paciente: 'Carlos Eduardo Vianna',
      cpf: '782.***.***-15',
      servico: 'Pacote Trimestral de Nutrição Clínica & Metabologia',
      valor: 'R$ 780,00',
      data: 'Hoje, 09:30',
      status: 'Autorizada',
      prefeitura: 'Prefeitura SP • Autenticada',
      iss: 'R$ 15,60 (2%)'
    },
    {
      id: 'NFS-e #2026-0889',
      rps: 'RPS 1407',
      paciente: 'Monique Albuquerque',
      cpf: '109.***.***-34',
      servico: 'Sessão de Psicoterapia Individual Cognitivo-Comportamental',
      valor: 'R$ 220,00',
      data: 'Hoje, 08:45',
      status: 'Autorizada',
      prefeitura: 'Prefeitura SP • Autenticada',
      iss: 'R$ 4,40 (2%)'
    },
    {
      id: 'NFS-e #2026-0888',
      rps: 'RPS 1406',
      paciente: 'Roberto Fagundes',
      cpf: '901.***.***-54',
      servico: 'Tratamento de Endodontia e Restauração Odontológica',
      valor: 'R$ 540,00',
      data: 'Ontem, 16:20',
      status: 'Autorizada',
      prefeitura: 'Prefeitura SP • Autenticada',
      iss: 'R$ 10,80 (2%)'
    },
    {
      id: 'NFS-e #2026-0887',
      rps: 'RPS 1405',
      paciente: 'Mariana Vasconcelos',
      cpf: '332.***.***-87',
      servico: 'Mapeamento Corporal Dermatológico & Dermatoscopia',
      valor: 'R$ 620,00',
      data: 'Ontem, 14:10',
      status: 'Autorizada',
      prefeitura: 'Prefeitura SP • Autenticada',
      iss: 'R$ 12,40 (2%)'
    },
    {
      id: 'NFS-e #2026-0886',
      rps: 'RPS 1404',
      paciente: 'Lucas Gabriel Pinheiro',
      cpf: '215.***.***-99',
      servico: 'Sessão de Reabilitação Fisioterapêutica Motora',
      valor: 'R$ 180,00',
      data: 'Ontem, 11:30',
      status: 'Processando',
      prefeitura: 'Webservice da Prefeitura em validação',
      iss: 'R$ 3,60 (2%)'
    }
  ];

  const filtered = notas.filter(n => {
    const matchesStatus = filterStatus === 'todas' || 
      (filterStatus === 'autorizadas' && n.status === 'Autorizada') ||
      (filterStatus === 'processando' && n.status === 'Processando');
    const matchesSearch = n.paciente.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          n.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          n.servico.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          n.cpf.includes(searchTerm);
    return matchesStatus && matchesSearch;
  });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4 md:space-y-6">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed top-24 right-6 z-50 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-gray-700 animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{toastMsg}</span>
        </div>
      )}

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <div className="p-3.5 sm:p-5 border border-gray-100 rounded-2xl bg-white shadow-sm">
          <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">Total Faturado no Mês</span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black mt-2 text-gray-900">R$ 68.450<span className="text-xs sm:text-sm text-gray-400 font-normal">,00</span></h3>
          <p className="text-[10px] sm:text-xs text-emerald-600 mt-1 font-semibold">142 NFS-e emitidas</p>
        </div>

        <div className="p-3.5 sm:p-5 border border-gray-100 rounded-2xl bg-white shadow-sm">
          <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">Emitidas por IA</span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black mt-2 text-emerald-600">100%</h3>
          <p className="text-[10px] sm:text-xs text-gray-500 mt-1">Gatilho pós-pagamento confirmado</p>
        </div>

        <div className="p-3.5 sm:p-5 border border-gray-100 rounded-2xl bg-white shadow-sm">
          <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">Horas Economizadas</span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black mt-2 text-gray-900">38h</h3>
          <p className="text-[10px] sm:text-xs text-gray-500 mt-1">Tempo poupado da recepção</p>
        </div>

        <div className="p-3.5 sm:p-5 border border-gray-100 rounded-2xl bg-black text-white shadow-sm flex flex-col justify-between">
          <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">Status Prefeitura SP</span>
          <div className="mt-2 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Webservice Ativo
              </span>
              <p className="text-[10px] text-gray-400 mt-0.5">Certificado A1 Válido</p>
            </div>
            <Receipt className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="border border-gray-100 rounded-2xl bg-white shadow-sm overflow-hidden">
        {/* Controls */}
        <div className="p-3 sm:p-4 md:p-5 bg-gray-50/80 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div className="flex items-center gap-1.5 sm:gap-2">
            {[
              { id: 'todas', label: 'Todas (142)' },
              { id: 'autorizadas', label: 'Autorizadas (138)' },
              { id: 'processando', label: 'Em Processamento (4)' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilterStatus(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  filterStatus === tab.id 
                    ? 'bg-black text-white shadow-xs' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar paciente, CPF ou NFS-e..."
                className="w-full pl-8 pr-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <button
              onClick={() => showToast('Arquivo consolidado SPED/XML exportado para a contabilidade!')}
              className="px-3 py-1.5 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-xs font-bold transition-colors whitespace-nowrap flex items-center gap-1.5 shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Exportar XML</span>
            </button>
          </div>
        </div>

        {/* Invoices Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50/50">
                <th className="p-3 sm:p-4">Nº Nota & RPS</th>
                <th className="p-3 sm:p-4">Paciente (Tomador)</th>
                <th className="p-3 sm:p-4">Procedimento / Discriminação</th>
                <th className="p-3 sm:p-4 text-right">Valor Líquido</th>
                <th className="p-3 sm:p-4 text-center">Status</th>
                <th className="p-3 sm:p-4 text-right">Ações Rápidas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((n, idx) => (
                <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                  <td className="p-3 sm:p-4">
                    <p className="font-bold text-gray-900 text-xs sm:text-sm font-mono">{n.id}</p>
                    <p className="text-[10px] text-gray-400">{n.rps} • {n.data}</p>
                  </td>
                  <td className="p-3 sm:p-4">
                    <p className="font-bold text-gray-900 text-xs sm:text-sm">{n.paciente}</p>
                    <p className="text-[10px] text-gray-400 font-mono">CPF: {n.cpf}</p>
                  </td>
                  <td className="p-3 sm:p-4">
                    <p className="text-xs text-gray-700 font-medium max-w-xs truncate">{n.servico}</p>
                    <p className="text-[10px] text-gray-400">{n.prefeitura} • ISS: {n.iss}</p>
                  </td>
                  <td className="p-3 sm:p-4 text-right">
                    <p className="font-black text-xs sm:text-sm text-gray-900">{n.valor}</p>
                    <span className="text-[9px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">Quitado</span>
                  </td>
                  <td className="p-3 sm:p-4 text-center">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold rounded-full ${
                      n.status === 'Autorizada' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${n.status === 'Autorizada' ? 'bg-emerald-600' : 'bg-amber-600 animate-pulse'}`}></span>
                      {n.status}
                    </span>
                  </td>
                  <td className="p-3 sm:p-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => showToast(`Download da DANFE ${n.id} iniciado em PDF!`)}
                        className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Baixar PDF da Nota"
                      >
                        <FileText className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => showToast(`NFS-e e comprovante enviados via WhatsApp para ${n.paciente}!`)}
                        className="px-2 py-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/70 rounded-lg transition-colors flex items-center gap-1"
                        title="Enviar via WhatsApp"
                      >
                        <MessageSquare className="w-3 h-3 text-emerald-600" />
                        <span className="hidden sm:inline">WhatsApp</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

const CRMEquipe = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('todos');
  const [toastMsg, setToastMsg] = useState(null);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  // Exatamente 9 profissionais conforme solicitado
  const profissionais = [
    {
      id: 1,
      nome: 'Dr. Gabriel Arantes',
      especialidade: 'Ortopedia & Traumatologia',
      registro: 'CRM/SP 142.890',
      rqe: 'RQE 77412',
      sala: 'Consultório 03',
      status: 'Em Atendimento',
      statusColor: 'bg-amber-100 text-amber-700 border-amber-200',
      dotColor: 'bg-amber-500',
      consultasHoje: 8,
      repasse: '70%',
      faturamentoHoje: 'R$ 2.450,00',
      rating: '4.9',
      reviews: 128,
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80',
      categoria: 'medicina'
    },
    {
      id: 2,
      nome: 'Dra. Juliana Silveira',
      especialidade: 'Dermatologia Clínica & Cirúrgica',
      registro: 'CRM/SP 168.420',
      rqe: 'RQE 82190',
      sala: 'Consultório 01',
      status: 'Agenda Livre',
      statusColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      dotColor: 'bg-emerald-500',
      consultasHoje: 6,
      repasse: '75%',
      faturamentoHoje: 'R$ 2.520,00',
      rating: '5.0',
      reviews: 94,
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&auto=format&fit=crop&q=80',
      categoria: 'medicina'
    },
    {
      id: 3,
      nome: 'Dr. Julio Ramos Samos',
      especialidade: 'Neurologia Clínica & Neurofisiologia',
      registro: 'CRM/SP 115.304',
      rqe: 'RQE 61205',
      sala: 'Consultório 02',
      status: 'Em Atendimento',
      statusColor: 'bg-amber-100 text-amber-700 border-amber-200',
      dotColor: 'bg-amber-500',
      consultasHoje: 7,
      repasse: '70%',
      faturamentoHoje: 'R$ 2.800,00',
      rating: '4.8',
      reviews: 110,
      avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&auto=format&fit=crop&q=80',
      categoria: 'medicina'
    },
    {
      id: 4,
      nome: 'Dra. Camila Meirelles',
      especialidade: 'Psicologia Clínica & TCC',
      registro: 'CRP 06/138.992',
      rqe: 'Esp. Saúde Mental',
      sala: 'Consultório 04',
      status: 'Em Atendimento',
      statusColor: 'bg-amber-100 text-amber-700 border-amber-200',
      dotColor: 'bg-amber-500',
      consultasHoje: 9,
      repasse: '80%',
      faturamentoHoje: 'R$ 1.980,00',
      rating: '5.0',
      reviews: 145,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
      categoria: 'psicologia'
    },
    {
      id: 5,
      nome: 'Dr. Lucas Takahashi',
      especialidade: 'Odontologia & Implantodontia',
      registro: 'CRO/SP 88.412',
      rqe: 'Cirurgião Bucomaxilo',
      sala: 'Consultório Odonto 01',
      status: 'Cirurgia',
      statusColor: 'bg-purple-100 text-purple-700 border-purple-200',
      dotColor: 'bg-purple-500',
      consultasHoje: 5,
      repasse: '75%',
      faturamentoHoje: 'R$ 3.850,00',
      rating: '4.9',
      reviews: 88,
      avatar: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?w=150&auto=format&fit=crop&q=80',
      categoria: 'odonto'
    },
    {
      id: 6,
      nome: 'Dra. Beatriz Albuquerque',
      especialidade: 'Cardiologia & Ergometria',
      registro: 'CRM/SP 177.210',
      rqe: 'RQE 90112',
      sala: 'Consultório 05',
      status: 'Agenda Livre',
      statusColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      dotColor: 'bg-emerald-500',
      consultasHoje: 6,
      repasse: '70%',
      faturamentoHoje: 'R$ 2.100,00',
      rating: '4.9',
      reviews: 76,
      avatar: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&auto=format&fit=crop&q=80',
      categoria: 'medicina'
    },
    {
      id: 7,
      nome: 'Dra. Fernanda Castro',
      especialidade: 'Nutrição Clínica & Metabologia',
      registro: 'CRN-3 44.120',
      rqe: 'Esp. Obesidade & Esporte',
      sala: 'Telemedicina Online',
      status: 'Consulta Online',
      statusColor: 'bg-blue-100 text-blue-700 border-blue-200',
      dotColor: 'bg-blue-500',
      consultasHoje: 8,
      repasse: '80%',
      faturamentoHoje: 'R$ 1.600,00',
      rating: '4.8',
      reviews: 102,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      categoria: 'terapia'
    },
    {
      id: 8,
      nome: 'Dra. Larissa Monteiro',
      especialidade: 'Ginecologia & Obstetrícia',
      registro: 'CRM/SP 153.940',
      rqe: 'RQE 73504',
      sala: 'Consultório 06',
      status: 'Agenda Livre',
      statusColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      dotColor: 'bg-emerald-500',
      consultasHoje: 7,
      repasse: '75%',
      faturamentoHoje: 'R$ 2.450,00',
      rating: '5.0',
      reviews: 115,
      avatar: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=150&auto=format&fit=crop&q=80',
      categoria: 'medicina'
    },
    {
      id: 9,
      nome: 'Dr. Rafael Nogueira',
      especialidade: 'Fisioterapia & Reabilitação Motora',
      registro: 'CREFITO-3 92.410-F',
      rqe: 'Especialista Ortopédico',
      sala: 'Estúdio Reabilitação',
      status: 'Em Atendimento',
      statusColor: 'bg-amber-100 text-amber-700 border-amber-200',
      dotColor: 'bg-amber-500',
      consultasHoje: 10,
      repasse: '75%',
      faturamentoHoje: 'R$ 2.200,00',
      rating: '4.9',
      reviews: 130,
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&auto=format&fit=crop&q=80',
      categoria: 'terapia'
    }
  ];

  const filtered = profissionais.filter(p => {
    if (selectedSpecialty === 'todos') return true;
    return p.categoria === selectedSpecialty;
  });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4 md:space-y-6">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed top-24 right-6 z-50 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-gray-700 animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{toastMsg}</span>
        </div>
      )}

      {/* KPI Cards - Números perfeitamente enquadrados sem vazamento */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4">
        {/* Card 1 - Corpo Clínico */}
        <div className="p-3.5 sm:p-4 md:p-5 border border-gray-100 rounded-2xl bg-white shadow-xs flex flex-col justify-between overflow-hidden min-w-0">
          <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider truncate">Corpo Clínico</span>
          <div className="my-2 sm:my-3">
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-gray-900 leading-none">9</span>
              <span className="text-xs sm:text-sm font-bold text-gray-600">Especialistas</span>
            </div>
          </div>
          <p className="text-[10px] sm:text-xs text-gray-500 truncate">Multi-especialidades ativas</p>
        </div>

        {/* Card 2 - Consultas Hoje */}
        <div className="p-3.5 sm:p-4 md:p-5 border border-gray-100 rounded-2xl bg-white shadow-xs flex flex-col justify-between overflow-hidden min-w-0">
          <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider truncate">Consultas Hoje</span>
          <div className="my-2 sm:my-3">
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-gray-900 leading-none">66</span>
              <span className="text-xs sm:text-sm font-bold text-gray-600">Agendadas</span>
            </div>
          </div>
          <p className="text-[10px] sm:text-xs text-emerald-600 font-semibold truncate">92% taxa de ocupação</p>
        </div>

        {/* Card 3 - NPS dos Pacientes */}
        <div className="p-3.5 sm:p-4 md:p-5 border border-gray-100 rounded-2xl bg-white shadow-xs flex flex-col justify-between overflow-hidden min-w-0">
          <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider truncate">NPS Pacientes</span>
          <div className="my-2 sm:my-3">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-emerald-600 leading-none">4.9</span>
              <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400 shrink-0" />
            </div>
          </div>
          <p className="text-[10px] sm:text-xs text-gray-500 truncate">883 avaliações auditadas</p>
        </div>

        {/* Card 4 - Cálculo de Repasses */}
        <div className="p-3.5 sm:p-4 md:p-5 border border-gray-800 rounded-2xl bg-[#0D0E10] text-white shadow-xs flex flex-col justify-between overflow-hidden min-w-0">
          <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider truncate">Cálculo Repasses</span>
          <div className="my-2 sm:my-3">
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-emerald-400 leading-none">100%</span>
              <span className="text-xs sm:text-sm font-bold text-emerald-300">Automático</span>
            </div>
          </div>
          <p className="text-[10px] sm:text-xs text-gray-400 truncate">Sem conciliação manual</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 bg-white p-2.5 sm:p-3.5 rounded-2xl border border-gray-100 shadow-xs">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {[
            { id: 'todos', label: 'Todos (9)' },
            { id: 'medicina', label: 'Médicos (5)' },
            { id: 'psicologia', label: 'Psicologia (1)' },
            { id: 'odonto', label: 'Odontologia (1)' },
            { id: 'terapia', label: 'Nutrição & Fisio (2)' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setSelectedSpecialty(f.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedSpecialty === f.id 
                  ? 'bg-black text-white shadow-xs' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <span className="text-xs text-gray-400 font-medium hidden sm:inline pr-1">
          Exibindo {filtered.length} de 9 profissionais
        </span>
      </div>

      {/* Grid of 9 Professionals - Enquadramento perfeito sem esmagar os cards */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3.5 sm:gap-4">
        {filtered.map(p => (
          <div key={p.id} className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden min-w-0">
            <div>
              <div className="flex items-start gap-3 min-w-0">
                <img 
                  src={p.avatar} 
                  alt={p.nome}
                  className="w-12 h-12 rounded-xl object-cover border border-gray-100 shadow-xs shrink-0"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(p.nome)}&background=0D0E10&color=10b981&bold=true`;
                  }}
                />
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-gray-900 text-sm truncate" title={p.nome}>{p.nome}</h4>
                  <p className="text-xs text-gray-500 truncate" title={p.especialidade}>{p.especialidade}</p>
                  <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                    <span className="text-[10px] font-mono font-semibold text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded shrink-0">
                      {p.registro}
                    </span>
                    <span className="text-[10px] text-gray-400 truncate">{p.rqe}</span>
                  </div>
                </div>
              </div>

              {/* Status and Room */}
              <div className="mt-3.5 pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs gap-2">
                <span className="text-gray-500 font-medium flex items-center gap-1.5 text-[11px] truncate">
                  <Building2 className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span className="truncate">{p.sala}</span>
                </span>
                <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border shrink-0 ${p.statusColor}`}>
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${p.dotColor}`}></span>
                  <span>{p.status}</span>
                </span>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-1.5 mt-3 p-2.5 bg-gray-50 rounded-xl text-center">
                <div>
                  <p className="text-[10px] text-gray-400 font-medium">Hoje</p>
                  <p className="text-xs font-bold text-gray-900">{p.consultasHoje} pac.</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-medium">Repasse</p>
                  <p className="text-xs font-bold text-emerald-600">{p.repasse}</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-medium">Avaliação</p>
                  <p className="text-xs font-bold text-amber-600 flex items-center justify-center gap-0.5">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400 shrink-0" /> {p.rating}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-3.5 pt-3 border-t border-gray-100 flex items-center gap-2">
              <button
                onClick={() => showToast(`Agenda de ${p.nome} sincronizada! 0 conflitos encontrados.`)}
                className="flex-1 py-1.5 px-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg text-xs font-bold transition-colors truncate"
              >
                Ver Agenda
              </button>
              <button
                onClick={() => showToast(`Histórico de atendimentos e prontuários do ${p.sala} abertos.`)}
                className="px-3 py-1.5 bg-black hover:bg-gray-800 text-white rounded-lg text-xs font-bold transition-colors whitespace-nowrap"
              >
                Prontuários
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const NexusAgentDrawer = ({ showAI, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 'init-1',
      sender: 'ai',
      time: 'Agora',
      text: 'Olá! Sou o <strong>Agente Nexus</strong>, assistente de apoio operacional da sua clínica. Meu papel é atuar nos bastidores conectando planilhas, comunicação interna e repasses para que sua recepção foque 100% no acolhimento humano do paciente.<br/><br/>Clique em uma das dúvidas abaixo para ver a demonstração da IA em tempo real:'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputVal, setInputVal] = useState('');

  const preRecordedQA = [
    {
      label: '⚡ Como a IA atende no WhatsApp?',
      question: 'Como você faz o atendimento automático no WhatsApp?',
      answer: 'Eu atendo cada paciente em menos de 3 segundos, 24 horas por dia. Entendo sintomas em áudio ou texto, valido o convênio, encontro o melhor horário na agenda médica e confirmo a consulta direto no sistema — tudo sem intervenção da recepção.'
    },
    {
      label: '💰 Quanto tempo e custo economiza?',
      question: 'Qual a real economia de tempo e custos para a clínica?',
      answer: 'Uma clínica economiza em média de 120 a 160 horas por mês. O tempo gasto ligando para pacientes, transcrevendo dados de WhatsApp para o sistema e cobrando orçamentos cai para zero. Sua recepção foca 100% no acolhimento presencial.'
    },
    {
      label: '🔄 E se o paciente desmarcar?',
      question: 'O que o sistema faz quando alguém desmarca em cima da hora?',
      answer: 'No instante em que o cancelamento ocorre, eu consulto a lista de espera inteligente e disparo mensagens via WhatsApp para pacientes prioritários. Vagas ociosas são preenchidas em menos de 10 minutos, sem nenhum esforço manual.'
    },
    {
      label: '📑 Como funciona faturamento e NFs?',
      question: 'Como é feita a emissão de notas e o fechamento do caixa?',
      answer: 'Cruzo os atendimentos do dia com a tabela de procedimentos e convênios. Calculo automaticamente os repasses líquidos de cada médico (descontando taxas e materiais) e emito as notas fiscais em lote com um único clique de confirmação.'
    },
    {
      label: '🔒 Sigilo e conformidade LGPD?',
      question: 'Os dados médicos e de pacientes estão protegidos?',
      answer: 'Sim, seguimos as diretrizes mais rigorosas da LGPD e do CFM. Todas as mensagens e fichas trafegam por canais criptografados de ponta a ponta e ficam sob custódia exclusiva da sua clínica, sem exposição a modelos públicos.'
    }
  ];

  const handleAsk = (item) => {
    if (isTyping) return;
    const userMsg = {
      id: Date.now().toString(),
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: item.question
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const aiMsg = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: item.answer
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim() || isTyping) return;

    const userText = inputVal;
    setInputVal('');

    const userMsg = {
      id: Date.now().toString(),
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: userText
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      let reply = 'Como Agente Nexus, fui modelado especificamente para as regras da sua clínica. Eu centralizo WhatsApp, prontuário, agenda médica e faturamento em tempo real sem erros operacionais.';
      const lower = userText.toLowerCase();
      if (lower.includes('custo') || lower.includes('valor') || lower.includes('preço') || lower.includes('econom')) {
        reply = preRecordedQA[1].answer;
      } else if (lower.includes('whatsapp') || lower.includes('atende') || lower.includes('mensagem')) {
        reply = preRecordedQA[0].answer;
      } else if (lower.includes('desmarca') || lower.includes('cancela') || lower.includes('agenda')) {
        reply = preRecordedQA[2].answer;
      } else if (lower.includes('nota') || lower.includes('fatura') || lower.includes('dinheiro') || lower.includes('repasse')) {
        reply = preRecordedQA[3].answer;
      } else if (lower.includes('seguran') || lower.includes('lgpd') || lower.includes('dado')) {
        reply = preRecordedQA[4].answer;
      }

      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          text: reply
        }
      ]);
      setIsTyping(false);
    }, 700);
  };

  const resetChat = () => {
    setMessages([
      {
        id: 'init-1',
        sender: 'ai',
        time: 'Agora',
        text: 'Demonstração reiniciada! Selecione uma pergunta abaixo para ver a IA em ação:'
      }
    ]);
  };

  return (
    <AnimatePresence>
      {showAI && (
        <motion.div 
          initial={{ x: '100%', opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          className="absolute top-0 right-0 w-full sm:w-96 h-full bg-white md:border-l border-gray-200 shadow-2xl flex flex-col z-30 overflow-hidden"
        >
          {/* Header */}
          <div className="p-3 sm:p-4 border-b border-gray-100 flex items-center justify-between bg-white flex-shrink-0">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center flex-shrink-0 shadow-xs p-1.5">
                <NexusBotIcon className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-gray-900 leading-tight">Agente Nexus</h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] text-emerald-600 font-bold tracking-wider">ONLINE • SUPORTE 24H</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button 
                onClick={resetChat} 
                className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600 transition-colors"
                title="Reiniciar conversa"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button 
                onClick={onClose} 
                className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Fechar Nexus"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Messages List */}
          <div className="flex-1 p-3 sm:p-4 overflow-y-auto flex flex-col gap-3 custom-scrollbar bg-gray-50/50">
            {messages.map((m) => (
              m.sender === 'user' ? (
                <div key={m.id} className="flex justify-end">
                  <div className="bg-gray-900 text-white p-3 rounded-2xl rounded-tr-sm text-xs sm:text-sm shadow-sm max-w-[85%] break-words">
                    {m.text}
                    <span className="text-[9px] text-gray-400 block text-right mt-1">{m.time}</span>
                  </div>
                </div>
              ) : (
                <div key={m.id} className="flex gap-2 items-start">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200/60 flex items-center justify-center shadow-xs shrink-0 mt-0.5 p-1">
                    <NexusBotIcon className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div className="bg-white p-3 rounded-2xl rounded-tl-sm text-xs sm:text-sm text-gray-800 shadow-sm border border-gray-100 max-w-[88%] leading-relaxed break-words">
                    <span dangerouslySetInnerHTML={{ __html: m.text }} />
                    <span className="text-[9px] text-gray-400 block text-right mt-1">{m.time}</span>
                  </div>
                </div>
              )
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-xs text-gray-400 p-2 bg-white rounded-xl border border-gray-100 w-max shadow-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]"></div>
                <span className="text-[10px] text-gray-500 font-medium ml-1">Nexus formulando resposta...</span>
              </div>
            )}

            {/* Quick Questions Chips */}
            <div className="pt-2">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                Perguntas Frequentes (Clique para testar):
              </span>
              <div className="flex flex-col gap-1.5">
                {preRecordedQA.map((qa, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleAsk(qa)}
                    disabled={isTyping}
                    className="text-left p-2.5 bg-white hover:bg-emerald-50/70 border border-gray-200 hover:border-emerald-300 rounded-xl text-xs font-semibold text-gray-700 hover:text-emerald-800 transition-all shadow-xs flex items-center justify-between group disabled:opacity-50"
                  >
                    <span>{qa.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Input Footer */}
          <form onSubmit={handleCustomSubmit} className="p-2 sm:p-3 bg-white border-t border-gray-100 flex-shrink-0">
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Pergunte ao Nexus..." 
                className="w-full bg-gray-50 border border-gray-200 rounded-full pl-4 pr-11 py-2 sm:py-2.5 text-xs sm:text-sm shadow-inner focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white" 
              />
              <button 
                type="submit"
                disabled={isTyping || !inputVal.trim()}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 bg-gray-900 hover:bg-gray-800 disabled:opacity-40 text-white rounded-full flex items-center justify-center transition-all shadow-sm"
                aria-label="Enviar para o Nexus"
              >
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const InteractiveCRM = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [topTab, setTopTab] = useState('diretorio'); // 'diretorio' | 'prontuarios' | 'operacoes'
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [showAI, setShowAI] = useState(false);
  const [isStarred, setIsStarred] = useState(false);
  const [toastMsg, setToastMsg] = useState(null);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'agenda', label: 'Agendamentos', icon: CalendarDays },
    { id: 'pacientes', label: 'Pacientes', icon: Users },
    { id: 'comunicacao', label: 'Comunicação', icon: MessageSquare },
    { id: 'conexoes', label: 'Conexões', icon: Plug },
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setShowAI(false); // Fecha o Nexus imediatamente ao trocar de aba
  };

  const handleTopTabChange = (tTab) => {
    setTopTab(tTab);
    setActiveTab('dashboard');
    setShowAI(false); // Fecha o Nexus imediatamente
  };

  return (
    <section id="crm" className="w-full bg-[#F4F5F7] py-12 md:py-20 px-3 sm:px-6 md:px-10 border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-6 md:mb-10"
        >
          <div className="inline-block px-4 py-1 mb-3 text-[10px] md:text-xs font-bold tracking-widest text-black uppercase bg-white border border-gray-200 rounded-full shadow-2xs">
            RÉPLICA FUNCIONAL DO SISTEMA
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-black mb-2 sm:mb-3">
            O coração da sua operação.
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Desenvolvido sob medida para valorizar a atenção humana da recepção. Conecta planilhas, médicos, repasses, notas e dados legados em uma única tela.
          </p>
        </motion.div>

        {/* Moldura do CRM (Firme, sem parallax 3D, com rolagem interna fluida no mouse via data-lenis-prevent) */}
        <div 
          data-lenis-prevent="true"
          className="w-full bg-white rounded-3xl shadow-2xl border border-gray-200/90 overflow-hidden flex flex-col md:flex-row min-h-[580px] h-[720px] md:h-[780px] relative"
        >
          
          {/* Toast Notificação de Ações Rápidas */}
          {toastMsg && (
            <div className="absolute top-16 right-6 z-50 bg-gray-900 text-white px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2.5 border border-gray-700 animate-in fade-in slide-in-from-top-2 text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{toastMsg}</span>
            </div>
          )}

          {/* Sidebar Estilo Panacea - Retrátil / Móvel com Transição Suave */}
          <div 
            className={`bg-white md:bg-[#FAFAFB] border-b md:border-b-0 md:border-r border-gray-200 p-2 sm:p-3 md:p-4 flex flex-row md:flex-col justify-between flex-shrink-0 z-20 overflow-x-auto md:overflow-visible custom-scrollbar transition-all duration-300 ease-in-out ${
              isSidebarCollapsed ? 'md:w-20' : 'md:w-60'
            }`}
          >
            {/* Topo da Sidebar: Apenas Texto BIO MIND + Botão de Recolher/Expandir */}
            <div>
              <div className="hidden md:flex items-center justify-between px-2 py-2 mb-4">
                {!isSidebarCollapsed ? (
                  <span className="font-black text-xl tracking-tighter text-black notranslate">
                    BIO MIND
                  </span>
                ) : (
                  <span className="font-black text-sm tracking-tighter text-black notranslate">
                    BM
                  </span>
                )}
                <button 
                  onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                  className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-700 transition-colors"
                  title={isSidebarCollapsed ? "Expandir menu lateral" : "Recolher menu lateral"}
                  aria-label="Alternar menu"
                >
                  <PanelLeftClose className={`w-4 h-4 transition-transform duration-300 ${isSidebarCollapsed ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Lista de Navegação com Pill Verde Pastel (Panacea style) */}
              <nav className="flex flex-row md:flex-col gap-1 w-max md:w-auto">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabChange(tab.id)}
                      title={isSidebarCollapsed ? tab.label : undefined}
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs sm:text-sm transition-all whitespace-nowrap text-left ${
                        isSidebarCollapsed ? 'md:justify-center md:px-2' : ''
                      } ${
                        isActive 
                          ? 'bg-[#E8F8F0] text-[#0A6E3F] font-bold shadow-2xs border border-emerald-200/60' 
                          : 'text-gray-600 hover:bg-gray-100 hover:text-black font-semibold'
                      }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#0A6E3F]' : 'text-gray-400'}`} />
                      {!isSidebarCollapsed && <span>{tab.label}</span>}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Rodapé da Sidebar: Agente Nexus com Ícone Vetorial Minimalista */}
            <div className="hidden md:block pt-3 border-t border-gray-200/80">
              <button 
                onClick={() => setShowAI(!showAI)}
                title={isSidebarCollapsed ? "Agente Nexus (Suporte 24h)" : undefined}
                className={`w-full flex items-center justify-between gap-2 p-2.5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 rounded-2xl transition-all shadow-xs group ${
                  isSidebarCollapsed ? 'justify-center p-2' : ''
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center p-1 shadow-2xs shrink-0">
                    <NexusBotIcon className="w-5 h-5 text-emerald-700" />
                  </div>
                  {!isSidebarCollapsed && (
                    <div className="text-left">
                      <span className="font-bold text-xs text-gray-900 block leading-tight">Agente Nexus</span>
                      <span className="text-[10px] text-emerald-700 font-semibold">Suporte 24h</span>
                    </div>
                  )}
                </div>
                {!isSidebarCollapsed && (
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                )}
              </button>
            </div>
          </div>

          {/* Área Principal de Conteúdo */}
          <div className="flex-1 bg-[#F9FAFB] flex flex-col min-w-0 h-full overflow-hidden relative">
            
            {/* Topbar com Abas de Navegador Vivas (Panacea style) */}
            <header className="h-14 sm:h-16 bg-white border-b border-gray-200 flex items-center justify-between px-3 sm:px-6 flex-shrink-0 z-10">
              {/* Browser-style Breadcrumb Tabs (Com Vida & Ação) */}
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar">
                <button 
                  onClick={() => handleTopTabChange('diretorio')}
                  className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold border transition-all whitespace-nowrap ${
                    topTab === 'diretorio' && activeTab === 'dashboard'
                      ? 'bg-gray-900 text-white border-gray-900 shadow-2xs'
                      : 'bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-gray-400">✕</span>
                  <span>Diretório da Clínica</span>
                </button>
                <button 
                  onClick={() => handleTopTabChange('prontuarios')}
                  className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all whitespace-nowrap ${
                    topTab === 'prontuarios' && activeTab === 'dashboard'
                      ? 'bg-gray-900 text-white border-gray-900 shadow-2xs font-bold'
                      : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <Cloud className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>Prontuários & OneDrive</span>
                </button>
                <button 
                  onClick={() => handleTopTabChange('operacoes')}
                  className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all whitespace-nowrap ${
                    topTab === 'operacoes' && activeTab === 'dashboard'
                      ? 'bg-gray-900 text-white border-gray-900 shadow-2xs font-bold'
                      : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <Stethoscope className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Operações Médicas</span>
                </button>
              </div>

              {/* Lado Direito: Acesso Rápido Nexus & Perfil do Gestor */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button 
                  onClick={() => setShowAI(true)}
                  className="md:hidden flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-gray-200 text-gray-900 rounded-xl text-xs font-bold shadow-2xs"
                  aria-label="Abrir Nexus"
                >
                  <NexusBotIcon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Nexus</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                </button>

                <div className="flex items-center gap-2 pl-2 border-l border-gray-200">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-900 text-white font-black text-xs flex items-center justify-center">
                    B
                  </div>
                  <div className="hidden sm:block text-left">
                    <span className="text-xs font-bold text-gray-900 block leading-tight">Bernardo</span>
                    <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Gestão Ativa
                    </span>
                  </div>
                </div>
              </div>
            </header>

            {/* CONTEÚDO ROLÁVEL COM O SCROLL DO MOUSE (data-lenis-prevent impede travamento pelo Lenis) */}
            <div 
              data-lenis-prevent="true"
              className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar p-3 sm:p-5 md:p-8"
            >
              <AnimatePresence mode="wait">
                {activeTab === 'dashboard' && topTab === 'diretorio' && (
                  <CRMDashboard key="dashboard-diretorio" onShowToast={showToast} isStarred={isStarred} setIsStarred={setIsStarred} />
                )}
                {activeTab === 'dashboard' && topTab === 'prontuarios' && (
                  <CRMProntuariosOneDrive key="dashboard-prontuarios" onShowToast={showToast} />
                )}
                {activeTab === 'dashboard' && topTab === 'operacoes' && (
                  <CRMOperacoesMedicas key="dashboard-operacoes" onShowToast={showToast} />
                )}
                {activeTab === 'agenda' && <CRMAgenda key="agenda" />}
                {activeTab === 'pacientes' && <CRMPacientes key="pacientes" />}
                {activeTab === 'comunicacao' && <CRMComunicacao key="comunicacao" />}
                {activeTab === 'conexoes' && <CRMConexoes key="conexoes" />}
              </AnimatePresence>
            </div>

            {/* Drawer do Agente Nexus */}
            <NexusAgentDrawer showAI={showAI} onClose={() => setShowAI(false)} />
          </div>

        </div>
      </div>
    </section>
  );
};

const ROICalculator = () => {
  const [leads, setLeads] = useState(500);
  const [salary, setSalary] = useState(3000);
  
  const hoursWasted = Math.round(leads * 0.083);
  const hourlyRate = salary / 160;
  const costWasted = Math.round(hoursWasted * hourlyRate);

  return (
    <section className="w-full bg-black py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        <div className="flex-1 relative z-10 text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 mb-4 md:mb-6 text-[10px] md:text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-400/10 rounded-full">
            IMPACTO FINANCEIRO
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-4 md:mb-6 leading-[1.1]">
            O custo invisível do trabalho braçal.
          </h2>
          <p className="text-base md:text-xl text-gray-400 font-light leading-relaxed mb-6 md:mb-8">
            Toda vez que a recepção para de acolher pacientes para preencher planilhas ou transcrever dados, a clínica perde dinheiro. Descubra quanto.
          </p>
        </div>
        
        <div className="flex-1 w-full bg-[#111214] border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl relative z-10">
          <div className="space-y-8 md:space-y-10">
            <div className="space-y-4 md:space-y-5">
              <div className="flex justify-between items-end">
                <label className="text-[10px] md:text-sm font-bold text-gray-400 uppercase tracking-wider">Agendamentos/Mês (WhatsApp)</label>
                <span className="text-xl md:text-2xl font-black text-white">{leads}</span>
              </div>
              <input type="range" min="50" max="3000" step="50" value={leads} onChange={(e) => setLeads(Number(e.target.value))} className="w-full accent-white bg-white/10 h-1.5 md:h-2 rounded-lg appearance-none cursor-pointer" />
            </div>
            
            <div className="space-y-4 md:space-y-5">
              <div className="flex justify-between items-end">
                <label className="text-[10px] md:text-sm font-bold text-gray-400 uppercase tracking-wider">Salário Base Recepção (R$)</label>
                <span className="text-xl md:text-2xl font-black text-white">R$ {salary.toLocaleString('pt-BR')}</span>
              </div>
              <input type="range" min="1500" max="8000" step="500" value={salary} onChange={(e) => setSalary(Number(e.target.value))} className="w-full accent-white bg-white/10 h-1.5 md:h-2 rounded-lg appearance-none cursor-pointer" />
            </div>
            
            <div className="pt-6 md:pt-8 border-t border-white/10 mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div>
                <p className="text-[10px] md:text-xs text-red-500 font-bold uppercase tracking-widest mb-1 md:mb-2">Tempo Desperdiçado</p>
                <p className="text-3xl md:text-4xl font-black text-white">{hoursWasted}h <span className="text-sm md:text-lg text-gray-600 font-medium">/mês</span></p>
              </div>
              <div>
                <p className="text-[10px] md:text-xs text-red-500 font-bold uppercase tracking-widest mb-1 md:mb-2">Prejuízo Financeiro</p>
                <p className="text-3xl md:text-4xl font-black text-red-500">R$ {costWasted.toLocaleString('pt-BR')} <span className="text-sm md:text-lg text-red-900 font-medium">/mês</span></p>
              </div>
            </div>
            
            <div className="mt-6 md:mt-8 bg-emerald-500/10 border border-emerald-500/20 rounded-xl md:rounded-2xl p-4 md:p-6 flex items-start gap-3 md:gap-4">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1 md:mt-0">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-400"/>
              </div>
              <p className="text-xs md:text-sm text-emerald-400/90 font-medium leading-relaxed">
                Com o ecossistema Bio Mind, o Agente Nexus orquestra esses atendimentos e digita no sistema por você. <br/>
                <span className="text-emerald-400 font-bold block mt-1 md:mt-2 text-base md:text-lg">Custo Operacional: R$ 0,00.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PremiumFooter = () => (
  <footer id="footer" className="w-full bg-[#050505] pt-24 pb-12 px-6 md:px-12 lg:px-24 text-white border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-20">
        
        {/* Brand Col */}
        <div className="lg:col-span-1 space-y-6">
          <div className="font-black text-2xl md:text-3xl tracking-tighter text-white">
            <span translate="no" className="notranslate">BIO MIND</span>
          </div>
          <p className="text-gray-400 text-sm font-light leading-relaxed max-w-xs">
            A vanguarda da inteligência artificial aplicada à gestão clínica. Substituímos softwares mortos por ecossistemas vivos.
          </p>
        </div>

        {/* Links Rápidos */}
        <div className="space-y-6">
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Navegação</h4>
          <ul className="space-y-4">
            <li><a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Início</a></li>
            <li><a href="#clinica" onClick={(e) => scrollToSection(e, '#clinica')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors">O Problema</a></li>
            <li><a href="#crm" onClick={(e) => scrollToSection(e, '#crm')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors">O Ecossistema</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div className="space-y-6">
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Fale Conosco</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-300 text-sm">
              <Mail className="w-4 h-4 text-gray-500" />
              contato@biomind.com.br
            </li>
          </ul>
        </div>

      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
        <p className="text-gray-500 text-xs font-medium">© {new Date().getFullYear()} Bio Mind Orchestration. Todos os direitos reservados.</p>
        <div className="flex gap-6 text-xs font-medium text-gray-500">
          <a href="#" className="hover:text-gray-300">Termos de Uso</a>
          <a href="#" className="hover:text-gray-300">Privacidade</a>
        </div>
      </div>
    </div>
  </footer>
);

const LeadQuizModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [clinicName, setClinicName] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [bottleneck, setBottleneck] = useState('');

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setClinicName('');
      setTeamSize('');
      setBottleneck('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNextFromClinic = (e) => {
    e.preventDefault();
    if (!clinicName.trim()) return;
    setStep(2);
  };

  const handleSelectTeam = (size) => {
    setTeamSize(size);
    setStep(3);
  };

  const handleSelectBottleneck = (problem) => {
    setBottleneck(problem);
    setStep(4);
  };

  const getWhatsAppUrl = (customText) => {
    if (customText) {
      return `https://wa.me/5511989543917?text=${encodeURIComponent(customText)}`;
    }
    const clinic = clinicName.trim() || 'Minha Clínica';
    const team = teamSize || '1 a 3 profissionais';
    const problem = bottleneck || 'Gestão e atendimento';
    const msg = `Olá! Fiz o diagnóstico operacional no site da Bio Mind para a clínica *${clinic}*.\n\n` +
      `🏥 *Clínica:* ${clinic}\n` +
      `👥 *Equipe:* ${team}\n` +
      `⚠️ *Maior Desafio:* ${problem}\n\n` +
      `Gostaria de ver uma demonstração de como o Nexus automatiza esses processos!`;
    return `https://wa.me/5511989543917?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-lg bg-[#0F1012] border border-white/10 text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow decorativo */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Diagnóstico Operacional Gratuito
            </span>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            aria-label="Fechar Quiz"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Barra de Progresso */}
        <div className="w-full bg-white/5 rounded-full h-1.5 mb-6 overflow-hidden">
          <div 
            className="bg-emerald-500 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          ></div>
        </div>

        {/* Step 1: Nome da Clínica */}
        {step === 1 && (
          <form onSubmit={handleNextFromClinic} className="space-y-6">
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Pergunta 1 de 3</span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                Qual o nome da sua clínica ou consultório?
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">
                Personalizaremos o plano e a estimativa de horas poupadas para sua estrutura.
              </p>
            </div>

            <div>
              <input
                type="text"
                autoFocus
                value={clinicName}
                onChange={(e) => setClinicName(e.target.value)}
                placeholder="Ex: Clínica Santa Clara ou Consultório Dra. Juliana"
                className="w-full bg-white/5 border border-white/15 focus:border-emerald-500 rounded-2xl px-4 py-3.5 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none transition-all shadow-inner"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <a
                href={getWhatsAppUrl("Olá! Gostaria de falar com um especialista da Bio Mind diretamente.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="text-xs text-gray-500 hover:text-gray-300 underline"
              >
                Pular e falar direto no WhatsApp
              </a>

              <button
                type="submit"
                disabled={!clinicName.trim()}
                className="w-full sm:w-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                <span>Avançar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Step 2: Tamanho da Equipe */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Pergunta 2 de 3</span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                Quantos profissionais atendem na sua clínica?
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">
                Isso define a escala de mensagens diárias, confirmações e repasses.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { id: '1 a 3 profissionais', label: '1 a 3 profissionais', sub: 'Consultório individual ou equipe enxuta' },
                { id: '4 a 10 profissionais', label: '4 a 10 profissionais', sub: 'Clínica multidisciplinar em expansão' },
                { id: 'Mais de 10 profissionais', label: 'Mais de 10 profissionais', sub: 'Policlínica ou centro médico com alto fluxo' }
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => handleSelectTeam(opt.id)}
                  className="w-full text-left p-4 rounded-2xl bg-white/5 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/40 transition-all group flex items-center justify-between"
                >
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {opt.label}
                    </h4>
                    <p className="text-xs text-gray-400 mt-0.5">{opt.sub}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(1)}
              className="text-xs text-gray-500 hover:text-gray-300 flex items-center gap-1"
            >
              <ChevronLeft className="w-3.5 h-3.5" /> Voltar
            </button>
          </div>
        )}

        {/* Step 3: Maior Gargalo Operacional */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Pergunta 3 de 3</span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                Qual o maior gargalo da sua clínica hoje?
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">
                Onde você sente que a clínica perde mais tempo ou receita?
              </p>
            </div>

            <div className="space-y-2.5">
              {[
                { id: 'Planilhas soltas (OneDrive/Excel) e falta de integração', label: 'Planilhas soltas (OneDrive/Excel) e dados descentralizados' },
                { id: 'Comunicação truncada entre recepção e corpo clínico', label: 'Comunicação interna truncada entre consultórios e recepção' },
                { id: 'Recepção sobrecarregada com rotinas repetitivas e notas', label: 'Recepção sobrecarregada com rotinas repetitivas e notas fiscais' },
                { id: 'Glosas de convênios e conferência manual de guias TISS', label: 'Glosas de convênios e cálculo manual de repasses médicos' },
                { id: 'WhatsApp congestionado & faltas na agenda (no-show)', label: 'WhatsApp congestionado & faltas na agenda de última hora' },
                { id: 'Todos os gargalos operacionais acima juntos', label: 'Todos os gargalos operacionais acima juntos' }
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => handleSelectBottleneck(opt.id)}
                  className="w-full text-left p-3.5 rounded-xl bg-white/5 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/40 transition-all group flex items-center justify-between"
                >
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {opt.label}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(2)}
              className="text-xs text-gray-500 hover:text-gray-300 flex items-center gap-1"
            >
              <ChevronLeft className="w-3.5 h-3.5" /> Voltar
            </button>
          </div>
        )}

        {/* Step 4: Resultado do Diagnóstico */}
        {step === 4 && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-bold border border-emerald-500/20 mb-3">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Diagnóstico Concluído
              </div>
              <h3 className="text-2xl font-black text-white">
                Plano Estimado para {clinicName || 'Sua Clínica'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Com base no seu perfil ({teamSize}), o Nexus projeta o seguinte impacto imediato:
              </p>
            </div>

            {/* Projected Impact Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className="bg-white/5 p-3 rounded-2xl border border-white/10 text-center">
                <span className="text-[10px] text-gray-400 font-bold uppercase">Tempo Poupado</span>
                <p className="text-lg sm:text-xl font-black text-emerald-400 mt-1">~30h/mês</p>
                <p className="text-[9px] text-gray-400 mt-0.5">da recepção</p>
              </div>

              <div className="bg-white/5 p-3 rounded-2xl border border-white/10 text-center">
                <span className="text-[10px] text-gray-400 font-bold uppercase">No-Show</span>
                <p className="text-lg sm:text-xl font-black text-emerald-400 mt-1">-42%</p>
                <p className="text-[9px] text-gray-400 mt-0.5">com aviso ativo</p>
              </div>

              <div className="bg-white/5 p-3 rounded-2xl border border-white/10 text-center">
                <span className="text-[10px] text-gray-400 font-bold uppercase">Atendimento</span>
                <p className="text-lg sm:text-xl font-black text-white mt-1">0 seg</p>
                <p className="text-[9px] text-gray-400 mt-0.5">24h por dia</p>
              </div>
            </div>

            <div className="p-3.5 bg-emerald-950/30 border border-emerald-500/30 rounded-2xl text-xs text-emerald-300">
              <p className="font-semibold">Resumo do Foco:</p>
              <p className="text-gray-300 mt-1">
                Conexões inteligentes e automação para eliminar o gargalo: <strong className="text-white">"{bottleneck}"</strong>, unificando planilhas, corpo clínico e rotinas no mesmo ecossistema.
              </p>
            </div>

            {/* Primary Action Button */}
            <div className="space-y-2 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full py-4 bg-[#25D366] hover:bg-[#20ba59] text-gray-950 font-black rounded-2xl text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-[#25D366]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                <span>Falar com Especialista no WhatsApp</span>
              </a>

              <div className="text-center pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-gray-500 hover:text-gray-300"
                >
                  Refazer diagnóstico
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const WhatsAppWidget = ({ onOpenQuiz }) => (
  <button
    type="button"
    onClick={onOpenQuiz}
    className="fixed bottom-6 right-4 sm:right-6 z-50 bg-[#0F1012] text-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.25)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center cursor-pointer group h-12 sm:h-14 px-3.5 sm:px-4 border border-white/10 backdrop-blur-md"
    aria-label="Falar com Especialista no WhatsApp"
  >
    <div className="relative flex items-center justify-center shrink-0 min-w-[24px]">
      <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 border-2 border-neutral-900 rounded-full animate-pulse" />
    </div>
    <span className="text-xs sm:text-sm font-semibold ml-2.5 sm:ml-3 whitespace-nowrap text-white">
      Falar com Especialista
    </span>
  </button>
);

// --- MAIN APP ---

function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  useEffect(() => {
    window.lenisInstance = new Lenis({
      duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), direction: 'vertical', smooth: true,
    });
    function raf(time) { window.lenisInstance.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => window.lenisInstance.destroy();
  }, []);

  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden bg-white text-gray-900 selection:bg-black selection:text-white font-sans">
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 transition-all">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="font-black text-xl md:text-2xl tracking-tighter cursor-pointer text-black" onClick={(e) => scrollToSection(e, '#hero')}>
            <span translate="no" className="notranslate">BIO MIND</span>
          </div>
          {/* Menu links agem como scrollers nas respectivas seções */}
          <nav className="hidden md:flex gap-10 text-sm font-bold text-gray-400 uppercase tracking-widest">
            <a href="#crm" onClick={(e) => scrollToSection(e, '#crm')} className="hover:text-black transition-colors">Produtos</a>
            <a href="#clinica" onClick={(e) => scrollToSection(e, '#clinica')} className="hover:text-black transition-colors">A Clínica</a>
            <a href="#footer" onClick={(e) => scrollToSection(e, '#footer')} className="hover:text-black transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      <HeroSection />
      <TheChaosSection />
      <HowItWorksSection />
      <InteractiveCRM />
      <CustomizationSection />
      <ROICalculator />
      <PremiumFooter />
      <WhatsAppWidget onOpenQuiz={() => setIsQuizOpen(true)} />
      <LeadQuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </main>
  );
}

export default App;
