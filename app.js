'use strict';
(() => {
  const profile = window.ACADEMIC_PROFILE;
  const $ = (selector,root=document) => root.querySelector(selector);
  const $$ = (selector,root=document) => [...root.querySelectorAll(selector)];
  const i18n=window.FACULTY_I18N;
  let language=i18n.language;
  const en=()=>language==='en';
  const text=(zh,english)=>en()?english:zh;
  const punctuation=()=>en()?{open:' (',close:')',comma:', ',semi:'; ',colon:': '}:{open:'（',close:'）',comma:'，',semi:'；',colon:'：'};
  const staticTranslations=i18n.static.map(([selector,english])=>{const node=$(selector);return {node,english,chinese:node.innerHTML};});
  const attributeTranslations=i18n.attributes.map(([selector,attribute,english])=>{const node=$(selector);return {node,attribute,english,chinese:node.getAttribute(attribute)};});
  function sourceLink(label,url){
    const link=document.createElement('a');link.textContent=label;link.href=url;link.target='_blank';link.rel='noopener noreferrer';return link;
  }
  function personNames(node,names){
    names.forEach((name,index)=>{if(index)node.append(text('、',', '));const part=document.createElement(name===profile.name?'strong':'span');part.className='record-unit';part.textContent=name;node.append(part);});
  }
  function personLabel(node,text){
    const label=document.createElement('span');label.className='record-unit';label.textContent=text;node.append(label);
  }
  function renderAchievements(){
  ['#project-list','#patent-list','#competition-list'].forEach(selector=>$(selector).replaceChildren());
  const p=punctuation();
  (profile.projects||[]).forEach((original,index)=>{
    const project=en()?{...original,...i18n.projects[index]}:original;
    const item=document.createElement('li');
    const content=document.createElement('div');content.className='record-content';
    const title=sourceLink(project.category?`${project.category}${p.colon}${project.name}`:project.name,project.source);title.className='record-title';
    content.append(title);
    const details=[project.number,project.period,project.funding?text(`经费 ${project.funding}`,`Funding: ${project.funding}`):null,en()?i18n.labels[project.role]:project.role].filter(Boolean);
    const info=document.createElement('span');info.className='record-details';info.append(p.open);
    details.forEach((detail,index)=>{if(index)info.append(p.comma);const unit=document.createElement('span');unit.className='record-unit';unit.textContent=detail;info.append(unit);});
    info.append(p.close);content.append(info);
    item.append(content);$('#project-list').append(item);
  });
  (profile.patents||[]).forEach(patent=>{
    const item=document.createElement('li');
    const content=document.createElement('div');content.className='record-content';
    const title=sourceLink(patent.title,patent.url);title.className='record-title';
    title.lang='zh-CN';
    const displayStatus=patent.status.replace(' · 已失效','');
    const status=document.createElement('span');status.className='record-status';status.textContent=`${p.open}${en()?i18n.labels[displayStatus]:displayStatus}${p.close}`;
    const people=document.createElement('span');people.className='record-people';personLabel(people,text('发明人：','Inventors: '));personNames(people,patent.inventors);
    content.append(title,status,document.createTextNode(p.semi),people);item.append(content);$('#patent-list').append(item);
  });
  (profile.competitions||[]).forEach((original,index)=>{
    const competition=en()?{...original,...i18n.competitions[index]}:original;
    const item=document.createElement('li');
    const content=document.createElement('div');content.className='record-content';
    const title=sourceLink(`${competition.year} · ${competition.title} · ${competition.track}`,competition.source);title.className='record-title';
    const award=document.createElement('span');award.className='record-status';award.textContent=`${p.open}${competition.award}${p.close}`;
    const people=document.createElement('span');people.className='record-people';personLabel(people,text('学生：','Students: '));personNames(people,competition.students);people.append(p.semi);personLabel(people,text('指导教师：','Advisors: '));personNames(people,competition.advisors);
    content.append(title,award,document.createTextNode(p.semi),people);item.append(content);$('#competition-list').append(item);
  });
  }
  function renderAlumni(){
  const alumniList=$('#alumni-list');
  alumniList.replaceChildren();
  [...(profile.alumni||[])].sort((a,b)=>Number(b.year)-Number(a.year)).forEach(student=>{
    const row=document.createElement('tr');
    ['year','name','degree','destination'].forEach(field=>{
      const cell=document.createElement(field==='name'?'th':'td');
      if(field==='name')cell.scope='row';
      cell.textContent=student[field];
      if(field==='year'&&student.expected)cell.textContent=text(`${student.year}（预计）`,`${student.year} (exp.)`);
      if(field==='degree'&&en()){cell.textContent='UG';cell.title='Undergraduate';}
      if(field==='destination'){
        const [school,...program]=student.destination.split(' · ');cell.replaceChildren();
        const institution=document.createElement('span');institution.className='destination-school';institution.textContent=en()?(i18n.schools[school]||school):school;
        const next=document.createElement('span');next.className='destination-program';next.textContent=en()?(program.join('').includes('推免')?"Master's (recommendation)":"Master's"):program.join(' · ');
        cell.append(institution,next);
      }
      row.append(cell);
    });
    alumniList.append(row);
  });
  }
  let timer;
  const notify = message => {const toast=$('#toast');toast.textContent=message;toast.classList.add('visible');clearTimeout(timer);timer=setTimeout(()=>toast.classList.remove('visible'),2800);};
  async function copyText(text){
    if(navigator.clipboard && window.isSecureContext){try{await navigator.clipboard.writeText(text);notify(en()?'Copied to clipboard':'已复制到剪贴板');return;}catch(_){}}
    const previous=document.activeElement;
    const input=document.createElement('textarea'); input.value=text; input.style.cssText='position:fixed;left:0;top:0;width:2px;height:2px;opacity:0';
    ($('dialog[open]')||document.body).append(input); input.focus();input.select();let copied=false;
    try{copied=document.execCommand('copy');}catch(_){}input.remove();previous?.focus({preventScroll:true});
    if(copied){notify(en()?'Copied to clipboard':'已复制到剪贴板');return;}
    if($('#paper-dialog').open)$('#paper-dialog').close();
    const fallback=$('#copy-fallback');fallback.hidden=false;$('textarea',fallback).value=text;$('textarea',fallback).focus();$('textarea',fallback).select();
  }
  document.addEventListener('click',event=>{if(event.target.closest('[data-copy-email]'))copyText(profile.email);});
  $('#copy-fallback button').addEventListener('click',()=>{$('#copy-fallback').hidden=true;});
  const dialog=$('#paper-dialog');let opener=null;
  function showPaper(paper){
    opener=document.activeElement;
    $('#dialog-title').textContent=paper.title;
    $('#dialog-image').src=paper.image;$('#dialog-image').alt=en()?(i18n.paperAlts[paper.id]||`Method architecture: ${paper.title}`):paper.alt;$('#dialog-image').dataset.kind=paper.imageKind;
    $('#dialog-authors').textContent=`${paper.authors.join(', ')} · ${paper.venue} · ${paper.year}`;
    const links=$('#dialog-links');links.replaceChildren();
    [[text('出版页面 / DOI','Publisher / DOI'),paper.url],[text('公开 PDF','Open PDF'),paper.pdf]].forEach(([label,url])=>{if(url){const a=document.createElement('a');a.href=url;a.textContent=label+' ↗';a.target='_blank';a.rel='noopener noreferrer';links.append(a);}});
    document.body.style.overflow='hidden';dialog.showModal();
  }
  $('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{const r=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom))dialog.close();});
  dialog.addEventListener('close',()=>{document.body.style.overflow='';opener?.focus({preventScroll:true});});
  function renderPapers(year='all'){
    const list=$('#paper-list');list.replaceChildren();
    const papers=profile.papers.filter(p=>year==='all'||p.year===year);
    papers.forEach(paper=>{
      const article=document.createElement('article');article.className='paper';
      const imageButton=document.createElement('button');imageButton.className='paper-image';imageButton.setAttribute('aria-label',text(`查看方法架构图：${paper.title}`,`View method architecture: ${paper.title}`));
      const image=document.createElement('img');image.src=paper.image;image.alt=en()?(i18n.paperAlts[paper.id]||`Method architecture: ${paper.title}`):paper.alt;image.dataset.kind=paper.imageKind;image.width=174;image.height=111;image.dataset.layout=paper.imageLayout||'landscape';imageButton.append(image);imageButton.addEventListener('click',()=>showPaper(paper));
      const info=document.createElement('div');info.className='paper-info';
      const title=sourceLink(paper.title,paper.url);title.className='paper-title';
      const authors=document.createElement('p');authors.className='paper-authors';paper.authors.forEach((name,index)=>{if(index)authors.append(document.createTextNode(', '));const node=document.createElement(name===profile.name||name===profile.englishName?'strong':'span');node.textContent=name;authors.append(node);});
      const venue=document.createElement('p');venue.className='paper-venue';venue.textContent=`${paper.venue}, ${paper.year}${paper.volume?`, ${paper.volume}${paper.issue?`(${paper.issue})`:''}`:''}${paper.pages?`: ${paper.pages}`:''}`;
      const actions=document.createElement('div');actions.className='paper-actions';
      if(paper.pdf){const link=sourceLink('PDF',paper.pdf);link.setAttribute('aria-label',`PDF：${paper.title}`);actions.append(link);}
      info.append(title,authors,venue,actions);article.append(imageButton,info);list.append(article);
    });
    $('#paper-count').textContent=text(`显示 ${papers.length} 篇论文`,`${papers.length} publications shown`);
  }
  $$('[data-year]').forEach(button=>button.addEventListener('click',()=>{
    $$('[data-year]').forEach(b=>{const selected=b===button;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});renderPapers(button.dataset.year);
  }));
  function applyLanguage(value,persist=true){
    language=value==='en'?'en':'zh';
    document.documentElement.lang=en()?'en':'zh-CN';
    staticTranslations.forEach(({node,chinese,english})=>{node.innerHTML=en()?english:chinese;});
    attributeTranslations.forEach(({node,attribute,chinese,english})=>node.setAttribute(attribute,en()?english:chinese));
    $$('[data-field]').forEach(node=>{const key=node.dataset.field;const value=en()?(i18n.fields[key]??profile[key]):profile[key];if(value!=null)node.textContent=value;});
    if(en())$('.institution-name>strong').textContent='NUIST';
    document.title=en()?'Bo Yang | School of Artificial Intelligence, NUIST':`${profile.name} ${profile.englishName} | 南京信息工程大学人工智能学院`;
    $('meta[name="description"]').content=en()?'Bo Yang, Associate Professor at NUIST. Research in robot localization and navigation, multi-sensor fusion, computer vision, and multimodal MRI Reconstruction.':'杨博，南京信息工程大学人工智能学院副教授、硕士生导师。研究机器人定位导航、多传感器融合、计算机视觉与多模态核磁共振图像重建。';
    $$('[data-language]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.language===language)));
    updateThemeToggle();
    renderAchievements();renderAlumni();renderPapers($('[data-year].active')?.dataset.year||'all');
    if(persist)i18n.save('language',language);
  }
  function updateThemeToggle(){
    const dark=document.documentElement.dataset.theme==='dark';
    const button=$('#theme-toggle');
    const label=dark?text('切换为浅色主题','Switch to light theme'):text('切换为深色主题','Switch to dark theme');
    button.setAttribute('aria-label',label);button.title=label;button.setAttribute('aria-pressed',String(dark));
  }
  function applyTheme(theme,persist=true){
    const value=theme==='dark'?'dark':'light';document.documentElement.dataset.theme=value;
    updateThemeToggle();
    if(persist)i18n.save('theme',value);
  }
  $$('[data-language]').forEach(button=>button.addEventListener('click',()=>applyLanguage(button.dataset.language)));
  $('#theme-toggle').addEventListener('click',()=>applyTheme(document.documentElement.dataset.theme==='dark'?'light':'dark'));
  applyTheme(i18n.theme,false);applyLanguage(language,false);
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)$$('.sidebar nav>a').forEach(a=>a.classList.toggle('active',a.hash===`#${entry.target.id}`));}),{rootMargin:'-5% 0px -75% 0px',threshold:0});
    $$('main section').forEach(section=>observer.observe(section));
  }
})();
