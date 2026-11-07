export interface Symptom {
  id: string;
  name: string;
  category: 'respiratorio' | 'sistemico' | 'neurologico' | 'cardiotoracico' | 'digestivo' | 'muscular_pele';
  categoryLabel: string;
  description: string;
  isRedFlagSingle?: boolean;
  redFlagReason?: string;
  urgencyLevel?: 'urgente' | 'moderado' | 'leve';
}

export interface ConditionProfile {
  id: string;
  name: string;
  scientificName?: string;
  summary: string;
  category: string;
  matchedSymptomIds: string[];
  characteristicSymptoms: string[];
  typicalDuration: string;
  howItWorks: string;
  riskFactors: string[];
  safeHomeCare: string[];
  whatNOTToDo: string[];
  questionsForDoctor: string[];
  redFlags: string[];
  sourceReference: string;
}

export const SYMPTOM_CATEGORIES = [
  { id: 'todos', label: 'Todos os Sintomas' },
  { id: 'respiratorio', label: 'Respiratório & Garganta' },
  { id: 'sistemico', label: 'Geral & Sistêmico (Febre/Fadiga)' },
  { id: 'neurologico', label: 'Cabeça & Neurológico' },
  { id: 'cardiotoracico', label: 'Tórax & Coração' },
  { id: 'digestivo', label: 'Digestivo & Abdominal' },
  { id: 'muscular_pele', label: 'Músculos, Articulações & Pele' },
] as const;

