/* The reading room consumes only the release selected by CURRENT_RELEASE.json.
   Rebuild data with provenance/build-current-site.py; translations are bound to
   speech_id and the exact excerpt hash so they cannot silently become stale. */
(()=>{
'use strict';
const d=window.currentReleaseData,$=id=>document.getElementById(id);
if(!d){const error=document.createElement('p');error.className='loading-error';error.textContent='Dati non caricati. Mantieni la cartella assets accanto ad archivio.html. / Data could not load. Keep the assets folder beside archivio.html.';document.querySelector('main').prepend(error);return;}
const messages={
  "it": {
    "title": "Voices of a Nation",
    "skip": "Vai alla sala di lettura",
    "institutionPeriod": "Parlamento italiano / 1900—1941",
    "siteLanguage": "Lingua del sito",
    "tagline": "Un archivio di ricerca sui testi parlamentari.",
    "mainNav": "Navigazione principale",
    "readingRoom": "Sala di lettura",
    "annualSeries": "Serie annuali",
    "datasetNav": "Il dataset",
    "sourceNotes": "Fonti e metodo",
    "legislaturesRange": "Legislature XXI—XXX",
    "recordsTotal": "record testuali",
    "sittingsTotal": "sedute numerate",
    "peopleTotal": "identità nel registro delle persone",
    "releaseContext": "Esplora i testi parlamentari attraverso temi, serie annuali e fonti originali.",
    "theReadingRoom": "La sala di lettura",
    "searchLabel": "Cerca nei {samples} estratti per nome o parole, in italiano e in inglese",
    "searchPlaceholder": "Cerca negli estratti · IT / EN",
    "clearSearch": "Cancella la ricerca",
    "topics": "Temi",
    "subjectIndex": "Indice dei temi",
    "sampleLimit": "{samples} estratti dal corpus. La ricerca riguarda questa selezione, non l’intero dataset.",
    "selectExcerpt": "Seleziona un estratto",
    "corpusYearByYear": "Il corpus, anno per anno",
    "selectYear": "Seleziona un anno. Tutti i tipi di record sono inclusi.",
    "yearFilterNote": "La selezione dell’anno non filtra gli estratti sopra.",
    "speechRecords": "record",
    "keywordMatches": "· corrispondenze lessicali",
    "annualChart": "Record per anno dal 1900 al 1941: seleziona un anno",
    "chartNote": "Periodo 1900–1941. Barre: tutti i record testuali. Percentuali: record con almeno un termine del dizionario / tutti i record dell’anno. I temi possono sovrapporsi; non misurano consenso o opinione pubblica. Scorri per vedere tutti gli anni.",
    "dictionaryTitle": "Parole cercate per il tema selezionato",
    "topicCountNote": "{matches} record su {total} nel {year}. Confronto letterale senza distinzione tra maiuscole e minuscole; nessuna ricerca semantica.",
    "datasetTitle": "Dentro il dataset",
    "datasetIntro": "Dagli atti ufficiali della Camera dei deputati e della Camera dei Fasci e delle Corporazioni: {records} record in {sittings} sedute numerate, dal {start} al {end}. L’unità di osservazione è il record testuale, che può contenere un intervento orale, una procedura o materiale scritto.",
    "recordTypesTitle": "Che cosa conta come record",
    "unmatchedNote": "{unmatched} record non hanno un person_id. Sono occorrenze testuali, non altrettante persone distinte.",
    "filesTitle": "Sei tabelle collegate",
    "fileLabel": "File e contenuto",
    "rowsLabel": "Righe",
    "joinNote": "speech_id collega testi, reazioni, firme e audit; person_id identifica le persone; person_id + legislature collega i metadati politici. I file completi si trovano nella cartella del progetto.",
    "whatsNew": "Affiliazioni politiche",
    "overlayIntro": "L’affiliazione descrive l’associazione politica di una persona nella legislatura. Le fonti comprendono schede biografiche, documentazione storica individuale e registri di appartenenza agli organi parlamentari.",
    "overlayEvidence": "Per le legislature XXVIII–XXX, la classificazione può basarsi sull’appartenenza istituzionale verificata. Il registro di provenienza indica il tipo di evidenza per ogni assegnazione. In assenza di elementi sufficienti, il campo rimane vuoto.",
    "affiliationCaveat": "“Fascista” è una classificazione politica generale. Non certifica l’iscrizione individuale al PNF né una storia giornaliera di appartenenza. Il registro di provenienza distingue assegnazioni istituzionali e fonti personali.",
    "metadataTitle": "Disponibilità dei metadati politici",
    "affiliationMeasure": "affiliazione disponibile\ntra le coppie persona/legislatura identificate nei testi",
    "affiliationDenominator": "{available} su {total} coppie identificate presenti nei testi, ciascuna contata una volta. È disponibilità del dato, non accuratezza.",
    "constituencyNote": "Il collegio territoriale riguarda i mandati delle legislature XXI–XXVII. Nelle XXVIII–XXIX il collegio era nazionale; la XXX non era elettiva. Il campo non è applicabile neppure ai membri del governo senza mandato di deputato nella legislatura.",
    "metadataScope": "Il registro delle persone comprende anche identità presenti solo nelle firme. I campi geografici descrivono il luogo di nascita; l’affiliazione è per legislatura, non per singolo giorno.",
    "documentsTitle": "Documentazione e accesso",
    "publicationNote": "Per le condizioni di riuso consulta la documentazione sui diritti. Il DOI e le licenze di dati e codice non sono ancora assegnati.",
    "packageNote": "Gli archivi completi di dati e codice e i sei file della tabella sono collegamenti alla cartella locale del progetto, separati dal pacchetto del sito. La documentazione qui inclusa rimane consultabile anche nella copia del sito.",
    "sourceSection": "04 / Fonti",
    "backToPage": "Dal record alla pagina.",
    "sourceIntro": "Ogni estratto è tratto dal campo speech del dataset. Il suo speech_id permette di risalire alla riga di audit e al PDF ufficiale della seduta, confrontato con il manifesto delle fonti. Questo collegamento documenta la provenienza; l’accuratezza della trascrizione va valutata rispetto alla scansione.",
    "methodReport": "Metodo e limiti · IT",
    "sourceManifest": "Conteggi e tracciabilità · JSON",
    "buildScript": "Script dei calcoli · Python",
    "coverageQuestion": "Qual è la copertura del corpus?",
    "coverageAnswer": "Il corpus copre le sedute numerate dal 16 giugno 1900 al 10 giugno 1941, legislature XXI–XXX. Sono esclusi gli undici documenti inaugurali e Discorsi della Corona archiviati separatamente come 000A/000B. La presenza di una seduta nel manifesto non prova che ogni intervento della fonte sia stato recuperato.",
    "topicsQuestion": "Come vengono misurati i temi?",
    "topicsAnswer": "I testi sono confrontati con dieci dizionari tematici. Un record corrisponde al tema se contiene almeno uno dei termini come sottostringa, ignorando maiuscole e minuscole. È contato una sola volta per tema, ma può corrispondere a più temi. Il denominatore comprende tutti i tipi di record dell’anno. Non si tratta di un modello statistico dei temi e il significato dipende dal contesto.",
    "excerptQuestion": "Come sono scelti gli estratti?",
    "excerptAnswer": "La sala di lettura contiene una selezione illustrativa di 50 estratti del corpus, con identificativi e metadati del dataset. Non è un campione casuale né rappresentativo. La ricerca riguarda solo questi estratti. Le omissioni sono segnalate; le parole italiane non vengono riscritte. La pagina del PDF indicata si riferisce al record e può comprendere più pagine.",
    "qualityQuestion": "Che cosa sappiamo sulla qualità?",
    "qualityAnswer": "La valutazione umana è stata condotta su 2.489 estrazioni API iniziali: 93,81% di testo esatto, 89,92% di testo completo e 95,86% di attribuzioni corrette. Queste percentuali descrivono quel campione di estrazioni, non l’accuratezza dell’intero dataset distribuito. Il corpus è accompagnato da registri delle verifiche su casi specifici e da controlli di integrità; questi non costituiscono una valutazione rappresentativa dell’accuratezza complessiva.",
    "translationQuestion": "Come leggere le traduzioni inglesi?",
    "translationAnswer": "Le traduzioni sono ausili di lettura non ufficiali, riferiti solo all’estratto mostrato. Sono associate all’identificativo e all’impronta del testo italiano. Per citare o analizzare un passo, controlla l’originale italiano e il PDF. I testi storici possono contenere linguaggio discriminatorio o propaganda: sono presentati come documenti di ricerca.",
    "reproductionQuestion": "Come si riproducono i risultati?",
    "reproductionAnswer": "Conteggi, quote tematiche ed estratti si ricostruiscono dai CSV del dataset con lo script disponibile in questa pagina. Il rapporto registra file di input e impronte. Il codice del dataset riproduce le trasformazioni a partire dagli input congelati documentati; non esegue autonomamente una nuova estrazione di tutti i PDF originari.",
    "footerTitle": "Voices of a Nation · Archivio parlamentare",
    "footerUpdated": "1900–1941 · {records} record · {sittings} sedute",
    "rightsLink": "Stato della licenza",
    "backToReading": "Torna alla sala di lettura ↑",
    "listSearch": "Ricerca / tutti i temi",
    "listAll": "Estratti / tutti gli anni",
    "noResults": "Nessun estratto corrisponde alla ricerca.",
    "emptyHeading": "Nessun estratto trovato.",
    "emptyHelp": "Prova un cognome o una parola in italiano o inglese. La ricerca comprende solo i {samples} estratti di questa selezione.",
    "previousExcerpt": "Estratto precedente",
    "nextExcerpt": "Estratto successivo",
    "legislature": "Legislatura",
    "institution": "Camera dei deputati",
    "successorInstitution": "Camera dei Fasci e delle Corporazioni",
    "originalParty": "Affiliazione per legislatura: classificazione generale, non iscrizione quotidiana a un partito",
    "originalItalian": "Originale italiano",
    "englishTranslation": "Inglese",
    "excerptLanguage": "Lingua dell’estratto",
    "translationLabel": "Traduzione inglese · originale italiano disponibile",
    "originalLabel": "Originale italiano",
    "translationUnavailable": "Traduzione non disponibile per questo testo: viene mostrato l’originale italiano.",
    "excerptNote": "Estratto dal corpus. […] indica una parte omessa; eventuali errori di trascrizione sono conservati.",
    "translationNote": "Traduzione di supporto alla lettura, non ufficiale. Per citare, verifica l’originale italiano.",
    "excerpts": "estratti",
    "aboutSource": "Fonti e metodo",
    "currentRecord": "Identificativo e fonte",
    "officialPdf": "Apri il PDF ufficiale della seduta ↗",
    "datasetPage": "Localizzazione del record nel PDF",
    "sourceLinkMeaning": "Testo e metadati del dataset; fonte recuperata tramite speech_id → audit.pdf_url. Il collegamento non certifica la trascrizione contro la scansione.",
    "pdfCheckFailed": "Il PDF è registrato nel dataset, ma la disponibilità online non è confermata dall’ultimo controllo.",
    "fileDescriptions": {
      "speeches": "Testi, date, tipi e metadati della legislatura.",
      "people": "Identità e biografie di oratori o firmatari.",
      "people_leg": "Affiliazione e collegio per persona/legislatura.",
      "reactions": "Annotazioni di reazioni, presenti anche nei testi.",
      "signatories": "Occorrenze di firme per documento; il join può moltiplicare le righe.",
      "audit": "Provenienza di testi e biografie; 510.605 righe di testo e 2.357 biografiche."
    },
    "downloads": {
      "method": "Guida al dataset e al sito",
      "readme": "Informazioni sul dataset",
      "dictionary": "Dizionario dei campi · italiano",
      "schema": "Schema e definizioni · inglese",
      "metadata": "Descrittive dei metadati",
      "reproduce": "Codice e riproducibilità",
      "manifest": "Manifesto e impronte dei file",
      "dataPackage": "Pacchetto dati locale",
      "codePackage": "Pacchetto codice locale"
    },
    "topicNames": {
      "War": "Guerra",
      "Labour": "Lavoro",
      "Suffrage": "Suffragio",
      "Socialism": "Socialismo",
      "Fascism": "Fascismo",
      "Colonies": "Colonie",
      "Emigration": "Emigrazione",
      "Taxes": "Imposte",
      "Education": "Istruzione",
      "South": "Mezzogiorno"
    },
    "recordTypes": {
      "speech": "Interventi orali",
      "procedural": "Materiale procedurale",
      "written_question_answer": "Interrogazioni e risposte scritte",
      "written_document": "Altri documenti scritti",
      "editorial_summary": "Sintesi editoriali",
      "anonymous_voice": "Voci anonime"
    },
    "corpusLabel": "Il corpus"
  },
  "en": {
    "title": "Voices of a Nation",
    "skip": "Skip to the reading room",
    "institutionPeriod": "Italian Parliament / 1900—1941",
    "siteLanguage": "Site language",
    "tagline": "A research archive of parliamentary texts.",
    "mainNav": "Main navigation",
    "readingRoom": "Reading room",
    "annualSeries": "Annual series",
    "datasetNav": "The dataset",
    "sourceNotes": "Sources & method",
    "legislaturesRange": "Legislatures XXI—XXX",
    "recordsTotal": "text records",
    "sittingsTotal": "numbered sittings",
    "peopleTotal": "identities in the people register",
    "releaseContext": "Explore parliamentary texts through topics, annual series and original sources.",
    "theReadingRoom": "The reading room",
    "searchLabel": "Search the {samples} excerpts by name or words in Italian and English",
    "searchPlaceholder": "Search the excerpts · IT / EN",
    "clearSearch": "Clear the search",
    "topics": "Topics",
    "subjectIndex": "Subject index",
    "sampleLimit": "{samples} excerpts from the corpus. Search covers this selection, not the full dataset.",
    "selectExcerpt": "Select an excerpt",
    "corpusYearByYear": "The corpus, year by year",
    "selectYear": "Select a year. All record types are included.",
    "yearFilterNote": "Selecting a year does not filter the excerpts above.",
    "speechRecords": "records",
    "keywordMatches": "· keyword matches",
    "annualChart": "Records per year from 1900 to 1941: select a year",
    "chartNote": "Period: 1900–1941. Bars: all text records. Percentages: records containing at least one dictionary term / all records in that year. Topics can overlap; they do not measure agreement or public opinion. Scroll to view every year.",
    "dictionaryTitle": "Search terms for the selected topic",
    "topicCountNote": "{matches} of {total} records in {year}. Case-insensitive literal substring matching; no semantic search.",
    "datasetTitle": "Inside the dataset",
    "datasetIntro": "From the official proceedings of the Chamber of Deputies and the Chamber of Fasces and Corporations: {records} records in {sittings} numbered sittings, from {start} to {end}. The unit of observation is a text record, which may contain an oral intervention, procedural material or written content.",
    "recordTypesTitle": "What counts as a record",
    "unmatchedNote": "{unmatched} records have no person_id. These are text occurrences, not that many distinct people.",
    "filesTitle": "Six linked tables",
    "fileLabel": "File and contents",
    "rowsLabel": "Rows",
    "joinNote": "speech_id links texts, reactions, signatures and audit; person_id identifies people; person_id + legislature links political metadata. The complete files are in the project folder.",
    "whatsNew": "Political affiliations",
    "overlayIntro": "Affiliation describes a person’s political association within a legislature. Sources include biographical profiles, individual historical documentation and records of membership in parliamentary institutions.",
    "overlayEvidence": "For legislatures XXVIII–XXX, the classification may be based on verified institutional membership. The provenance ledger identifies the evidence supporting each assignment. Where evidence is insufficient, the field remains blank.",
    "affiliationCaveat": "“Fascista” is a broad political classification. It does not certify individual PNF enrolment or a daily membership history. The provenance ledger distinguishes institutional assignments from personal sources.",
    "metadataTitle": "Political metadata availability",
    "affiliationMeasure": "affiliation available\namong identified person–legislature pairs in texts",
    "affiliationDenominator": "{available} of {total} identified pairs observed in texts, each counted once. This measures data availability, not accuracy.",
    "constituencyNote": "Territorial constituency concerns mandates in legislatures XXI–XXVII. XXVIII–XXIX used a national constituency; XXX was non-elective. The field is also inapplicable to government members without a deputy’s mandate in that legislature.",
    "metadataScope": "The people register also includes identities observed only as signatories. Geographic fields describe birthplace; affiliation is recorded per legislature, not for each day.",
    "documentsTitle": "Documentation and access",
    "publicationNote": "Consult the rights documentation for reuse conditions. The DOI and data and code licences have not yet been assigned.",
    "packageNote": "The full data and code archives and the six table files link to the local project folder and are separate from the website package. The documentation included here remains accessible in a copy of the website.",
    "sourceSection": "04 / Sources",
    "backToPage": "From record to page.",
    "sourceIntro": "Every excerpt comes from the speech field of the dataset. Its speech_id leads to the audit row and the official sitting PDF, cross-checked against the source manifest. This link establishes provenance; transcription accuracy must be assessed against the scan.",
    "methodReport": "Method and limitations · EN",
    "sourceManifest": "Counts and provenance · JSON",
    "buildScript": "Calculation script · Python",
    "coverageQuestion": "What does the corpus cover?",
    "coverageAnswer": "The corpus covers numbered sittings from 16 June 1900 to 10 June 1941, legislatures XXI–XXX. Eleven opening-ceremony documents and Crown speeches catalogued separately as 000A/000B are excluded. A sitting’s presence in the manifest does not establish that every intervention in the source was recovered.",
    "topicsQuestion": "How are topics measured?",
    "topicsAnswer": "Texts are matched against ten topic dictionaries. A record matches a topic if it contains at least one term as a substring, ignoring case. It is counted once per topic but can match several topics. The denominator includes every record type in the year. This is not a statistical topic model, and meaning depends on context.",
    "excerptQuestion": "How are the excerpts selected?",
    "excerptAnswer": "The reading room contains an illustrative selection of 50 excerpts from the corpus, with dataset identifiers and metadata. It is neither a random nor a representative sample. Search covers only these excerpts. Omissions are marked and Italian wording is not rewritten. The PDF location refers to the full record and may span several pages.",
    "qualityQuestion": "What do we know about quality?",
    "qualityAnswer": "Human evaluation was conducted on 2,489 initial API extractions: 93.81% exact text, 89.92% complete text and 95.86% correct speakers. These percentages describe that sample of extractions, not the accuracy of the entire distributed dataset. The corpus includes records of case-specific reviews and integrity checks; these do not constitute a representative evaluation of overall accuracy.",
    "translationQuestion": "How should I read the English translations?",
    "translationAnswer": "Translations are unofficial reading aids for the displayed excerpt only. They are bound to the identifier and hash of the Italian text. When quoting or analysing a passage, check the Italian original and the PDF. Historical texts may contain discriminatory language or propaganda; they are presented as research documents.",
    "reproductionQuestion": "How can the results be reproduced?",
    "reproductionAnswer": "Counts, topic shares and excerpts can be reconstructed from the dataset CSV files using the script on this page. Its report records inputs and hashes. The dataset code reproduces transformations from documented frozen inputs; it does not independently re-extract all original PDFs.",
    "footerTitle": "Voices of a Nation · Parliamentary archive",
    "footerUpdated": "1900–1941 · {records} records · {sittings} sittings",
    "rightsLink": "Licence status",
    "backToReading": "Back to the reading room ↑",
    "listSearch": "Search / all topics",
    "listAll": "Excerpts / all years",
    "noResults": "No excerpts match this search.",
    "emptyHeading": "No matching excerpts.",
    "emptyHelp": "Try a surname or an Italian or English word. Search covers only the {samples} excerpts in this selection.",
    "previousExcerpt": "Previous excerpt",
    "nextExcerpt": "Next excerpt",
    "legislature": "Legislature",
    "institution": "Chamber of Deputies",
    "successorInstitution": "Chamber of Fasces and Corporations",
    "originalParty": "Affiliation for the legislature: broad classification, not daily party membership",
    "originalItalian": "Original Italian",
    "englishTranslation": "English",
    "excerptLanguage": "Excerpt language",
    "translationLabel": "English translation · Italian original available",
    "originalLabel": "Original Italian",
    "translationUnavailable": "No translation is available for this text: the Italian original is shown.",
    "excerptNote": "Excerpt from the corpus. […] marks omitted content; any transcription errors are retained.",
    "translationNote": "An unofficial reading aid. Check the original Italian before quoting.",
    "excerpts": "excerpts",
    "aboutSource": "Sources and method",
    "currentRecord": "Identifier and source",
    "officialPdf": "Open the official sitting PDF ↗",
    "datasetPage": "Record location in the PDF",
    "sourceLinkMeaning": "Dataset text and metadata; source linked through speech_id → audit.pdf_url. The link does not certify transcription accuracy against the scan.",
    "pdfCheckFailed": "The PDF is recorded in the dataset, but online availability was not confirmed by the latest check.",
    "fileDescriptions": {
      "speeches": "Texts, dates, types and legislature metadata.",
      "people": "Identities and biographies of speakers or signatories.",
      "people_leg": "Affiliation and constituency per person–legislature.",
      "reactions": "Reaction annotations, also present within the texts.",
      "signatories": "Signature occurrences per document; joining can multiply rows.",
      "audit": "Text and biography provenance: 510,605 text rows and 2,357 biographical rows."
    },
    "downloads": {
      "method": "Guide to the dataset and website",
      "readme": "About the dataset",
      "dictionary": "Field dictionary · Italian",
      "schema": "Schema and definitions · English",
      "metadata": "Metadata descriptives",
      "reproduce": "Code and reproducibility",
      "manifest": "File manifest and hashes",
      "dataPackage": "Local data package",
      "codePackage": "Local code package"
    },
    "topicNames": {
      "War": "War",
      "Labour": "Labour",
      "Suffrage": "Suffrage",
      "Socialism": "Socialism",
      "Fascism": "Fascism",
      "Colonies": "Colonies",
      "Emigration": "Emigration",
      "Taxes": "Taxes",
      "Education": "Education",
      "South": "Southern Italy"
    },
    "recordTypes": {
      "speech": "Oral interventions",
      "procedural": "Procedural material",
      "written_question_answer": "Written questions and answers",
      "written_document": "Other written documents",
      "editorial_summary": "Editorial summaries",
      "anonymous_voice": "Anonymous voices"
    },
    "corpusLabel": "The corpus"
  }
};
const all=Object.entries(d.topic_samples).flatMap(([topic,samples])=>samples.map((s,i)=>({...s,topic,id:s.id||topic+'-'+i})));
const byId=new Map(all.map(s=>[s.id,s])),topicNames=Object.keys(d.topics),years=Object.keys(d.yearly_speeches).sort();
let lang='it';try{const saved=localStorage.getItem('voices-archive-language');if(['it','en'].includes(saved))lang=saved;}catch(_error){}
const requestedLanguage=new URLSearchParams(location.search).get('lang');if(['it','en'].includes(requestedLanguage))lang=requestedLanguage;
const locale=()=>lang==='it'?'it-IT':'en-GB',format=n=>Number(n).toLocaleString(locale());
const dateLabel=(s,long=false)=>new Date(s+'T12:00:00Z').toLocaleDateString(locale(),{day:'numeric',month:long?'long':'short',year:'numeric',timeZone:'UTC'});
const values=()=>({release:d.release.version,records:format(d.counts.records),sittings:format(d.counts.sittings),samples:all.length,unmatched:format(d.counts.unmatched_records),start:dateLabel(d.release.start_date,true),end:dateLabel(d.release.end_date,true)});
function t(key,extra={}){const value=messages[lang][key];return typeof value==='string'?value.replace(/\{(\w+)\}/g,(match,k)=>({...values(),...extra})[k]??match):value;}
function make(tag,cls,text){const el=document.createElement(tag);if(cls)el.className=cls;if(text!==undefined)el.textContent=text;return el;}
const translations=window.currentTranslations||{},excerptLanguages=new Map();
function translatedText(s){const entry=translations[s.id];return entry&&entry.speech_id===s.speech_id&&entry.excerpt_sha256===s.excerpt_sha256?entry.text:'';}
const topicLabel=topic=>t('topicNames')[topic]||topic;
let selectedTopic=topicNames.includes('Suffrage')?'Suffrage':topicNames[0],selectedId=null,query='',visible=[];
selectedId=all.find(s=>s.topic===selectedTopic)?.id||all[0]?.id;
let seriesYear=Number(byId.get(selectedId)?.date.slice(0,4)||years[0]);
topicNames.forEach(name=>{const b=make('button','');b.type='button';b.dataset.topic=name;b.append(make('span','',topicLabel(name)));b.addEventListener('click',()=>{selectedTopic=name;query='';$('query').value='';selectedId=null;render();});$('topics').append(b);});
function focusSnapshot(){const el=document.activeElement;return {id:el?.id,record:el?.dataset.record,step:el?.dataset.step,excerpt:el?.dataset.excerptLanguage};}
function restoreFocus(focus){let el=focus.id?$(focus.id):null;if(focus.record)el=document.querySelector('[data-record="'+focus.record+'"]');if(focus.step)el=document.querySelector('[data-step="'+focus.step+'"]');if(focus.excerpt)el=document.querySelector('[data-excerpt-language="'+focus.excerpt+'"]');el?.focus({preventScroll:true});}
function renderLanguage(){
document.documentElement.lang=lang;document.title=t('title');
[['data-i18n',null],['data-i18n-aria','aria-label'],['data-i18n-placeholder','placeholder']].forEach(([attribute,target])=>document.querySelectorAll('['+attribute+']').forEach(el=>{const value=t(el.getAttribute(attribute));if(value===undefined)throw new Error('Missing translation: '+el.getAttribute(attribute));if(target)el.setAttribute(target,value);else el.textContent=value;}));
document.querySelectorAll('[data-language]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.language===lang)));
document.querySelectorAll('[data-topic]').forEach(b=>b.firstElementChild.textContent=topicLabel(b.dataset.topic));
$('release-version').textContent=t('corpusLabel');
$('release-period').textContent=dateLabel(d.release.start_date,true)+' — '+dateLabel(d.release.end_date,true);
$('total-records').textContent=format(d.counts.records);$('total-sittings').textContent=format(d.counts.sittings);$('total-people').textContent=format(d.counts.people);$('sample-limit').textContent=t('sampleLimit');
$('footer-updated').textContent=t('footerUpdated');
renderDataset();
}
function setLanguage(next){if(next===lang)return;const focus=focusSnapshot(),listScroll=$('records').scrollLeft,chartScroll=$('chart-scroll').scrollLeft;lang=next;excerptLanguages.clear();try{localStorage.setItem('voices-archive-language',lang);}catch(_error){}try{const url=new URL(location.href);url.searchParams.set('lang',lang);history.replaceState(null,'',url.href);}catch(_error){}renderLanguage();render(false);$('records').scrollLeft=listScroll;$('chart-scroll').scrollLeft=chartScroll;restoreFocus(focus);}
document.querySelectorAll('[data-language]').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.language)));
function highlightedText(text){const frag=document.createDocumentFragment();if(!query){frag.append(document.createTextNode(text));return frag;}const lower=text.toLocaleLowerCase(),needle=query.toLocaleLowerCase();let offset=0,pos;while((pos=lower.indexOf(needle,offset))>=0){frag.append(document.createTextNode(text.slice(offset,pos)),make('mark','',text.slice(pos,pos+query.length)));offset=pos+query.length;}frag.append(document.createTextNode(text.slice(offset)));return frag;}
function setRecord(id){selectedId=id;const s=byId.get(id);if(s){selectedTopic=s.topic;seriesYear=Number(s.date.slice(0,4));}render();}
function render(scrollChart=true){
const focus=focusSnapshot(),listScroll=$('records').scrollLeft,scoped=query?all:all.filter(s=>s.topic===selectedTopic);
visible=scoped.filter(s=>!query||(s.speaker+' '+s.text+' '+translatedText(s)).toLocaleLowerCase().includes(query.toLocaleLowerCase())).sort((a,b)=>a.date.localeCompare(b.date));
if(!visible.some(s=>s.id===selectedId))selectedId=visible[0]?.id||null;if(selectedId)selectedTopic=byId.get(selectedId).topic;
$('count').textContent=String(visible.length).padStart(2,'0');$('list-label').textContent=t(query?'listSearch':'listAll');$('clear-query').hidden=!query;
document.querySelectorAll('[data-topic]').forEach(b=>b.setAttribute('aria-pressed',String(!query&&b.dataset.topic===selectedTopic)));
$('records').replaceChildren();visible.forEach(s=>{const b=make('button','record-button');b.type='button';b.dataset.record=s.id;b.setAttribute('aria-pressed',String(s.id===selectedId));b.setAttribute('aria-label',s.speaker+', '+dateLabel(s.date));const time=make('time','',dateLabel(s.date));time.dateTime=s.date;b.append(time,make('strong','',s.speaker));b.addEventListener('click',()=>setRecord(s.id));$('records').append(b);});
if(!visible.length)$('records').append(make('p','record-empty',t('noResults')));renderReader();renderAnnual(scrollChart);$('records').scrollLeft=listScroll;restoreFocus(focus);
}
function renderProvenance(s){
const box=make('div','provenance');box.id='source-provenance';box.dataset.speechId=s.speech_id;box.append(make('strong','',t('currentRecord')));
const links=make('div','provenance-links'),check=window.currentUrlChecks?.urls?.[s.pdf_url];
if(s.pdf_url){const pdf=make('a','',t('officialPdf'));pdf.href=check?.available?check.final_url:s.pdf_url.replace(/^http:/,'https:');pdf.target='_blank';pdf.rel='noopener noreferrer';links.append(pdf);}
box.append(links,make('p','record-id','speech_id: '+s.speech_id));
if(s.page_start)box.append(make('p','',t('datasetPage')+': '+s.page_start+(s.page_end&&String(s.page_end)!==String(s.page_start)?'–'+s.page_end:'')));
box.append(make('p','',t('sourceLinkMeaning')));if(check&&!check.available)box.append(make('p','',t('pdfCheckFailed')));return box;
}
function renderReader(){
const reader=$('reader');reader.replaceChildren();const s=byId.get(selectedId);
if(!s){const empty=make('div','no-selection');empty.append(make('h2','',t('emptyHeading')),make('p','',t('emptyHelp')));const reset=make('button','',t('clearSearch'));reset.id='empty-reset';reset.type='button';reset.addEventListener('click',clearSearch);empty.append(reset);reader.append(empty);return;}
const top=make('div','reader-top');top.append(make('span','meta',t(Number(s.leg)===30?'successorInstitution':'institution')+' / '+topicLabel(s.topic)));const controls=make('div','record-navigation');
[-1,1].forEach(step=>{const b=make('button','',step<0?'←':'→');b.type='button';b.dataset.step=String(step);b.setAttribute('aria-label',t(step<0?'previousExcerpt':'nextExcerpt'));b.disabled=visible.length<2;b.addEventListener('click',()=>{const i=visible.findIndex(v=>v.id===selectedId);setRecord(visible[(i+step+visible.length)%visible.length].id);});controls.append(b);});top.append(controls);
const title=make('h2','',s.speaker),meta=make('div','record-meta'),time=make('time','',dateLabel(s.date));time.dateTime=s.date;meta.append(time,make('span','',t('legislature')+' '+s.leg));
if(s.party){const party=make('span','party',s.party);party.lang='it';party.title=t('originalParty');meta.append(party);}const type=s.type||s.speech_type;if(t('recordTypes')[type])meta.append(make('span','record-type',t('recordTypes')[type]));
const translation=translatedText(s),wantedLanguage=excerptLanguages.get(s.id)||lang,excerptLanguage=wantedLanguage==='en'&&translation?'en':'it';
const languageRow=make('div','excerpt-language');languageRow.append(make('p','',t(excerptLanguage==='en'?'translationLabel':wantedLanguage==='en'&&!translation?'translationUnavailable':'originalLabel')));
const languageControls=make('div','excerpt-language-controls');languageControls.setAttribute('role','group');languageControls.setAttribute('aria-label',t('excerptLanguage'));
['it','en'].forEach(language=>{const button=make('button','',t(language==='it'?'originalItalian':'englishTranslation'));button.type='button';button.dataset.excerptLanguage=language;button.setAttribute('aria-pressed',String(language===excerptLanguage));button.disabled=language==='en'&&!translation;button.addEventListener('click',()=>{const focus=focusSnapshot();excerptLanguages.set(s.id,language);renderReader();restoreFocus(focus);});languageControls.append(button);});languageRow.append(languageControls);
const speech=make('p','speech');speech.lang=excerptLanguage;if(s.excerpt_start>0)speech.append(document.createTextNode('[…] '));speech.append(highlightedText(excerptLanguage==='en'?translation:s.text));if(s.excerpt_end<s.full_record_characters)speech.append(document.createTextNode(' […]'));
const note=make('p','reader-note',t('excerptNote')),foot=make('div','reader-footer');foot.append(make('span','',String(visible.findIndex(v=>v.id===selectedId)+1).padStart(2,'0')+' / '+String(visible.length).padStart(2,'0')+' '+t('excerpts')));const sourceLink=make('a','',t('aboutSource'));sourceLink.href='#source';sourceLink.id='reader-source-link';foot.append(sourceLink);
reader.append(top,title,meta,languageRow,speech,note);if(excerptLanguage==='en')reader.append(make('p','reader-note translation-note',t('translationNote')));reader.append(renderProvenance(s),foot);
}
const annualMax=Math.max(...Object.values(d.yearly_speeches));$('year-chart').style.setProperty('--year-count',years.length);
years.forEach(year=>{const count=d.yearly_speeches[year],b=make('button','year-button');b.type='button';b.dataset.year=year;const bar=make('span','bar');bar.style.height=(annualMax?count/annualMax*80:0)+'px';bar.setAttribute('aria-hidden','true');b.append(bar,make('span','',year));b.addEventListener('click',()=>{seriesYear=Number(year);renderAnnual(false);});$('year-chart').append(b);});
function renderAnnual(scrollChart=true){
const count=d.yearly_speeches[seriesYear]||0,share=d.topics[selectedTopic]?.[seriesYear];$('series-year').textContent=seriesYear;$('series-count').textContent=format(count);$('series-share').textContent=count&&share!==null&&share!==undefined?Number(share).toLocaleString(locale(),{minimumFractionDigits:1,maximumFractionDigits:1})+'%':'—';$('series-topic').textContent=topicLabel(selectedTopic);
document.querySelectorAll('[data-year]').forEach(b=>{b.setAttribute('aria-pressed',String(Number(b.dataset.year)===seriesYear));b.setAttribute('aria-label',b.dataset.year+': '+format(d.yearly_speeches[b.dataset.year])+' '+t('speechRecords'));});
const terms=d.methodology.topic_dictionaries?.[selectedTopic]||[];$('topic-dictionary').textContent=(Array.isArray(terms)?terms:terms.terms||[]).join(' · ');$('topic-count-note').textContent=t('topicCountNote',{matches:format(d.topic_counts[selectedTopic]?.[seriesYear]||0),total:format(count),year:seriesYear});
const scroller=$('chart-scroll'),selected=document.querySelector('[data-year="'+seriesYear+'"]');if(scrollChart&&selected&&scroller.scrollWidth>scroller.clientWidth+5)scroller.scrollLeft=selected.offsetLeft-(scroller.clientWidth-selected.offsetWidth)/2;
}
function renderDataset(){if(!$('file-table'))return;
$('record-types').replaceChildren();Object.entries(d.record_types).sort((a,b)=>b[1]-a[1]).forEach(([type,n])=>{const li=make('li',''),label=make('div','type-label');label.append(make('span','',t('recordTypes')[type]||type),make('span','type-number',format(n)+' · '+(100*n/d.counts.records).toLocaleString(locale(),{maximumFractionDigits:1})+'%'));const track=make('div','type-track'),fill=make('div','type-fill');fill.style.width=100*n/d.counts.records+'%';track.setAttribute('aria-hidden','true');track.append(fill);li.append(label,track);$('record-types').append(li);});
const files=[['speeches','speeches.csv.gz',d.counts.records],['people','people.csv',d.counts.people],['people_leg','people_leg.csv',d.counts.people_leg],['reactions','reactions.csv',d.counts.reactions],['signatories','signatories.csv',d.counts.signatories],['audit','audit.csv.gz',d.counts.audit||d.counts.records+d.counts.people]];
$('file-table').replaceChildren();files.forEach(([key,file,count])=>{const tr=make('tr',''),cell=make('td',''),a=make('a','',file);a.href='../../dataset/FINAL/'+d.release.version+'/'+file;a.setAttribute('download','');cell.append(a,make('small','',t('fileDescriptions')[key]));tr.append(cell,make('td','number',format(count)));$('file-table').append(tr);});
const affiliation=d.metadata.affiliation;$('affiliation-percent').textContent=(100*affiliation.available_pairs/affiliation.total_pairs).toLocaleString(locale(),{minimumFractionDigits:2,maximumFractionDigits:2})+'%';$('affiliation-denominator').textContent=t('affiliationDenominator',{available:format(affiliation.available_pairs),total:format(affiliation.total_pairs)});
const docs='downloads/'+d.release.version+'/',packages='../../dataset/deposit_packages/'+d.release.version+'/';
const links=[['method',docs+'SITE_METHOD_'+lang.toUpperCase()+'.txt','TXT'],['readme',docs+'README.txt','EN · TXT'],['dictionary',docs+'Dizionario_colonne_dataset.docx','IT · DOCX'],['schema',docs+'data_dictionary.csv','EN · CSV'],['metadata',docs+'metadata-descriptives.pdf','PDF'],['reproduce',docs+'REPRODUCIBILITY.txt','TXT'],['manifest',docs+'MANIFEST.json','JSON'],['dataPackage',packages+'italian_parliament_PH36_1_data.zip','344 MB'],['codePackage',packages+'italian_parliament_PH36_1_code.zip','665 MB']];
$('download-links').replaceChildren();links.forEach(([key,url,extension])=>{const a=make('a','');a.href=url;a.target='_blank';a.rel='noopener';a.append(make('span','',t('downloads')[key]),make('span','',extension));$('download-links').append(a);});
}
function clearSearch(){query='';$('query').value='';render();$('query').focus();}
$('query').addEventListener('input',e=>{query=e.target.value.trim();render(false);});$('clear-query').addEventListener('click',clearSearch);
renderLanguage();render();
})();
