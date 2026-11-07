export interface EmergencyContact {
  number: string;
  name: string;
  scope: string;
  description: string;
  isTollFree: boolean;
  operatingHours: string;
}

export interface CareLevelGuide {
  level: string;
  name: string;
  color: string;
  summary: string;
  whenToGo: string[];
  whatTheyDo: string[];
  examples: string[];
}

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    number: '192',
    name: 'SAMU - Serviço de Atendimento Móvel de Urgência',
    scope: 'Emergências graves com risco de morte ou incapacitação imediata',
    description: 'Atendimento pré-hospitalar móvel 24h com médicos e socorristas. Orientação médica imediata por telefone antes da chegada da ambulância.',
    isTollFree: true,
    operatingHours: '24 horas / 7 dias por semana'
  },
  {
    number: '136',
    name: 'Disque Saúde - Ministério da Saúde',
    scope: 'Informações gerais de saúde pública, campanhas do SUS e denúncias',
    description: 'Central oficial de atendimento do SUS para dúvidas sobre vacinas, localização de postos de saúde, programas de medicamentos gratuitos e ouvidoria.',
    isTollFree: true,
    operatingHours: 'Segunda a sexta das 8h às 20h e sábados das 8h às 18h'
  },
  {
    number: '193',
    name: 'Corpo de Bombeiros',
    scope: 'Resgate de acidentes de trânsito, traumas físicos graves e afogamentos',
    description: 'Equipes de resgate especializadas para acidentes com vítimas presas em ferragens, choques elétricos, queimaduras extensas e desabamentos.',
    isTollFree: true,
    operatingHours: '24 horas / 7 dias por semana'
  },
  {
    number: '188',
    name: 'CVV - Centro de Valorização da Vida',
    scope: 'Apoio emocional e prevenção do suicídio',
    description: 'Atendimento confidencial e gratuito com voluntários treinados para ouvir com empatia qualquer pessoa em sofrimento emocional ou crise psicológica.',
    isTollFree: true,
    operatingHours: '24 horas / 7 dias por semana'
  }
];

export const CARE_LEVELS: CareLevelGuide[] = [
  {
    level: 'ubs',
    name: 'UBS / Posto de Saúde (Atenção Básica)',
    color: 'emerald',
    summary: 'Porta de entrada preferencial do sistema de saúde. Acompanha sua vida e trata 85% das queixas.',
    whenToGo: [
      'Sintomas leves que começaram há dias (coriza, tosse leve, dor de garganta moderada)',
      'Acompanhamento de hipertensão, diabetes, colesterol e pré-natal',
      'Vacinação de rotina para todas as faixas etárias',
      'Renovação de receitas de uso contínuo e encaminhamento para especialistas',
      'Curativos simples e retirada de pontos cirúrgicos'
    ],
    whatTheyDo: [
      'Consultas agendadas com médico de família e enfermeiro',
      'Distribuição de remédios básicos da Farmácia Popular e do SUS',
      'Acompanhamento contínuo no território'
    ],
    examples: ['Resfriado comum', 'Dor lombar crônica', 'Rinite alérgica', 'Check-up preventivo']
  },
  {
    level: 'upa',
    name: 'UPA 24h (Unidade de Pronto Atendimento)',
    color: 'amber',
    summary: 'Para problemas agudos e urgentes que surgiram de repente e não podem esperar agendamento.',
    whenToGo: [
      'Febre alta persistente que não cede com antitérmicos comuns',
      'Crises de asma ou bronquite com dificuldade moderada para respirar',
      'Cortes que precisam de sutura (pontos)',
      'Vômitos e diarreias com início de desidratação que não toleram líquidos',
      'Suspeita de dengue com dor no corpo e febre súbita',
      'Cólica renal (pedra nos rins) de forte intensidade'
    ],
    whatTheyDo: [
      'Exames de sangue rápidos, raio-X e eletrocardiograma imediato',
      'Leitos de observação clínica por até 24 horas',
      'Aplicação de soro venoso e medicações injetáveis'
    ],
    examples: ['Cólica de rim aguda', 'Corte com sangramento ativo', 'Febre alta em criança com vômito', 'Crise asmática']
  },
  {
    level: 'emergencia',
    name: 'Emergência Hospitalar / SAMU 192',
    color: 'rose',
    summary: 'Para situações críticas onde cada minuto conta para preservar a vida ou a função de órgãos.',
    whenToGo: [
      'Dor ou aperto no peito irradiando para o braço esquerdo ou queixo (suspeita de infarto)',
      'Dificuldade grave para respirar (sensação de asfixia ou lábios azuis/arroxeados)',
      'Boca torta, perda de força em um braço ou fala embolada (sinais de AVC)',
      'Convulsões ativas ou perda de consciência / desmaio sem acordar',
      'Dor de cabeça com início explosivo tipo a pior da vida',
      'Acidentes de trânsito graves com perda de sangue abundante'
    ],
    whatTheyDo: [
      'Cirurgias de emergência e leitos de UTI (Terapia Intensiva)',
      'Tomografia computadorizada de urgência e cateterismo cardíaco',
      'Suporte ventilatório avançado (intubação e ventilação mecânica)'
    ],
    examples: ['Infarto Agudo do Miocárdio', 'AVC (Acidente Vascular Cerebral)', 'Trauma craniano', 'Sepse grave']
  }
];