export const SYMPTOMS_LIST: Symptom[] = [
  // Respiratório
  {
    id: 'tosse_seca',
    name: 'Tosse seca contínua',
    category: 'respiratorio',
    categoryLabel: 'Respiratório & Garganta',
    description: 'Tosse sem secreção ou expectoração, irritativa.',
    urgencyLevel: 'leve'
  },
  {
    id: 'tosse_produtiva',
    name: 'Tosse produtiva (com catarro)',
    category: 'respiratorio',
    categoryLabel: 'Respiratório & Garganta',
    description: 'Tosse acompanhada de muco ou secreção pulmonar.',
    urgencyLevel: 'moderado'
  },
  {
    id: 'falta_de_ar_grave',
    name: 'Falta de ar severa / Dificuldade para respirar',
    category: 'respiratorio',
    categoryLabel: 'Respiratório & Garganta',
    description: 'Sensação de sufocamento, respiração acelerada, incapacidade de completar frases.',
    isRedFlagSingle: true,
    redFlagReason: 'Pode indicar insuficiência respiratória aguda, pneumonia grave, crise asmática descompensada ou embolia. Requer atendimento médico imediato.',
    urgencyLevel: 'urgente'
  },
  {
    id: 'dor_garganta',
    name: 'Dor ou irritação na garganta',
    category: 'respiratorio',
    categoryLabel: 'Respiratório & Garganta',
    description: 'Sensação de arranhado, queimação ou dor ao engolir saliva ou alimentos.',
    urgencyLevel: 'leve'
  },
  {
    id: 'coriza_congestao',
    name: 'Coriza e congestão nasal',
    category: 'respiratorio',
    categoryLabel: 'Respiratório & Garganta',
    description: 'Nariz entupido, gotejamento nasal límpido ou amarelado e espirros frequentes.',
    urgencyLevel: 'leve'
  },
  {
    id: 'perda_olfato_paladar',
    name: 'Perda súbita de olfato (anosmia) ou paladar',
    category: 'respiratorio',
    categoryLabel: 'Respiratório & Garganta',
    description: 'Incapacidade de sentir cheiros ou sabores sem obstrução nasal severa.',
    urgencyLevel: 'moderado'
  },

  // Sistêmico / Geral
  {
    id: 'febre_alta',
    name: 'Febre alta (acima de 38,5°C)',
    category: 'sistemico',
    categoryLabel: 'Geral & Sistêmico',
    description: 'Temperatura corporal aferida no termômetro acima de 38,5°C.',
    urgencyLevel: 'moderado'
  },
  {
    id: 'febre_baixa',
    name: 'Febre baixa / Febrícula (37,3°C a 38°C)',
    category: 'sistemico',
    categoryLabel: 'Geral & Sistêmico',
    description: 'Sensação de aquecimento corporal discreto.',
    urgencyLevel: 'leve'
  },
  {
    id: 'calafrios',
    name: 'Calafrios intensos e tremores',
    category: 'sistemico',
    categoryLabel: 'Geral & Sistêmico',
    description: 'Sensação de frio intenso involuntária com contrações musculares rápidas.',
    urgencyLevel: 'moderado'
  },
  {
    id: 'fadiga_prostracao',
    name: 'Fadiga extrema / Prostração',
    category: 'sistemico',
    categoryLabel: 'Geral & Sistêmico',
    description: 'Cansaço avassalador que impede tarefas cotidianas básicas, fraqueza no leito.',
    urgencyLevel: 'moderado'
  },
  {
    id: 'dor_corpo',
    name: 'Dores musculares difusas (mialgia)',
    category: 'sistemico',
    categoryLabel: 'Geral & Sistêmico',
    description: 'Sensação de corpo dolorido, peso nas costas e membros.',
    urgencyLevel: 'leve'
  },

  // Cabeça & Neurológico
  {
    id: 'cefaleia_tensional',
    name: 'Dor de cabeça em aperto (leve a moderada)',
    category: 'neurologico',
    categoryLabel: 'Cabeça & Neurológico',
    description: 'Sensação de faixa apertando a testa ou nuca, geralmente suportável.',
    urgencyLevel: 'leve'
  },
  {
    id: 'cefaleia_latejante',
    name: 'Dor de cabeça latejante (unilateral, com náusea)',
    category: 'neurologico',
    categoryLabel: 'Cabeça & Neurológico',
    description: 'Dor pulsátil em um lado da cabeça, sensibilidade à luz (fotofobia) e ao som.',
    urgencyLevel: 'moderado'
  },
  {
    id: 'cefaleia_trovoada',
    name: 'Dor de cabeça súbita de intensidade máxima ("trovoada")',
    category: 'neurologico',
    categoryLabel: 'Cabeça & Neurológico',
    description: 'A pior dor de cabeça da vida surgida em segundos.',
    isRedFlagSingle: true,
    redFlagReason: 'Pode sinalizar hemorragia subaracnóidea ou evento vascular cerebral agudo. Emergência médica absoluta (SAMU 192).',
    urgencyLevel: 'urgente'
  },
  {
    id: 'rigidez_nuca',
    name: 'Rigidez na nuca / Dificuldade de encostar queixo no peito',
    category: 'neurologico',
    categoryLabel: 'Cabeça & Neurológico',
    description: 'Pescoço rígido com dor intensa ao tentar fletir para frente, frequentemente com febre.',
    isRedFlagSingle: true,
    redFlagReason: 'Sinal clássico de irritação meníngea (Meningite infecciosa). Requer avaliação em pronto-socorro imediatamente.',
    urgencyLevel: 'urgente'
  },
  {
    id: 'confusao_mental',
    name: 'Confusão mental, desorientação ou sonolência extrema',
    category: 'neurologico',
    categoryLabel: 'Cabeça & Neurológico',
    description: 'Dificuldade para reconhecer pessoas, fala desconexa ou incapacidade de se manter acordado.',
    isRedFlagSingle: true,
    redFlagReason: 'Pode sinalizar hipóxia grave, infecção sistêmica generalizada (sepse) ou AVC. Emergência médica imediata.',
    urgencyLevel: 'urgente'
  },
  {
    id: 'tontura_vertigem',
    name: 'Tontura súbita ou sensação de desequilíbrio',
    category: 'neurologico',
    categoryLabel: 'Cabeça & Neurológico',
    description: 'Sensação de ambiente rodando ou instabilidade postural.',
    urgencyLevel: 'moderado'
  },

  // Cardiotorácico
  {
    id: 'dor_peito_aperto',
    name: 'Dor ou aperto no peito (irradiando para braço ou mandíbula)',
    category: 'cardiotoracico',
    categoryLabel: 'Tórax & Coração',
    description: 'Sensação de peso opressivo no centro do peito, suor frio ou irradiação para o braço esquerdo.',
    isRedFlagSingle: true,
    redFlagReason: 'Possível síndrome coronariana aguda (Infarto Agudo do Miocárdio). Não espere: ligue SAMU 192 imediatamente.',
    urgencyLevel: 'urgente'
  },
  {
    id: 'palpitacoes',
    name: 'Palpitações ou batimentos cardíacos descompassados',
    category: 'cardiotoracico',
    categoryLabel: 'Tórax & Coração',
    description: 'Sensação de coração disparado, pulando batidas ou acelerado em repouso.',
    urgencyLevel: 'moderado'
  },
  {
    id: 'dor_toracica_ventilatoria',
    name: 'Dor torácica que piora ao inspirar profundamente',
    category: 'cardiotoracico',
    categoryLabel: 'Tórax & Coração',
    description: 'Dor tipo pontada ao encher o pulmão de ar ou ao tossir.',
    urgencyLevel: 'moderado'
  },

  // Digestivo & Abdominal
  {
    id: 'dor_abdominal_intensa_fid',
    name: 'Dor abdominal aguda forte (especialmente lado inferior direito)',
    category: 'digestivo',
    categoryLabel: 'Digestivo & Abdominal',
    description: 'Dor contínua e progressiva na barriga, dor ao soltar o abdômen subitamente.',
    isRedFlagSingle: true,
    redFlagReason: 'Pode indicar abdômen agudo cirúrgico (como apendicite ou colecistite). Requer pronto-socorro.',
    urgencyLevel: 'urgente'
  },
  {
    id: 'nausea_vomitos',
    name: 'Náuseas e vômitos frequentes',
    category: 'digestivo',
    categoryLabel: 'Digestivo & Abdominal',
    description: 'Dificuldade para reter líquidos por via oral devido a episódios repetidos de vômito.',
    urgencyLevel: 'moderado'
  },
  {
    id: 'diarreia_aquosa',
    name: 'Diarreia líquida frequente',
    category: 'digestivo',
    categoryLabel: 'Digestivo & Abdominal',
    description: 'Evacuações líquidas múltiplas ao dia com risco de desidratação.',
    urgencyLevel: 'moderado'
  },
  {
    id: 'azia_refluxo',
    name: 'Azia, queimação retroesternal e refluxo',
    category: 'digestivo',
    categoryLabel: 'Digestivo & Abdominal',
    description: 'Sensação de queimação que sobe do estômago em direção à garganta após refeições.',
    urgencyLevel: 'leve'
  },

  // Muscular, Pele & Outros
  {
    id: 'manchas_vermelhas_pele',
    name: 'Manchas vermelhas na pele (exantema / erupção cutânea)',
    category: 'muscular_pele',
    categoryLabel: 'Músculos & Pele',
    description: 'Pontos ou placas avermelhadas no corpo, associadas ou não a coceira.',
    urgencyLevel: 'moderado'
  },
  {
    id: 'dor_atras_olhos',
    name: 'Dor intensa atrás dos olhos (retro-orbital)',
    category: 'muscular_pele',
    categoryLabel: 'Músculos & Pele',
    description: 'Dor profunda ao movimentar os olhos, comum em arboviroses como Dengue.',
    urgencyLevel: 'moderado'
  },
  {
    id: 'artralgia_articulacoes',
    name: 'Dor intensa nas articulações (juntas inchadas ou doloridas)',
    category: 'muscular_pele',
    categoryLabel: 'Músculos & Pele',
    description: 'Dificuldade para dobrar dedos, punhos, joelhos ou tornozelos devido à dor articular.',
    urgencyLevel: 'moderado'
  }
];

