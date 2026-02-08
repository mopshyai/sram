import { 
  GraduationCap, Shield, Microscope, BookOpen, Building, Users
} from "lucide-react";

export interface Publication {
  title: string;
  journal: string;
  year: number;
  type: "journal" | "conference" | "book";
}

export interface Achievement {
  title: string;
  year: number;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: number;
}

export interface FacultyMember {
  id: number;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  specialization: string;
  subjects: string[];
  image: string;
  email: string;
  phone?: string;
  bio?: string;
  education?: Education[];
  publications?: Publication[];
  achievements?: Achievement[];
  researchInterests?: string[];
}

export const departments = [
  { id: "all", name: "All Faculty", icon: Users },
  { id: "education", name: "Education", icon: GraduationCap },
  { id: "law", name: "Law", icon: Shield },
  { id: "pharmacy", name: "Pharmacy", icon: Microscope },
  { id: "arts", name: "Arts & Science", icon: BookOpen },
  { id: "commerce", name: "Commerce", icon: Building },
];

export const facultyData: FacultyMember[] = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar Sharma",
    designation: "Principal & HOD",
    department: "education",
    qualification: "Ph.D., M.Ed., B.Ed.",
    experience: "25+ Years",
    specialization: "Educational Psychology",
    subjects: ["Educational Psychology", "Curriculum Development"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    email: "principal@sram.edu.in",
    phone: "9837320170",
    bio: "Dr. Rajesh Kumar Sharma is a distinguished academician with over 25 years of experience in the field of education. As the Principal of Shri Ram Adarsh Mahavidyalaya, he has been instrumental in shaping the institution's academic policies and fostering a culture of excellence. His research in Educational Psychology has contributed significantly to understanding learning behaviors in higher education.",
    education: [
      { degree: "Ph.D. in Education", institution: "Dr. B.R. Ambedkar University, Agra", year: 2002 },
      { degree: "M.Ed.", institution: "Agra University", year: 1995 },
      { degree: "B.Ed.", institution: "Agra University", year: 1993 },
    ],
    publications: [
      { title: "Impact of Digital Learning on Student Engagement", journal: "Indian Journal of Educational Psychology", year: 2023, type: "journal" },
      { title: "Curriculum Development in Rural Higher Education", journal: "Education Today", year: 2021, type: "journal" },
      { title: "Modern Approaches to Educational Psychology", journal: "Academic Press", year: 2019, type: "book" },
      { title: "Student Motivation and Academic Achievement", journal: "International Conference on Education", year: 2020, type: "conference" },
    ],
    achievements: [
      { title: "Best Educator Award", year: 2022, description: "Awarded by Uttar Pradesh State Government for excellence in education" },
      { title: "Research Excellence Award", year: 2020, description: "Recognized for outstanding contributions to educational research" },
      { title: "NAAC Accreditation Leadership", year: 2021, description: "Led the institution to successful NAAC accreditation" },
    ],
    researchInterests: ["Educational Psychology", "Curriculum Development", "Digital Learning", "Student Motivation"],
  },
  {
    id: 2,
    name: "Prof. Sunita Verma",
    designation: "Associate Professor",
    department: "arts",
    qualification: "M.A., Ph.D. (Hindi)",
    experience: "18 Years",
    specialization: "Hindi Literature",
    subjects: ["Hindi Literature", "Modern Poetry"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    email: "sunita.v@sram.edu.in",
    bio: "Prof. Sunita Verma is a renowned scholar of Hindi Literature with a deep understanding of modern and classical Hindi poetry. Her research focuses on the evolution of Hindi poetry from Bhakti Kal to contemporary times. She has authored multiple books and research papers that are widely referenced in academic circles.",
    education: [
      { degree: "Ph.D. in Hindi", institution: "Agra University", year: 2008 },
      { degree: "M.A. in Hindi", institution: "Agra University", year: 2003 },
    ],
    publications: [
      { title: "Evolution of Modern Hindi Poetry", journal: "Hindi Sahitya Journal", year: 2022, type: "journal" },
      { title: "Women Writers in Contemporary Hindi Literature", journal: "Literary Studies Quarterly", year: 2021, type: "journal" },
      { title: "Bhakti Kal: A Critical Analysis", journal: "National Hindi Conference", year: 2020, type: "conference" },
    ],
    achievements: [
      { title: "Hindi Sahitya Samman", year: 2021, description: "Recognized for contributions to Hindi literature" },
      { title: "Best Teacher Award", year: 2019, description: "College-level recognition for teaching excellence" },
    ],
    researchInterests: ["Modern Hindi Poetry", "Feminist Literature", "Bhakti Movement", "Contemporary Writers"],
  },
  {
    id: 3,
    name: "Dr. Amit Singh",
    designation: "Assistant Professor",
    department: "law",
    qualification: "LL.M., Ph.D.",
    experience: "12 Years",
    specialization: "Constitutional Law",
    subjects: ["Constitutional Law", "Human Rights"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    email: "amit.singh@sram.edu.in",
    phone: "9876543210",
    bio: "Dr. Amit Singh is an expert in Constitutional Law and Human Rights with a particular focus on fundamental rights and judicial activism in India. He has represented clients in various legal matters and contributes regularly to legal journals and newspapers.",
    education: [
      { degree: "Ph.D. in Law", institution: "Delhi University", year: 2015 },
      { degree: "LL.M. (Constitutional Law)", institution: "Dr. B.R. Ambedkar University", year: 2010 },
      { degree: "LL.B.", institution: "Agra University", year: 2008 },
    ],
    publications: [
      { title: "Fundamental Rights and State Actions", journal: "Indian Law Review", year: 2023, type: "journal" },
      { title: "Judicial Activism in India: A Critical Study", journal: "Legal Studies Journal", year: 2022, type: "journal" },
      { title: "Human Rights in the Digital Age", journal: "National Law Conference", year: 2021, type: "conference" },
    ],
    achievements: [
      { title: "Young Jurist Award", year: 2020, description: "Recognized for contributions to legal education" },
      { title: "Best Research Paper", year: 2019, description: "Indian Law Institute Annual Conference" },
    ],
    researchInterests: ["Constitutional Law", "Human Rights", "Judicial Activism", "Digital Rights"],
  },
  {
    id: 4,
    name: "Dr. Priya Agarwal",
    designation: "HOD - Pharmacy",
    department: "pharmacy",
    qualification: "M.Pharm, Ph.D.",
    experience: "15 Years",
    specialization: "Pharmaceutical Chemistry",
    subjects: ["Pharmaceutical Chemistry", "Drug Design"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    email: "priya.a@sram.edu.in",
    bio: "Dr. Priya Agarwal heads the Department of Pharmacy and specializes in Pharmaceutical Chemistry and Drug Design. Her research focuses on developing novel drug compounds for treating chronic diseases. She has secured multiple research grants and has patents to her name.",
    education: [
      { degree: "Ph.D. in Pharmaceutical Chemistry", institution: "BITS Pilani", year: 2012 },
      { degree: "M.Pharm", institution: "Jamia Hamdard, Delhi", year: 2007 },
      { degree: "B.Pharm", institution: "Agra University", year: 2005 },
    ],
    publications: [
      { title: "Novel Drug Candidates for Diabetes Treatment", journal: "Journal of Medicinal Chemistry", year: 2023, type: "journal" },
      { title: "Computer-Aided Drug Design: Modern Approaches", journal: "Pharmaceutical Research", year: 2022, type: "journal" },
      { title: "Advances in Pharmaceutical Chemistry", journal: "Academic Press", year: 2020, type: "book" },
    ],
    achievements: [
      { title: "Patent: Novel Anti-diabetic Compound", year: 2022, description: "Indian Patent Office" },
      { title: "DST Research Grant", year: 2021, description: "Department of Science and Technology funding for drug research" },
      { title: "Best Faculty Award", year: 2020, description: "Pharmacy Council of India recognition" },
    ],
    researchInterests: ["Drug Design", "Medicinal Chemistry", "Computational Pharmacy", "Natural Products"],
  },
  {
    id: 5,
    name: "Prof. Vikram Yadav",
    designation: "Associate Professor",
    department: "commerce",
    qualification: "M.Com, MBA, NET",
    experience: "14 Years",
    specialization: "Financial Management",
    subjects: ["Financial Accounting", "Business Management"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    email: "vikram.y@sram.edu.in",
    bio: "Prof. Vikram Yadav brings a unique blend of academic excellence and industry experience to the Commerce department. With an MBA and extensive teaching experience, he specializes in Financial Management and has consulted for various businesses on financial strategies.",
    education: [
      { degree: "MBA (Finance)", institution: "IIM Lucknow", year: 2010 },
      { degree: "M.Com", institution: "Delhi University", year: 2008 },
      { degree: "B.Com (Hons)", institution: "Agra University", year: 2006 },
    ],
    publications: [
      { title: "Financial Management for SMEs", journal: "Business Economics Journal", year: 2023, type: "journal" },
      { title: "Impact of GST on Small Businesses", journal: "Commerce Today", year: 2021, type: "journal" },
    ],
    achievements: [
      { title: "Industry-Academia Excellence Award", year: 2022, description: "For bridging the gap between theory and practice" },
      { title: "Best Commerce Teacher", year: 2020, description: "State-level recognition" },
    ],
    researchInterests: ["Financial Management", "Corporate Finance", "GST Implementation", "Business Strategy"],
  },
  {
    id: 6,
    name: "Dr. Meena Kumari",
    designation: "Assistant Professor",
    department: "education",
    qualification: "M.Ed., Ph.D.",
    experience: "10 Years",
    specialization: "Special Education",
    subjects: ["Special Education", "Inclusive Teaching"],
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&h=300&fit=crop&crop=face",
    email: "meena.k@sram.edu.in",
    bio: "Dr. Meena Kumari is a passionate advocate for inclusive education and specializes in Special Education. Her work focuses on developing teaching methodologies for students with learning disabilities and ensuring equal educational opportunities for all.",
    education: [
      { degree: "Ph.D. in Special Education", institution: "NCERT, Delhi", year: 2016 },
      { degree: "M.Ed. (Special Education)", institution: "RCI Approved Institution", year: 2012 },
      { degree: "B.Ed.", institution: "Agra University", year: 2010 },
    ],
    publications: [
      { title: "Inclusive Classroom Strategies", journal: "Special Education Journal", year: 2023, type: "journal" },
      { title: "Learning Disabilities: Identification and Intervention", journal: "Education Quarterly", year: 2021, type: "journal" },
    ],
    achievements: [
      { title: "RCI Recognition Award", year: 2022, description: "For contribution to special education" },
      { title: "Best Research Paper", year: 2020, description: "National Conference on Inclusive Education" },
    ],
    researchInterests: ["Special Education", "Inclusive Teaching", "Learning Disabilities", "Assistive Technology"],
  },
  {
    id: 7,
    name: "Prof. Ramesh Chandra",
    designation: "Senior Lecturer",
    department: "arts",
    qualification: "M.Sc. (Physics), B.Ed.",
    experience: "20 Years",
    specialization: "Quantum Physics",
    subjects: ["Physics", "Applied Mathematics"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
    email: "ramesh.c@sram.edu.in",
    bio: "Prof. Ramesh Chandra is a veteran educator with two decades of experience teaching Physics. His expertise in Quantum Physics and Applied Mathematics has inspired generations of students. He is known for his ability to simplify complex concepts and make physics accessible to all students.",
    education: [
      { degree: "M.Sc. in Physics", institution: "Allahabad University", year: 2002 },
      { degree: "B.Ed.", institution: "Agra University", year: 2004 },
      { degree: "B.Sc. (Physics)", institution: "Agra University", year: 2000 },
    ],
    publications: [
      { title: "Quantum Mechanics for Undergraduates", journal: "Physics Education", year: 2022, type: "journal" },
      { title: "Applied Mathematics in Physics", journal: "Indian Physics Association", year: 2020, type: "conference" },
    ],
    achievements: [
      { title: "Outstanding Teacher Award", year: 2021, description: "20 years of dedicated service recognition" },
      { title: "Best Demonstrator", year: 2018, description: "Physics practical teaching excellence" },
    ],
    researchInterests: ["Quantum Physics", "Mathematical Physics", "Physics Education", "Experimental Physics"],
  },
  {
    id: 8,
    name: "Dr. Kavita Mishra",
    designation: "Assistant Professor",
    department: "law",
    qualification: "LL.B., LL.M.",
    experience: "8 Years",
    specialization: "Criminal Law",
    subjects: ["Criminal Law", "Evidence Law"],
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=300&fit=crop&crop=face",
    email: "kavita.m@sram.edu.in",
    bio: "Dr. Kavita Mishra specializes in Criminal Law and Evidence Law. She has extensive experience in legal practice and brings real-world case studies to the classroom. Her research focuses on criminal justice reform and evidence admissibility in Indian courts.",
    education: [
      { degree: "LL.M. (Criminal Law)", institution: "National Law University, Delhi", year: 2014 },
      { degree: "LL.B.", institution: "Agra University", year: 2012 },
    ],
    publications: [
      { title: "Evidence Law in Digital Era", journal: "Criminal Law Journal", year: 2023, type: "journal" },
      { title: "Reforms in Criminal Justice System", journal: "Law and Society Review", year: 2021, type: "journal" },
    ],
    achievements: [
      { title: "Young Advocate Award", year: 2019, description: "Bar Council recognition" },
      { title: "Best Moot Court Coach", year: 2022, description: "Inter-college moot court competition" },
    ],
    researchInterests: ["Criminal Law", "Evidence Law", "Cyber Crime", "Criminal Justice Reform"],
  },
  {
    id: 9,
    name: "Dr. Suresh Patel",
    designation: "Associate Professor",
    department: "pharmacy",
    qualification: "M.Pharm, Ph.D.",
    experience: "16 Years",
    specialization: "Pharmacology",
    subjects: ["Pharmacology", "Clinical Pharmacy"],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
    email: "suresh.p@sram.edu.in",
    phone: "9123456789",
    bio: "Dr. Suresh Patel is an expert in Pharmacology with a focus on clinical applications. His research centers on drug interactions and patient safety in clinical settings. He has collaborated with hospitals for clinical research and drug trials.",
    education: [
      { degree: "Ph.D. in Pharmacology", institution: "AIIMS Delhi", year: 2010 },
      { degree: "M.Pharm (Pharmacology)", institution: "NIPER Mohali", year: 2006 },
      { degree: "B.Pharm", institution: "Agra University", year: 2004 },
    ],
    publications: [
      { title: "Drug Interactions in Polypharmacy", journal: "Clinical Pharmacology Journal", year: 2023, type: "journal" },
      { title: "Patient Safety in Drug Administration", journal: "Hospital Pharmacy", year: 2022, type: "journal" },
      { title: "Clinical Pharmacy Practice", journal: "Elsevier", year: 2021, type: "book" },
    ],
    achievements: [
      { title: "Clinical Excellence Award", year: 2022, description: "Hospital collaboration recognition" },
      { title: "Research Grant", year: 2020, description: "ICMR funded research project" },
    ],
    researchInterests: ["Clinical Pharmacology", "Drug Safety", "Pharmacovigilance", "Clinical Trials"],
  },
  {
    id: 10,
    name: "Prof. Anita Saxena",
    designation: "Assistant Professor",
    department: "commerce",
    qualification: "M.Com, Ph.D., CA",
    experience: "11 Years",
    specialization: "Taxation & Auditing",
    subjects: ["Taxation", "Auditing", "Cost Accounting"],
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=300&h=300&fit=crop&crop=face",
    email: "anita.s@sram.edu.in",
    bio: "Prof. Anita Saxena is a Chartered Accountant turned academician who brings practical expertise in Taxation and Auditing. She provides students with real-world insights into tax planning and audit procedures, preparing them for professional accounting careers.",
    education: [
      { degree: "Ph.D. in Commerce", institution: "Delhi University", year: 2018 },
      { degree: "CA", institution: "ICAI", year: 2012 },
      { degree: "M.Com", institution: "Agra University", year: 2010 },
    ],
    publications: [
      { title: "GST Compliance for SMEs", journal: "Taxation Journal", year: 2023, type: "journal" },
      { title: "Auditing Standards: Recent Changes", journal: "CA Journal", year: 2022, type: "journal" },
    ],
    achievements: [
      { title: "Best CA Educator", year: 2021, description: "ICAI regional recognition" },
      { title: "Tax Consultant of the Year", year: 2019, description: "Industry association award" },
    ],
    researchInterests: ["Taxation", "GST", "Auditing", "Corporate Governance"],
  },
  {
    id: 11,
    name: "Dr. Manoj Tiwari",
    designation: "Senior Lecturer",
    department: "education",
    qualification: "M.Ed., M.Phil., Ph.D.",
    experience: "22 Years",
    specialization: "Educational Technology",
    subjects: ["Educational Technology", "Research Methodology"],
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
    email: "manoj.t@sram.edu.in",
    bio: "Dr. Manoj Tiwari is a pioneer in Educational Technology with over two decades of experience. He has been instrumental in introducing digital learning tools in the institution and has conducted extensive research on the effectiveness of technology in education.",
    education: [
      { degree: "Ph.D. in Education", institution: "BHU Varanasi", year: 2005 },
      { degree: "M.Phil. in Education", institution: "Delhi University", year: 2001 },
      { degree: "M.Ed.", institution: "Agra University", year: 1999 },
    ],
    publications: [
      { title: "Digital Learning in Rural India", journal: "Educational Technology Journal", year: 2023, type: "journal" },
      { title: "Research Methodology in Education", journal: "Sage Publications", year: 2021, type: "book" },
      { title: "E-Learning Effectiveness Study", journal: "International Ed-Tech Conference", year: 2022, type: "conference" },
    ],
    achievements: [
      { title: "Ed-Tech Innovation Award", year: 2022, description: "For innovative use of technology in education" },
      { title: "Best Researcher", year: 2020, description: "University-level recognition" },
    ],
    researchInterests: ["Educational Technology", "E-Learning", "Research Methods", "Digital Pedagogy"],
  },
  {
    id: 12,
    name: "Prof. Neha Gupta",
    designation: "Assistant Professor",
    department: "arts",
    qualification: "M.A. (English), NET",
    experience: "7 Years",
    specialization: "English Literature",
    subjects: ["English Literature", "Communication Skills"],
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
    email: "neha.g@sram.edu.in",
    bio: "Prof. Neha Gupta is a dynamic English Literature faculty who focuses on making classical literature relevant to modern students. She emphasizes communication skills development and has designed special courses for employability enhancement.",
    education: [
      { degree: "M.A. in English", institution: "Jamia Millia Islamia, Delhi", year: 2015 },
      { degree: "UGC NET", institution: "UGC", year: 2016 },
      { degree: "B.A. (Hons) English", institution: "Delhi University", year: 2013 },
    ],
    publications: [
      { title: "Shakespeare in Modern Context", journal: "Literary Criticism Journal", year: 2022, type: "journal" },
      { title: "Communication Skills for Employability", journal: "English Education Conference", year: 2021, type: "conference" },
    ],
    achievements: [
      { title: "Young Faculty Award", year: 2021, description: "For innovative teaching methods" },
      { title: "Best Communication Skills Trainer", year: 2020, description: "Placement cell recognition" },
    ],
    researchInterests: ["English Literature", "Communication Skills", "Victorian Literature", "Language Learning"],
  },
  {
    id: 13,
    name: "Dr. Ravi Shankar",
    designation: "HOD - Law",
    department: "law",
    qualification: "LL.M., Ph.D., D.Litt.",
    experience: "28 Years",
    specialization: "International Law",
    subjects: ["International Law", "Jurisprudence"],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
    email: "ravi.s@sram.edu.in",
    phone: "9988776655",
    bio: "Dr. Ravi Shankar is a distinguished legal scholar and the Head of the Law Department with nearly three decades of experience. His expertise in International Law and Jurisprudence has made him a sought-after expert for legal opinions and policy formulation.",
    education: [
      { degree: "D.Litt. in Law", institution: "Allahabad University", year: 2010 },
      { degree: "Ph.D. in International Law", institution: "Delhi University", year: 2000 },
      { degree: "LL.M.", institution: "BHU Varanasi", year: 1995 },
      { degree: "LL.B.", institution: "Agra University", year: 1993 },
    ],
    publications: [
      { title: "International Humanitarian Law", journal: "Oxford University Press", year: 2022, type: "book" },
      { title: "India and International Treaties", journal: "International Law Journal", year: 2023, type: "journal" },
      { title: "Jurisprudence: Modern Perspectives", journal: "Cambridge Law Journal", year: 2021, type: "journal" },
      { title: "Human Rights in Armed Conflicts", journal: "UNHCR Conference", year: 2020, type: "conference" },
    ],
    achievements: [
      { title: "National Law Day Award", year: 2022, description: "Supreme Court Bar Association" },
      { title: "Lifetime Achievement in Legal Education", year: 2021, description: "Bar Council of India" },
      { title: "International Law Expert Recognition", year: 2019, description: "Ministry of External Affairs" },
    ],
    researchInterests: ["International Law", "Jurisprudence", "Humanitarian Law", "Treaty Law"],
  },
  {
    id: 14,
    name: "Prof. Deepa Sharma",
    designation: "Associate Professor",
    department: "pharmacy",
    qualification: "M.Pharm, MBA",
    experience: "13 Years",
    specialization: "Pharmaceutical Management",
    subjects: ["Hospital Pharmacy", "Pharma Marketing"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    email: "deepa.s@sram.edu.in",
    bio: "Prof. Deepa Sharma brings a unique combination of pharmaceutical science and business management expertise. Her focus on Pharmaceutical Management prepares students for leadership roles in the pharma industry, covering hospital pharmacy operations and marketing strategies.",
    education: [
      { degree: "MBA (Pharma Management)", institution: "NIPER Mohali", year: 2012 },
      { degree: "M.Pharm", institution: "Jamia Hamdard, Delhi", year: 2009 },
      { degree: "B.Pharm", institution: "Agra University", year: 2007 },
    ],
    publications: [
      { title: "Hospital Pharmacy Management", journal: "Pharma Business Journal", year: 2023, type: "journal" },
      { title: "Marketing Strategies in Pharmaceuticals", journal: "Business and Health", year: 2022, type: "journal" },
    ],
    achievements: [
      { title: "Pharma Leadership Award", year: 2022, description: "Industry association recognition" },
      { title: "Best Industry-Academia Coordinator", year: 2021, description: "For successful industry partnerships" },
    ],
    researchInterests: ["Pharma Management", "Hospital Pharmacy", "Healthcare Marketing", "Supply Chain"],
  },
  {
    id: 15,
    name: "Dr. Arun Kumar",
    designation: "HOD - Commerce",
    department: "commerce",
    qualification: "M.Com, Ph.D., NET",
    experience: "19 Years",
    specialization: "Banking & Finance",
    subjects: ["Banking", "Corporate Finance", "Economics"],
    image: "https://images.unsplash.com/photo-1556157382-97ede2916cd9?w=300&h=300&fit=crop&crop=face",
    email: "arun.k@sram.edu.in",
    phone: "9876512340",
    bio: "Dr. Arun Kumar leads the Commerce Department with expertise in Banking and Finance. His research on banking sector reforms and financial inclusion has been widely published. He has consulted for banks and financial institutions on policy matters.",
    education: [
      { degree: "Ph.D. in Commerce", institution: "Delhi School of Economics", year: 2008 },
      { degree: "M.Com (Banking & Finance)", institution: "Delhi University", year: 2003 },
      { degree: "B.Com (Hons)", institution: "Agra University", year: 2001 },
    ],
    publications: [
      { title: "Banking Sector Reforms in India", journal: "Indian Banking Review", year: 2023, type: "journal" },
      { title: "Financial Inclusion: Progress and Challenges", journal: "RBI Bulletin", year: 2022, type: "journal" },
      { title: "Corporate Finance: Indian Perspective", journal: "Tata McGraw Hill", year: 2020, type: "book" },
    ],
    achievements: [
      { title: "RBI Research Fellowship", year: 2021, description: "Research on digital banking" },
      { title: "Best Commerce Faculty", year: 2020, description: "University-level recognition" },
      { title: "Policy Advisor", year: 2019, description: "State-level financial inclusion committee" },
    ],
    researchInterests: ["Banking", "Financial Inclusion", "Corporate Finance", "Economic Policy"],
  },
  {
    id: 16,
    name: "Prof. Shalini Jain",
    designation: "Assistant Professor",
    department: "arts",
    qualification: "M.A. (History), Ph.D.",
    experience: "9 Years",
    specialization: "Medieval Indian History",
    subjects: ["Indian History", "World History"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
    email: "shalini.j@sram.edu.in",
    bio: "Prof. Shalini Jain is a passionate historian specializing in Medieval Indian History. Her research focuses on the Mughal period and cultural exchanges. She regularly organizes heritage walks and museum visits for students to make history come alive.",
    education: [
      { degree: "Ph.D. in History", institution: "JNU Delhi", year: 2017 },
      { degree: "M.A. in History", institution: "Delhi University", year: 2013 },
      { degree: "B.A. (Hons) History", institution: "Lady Shri Ram College", year: 2011 },
    ],
    publications: [
      { title: "Mughal Art and Architecture", journal: "Indian Historical Review", year: 2023, type: "journal" },
      { title: "Cultural Exchanges in Medieval India", journal: "History Today", year: 2022, type: "journal" },
      { title: "Women in Medieval Indian Society", journal: "Historical Conference", year: 2021, type: "conference" },
    ],
    achievements: [
      { title: "Young Historian Award", year: 2022, description: "Indian History Congress" },
      { title: "Heritage Conservation Certificate", year: 2020, description: "ASI Training Program" },
    ],
    researchInterests: ["Medieval History", "Mughal Period", "Art History", "Cultural Studies"],
  },
];

export const getDepartmentColor = (dept: string) => {
  const colors: Record<string, string> = {
    education: "bg-emerald-500",
    law: "bg-blue-500",
    pharmacy: "bg-purple-500",
    arts: "bg-amber-500",
    commerce: "bg-teal-500",
  };
  return colors[dept] || "bg-primary";
};

export const getDepartmentLabel = (dept: string) => {
  return departments.find(d => d.id === dept)?.name || dept;
};

export const getFacultyById = (id: number): FacultyMember | undefined => {
  return facultyData.find(f => f.id === id);
};
