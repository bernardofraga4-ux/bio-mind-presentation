import React, { useState } from 'react';

export default function CommandCenter() {
  const [activeTab, setActiveTab] = useState('agenda');

  const tabs = [
    { id: 'agenda', label: 'Agenda Inteligente' },
    { id: 'financeiro', label: 'Financeiro Integrado' },
    { id: 'ia', label: 'IA & Agente Cacau' },
    { id: 'fluxo', label: 'Fluxo de Pacientes' }
  ];

  const content = {
    agenda: (
      <div className="animate-fade-in">
        <h3 className="text-accent-gradient" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Calendário Dinâmico (One-Click)</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>Filtros precisos por profissionais (Endocrinologistas Pediátricos, Terapeutas) com indicadores visuais de status (Agendado, Finalizado).</p>
        <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(0,0,0,0.4)' }}>
          <h4 style={{ color: 'white', marginBottom: '1rem' }}>Ações Rápidas por Agendamento:</h4>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <span style={{ padding: '8px 16px', background: 'rgba(0, 240, 255, 0.1)', color: 'var(--accent-cyan)', border: '1px solid rgba(0,240,255,0.3)', borderRadius: '6px', fontSize: '0.95rem' }}>💸 Lançar Cobrança no Caixa</span>
            <span style={{ padding: '8px 16px', background: 'rgba(0, 240, 255, 0.1)', color: 'var(--accent-cyan)', border: '1px solid rgba(0,240,255,0.3)', borderRadius: '6px', fontSize: '0.95rem' }}>📱 Disparo de WhatsApp</span>
            <span style={{ padding: '8px 16px', background: 'rgba(0, 240, 255, 0.1)', color: 'var(--accent-cyan)', border: '1px solid rgba(0,240,255,0.3)', borderRadius: '6px', fontSize: '0.95rem' }}>🖨️ Imprimir Ficha Clínica</span>
          </div>
        </div>
      </div>
    ),
    financeiro: (
      <div className="animate-fade-in">
        <h3 className="text-accent-gradient" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Controle Absoluto de Caixa</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>Dashboard em tempo real focando no modelo particular. Automatize o processo burocrático e zere as falhas.</p>
        <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(0,0,0,0.4)' }}>
          <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--accent-purple)' }}>✓</span> <span><strong>Emissão em Lote:</strong> Notas Fiscais e Recibos gerados automaticamente.</span></li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--accent-purple)' }}>✓</span> <span><strong>Repasses Simplificados:</strong> Gestão automática de pagamento para a equipe médica.</span></li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--accent-purple)' }}>✓</span> <span><strong>Fechamento Unificado:</strong> Tudo integrado em um único painel.</span></li>
          </ul>
        </div>
      </div>
    ),
    ia: (
      <div className="animate-fade-in">
        <h3 className="text-accent-gradient" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Sua Recepção Orquestrada por IA</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>A Central de Comunicação Híbrida. IA triando contatos 24/7 e transferindo para humanos (recepção) apenas quando necessário.</p>
        <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(0,0,0,0.4)' }}>
          <div style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)' }}>
            <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Agente Cacau (Copiloto Global)</h4>
            <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>"Emitir NFs em lote de todos os atendimentos particulares de hoje."</p>
            <p style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', marginTop: '0.5rem' }}>↳ A IA realiza a ação diretamente no CRM.</p>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Botão de Intervenção</h4>
            <p style={{ color: 'var(--text-secondary)' }}>O atendente pode usar o botão <strong style={{ color: 'white' }}>"Assumir Conversa"</strong> para intervir no chat da IA a qualquer momento.</p>
          </div>
        </div>
      </div>
    ),
    fluxo: (
      <div className="animate-fade-in">
        <h3 className="text-accent-gradient" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Visão Total do Paciente</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>Kanbans visuais dinâmicos que mostram exatamente o ciclo de vida do paciente dentro da clínica em tempo real.</p>
        <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(0,0,0,0.4)' }}>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '1.5rem' }}>
            <div style={{ flex: 1, padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', textAlign: 'center' }}>
              <span style={{ color: 'var(--accent-blue)', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Fase 1</span>
              <strong style={{ color: 'white' }}>Triagem</strong>
            </div>
            <div style={{ flex: 1, padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', textAlign: 'center' }}>
              <span style={{ color: 'var(--accent-cyan)', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Fase 2</span>
              <strong style={{ color: 'white' }}>Em Espera</strong>
            </div>
            <div style={{ flex: 1, padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', textAlign: 'center' }}>
              <span style={{ color: 'var(--accent-purple)', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Fase 3</span>
              <strong style={{ color: 'white' }}>Atendimento</strong>
            </div>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Métricas precisas de tempo de espera e rastreamento de contatos recebidos x respondidos pela IA.</p>
        </div>
      </div>
    )
  };

  return (
    <section className="container" style={{ padding: '6rem 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>O Centro de Comando (Case CRM Mirian)</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>Descubra na prática como a <strong>Bio Mind</strong> transformou o caos de uma clínica (Multi Saúde) em um ecossistema inteligente, fluido e altamente rentável.</p>
      </div>

      <div className="glass-panel" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', minHeight: '400px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--glass-border)', padding: '2rem' }}>
          {tabs.map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{ 
                background: activeTab === tab.id ? 'rgba(255,255,255,0.05)' : 'transparent',
                border: 'none',
                color: activeTab === tab.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                padding: '16px 20px',
                textAlign: 'left',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1.05rem',
                fontWeight: activeTab === tab.id ? '600' : '400',
                transition: 'all 0.2s',
                marginBottom: '10px',
                borderLeft: activeTab === tab.id ? '4px solid var(--accent-cyan)' : '4px solid transparent'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div style={{ padding: '3rem' }}>
          {content[activeTab]}
        </div>
      </div>
    </section>
  )
}