export const EDUCATIONAL_CONDITIONS: ConditionProfile[] = [
  {
    id: 'covid19',
    name: 'COVID-19 (Infecção por SARS-CoV-2)',
    scientificName: 'Síndrome Respiratória Viral Aguda por Betacoronavírus',
    summary: 'Infecção viral transmitida por aerossóis e gotículas respiratórias. O quadro varia de sintomas leves semelhantes a resfriado até síndromes respiratórias que necessitam de suporte clínico.',
    category: 'Doença Respiratória Viral',
    matchedSymptomIds: ['tosse_seca', 'febre_alta', 'febre_baixa', 'fadiga_prostracao', 'dor_corpo', 'dor_garganta', 'coriza_congestao', 'perda_olfato_paladar', 'falta_de_ar_grave'],
    characteristicSymptoms: ['Tosse seca ou persistente', 'Fadiga marcante', 'Febre', 'Possível alteração de olfato/paladar', 'Dores no corpo'],
    typicalDuration: '5 a 14 dias (casos leves costumam estabilizar após a 1ª semana)',
    howItWorks: 'O vírus replica-se nas vias aéreas superiores e, em alguns casos, pode atingir os alvéolos pulmonares gerando processo inflamatório. A vacinação reduz drasticamente o risco de formas graves e hospitalização.',
    riskFactors: ['Idade acima de 60 anos', 'Doenças cardíacas e pulmonares prévias', 'Diabetes descompensado', 'Imunossupressão', 'Esquema vacinal desatualizado'],
    safeHomeCare: [
      'Isolamento relativo e uso de máscara em ambientes compartilhados com pessoas vulneráveis',
      'Hidratação oral abundante (água, chás e água de coco)',
      'Repouso domiciliar adequado para recuperação imunológica',
      'Monitoramento periódico da temperatura e da respiração',
      'Uso de oxímetro de pulso quando disponível (se saturação < 94%, procurar atendimento)'
    ],
    whatNOTToDo: [
      'NUNCA tomar antibióticos (como azitromicina) por conta própria: antibióticos NÃO matam vírus e criam superbactérias resistentes',
      'Não usar medicamentos sem comprovação científica ou coquetéis desregulamentados',
      'Não subestimar a falta de ar, achando que "é só cansaço"'
    ],
    questionsForDoctor: [
      'Existe indicação de antiviral oral de uso precoce para o meu grupo de risco?',
      'Minha saturação de oxigênio está em nível seguro?',
      'Quais sinais específicos indicam que devo me dirigir a uma UPA ou Pronto-Socorro?',
      'Quando posso suspender o isolamento com segurança para minha família?'
    ],
    redFlags: [
      'Falta de ar ou aperto no peito ao repousar',
      'Saturação de oxigênio abaixo de 94% em ar ambiente',
      'Lábios ou extremidades arroxeadas (cianose)',
      'Confusão mental, tontura grave ou desmaio',
      'Febre que não cede e persiste por mais de 5 dias consecutivos'
    ],
    sourceReference: 'Ministério da Saúde (Brasil), Protocolo Clínico de Manejo de COVID-19 & Organização Mundial da Saúde (OMS)'
  },
  {
    id: 'influenza_gripe',
    name: 'Gripe (Influenza)',
    scientificName: 'Infecção pelos vírus Influenza A ou B',
    summary: 'Infecção viral com início súbito e sintomas sistêmicos marcantes (febre alta, calafrios, dores musculares intensas e prostração). É muito mais agressiva que um resfriado comum.',
    category: 'Doença Respiratória Viral',
    matchedSymptomIds: ['febre_alta', 'calafrios', 'dor_corpo', 'fadiga_prostracao', 'tosse_seca', 'cefaleia_tensional', 'dor_garganta'],
    characteristicSymptoms: ['Início repentino (de uma hora para a outra)', 'Febre alta (38,5°C - 40°C)', 'Dor muscular difusa intensa', 'Fadiga profunda'],
    typicalDuration: '7 a 10 dias (a tosse e o cansaço podem perdurar por até duas semanas)',
    howItWorks: 'O vírus Influenza ataca o epitélio do trato respiratório e desencadeia uma resposta imune intensa com liberação de citocinas inflamatórias, o que explica a sensação de "corpo moído".',
    riskFactors: ['Idosos e crianças menores de 5 anos', 'Gestantes e puérperas', 'Portadores de asma, DPOC ou cardiopatias', 'Não vacinados na campanha anual'],
    safeHomeCare: [
      'Repouso absoluto nos primeiros 3 dias de febre',
      'Ingestão contínua de líquidos para repor perdas pela transpiração febril',
      'Lavagem nasal frequente com soro fisiológico a 0,9%',
      'Alimentação leve e fracionada'
    ],
    whatNOTToDo: [
      'Não usar antibióticos (a gripe é causada por vírus, não por bactérias)',
      'Não dar aspirina (ácido acetilsalicílico) a crianças ou jovens com quadro viral febril (risco de Síndrome de Reye)',
      'Não realizar esforço físico intenso durante o período febril'
    ],
    questionsForDoctor: [
      'Estou dentro da janela de 48 horas para avaliação de antiviral específico (Oseltamivir/Tamiflu) para grupos de risco?',
      'Há sinais de complicação bacteriana secundária nos meus pulmões ou ouvidos?',
      'Quando estarei apto para tomar a vacina da gripe anual após a melhora?'
    ],
    redFlags: [
      'Falta de ar progressiva ou respiração acelerada',
      'Febre que havia sumido por 2 dias e retorna subitamente muito alta com tosse purulenta',
      'Dor torácica tipo pontada ao respirar',
      'Pressão arterial muito baixa ou sensação iminente de desmaio'
    ],
    sourceReference: 'Sociedade Brasileira de Infectologia (SBI) & Centro de Informação em Saúde Silvestre / Fiocruz'
  },
  {
    id: 'resfriado_comum',
    name: 'Resfriado Comum (Rinovírus)',
    scientificName: 'Infecção Viral das Vias Aéreas Superiores',
    summary: 'Infecção viral leve autolimitada que atinge principalmente nariz e garganta. Raramente causa febre alta ou prostração severa, permitindo que a maioria das pessoas continue suas rotinas com sintomas brandos.',
    category: 'Doença Respiratória Viral Leve',
    matchedSymptomIds: ['coriza_congestao', 'dor_garganta', 'tosse_seca', 'febre_baixa'],
    characteristicSymptoms: ['Coriza abundante e espirros', 'Nariz entupido', 'Dor de garganta leve', 'Ausência de febre ou febrícula passageira'],
    typicalDuration: '3 a 7 dias',
    howItWorks: 'Mais de 200 tipos de vírus (principalmente rinovírus) causam resfriados. O sistema imunológico neutraliza o patógeno de forma espontânea em poucos dias.',
    riskFactors: ['Ambientes fechados com pouca ventilação', 'Contato com pessoas resfriadas', 'Privação de sono'],
    safeHomeCare: [
      'Lavagem nasal generosa com soro fisiológico a 0,9% várias vezes ao dia',
      'Inalação com vapor de água morna para descongestionamento das vias nasais',
      'Hidratação hídrica adequada e repouso noturno regular'
    ],
    whatNOTToDo: [
      'Não abusar de descongestionantes nasais tópicos (vasoconstritores) por mais de 3 a 5 dias, pois causam rinite medicamentosa rebote e podem elevar a pressão arterial',
      'Não usar antibióticos'
    ],
    questionsForDoctor: [
      'A secreção nasal amarelada significa infecção bacteriana ou é apenas a evolução normal dos leucócitos no resfriado?',
      'Quais medidas não medicamentosas ajudam no alívio da congestão nasal sem efeito rebote?'
    ],
    redFlags: [
      'Sintomas que pioram após 10 dias sem nenhuma melhora',
      'Dor forte e pressão intensa na face acompanhada de febre alta (suspeita de sinusite bacteriana)',
      'Dificuldade real para respirar'
    ],
    sourceReference: 'Associação Brasileira de Otorrinolaringologia e Cirurgia Cérvico-Facial (ABORL-CCF) & Mayo Clinic'
  },
  {
    id: 'dengue',
    name: 'Dengue (Arbovirose transmitida pelo Aedes aegypti)',
    scientificName: 'Infecção pelo vírus DENV (sorotipos 1, 2, 3 e 4)',
    summary: 'Doença febril aguda sistêmica transmitida pela picada da fêmea do mosquito Aedes aegypti. Apresenta fase febril inicial seguida de uma fase crítica em torno do 3º ao 7º dia, quando a febre cede e surgem os sinais de alarme de gravidade.',
    category: 'Arbovirose / Doença Infecciosa Sistêmica',
    matchedSymptomIds: ['febre_alta', 'dor_atras_olhos', 'dor_corpo', 'artralgia_articulacoes', 'manchas_vermelhas_pele', 'nausea_vomitos', 'fadiga_prostracao'],
    characteristicSymptoms: ['Febre alta súbita (39°C - 40°C)', 'Dor atrás dos olhos', 'Dores intensas nos ossos e músculos ("quebra-ossos")', 'Manchas vermelhas na pele', 'Ausência de tosse ou coriza'],
    typicalDuration: '7 a 10 dias (a fase crítica ocorre exatamente quando a febre começa a baixar)',
    howItWorks: 'O vírus infecta células de defesa e pode provocar aumento da permeabilidade dos vasos sanguíneos, levando à perda de plasma para os tecidos, queda de plaquetas e risco de choque.',
    riskFactors: ['Regiões com alta infestação de mosquitos', 'Infecção prévia por outro sorotipo de dengue (maior risco de dengue grave)', 'Idosos, gestantes e lactentes'],
    safeHomeCare: [
      'Hidratação oral volumosa e imediata: 60ml de líquidos por kg de peso ao dia (um terço com soro de reidratação oral e dois terços com água, água de coco ou sucos)',
      'Repouso absoluto e acompanhamento da diurese (urina deve estar clara)',
      'Consulta em posto de saúde ou UPA para coleta de hemograma e contagem de plaquetas'
    ],
    whatNOTToDo: [
      '🚨 NUNCA TOMAR ÁCIDO ACETILSALICÍLICO (AAS, Aspirina) NEM ANTI-INFLAMATÓRIOS NÃO ESTEROIDES (Ibuprofeno, Nimesulida, Cetoprofeno, Diclofenaco): estes medicamentos alteram a coagulação sanguínea e aumentam drasticamente o risco de hemorragias graves e morte',
      'Não achar que a melhora da febre significa cura: a fase de maior risco da dengue começa justamente no dia em que a febre diminui!'
    ],
    questionsForDoctor: [
      'Qual é o meu grupo de risco de classificação da Dengue (Grupo A, B, C ou D pelo Ministério da Saúde)?',
      'Preciso realizar hemograma de controle com que intervalo de horas/dias?',
      'Quanto volume exato de hidratação oral por dia é calculado para o meu peso corporal?'
    ],
    redFlags: [
      'Dor abdominal intensa, contínua e que não passa',
      'Vômitos persistentes (mais de 3 vezes em curto período)',
      'Sangramento de mucosas (gengivas, nariz, urina escura ou fezes pretas)',
      'Tontura ao levantar, sonolência excessiva ou irritabilidade',
      'Sensação de frio e pele pegajosa e pálida'
    ],
    sourceReference: 'Ministério da Saúde do Brasil - Guia de Manejo Clínico da Dengue & Fundação Oswaldo Cruz (Fiocruz)'
  },
  {
    id: 'cefaleia_enxaqueca',
    name: 'Cefaleia Tensional e Enxaqueca (Migrânea)',
    scientificName: 'Cefaleias Primárias',
    summary: 'Dores de cabeça comuns e incapacitantes decorrentes de tensão muscular/estresse ou disfunções neurovasculares crônicas. É fundamental distinguir as cefaleias primárias benignas daquelas secundárias a causas graves.',
    category: 'Condição Neurológica Comum',
    matchedSymptomIds: ['cefaleia_tensional', 'cefaleia_latejante', 'nausea_vomitos', 'tontura_vertigem'],
    characteristicSymptoms: ['Dor em aperto ou latejante', 'Intensidade variável', 'Sensibilidade à luminosidade e ruídos', 'Pode durar de horas a 3 dias'],
    typicalDuration: '4 a 72 horas por crise',
    howItWorks: 'Na enxaqueca há uma onda de despolarização neuronal no córtex com inflamação neurogênica nos vasos meníngeos. Na cefaleia tensional, contração mantida dos músculos do couro cabeludo e pescoço.',
    riskFactors: ['Estresse emocional', 'Privação de sono', 'Jejum prolongado', 'Excesso de telas sem pausas', 'Uso excessivo de analgésicos comuns (cefaleia por rebote)'],
    safeHomeCare: [
      'Repousar em ambiente escuro, silencioso e ventilado',
      'Compressas frias na testa ou mornas na região da nuca',
      'Manter hidratação regular e evitar pular refeições',
      'Diário da dor de cabeça (anotar gatilhos alimentares e rotina)'
    ],
    whatNOTToDo: [
      'Não tomar analgésicos mais de 2 a 3 vezes por semana de forma contínua: o uso crônico gera "cefaleia por abuso de medicação", piorando as crises',
      'Não ignorar alterações visuais súbitas, perda de força em um lado do corpo ou fala enrolada'
    ],
    questionsForDoctor: [
      'Minha dor tem perfil de enxaqueca ou cefaleia tensional?',
      'Existe indicação de tratamento preventivo diário em vez de apenas tratar as crises agudas?',
      'Estou sofrendo de efeito rebote por excesso de analgésicos simples?'
    ],
    redFlags: [
      'Dor de cabeça súbita com intensidade máxima em segundos ("pior dor da vida")',
      'Dor acompanhada de rigidez no pescoço e febre alta',
      'Dor acompanhada de fraqueza no braço ou perna, dormência ou boca torta (sinais de AVC)',
      'Dor de cabeça que surge pela primeira vez após os 50 anos de idade ou em pessoas com histórico de câncer'
    ],
    sourceReference: 'Sociedade Brasileira de Cefaleia (SBCe) & International Headache Society'
  },
  {
    id: 'gastroenterite_viral',
    name: 'Gastroenterite Viral Aguda (Virose Intestinal)',
    scientificName: 'Infecção por Rotavírus, Norovírus ou Adenovírus Entérico',
    summary: 'Inflamação da mucosa gástrica e intestinal transmitida por água ou alimentos contaminados ou contato fecal-oral. O maior perigo para a saúde é a desidratação rápida.',
    category: 'Doença Infecciosa Digestiva',
    matchedSymptomIds: ['diarreia_aquosa', 'nausea_vomitos', 'febre_baixa', 'dor_corpo', 'fadiga_prostracao'],
    characteristicSymptoms: ['Diarreia líquida súbita', 'Cólicas abdominais', 'Náuseas e vômitos', 'Sensação de fraqueza'],
    typicalDuration: '3 a 5 dias',
    howItWorks: 'O vírus lesa os enterócitos no intestino delgado, prejudicando a absorção de água e eletrólitos e acelerando os movimentos peristálticos.',
    riskFactors: ['Consumo de água sem tratamento', 'Falta de higiene das mãos antes das refeições', 'Creches e escolas'],
    safeHomeCare: [
      'Soro de Reidratação Oral (SRO) distribuído gratuitamente no SUS ou preparado com pó farmacêutico padronizado (oferecer em pequenos goles após cada evacuação líquida)',
      'Alimentação leve: arroz branco, batata cozida, sopa de legumes, banana maçã, maçã sem casca',
      'Evitar alimentos gordurosos, leite e derivados e bebidas gaseificadas ou com excesso de açúcar'
    ],
    whatNOTToDo: [
      'NUNCA tomar remédios para "travar o intestino" (antidiarreicos como loperamida) sem avaliação médica: isso retém toxinas e bactérias no organismo',
      'Não usar antibióticos para viroses intestinais comuns'
    ],
    questionsForDoctor: [
      'Existe indicação de suplementação de zinco (especialmente para crianças)?',
      'Quais são os sinais de que meu nível de hidratação está caindo perigosamente?',
      'Quando devo realizar exame de fezes para descartar infecção parasitária ou bacteriana?'
    ],
    redFlags: [
      'Presença de sangue visível ou fezes pretas tipo borra de café',
      'Incapacidade total de reter qualquer gole de líquido devido a vômitos incontroláveis',
      'Sinais clínicos de desidratação grave: boca e lábios muito secos, olhos fundos, ausência de urina por mais de 8 horas, tontura ao sentar ou levantar',
      'Febre alta persistente acompanhada de dor abdominal intensa contínua'
    ],
    sourceReference: 'Sociedade Brasileira de Pediatria (SBP) & Federação Brasileira de Gastroenterologia (FBG)'
  }
];

