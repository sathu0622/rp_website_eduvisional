export const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Domain", path: "/domain" },
  { label: "Milestones", path: "/milestones" },
  { label: "Documents", path: "/documents" },
  { label: "Presentations", path: "/presentations" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

export const TEAM_MEMBERS = [
  { name: "Member 1", role: "Component 1 – Multisensory Storytelling", email: "member1@example.com", initials: "M1", photo: "https://via.placeholder.com/300x300?text=Member+1" },
  { name: "Member 2", role: "Component 2 – Smart Summarization Engine", email: "member2@example.com", initials: "M2", photo: "https://via.placeholder.com/300x300?text=Member+2" },
  { name: "Member 3", role: "Component 3 – Braille Exam Correction", email: "member3@example.com", initials: "M3", photo: "https://via.placeholder.com/300x300?text=Member+3" },
  { name: "Member 4", role: "Component 4 – Voice QA Tutoring System", email: "member4@example.com", initials: "M4", photo: "https://via.placeholder.com/300x300?text=Member+4" },
];

export const SUPERVISOR = {
  name: "Dr. Supervisor Name",
  role: "Project Supervisor",
  email: "supervisor@sliit.lk",
  photo: "https://via.placeholder.com/300x300?text=Supervisor",
  qualification: "PhD in Computer Science"
};

export const CO_SUPERVISOR = {
  name: "Asst. Prof. Co-Supervisor Name",
  role: "Project Co-Supervisor",
  email: "cosupervisor@sliit.lk",
  photo: "https://via.placeholder.com/300x300?text=Co-Supervisor",
  qualification: "MSc in Artificial Intelligence"
};

export const MILESTONES = [
  { title: "Brainstorming workshop", date: "25 Mar 2025", status: "completed", description: "Initial brainstorming workshop to conceptualize the project idea and define scope." },
  { title: "Group registration", date: "26 May 2025", status: "completed", description: "Official group registration for the final year project." },
  { title: "Topic Assessment Form (TAF)", date: "June - July 2025", status: "completed", description: "Submission and assessment of topic assessment form." },
  { title: "Project charter", date: "23 July 2025", status: "completed", description: "Project charter document submitted defining project objectives and scope." },
  { title: "Proposal reports (draft)", date: "15 Aug 2025", status: "completed", description: "Draft proposal reports submitted for initial review." },
  { title: "Proposal presentation", date: "Sep 2025", status: "completed", description: "Formal proposal presentation to stakeholders and evaluation panel." },
  { title: "Proposal reports (final)", date: "Sep 2025", status: "completed", description: "Final proposal reports submitted after incorporating feedback." },
  { title: "Progress Presentation - I", date: "Dec 2025", status: "completed", description: "First progress presentation demonstrating initial development progress." },
  { title: "Check List I", date: "Dec 2025", status: "completed", description: "Completion of first milestone checklist." },
  { title: "Research paper", date: "Mar 2026", status: "completed", description: "Research paper documenting literature survey and research gap." },
  { title: "Progress Presentation - II", date: "Mar 2026", status: "completed", description: "Second progress presentation showcasing prototype and evaluation results." },
  { title: "Check List II", date: "Mar 2026", status: "completed", description: "Completion of second milestone checklist." },
  { title: "Final reports", date: "Apr 2026", status: "in-progress", description: "Preparation and writing of comprehensive final project reports." },
  { title: "Final presentation & VIVA", date: "May 2026", status: "upcoming", description: "Final project presentation and viva voce examination." },
  { title: "Submission of RP- Acceptance", date: "June 2026", status: "upcoming", description: "Submission of research paper for acceptance and publication consideration." },
  { title: "Project website", date: "June 2026", status: "upcoming", description: "Launch and deployment of project website showcasing the work." },
  { title: "Research logbook", date: "June 2026", status: "upcoming", description: "Finalization and submission of research logbook documenting the entire journey." },
];

export const DOCUMENTS = [
  { title: "Project Charter", type: "charter", desc: "Initial project charter document", link: "#" },
  { title: "Proposal Document", type: "proposal", desc: "Full project proposal with objectives and methodology", link: "#" },
  { title: "Check List – Component 1", type: "checklist", desc: "Multisensory Storytelling checklist", link: "#" },
  { title: "Check List – Component 2", type: "checklist", desc: "Smart Summarization checklist", link: "#" },
  { title: "Check List – Component 3", type: "checklist", desc: "Braille Exam Correction checklist", link: "#" },
  { title: "Check List – Component 4", type: "checklist", desc: "Voice QA Tutoring checklist", link: "#" },
  { title: "Final Document – Main", type: "final", desc: "Main consolidated final document", link: "#" },
  { title: "Final Document – Component 1", type: "final", desc: "Multisensory Storytelling final doc", link: "#" },
  { title: "Final Document – Component 2", type: "final", desc: "Smart Summarization final doc", link: "#" },
  { title: "Final Document – Component 3", type: "final", desc: "Braille Exam Correction final doc", link: "#" },
  { title: "Final Document – Component 4", type: "final", desc: "Voice QA Tutoring final doc", link: "#" },
];

export const PRESENTATIONS = [
  { title: "Proposal Presentation", date: "Month 1", status: "available", link: "#" },
  { title: "Progress Presentation 1", date: "Month 3", status: "available", link: "#" },
  { title: "Progress Presentation 2", date: "Month 6", status: "pending", link: "#" },
  { title: "Final Presentation", date: "Month 9", status: "pending", link: "#" },
];

export const COMPONENTS = [
  {
    id: "C1",
    title: "Multisensory Storytelling",
    color: "#1e6fba",
    icon: "🎧",
    summary: "AI-powered audio narratives with culturally relevant sound effects for immersive Sri Lankan history lessons.",
    gap: "Existing tools lack culturally linked, immersive audio for visually impaired history learners. Static audio delivery misses semantic connections between historical events.",
    problem: "Current systems fail to incorporate semantic links or audio enhancements inherent in historical narratives, limiting retention for visually impaired students.",
    objective: "Develop an NLP-based module generating vivid audio narratives synchronized with culturally relevant sound effects (temple bells, battle sounds) tailored to Sri Lankan history.",
    methodology: "NLP narrative generation → Cultural sound effect mapping → Dynamic delivery engine → User testing with VI students",
    literature: "Research in audio storytelling shows that multisensory experiences enhance information retention, particularly for visually impaired learners. Studies on narrative structures demonstrate that culturally relevant content significantly improves engagement and comprehension. Natural Language Processing advances have enabled automatic narration generation, while Text-to-Speech technologies have evolved to provide more expressive and natural-sounding output. Integration of sound design principles from media studies with educational technology creates immersive learning experiences tailored to specific cultural contexts.",
    tech: ["NLP", "TTS", "Audio Processing", "Python", "React Native"],
  },
{
  id: "C2",
  title: "Smart Summarization Engine",
  color: "#0d9e6e",
  icon: "📄",
  summary: "An AI-powered engine that generates adaptive summaries for books, magazines, and newspapers, combined with expressive text-to-speech and interactive refinement for better accessibility.",
  gap: "Most existing systems process all document types in the same way, ignoring structural differences between books, magazines, and newspapers. This results in lower-quality extraction and less meaningful summaries. In addition, layout-aware extraction and NLP-based summarization are rarely integrated, and interactive features such as question answering are often missing in assistive solutions.",
  problem: "Visually impaired learners face challenges accessing printed materials due to unstructured text produced by traditional OCR systems. These systems fail to preserve layout elements like columns, headings, and article boundaries. As a result, content becomes difficult to understand, and the lack of document-type awareness further reduces the quality of summarization and user interaction.",
  objective: "To develop an intelligent platform that identifies document types, applies tailored summarization strategies, enables interactive user control, and delivers accessible output through expressive multilingual text-to-speech.",
  methodology: "The system first classifies documents using MobileNetV2 to detect whether the input is a book, magazine, or newspaper. Based on the result, it applies adaptive extraction using Tesseract OCR for books and Microsoft Azure Document Intelligence for layout-rich documents. The extracted content is then summarized using FLAN-T5 with LoRA-based optimization. Finally, a DistilBERT-powered question answering module allows users to interact with the content effectively.",
  literature: "Research in OCR highlights that tools like Tesseract can convert printed text into digital format but often fail to preserve layout structures. Advances in NLP, including models like FLAN-T5 and BERT, have improved summarization and question answering, but they are typically applied without considering document type. Layout-aware systems such as Azure Document Intelligence and models like LayoutLMv2 improve structural extraction, yet they are not fully integrated with adaptive summarization and interactive accessibility features. Overall, existing approaches lack a unified, intelligent solution tailored for visually impaired users."
},
  {
    id: "C3",
    title: "Braille Exam Correction",
    color: "#d4880e",
    icon: "✏️",
    summary: "Automated Braille-to-text conversion with NLP-driven evaluation aligned to Sri Lankan O/L History marking schemes.",
    gap: "Manual Braille correction is slow and inconsistent. Existing Braille tools only translate — they don't evaluate or align with O/L marking schemes.",
    problem: "No automated correction system supports Sri Lankan O/L History in Braille, leaving students reliant on teachers for feedback and limiting independent practice.",
    objective: "Create an integrated system that digitizes Braille exam sheets, evaluates answers against official marking schemes using NLP, and delivers feedback in text and audio.",
    methodology: "Braille image recognition → Text conversion → NLP semantic similarity → Marking scheme alignment → Audio feedback generation",
    literature: "Braille literacy research indicates that automated Braille recognition has significantly advanced with deep learning approaches. Studies on exam assessment systems show that semantic similarity models can effectively evaluate open-ended answers against marking schemes. Recent work on multimodal learning demonstrates that combining visual Braille recognition with NLP-based evaluation improves accuracy. Research in assistive technology accessibility emphasizes the importance of providing timely, automated feedback for independent learning. The intersection of OCR technology with historical curriculum knowledge enables creation of specialized assessment systems.",
    tech: ["OCR", "NLP", "Semantic Similarity", "TTS", "Python", "TensorFlow"],
  },
  {
    id: "C4",
    title: "Voice QA Tutoring System",
    color: "#7c3aed",
    icon: "🎙️",
    summary: "Speech-driven Q&A tutor aligned to the Sri Lankan O/L History syllabus with adaptive question difficulty.",
    gap: "All existing tutoring systems focus on math/STEM and lack a voice-based history tutor for the Sri Lankan curriculum. None offer conversational, open-ended evaluation.",
    problem: "No curriculum-aligned, speech-driven QA tool exists for visually impaired students studying history — creating a clear gap in humanities education accessibility.",
    objective: "Design an English-language voice-interactive QA system trained on the Sri Lankan O/L History syllabus with real-time answer evaluation and adaptive question selection.",
    methodology: "Syllabus content structuring → Speech-to-text + TTS interface → NLP answer evaluation → Adaptive difficulty engine → Pilot testing",
    literature: "Research in speech-based education demonstrates that voice interfaces significantly improve accessibility for visually impaired learners. Studies on adaptive learning systems show that dynamic difficulty adjustment based on learner performance enhances engagement and knowledge retention. Recent advances in conversational AI and large language models have enabled more sophisticated dialogue-based tutoring systems. Curriculum-aligned AI tutoring systems have proven effective in improving learning outcomes, particularly when combined with real-time feedback. Historical education research emphasizes the importance of open-ended questioning and discussion-based learning approaches for deeper understanding.",
    tech: ["Speech-to-Text", "TTS", "NLP", "Adaptive Learning", "React Native", "FastAPI"],
  },
];
