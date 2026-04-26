import member1Photo from '../assets/prasad.jpeg';
import member2Photo from '../assets/abi.jpeg';
import member3Photo from '../assets/kavindya.jpeg';
import member4Photo from '../assets/passport size photo.png';

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

  { name: "Sathushan T", role: "Component 2 – Smart Summarization Engine", email: "sathushan622@gmail.com", initials: "M2", photo: member4Photo },
  { name: "Abishaan T", role: "Component 3 – Braille Exam Correction", email: "abishaan.thiyagalingam@gmail.com", initials: "M3", photo: member2Photo },
  { name: "Dolawattage K. J", role: "Component 4 – Voice QA Tutoring System", email: "kavindyadolawatta@gmail.com", initials: "M4", photo: member3Photo },
  { name: "Senevirathna B.M.P.C", role: "Component 1 – Multisensory Storytelling", email: "pcsplus23@gmail.com", initials: "M1", photo: member1Photo },
];

export const SUPERVISOR = {
  name: "Dilani Lunugalage",
  role: "Project Supervisor",
  email: "supervisor@sliit.lk",
  photo: "https://media.licdn.com/dms/image/v2/C5103AQH5Q3p7YiYydA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1547093296267?e=2147483647&v=beta&t=u8lSv9XKbQoociXoY7bNrTdJuM6Zm_eDlTUiMwgny6c",
  // qualification: "PhD in Computer Science"
};

export const CO_SUPERVISOR = {
  name: "Kaushalya Rajapakse",
  role: "Project Co-Supervisor",
  email: "cosupervisor@sliit.lk",
  photo: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=H9k8UZwAAAAJ&citpid=1",
  // qualification: "MSc in Artificial Intelligence"
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
    gap: "There is a clear gap between existing audio accessibility tools and the needs of visually impaired history students. Most systems focus only on basic text-to-speech, providing accessible but educationally weak audio without simplifying complex content, adjusting tone, or adding sound effects. Additionally, these tools lack domain-specific support, especially for Sri Lankan O/L history, which requires accurate explanation of cultural and historical details. Generic solutions fail to ensure proper understanding. Furthermore, the integration of NLP-based text simplification with emotional narration is limited. Combining these features is essential to improve comprehension, engagement, and learning continuity, yet this area remains insufficiently explored in current research.",
    problem: "This research addresses the lack of a smart, curriculum-sensitive backend for Sri Lankan O/L history education for visually impaired learners. Existing tools produce monotonous audio that limits understanding and engagement. The study proposes a system that simplifies content, adds emotional context, and generates structured, engaging spoken lessons through an integrated backend architecture.",
    objective: "To create and develop a curriculum-integrated component that translates Sri Lankan O/L history lessons into an audio lesson for visually impaired students by enhancing the text, providing support for emotional narration and generating the audio using artificial intelligence.",
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
  summary: "An end-to-end pipeline that decodes Braille examination scripts using computer vision, generates curriculum-aligned marking-scheme answers via Retrieval-Augmented Generation, and scores student responses using semantic similarity — built specifically for Sri Lankan O/L History examinations.",
  gap: "Existing Braille tools only convert dot patterns to plain text — they produce no evaluation, no feedback, and no alignment with the Sri Lankan O/L History marking scheme. Visually impaired students still depend entirely on a human reader and teacher to get any assessment of their work.",
  problem: "No automated system exists that can take a Braille examination script from a visually impaired O/L student, decode it, evaluate the answer against the Sri Lankan history curriculum, and return structured feedback — leaving students without timely, independent access to their own results.",
  objective: "Build an integrated API service that digitises Braille exam scripts from scanned PDFs, generates marking-scheme reference answers from a Sri Lankan O/L History curriculum corpus using RAG and a fine-tuned LLaMA model, scores student responses using a three-metric similarity framework, and returns a numerical score, pass/fail status, and actionable written feedback.",
  methodology: "Braille PDF rendering → Computer vision dot detection → Grade 1 Braille decoding → RAG-based curriculum retrieval → LLaMA-3.1-8B-Instruct answer generation → Sentence-BERT semantic similarity scoring → TF-IDF keyword overlap → Jaccard token overlap → Length penalty → Feedback generation with missing point detection and chapter recommendation",
  literature: "Image-based Braille recognition using connected-component analysis has shown stronger robustness to dot spacing variation than earlier template-matching approaches. Automated essay grading research demonstrates that transformer-based semantic similarity models outperform lexical overlap methods when evaluating paraphrased factual answers. Sentence-BERT with the all-MiniLM-L6-v2 variant provides an effective balance between semantic accuracy and inference speed for real-time grading. Retrieval-Augmented Generation improves factual grounding in large language model outputs by anchoring responses to retrieved source documents, reducing hallucination in domain-specific tasks. Parameter-efficient fine-tuning using LoRA allows large models such as LLaMA-3.1-8B to be adapted to narrow curriculum domains without full retraining, making deployment feasible on constrained hardware.",
  tech: ["PyMuPDF", "OpenCV", "LLaMA 3.1", "LoRA / PEFT", "Sentence-BERT", "RAG", "FastAPI", "Python", "BitsAndBytes", "HuggingFace Transformers"],
},
  {
    id: "C4",
    title: "Voice QA Tutoring System",
    color: "#7c3aed",
    icon: "🎙️",
    summary: "Speech-driven Q&A tutor aligned to the Sri Lankan O/L History syllabus with adaptive question difficulty.",
    gap: "Current assistive tools are predominantly math-centric or rigid, providing binary (right/wrong) feedback rather than qualitative assessment. There is a lack of conversational agents capable of evaluating open-ended, descriptive humanities responses, especially within the context of the Sri Lankan O/L History syllabus. Most existing platforms also fail to support system-initiated questioning, which is vital for guided historical inquiry.",
    problem: "No curriculum-aligned, speech-driven QA tool exists for visually impaired students studying history — creating a clear gap in humanities education accessibility.",
    objective: "Design an English-language voice-interactive QA system trained on the Sri Lankan O/L History syllabus with real-time answer evaluation and adaptive question selection.",
    methodology: "Curriculum knowledge base construction → Llama fine-tuned engine for system-initiated questioning → Fine-tuning SBERT for semantic similarity evaluation →Speech-to-text + TTS interface → Adaptive difficulty engine → Pilot testing",
    literature: "Research in speech-based education demonstrates that voice interfaces significantly improve accessibility for visually impaired learners. Studies on adaptive learning systems show that dynamic difficulty adjustment based on learner performance enhances engagement and knowledge retention. Recent advances in conversational AI and large language models have enabled more sophisticated dialogue-based tutoring systems. Curriculum-aligned AI tutoring systems have proven effective in improving learning outcomes, particularly when combined with real-time feedback. Historical education research emphasizes the importance of open-ended questioning and discussion-based learning approaches for deeper understanding.",
    tech: ["SBERT","Speech-to-Text", "TTS", "NLP", "Adaptive Learning", "React Native", "FastAPI"],
  },
];