export interface RedFlagRule {
  id: string;
  conditionDescription: string;
  recommendedAction: string;
  priority: 'emergencia_192' | 'urgencia_upa' | 'ambulatorial_ubs';
}

export const CLINICAL_RED_FLAG_RULES: RedFlagRule[] = [
  {
    id: 'rf_cardiaco',
    conditionDescription: 'Dor no peito com aperto ou irradiação para braço/mandíbula',
    recommendedAction: 'Acione o SAMU (192) ou dirija-se imediatamente a uma Emergência Hospitalar. Não dirija sozinho.',
    priority: 'emergencia_192'
  },
  {
    id: 'rf_neurologico_grave',
    conditionDescription: 'Dor de cabeça tipo trovoada súbita, rigidez de nuca ou confusão mental',
    recommendedAction: 'Procure socorro de emergência hospitalar de imediato para investigação neurológica de urgência.',
    priority: 'emergencia_192'
  },
  {
    id: 'rf_respiratorio_critico',
    conditionDescription: 'Falta de ar severa ou incapacidade de completar frases',
    recommendedAction: 'Procure uma UPA ou hospital com suporte de oxigênio sem demora.',
    priority: 'emergencia_192'
  },
  {
    id: 'rf_dengue_alarme',
    conditionDescription: 'Dor abdominal forte contínua, vômitos incontroláveis ou sangramento na gengiva/urina',
    recommendedAction: 'Sinal de alarme clássico de dengue grave. Procure atendimento médico imediato em UPA ou Posto de Saúde.',
    priority: 'urgencia_upa'
  }
];
