import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { Camera, Heart, Code, User, MapPin, Calendar, ExternalLink, X, ArrowRight, Mail, Github, Linkedin, Sparkles } from 'lucide-react';

import ScrollToTop from './ScrollToTop';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // This function closes the mobile menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* == Left Side: Logo and Brand Name == */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3">
            {/* Your Logo */}
            <img 
              className="h-11 w-11 rounded-full object-cover" 
              src="/haonew.jpg" // The path from the public folder
              alt="Hao's Logo" 
            />
            <span className="font-medium text-gray-900 tracking-wide">
              Things Work
            </span>
          </Link>

          {/* == Right Side: Desktop Menu (hidden on small screens) == */}
          <div className="hidden sm:flex sm:items-center sm:gap-10">
            <Link to="/journey" className={`capitalize transition-all duration-300 text-base ${location.pathname === '/journey' ? 'text-indigo-600 font-medium' : 'text-gray-500 hover:text-gray-900'}`}>
              Journey
            </Link>
            <Link to="/" className={`capitalize transition-all duration-300 text-base ${location.pathname === '/' ? 'text-indigo-600 font-medium' : 'text-gray-500 hover:text-gray-900'}`}>
              Projects
            </Link>
            <Link to="/photos" className={`capitalize transition-all duration-300 text-base ${location.pathname === '/photos' ? 'text-indigo-600 font-medium' : 'text-gray-500 hover:text-gray-900'}`}>
              Photos
            </Link>
          </div>
          
          {/* == Hamburger Button (visible on small screens) == */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                // Icon when menu is open.
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* == Mobile Menu Dropdown (conditionally rendered) == */}
      {isOpen && (
        <div className="sm:hidden border-t border-gray-200" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/journey" 
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/journey' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
            >
              Journey
            </Link>
            <Link 
              to="/" 
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
            >
              Projects
            </Link>
            <Link 
              to="/photos" 
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/photos' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
            >
              Photos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Target the body element
    const body = document.body;

    // If a project or photo is selected, add the class to lock scrolling
    if (selectedProject || selectedPhoto) {
      body.classList.add('modal-open');
    } else {
      // Otherwise, remove the class to re-enable scrolling
      body.classList.remove('modal-open');
    }

    // Cleanup function: This is crucial to ensure the class is removed
    // if the component unmounts while a modal is open.
    return () => {
      body.classList.remove('modal-open');
    };
  }, [selectedProject, selectedPhoto]); // This effect runs whenever a modal is opened or closed

  const highlightKeywords = (text) => {
    const competitions = ['KLESF', 'NASA', 'Space Apps', 'Shell NXplorers', 'NXplorers', 'Hackathon', 'Mobile App Hackathon', 'Digital Ninja', 'BugCrusher', 'Bangkok IPITEx', 'Young Innovators Challenge', 'ASMO', 'Minggu Sains Negara', 'Petronas Choral Speaking', "Queen's Commonwealth Essay Competition", 'Beaver Computational Thinking Competition', 'KYUEM AI Hackathon', 'Impact Appathon', 'Start-up Hackathon', 'KYUEM Start-up Hackathon'];
    const projects = ['AC WALEDE', 'iTravel', 'Gotcha Food', 'EcoPlus', 'Shine', 'SHINE', 'The Frio', 'Nothin\' but Mask', 'EZ Park', 'EssayGuide', 'AISR', 'Crave 2 Cave', 'Zero Strays Miri', 'Artificial Intelligence Stroke Rehabilitation'];
    const organizations = ['SMK Bintulu', 'NASA Headquarters', 'Shell Headquarters', 'Shell Malaysia', 'Kolej Yayasan UEM', 'KYUEM', 'Universiti Kebangsaan Malaysia', 'UKM', 'Malaysian Student Initiative', 'Catholic High School', 'Robotics Club', 'Innovation Club', 'Engineering Society', 'KYUEM Engineering Society', 'Red Crescent Society', 'Jom Hands-On'];
    const awards = ['Champion', 'Gold', 'Silver', 'Bronze', 'Winner', 'Best Speaker', 'Best Technical', 'Best Use of Technology', 'Best 3D Design', 'Best Script Award', 'First Runner-up', 'Global Winners', 'National Champion', 'Top 16', 'Award of Excellence', 'Prime Minister Special Award', 'Ikon Murid Digital'];
    let result = text;
    awards.forEach(award => { result = result.replace(new RegExp(`\\b(${award})\\b`, 'gi'), '<span class="text-orange-600 font-semibold">$1</span>'); });
    competitions.forEach(comp => { result = result.replace(new RegExp(`(${comp})`, 'gi'), '<span class="text-purple-600 font-semibold">$1</span>'); });
    projects.forEach(proj => { result = result.replace(new RegExp(`(${proj})`, 'gi'), '<span class="text-indigo-600 font-semibold">$1</span>'); });
    organizations.forEach(org => { result = result.replace(new RegExp(`(${org})`, 'gi'), '<span class="text-blue-600 font-semibold">$1</span>'); });
    return result;
  };

  const journeyData = [
    {
      year: '2019',
      title: 'Getting Started',
      achievements: ['Began my secondary school at SMK Bintulu.', 'Developed my first IoT project: AC WALEDE, an Air Conditioner Water Leakage Detector.', 'Won a Bronze Medal at the KLESF International Challenge 2019.', 'Served as a School Prefect.', 'Took on the role of Class Assistant for the Afternoon Session.', 'Joined the committee for the Red Crescent Society.', 'Participated in the SCIENCE by Sarawak Energy program.', 'Won First Runner-up and Best Script Award in the Petronas Choral Speaking competition.', 'Participated in and won awards at multiple Chinese Calligraphy competitions.',],
      images: [require('./digital_library/7 High School.jpg'), require('./projects/acld/IMG_0023.jpg'), require('./projects/acld/ACLD.jpg'), require('./projects/acld/IMG_0510.JPG')]
    },
    {
      year: '2020',
      title: 'Lockdown Experiments',
      achievements: ['Taught myself 3D modelling using Blender and TinkerCAD.', 'Created “iTravel,” a virtual travel app in response to the COVID-19 pandemic.', 'Led a team to become Champion at the Mobile App Hackathon 2020.', 'Learned video editing with Premiere Pro.', 'Secured a Bronze Medal at the KLESF International Challenge.', 'Achieved a Silver Award for an IoT Poster Design in the Minggu Sains Negara competition.', 'Won a Silver Award in the state-level ASMO Math Olympiad.', 'Wrote a song with friends for our Moral Studies project.', 'Created Gotcha Food, a hybrid e-commerce system and Raspberry Pi project to reduce food wastage.', 'Learned to create apps using Flutter.', 'Developed EcoPlus, a device that motivates users to use reusable bags instead of plastic bags.', 'Helped my father’s friend develop a Buddhist song player app — an unexpected but rewarding experience.',],
      images: [require('./projects/gotchafood/Screenshot 2025-10-21 011932.png'), require('./projects/gotchafood/Screenshot 2025-10-21 011748.png'), require('./projects/itravel/Screenshot 2025-10-21 075114.png'), require('./projects/ecoplus/2.jpg')]
    },
    {
      year: '2021',
      title: 'Breakthroughs',
      achievements: ['Created Shine, a mobile app to encourage homeowners to use solar panels', 'Selected as the Global Winners for “Best Use of Technology” in the NASA International Space Apps Challenge - Still can’t believe we actually won!', 'Earned a sponsored trip to NASA Headquarters in Washington, D.C.', 'Became Champion at the NASA Space Apps Sarawak Hackathon to qualify for the global finals.', 'Served as the Vice President of the Robotics Club.', 'Worked as Team Leader for the Digital Ninja Accelerator Labs 2021.', 'Created “The Frio,” a self-cooling house designed to reduce interior temperatures in Malaysia.', 'Led the team to achieve a Top 16 placement and win the Best 3D Design Award.', 'Opened a YouTube channel to share about tech gadgets.', 'Developed Nothin’ but Mask, an IoT smart bin for face mask disposal in parking lots with several advanced features.', 'Achieved Champion at the Shell NXPlorers Malaysia (State and School Level).', 'Learned React to create modern and aesthetic websites.', 'Won the Gold Award at BugCrusher 2021 (Senior Virtual Hackathon).', 'Secured the Best Technical and Features Enhancement Award in the same competition.', 'Won an international Silver Prize at the Bangkok IPITEx.', 'Earned a Bronze Medal at the KLESF International Challenge.',],
      images: [require('./projects/nothinbutmask/Group.jpg'), require('./projects/nothinbutmask/Interview.jpeg'), require('./projects/nothinbutmask/Screenshot 2025-10-20 051527.png'), require('./digital_library/Codinggg.jpg'),]
    },
    {
      year: '2022',
      title: 'Learning',
      achievements: ['Created “EZ Park,” a smart parking system and app to help drivers find parking spots more easily and efficiently.', 'Led a team to become National Champion at Shell NXPlorers Malaysia 2022.', 'Awarded the National Best Speaker title in the same competition.', 'Received a sponsored learning trip to Shell Headquarters in London as part of the win.', 'Elected President of the Innovation Club and began mentoring junior teams.', 'Recognised as “Ikon Murid Digital” for Software Development at both National and State levels.', 'Represented Malaysia as a speaker at the Shell NXPlorers Global Student Carnival.', 'Achieved a Gold Award in The Queen’s Commonwealth Essay Competition.', 'Won a Silver Medal at the Young Innovators Challenge 2022.', 'Won a Silver Medal at the KLESF International Challenge 2022.', 'Won a Silver Award at the Beaver Computational Thinking Competition Malaysia 2022.', 'Worked on a low-cost photoelectric effect model with my physics teacher, Mr. Alan.', 'Served as a senior School Prefect under the Discipline Department.', 'Volunteered to clean the school compound for the school open day.',],
      images: [require('./digital_library/Shell nxplorers.png'), require('./digital_library/Duta.jpg'), require('./projects/ezpark/IMG_8332.jpg'), require('./projects/ezpark/LZSL5161.jpg'), require('./projects/ezpark/6. Receiving mock cheque speaker.jpg'), require('./projects/ezpark/During Shell NXplorers School Level.png'), require('./projects/ezpark/2. Team with invention.jpg'),]
    },
    {
      year: '2023',
      title: 'New Horizons',
      achievements: ['Visited the United States for the first time — explored New York and Washington, D.C., tried Joe’s Pizza, and saw the Statue of Liberty.', 'Visited NASA Headquarters for the winners’ celebration. - Met a lot of incredible individuals!', 'Traveled to the United Kingdom for an educational trip and visited Shell Headquarters in London. - One of the most surreal experiences of my life.', 'Worked on a low-cost kinetic energy model with my physics teacher, Mr. Alan.', 'Designed exclusive T-shirts for classmates with Li Jun.', 'Sat for the Malaysian Certificate of Education (SPM).',],
      images: [require('./projects/shine/change maker by nasas.jpg'), require('./digital_library/nasa.jpg'), require('./projects/shine/nasa change maker.png'), require('./projects/shine/NASA Trip.webp'), require('./projects/shine/Winers Celebration.jpg'), require('./projects/ezpark/8 Presentation at Shell London.jpg'), require('./projects/ezpark/IMG_9749.JPG'),]
    },
    {
      year: '2024',
      title: 'A-Levels and New Ventures',
      achievements: ['Joined a band as a singer and performed at prom — awarded “Best Band.”', 'Became a tutor for seven students from Year 7 to Year 11, teaching Mathematics, Physics, English, History, and Malay Language.', 'Organised a family trip to Taiwan for seven days.', 'Awarded the Prime Minister Special Award in Kuching, Sarawak', 'Helped a teacher prepare complete study resources for students.', 'Launched “EssayGuide,” a free mobile application to help SPM students write better essays, available on both the App Store and Google Play.', 'Co-directed Impact Appathon Advanced 2024, teaching underprivileged students app design and coding.', 'Published “Zero Strays Miri” in partnership with the Zero Strays Miri organisation to support stray animal adoption.', 'Graduated from SMK Bintulu with 8A+, 1A, and 1A– in the Sijil Pelajaran Malaysia (SPM) examinations.', 'Received the Award of Excellence for top SPM performance in my state.', 'Secured a full scholarship from Shell Malaysia.', 'Began A-Levels at Kolej Yayasan UEM.', 'Selected as the Electrical & Electronics Exco of the KYUEM Engineering Society.', 'Co-organised and spoke at a scholarship talk for students at Catholic High School.', 'Created AISR (Artificial Intelligence Stroke Rehabilitation) for stroke patients.', 'Won Champion at the KYUEM AI Hackathon.', 'Added “EssayGuide” to SMK Bintulu’s Digital Corner.', 'Co-founded the Malaysian Student Initiative, a student-led organisation helping students discover educational opportunities.', 'Volunteered for a clean-up initiative at a local kindergarten near college.', 'Selected as Head of Technical for “Project Jom Hands-On.”', 'Joined a hands-on STEM Makerspace for students in Petaling Jaya with Jom Hands-On.', 'Went on a gampling trip with friends in Ipoh.', 'Secured a research internship at Universiti Kebangsaan Malaysia (UKM).',],
      images: [require('./digital_library/Shell Scholarship 2024 (1228).jpg'), require('./digital_library/Shell Scholarship 2024 (1105).jpg'), require('./digital_library/Impact Appathon.png'), require('./digital_library/presidentsss.jpg'), require('./digital_library/RTZI9403.JPG'), require('./digital_library/Suit.jpg'), require('./digital_library/Vietnam beach.jpg'), require('./digital_library/Sand.jpg'), require('./digital_library/band.JPG'), require('./digital_library/Ipoh Shooting.JPG')]
    },
    {
      year: '2025',
      title: 'Start-ups!',
      achievements: ['Received investor interest to fund EssayGuide. It was a dream come true!!', 'Nominated as President of the KYUEM Engineering Society.', 'Performed during the college’s Chinese New Year Dinner event.', 'Served as a panelist for the Shell Malaysia Scholarship Sharing Session.', 'Sat for AS Level examinations.', 'Co-founded “Crave 2 Cave,” an affordable food delivery system for college students.', 'Won the KYUEM Start-up Hackathon.', 'Mentored the Aeronautical and F1 Clubs as part of the “Idea Blossom” initiative.', 'Worked as a solar panel technician, installing solar power systems in a rural oil palm plantation.', 'Picked up skateboarding again.',],
      images: [require('./digital_library/Christmas.jpg'), require('./digital_library/Duta.jpg'), require('./digital_library/Shell office.jpg'), require('./digital_library/solar.jpg'), require('./digital_library/sky.jpg'), require('./digital_library/vintage.jpg'), require('./digital_library/6 Boyss.jpg'),]
    }
  ];
  const projectsImagesContext = require.context('./projects', true, /\.(png|jpe?g|webp|gif)$/i);
  const projectImages = projectsImagesContext.keys().map((key) => { const filename = key.split('/').pop() || ''; return { path: key, url: projectsImagesContext(key), title: filename.replace(/\.[^/.]+$/, ''), filename, }; });
  const getProjectImages = (folderName) => projectImages.filter((img) => new RegExp(`/${folderName}/`).test(img.path));
  const getProjectCover = (folderName) => { const imgs = getProjectImages(folderName); if (!imgs.length) return null; const preferred = imgs.find((i) => /^cover\./i.test(i.filename)) || imgs.find((i) => /^(hero|banner|thumb|shine)\./i.test(i.filename)) || imgs[0]; return preferred.url; };
  const projects = [
    { id: 1, title: 'EssayGuide', subtitle: 'Personal Project', description: 'EssayGuide is the ultimate study companion crafted for Malaysian secondary students aiming to write better Bahasa Malaysia (BM), English (BI), and Bahasa Cina (BC) essays while enriching their vocabulary.', fullDescription: 'EssayGuide is the ultimate study companion crafted for Malaysian secondary students aiming to write better Bahasa Malaysia (BM), English (BI), and Bahasa Cina (BC) essays while enriching their vocabulary, especially for those living in rural areas who lack study resources and cannot afford essay books.', links: [{ label: 'Demo', url: 'https://youtu.be/GDECihgc8No?si=bR19NCQ-WnNldNLi' }, { label: 'App Store', url: 'https://apps.apple.com/my/app/essayguide-spm-essays-notes/id6504120853' }, { label: 'Google Play Store', url: 'https://play.google.com/store/apps/details?id=com.yieksiewhao.essay_guide&pcampaignid=web_share' }, {label: 'Website', url: 'https://essayguide-website.vercel.app/'}], images: [...getProjectImages('essayguide').map((i) => i.url)], image: getProjectCover('essayguide') },
    { id: 2, title: 'Shine', subtitle: 'NASA Space App Challenge 2021 Global Winner', description: 'A mobile application that simplifies NASA’s data in a user-friendly dashboard that allows homeowners to easily gain access to meteorological data, monitor the electrical output, estimate future electrical savings, and so on.', fullDescription: 'The Earth intercepts a lot of solar power, 173 thousand terawatts, that’s ten thousand times more powerful than the earth’s population consumes. However, a lot of useful information associated with solar energy is not commonly known by the general public, especially homeowners. Hence, this is why we created SHINE, a mobile application that simplifies NASA’s data in a user-friendly dashboard that allows homeowners to easily gain access to meteorological data, monitor the electrical output, estimate future electrical savings, and so on. Our app aims to help homeowners in making better solar panel purchasing decisions and encourage more people to utilize solar energy to save our planet Earth.', links: [{ label: 'Website', url: 'https://2021.spaceappschallenge.org/challenges/statements/you-are-my-sunshine/teams/change-maker' }, { label: 'Demo', url: 'https://youtu.be/9OMGi8XGjks?si=v4tdjnP6OzCUtKIX' }, { label: '30 Seconds of Glory', url: 'https://youtu.be/TUqa9pwxS5M?si=MoEkKwkf8DkgvaFF' }, { label: '240 Seconds of Glory', url: 'https://youtu.be/HJ_P2kFPf_8?si=N7z62f3S21W8_Vau' },], images: [...getProjectImages('shine').map((i) => i.url)], image: getProjectCover('shine') },
    { id: 3, title: 'EZ Park', subtitle: 'Shell NXplorers Malaysia 2023 National Champion & Best Speaker, KLESF - Gold', description: 'EZ Park is an IoT-based smart parking system and app that helps drivers to find their indoor parking seats easier and faster.', fullDescription: 'EZ Park is an IoT-based smart parking system and app that helps drivers to find their indoor parking seats easier and faster. EZ Park app allows drivers to know exactly where to park their car by receiving real-time data from sensors connected to embedded systems (Arduino) using Bluetooth. Drivers using this app will not only be able to save time but most importantly, minimize greenhouse gas emissions.', links: [{ label: 'YouTube', url: 'https://youtu.be/6enIUh_yjNc' }, { label: 'News 1', url: 'https://nxplorers.com/en/news/students-impress-in-malaysia-with-nxthinking' }, { label: 'News 2', url: 'https://dayakdaily.com/it-warriors-from-smk-bintulu-named-national-champions-of-shell-nxplorers-malaysia-2022/' }, { label: 'News 3', url: 'https://www.thestar.com.my/starpicks/2025/09/10/unlocking-potential-through-shell-nxplorers' }], images: [...getProjectImages('ezpark').map((i) => i.url)], image: getProjectCover('ezpark') },
    { id: 4, title: 'Jom Hands On', subtitle: 'Community Project', description: 'We are a STEM platform aiming to empower students to go beyond the textbook, dive into real-world challenges, and develop practical skills', fullDescription: 'We host STEM based events in neighbourhood communities, carry out outreach to schools to teach young Malaysians the wonders of science through our hands-on experiments. Our makerspace event focuses on letting students conduct these experiments with our guidance to allow first hand learning and also enhance their lab skills. With this, we strongly believe we can achieve our mission from one hand to the next!', links: [{ label: 'Website', url: 'https://jomhandson.vercel.app/' }], images: [...getProjectImages('jomhandson').map((i) => i.url)], image: getProjectCover('jomhandson') },
    { id: 5, title: 'Low-cost Photoelectric Effect Model', subtitle: 'Physics', description: 'A low-cost model using a solar cell, galvanometer, and coloured filters. This setup demonstrated that light energy is quantised into photons, with each photon’s energy depending on its frequency. ', fullDescription: 'When I was studying quantum physics in class, I realised my peers had difficulty understanding the abstract concept of photons. In the textbook, the photoelectric effect is typically introduced using a photocell circuit, which makes it hard to observe firsthand. Due to the lack of specialised lab equipment, I collaborated with my high school Physics teacher to design and build a low-cost model using a solar cell, galvanometer, and coloured filters. This setup demonstrated that light energy is quantised into photons, with each photon’s energy depending on its frequency. Furthermore, the same apparatus could be connected to concepts such as Young’s Double-Slit experiment and the polarisation of light. By using this approach, I was able to make a complex topic more engaging and accessible, bridging the gap between textbook theory and a practical application of the photovoltaic effect. I enjoy turning complex Physics concepts into something easy to understand through real-life application.', links: [], images: [...getProjectImages('quantum').map((i) => i.url)], image: getProjectCover('quantum') },
    { id: 6, title: 'EcoPlus', subtitle: 'Shell NXplorers Malaysia 2020 State Level', description: 'A device motivates users to use recycle bags rather than plastic bags.', fullDescription: 'EZ Park is an IoT-based smart parking system and app that helps drivers to find their indoor parking seats easier and faster. EZ Park app allows drivers to know exactly where to park their car by receiving real-time data from sensors connected to embedded systems (Arduino) using Bluetooth. Drivers using this app will not only be able to save time but most importantly, minimize greenhouse gas emissions.', links: [{ label: 'Canva Slide', url: 'https://www.canva.com/design/DADx0ZxZb4o/1H_4-ICPzVeA5sJGvJ0DvA/view?utm_content=DADx0ZxZb4o&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf3e8abfabe' }], images: [...getProjectImages('ecoplus').map((i) => i.url)], image: getProjectCover('ecoplus') },
    { id: 7, title: 'Low-cost Kinetic Energy Model', subtitle: 'Physics', description: 'A model that will help students relate the terminologies of frequency and amplitude of waves with the vibration of air particles when sound is played.', fullDescription: 'A model that will help students relate the terminologies of frequency and amplitude of waves with the vibration of air particles when sound is played. Additionally, the model will enable students to determine the natural frequency of objects like strings by putting them into the model and studying resonance. Moreover, the model can also be used to explain the kinetic theory of gas, whereby a large amplitude of the particle is observed when more energy is provided to the model.', links: [], images: [...getProjectImages('kinetic').map((i) => i.url)], image: getProjectCover('kinetic') },
    { id: 8, title: 'Nothin’ but Mask', subtitle: 'Shell NXplorers Malaysia 2021 - First Runner-up', description: 'Nothin’ but Mask is an IoT smart bin specifically for face mask disposal in parking lot that come with a few remarkable features.', fullDescription: 'Nothin’ but Mask is an IoT smart bin specifically for face mask disposal in parking lot that come with a few remarkable features. First, we’ve included GPS tracking technology that sends the location to the app in real-time. This allows the owner to track the bin more reliably, and preventing the bin from being stolen. The location is also linked with our webpage, by scanning the QR Code, new users can now find the location faster than ever before. Next, An ultrasonic sensor was added. In a place with a high demand for face mask littering like parking lots, the monitoring of face masks is necessary for shop owners. If the garbage collector wasn’t able to collect the face masks before it gets full, they can use this feature to inform them about it too. Besides that, two UV LEDs were added on the top to disinfect the masks. It makes the disposal site safer for passerby and garbage collectors while they dispose or collect the masks. To make it more environmentally friendly, we choose a solar panel as the main power supply. To ensure that only face masks are thrown into the bin, we have also designed the bin with a slot that fits the size of a mask.', links: [{ label: 'YouTube', url: 'https://youtu.be/t4NiAEGP9U0' }], images: [...getProjectImages('nothinbutmask').map((i) => i.url)], image: getProjectCover('nothinbutmask') },
    { id: 9, title: 'Air Conditioner Water Leakage Detector (AC WALEDE)', subtitle: 'KLESF 2019 - Bronze Medal', description: 'AC WALEDE is an IoT-based smart water leakage detector for air conditioners.', fullDescription: 'AC WALEDE is an IoT-based smart water leakage detector for air conditioners. When water in an air conditioner is about to leak, an ultrasonic sensor placed above the tray detects the rising water level. It then triggers an LED and buzzer to alert the user, while simultaneously sending a notification through our app.', links: [{ label: 'YouTube', url: 'https://youtu.be/dbbefGvp5NM' }], images: [...getProjectImages('acld').map((i) => i.url)], image: getProjectCover('acld') },
    { id: 10, title: 'The Frio: Self-cooling House', subtitle: 'Digital Ninja Programme Best 3D Design', description: 'The Frio is a self-cooling house designed to reduce interior temperatures in Malaysia. A more energy-saving solution for future houses.', fullDescription: 'The Frio is a self-cooling house designed to reduce interior temperatures in Malaysia. It incorporates unique designs that minimize heat absorption in buildings. Its main function is to use low-powered fans to draw cool air from outside and distribute it through other floors. When the temperature rises, warm air flows upward through the ceiling and is released by automatic roofs that are triggered by a temperature sensor.', links: [{ label: 'Canva Slide', url: 'https://www.canva.com/design/DAEJd-6T3ms/o9kTfC0mFtsmgC2YvMlSZg/view?utm_content=DAEJd-6T3ms&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h969b16cbe6' }], images: [...getProjectImages('frio').map((i) => i.url)], image: getProjectCover('frio') },
    { id: 11, title: 'Gotcha Food', subtitle: 'Young Innovators Challenge 2021 Silver, KLESF 2021 Silver', description: 'Gotcha Food is a hybrid of e-commerce system and Raspberry Pi aims to reduce food wastage and at the same time maximize the value of food.', fullDescription: 'Gotcha Food is a hybrid of e-commerce system and Raspberry Pi aims to reduce food wastage and at the same time maximize the value of food. For every time you open the fridge, the ultrasonic sensor will be triggered and send a signal to Raspberry Pi to take a photo and send it to our app before you close the fridge', links: [{ label: 'YouTube', url: 'https://youtu.be/XAb1wtEq9-Q' },], images: [...getProjectImages('gotchafood').map((i) => i.url)], image: getProjectCover('gotchafood') },
    { id: 12, title: 'AISR (Artificial Intelligence Stroke Rehabilitation)', subtitle: 'KYUEM AI Hackathon - Champion', description: 'AISR is a web based AI model, allows stroke patients to do rehabilitation with webcam. AISR makes stroke recovery accessible, personalized, and effective—giving patients the tools to regain independence, right from their homes.', fullDescription: 'EZ Park is an IoT-based smart parking system and app that helps drivers to find their indoor parking seats easier and faster. EZ Park app allows drivers to know exactly where to park their car by receiving real-time data from sensors connected to embedded systems (Arduino) using Bluetooth. Drivers using this app will not only be able to save time but most importantly, minimize greenhouse gas emissions.', links: [{ label: 'Website', url: 'https://openlaunch.org/aisr/' }], images: [...getProjectImages('aisr').map((i) => i.url)], image: getProjectCover('aisr') },
    { id: 13, title: 'Crave 2 Cave', subtitle: 'Personal -> KYUEM Start-Up Hackathon 2025 - Champion', description: 'Crave 2 Cave (C2C) is a affordable food delivery service specially created for Kolej Yayasan UEM (KYUEM) students.', fullDescription: 'Crave 2 Cave (C2C) is a affordable food delivery service specially created for Kolej Yayasan UEM (KYUEM) students. Our college’s remote location means most delivery platforms either don’t serve us or cost more than students can reasonably pay. C2C solves that with reliable, student-friendly pricing and campus-focused logistics. We connect students to approved restaurants through a group order system and ensure their food is delivered directly to KYUEM.', links: [{ label: 'Website', url: 'https://crave2cave.vercel.app/' }, { label: 'Demo', url: 'https://youtu.be/D4tE5oGe7ng?si=8J6D23Jyz99iFY7T' }], images: [...getProjectImages('c2c').map((i) => i.url)], image: getProjectCover('c2c') },
    { id: 14, title: 'iTravel', subtitle: 'Mobile App Hackathon 2020 - Champion', description: 'iTravel. A new way to travel. As people are afraid and worry to travel physically, then why not travel virtually? By using our app, people have no way to worry about the pandemic, they can literally travel anywhere anytime. Isn’t it sounds impossible?', fullDescription: 'iTravel. A new way to travel. As people are afraid and worry to travel physically, then why not travel virtually? By using our app, people have no way to worry about the pandemic, they can literally travel anywhere anytime. Isn’t it sounds impossible?', links: [{ label: 'YouTube', url: 'https://youtu.be/RmeqHp94muU?si=9xUa1TlF-7TYtopg' }], images: [...getProjectImages('itravel').map((i) => i.url)], image: getProjectCover('itravel') },
    { id: 15, title: 'Zero Strays Miri', subtitle: 'Community Project', description: 'Zero Strays is an all-in-one app designed to empower the citizens of Miri to make a real difference in the lives of stray cats and dogs.', fullDescription: 'Zero Strays is an all-in-one app designed to empower the citizens of Miri to make a real difference in the lives of stray cats and dogs. Whether you’re looking to adopt a furry friend, contribute to rescue efforts, or stay informed about stray-related news, this app has you covered.', links: [{ label: 'Instagram', url: 'https://www.instagram.com/p/C9w3rTpyJYl/' }, { label: 'App Store', url: 'https://apps.apple.com/my/app/zero-strays-miri/id6740243158' }, { label: 'Google Play Store', url: 'https://play.google.com/store/apps/details?id=com.zerostrays.miri&pcampaignid=web_share' }], images: [...getProjectImages('zerostrays').map((i) => i.url)], image: getProjectCover('zerostrays') },
    { id: 16, title: 'Fo Jing (Buddhist scripture) App', subtitle: 'Community Project', description: 'I helped my father’s friend to develop a Buddhist song player app featuring lyrics, inspired by the idea of Spotify’s lyrics player.', fullDescription: 'I helped my father’s friend to develop a Buddhist song player app featuring lyrics, inspired by the idea of Spotify’s lyrics player. He loved it!', links: [], images: [...getProjectImages('buddhist').map((i) => i.url)], image: getProjectCover('buddhist') },
  ];
  const digitalLibraryContext = require.context("./digital_library", true, /\.(png|jpe?g|webp|gif)$/i);
  const prettyTitle = (path) => path.split("/").pop().replace(/\.[^/.]+$/, "").replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
  const photos = digitalLibraryContext.keys().sort().map((key, i) => ({ id: i + 1, url: digitalLibraryContext(key), title: prettyTitle(key), }));

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <ScrollToTop /> 

      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={
            <div className="max-w-7xl mx-auto py-12 sm:py-16 animate-fadeIn">
              <h1 className="text-4xl sm:text-5xl font-semibold mb-3 text-gray-900">Projects</h1>
              <p className="text-base sm:text-lg text-gray-500 mb-16 sm:mb-20">Little things that mean a lot to me.</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {projects.map((project) => (
                  <div key={project.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    <div className="relative overflow-hidden bg-gray-100 aspect-[16/9]"><img src={project.image} alt={project.title} loading="lazy" className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]" /></div>
                    <div className="p-5 sm:p-6">
                      <p className="text-sm font-medium text-indigo-600 mb-2">{project.subtitle}</p>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-900">{project.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-5 text-sm sm:text-base">{project.description}</p>
                      <button onClick={() => setSelectedProject(project)} className="group/btn inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:gap-3 transition-all"><span>Learn More</span><ArrowRight className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          } />
          <Route path="/journey" element={
            <div className="max-w-7xl mx-auto py-12 sm:py-16 animate-fadeIn">
              <h1 className="text-4xl sm:text-5xl font-semibold mb-3 text-gray-900">Highlights</h1>
              <p className="text-base sm:text-lg text-gray-500 mb-16 sm:mb-20">A look back at where it all began.</p>
              <div className="relative">
                <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-400 via-purple-400 to-indigo-500"></div>
                {journeyData.map((item, index) => {
                  const journeyGallery = item.images.map((imgUrl, i) => ({ url: imgUrl, title: `${item.title} - Image ${i + 1}` }));
                  return (
                    <div key={index} className="relative pl-12 sm:pl-20 pb-16 sm:pb-20 group">
                      <div className="absolute left-2.5 sm:left-6 w-5 h-5 bg-indigo-500 rounded-full border-4 border-white shadow-lg group-hover:scale-125 group-hover:bg-purple-500 transition-all duration-300"></div>
                      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-8">
                        <div className="flex items-center gap-2 text-indigo-600 font-medium mb-3"><Calendar className="w-4 h-4" />{item.year}</div>
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">{item.title}</h3>
                        <div className="flex flex-col lg:flex-row gap-6">
                          <div className="flex-1"><ul className="space-y-2">{item.achievements.map((achievement, idx) => (<li key={idx} className="flex items-start gap-3 text-gray-600"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div><span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: highlightKeywords(achievement) }} /></li>))}</ul></div>
                          <div className="lg:w-96 flex-shrink-0">
                            <div onClick={() => setSelectedPhoto({ url: journeyGallery[0].url, title: journeyGallery[0].title, gallery: journeyGallery, currentIndex: 0 })} className="overflow-hidden rounded-lg cursor-pointer group/img mb-4"><img src={item.images[0]} alt={`${item.title} main`} className="w-full aspect-[16/9] object-cover group-hover/img:scale-105 transition-transform duration-500" /></div>
                            {item.images.length > 1 && (<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">{item.images.slice(1).map((img, imgIndex) => (<div key={imgIndex} onClick={() => setSelectedPhoto({ url: img, title: journeyGallery[imgIndex + 1].title, gallery: journeyGallery, currentIndex: imgIndex + 1 })} className="overflow-hidden rounded-lg cursor-pointer group/img aspect-square"><img src={img} alt={`${item.title} ${imgIndex + 2}`} className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500" /></div>))}</div>)}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          } />
          <Route path="/photos" element={
            <div className="max-w-7xl mx-auto py-12 sm:py-16 animate-fadeIn">
              <h1 className="text-4xl sm:text-5xl font-semibold mb-3 text-gray-900">Digital Library</h1>
              <p className="text-base sm:text-lg text-gray-500 mb-16 sm:mb-20">A digital archive of memories and feelings.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {photos.map((photo, index) => (
                  <div key={photo.id} onClick={() => setSelectedPhoto({ url: photo.url, title: photo.title, gallery: photos, currentIndex: index })} className="aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group relative shadow-md hover:shadow-xl transition-all">
                    <img src={photo.url} alt={photo.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 sm:p-4"><p className="text-white font-medium text-xs sm:text-sm">{photo.title}</p></div>
                  </div>
                ))}
              </div>
            </div>
          } />
          <Route path="/projects" element={<Navigate to="/" />} />
        </Routes>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto animate-fadeIn" onClick={() => setSelectedProject(null)}>
          <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
            <div className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="relative"><button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 shadow-lg transition-colors"><X className="w-5 h-5 sm:w-6 sm:h-6" /></button></div>
              <div className="p-6 sm:p-10">
                <p className="text-sm font-medium text-indigo-600 mb-2">{selectedProject.subtitle}</p>
                <h2 className="text-2xl sm:text-4xl font-semibold mb-6 text-gray-900">{selectedProject.title}</h2>
                <div className="mb-8"><h3 className="text-lg font-semibold mb-3 text-gray-900">About This Project</h3><p className="text-gray-600 leading-relaxed">{selectedProject.fullDescription}</p></div>
                {selectedProject.links && selectedProject.links.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">Links</h3>
                    <div className="flex flex-wrap gap-3">{selectedProject.links.map((link, i) => (<a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">{link.label} <ExternalLink className="w-4 h-4" /></a>))}</div>
                  </div>
                )}
                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Project Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{selectedProject.images.map((img, i) => {
                        const projectGallery = selectedProject.images.map((imgUrl, idx) => ({ url: imgUrl, title: `${selectedProject.title} - Image ${idx + 1}` }));
                        return (
                            <div key={i} className="overflow-hidden rounded-lg shadow-md cursor-pointer group" onClick={() => setSelectedPhoto({ url: img, title: projectGallery[i].title, gallery: projectGallery, currentIndex: i })}>
                                <img src={img} alt={`${selectedProject.title} ${i + 1}`} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                        )
                    })}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 sm:p-6 animate-fadeIn" onClick={() => setSelectedPhoto(null)}>
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedPhoto(null)} className="absolute top-0 right-0 text-white hover:text-gray-300 transition-colors bg-black/30 rounded-full p-2"><X className="w-6 h-6 sm:w-8 sm:h-8" /></button>
            {selectedPhoto.gallery && selectedPhoto.gallery.length > 1 && (
              <>
                <button onClick={(e) => { e.stopPropagation(); const newIndex = selectedPhoto.currentIndex > 0 ? selectedPhoto.currentIndex - 1 : selectedPhoto.gallery.length - 1; const newPhoto = selectedPhoto.gallery[newIndex]; setSelectedPhoto({ ...selectedPhoto, url: newPhoto.url, title: newPhoto.title, currentIndex: newIndex }); }} className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/30 rounded-full p-3"><ArrowRight className="w-6 h-6 rotate-180" /></button>
                <button onClick={(e) => { e.stopPropagation(); const newIndex = selectedPhoto.currentIndex < selectedPhoto.gallery.length - 1 ? selectedPhoto.currentIndex + 1 : 0; const newPhoto = selectedPhoto.gallery[newIndex]; setSelectedPhoto({ ...selectedPhoto, url: newPhoto.url, title: newPhoto.title, currentIndex: newIndex }); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/30 rounded-full p-3"><ArrowRight className="w-6 h-6" /></button>
              </>
            )}
            <img src={selectedPhoto.url} alt={selectedPhoto.title} className="w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" />
            <p className="text-white text-center mt-4 sm:mt-6 text-base sm:text-lg font-medium">{selectedPhoto.title}</p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}