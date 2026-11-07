export interface HealthArticle {
  id: string;
  title: string;
  subtitle: string;
  category: 'Evidência & Pesquisa' | 'Doenças Infecciosas' | 'Uso Racional de Medicamentos' | 'Saúde Pública & SUS' | 'Neurologia & Sintomas';
  readTime: string;
  sourceOrganization: string;
  sourceUrl: string;
  publishedDate: string;
  image: string;
  imageAlt: string;
  summary: string;
  keyPoints: string[];
  mythVsFact: {
    myth: string;
    fact: string;
    explanation: string;
  }[];
  contentSections: {
    heading: string;
    body: string;
  }[];
  whenToSeeDoctor: string[];
  academicReferences: {
    citation: string;
    institution: string;
    url: string;
  }[];
}

export const ARTICLES_DATA: HealthArticle[] = [
  {
    id: 'diferencas-gripe-covid-resfriado-dengue',
    title: 'Gripe, Resfriado, COVID-19 e Dengue: Como a Ciência Médica Diferencia Cada Quadro',
    subtitle: 'Aprenda os padrões clínicos observados por infectologistas e entenda por que o diagnóstico diferencial correto salva vidas.',
    category: 'Doenças Infecciosas',
    readTime: '6 min de leitura',
    sourceOrganization: 'Ministério da Saúde (Brasil) & Fundação Oswaldo Cruz (Fiocruz)',
    sourceUrl: 'https://portal.fiocruz.br',
    publishedDate: 'Atualizado com Diretrizes Oficiais',
    image: '/src/assets/images/respiratory_health_guide_1791919463349.jpg',
    imageAlt: 'Diagrama anatômico das vias aéreas e pulmões ilustrando manifestações de viroses respiratórias',
    summary: 'Embora compartilhem febre e mal-estar, cada uma dessas infecções possui perfil temporal e marcadores orgânicos específicos. Entenda o que observar antes da consulta médica.',
    keyPoints: [
      'Resfriado é gradual e restrito às vias aéreas superiores, raramente causando febre alta em adultos.',
      'A Gripe (Influenza) surge subitamente com febre alta (38,5°C+), prostração acentuada e dores musculares intensas.',
      'COVID-19 pode envolver sintomas respiratórios e sistêmicos, com risco de queda silenciosa na oxigenação.',
      'A Dengue clássica NÃO causa sintomas respiratórios típicos (sem tosse ou coriza), caracterizando-se por dor atrás dos olhos e febre súbita.',
      'O uso de anti-inflamatórios (como aspirina e ibuprofeno) é expressamente contraindicado na suspeita de dengue por risco de sangramentos fatais.'
    ],
    mythVsFact: [
      {
        myth: 'Toda febre com dor no corpo pode ser tratada com anti-inflamatório caseiro.',
        fact: 'Na presença de suspeita de Dengue, anti-inflamatórios elevam drasticamente o risco de hemorragias.',
        explanation: 'Medicamentos como Ibuprofeno, Cetoprofeno e Aspirina interferem nas plaquetas e na coagulação, podendo transformar um caso brando de dengue em hemorrágico.'
      },
      {
        myth: 'Resfriado não curado vira pneumonia bacteriana automaticamente.',
        fact: 'Resfriados e pneumonias são entidades diferentes causadas por germes distintos.',
        explanation: 'Embora uma infecção viral possa fragilizar a mucosa respiratória e permitir que uma bactéria oportunista se instale secundariamente, o resfriado em si não se "transforma" em pneumonia.'
      }
    ],
    contentSections: [
      {
        heading: '1. O início dos sintomas: Súbito vs. Gradual',
        body: 'A cronologia do aparecimento dos sintomas é a primeira pista que os médicos avaliam na anamnese. O resfriado costuma começar com uma sensação discreta de garganta arranhando, progredindo ao longo de 2 a 3 dias para coriza e espirros. Já a Influenza (gripe) tem instalação abrupta: em questão de horas o indivíduo passa do estado saudável para febre alta, calafrios intensos e incapacidade de sair da cama.'
      },
      {
        heading: '2. Dengue: A infecção que não ataca os pulmões',
        body: 'Um dos maiores erros da automedicação pós-pandemia foi tratar qualquer febre como gripe. Na dengue clássica, não há tosse, coriza nem dor de garganta. O paciente apresenta febre alta súbita, dor retro-orbital (atrás dos olhos ao movimentá-los) e dores articulares descritas historicamente como "febre quebra-ossos".'
      },
      {
        heading: '3. A Fase Crítica da Dengue: Cuidado entre o 3º e o 7º dia',
        body: 'Segundo os protocolos da Fiocruz e do Ministério da Saúde, a dengue é perigosa justamente quando a febre começa a cair (em torno do 4º ao 6º dia). É nesse momento que o aumento da permeabilidade capilar pode causar extravasamento de plasma, choque circulatório e hemorragias.'
      }
    ],
    whenToSeeDoctor: [
      'Presença de falta de ar ou respiração rápida em repouso',
      'Dor abdominal contínua e vômitos repetidos',
      'Febre que dura mais de 3 a 4 dias consecutivos',
      'Sangramento no nariz, gengivas ou pontos avermelhados na pele (petéquias)'
    ],
    academicReferences: [
      {
        institution: 'Ministério da Saúde - Secretaria de Vigilância em Saúde',
        citation: 'Dengue: Diagnóstico e Manejo Clínico - Adulto e Criança (6ª edição, Brasília, 2024).',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dengue'
      },
      {
        institution: 'Fundação Oswaldo Cruz (Fiocruz)',
        citation: 'Boletim InfoGripe: Vigilância das Síndromes Respiratórias Agudas Graves no Brasil.',
        url: 'https://portal.fiocruz.br/noticia/infogripe'
      }
    ]
  },
  {
    id: 'perigo-antibioticos-resistencia-bacteriana',
    title: 'O Perigo dos Antibióticos para Vírus e a Crise da Resistência Antimicrobiana',
    subtitle: 'Por que tomar antibiótico para gripe ou resfriado é inútil, perigoso para sua flora intestinal e ameaça a saúde pública mundial.',
    category: 'Uso Racional de Medicamentos',
    readTime: '7 min de leitura',
    sourceOrganization: 'Organização Mundial da Saúde (OMS) & Sociedade Brasileira de Infectologia (SBI)',
    sourceUrl: 'https://www.who.int',
    publishedDate: 'Diretriz de Uso Racional de Medicamentos',
    image: '/src/assets/images/evidence_science_lab_1791919464531.jpg',
    imageAlt: 'Cientista em laboratório de microbiologia analisando resistência bacteriana com microscópio óptico',
    summary: 'A OMS classifica a resistência bacteriana como uma das dez maiores ameaças à saúde pública global. Entenda a diferença biológica entre vírus e bactérias.',
    keyPoints: [
      'Antibióticos atuam exclusivamente contra bactérias, destruindo suas paredes celulares ou inibindo seu maquinário biológico.',
      'Vírus não possuem parede bacteriana nem metabolismo próprio; antibióticos têm ZERO efeito sobre infecções virais.',
      'Tomar antibiótico sem necessidade elimina bactérias benéficas da microbiota intestinal e seleciona linhagens bacterianas mutantes super-resistentes.',
      'Catarro amarelado ou esverdeado NÃO é sinônimo de infecção bacteriana: é uma reação fisiológica normal de glóbulos brancos em combate viral.'
    ],
    mythVsFact: [
      {
        myth: 'Se o catarro está verde ou amarelo, eu preciso de um antibiótico forte.',
        fact: 'A cor verde do catarro vem da enzima mieloperoxidase dos neutrófilos e é natural em viroses comuns.',
        explanation: 'Durante uma infecção viral normal, o corpo mobiliza neutrófilos para as vias aéreas. A enzima desses glóbulos brancos confere o tom amarelado ou esverdeado, não indicando por si só que há uma bactéria agindo.'
      },
      {
        myth: 'Se eu parar de tomar o antibiótico assim que a dor sumir, não tem problema.',
        fact: 'Interromper o ciclo prescrito deixa vivas as bactérias mais resistentes, provocando recidivas graves.',
        explanation: 'O tratamento prescrito por um médico deve cumprir a dosagem e tempo exatos. Interromper precocemente facilita a seleção de cepas resistentes.'
      }
    ],
    contentSections: [
      {
        heading: '1. Vírus vs. Bactéria: Organismos biológicos fundamentalmente distintos',
        body: 'Uma bactéria é um microrganismo celular vivo e independente, capaz de sintetizar suas proteínas e se reproduzir. Os antibióticos foram desenhados para atingir alvos específicos das bactérias (como a parede celular de peptidoglicano ou os ribossomos 70S). Os vírus, por sua vez, são partículas de material genético (DNA ou RNA) encapsuladas em proteínas que precisam invadir uma célula humana para se replicar. Medicamentos antibacterianos simplesmente não possuem alvo biológico nos vírus.'
      },
      {
        heading: '2. O fenômeno das "Superbactérias"',
        body: 'Cada vez que alguém toma um antibiótico para uma dor de garganta de origem viral ou resfriado, o remédio banha todas as bactérias do organismo. As mais frágeis morrem, mas aquelas que possuem mutações de resistência sobrevivem, multiplicam-se e transmitem essa resistência para outras bactérias.'
      },
      {
        heading: '3. Como apoiar o corpo em viroses sem cair na automedicação',
        body: 'Em infecções virais comuns, a conduta respaldada pelas academias de medicina é o suporte clínico sintomático: hidratação intensa, lavagem nasal com solução salina a 0,9%, repouso adequado e alimentação equilibrada, permitindo que a imunidade inata e adaptativa complete o ciclo de defesa natural.'
      }
    ],
    whenToSeeDoctor: [
      'Febre alta que ressurge após dias de aparente melhora com tosse produtiva espessa',
      'Dor torácica ao inspirar profundamente acompanhada de falta de ar',
      'Dor unilateral grave na face associada a febre contínua e secreção purulenta por mais de 10 dias'
    ],
    academicReferences: [
      {
        institution: 'World Health Organization (WHO)',
        citation: 'Global Action Plan on Antimicrobial Resistance. World Health Assembly Resolution 68.7.',
        url: 'https://www.who.int/initiatives/antimicrobial-resistance'
      },
      {
        institution: 'Sociedade Brasileira de Infectologia (SBI)',
        citation: 'Posicionamento Oficial sobre o Uso Racional de Antimicrobianos na Atenção Primária.',
        url: 'https://infectologia.org.br'
      }
    ]
  },
  {
    id: 'febre-mecanismo-biologico-quando-alertar',
    title: 'Febre Não é Inimiga: O Mecanismo Biológico de Defesa e Quando Ela Exige Alerta',
    subtitle: 'Por que o aumento de temperatura corporal é uma resposta orquestrada pelo cérebro para proteger você — e quando procurar auxílio médico.',
    category: 'Evidência & Pesquisa',
    readTime: '5 min de leitura',
    sourceOrganization: 'Sociedade Brasileira de Pediatria (SBP) & Associação Médica Brasileira (AMB)',
    sourceUrl: 'https://www.sbp.com.br',
    publishedDate: 'Guia Educativo Baseado em Evidências',
    image: '/src/assets/images/hero_medical_consultation_1791919462426.jpg',
    imageAlt: 'Médica examinando paciente e explicando o funcionamento térmico do organismo',
    summary: 'A chamada "fobia de febre" leva pais e adultos ao desespero e ao uso inadequado de medicações. A ciência médica ensina a avaliar o estado geral do paciente, e não apenas o número no termômetro.',
    keyPoints: [
      'A febre é uma resposta regulada pelo hipotálamo estimulada por citocinas como IL-1, IL-6 e TNF-alfa.',
      'Temperaturas elevadas (até 39°C) inibem a replicação de diversos vírus e aceleram a mobilização de glóbulos brancos.',
      'O número absoluto no termômetro não é o fator mais importante: o estado geral, a lucidez e a capacidade de hidratação do paciente são os sinais vitais que guiam a conduta médica.',
      'Bebês menores de 3 meses com febre (acima de 37,8°C) devem SEMPRE ser avaliados por um médico em pronto atendimento imediato.'
    ],
    mythVsFact: [
      {
        myth: 'Febre de 39°C ferve o cérebro e causa sequelas neurológicas permanentes.',
        fact: 'A febre fisiológica gerada por infecções raramente ultrapassa 40,5°C devido ao termostato regulador hipotalâmico.',
        explanation: 'O centro termorregulador do cérebro possui mecanismos biológicos de proteção. Danos neurológicos ocorrem em hipertermia maligna ou insolação por falha do sistema, e não na febre infecciosa regulada comum.'
      },
      {
        myth: 'Preciso dar banho gelado ou passar álcool na pele de quem está com febre.',
        fact: 'Banhos frios provocam tremores que aumentam a temperatura interna e álcool na pele causa intoxicação.',
        explanation: 'A Sociedade Brasileira de Pediatria contraindica expressamente fricções com álcool (absorção tóxica pela pele) e banhos gelados. Se houver desconforto, banho morno relaxante e roupas leves são indicados.'
      }
    ],
    contentSections: [
      {
        heading: '1. O que acontece no corpo durante a febre?',
        body: 'Quando microrganismos entram em contato com células de defesa, estas liberam substâncias chamadas pirógenos endógenos. Essas moléculas chegam ao hipotálamo (o "termostato" cerebral), que temporariamente reprograma a temperatura de referência do corpo para um patamar mais elevado. Para atingir essa nova meta, o corpo contrai vasos periféricos (sensação de pés e mãos frios) e gera calafrios.'
      },
      {
        heading: '2. Tratar o desconforto, não o número',
        body: 'As diretrizes médicas atuais enfatizam que o objetivo dos antitérmicos não é zerar a temperatura a qualquer custo, mas sim aliviar o mal-estar do indivíduo para que consiga ingerir líquidos e descansar confortavelmente.'
      }
    ],
    whenToSeeDoctor: [
      'Bebês menores de 3 meses com temperatura retal ou axilar ≥ 37,8°C',
      'Febre persistente que não cede e ultrapassa 72 horas em adultos ou crianças',
      'Febre acompanhada de manchas roxas ou vermelhas na pele que não somem ao pressionar um copo transparente',
      'Rigidez na nuca ou sonolência da qual a pessoa não desperta'
    ],
    academicReferences: [
      {
        institution: 'Sociedade Brasileira de Pediatria (SBP)',
        citation: 'Documento Científico do Departamento de Pediatria Ambulatorial: Abordagem da Febre na Criança.',
        url: 'https://www.sbp.com.br'
      },
      {
        institution: 'American Academy of Pediatrics (AAP)',
        citation: 'Fever and Antipyretic Use in Children. Pediatrics Clinical Guideline.',
        url: 'https://publications.aap.org'
      }
    ]
  },
  {
    id: 'como-identificar-fake-news-em-saude',
    title: 'Como Reconhecer Desinformação em Saúde e Evitar Riscos Pós-Pandemia',
    subtitle: 'Um guia prático de letramento científico para identificar promessas milagrosas, correntes de WhatsApp e falsos tratamentos.',
    category: 'Saúde Pública & SUS',
    readTime: '6 min de leitura',
    sourceOrganization: 'Fiocruz - Projeto Saúde & Ciência com a População & OPAS/OMS',
    sourceUrl: 'https://portal.fiocruz.br',
    publishedDate: 'Educação em Saúde Pública',
    image: '/src/assets/images/preventive_care_clinic_1791919463340.jpg',
    imageAlt: 'Profissional de saúde dialogando com cidadão em ambiente acolhedor da atenção primária',
    summary: 'A proliferação de boatos e terapias não comprovadas custou milhares de vidas na última década. Aprenda a verificar fontes médicas confiáveis e a filtrar a verdade.',
    keyPoints: [
      'Desconfie de produtos ou chás que prometem "cura para todas as doenças" ou "desintoxicação celular instantânea".',
      'Cheque sempre se o autor tem registro profissional ativo (CRM/Conselho) e se a recomendação está em diretrizes de sociedades médicas reconhecidas.',
      'A ciência médica trabalha com consenso clínico e ensaios clínicos controlados randomizados, não com depoimentos isolados de redes sociais.',
      'O Ministério da Saúde disponibiliza canais oficiais de checagem gratuita e o Disque Saúde 136 para dúvidas da população.'
    ],
    mythVsFact: [
      {
        myth: 'Se um médico em um vídeo no TikTok disse que certa planta cura câncer ou diabetes, deve ser verdade.',
        fact: 'A opinião individual isolada de um profissional não substitui o consenso de estudos clínicos com milhares de pessoas.',
        explanation: 'Na medicina baseada em evidências, a opinião pessoal de um especialista isolado situa-se na base da pirâmide científica; no topo estão as revisões sistemáticas e ensaios clínicos robustos revisados por pares.'
      },
      {
        myth: 'A indústria farmacêutica esconde a cura das doenças para vender remédios todo dia.',
        fact: 'Doenças complexas como hipertensão e diabetes têm causas multifatoriais; vacinas e tratamentos curativos comprovados salvaram milhões de vidas.',
        explanation: 'Descobrir curas definitivas rende prêmios Nobel e reconhecimento mundial. Teoria da conspiração em saúde costuma ser porta de entrada para a venda de produtos sem controle sanitário da ANVISA.'
      }
    ],
    contentSections: [
      {
        heading: '1. O que é a Infodemia e seus riscos reais',
        body: 'A OMS cunhou o termo "infodemia" para descrever a sobreabundância de informações — algumas precisas e muitas falsas — que torna difícil para os cidadãos encontrarem fontes confiáveis. Na pandemia de COVID-19, o uso indiscriminado de substâncias sem eficácia comprovada causou intoxicações hepáticas e adiou a procura por socorro hospitalar no momento crítico.'
      },
      {
        heading: '2. O checklist dos 4 passos para checar qualquer notícia de saúde',
        body: '1) Qual é a fonte primária citada? Há link para um artigo científico publicado em revista indexada (PubMed, Scielo, Lancet)?\n2) O tom do texto apela para o medo ("Cuidado, os médicos não querem que você saiba disso") ou para o milagre?\n3) Os órgãos oficiais (ANVISA, Fiocruz, OMS, Ministério da Saúde) corroboram a informação?\n4) A informação foi confirmada por agências de checagem confiáveis?'
      }
    ],
    whenToSeeDoctor: [
      'Antes de iniciar qualquer suplemento, fitoterápico concentrado ou interromper medicamentos de uso contínuo para hipertensão ou diabetes',
      'Sempre que uma informação da internet gerar ansiedade ou dúvida sobre sua saúde'
    ],
    academicReferences: [
      {
        institution: 'Fundação Oswaldo Cruz (Fiocruz)',
        citation: 'Observatório Covid-19 e Desinformação em Saúde Pública no Brasil.',
        url: 'https://portal.fiocruz.br'
      },
      {
        institution: 'Organização Pan-Americana da Saúde (OPAS/OMS)',
        citation: 'Entendendo a Infodemia e a Importância da Comunicação de Risco em Emergências Sanitárias.',
        url: 'https://www.paho.org/pt'
      }
    ]
  },
  {
    id: 'cefaleias-sinais-alerta-pronto-atendimento',
    title: 'Dor de Cabeça: Como Diferenciar Cefaleia Comum de Casos que Exigem Emergência',
    subtitle: 'Compreenda a mnemônica médica dos sinais de alerta (SNOOP) e saiba quando uma dor de cabeça exige tomografia imediata.',
    category: 'Neurologia & Sintomas',
    readTime: '6 min de leitura',
    sourceOrganization: 'Sociedade Brasileira de Cefaleia (SBCe)',
    sourceUrl: 'https://sbce.med.br',
    publishedDate: 'Protocolo de Emergências Neurológicas',
    image: '/src/assets/images/respiratory_health_guide_1791919463349.jpg',
    imageAlt: 'Ilustração médica anatômica da cabeça e sistema nervoso central',
    summary: 'A vasta maioria das dores de cabeça são cefaleias primárias benignas, mas certas características ("Red Flags") indicam sangramentos, infecções ou massas intracranianas.',
    keyPoints: [
      'Cefaleia tensional e enxaqueca são dores primárias: dolorosas e incômodas, mas que não destroem o tecido cerebral.',
      'Cefaleias secundárias decorrem de outra doença subjacente, como meningite, aneurisma roto ou sinusite severa.',
      'A dor de cabeça súbita com intensidade máxima em segundos ("Thunderclap" ou trovoada) é emergência absoluta e exige SAMU 192.',
      'O uso excessivo de analgésicos comuns por mais de 10 a 15 dias por mês transforma dores esporádicas em dor crônica diária por efeito rebote.'
    ],
    mythVsFact: [
      {
        myth: 'Toda dor de cabeça forte é sinal de tumor no cérebro.',
        fact: 'Tumores cerebrais representam uma minoria ínfima das causas de cefaleia na população geral.',
        explanation: 'Enxaquecas e crises tensionais graves podem causar dor excruciante sem que haja qualquer lesão anatômica ou tumor no encéfalo. Entretanto, a investigação com neurologista é indicada.'
      },
      {
        myth: 'Tomar analgésico todo dia previne a crise de voltar.',
        fact: 'Tomar analgésico diariamente causa a chamada "Cefaleia por Uso Excessivo de Medicamentos".',
        explanation: 'O cérebro adapta os receptores de dor e, quando a medicação diminui no sangue, gera uma crise de abstinência com dor ainda mais frequente. O tratamento correto da enxaqueca crônica usa medicamentos preventivos específicos prescritos pelo médico.'
      }
    ],
    contentSections: [
      {
        heading: '1. O critério SNOOP dos neurologistas',
        body: 'Neurologistas usam o critério SNOOP para identificar sinais de alarme:\n- S (Sintomas sistêmicos): febre, calafrios, perda de peso ou histórico de câncer.\n- N (Neurológico): confusão mental, fraqueza em um braço, boca torta, visão dupla.\n- O (Onset - Início): dor abrupta tipo trovoada em menos de 1 minuto.\n- O (Older - Idade): dor que se inicia pela primeira vez após os 50 anos.\n- P (Pattern change - Mudança de padrão): dor diferente de todas as crises anteriores do paciente.'
      }
    ],
    whenToSeeDoctor: [
      'Pior dor de cabeça já sentida na vida com início em menos de um minuto',
      'Dor com febre alta e incapacidade de flexionar o pescoço em direção ao peito',
      'Fraqueza em um dos lados do corpo ou fala enrolada (sinais de AVC - teste SAMU)',
      'Crises frequentes mais de duas vezes na semana atrapalhando o trabalho'
    ],
    academicReferences: [
      {
        institution: 'Sociedade Brasileira de Cefaleia (SBCe)',
        citation: 'Diretrizes Clínicas para o Diagnóstico e Tratamento das Cefaleias Primárias.',
        url: 'https://sbce.med.br'
      }
    ]
  },
  {
    id: 'atencao-primaria-sus-postos-saude',
    title: 'A Força da Atenção Básica: Como o Posto de Saúde (UBS) Cuida de 85% das Suas Necessidades',
    subtitle: 'Entenda como o SUS organiza o atendimento e por que ir ao lugar certo economiza horas de espera e melhora o seu tratamento.',
    category: 'Saúde Pública & SUS',
    readTime: '5 min de leitura',
    sourceOrganization: 'Ministério da Saúde (Brasil) - Secretaria de Atenção Primária',
    sourceUrl: 'https://www.gov.br/saude/pt-br',
    publishedDate: 'Diretrizes do Sistema Único de Saúde',
    image: '/src/assets/images/preventive_care_clinic_1791919463340.jpg',
    imageAlt: 'Consulta médica humanizada em centro de saúde comunitário',
    summary: 'Muitas pessoas sobrecarregam as UPAs e prontos-socorros com queixas que seriam mais bem acompanhadas na Unidade Básica de Saúde do seu bairro.',
    keyPoints: [
      'A UBS (Posto de Saúde) é a porta de entrada preferencial do SUS: fornece acompanhamento contínuo da sua saúde com histórico do paciente.',
      'UPA 24h foi criada para urgências clínicas que não podem esperar, mas que não exigem cirurgia ou UTI de grande porte imediata.',
      'Hospitais de grande porte e SAMU 192 são reservados para emergências que ameaçam a vida (parada cardíaca, infarto, AVC, grandes traumas).',
      'Ir à UBS para sintomas crônicos ou leves evita a exposição desnecessária a superbactérias presentes em prontos-socorros.'
    ],
    mythVsFact: [
      {
        myth: 'O Pronto-Socorro é melhor que a UBS porque lá eles fazem raio-X e exame de sangue na hora.',
        fact: 'Exames sem indicação clínica expõem a radiação e custos sem melhorar o desfecho de problemas leves.',
        explanation: 'A medicina bem-sucedida baseia-se na história clínica e no exame físico detalhado. No Pronto-Socorro o atendimento é pontual; na UBS o médico e a equipe da família conhecem seu histórico e seus fatores de risco.'
      }
    ],
    contentSections: [
      {
        heading: '1. O papel da Estratégia Saúde da Família (ESF)',
        body: 'A ESF do Brasil é reconhecida internacionalmente pela OMS como um dos maiores modelos de saúde comunitária do mundo. Equipes com médicos, enfermeiros e agentes comunitários cuidam do indivíduo ao longo dos anos, controlando pressão alta, diabetes e vacinação antes que surjam complicações graves.'
      }
    ],
    whenToSeeDoctor: [
      'Para consultas de rotina, check-up preventivo, rastreamento de câncer de colo de útero e mama',
      'Para controle regular de hipertensão arterial e diabetes',
      'Para vacinação de toda a família de acordo com o Calendário Nacional'
    ],
    academicReferences: [
      {
        institution: 'Ministério da Saúde do Brasil',
        citation: 'Política Nacional de Atenção Básica (PNAB). Brasília: Ministério da Saúde.',
        url: 'https://www.gov.br/saude/pt-br'
      }
    ]
  }
];
