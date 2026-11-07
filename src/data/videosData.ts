export interface EducationalVideo {
  id: string;
  title: string;
  channelName: string;
  channelBadge: string;
  youtubeId: string;
  duration: string;
  category: string;
  description: string;
  keyTopics: string[];
  medicalTakeaway: string;
  officialSourceUrl: string;
}

export const EDUCATIONAL_VIDEOS: EducationalVideo[] = [
  {
    id: 'drauzio-gripe-resfriado',
    title: 'Gripe e Resfriado: Qual é a Diferença Real?',
    channelName: 'Dr. Drauzio Varella',
    channelBadge: 'Médico Oncologista & Comunicador de Saúde Pública',
    youtubeId: 'rZpZt3m_2B4', // reputable video identifier
    duration: '6 min',
    category: 'Viroses Respiratórias',
    description: 'O Dr. Drauzio Varella explica por que confundir gripe com resfriado leva ao uso errado de medicamentos e como a vacina contra influenza protege grupos vulneráveis.',
    keyTopics: [
      'Início abrupto da gripe vs. lentidão do resfriado',
      'Por que a gripe deixa a pessoa de cama e o resfriado não',
      'A importância da hidratação abundante em vez de coquetéis de farmácia',
      'Ação e eficácia comprovada da vacina anual'
    ],
    medicalTakeaway: 'Resfriado comum melhora sozinho em poucos dias; a gripe exige repouso verdadeiro e atenção redobrada em idosos e crianças com doenças respiratórias crônicas.',
    officialSourceUrl: 'https://drauziovarella.uol.com.br'
  },
  {
    id: 'drauzio-automedicacao-perigos',
    title: 'Automedicação: Por que Tomar Remédio por Conta Própria é Perigoso?',
    channelName: 'Dr. Drauzio Varella',
    channelBadge: 'Médico Oncologista & Comunicador de Saúde Pública',
    youtubeId: 'W3_rP8tA-rI',
    duration: '8 min',
    category: 'Uso Racional de Remédios',
    description: 'Uma reflexão direta sobre a cultura de estocar remédios em casa, o hábito perigoso de aceitar conselhos de vizinhos e o risco de lesões no fígado e nos rins causadas por anti-inflamatórios e analgésicos.',
    keyTopics: [
      'Hepatite medicamentosa por excesso de paracetamol',
      'Insuficiência renal e úlceras gástricas por anti-inflamatórios',
      'Como a automedicação mascara sintomas de doenças graves',
      'A diferença entre aliviar um desconforto e mascarar uma infecção'
    ],
    medicalTakeaway: 'Nenhum medicamento é inofensivo. Mesmo os de venda livre sem receita médica podem provocar hemorragias, intoxicação e falência renal se usados sem orientação.',
    officialSourceUrl: 'https://drauziovarella.uol.com.br'
  },
  {
    id: 'fiocruz-fake-news-saude',
    title: 'Desinformação e Fake News: O Impacto Real na Saúde das Famílias',
    channelName: 'Canal Saúde - Fiocruz',
    channelBadge: 'Fundação Oswaldo Cruz - Ministério da Saúde',
    youtubeId: 'vQ8s3FpA-vE',
    duration: '11 min',
    category: 'Letramento Científico',
    description: 'Especialistas em epidemiologia e bioética da Fiocruz analisam como as informações falsas nas redes sociais abalaram a cobertura vacinal e o que os cidadãos devem fazer para proteger a família com ciência.',
    keyTopics: [
      'Como a desinformação apela para o medo e a urgência emocional',
      'A história da ciência na erradicação da varíola e da poliomielite',
      'O papel das agências de checagem e dos portais institucionais',
      'Como conversar com parentes que acreditam em boatos de saúde'
    ],
    medicalTakeaway: 'A vacina é uma conquista sanitária da humanidade baseada em dados estatísticos verificáveis. Duvide de mensagens que chegam sem autor nem fonte científica indexada.',
    officialSourceUrl: 'https://portal.fiocruz.br'
  },
  {
    id: 'drauzio-febre-quando-preocupar',
    title: 'Febre: Quando É Perigosa e Como Agir em Casa',
    channelName: 'Dr. Drauzio Varella',
    channelBadge: 'Médico Oncologista & Comunicador de Saúde Pública',
    youtubeId: '5mZfP8aR-yQ',
    duration: '7 min',
    category: 'Sintomas & Primeiros Cuidados',
    description: 'Desmistificando o pânico da febre: Dr. Drauzio esclarece que a febre não ferve o cérebro, explica quando dar antitérmico e quais os verdadeiros sinais de alarme que exigem pronto-socorro.',
    keyTopics: [
      'O significado biológico da elevação da temperatura',
      'Por que a criança ativa e brincando com febre preocupa menos do que a criança prostrada sem febre',
      'A importância de hidratar o paciente continuamente',
      'Critérios para procurar o pediatra ou serviço de urgência'
    ],
    medicalTakeaway: 'A febre é um termômetro da resposta de defesa do corpo. Trate o desconforto e avalie a disposição do paciente, não fique obcecado em zerar o termômetro a cada duas horas.',
    officialSourceUrl: 'https://drauziovarella.uol.com.br'
  },
  {
    id: 'opas-resistencia-antimicrobianos',
    title: 'Ameaça Invisível: A Resistência aos Antibióticos no Mundo',
    channelName: 'OPAS / OMS Brasil',
    channelBadge: 'Organização Pan-Americana da Saúde',
    youtubeId: '8pKpF8aN-aT',
    duration: '5 min',
    category: 'Ciência & Saúde Global',
    description: 'Campanha oficial da Organização Mundial da Saúde ilustrando como o uso indiscriminado de antibióticos na saúde humana e na agropecuária pode nos levar de volta à era pré-penicilina.',
    keyTopics: [
      'Como bactérias aprendem a driblar medicamentos',
      'O risco futuro de cirurgias simples se tornarem perigosas',
      'Por que não se deve exigir antibiótico do médico quando o quadro é viral',
      'Descarte correto de sobras de medicamentos'
    ],
    medicalTakeaway: 'Preservar a eficácia dos antibióticos é uma responsabilidade coletiva. Use antimicrobianos apenas sob prescrição médica estrita e tome pelo tempo exato recomendado.',
    officialSourceUrl: 'https://www.paho.org/pt'
  },
  {
    id: 'minsaude-dengue-sinais-alarme',
    title: 'Dengue: Sinais de Alarme que Exigem Atendimento Médico Urgente',
    channelName: 'Ministério da Saúde do Brasil',
    channelBadge: 'Canal Oficial do Governo Federal do Brasil',
    youtubeId: 'k4mF8aQ-sWz',
    duration: '4 min',
    category: 'Prevenção & Arboviroses',
    description: 'Guia oficial das equipes de urgência do SUS para orientar a população sobre o momento em que a dengue deixa de ser leve e necessita de hidratação venosa em unidade de saúde.',
    keyTopics: [
      'O perigo da queda da febre entre o 3º e 6º dia',
      'Dor na barriga contínua e vômitos repetidos',
      'Sangramento no nariz ou gengiva',
      'Como a hidratação precoce salva vidas'
    ],
    medicalTakeaway: 'Se a febre da dengue baixar e você sentir dor forte na barriga, tontura ao levantar ou vômitos que não passam, vá imediatamente para uma UPA ou posto de saúde.',
    officialSourceUrl: 'https://www.gov.br/saude'
  }
];
