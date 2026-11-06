import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Award, BriefcaseBusiness, Check,
  ChevronDown, Code2, Database, Download, ExternalLink, FileText,
  GraduationCap, Mail, MapPin, Menu, Moon, Network, Sun, X,
  BrainCircuit, ChartNoAxesCombined, Cpu, Sparkles, Workflow, Eye
} from "lucide-react";
import "./style.css";


function LinkedInIcon({ size = 17, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H7.119V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}


function GitHubIcon({ size = 17, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.02 3.52 1.43.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

const A = "/assets";
const profile = `${A}/images/profile-photo.png`;

const skills = [
  {name:"Python",group:"Programming",icon:Code2},
  {name:"Java",group:"Programming",icon:Code2},
  {name:"JavaScript",group:"Programming",icon:Code2},
  {name:"Pandas",group:"AI & ML",icon:Database},
  {name:"NumPy",group:"AI & ML",icon:Database},
  {name:"Scikit-learn",group:"AI & ML",icon:BrainCircuit},
  {name:"Matplotlib",group:"AI & ML",icon:ChartNoAxesCombined},
  {name:"Data Preprocessing",group:"AI & ML",icon:Workflow},
  {name:"Exploratory Data Analysis",group:"AI & ML",icon:ChartNoAxesCombined},
  {name:"Classification & Model Evaluation",group:"AI & ML",icon:BrainCircuit},
  {name:"Microsoft Excel",group:"Analytics",icon:ChartNoAxesCombined},
  {name:"Power BI",group:"Analytics",icon:ChartNoAxesCombined},
  {name:"Tableau",group:"Analytics",icon:ChartNoAxesCombined},
  {name:"Data Cleaning & Reporting",group:"Analytics",icon:Database},
  {name:"HTML5 & CSS3",group:"Web",icon:Code2},
  {name:"SQL Fundamentals",group:"Data & Concepts",icon:Database},
  {name:"DBMS & OOP Fundamentals",group:"Data & Concepts",icon:Network},
  {name:"Git & GitHub",group:"Tools",icon:GitHubIcon},
  {name:"Jupyter Notebook & VS Code",group:"Tools",icon:Code2},
  {name:"Zoho CRM",group:"Tools",icon:Workflow},
  {name:"Figma & Canva",group:"Tools",icon:Sparkles},
];
const experience = [
  {role:"Zoho CRM Operations Intern",org:"WE HUB",place:"Hyderabad, India",date:"Jan 2026 – Feb 2026",tag:"CRM Operations",desc:"Supported CRM operational activities, data management, documentation, workflow monitoring, and process coordination. Gained practical exposure to structured business workflows and digital operations."},
  {role:"Data Analyst Intern",org:"Elevate Labs",place:"Remote / India",date:"21 Apr 2025 – 25 May 2025",tag:"Data Analytics",desc:"Worked on data analytics projects using Python and Microsoft Excel. Performed data cleaning, preprocessing, validation, and exploratory data analysis to organize datasets and support reporting." ,certificate:`${A}/certificates/elevate-labs-data-analyst-internship.pdf`},
  {role:"Foundations of AI Intern",org:"Microsoft initiative · Edunet Foundation · AICTE",place:"India",date:"10 Apr 2025 – 10 May 2025",tag:"Artificial Intelligence",desc:"Completed a four-week internship focused on AI fundamentals and practical applications through structured learning activities.",certificate:`${A}/certificates/microsoft-edunet-foundations-of-ai-internship.pdf`}
];
const projects = [
  {num:"01",title:"LLVM-Based Object File Obfuscation Tool",type:"Compiler Technology · Cybersecurity",desc:"Explored compiler-level object file obfuscation through instruction substitution, control-flow alteration, and opaque predicates.",details:["Instruction substitution","Control-flow alteration","Opaque predicates","Compiler-related workflows"],stack:["LLVM","Compiler concepts","C/C++ concepts"],url:"https://github.com/MushamPraveen13/LLVM-Object-File-Obfuscation-Tool",symbol:"⟡"},
  {num:"02",title:"Disease Prediction Using Machine Learning",type:"Machine Learning · Classification",desc:"Developed a machine learning project using Logistic Regression and Decision Tree classification techniques, with a focus on preprocessing and model evaluation.",details:["Data preprocessing","Logistic Regression","Decision Tree classification","Model evaluation"],stack:["Python","Pandas","NumPy","Scikit-learn"],url:"https://github.com/MushamPraveen13/Disease_Prediction_Using_Machine_Learning",symbol:"⌘"},
  {num:"03",title:"Line Follower Robot",type:"Embedded Systems · Robotics",desc:"Developed an Arduino-based line follower robot using IR sensors and motor control for sensor-based navigation.",details:["IR sensor integration","Motor control","Hardware integration","Testing and debugging"],stack:["Arduino","IR Sensors","Motor Control"],url:"https://github.com/MushamPraveen13/Line-Follower-Robot-Project",symbol:"⌁"}
];
const certificates = [
  {title:"Foundations of AI Internship",issuer:"Microsoft initiative · Edunet Foundation · AICTE",date:"10 May 2025",category:"Internships",file:"microsoft-edunet-foundations-of-ai-internship.pdf",note:"Four-week internship completion certificate."},
  {title:"Data Analyst Internship",issuer:"Elevate Labs",date:"25 May 2025",category:"Internships",file:"elevate-labs-data-analyst-internship.pdf",note:"Internship completion certificate."},
  {title:"Data Analysis with Python",issuer:"IBM · Cognitive Class",date:"28 Jun 2025",category:"Data & Analytics",file:"ibm-data-analysis-with-python.pdf",note:"Course completion certificate."},
  {title:"Data Visualisation: Empowering Business with Effective Insights",issuer:"Tata · Forage",date:"10 Mar 2025",category:"Data & Analytics",file:"tata-data-visualisation-empowering-business-insights.pdf",note:"Job simulation certificate."},
  {title:"Data Analytics Job Simulation",issuer:"Deloitte · Forage",date:"10 Mar 2025",category:"Data & Analytics",file:"deloitte-data-analytics-job-simulation.pdf",note:"Job simulation certificate."},
  {title:"Principles of Generative AI",issuer:"Infosys Springboard",date:"30 May 2025",category:"AI & Generative AI",file:"infosys-principles-of-generative-ai.pdf"},
  {title:"Introduction to OpenAI GPT Models",issuer:"Infosys Springboard",date:"29 May 2025",category:"AI & Generative AI",file:"infosys-introduction-to-openai-gpt-models.pdf"},
  {title:"OpenAI GPT-3 for Developers",issuer:"Infosys Springboard",date:"29 May 2025",category:"AI & Generative AI",file:"infosys-openai-gpt-3-for-developers.pdf"},
  {title:"Generative Models for Developers",issuer:"Infosys Springboard",date:"29 May 2025",category:"AI & Generative AI",file:"infosys-generative-models-for-developers.pdf"},
  {title:"CCNAv7: Introduction to Networks",issuer:"Cisco Networking Academy",date:"04 Dec 2024",category:"Technology",file:"cisco-ccnav7-introduction-to-networks.pdf"},
  {title:"Machine Learning Using Python — 5-Day Participation",issuer:"NIELIT Calicut · Ministry of Electronics & IT, Government of India",date:"10–14 Nov 2025 · Certificate dated 10 Dec 2025",category:"AI & Generative AI",file:"nielit-machine-learning-using-python-participation.pdf",note:"Participation certificate; not a course completion credential."},
  {title:"5-Day Hands-On Workshop on Machine Learning",issuer:"Innomatics Research Labs",date:"13–17 Oct 2025",category:"Workshops",image:`${A}/images/innomatics-ml-workshop-certificate.jpg`,note:"Certificate of participation."}
];
const groups = ["All","Internships","AI & Generative AI","Data & Analytics","Technology","Workshops"];

function App(){
  const [dark,setDark] = useState(true);
  const [menu,setMenu] = useState(false);
  const [active,setActive] = useState("home");
  const [filter,setFilter] = useState("All");
  const [selected,setSelected] = useState(null);
  const [campus,setCampus] = useState(null);
  const [form,setForm] = useState({name:"",email:"",subject:"",message:""});
  const [sent,setSent] = useState(false);

  useEffect(()=>{
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    const sections = ["home","about","skills","experience","projects","education","certifications","contact"];
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{if(entry.isIntersecting) setActive(entry.target.id);});
    },{rootMargin:"-35% 0px -55% 0px"});
    sections.forEach(id=>{const el=document.getElementById(id); if(el) observer.observe(el);});
    return ()=>observer.disconnect();
  },[dark]);

  const nav = ["Home","About","Skills","Experience","Projects","Education","Certifications","Contact"];
  const go = id => {setMenu(false); document.getElementById(id.toLowerCase())?.scrollIntoView({behavior:"smooth"});};
  const visibleCerts = certificates.filter(c=>filter==="All" || c.category===filter);
  const openCert = c => setSelected(c);
  const submit = e => {
    e.preventDefault();
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0ASubject: ${form.subject}%0A%0A${encodeURIComponent(form.message)}`;
    window.location.href = `mailto:mushampraveen1@gmail.com?subject=${encodeURIComponent(form.subject || "Portfolio enquiry")}&body=${body}`;
    setSent(true);
  };

  return <div className="site-shell">
    <header className="topbar">
      <a className="brand" href="#home" onClick={()=>go("home")}><span className="brand-mark">PM</span><span>PRAVEEN<span className="brand-dot">.</span></span></a>
      <nav className={menu?"nav-links open":"nav-links"}>{nav.map(n=><button key={n} className={active===n.toLowerCase()?"nav-item active":"nav-item"} onClick={()=>go(n)}>{n}</button>)}</nav>
      <div className="nav-actions">
        <button className="icon-btn" aria-label="Toggle color theme" onClick={()=>setDark(!dark)}>{dark?<Sun size={17}/>:<Moon size={17}/>}</button>
        <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15}/></a>
        <button className="icon-btn menu-btn" aria-label="Toggle menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
      </div>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse"></span> AI & DATA SCIENCE PROFESSIONAL</div>
            <h1>Exploring intelligence.<br/><span className="gradient-text">Building what’s next.</span></h1>
            <p className="hero-lead">I’m <strong>Praveen Kumar Musham</strong> — an AI & Data Science graduate interested in turning data into insights and exploring technology-driven solutions.</p>
            <div className="hero-tags"><span>Machine Learning</span><span>Data Analytics</span><span>AI Technologies</span></div>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={()=>go("projects")}>Explore my work <ArrowRight size={17}/></button>
              <button className="btn btn-ghost" onClick={()=>go("contact")}>Get in touch <ArrowUpRight size={17}/></button><a className="btn btn-ghost" href="/resume.html" target="_blank" rel="noreferrer">View resume <FileText size={16}/></a>
            </div>
            <div className="hero-meta"><span><MapPin size={15}/> Hyderabad, India</span><span className="meta-separator"></span><span className="availability"><i></i> Open to graduate opportunities</span></div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="portrait-frame"><img src={profile} alt="Professional portrait of Praveen Kumar Musham"/></div>
            <div className="float-card float-ai"><BrainCircuit size={18}/><span><b>AI & ML</b><small>Learning and building</small></span></div>
            <div className="float-card float-data"><ChartNoAxesCombined size={18}/><span><b>Data Analytics</b><small>Insights through data</small></span></div>
            <div className="visual-caption"><span>01 / PROFILE</span><span>HYDERABAD · IN</span></div>
          </div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><ArrowDown size={16}/><span className="hero-bottom-line"></span><span>PORTFOLIO · 2026</span></div>
      </section>

      <section className="section-wrap section-pad" id="about">
        <SectionHeading index="01" kicker="A LITTLE ABOUT ME" title={<>Curiosity meets<br/><span className="gradient-text">practical technology.</span></>} />
        <div className="about-grid">
          <div className="about-photo-wrap"><img className="about-photo" src={profile} alt="Praveen Kumar Musham"/><div className="photo-label"><span>PRAVEEN KUMAR MUSHAM</span><span>AI & DATA SCIENCE</span></div></div>
          <div className="about-content">
            <p className="large-copy">I’m a recent B.Tech graduate in <em>Artificial Intelligence and Data Science</em> from Methodist College of Engineering and Technology, Hyderabad.</p>
            <p className="body-copy">My experience spans data analytics, AI fundamentals, CRM operations, and academic technology projects. I enjoy working across data, tools, and people — understanding a problem, organizing information, and helping shape a practical solution.</p>
            <p className="body-copy">I’m especially interested in Artificial Intelligence, Data Analytics, Business Analytics, and the ways technology can create useful outcomes for organizations.</p>
            <div className="about-facts">
              <Fact icon={BrainCircuit} label="Focus" value="AI & Data Science"/>
              <Fact icon={ChartNoAxesCombined} label="Strength" value="Analytical thinking"/>
              <Fact icon={Workflow} label="Exposure" value="CRM & operations"/>
            </div>
            <div className="social-row"><a href="https://www.linkedin.com/in/praveen-musham-502b73294" target="_blank" rel="noreferrer"><LinkedInIcon size={17}/> LinkedIn <ArrowUpRight size={14}/></a><a href="https://github.com/MushamPraveen13" target="_blank" rel="noreferrer"><GitHubIcon size={17}/> GitHub <ArrowUpRight size={14}/></a></div>
          </div>
        </div>
      </section>

      <section className="section-wrap section-pad" id="skills">
        <SectionHeading index="02" kicker="MY TOOLKIT" title={<>Skills for a<br/><span className="gradient-text">data-driven world.</span></>} desc="A practical mix of programming foundations, analytics tools, AI/ML libraries, and collaboration platforms."/>
        <div className="skills-layout">
          <div className="skills-intro"><div className="skills-emblem"><Cpu size={38}/><span></span></div><h3>Technology is a toolkit.<br/>Problem-solving is the goal.</h3><p>I’m continuing to strengthen these skills through hands-on projects, structured learning, and practical experience.</p></div>
          <div className="skill-groups">{["Programming","AI & ML","Analytics","Web","Data & Concepts","Tools"].map(g=><div className="skill-group" key={g}><div className="skill-group-title">{g}<span>{String(skills.filter(s=>s.group===g).length).padStart(2,"0")}</span></div><div className="skill-chips">{skills.filter(s=>s.group===g).map(s=><span className="skill-chip" key={s.name}><s.icon size={14}/>{s.name}</span>)}</div></div>)}</div>
        </div>
      </section>

      <section className="section-wrap section-pad" id="experience">
        <SectionHeading index="03" kicker="WHERE I’VE LEARNED" title={<>Experience that<br/><span className="gradient-text">shaped my perspective.</span></>} desc="Internship experiences across AI foundations, data analytics, and CRM operations."/>
        <div className="timeline">{experience.map((e,i)=><article className="timeline-item" key={e.role}><div className="timeline-marker">{String(i+1).padStart(2,"0")}</div><div className="timeline-card"><div className="timeline-top"><div><span className="mini-label">{e.tag}</span><h3>{e.role}</h3><h4>{e.org}</h4></div><span className="date-pill">{e.date}</span></div><p>{e.desc}</p><div className="timeline-bottom"><span><MapPin size={14}/>{e.place}</span>{e.certificate&&<button className="text-link" onClick={()=>openCert(certificates.find(c=>c.file==="elevate-labs-data-analyst-internship.pdf" && e.org==="Elevate Labs") || certificates[0])}>View certificate <ArrowUpRight size={14}/></button>}</div></div></article>)}</div>
      </section>

      <section className="section-wrap section-pad" id="projects">
        <SectionHeading index="04" kicker="SELECTED WORK" title={<>Projects built through<br/><span className="gradient-text">experimentation.</span></>} desc="Academic and technical projects that helped me explore machine learning, compiler concepts, and hardware-based automation."/>
        <div className="project-grid">{projects.map(p=><article className="project-card" key={p.num}><div className="project-top"><span className="project-number">{p.num} / PROJECT</span><span className="project-symbol">{p.symbol}</span></div><div className="project-type">{p.type}</div><h3>{p.title}</h3><p>{p.desc}</p><div className="project-details">{p.details.map(d=><span key={d}><Check size={13}/>{d}</span>)}</div><div className="stack-row">{p.stack.map(s=><span key={s}>{s}</span>)}</div><a className="project-link" href={p.url} target="_blank" rel="noreferrer">Explore repository <ArrowUpRight size={16}/></a></article>)}</div>
      </section>

      <section className="section-wrap section-pad" id="education">
        <SectionHeading index="05" kicker="ACADEMIC JOURNEY" title={<>The foundation<br/><span className="gradient-text">behind the work.</span></>} desc="My academic journey in Hyderabad, supported by a foundation in science and technology."/>
        <div className="education-layout">
          <div className="education-main">
            <div className="edu-badge"><GraduationCap size={20}/> UNDERGRADUATE</div>
            <h3>Bachelor of Technology</h3><h4>Artificial Intelligence and Data Science</h4>
            <a className="college-link" href="https://www.methodist.edu.in/" target="_blank" rel="noreferrer">Methodist College of Engineering and Technology <ExternalLink size={14}/></a>
            <div className="edu-meta"><span>2022 – 2026</span><span>CGPA <b>7.8 / 10</b></span><span>Hyderabad, Telangana</span></div>
            <p>Affiliated to Osmania University, as stated in my academic profile.</p>
            <div className="edu-secondary"><div><span>INTERMEDIATE · 2020–2022</span><b>Gouthami Junior College</b><small>Nalgonda · CGPA 8.1</small></div><div><span>SECONDARY SCHOOL · 2019–2020</span><b>New Little Flower High School</b><small>Nalgonda · CGPA 9.8</small></div></div>
          </div>
          <div className="campus-gallery"><button className="campus-image campus-large" onClick={()=>setCampus(`${A}/images/methodist-college-building.jpg`)}><img src={`${A}/images/methodist-college-building.jpg`} alt="Methodist College of Engineering and Technology building"/><span>COLLEGE BUILDING <Eye size={15}/></span></button><button className="campus-image campus-small" onClick={()=>setCampus(`${A}/images/methodist-campus-view.png`)}><img src={`${A}/images/methodist-campus-view.png`} alt="Methodist College campus view"/><span>CAMPUS VIEW <Eye size={15}/></span></button><div className="campus-caption">METHODIST COLLEGE OF ENGINEERING & TECHNOLOGY <a href="https://www.methodist.edu.in/" target="_blank" rel="noreferrer">Official website <ArrowUpRight size={13}/></a></div></div>
        </div>
      </section>

      <section className="section-wrap section-pad cert-section" id="certifications">
        <SectionHeading index="06" kicker="LEARNING NEVER STOPS" title={<>Certifications &<br/><span className="gradient-text">professional development.</span></>} desc="A collection of course completions, internship certificates, job simulations, and workshop participation records."/>
        <div className="cert-summary"><div><Award size={19}/><b>12 learning records</b><span>11 PDF certificates + 1 workshop certificate image </span></div><span className="cert-note">Original files · Preview & download</span></div>
        <div className="filter-row">{groups.map(g=><button key={g} className={filter===g?"filter active":"filter"} onClick={()=>setFilter(g)}>{g}</button>)}</div>
        <div className="cert-grid">{visibleCerts.map((c,i)=><article className="cert-card" key={c.title}><div className="cert-card-top"><span className="cert-index">{String(i+1).padStart(2,"0")}</span><span className="cert-category">{c.category}</span></div><div className="cert-icon"><Award size={23}/></div><h3>{c.title}</h3><p className="cert-issuer">{c.issuer}</p><div className="cert-date">{c.date}</div>{c.note&&<p className="cert-note-small">{c.note}</p>}<div className="cert-actions"><button onClick={()=>openCert(c)}><Eye size={15}/> Preview</button><a href={c.file?`${A}/certificates/${c.file}`:c.image} download={c.image?"innomatics-machine-learning-workshop-certificate.jpg":undefined} target="_blank" rel="noreferrer"><Download size={15}/> File</a></div></article>)}</div>
        <p className="cert-footnote">Certificates are shown using the original files supplied. Course completion, internship completion, job simulation, and participation records are labelled separately to preserve their original meaning.</p>
      </section>

      <section className="section-wrap section-pad contact-section" id="contact">
        <div className="contact-panel"><div className="contact-copy"><div className="eyebrow"><span className="pulse"></span> LET’S CONNECT</div><h2>Have an opportunity<br/>or an idea? <span className="gradient-text">Let’s talk.</span></h2><p>I’m open to connecting with recruiters, technology professionals, and teams working across AI, data, analytics, and business technology.</p><div className="contact-details"><a href="mailto:mushampraveen1@gmail.com"><Mail size={17}/>mushampraveen1@gmail.com<ArrowUpRight size={14}/></a><span><MapPin size={17}/>Hyderabad, Telangana, India</span><a href="https://www.linkedin.com/in/praveen-musham-502b73294" target="_blank" rel="noreferrer"><LinkedInIcon size={17}/>LinkedIn profile<ArrowUpRight size={14}/></a></div></div>
          <form className="contact-form" onSubmit={submit}><div className="form-heading">Send a message <span>I'll be glad to connect.</span></div><label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Name"/></label><label>Email address<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></label><label>Subject<input required value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} placeholder="What would you like to discuss?"/></label><label>Message<textarea required rows="4" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Write your message..."/></label><button className="btn btn-primary form-submit" type="submit">Open email to send <ArrowUpRight size={16}/></button><small>The button opens your email application with your message prepared; it does not submit to a server.</small>{sent&&<span className="form-status">Your email application should open now.</span>}</form>
        </div>
      </section>
    </main>
    <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">PM</span><span>PRAVEEN<span className="brand-dot">.</span></span></a><p>Exploring intelligence. Building what’s next.</p><div className="footer-links"><a href="https://www.linkedin.com/in/praveen-musham-502b73294" target="_blank" rel="noreferrer"><LinkedInIcon size={16}/></a><a href="https://github.com/MushamPraveen13" target="_blank" rel="noreferrer"><GitHubIcon size={16}/></a><a href="mailto:mushampraveen1@gmail.com"><Mail size={16}/></a></div><span className="copyright">© 2026 PRAVEEN KUMAR MUSHAM · BUILT WITH PURPOSE</span></footer>

    {selected&&<div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={selected.title} onClick={()=>setSelected(null)}><div className="certificate-modal" onClick={e=>e.stopPropagation()}><div className="modal-head"><div><span className="mini-label">{selected.category}</span><h3>{selected.title}</h3><p>{selected.issuer} · {selected.date}</p></div><button className="icon-btn" onClick={()=>setSelected(null)} aria-label="Close preview"><X/></button></div>{selected.file?<iframe title={selected.title} src={`${A}/certificates/${selected.file}#view=FitH`} />:<img className="modal-image" src={selected.image} alt={selected.title}/>}<div className="modal-foot"><span>Original uploaded certificate</span><a className="btn btn-primary" href={selected.file?`${A}/certificates/${selected.file}`:selected.image} target="_blank" rel="noreferrer" download={selected.image?"innomatics-machine-learning-workshop-certificate.jpg":undefined}><Download size={16}/> Open / Download</a></div></div></div>}
    {campus&&<div className="modal-backdrop" onClick={()=>setCampus(null)}><div className="image-modal" onClick={e=>e.stopPropagation()}><button className="icon-btn close-image" onClick={()=>setCampus(null)}><X/></button><img src={campus} alt="Methodist College campus photograph"/></div></div>}
  </div>
}

function SectionHeading({index,kicker,title,desc}){return <div className="section-heading"><div className="heading-index">{index}<span></span>{kicker}</div><h2>{title}</h2>{desc&&<p>{desc}</p>}</div>}
function Fact({icon:Icon,label,value}){return <div className="fact"><Icon size={17}/><span>{label}</span><b>{value}</b></div>}

createRoot(document.getElementById("root")).render(<App/>);
