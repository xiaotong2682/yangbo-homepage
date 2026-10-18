'use strict';
(() => {
  const read=(key,fallback)=>{try{return localStorage.getItem(key)||fallback;}catch(_){return fallback;}};
  const theme=read('faculty.theme','light')==='dark'?'dark':'light';
  const language=read('faculty.language','zh')==='en'?'en':'zh';
  document.documentElement.dataset.theme=theme;
  document.documentElement.lang=language==='en'?'en':'zh-CN';
  window.FACULTY_I18N={
    theme,language,
    save(key,value){try{localStorage.setItem(`faculty.${key}`,value);}catch(_){}},
    fields:{
      title:"Associate Professor, Master's Supervisor",
      university:'Nanjing University of Information Science and Technology',
      department:'School of Artificial Intelligence (School of Future Technology)',
      laboratory:'Autonomous Perception, Localization and Navigation for Intelligent Robots',
      address:'Room A1916, Linjiang Building',
      biography:'Bo Yang is an associate professor and master\'s supervisor at the School of Artificial Intelligence (School of Future Technology), Nanjing University of Information Science and Technology (NUIST), and deputy head of the Department of Metaverse Engineering. He received his Ph.D. in Engineering from Southeast University and undertook joint doctoral training at the University of Alberta, Canada. He joined the School of Artificial Intelligence at NUIST in 2020.',
      mentoring:'His research focuses on autonomous robot perception and navigation, with an emphasis on sensor fusion and localization using visual, inertial, ultra-wideband (UWB), and 3D LiDAR information. His recent work also explores algorithms for multimodal magnetic resonance image reconstruction and synthesis.'
    },
    static:[
      ['.skip-link','Skip to content'],
      ['.header-page-label','Faculty Homepage'],
      ['.sidebar nav a[href="#about"]','About'],
      ['.sidebar nav a[href="#admissions"]','Prospective Students'],
      ['.sidebar nav a[href="#research"]','Research Interests'],
      ['.sidebar nav a[href="#achievements"]','Projects &amp; Awards'],
      ['.sidebar nav a[href="#publications"]','Publications'],
      ['.sidebar nav a[href="#teaching"]','Research Facilities'],
      ['.sidebar nav a[href="#alumni"]','Student Destinations'],
      ['.sidebar nav a[href="#contact"]','Contact'],
      ['.profile-info dl>div:nth-child(1) dt','Email'],
      ['.profile-info dl>div:nth-child(2) dt','Address'],
      ['#admissions-title','Prospective Students'],
      ['.admissions-content',`<p>Undergraduate and graduate students interested in robot localization and navigation, multi-sensor fusion, computer vision, and MRI Reconstruction are welcome to join our group!</p>
        <p>We particularly value the following qualities:</p>
        <ul class="admissions-values">
          <li><strong>Self-motivation and initiative:</strong> A willingness to learn proactively, explore questions, manage your own time, make plans, and keep projects moving forward.</li>
          <li><strong>Sustained commitment:</strong> The ability to devote consistent time and effort to research, and to experiment, reflect, and seek help when challenges arise.</li>
          <li><strong>Good communication:</strong> Sharing progress and difficulties promptly, participating actively in discussions, and taking responsibility for your work.</li>
        </ul>
        <p>Our group encourages <strong>independent exploration and open discussion</strong>. The supervisor provides guidance and support, <strong>but will not constantly prompt students or assign every individual task</strong>. We hope that students will gradually become the main drivers of their own projects. Undergraduates can start with foundational learning and small projects, while graduate students are expected to develop the ability to conduct independent research. We value a willingness to learn, a sense of responsibility, and sustained effort more than prior research experience.</p>
        <p><strong>Master's applicants:</strong> Please apply through the university's official admissions process and contact me by email after passing the preliminary entrance examination.</p>
        <p><strong>Undergraduates:</strong> Students interested in these areas may contact me directly by email. <strong>Our group places particular emphasis on undergraduate research projects</strong>!</p>`],
      ['#research-title','Research Interests'],
      ['.research-list',`<li><strong>Autonomous robot localization and navigation:</strong> Perception and position estimation in indoor and complex environments.</li>
        <li><strong>Multi-sensor data fusion:</strong> Integrating visual, inertial, UWB, and 3D LiDAR information for collaborative perception.</li>
        <li><strong>Computer vision and deep learning:</strong> Exploring graph neural networks, attention mechanisms, and generative models for localization.</li>
        <li><strong>Multimodal MRI Reconstruction and synthesis:</strong> Fusing complementary information from different modalities to develop high-quality MRI Reconstruction and cross-modal synthesis methods.</li>`],
      ['#achievements-title','Projects &amp; Achievements'],
      ['.achievement-group:nth-of-type(1) h3','Research Projects'],
      ['.achievement-group:nth-of-type(2) h3','Patents'],
      ['.achievement-group:nth-of-type(3) h3','Student Competitions'],
      ['#publications-title','Selected Publications'],
      ['[data-year="all"]','All'],
      ['#teaching-title','Research Facilities'],
      ['.facilities-content>div',`<p>Our research uses mobile robots and multi-sensor perception systems. Key equipment includes:</p><ul><li>AgileX Scout-Mini mobile robot platform</li><li>Intel RealSense D455 / ZED 2i visual-inertial sensors</li><li>RS-Helios-5515 3D LiDAR</li><li>LinkTrack-P/S UWB sensors and RTX 4090 computing equipment</li></ul>`],
      ['.facilities-content figcaption','Mobile robot and multi-sensor experimental platform'],
      ['#alumni-title','Student Destinations'],
      ['.alumni-table caption','Undergraduate graduation years, names, and confirmed postgraduate destinations'],
      ['.alumni-table thead','<tr><th scope="col">Graduation</th><th scope="col">Student</th><th scope="col">Level</th><th scope="col">Destination</th></tr>'],
      ['#contact-title','Contact'],
      ['.contact-content',`<p><strong>Email:</strong><button class="inline-link" data-copy-email><span data-field="email">003402@nuist.edu.cn</span></button><a class="compose-link" href="mailto:003402@nuist.edu.cn">Write an email ↗</a></p><p><strong>Address:</strong><span data-field="address"></span></p><p><strong>School:</strong><span data-field="department"></span></p><p><strong>Homepage:</strong><a href="https://faculty.nuist.edu.cn/yangbo1234/zh_CN/index.htm" target="_blank" rel="noopener noreferrer">NUIST Faculty Profile ↗</a></p>`],
      ['footer>span:first-child','© 2026 Bo Yang · School of Artificial Intelligence, NUIST'],
      ['footer a','Back to top ↑'],
      ['#copy-fallback>p','Automatic copying is unavailable. Select the text and press Ctrl+C.'],
      ['#copy-fallback button','Close']
    ],
    attributes:[
      ['.institution-brand','aria-label','NUIST official website'],
      ['.institution-brand img','alt','NUIST emblem'],
      ['.sidebar nav','aria-label','Page navigation'],
      ['.portrait img','alt','Bo Yang, from his official university profile'],
      ['.paper-filters','aria-label','Filter publications by year'],
      ['.facilities-content img','alt','Mobile robot and multi-sensor experimental platform'],
      ['.dialog-close','aria-label','Close image'],
      ['#copy-fallback','aria-label','Copy manually'],
      ['#copy-fallback textarea','aria-label','Text to copy'],
      ['#theme-controls','aria-label','Color theme'],
      ['#language-controls','aria-label','Page language']
    ],
    projects:[
      {category:'National Natural Science Foundation of China, Young Scientists Fund',name:'Deep Fusion and Online Adaptation of Multi-Source Heterogeneous Information for Autonomous Indoor Localization',funding:'CNY 300,000'},
      {name:'Natural Science Research General Program for Jiangsu Higher Education Institutions'},
      {name:'Industry-Sponsored Research Project'},
      {name:'Jiangsu Innovation and Entrepreneurship Doctoral Program'},
      {name:'National Natural Science Foundation of China, General Program'}
    ],
    competitions:[
      {title:'RAICOM Robotics Developer Competition',track:'National Finals · Safe City',award:'National First Prize'},
      {title:'7th Global Campus AI Algorithm Elite Competition',track:'Algorithm Challenge Finals',award:'National Second Prize'},
      {title:'RAICOM Robotics Developer Competition',track:'National Finals · Safe City (Undergraduate Division)',award:'National Third Prize'},
      {title:'RAICOM Robotics Developer Competition',track:'National Finals · Safe City (Undergraduate Division)',award:'National Third Prize'}
    ],
    schools:{'电子科技大学':'University of Electronic Science and Technology of China','北京航空航天大学':'Beihang University','山东大学':'Shandong University','南方科技大学':'Southern University of Science and Technology','纽约大学':'New York University','剑桥大学':'University of Cambridge'},
    labels:{'主持':'Principal investigator','参与':'Participant','已授权':'Granted','已公开':'Published','已授权 · 已失效':'Granted · Expired'},
    paperAlts:{
      sun2026diffusion:'Diff-ULoc architecture: measurement preprocessing, multimodal reconstruction, position estimation, and training losses.',
      yang2025heterogeneous:'Heterogeneous graph UWB localization: graph construction, feature extraction, regression, and training.'
    }
  };
})();
