import React from 'react';

export default function InvisibleCost() {
  return (
    <section className="container" style={{ padding: '6rem 2rem' }}>
      <div className="grid-2" style={{ alignItems: 'center' }}>
        <div className="animate-fade-in">
          <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>O Gargalo Invisível<br/>na sua Clínica</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Enquanto sua equipe tenta oferecer um cuidado materno-infantil e humanizado como o foco da <strong>Clínica Loris</strong>, horas preciosas são perdidas nos bastidores com tarefas operacionais.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-secondary)' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <span style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginTop: '2px' }}>✖</span>
              <span><strong>Múltiplos sistemas desconectados:</strong> Um para agendamento, outro para prontuário, outro para cobrança.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <span style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginTop: '2px' }}>✖</span>
              <span><strong>O gargalo do WhatsApp:</strong> Pacientes esperando horas por uma resposta de triagem simples, afastando consultas particulares valiosas.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <span style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginTop: '2px' }}>✖</span>
              <span><strong>Financeiro caótico:</strong> Falhas em repasses, perda de recebíveis e processos manuais que exigem dupla digitação.</span>
            </li>
          </ul>
        </div>
        <div className="glass-panel animate-fade-in delay-200" style={{ padding: '2.5rem', borderLeft: '4px solid var(--accent-purple)' }}>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'white' }}>O Impacto Direto na Receita</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>Profissionais de saúde e recepcionistas atuando como "digitadores" em vez de focar no que realmente importa: <strong>O paciente e a saúde integral da família.</strong> Cada hora gasta enviando mensagens manuais é uma hora a menos gerando valor.</p>
        </div>
      </div>
    </section>
  )
}
