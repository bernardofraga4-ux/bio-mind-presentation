import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { 
  ArrowRight, Clock, ShieldCheck, Activity, Check, X, 
  Database, Workflow, Calculator, LayoutDashboard, CalendarDays,
  Users, BotMessageSquare, Search, MoreVertical, Banknote,
  Bell, FileText, Stethoscope, Briefcase, ChevronRight, PieChart,
  BarChart3, Upload, Filter, Plus, Phone, FileSignature, Receipt,
  Zap, Settings, Mail, MapPin, Globe
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

      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">Descubra</span>
        <div className="w-px h-8 md:h-12 bg-black"></div>
      </div>
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black mb-6">
          Como a mágica acontece.
        </h2>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
          Sem intervenção humana constante. O ecossistema Bio Mind opera como um cérebro invisível, conectando cada ponto da jornada do paciente.
        </p>
      </motion.div>

      <div className="relative">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gray-200 -translate-y-1/2 z-0"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
          {[
            { step: '01', icon: Zap, title: "Captura Invisível", desc: "O paciente entra em contato via WhatsApp, Instagram ou formulário. A IA entende a intenção, qualifica o lead e coleta os dados sem exigir que sua recepção digite uma palavra." },
            { step: '02', icon: Workflow, title: "Orquestração Ativa", desc: "O Agente Nexus encontra o melhor horário na agenda médica, cruza com as regras de convênio da sua clínica e bloqueia o horário no CRM de forma autônoma." },
            { step: '03', icon: BarChart3, title: "Resultado Executado", desc: "No momento do atendimento, o financeiro já contabiliza o valor. E no fim do dia, as notas fiscais são emitidas em lote. Você apenas visualiza o dashboard." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: idx * 0.2 }} viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl flex flex-col items-center text-center relative"
            >
              <div className="absolute -top-6 bg-black text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">Passo {item.step}</div>
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 mt-4 border border-gray-100">
                <item.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
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

const CRMDashboard = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
    <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-4">
      <div>
        <h3 className="text-lg md:text-xl font-bold text-gray-800">Boa tarde, Dr(a).</h3>
        <p className="text-xs md:text-sm text-gray-500">Visão geral da clínica e agendamentos de hoje.</p>
      </div>
      <div className="flex bg-gray-100 p-1 rounded-lg overflow-x-auto w-full sm:w-auto">
        {['Hoje', '7 Dias', 'Este Mês', 'Tudo'].map((f, i) => (
          <button key={i} className={`whitespace-nowrap px-3 md:px-4 py-1.5 text-xs md:text-sm font-medium rounded-md ${i === 1 ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black'}`}>
            {f}
          </button>
        ))}
      </div>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
      {[
        { label: 'Contatos', value: '452', color: 'text-blue-600' },
        { label: 'Resp. (IA)', value: '389', color: 'text-emerald-600' },
        { label: 'Recepção', value: '51', color: 'text-orange-500' },
        { label: 'Em Espera', value: '12', color: 'text-red-600' }
      ].map((kpi, i) => (
        <div key={i} className="p-3 md:p-5 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all flex flex-col gap-1 md:gap-2">
          <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider">{kpi.label}</span>
          <span className={`text-2xl md:text-3xl font-black ${kpi.color}`}>{kpi.value}</span>
        </div>
      ))}
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="col-span-1 lg:col-span-2 border border-gray-100 rounded-2xl bg-white p-4 md:p-6 shadow-sm overflow-hidden">
        <h4 className="text-xs md:text-sm font-bold text-gray-800 mb-6 flex items-center gap-2"><BarChart3 className="w-4 h-4"/> Fluxo (7 Dias)</h4>
        <div className="w-full h-32 md:h-48 flex items-end gap-2 md:gap-3">
          {[30, 40, 20, 50, 70, 90, 80].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end group">
              <div className="w-full bg-black/10 rounded-t-md group-hover:bg-black/20 transition-colors relative" style={{ height: `${h}%` }}></div>
              <span className="text-[8px] md:text-[10px] text-gray-400 text-center mt-2 font-medium">Dia {i+1}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1 border border-gray-100 rounded-2xl bg-white p-4 md:p-6 shadow-sm flex flex-col items-center lg:items-start text-center lg:text-left">
        <h4 className="text-xs md:text-sm font-bold text-gray-800 mb-6 flex items-center gap-2 w-full"><PieChart className="w-4 h-4"/> Base</h4>
        <div className="flex-1 flex items-center justify-center relative w-full">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-[6px] md:border-8 border-gray-100 border-t-emerald-400 border-r-blue-400 border-b-emerald-400 border-l-purple-400"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl md:text-2xl font-black text-gray-800">41%</span>
            <span className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase">Part.</span>
          </div>
        </div>
        <div className="mt-6 flex justify-center lg:justify-between w-full gap-4 text-[10px] md:text-xs font-medium text-gray-500">
          <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-400"></div> Amil (51%)</span>
          <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-400"></div> Sobam (5%)</span>
        </div>
      </div>
    </div>
  </motion.div>
);

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
              <th className="p-3 md:p-4">Convênio</th>
              <th className="p-3 md:p-4">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {[
              { n: 'Ana Clara Souza', t: '(11) 98888-7777', cpf: '123.456.789-00', c: 'Amil' },
              { n: 'Roberto Almeida', t: '(11) 99999-6666', cpf: '098.765.432-11', c: 'Particular' },
              { n: 'Fernanda Lima', t: '(11) 97777-5555', cpf: '111.222.333-44', c: 'Sobam' }
            ].map((p, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="p-3 md:p-4">
                  <p className="font-bold text-gray-900 text-xs md:text-sm">{p.n}</p>
                  <p className="text-[10px] md:text-xs text-gray-500">{p.t}</p>
                </td>
                <td className="p-3 md:p-4 text-xs md:text-sm text-gray-700">{p.cpf}</td>
                <td className="p-3 md:p-4"><span className="px-2 py-1 bg-gray-100 text-gray-700 text-[10px] md:text-xs font-bold rounded-md">{p.c}</span></td>
                <td className="p-3 md:p-4"><button className="text-blue-600 text-[10px] md:text-sm font-bold hover:underline">Ver Ficha</button></td>
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

const InteractiveCRM = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAI, setShowAI] = useState(false);

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'agenda', label: 'Agenda', icon: CalendarDays },
    { id: 'pacientes', label: 'Pacientes', icon: Users },
    { id: 'convenios', label: 'Convênios', icon: FileSignature },
    { id: 'faturamento', label: 'Faturamento', icon: Banknote },
    { id: 'notas', label: 'Notas', icon: Receipt },
    { id: 'equipe', label: 'Equipe', icon: Briefcase },
  ];

  return (
    <section id="crm" className="w-full bg-[#f4f5f7] py-20 md:py-32 px-4 md:px-8 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-4 py-1.5 mb-4 md:mb-6 text-[10px] md:text-xs font-bold tracking-widest text-black uppercase bg-white border border-gray-200 rounded-full shadow-sm">
            RÉPLICA FUNCIONAL
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black mb-4 md:mb-6">
            O coração da sua operação.
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Mais do que um CRM, um ecossistema vivo. Gerencie agendas, emita notas e interaja com a Inteligência Artificial no mesmo ambiente.
          </p>
        </motion.div>

        {/* Browser Mockup Wrapper */}
        <div className="w-full bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col md:flex-row h-[700px] md:h-[800px] relative">
          
          {/* Sidebar / Top Nav (Mobile) */}
          <div className="w-full md:w-64 bg-[#0D0E10] text-gray-400 p-2 md:p-4 flex flex-row md:flex-col flex-shrink-0 relative z-20 overflow-x-auto md:overflow-visible custom-scrollbar border-b md:border-b-0 border-white/10">
            <div className="hidden md:flex items-center gap-3 px-2 py-4 mb-6">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <div className="w-3 h-3 bg-black rounded-sm"></div>
              </div>
              <span className="font-black text-xl tracking-tighter text-white">BIO MIND</span>
            </div>
            
            <nav className="flex flex-row md:flex-col gap-2 md:gap-1 w-max md:w-auto p-2 md:p-0">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-auto md:w-full flex items-center md:justify-between px-3 md:px-3 py-2 md:py-3 rounded-lg md:rounded-xl transition-all text-xs md:text-sm font-semibold whitespace-nowrap ${
                    activeTab === tab.id 
                      ? 'bg-white/10 text-white shadow-inner' 
                      : 'hover:bg-white/5 hover:text-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </div>
                  {activeTab === tab.id && <ChevronRight className="hidden md:block w-4 h-4 opacity-50"/>}
                </button>
              ))}
            </nav>

            <div className="md:mt-auto pt-2 md:pt-4 relative flex items-center ml-auto md:ml-0 pr-2 md:pr-0">
              <button 
                onClick={() => setShowAI(!showAI)}
                className="w-auto md:w-full flex items-center justify-between gap-2 md:gap-3 px-3 py-2 md:px-4 md:py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white rounded-lg md:rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] group whitespace-nowrap"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <BotMessageSquare className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="font-bold text-xs md:text-sm">Nexus</span>
                </div>
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white animate-pulse"></div>
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 bg-[#FAFAFA] relative flex flex-col overflow-hidden min-w-0 h-full">
            {/* Topbar */}
            <header className="h-16 md:h-20 border-b border-gray-100 flex items-center justify-between px-4 md:px-8 bg-white/90 backdrop-blur-md z-10 flex-shrink-0">
              <h2 className="text-lg md:text-xl font-black text-gray-800 tracking-tight">
                {tabs.find(t => t.id === activeTab)?.label}
              </h2>
              <div className="flex items-center gap-4 md:gap-6 text-gray-400">
                <Search className="hidden sm:block w-4 h-4 md:w-5 md:h-5 hover:text-gray-800 cursor-pointer transition-colors" />
                <div className="relative">
                  <Bell className="w-4 h-4 md:w-5 md:h-5 hover:text-gray-800 cursor-pointer transition-colors" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 md:w-2.5 md:h-2.5 bg-red-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex items-center gap-3 pl-3 md:pl-4 border-l border-gray-200">
                  <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center">
                    <img src="https://ui-avatars.com/api/?name=Admin&background=random" alt="Admin" className="w-full h-full object-cover"/>
                  </div>
                </div>
              </div>
            </header>

            {/* Scrollable Content */}
            <div className="p-4 md:p-8 flex-1 overflow-y-auto">
              <AnimatePresence mode="wait">
                {activeTab === 'dashboard' && <CRMDashboard key="dashboard" />}
                {activeTab === 'agenda' && <CRMAgenda key="agenda" />}
                {activeTab === 'pacientes' && <CRMPacientes key="pacientes" />}
                {activeTab === 'faturamento' && <CRMFaturamento key="faturamento" />}
                {/* Fallback */}
                {['convenios', 'notas', 'equipe'].includes(activeTab) && (
                  <motion.div key="fallback" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center h-full text-center space-y-3 md:space-y-4 text-gray-400 p-4">
                    <Database className="w-10 h-10 md:w-12 md:h-12 mb-2 md:mb-4 opacity-50" />
                    <h3 className="text-lg md:text-xl font-bold text-gray-800">Módulo de {tabs.find(t => t.id === activeTab)?.label}</h3>
                    <p className="text-xs md:text-sm max-w-sm font-medium">Esta interface é uma simulação. O módulo completo contém dezenas de filtros e ações operacionais baseadas no sistema real.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* AI Assistant Drawer */}
            <AnimatePresence>
              {showAI && (
                <motion.div 
                  initial={{ x: '100%', opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: '100%', opacity: 0 }}
                  transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                  className="absolute top-0 right-0 w-full sm:w-96 h-full bg-white md:border-l border-gray-200 shadow-2xl flex flex-col z-30"
                >
                  <div className="p-4 md:p-6 border-b border-gray-100 flex items-center justify-between bg-black text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                        <BotMessageSquare className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm md:text-base">Agente Nexus</h4>
                        <span className="text-[8px] md:text-[10px] text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-1.5 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          Online & Ouvindo
                        </span>
                      </div>
                    </div>
                    <button onClick={() => setShowAI(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                      <X className="w-4 h-4 md:w-5 md:h-5 text-gray-400 hover:text-white" />
                    </button>
                  </div>
                  
                  <div className="flex-1 p-4 md:p-6 overflow-y-auto flex flex-col gap-4 md:gap-6 bg-[#FAFAFA]">
                    <div className="flex gap-2 md:gap-3">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                         <BotMessageSquare className="w-3 h-3 md:w-4 md:h-4 text-white" />
                      </div>
                      <div className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl rounded-tl-sm text-xs md:text-sm text-gray-700 shadow-sm border border-gray-100">
                        Olá! Identifiquei que há 4 faturamentos do Dr. Gabriel pendentes de emissão de Nota Fiscal hoje. Deseja que eu emita todas em lote?
                      </div>
                    </div>
                    
                    <div className="space-y-2 mt-2 md:mt-4">
                      <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest px-1 mb-2 md:mb-3">Comandos Rápidos</p>
                      {['Emitir NFs pendentes', 'Resumo Diário da Agenda', 'Exibir pacientes em atraso'].map((action, i) => (
                        <button key={i} className="w-full text-left px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg md:rounded-xl hover:border-emerald-500 hover:text-emerald-600 transition-colors shadow-sm">
                          {action}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 md:p-4 border-t border-gray-100 bg-white">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Comande o Agente..." 
                        className="w-full bg-gray-50 border border-gray-200 rounded-full py-3 md:py-4 pl-4 md:pl-5 pr-10 md:pr-12 text-xs md:text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                      />
                      <button className="absolute right-1.5 md:right-2 top-1/2 -translate-y-1/2 p-2 bg-black text-white rounded-full hover:bg-emerald-500 transition-colors">
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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
          <div className="font-black text-2xl tracking-tighter flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-black rounded-sm"></div>
            </div>
            BIO MIND
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

// --- MAIN APP ---

function App() {
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
          <div className="font-black text-xl md:text-2xl tracking-tighter flex items-center gap-2 md:gap-3 cursor-pointer" onClick={(e) => scrollToSection(e, '#hero')}>
            <div className="w-6 h-6 md:w-8 md:h-8 bg-black rounded-md md:rounded-lg flex items-center justify-center shadow-lg">
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-sm"></div>
            </div>
            BIO MIND
          </div>
          {/* Menu links agem como scrollers nas respectivas seções */}
          <nav className="hidden md:flex gap-10 text-sm font-bold text-gray-400 uppercase tracking-widest">
            <a href="#crm" onClick={(e) => scrollToSection(e, '#crm')} className="hover:text-black transition-colors">Produtos</a>
            <a href="#clinica" onClick={(e) => scrollToSection(e, '#clinica')} className="hover:text-black transition-colors">A Clínica</a>
            <a href="#footer" onClick={(e) => scrollToSection(e, '#footer')} className="hover:text-black transition-colors">Contato</a>
          </nav>
          {/* Remoção do botão de "Agendar Reunião" do Header, conforme pedido. No mobile, adicionado botão simples de menu hamburguer (visual apenas) se precisasse, mas ocultando por minimalismo */}
        </div>
      </header>

      <HeroSection />
      <TheChaosSection />
      <HowItWorksSection />
      <InteractiveCRM />
      <CustomizationSection />
      <ROICalculator />
      <PremiumFooter />
    </main>
  );
}

export default App;
