// Firebase initialization (using compat for Firestore)
const firebaseConfig = {
  apiKey: "AIzaSyDEp8MiMcy80GDw1KJoa6aQEXlTK_JY2xw",
  authDomain: "aadish-quiz-app.firebaseapp.com",
  projectId: "aadish-quiz-app",
  storageBucket: "aadish-quiz-app.appspot.com",
  messagingSenderId: "618393028300",
  appId: "1:618393028300:web:0f98efa9a01120d93f6469",
  measurementId: "G-0C961S61CV"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

// Quiz configuration
const questionperquiz = "all"; // show all available option
const timeperquiz = 15; // seconds

// Quiz Data (split by class)
const QUESTIONS = {
  science: {
    class9: [
      { q: "What planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: 1 },
      { q: "What is H2O commonly known as?", options: ["Oxygen", "Hydrogen", "Water", "Salt"], answer: 2 },
      { q: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"], answer: 2 },
      { q: "What is the boiling point of water?", options: ["100°C", "0°C", "50°C", "200°C"], answer: 0 },
      { q: "Which organ pumps blood?", options: ["Liver", "Heart", "Lungs", "Brain"], answer: 1 },
      { q: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: 2 },
      { q: "What is the process by which plants make food?", options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"], answer: 1 },
      { q: "Which gas is most abundant in the Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: 1 },
      { q: "What is the chemical symbol for Iron?", options: ["Ir", "Fe", "In", "I"], answer: 1 },
      { q: "What is the hardest natural substance?", options: ["Gold", "Iron", "Diamond", "Silver"], answer: 2 },
      { q: "Which part of the plant conducts photosynthesis?", options: ["Root", "Stem", "Leaf", "Flower"], answer: 2 },
      { q: "What is the main function of white blood cells?", options: ["Transport oxygen", "Fight infection", "Clot blood", "Store fat"], answer: 1 },
      { q: "What is the SI unit of temperature?", options: ["Celsius", "Fahrenheit", "Kelvin", "Joule"], answer: 2 },
      { q: "Which vitamin is produced when sunlight hits the skin?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: 3 },
      { q: "What is the center of an atom called?", options: ["Electron", "Proton", "Nucleus", "Neutron"], answer: 2 },
      { q: "Which organ helps in breathing?", options: ["Heart", "Lungs", "Liver", "Kidney"], answer: 1 },
      { q: "What is the main source of energy for the Earth?", options: ["Wind", "Sun", "Water", "Coal"], answer: 1 },
      { q: "What is the chemical formula for table salt?", options: ["NaCl", "KCl", "CaCl2", "MgCl2"], answer: 0 },
      { q: "Which planet is closest to the Sun?", options: ["Venus", "Earth", "Mercury", "Mars"], answer: 2 },
      { q: "What is the function of roots?", options: ["Photosynthesis", "Absorb water", "Reproduction", "Respiration"], answer: 1 },
      { q: "Which scientist discovered gravity?", options: ["Newton", "Einstein", "Galileo", "Curie"], answer: 0 },
      { q: "What is the largest bone in the human body?", options: ["Femur", "Tibia", "Fibula", "Humerus"], answer: 0 },
      { q: "What is the main gas in the air we breathe?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: 1 },
      { q: "What is the process of water changing to vapor called?", options: ["Condensation", "Evaporation", "Sublimation", "Precipitation"], answer: 1 },
      { q: "Which animal is known as the king of the jungle?", options: ["Tiger", "Lion", "Elephant", "Bear"], answer: 1 },
      { q: "What is the smallest unit of life?", options: ["Tissue", "Cell", "Organ", "Organism"], answer: 1 },
      { q: "Which planet is known for its rings?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: 1 },
      { q: "What is the main function of the heart?", options: ["Digest food", "Pump blood", "Filter waste", "Produce hormones"], answer: 1 },
      { q: "What is the boiling point of water in Fahrenheit?", options: ["100°F", "180°F", "212°F", "220°F"], answer: 2 },
      { q: "Which part of the body controls all activities?", options: ["Heart", "Brain", "Lungs", "Liver"], answer: 1 }
    ],
    class10: [
      { q: "What is the chemical symbol for Sodium?", options: ["Na", "So", "S", "N"], answer: 0 },
      { q: "Which gas is essential for photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: 1 },
      { q: "What is Newton's third law?", options: ["F=ma", "Action-Reaction", "Gravity", "Inertia"], answer: 1 },
      { q: "What is the SI unit of force?", options: ["Joule", "Newton", "Watt", "Pascal"], answer: 1 },
      { q: "Which part of the cell contains DNA?", options: ["Nucleus", "Cytoplasm", "Cell wall", "Mitochondria"], answer: 0 },
      { q: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"], answer: 1 },
      { q: "What is the speed of light?", options: ["3x10^8 m/s", "3x10^6 m/s", "3x10^5 m/s", "3x10^7 m/s"], answer: 0 },
      { q: "Which vitamin is known as ascorbic acid?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: 2 },
      { q: "What is the main function of red blood cells?", options: ["Fight infection", "Transport oxygen", "Clot blood", "Store fat"], answer: 1 },
      { q: "What is the chemical formula for water?", options: ["H2O", "CO2", "O2", "NaCl"], answer: 0 },
      { q: "Which planet is known as the Morning Star?", options: ["Mars", "Venus", "Jupiter", "Saturn"], answer: 1 },
      { q: "What is the process of cell division called?", options: ["Meiosis", "Mitosis", "Fusion", "Fission"], answer: 1 },
      { q: "What is the main function of the lungs?", options: ["Digest food", "Pump blood", "Exchange gases", "Produce hormones"], answer: 2 },
      { q: "What is the SI unit of electric current?", options: ["Ampere", "Volt", "Ohm", "Watt"], answer: 0 },
      { q: "Which scientist developed the theory of relativity?", options: ["Newton", "Einstein", "Galileo", "Curie"], answer: 1 },
      { q: "What is the main source of energy for plants?", options: ["Soil", "Water", "Sunlight", "Air"], answer: 2 },
      { q: "What is the chemical symbol for Potassium?", options: ["P", "K", "Pt", "Po"], answer: 1 },
      { q: "Which organ removes waste from the blood?", options: ["Heart", "Liver", "Kidney", "Lungs"], answer: 2 },
      { q: "What is the process of liquid changing to gas called?", options: ["Condensation", "Evaporation", "Sublimation", "Precipitation"], answer: 1 },
      { q: "What is the largest organ in the human body?", options: ["Heart", "Skin", "Liver", "Brain"], answer: 1 },
      { q: "Which planet is known as the Blue Planet?", options: ["Earth", "Neptune", "Uranus", "Mars"], answer: 0 },
      { q: "What is the main function of the stomach?", options: ["Digest food", "Pump blood", "Exchange gases", "Produce hormones"], answer: 0 },
      { q: "What is the SI unit of pressure?", options: ["Pascal", "Newton", "Joule", "Watt"], answer: 0 },
      { q: "Which scientist discovered penicillin?", options: ["Newton", "Fleming", "Curie", "Einstein"], answer: 1 },
      { q: "What is the chemical symbol for Calcium?", options: ["Ca", "C", "Cl", "Ce"], answer: 0 },
      { q: "What is the process of plants losing water called?", options: ["Transpiration", "Respiration", "Photosynthesis", "Fermentation"], answer: 0 },
      { q: "Which part of the body is responsible for balance?", options: ["Ear", "Eye", "Nose", "Tongue"], answer: 0 },
      { q: "What is the main function of the liver?", options: ["Digest food", "Filter blood", "Exchange gases", "Produce hormones"], answer: 1 },
      { q: "What is the boiling point of water in Kelvin?", options: ["273K", "373K", "100K", "212K"], answer: 1 },
      { q: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: 1 }
    ]
  },
  history: {
    class9: [
      { q: "Who was the first President of the USA?", options: ["Abraham Lincoln", "George Washington", "John Adams", "Thomas Jefferson"], answer: 1 },
      { q: "In which year did World War II end?", options: ["1945", "1939", "1918", "1965"], answer: 0 },
      { q: "Who discovered America?", options: ["Christopher Columbus", "Vasco da Gama", "James Cook", "Ferdinand Magellan"], answer: 0 },
      { q: "Which empire built the Colosseum?", options: ["Greek", "Roman", "Ottoman", "Persian"], answer: 1 },
      { q: "Who was known as the Maid of Orléans?", options: ["Cleopatra", "Joan of Arc", "Elizabeth I", "Marie Curie"], answer: 1 },
      { q: "Who was the first Prime Minister of India?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Rajendra Prasad"], answer: 0 },
      { q: "Which war ended with the Treaty of Versailles?", options: ["WWI", "WWII", "Cold War", "Civil War"], answer: 0 },
      { q: "Who was the founder of the Mughal Empire?", options: ["Akbar", "Babur", "Shah Jahan", "Aurangzeb"], answer: 1 },
      { q: "Who wrote the Indian National Anthem?", options: ["Rabindranath Tagore", "Bankim Chandra", "Sarojini Naidu", "Subhash Chandra Bose"], answer: 0 },
      { q: "Which civilization is known for pyramids?", options: ["Greek", "Roman", "Egyptian", "Chinese"], answer: 2 },
      { q: "Who was the first woman ruler of India?", options: ["Razia Sultana", "Indira Gandhi", "Sarojini Naidu", "Jhansi Rani"], answer: 0 },
      { q: "Who was the last Governor-General of independent India?", options: ["Lord Mountbatten", "C. Rajagopalachari", "Jawaharlal Nehru", "Sardar Patel"], answer: 1 },
      { q: "Who was the first President of India?", options: ["Rajendra Prasad", "S. Radhakrishnan", "Zakir Hussain", "V.V. Giri"], answer: 0 },
      { q: "Who was the first woman Prime Minister of India?", options: ["Indira Gandhi", "Sonia Gandhi", "Sarojini Naidu", "Pratibha Patil"], answer: 0 },
      { q: "Who was the first Emperor of China?", options: ["Qin Shi Huang", "Kublai Khan", "Sun Yat-sen", "Mao Zedong"], answer: 0 },
      { q: "Who was the first President of South Africa after apartheid?", options: ["Nelson Mandela", "Desmond Tutu", "Jacob Zuma", "Thabo Mbeki"], answer: 0 },
      { q: "Who was the first female pharaoh of Egypt?", options: ["Cleopatra", "Hatshepsut", "Nefertiti", "Sobekneferu"], answer: 1 },
      { q: "Who was the first US President to live in the White House?", options: ["George Washington", "John Adams", "Thomas Jefferson", "James Madison"], answer: 1 },
      { q: "Who was the first Indian to win a Nobel Prize?", options: ["Rabindranath Tagore", "C.V. Raman", "Mother Teresa", "Amartya Sen"], answer: 0 },
      { q: "Who was the first woman to win a Nobel Prize?", options: ["Marie Curie", "Mother Teresa", "Jane Addams", "Dorothy Hodgkin"], answer: 0 },
      { q: "Who was the first Indian astronaut?", options: ["Rakesh Sharma", "Kalpana Chawla", "Sunita Williams", "Yuri Gagarin"], answer: 0 },
      { q: "Who was the first Indian to climb Mount Everest?", options: ["Tenzing Norgay", "Bachendri Pal", "Edmund Hillary", "Santosh Yadav"], answer: 0 },
      { q: "Who was the first Indian woman to climb Mount Everest?", options: ["Bachendri Pal", "Santosh Yadav", "Premlata Agarwal", "Anshu Jamsenpa"], answer: 0 },
      { q: "Who was the first Indian to win an Olympic medal?", options: ["Norman Pritchard", "Milkha Singh", "P.T. Usha", "Abhinav Bindra"], answer: 0 },
      { q: "Who was the first Indian to win a gold medal at the Olympics?", options: ["Abhinav Bindra", "Norman Pritchard", "Milkha Singh", "P.T. Usha"], answer: 0 },
      { q: "Who was the first Indian to win a medal at the Paralympics?", options: ["Murlikant Petkar", "Devendra Jhajharia", "Deepa Malik", "Mariyappan Thangavelu"], answer: 0 },
      { q: "Who was the first Indian to win a medal at the Commonwealth Games?", options: ["Rashid Anwar", "Milkha Singh", "P.T. Usha", "Abhinav Bindra"], answer: 0 },
      { q: "Who was the first Indian to win a medal at the Asian Games?", options: ["Milkha Singh", "P.T. Usha", "Abhinav Bindra", "Rashid Anwar"], answer: 0 },
      { q: "Who was the first Indian to win a medal at the World Championships?", options: ["Milkha Singh", "P.T. Usha", "Abhinav Bindra", "Rashid Anwar"], answer: 0 }
    ],
    class10: [
      { q: "Who wrote the Indian Constitution?", options: ["Jawaharlal Nehru", "B. R. Ambedkar", "Mahatma Gandhi", "Sardar Patel"], answer: 1 },
      { q: "When did India gain independence?", options: ["1947", "1950", "1930", "1942"], answer: 0 },
      { q: "Who was the first Mughal Emperor?", options: ["Akbar", "Babur", "Shah Jahan", "Aurangzeb"], answer: 1 },
      { q: "Which war ended with the Treaty of Versailles?", options: ["WWI", "WWII", "Cold War", "Civil War"], answer: 0 },
      { q: "Who was the first woman Prime Minister of India?", options: ["Indira Gandhi", "Sonia Gandhi", "Sarojini Naidu", "Pratibha Patil"], answer: 0 }
    ]
  },
  math: {
    class9: [
      { q: "What is 7 x 8?", options: ["54", "56", "64", "58"], answer: 1 },
      { q: "What is the square root of 81?", options: ["9", "8", "7", "6"], answer: 0 },
      { q: "What is 15% of 200?", options: ["25", "30", "35", "40"], answer: 1 },
      { q: "What is 12 divided by 3?", options: ["2", "3", "4", "5"], answer: 2 },
      { q: "What is the value of Pi (approx)?", options: ["2.14", "3.14", "4.13", "3.41"], answer: 1 }
    ],
    class10: [
      { q: "What is the derivative of x^2?", options: ["x", "2x", "x^2", "2"], answer: 1 },
      { q: "What is the area of a circle?", options: ["πr^2", "2πr", "πd", "r^2"], answer: 0 },
      { q: "What is 25% of 160?", options: ["40", "30", "50", "35"], answer: 0 },
      { q: "What is the cube root of 27?", options: ["2", "3", "9", "6"], answer: 1 },
      { q: "What is the value of sin(90°)?", options: ["0", "1", "-1", "0.5"], answer: 1 }
    ]
  },
  general: {
    class9: [
      { q: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: 2 },
      { q: "Which language is used in Brazil?", options: ["Spanish", "Portuguese", "French", "English"], answer: 1 },
      { q: "How many continents are there?", options: ["5", "6", "7", "8"], answer: 2 },
      { q: "What is the largest ocean?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: 3 },
      { q: "Which animal is known as the King of the Jungle?", options: ["Tiger", "Lion", "Elephant", "Bear"], answer: 1 }
    ],
    class10: [
      { q: "Who is the current Secretary-General of the UN?", options: ["Ban Ki-moon", "Kofi Annan", "Antonio Guterres", "Boutros Boutros-Ghali"], answer: 2 },
      { q: "Which is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: 1 },
      { q: "What is the national sport of Japan?", options: ["Sumo Wrestling", "Baseball", "Soccer", "Cricket"], answer: 0 },
      { q: "Which planet is closest to the Sun?", options: ["Venus", "Earth", "Mercury", "Mars"], answer: 2 },
      { q: "What is the hardest natural substance?", options: ["Gold", "Iron", "Diamond", "Silver"], answer: 2 }
    ]
  },
  sanskrit: {
    class9: [
      { q: "संस्कृत में 'पुस्तक' का अर्थ क्या है?", options: ["Book", "Pen", "Table", "Chair"], answer: 0 },
      { q: "'गच्छति' का अर्थ क्या है?", options: ["Runs", "Goes", "Eats", "Sleeps"], answer: 1 }
    ],
    class10: [
      { q: "'विद्या' शब्द का अर्थ क्या है?", options: ["Knowledge", "Power", "Money", "Food"], answer: 0 },
      { q: "'शुभम्' का अर्थ क्या है?", options: ["Good", "Bad", "Big", "Small"], answer: 0 }
    ]
  },
  hindi: {
    class9: [
      { q: "'पुस्तक' का पर्यायवाची शब्द क्या है?", options: ["किताब", "कागज", "कला", "कक्षा"], answer: 0 },
      { q: "'विद्यालय' का अर्थ क्या है?", options: ["School", "Hospital", "Market", "Temple"], answer: 0 }
    ],
    class10: [
      { q: "'सूर्य' का विलोम शब्द क्या है?", options: ["चाँद", "अंधकार", "रात", "तारा"], answer: 1 },
      { q: "'जल' का अर्थ क्या है?", options: ["Water", "Fire", "Air", "Earth"], answer: 0 }
    ]
  }
};

// App State
let state = {
  user: {
    name: 'Player 1',
    avatar: 'https://i.pravatar.cc/100',
    score: 0
  },
  category: null,
  sub: null,
  questions: [],
  current: 0,
  correct: 0,
  wrong: 0,
  totalTime: 0,
  timer: 15,
  timerInterval: null,
  lifelines: {
    fifty: true,
    skip: true,
    pause: true,
    poll: true
  },
  usedFifty: false,
  usedSkip: false,
  usedPause: false,
  paused: false,
  skipped: 0
};

// DOM Elements
const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const userName = document.getElementById('user-name');
const userAvatar = document.getElementById('user-avatar');
const userScore = document.getElementById('user-score');
const categoryCards = document.querySelectorAll('.category-card');
const questionCounter = document.getElementById('question-counter');
const questionText = document.getElementById('quiz-question-text');
const optionBtns = document.querySelectorAll('.option-btn');
const nextBtn = document.getElementById('next-btn');
const lifeline5050 = document.getElementById('lifeline-5050');
const lifelineSkip = document.getElementById('lifeline-skip');
const lifelinePause = document.getElementById('lifeline-pause');
const timerValue = document.getElementById('timer-value');
const resultScore = document.getElementById('result-score');
const correctCount = document.getElementById('correct-count');
const wrongCount = document.getElementById('wrong-count');
const totalTime = document.getElementById('total-time');
const retryBtn = document.getElementById('retry-btn');
const homeBtn = document.getElementById('home-btn');
const progressCircle = document.querySelector('.progress-circle .progress');
const quizProgressFill = document.getElementById('quiz-progress-fill');
const timerRing = document.getElementById('timer-ring');
const timerFg = timerRing ? timerRing.querySelector('.timer-fg') : null;
const miniScore = document.getElementById('mini-score');
const questionMedia = document.getElementById('question-media');
const answerFeedback = document.getElementById('answer-feedback');
const audiencePollBtn = document.getElementById('lifeline-poll');
const audiencePoll = document.getElementById('audience-poll');

// Profile modal logic
const profileEditTrigger = document.getElementById('profile-edit-trigger');
const profileModal = document.getElementById('profile-modal');
const profileForm = document.getElementById('profile-form');
const nicknameInput = document.getElementById('nickname');
const userClassSelect = document.getElementById('user-class');
const saveProfileBtn = document.getElementById('save-profile');
const cancelProfileBtn = document.getElementById('cancel-profile');

// Login page logic
const loginPage = document.getElementById('login-page');
const appMain = document.getElementById('app');
const loginForm = document.getElementById('login-form');
const loginUsername = document.getElementById('login-username');
const loginPassword = document.getElementById('login-password');
const loginError = document.getElementById('login-error');

// Login tab switching
const showLoginTab = document.getElementById('show-login');
const showSignUpTab = document.getElementById('show-signup');
const signupForm = document.getElementById('signup-form');
const signupUsername = document.getElementById('signup-username');
const signupPassword = document.getElementById('signup-password');
const signupError = document.getElementById('signup-error');
const signupSuccess = document.getElementById('signup-success');
const signupName = document.getElementById('signup-name');
const signupEmail = document.getElementById('signup-email');
const signupMobile = document.getElementById('signup-mobile');

// Sidebar/Menu logic
const menuToggle = document.getElementById('menu-toggle');
const sidebarMenu = document.getElementById('sidebar-menu');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const sidebarProfilePic = document.getElementById('sidebar-profile-pic');
const sidebarUsername = document.getElementById('sidebar-username');
const sidebarEmail = document.getElementById('sidebar-email');
const sidebarEditProfile = document.getElementById('sidebar-edit-profile');
const sidebarChangePassword = document.getElementById('sidebar-change-password');
const sidebarChangeEmail = document.getElementById('sidebar-change-email');
const sidebarProgressReport = document.getElementById('sidebar-progress-report');
const sidebarLogout = document.getElementById('sidebar-logout');
const sidebarHome = document.getElementById('sidebar-home');

// --- Custom Modal Logic ---
const customModal = document.getElementById('custom-modal');
const customModalBody = document.getElementById('custom-modal-body');
const customModalClose = document.getElementById('custom-modal-close');

function openCustomModal(html) {
  customModalBody.innerHTML = html;
  customModal.style.display = 'flex';
}
function closeCustomModal() {
  customModal.style.display = 'none';
}
customModalClose.addEventListener('click', closeCustomModal);
customModal.addEventListener('click', (e) => {
  if (e.target === customModal) closeCustomModal();
});

// --- Sidebar Actions with Beautiful Popups ---

// Change Password
sidebarChangePassword.addEventListener('click', () => {
  closeSidebar();
  openCustomModal(`
    <h2>Change Password</h2>
    <form id="change-password-form">
      <label for="old-password">Old Password:</label>
      <input type="password" id="old-password" required />
      <label for="new-password">New Password:</label>
      <input type="password" id="new-password" required />
      <div class="modal-actions">
        <button type="submit">Update</button>
      </div>
      <div id="change-password-msg"></div>
    </form>
  `);
  document.getElementById('change-password-form').onsubmit = async function(e) {
    e.preventDefault();
    const user = localStorage.getItem('quizLoggedInUser');
    const oldPassword = document.getElementById('old-password').value;
    const newPassword = document.getElementById('new-password').value;
    const msg = document.getElementById('change-password-msg');
    if (!oldPassword || !newPassword) {
      msg.textContent = 'Please fill both fields.';
      msg.className = 'modal-error';
      return;
    }
    // Fetch current password from Firestore
    const doc = await db.collection('users').doc(user).get();
    if (!doc.exists || doc.data().password !== oldPassword) {
      msg.textContent = 'Old password is incorrect.';
      msg.className = 'modal-error';
      return;
    }
    await db.collection('users').doc(user).update({ password: newPassword });
    msg.textContent = 'Password updated!';
    msg.className = 'modal-success';
    setTimeout(closeCustomModal, 1200);
  };
});

// Change Email
sidebarChangeEmail.addEventListener('click', () => {
  closeSidebar();
  openCustomModal(`
    <h2>Change Email</h2>
    <form id="change-email-form">
      <label for="current-password">Password:</label>
      <input type="password" id="current-password" required />
      <label for="new-email">New Email:</label>
      <input type="email" id="new-email" required />
      <div class="modal-actions">
        <button type="submit">Update</button>
      </div>
      <div id="change-email-msg"></div>
    </form>
  `);
  document.getElementById('change-email-form').onsubmit = async function(e) {
    e.preventDefault();
    const user = localStorage.getItem('quizLoggedInUser');
    const password = document.getElementById('current-password').value;
    const newEmail = document.getElementById('new-email').value;
    const msg = document.getElementById('change-email-msg');
    if (!password || !newEmail) {
      msg.textContent = 'Please fill both fields.';
      msg.className = 'modal-error';
      return;
    }
    // Fetch current password from Firestore
    const doc = await db.collection('users').doc(user).get();
    if (!doc.exists || doc.data().password !== password) {
      msg.textContent = 'Password is incorrect.';
      msg.className = 'modal-error';
      return;
    }
    await db.collection('users').doc(user).update({ email: newEmail });
    msg.textContent = 'Email updated!';
    msg.className = 'modal-success';
    setTimeout(closeCustomModal, 1200);
  };
});

// Progress Report
sidebarProgressReport.addEventListener('click', async () => {
  closeSidebar();
  const user = localStorage.getItem('quizLoggedInUser');
  if (!user) return;
  const userDoc = await db.collection('users').doc(user).get();
  let html = `<h2>Progress Report</h2>`;
  if (userDoc.exists) {
    const data = userDoc.data();
    html += `<div><strong>Name:</strong> ${data.name || ''}</div>
      <div><strong>Username:</strong> ${data.username || ''}</div>`;
  }
  // Fetch attempts
  const attemptsSnap = await db.collection('users').doc(user).collection('attempts').orderBy('date', 'desc').get();
  const attempts = attemptsSnap.docs.map(doc => doc.data());
  if (attempts.length === 0) {
    html += `<div style="margin-top:1em;">No quiz attempts yet.</div>`;
  } else {
    const totalQuizzes = attempts.length;
    const scores = attempts.map(a => a.score);
    const highest = Math.max(...scores);
    const average = (scores.reduce((a, b) => a + b, 0) / totalQuizzes).toFixed(2);
    const last = scores[0];
    const totalCorrect = attempts.reduce((a, b) => a + (b.correct || 0), 0);
    const totalWrong = attempts.reduce((a, b) => a + (b.wrong || 0), 0);
    html += `
      <div style="margin-top:1em;"><strong>Total Quizzes:</strong> ${totalQuizzes}</div>
      <div><strong>Average Score:</strong> ${average}</div>
      <div><strong>Highest Score:</strong> ${highest}</div>
      <div><strong>Last Quiz Score:</strong> ${last}</div>
      <div><strong>Total Correct:</strong> ${totalCorrect}</div>
      <div><strong>Total Wrong:</strong> ${totalWrong}</div>
    `;
  }
  openCustomModal(html);
});

// Utility
function shuffle(arr) {
  let a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(screen) {
  [homeScreen, quizScreen, resultScreen].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
  if (screen === homeScreen) animateCategoryCards();
  if (screen === quizScreen) animateQuestionCard();
}

function resetLifelines() {
  state.lifelines = { fifty: true, skip: true, pause: true, poll: true };
  lifeline5050.disabled = false;
  lifelineSkip.disabled = false;
  lifelinePause.disabled = false;
  audiencePollBtn.disabled = false;
}

async function startQuiz(category, sub) {
  state.category = category;
  state.sub = sub;

  try {
    let questions = [];
    if (navigator.onLine) {
      // Online: load from Firestore
      const snapshot = await db.collection('questions')
        .where('category', '==', category)
        .where('sub', '==', sub)
        .get();
      questions = snapshot.docs.map(doc => doc.data());
      // Fallback to local QUESTIONS if Firestore is empty
      if (questions.length === 0 && QUESTIONS[category] && QUESTIONS[category][sub]) {
        questions = QUESTIONS[category][sub];
      }
      // Cache for offline use
      if (questions.length > 0) {
        const cacheKey = `quizCache_${category}_${sub}`;
        localStorage.setItem(cacheKey, JSON.stringify(questions));
      }
    } else {
      // Offline: load from cache
      const cacheKey = `quizCache_${category}_${sub}`;
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        questions = JSON.parse(cached);
      } else if (QUESTIONS[category] && QUESTIONS[category][sub]) {
        // Fallback to hardcoded questions if available
        questions = QUESTIONS[category][sub];
      }
    }

    if (questions.length === 0) {
      throw new Error('No questions found for this category and subcategory (offline).');
    }

    state.questions = shuffle(questions).slice(0, 5);
    state.current = 0;
    state.correct = 0;
    state.wrong = 0;
    state.totalTime = 0;
    state.score = 0;
    resetLifelines();
    showScreen(quizScreen);
    renderQuestion();
  } catch (error) {
    console.error('Error loading questions:', error);
    alert('Error loading questions. Please try again.');
  }
}

function renderQuestion() {
  const q = state.questions[state.current];
  questionCounter.textContent = `Q${state.current + 1} of ${state.questions.length}`;
  questionText.textContent = q.q;
  setQuestionMedia(q);
  optionBtns.forEach((btn, i) => {
    btn.textContent = q.options[i];
    btn.className = 'option-btn';
    btn.disabled = false;
    btn.style.visibility = 'visible';
    btn.innerHTML = q.options[i];
  });
  nextBtn.disabled = true;
  setProgressBar(state.current, state.questions.length);
  setMiniScore(state.score);
  hideAudiencePoll();
  showAnswerFeedback();
  startTimer();
}

function startTimer() {
  clearInterval(state.timerInterval);
  state.timer = 15;
  timerValue.textContent = state.timer;
  setTimerRing(1, false);
  playSound('timer');
  state.timerInterval = setInterval(() => {
    if (!state.paused) {
      state.timer--;
      timerValue.textContent = state.timer;
      setTimerRing(state.timer / 15, state.timer <= 5);
      if (state.timer <= 0) {
        clearInterval(state.timerInterval);
        handleAnswer(null); // Time's up
      }
    }
  }, 1000);
}

function handleAnswer(selectedIdx) {
  // Stop timer sound
  if (sounds.timer) {
    sounds.timer.pause();
    sounds.timer.currentTime = 0;
  }
  clearInterval(state.timerInterval);
  const q = state.questions[state.current];
  let correct = q.answer;
  let explanation = q.explanation || '';
  optionBtns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) {
      btn.classList.add('correct');
      btn.innerHTML = btn.textContent + ' <span class="icon">✔️</span>';
    }
    if (selectedIdx !== null && i === selectedIdx && i !== correct) {
      btn.classList.add('incorrect');
      btn.innerHTML = btn.textContent + ' <span class="icon">❌</span>';
    }
  });
  animateOptionButtons(selectedIdx, correct);
  let isCorrect = null;
  if (selectedIdx === correct) {
    state.correct++;
    state.score += 5;
    state.user.score = state.score;
    isCorrect = true;
    confettiBurst(document.querySelector('.question-area'));
    playSound('correct');
  } else if (selectedIdx === null) {
    state.skipped++;
    isCorrect = null;
    playSound('timer');
  } else {
    state.wrong++;
    state.score -= 1;
    state.user.score = state.score;
    isCorrect = false;
    playSound('wrong');
  }
  userScore.textContent = state.score;
  setMiniScore(state.score);
  saveProfileToStorage();
  saveUserToDatabase();
  nextBtn.disabled = false;
  state.totalTime += (15 - state.timer);
  showAnswerFeedback(isCorrect, explanation);

  // Only auto-next if time ran out (selectedIdx === null)
  if (selectedIdx === null) {
    setTimeout(() => {
      if (quizScreen.classList.contains('active')) nextQuestion();
    }, 3000);
  }
}

function nextQuestion() {
  if (state.current < state.questions.length - 1) {
    state.current++;
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  showScreen(resultScreen);
  resultScore.textContent = `${state.correct}/${state.questions.length}`;
  correctCount.textContent = state.correct;
  wrongCount.textContent = state.wrong;
  totalTime.textContent = state.totalTime;
  animateProgressCircle(state.correct, state.questions.length);
  // Store quiz attempt for progress analysis
  const user = localStorage.getItem('quizLoggedInUser');
  if (user) {
    db.collection('users').doc(user).collection('attempts').add({
      date: firebase.firestore.FieldValue.serverTimestamp(),
      score: state.score,
      correct: state.correct,
      wrong: state.wrong,
      total: state.questions.length,
      category: state.category,
      sub: state.sub
    });
  }
}

function animateProgressCircle(correct, total) {
  const percent = correct / total;
  const circleLen = 2 * Math.PI * 54;
  const offset = circleLen * (1 - percent);
  progressCircle.style.strokeDashoffset = offset;
}

// Lifelines
lifeline5050.addEventListener('click', () => {
  if (!state.lifelines.fifty) return;
  state.lifelines.fifty = false;
  lifeline5050.disabled = true;
  const q = state.questions[state.current];
  let wrongs = [0,1,2,3].filter(i => i !== q.answer);
  shuffle(wrongs).slice(0,2).forEach(i => {
    optionBtns[i].style.visibility = 'hidden';
  });
});

lifelineSkip.addEventListener('click', () => {
  if (!state.lifelines.skip) return;
  state.lifelines.skip = false;
  lifelineSkip.disabled = true;
  clearInterval(state.timerInterval);
  nextQuestion();
});

lifelinePause.addEventListener('click', () => {
  if (!state.lifelines.pause) return;
  state.lifelines.pause = false;
  lifelinePause.disabled = true;
  state.paused = true;
  let pauseTime = 10;
  lifelinePause.textContent = `⏸️ (${pauseTime})`;
  const pauseInterval = setInterval(() => {
    pauseTime--;
    lifelinePause.textContent = `⏸️ (${pauseTime})`;
    if (pauseTime <= 0) {
      clearInterval(pauseInterval);
      state.paused = false;
      lifelinePause.textContent = '⏸️';
    }
  }, 1000);
});

// Option click with burst animation
optionBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    btn.classList.remove('clicked');
    void btn.offsetWidth; // force reflow for retrigger
    btn.classList.add('clicked');
    handleAnswer(i);
  });
  btn.addEventListener('animationend', (e) => {
    if (e.animationName === 'optionBurst') btn.classList.remove('clicked');
  });
});

nextBtn.addEventListener('click', nextQuestion);

// Category selection
categoryCards.forEach(card => {
  card.addEventListener('click', () => {
    // Remove 'active' from all cards
    categoryCards.forEach(c => c.classList.remove('active'));
    // Add 'active' to clicked card
    card.classList.add('active');
    // Optionally, scroll into view or focus
    // card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});

// Result actions
retryBtn.addEventListener('click', () => {
  startQuiz(state.category, state.sub);
  saveProfileToStorage();
});
homeBtn.addEventListener('click', () => {
  showScreen(homeScreen);
});

// Show modal
function openProfileModal() {
  nicknameInput.value = state.user.name;
  profileModal.style.display = 'flex';
  setTimeout(() => nicknameInput.focus(), 100);
}
// Hide modal
function closeProfileModal() {
  profileModal.style.display = 'none';
}
// Save profile
function updateProfileDisplay() {
  userName.textContent = state.user.name;
  userAvatar.src = state.user.avatar || `https://i.pravatar.cc/100?u=${state.user.name}`;
}
profileForm.addEventListener('submit', async function(e) {
  e.preventDefault();
  const newName = nicknameInput.value.trim() || 'Player 1';
  let avatarUrl = state.user.avatar;
  if (selectedAvatarUrl) {
    avatarUrl = selectedAvatarUrl;
  }
  state.user.name = newName;
  state.user.avatar = avatarUrl || `https://i.pravatar.cc/100?u=${newName}`;
  updateProfileDisplay();
  userAvatar.src = state.user.avatar;
  if (sidebarProfilePic) sidebarProfilePic.style.backgroundImage = `url('${state.user.avatar}')`;
  saveProfileToStorage();
  const user = localStorage.getItem('quizLoggedInUser') || newName;
  await db.collection('users').doc(user).set({
    name: state.user.name,
    avatar: state.user.avatar,
    score: state.score,
    updated: firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true });
  closeProfileModal();
});
// Cancel
cancelProfileBtn.addEventListener('click', function() {
  closeProfileModal();
});
// Open modal on profile click or Enter
profileEditTrigger.addEventListener('click', openProfileModal);
profileEditTrigger.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' || e.key === ' ') openProfileModal();
});
// Save/load profile to/from localStorage
function saveProfileToStorage() {
  localStorage.setItem('quizUserProfile', JSON.stringify({
    name: state.user.name,
    score: state.score
  }));
}
function loadProfileFromStorage() {
  const data = localStorage.getItem('quizUserProfile');
  if (data) {
    try {
      const user = JSON.parse(data);
      if (user.name) state.user.name = user.name;
      if (typeof user.score === 'number') {
        state.score = user.score;
        state.user.score = user.score;
      }
    } catch {}
  }
}
// On load, update profile
function init() {
  loadProfileFromStorage();
  updateProfileDisplay();
  userAvatar.src = state.user.avatar;
  userScore.textContent = state.score;
  showScreen(homeScreen);
  animateProgressCircle(0, 1);
  checkAdminAccess();
}

// Helper for SVG timer ring
function setTimerRing(percent, warning) {
  if (!timerFg) return;
  const circleLen = 2 * Math.PI * 20;
  timerFg.style.strokeDasharray = circleLen;
  timerFg.style.strokeDashoffset = circleLen * (1 - percent);
  timerFg.style.stroke = warning ? '#dc2626' : '#2563eb';
}

// Helper for progress bar
function setProgressBar(current, total) {
  if (!quizProgressFill) return;
  const percent = (current + 1) / total * 100;
  quizProgressFill.style.width = percent + '%';
}

// Helper for mini-score
function setMiniScore(score) {
  if (miniScore) miniScore.textContent = score;
}

// Helper for question media
function setQuestionMedia(q) {
  if (!questionMedia) return;
  questionMedia.innerHTML = '';
  if (q.img) {
    const img = document.createElement('img');
    img.src = q.img;
    img.alt = 'Question image';
    questionMedia.appendChild(img);
  } else if (q.video) {
    const video = document.createElement('video');
    video.src = q.video;
    video.controls = true;
    questionMedia.appendChild(video);
  } else if (q.audio) {
    const audio = document.createElement('audio');
    audio.src = q.audio;
    audio.controls = true;
    questionMedia.appendChild(audio);
  }
}

// Helper for answer feedback
function showAnswerFeedback(isCorrect, explanation) {
  if (!answerFeedback) return;
  answerFeedback.textContent = '';
  answerFeedback.className = 'answer-feedback';
  if (isCorrect === true) {
    answerFeedback.textContent = '✔️ Correct! ' + (explanation || '');
    answerFeedback.classList.add('correct');
  } else if (isCorrect === false) {
    answerFeedback.textContent = '❌ Wrong! ' + (explanation || '');
    answerFeedback.classList.add('wrong');
  } else if (isCorrect === null) {
    answerFeedback.textContent = '⏰ Time up! ' + (explanation || '');
    answerFeedback.classList.add('wrong');
  } else {
    answerFeedback.textContent = '';
  }
}

// Helper for audience poll
function showAudiencePoll(q, correctIdx) {
  if (!audiencePoll) return;
  audiencePoll.innerHTML = '';
  // Generate random poll data, favoring correct answer
  let base = [20, 20, 20, 20];
  base[correctIdx] = 40 + Math.floor(Math.random() * 21); // 40-60%
  let rest = 100 - base[correctIdx];
  let wrongs = [0,1,2,3].filter(i => i !== correctIdx);
  shuffle(wrongs).forEach((i, idx) => {
    if (idx < 2) base[i] = Math.floor(rest / 2);
    else base[i] = rest - base[wrongs[0]] - base[wrongs[1]];
  });
  // Animate bars
  q.options.forEach((opt, i) => {
    const bar = document.createElement('div');
    bar.className = 'poll-bar';
    const fill = document.createElement('div');
    fill.className = 'poll-bar-fill';
    fill.style.width = '0%';
    setTimeout(() => { fill.style.width = base[i] + '%'; }, 100);
    const label = document.createElement('span');
    label.className = 'poll-bar-label';
    label.textContent = opt;
    const percent = document.createElement('span');
    percent.className = 'poll-bar-percent';
    percent.textContent = base[i] + '%';
    bar.appendChild(fill);
    bar.appendChild(label);
    bar.appendChild(percent);
    audiencePoll.appendChild(bar);
  });
  audiencePoll.style.display = 'flex';
}

function hideAudiencePoll() {
  if (audiencePoll) audiencePoll.style.display = 'none';
}

audiencePollBtn.addEventListener('click', () => {
  if (!state.lifelines.poll) return;
  state.lifelines.poll = false;
  audiencePollBtn.disabled = true;
  const q = state.questions[state.current];
  showAudiencePoll(q, q.answer);
});

// Splash screen logic
window.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash-screen');
  setTimeout(() => {
    splash.classList.add('hide');
    setTimeout(() => {
      splash.style.display = 'none';
      // Show menu and sidebar after splash
      document.getElementById('menu-toggle').classList.remove('hide-during-splash');
      document.getElementById('sidebar-menu').classList.remove('hide-during-splash');
      document.getElementById('sidebar-overlay').classList.remove('hide-during-splash');
      animateCategoryCards();
    }, 800);
  }, 1200);
});

// --- Animated Card Entrance ---
function animateCategoryCards() {
  document.querySelectorAll('.category-card').forEach((card, i) => {
    card.classList.remove('animated');
    setTimeout(() => card.classList.add('animated'), 100 + i * 80);
  });
}
function animateQuestionCard() {
  const qa = document.querySelector('.question-area');
  if (qa) {
    qa.classList.remove('animated');
    setTimeout(() => qa.classList.add('animated'), 80);
  }
}
// --- Confetti Burst ---
function confettiBurst(parent) {
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  for (let i = 0; i < 24; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.background = `hsl(${Math.random()*360},90%,60%)`;
    piece.style.left = `${Math.random()*80-40}px`;
    piece.style.top = `${Math.random()*20-10}px`;
    piece.style.transform = `rotate(${Math.random()*360}deg)`;
    confetti.appendChild(piece);
  }
  (parent || document.body).appendChild(confetti);
  setTimeout(() => confetti.remove(), 1200);
}
// --- Category Card Tilt ---
document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 16;
    const rotateX = ((y / rect.height) - 0.5) * -16;
    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.07)`;
    card.classList.add('tilted');
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.classList.remove('tilted');
  });
});

// --- Option Button Animations (shake/pulse) ---
function animateOptionButtons(selectedIdx, correctIdx) {
  optionBtns.forEach((btn, i) => {
    btn.classList.remove('shake', 'pulse');
    if (selectedIdx === i && selectedIdx !== correctIdx) {
      btn.classList.add('shake');
    }
    if (i === correctIdx && selectedIdx === correctIdx) {
      btn.classList.add('pulse');
    }
  });
}

// --- Dark Mode Toggle ---
const darkToggle = document.getElementById('dark-toggle');
function setDarkMode(on) {
  if (on) {
    document.body.classList.add('dark');
    darkToggle.textContent = '☀️';
    localStorage.setItem('quizDarkMode', '1');
  } else {
    document.body.classList.remove('dark');
    darkToggle.textContent = '🌙';
    localStorage.setItem('quizDarkMode', '0');
  }
}
darkToggle.addEventListener('click', () => {
  setDarkMode(!document.body.classList.contains('dark'));
});

// On load, set dark mode from storage or system
if (localStorage.getItem('quizDarkMode') === '1' ||
    (localStorage.getItem('quizDarkMode') === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  setDarkMode(true);
}

// --- Sound Effects ---
const sounds = {
  click: new Audio('sounds/click.mp3.wav'), // when User click
  correct: new Audio('sounds/correct.mp3'), // Success chime
  wrong: new Audio('sounds/wrong.mp3'), // Error/fail
  timer: new Audio('sounds/timer.mp3') // Time's up/alert
};
let soundMuted = localStorage.getItem('quizSoundMuted') === '1';
function playSound(type) {
  if (soundMuted) return;
  if (sounds[type]) {
    sounds[type].currentTime = 0;
    sounds[type].play();
  }
}

// Mute toggle
const muteBtn = document.createElement('button');
muteBtn.id = 'mute-toggle';
muteBtn.title = 'Mute/unmute sound';
muteBtn.setAttribute('aria-label', 'Mute/unmute sound');
muteBtn.style.position = 'fixed';
muteBtn.style.top = '18px';
muteBtn.style.right = '70px';
muteBtn.style.zIndex = '1200';
muteBtn.style.background = '#fff';
muteBtn.style.color = '#2563eb';
muteBtn.style.border = 'none';
muteBtn.style.borderRadius = '50%';
muteBtn.style.width = '44px';
muteBtn.style.height = '44px';
muteBtn.style.boxShadow = '0 2px 12px #b2cfff44';
muteBtn.style.fontSize = '1.5em';
muteBtn.style.cursor = 'pointer';
muteBtn.style.display = 'flex';
muteBtn.style.alignItems = 'center';
muteBtn.style.justifyContent = 'center';
muteBtn.style.transition = 'background 0.2s, color 0.2s';
muteBtn.textContent = soundMuted ? '🔇' : '🔊';
muteBtn.onclick = () => {
  soundMuted = !soundMuted;
  muteBtn.textContent = soundMuted ? '🔇' : '🔊';
  localStorage.setItem('quizSoundMuted', soundMuted ? '1' : '0');
};
document.body.appendChild(muteBtn);

// Play click sound on all buttons
[...document.querySelectorAll('button'), ...document.querySelectorAll('.option-btn')].forEach(btn => {
  btn.addEventListener('click', () => playSound('click'));
});

// Play click sound on all elements with class 'click'
document.querySelectorAll('.click').forEach(el => {
  el.addEventListener('click', () => playSound('click'));
});


// Play sound on any click
document.addEventListener('click', () => {
  clickSound.currentTime = 0; // Rewind to start
  clickSound.play();
});


// Add event listener for sub-category buttons
function setupSubCategoryListeners() {
  document.querySelectorAll('.sub-category-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const category = btn.getAttribute('data-category');
      const sub = btn.getAttribute('data-sub');
      startQuiz(category, sub);
    });
  });
}

// Call this after DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
  setupSubCategoryListeners();
});

// Hide sub-categories when clicking outside category cards
window.addEventListener('click', function(e) {
  // Check if the click is outside any .category-card
  const categoryCard = e.target.closest('.category-card');
  if (!categoryCard) {
    document.querySelectorAll('.category-card.active').forEach(card => card.classList.remove('active'));
  }
});

// Save user data to Firestore
function saveUserToDatabase() {
  db.collection('users').doc(state.user.name).set({
    name: state.user.name,
    score: state.score,
    updated: firebase.firestore.FieldValue.serverTimestamp()
  });
}

sounds.click.volume = 0.5;
sounds.correct.volume = 0.5;
sounds.wrong.volume = 0.5;
sounds.timer.volume = 1.0;

// Login page logic
function showLoginPage() {
  loginPage.style.display = 'flex';
  appMain.style.display = 'none';
}
function hideLoginPage() {
  loginPage.style.display = 'none';
  appMain.style.display = '';
}
function isLoggedIn() {
  return !!localStorage.getItem('quizLoggedInUser');
}
function setLoggedInUser(username) {
  localStorage.setItem('quizLoggedInUser', username);
}
function logoutUser() {
  localStorage.removeItem('quizLoggedInUser');
  localStorage.removeItem('quizUserRole');
  showLoginPage();
}

loginForm.addEventListener('submit', async function(e) {
  e.preventDefault();
  const username = loginUsername.value.trim();
  const password = loginPassword.value;
  loginError.textContent = '';
  if (!username || !password) {
    loginError.textContent = 'Please enter username and password.';
    return;
  }
  try {
    const doc = await db.collection('users').doc(username).get();
    if (!doc.exists) {
      loginError.textContent = 'User does not exist.';
      return;
    }
    const data = doc.data();
    if (data.password !== password) {
      loginError.textContent = 'Incorrect password.';
      return;
    }
    // Store user role in localStorage
    localStorage.setItem('quizUserRole', data.role || 'user');
    setLoggedInUser(username);
    hideLoginPage();
    init();
    maybeShowWelcome(); // Show welcome popup after login
  } catch (err) {
    loginError.textContent = 'Login failed. Try again.';
  }
});

// On load, show login page if not logged in
window.addEventListener('DOMContentLoaded', async () => {
  await createAdminUser(); // Create admin user if it doesn't exist
  if (!isLoggedIn()) {
    showLoginPage();
  } else {
    hideLoginPage();
    init();
    maybeShowWelcome(); // Show welcome popup after init
  }
});

// Tab switching
showLoginTab.addEventListener('click', () => {
  loginForm.style.display = '';
  signupForm.style.display = 'none';
  showLoginTab.classList.add('active');
  showSignUpTab.classList.remove('active');
  loginError.textContent = '';
});
showSignUpTab.addEventListener('click', () => {
  loginForm.style.display = 'none';
  signupForm.style.display = '';
  showLoginTab.classList.remove('active');
  showSignUpTab.classList.add('active');
  signupError.textContent = '';
  signupSuccess.textContent = '';
});

// Sign Up logic
signupForm.addEventListener('submit', async function(e) {
  e.preventDefault();
  const username = signupUsername.value.trim();
  const password = signupPassword.value;
  const name = signupName.value.trim();
  const email = signupEmail.value.trim();
  const mobile = signupMobile.value.trim();
  signupError.textContent = '';
  signupSuccess.textContent = '';
  if (!username || !password || !name || !email || !mobile) {
    signupError.textContent = 'Please fill all fields.';
    return;
  }
  try {
    const doc = await db.collection('users').doc(username).get();
    if (doc.exists) {
      signupError.textContent = 'Username already exists.';
      return;
    }
    // Set default role as 'user'
    await db.collection('users').doc(username).set({
      name: name,
      username: username,
      password: password,
      email: email,
      mobile: mobile,
      role: 'user', // Add role field
      score: 0,
      created: firebase.firestore.FieldValue.serverTimestamp()
    });
    signupSuccess.textContent = 'Registration successful! You can now login.';
    setTimeout(() => {
      showLoginTab.click();
      loginUsername.value = username;
      loginPassword.value = '';
    }, 1200);
  } catch (err) {
    signupError.textContent = 'Registration failed. Try again.';
  }
});

// Sidebar/Menu logic
function openSidebar() {
  sidebarMenu.classList.add('open');
  sidebarOverlay.classList.add('open');
  // Fill profile info
  const user = localStorage.getItem('quizLoggedInUser');
  if (user) {
    db.collection('users').doc(user).get().then(doc => {
      if (doc.exists) {
        const data = doc.data();
        sidebarUsername.textContent = data.name || user;
        sidebarEmail.textContent = data.email || '';
        sidebarProfilePic.style.backgroundImage = `url('https://i.pravatar.cc/100?u=${user}')`;
      }
    });
  }
}
function closeSidebar() {
  sidebarMenu.classList.remove('open');
  sidebarOverlay.classList.remove('open');
}
menuToggle.addEventListener('click', openSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Edit Profile
sidebarEditProfile.addEventListener('click', () => {
  closeSidebar();
  openProfileModal();
});

// Logout
sidebarLogout.addEventListener('click', () => {
  closeSidebar();
  logoutUser();
});

// --- Avatar Picker Logic ---
let selectedAvatarUrl = null;
window.addEventListener('DOMContentLoaded', () => {
  const avatarPreview = document.getElementById('avatar-preview');

  // Preset avatar click
  document.querySelectorAll('.preset-avatar').forEach(img => {
    img.addEventListener('click', () => {
      selectedAvatarUrl = img.src;
      avatarPreview.src = img.src;
      document.querySelectorAll('.preset-avatar').forEach(i => i.style.border = '2px solid #e0eafc');
      img.style.border = '2.5px solid #2563eb';
    });
  });

  // When opening modal, set preview to current avatar
  profileEditTrigger.addEventListener('click', () => {
    const user = localStorage.getItem('quizLoggedInUser') || state.user.name;
    let avatar = state.user.avatar || `https://i.pravatar.cc/100?u=${user}`;
    avatarPreview.src = avatar;
    selectedAvatarUrl = null;
    document.querySelectorAll('.preset-avatar').forEach(i => i.style.border = '2px solid #e0eafc');
  });

  // Save profile with avatar logic (only preset)
  profileForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const newName = nicknameInput.value.trim() || 'Player 1';
    let avatarUrl = state.user.avatar;
    if (selectedAvatarUrl) {
      avatarUrl = selectedAvatarUrl;
    }
    state.user.name = newName;
    state.user.avatar = avatarUrl || `https://i.pravatar.cc/100?u=${newName}`;
    updateProfileDisplay();
    userAvatar.src = state.user.avatar;
    if (sidebarProfilePic) sidebarProfilePic.style.backgroundImage = `url('${state.user.avatar}')`;
    saveProfileToStorage();
    const user = localStorage.getItem('quizLoggedInUser') || newName;
    await db.collection('users').doc(user).set({
      name: state.user.name,
      avatar: state.user.avatar,
      score: state.score,
      updated: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    closeProfileModal();
  });
});

if (sidebarHome) {
  sidebarHome.addEventListener('click', () => {
    closeSidebar();
    showScreen(homeScreen);
  });
}

const langToggle = document.getElementById('lang-toggle');
let appLang = localStorage.getItem('quizAppLang') || 'en';

// Static UI text in both languages
const UI_TEXT = {
  en: {
    home: 'Home',
    editProfile: 'Edit Profile',
    changePassword: 'Change Password',
    changeEmail: 'Change Email',
    progressReport: 'Progress Report',
    logout: 'Log Out',
    chooseCategory: 'Choose a Category',
    next: 'Next',
    retry: 'Retry Quiz',
    returnHome: 'Return Home',
    quizResults: 'Quiz Results',
    correct: 'Correct',
    wrong: 'Wrong',
    totalTime: 'Total Time',
    save: 'Save',
    cancel: 'Cancel',
    nickname: 'Nickname:',
    chooseClass: 'Choose Class:',
    login: 'Login',
    signUp: 'Sign Up',
    fullName: 'Full Name',
    email: 'Email',
    mobile: 'Mobile Number',
    password: 'Password',
    username: 'Username',
    hindiBtn: '🌐 हिंदी',
    englishBtn: '🌐 English',
  },
  hi: {
    home: 'होम',
    editProfile: 'प्रोफ़ाइल संपादित करें',
    changePassword: 'पासवर्ड बदलें',
    changeEmail: 'ईमेल बदलें',
    progressReport: 'प्रगति रिपोर्ट',
    logout: 'लॉग आउट',
    chooseCategory: 'श्रेणी चुनें',
    next: 'आगे',
    retry: 'पुनः प्रयास करें',
    returnHome: 'मुख्य पृष्ठ',
    quizResults: 'प्रश्नोत्तरी परिणाम',
    correct: 'सही',
    wrong: 'गलत',
    totalTime: 'कुल समय',
    save: 'सहेजें',
    cancel: 'रद्द करें',
    nickname: 'उपनाम:',
    chooseClass: 'कक्षा चुनें:',
    login: 'लॉगिन',
    signUp: 'साइन अप',
    fullName: 'पूरा नाम',
    email: 'ईमेल',
    mobile: 'मोबाइल नंबर',
    password: 'पासवर्ड',
    username: 'यूज़रनेम',
    hindiBtn: '🌐 English',
    englishBtn: '🌐 हिंदी',
  }
};

function setAppLanguage(lang) {
  appLang = lang;
  localStorage.setItem('quizAppLang', lang);
  // Sidebar
  if (sidebarHome) sidebarHome.textContent = UI_TEXT[lang].home;
  if (sidebarEditProfile) sidebarEditProfile.textContent = UI_TEXT[lang].editProfile;
  if (sidebarChangePassword) sidebarChangePassword.textContent = UI_TEXT[lang].changePassword;
  if (sidebarChangeEmail) sidebarChangeEmail.textContent = UI_TEXT[lang].changeEmail;
  if (sidebarProgressReport) sidebarProgressReport.textContent = UI_TEXT[lang].progressReport;
  if (sidebarLogout) sidebarLogout.textContent = UI_TEXT[lang].logout;
  // Home screen
  const chooseCat = document.querySelector('h1');
  if (chooseCat) chooseCat.textContent = UI_TEXT[lang].chooseCategory;
  // Result screen
  const quizResults = document.querySelector('#result-screen h1');
  if (quizResults) quizResults.textContent = UI_TEXT[lang].quizResults;
  const retryBtn = document.getElementById('retry-btn');
  if (retryBtn) retryBtn.textContent = UI_TEXT[lang].retry;
  const homeBtn = document.getElementById('home-btn');
  if (homeBtn) homeBtn.textContent = UI_TEXT[lang].returnHome;
  // Result details
  const resultDetails = document.querySelectorAll('.result-details p');
  if (resultDetails.length >= 3) {
    resultDetails[0].childNodes[0].textContent = UI_TEXT[lang].correct + ': ';
    resultDetails[1].childNodes[0].textContent = UI_TEXT[lang].wrong + ': ';
    resultDetails[2].childNodes[0].textContent = UI_TEXT[lang].totalTime + ': ';
  }
  // Profile modal
  const profileModal = document.getElementById('profile-modal');
  if (profileModal) {
    const labels = profileModal.querySelectorAll('label');
    if (labels.length >= 2) {
      labels[0].textContent = UI_TEXT[lang].nickname;
      labels[1].textContent = UI_TEXT[lang].chooseClass;
    }
    const saveBtn = document.getElementById('save-profile');
    if (saveBtn) saveBtn.textContent = UI_TEXT[lang].save;
    const cancelBtn = document.getElementById('cancel-profile');
    if (cancelBtn) cancelBtn.textContent = UI_TEXT[lang].cancel;
  }
  // Login/Signup
  const loginTab = document.getElementById('show-login');
  const signupTab = document.getElementById('show-signup');
  if (loginTab) loginTab.textContent = UI_TEXT[lang].login;
  if (signupTab) signupTab.textContent = UI_TEXT[lang].signUp;
  const loginFormInputs = document.querySelectorAll('#login-form input');
  if (loginFormInputs.length >= 2) {
    loginFormInputs[0].placeholder = UI_TEXT[lang].username;
    loginFormInputs[1].placeholder = UI_TEXT[lang].password;
  }
  const signupFormInputs = document.querySelectorAll('#signup-form input');
  if (signupFormInputs.length >= 5) {
    signupFormInputs[0].placeholder = UI_TEXT[lang].username;
    signupFormInputs[1].placeholder = UI_TEXT[lang].password;
    signupFormInputs[2].placeholder = UI_TEXT[lang].fullName;
    signupFormInputs[3].placeholder = UI_TEXT[lang].email;
    signupFormInputs[4].placeholder = UI_TEXT[lang].mobile;
  }
  // Language toggle button
  if (langToggle) {
    langToggle.textContent = '🌐';
  }
}

if (langToggle) {
  langToggle.addEventListener('click', () => {
    setAppLanguage(appLang === 'en' ? 'hi' : 'en');
  });
}
// On load, set language
setAppLanguage(appLang);

// Question Management Code
const questionModal = document.getElementById('question-modal');
const questionFormModal = document.getElementById('question-form-modal');
const manageQuestionsBtn = document.getElementById('manage-questions-btn');
const addQuestionBtn = document.getElementById('add-question-btn');
const questionForm = document.getElementById('question-form');
const questionsList = document.getElementById('questions-list');
const questionCategory = document.getElementById('question-category');
const questionSub = document.getElementById('question-sub');
let currentQuestionId = null;

// Show manage questions button for admin
function checkAdminAccess() {
  const userRole = localStorage.getItem('quizUserRole');
  if (userRole === 'admin') {
    manageQuestionsBtn.style.display = 'block';
    const migrateBtn = document.getElementById('migrate-questions-btn');
    if (migrateBtn) migrateBtn.style.display = 'block';
  } else {
    manageQuestionsBtn.style.display = 'none';
    const migrateBtn = document.getElementById('migrate-questions-btn');
    if (migrateBtn) migrateBtn.style.display = 'none';
  }
}

// Restrict opening of question management modal to admins only
manageQuestionsBtn.addEventListener('click', () => {
  if (localStorage.getItem('quizUserRole') !== 'admin') return;
  questionModal.style.display = 'block';
  loadQuestions();
});

// Restrict opening of add question modal to admins only
addQuestionBtn.addEventListener('click', () => {
  if (localStorage.getItem('quizUserRole') !== 'admin') return;
  currentQuestionId = null; // Always reset to null when adding new
  questionForm.reset(); // Reset the form fields
  showQuestionForm();
});

// Defensive: Only allow admins to open the question form modal
function showQuestionForm(question = null) {
  if (localStorage.getItem('quizUserRole') !== 'admin') {
    questionFormModal.style.display = 'none'; // Always hide for non-admins
    return;
  }
  currentQuestionId = question ? question.id : null;
  const formTitle = document.getElementById('question-form-title');
  formTitle.textContent = question ? 'Edit Question' : 'Add Question';
  if (question) {
    document.getElementById('question-text').value = question.q;
    document.querySelectorAll('.option-input').forEach((input, i) => {
      input.value = question.options[i];
    });
    document.getElementById('correct-answer').value = question.answer;
    document.getElementById('question-explanation').value = question.explanation || '';
  } else {
    questionForm.reset();
  }
  questionFormModal.style.display = 'block';
}

// On DOMContentLoaded, forcibly hide the modal for non-admins
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('quizUserRole') !== 'admin') {
    questionFormModal.style.display = 'none';
  }
});

// Load questions from Firestore
async function loadQuestions() {
  try {
    const category = questionCategory.value;
    const sub = questionSub.value;
    
    const snapshot = await db.collection('questions')
      .where('category', '==', category)
      .where('sub', '==', sub)
      .get();
    
    questionsList.innerHTML = '';
    
    if (snapshot.empty) {
      questionsList.innerHTML = '<p class="no-questions">No questions found for this category.</p>';
      return;
    }
    
    snapshot.forEach(doc => {
      const question = doc.data();
      const questionElement = document.createElement('div');
      questionElement.className = 'question-item';
      questionElement.innerHTML = `
        <div class="question-content">
          <p class="question-text">${question.q}</p>
          <div class="question-options">
            ${question.options.map((opt, i) => `
              <div class="option ${i === question.answer ? 'correct' : ''}">
                ${opt}
              </div>
            `).join('')}
          </div>
          ${question.explanation ? `<p class="explanation">${question.explanation}</p>` : ''}
        </div>
        <div class="question-actions">
          <button class="edit-btn" data-id="${doc.id}">
            <i class="fas fa-edit"></i> Edit
          </button>
          <button class="delete-btn" data-id="${doc.id}">
            <i class="fas fa-trash"></i> Delete
          </button>
        </div>
      `;
      questionsList.appendChild(questionElement);
    });

    // Add event listeners for edit and delete buttons
    questionsList.querySelectorAll('.edit-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.dataset.id;
        const doc = await db.collection('questions').doc(id).get();
        showQuestionForm({ id, ...doc.data() });
      });
    });

    questionsList.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.dataset.id;
        if (confirm('Are you sure you want to delete this question?')) {
          await deleteQuestion(id);
        }
      });
    });

  } catch (error) {
    console.error('Error loading questions:', error);
    questionsList.innerHTML = '<p class="error">Error loading questions. Please try again.</p>';
  }
}

// Add new question
async function addQuestion(questionData) {
  try {
    const userRole = localStorage.getItem('quizUserRole');
    if (userRole !== 'admin') {
      throw new Error('Unauthorized: Only admins can add questions');
    }

    // Log the incoming data
    console.log('Raw question data received:', questionData);

    // Validate the question data
    if (!questionData || typeof questionData !== 'object') {
      throw new Error('Invalid question data format');
    }

    if (!questionData.q) {
      throw new Error('Question text is missing');
    }

    if (!Array.isArray(questionData.options) || questionData.options.length !== 4) {
      throw new Error('Invalid options format - must be an array of 4 options');
    }

    if (typeof questionData.answer !== 'number' || questionData.answer < 0 || questionData.answer > 3) {
      throw new Error('Invalid answer index');
    }

    if (!questionData.category || !questionData.sub) {
      throw new Error('Category and sub-category are required');
    }

    // Create a clean question object with only the required fields
    const cleanQuestionData = {
      q: String(questionData.q).trim(),
      options: questionData.options.map(opt => String(opt).trim()),
      answer: Number(questionData.answer),
      category: String(questionData.category).trim(),
      sub: String(questionData.sub).trim(),
      explanation: questionData.explanation ? String(questionData.explanation).trim() : '',
      created: firebase.firestore.FieldValue.serverTimestamp()
    };

    // Log the cleaned data
    console.log('Cleaned question data:', cleanQuestionData);

    // Add the question to Firestore
    const docRef = await db.collection('questions').add(cleanQuestionData);
    console.log('Question added successfully with ID:', docRef.id);
    
    await loadQuestions();
  } catch (error) {
    console.error('Error adding question:', error);
    throw error;
  }
}

// Update existing question
async function updateQuestion(questionId, questionData) {
  try {
    const userRole = localStorage.getItem('quizUserRole');
    if (userRole !== 'admin') {
      throw new Error('Unauthorized: Only admins can update questions');
    }
    
    await db.collection('questions').doc(questionId).update({
      ...questionData,
      updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    
    await loadQuestions();
  } catch (error) {
    console.error('Error updating question:', error);
    alert('Error updating question: ' + error.message);
  }
}

// Delete question
async function deleteQuestion(questionId) {
  try {
    const userRole = localStorage.getItem('quizUserRole');
    if (userRole !== 'admin') {
      throw new Error('Unauthorized: Only admins can delete questions');
    }
    
    if (!confirm('Are you sure you want to delete this question?')) {
      return;
    }
    
    await db.collection('questions').doc(questionId).delete();
    await loadQuestions();
  } catch (error) {
    console.error('Error deleting question:', error);
    alert('Error deleting question: ' + error.message);
  }
}

// Event Listeners
manageQuestionsBtn.addEventListener('click', () => {
  questionModal.style.display = 'block';
  loadQuestions();
});

questionCategory.addEventListener('change', loadQuestions);
questionSub.addEventListener('change', loadQuestions);

addQuestionBtn.addEventListener('click', () => {
  currentQuestionId = null; // Always reset to null when adding new
  questionForm.reset(); // Reset the form fields
  showQuestionForm();
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === questionModal) {
    questionModal.style.display = 'none';
  }
  if (e.target === questionFormModal) {
    questionFormModal.style.display = 'none';
  }
});

// Show question form modal
function showQuestionForm(question = null) {
  currentQuestionId = question ? question.id : null;
  const formTitle = document.getElementById('question-form-title');
  formTitle.textContent = question ? 'Edit Question' : 'Add Question';
  
  if (question) {
    document.getElementById('question-text').value = question.q;
    document.querySelectorAll('.option-input').forEach((input, i) => {
      input.value = question.options[i];
    });
    document.getElementById('correct-answer').value = question.answer;
    document.getElementById('question-explanation').value = question.explanation || '';
  } else {
    questionForm.reset();
  }
  
  questionFormModal.style.display = 'block';
}

// Function to close question form modal
function closeQuestionForm() {
  const modal = document.getElementById('question-form-modal');
  modal.style.display = 'none';
  document.getElementById('question-form').reset();
  currentQuestionId = null;
}

// Add event listener for question form submission
document.getElementById('question-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    // Defensive: check if element exists
    const questionTextElem = document.getElementById('question-text');
    if (!questionTextElem) {
      throw new Error('Question text field not found in the form.');
    }
    const questionText = questionTextElem.value ? questionTextElem.value.trim() : '';
    const options = Array.from(document.querySelectorAll('.option-input')).map(input => input.value.trim());
    const correctAnswer = document.getElementById('correct-answer').value;
    const explanation = document.getElementById('question-explanation').value.trim();
    const category = questionCategory.value.trim();
    const sub = questionSub.value.trim();

    // Log all values and their types
    console.log('Form values:', {
      questionText, type: typeof questionText,
      options, correctAnswer, explanation, category, sub
    });

    // Validate
    if (!questionText) {
      alert('Question text is required.');
      throw new Error('Question text is required.');
    }
    if (options.length !== 4 || options.some(opt => !opt)) {
      alert('All four options must be filled.');
      throw new Error('All four options must be filled.');
    }
    const answerIndex = parseInt(correctAnswer);
    if (isNaN(answerIndex) || answerIndex < 0 || answerIndex > 3) {
      alert('Please select a valid correct answer.');
      throw new Error('Please select a valid correct answer.');
    }
    if (!category || !sub) {
      alert('Please select a category and sub-category.');
      throw new Error('Please select a category and sub-category.');
    }

    // Prepare data
    const questionData = {
      q: questionText,
      options: options,
      answer: answerIndex,
      category: category,
      sub: sub,
      explanation: explanation || '',
      created: firebase.firestore.FieldValue.serverTimestamp()
    };

    // Log final data
    console.log('Final question data to be saved:', questionData);

    // FINAL CHECK for q
    if (!questionData.q) {
      alert('Final check failed: question text is missing!');
      console.error('Final check failed: question text is missing!', questionData);
      return;
    }

    if (currentQuestionId) {
      await updateQuestion(currentQuestionId, questionData);
    } else {
      await addQuestion(questionData);
    }

    closeQuestionForm();
    await loadQuestions();
  } catch (error) {
    console.error('Error saving question:', error);
    alert('Error saving question: ' + error.message);
  }
});

questionsList.addEventListener('click', async (e) => {
  if (e.target.classList.contains('edit-btn')) {
    const id = e.target.dataset.id;
    const doc = await db.collection('questions').doc(id).get();
    showQuestionForm({ id, ...doc.data() });
  } else if (e.target.classList.contains('delete-btn')) {
    const id = e.target.dataset.id;
    await deleteQuestion(id);
  }
});

// Initialize admin access check
window.addEventListener('DOMContentLoaded', () => {
  checkAdminAccess();
});

// Function to create admin user
async function createAdminUser() {
  try {
    const adminUsername = 'ayush';
    const adminDoc = await db.collection('users').doc(adminUsername).get();
    
    if (!adminDoc.exists) {
      await db.collection('users').doc(adminUsername).set({
        name: 'Admin',
        username: adminUsername,
        password: '9801526041@+',
        email: 'admin@quizapp.com',
        mobile: '9801526041',
        role: 'admin',
        score: 0,
        created: firebase.firestore.FieldValue.serverTimestamp()
      });
      console.log('Admin user created successfully');
    }
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
}

// On load, show login page if not logged in
window.addEventListener('DOMContentLoaded', async () => {
  await createAdminUser(); // Create admin user if it doesn't exist
  if (!isLoggedIn()) {
    showLoginPage();
  } else {
    hideLoginPage();
    init();
    maybeShowWelcome(); // Show welcome popup after init
  }
});

// Initialize the app
async function init() {
  loadProfileFromStorage();
  updateProfileDisplay();
  userAvatar.src = state.user.avatar;
  userScore.textContent = state.score;
  showScreen(homeScreen);
  animateProgressCircle(0, 1);
  checkAdminAccess();
}

init();

// --- MIGRATION: Upload all local QUESTIONS to Firestore ---
async function migrateLocalQuestionsToFirestore() {
  if (localStorage.getItem('quizUserRole') !== 'admin') {
    alert('Only admins can migrate questions.');
    return;
  }
  let count = 0;
  for (const category in QUESTIONS) {
    for (const sub in QUESTIONS[category]) {
      for (const q of QUESTIONS[category][sub]) {
        // Check if question already exists in Firestore (by text, category, sub)
        const snapshot = await db.collection('questions')
          .where('q', '==', q.q)
          .where('category', '==', category)
          .where('sub', '==', sub)
          .get();
        if (snapshot.empty) {
          await db.collection('questions').add({
            ...q,
            category,
            sub,
            explanation: q.explanation || '',
            created: firebase.firestore.FieldValue.serverTimestamp()
          });
          count++;
        }
      }
    }
  }
  alert(`Migration complete! ${count} questions added to Firestore.`);
}

// Add a button for admin to trigger migration (visible only to admin)
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('quizUserRole') === 'admin') {
    let migrateBtn = document.getElementById('migrate-questions-btn');
    if (!migrateBtn) {
      migrateBtn = document.createElement('button');
      migrateBtn.id = 'migrate-questions-btn';
      migrateBtn.textContent = 'Migrate Local Questions to Firestore';
      migrateBtn.className = 'admin-btn';
      migrateBtn.style.margin = '10px 0 0 0';
      migrateBtn.onclick = migrateLocalQuestionsToFirestore;
      // Place it near the Manage Questions button
      const manageBtn = document.getElementById('manage-questions-btn');
      if (manageBtn && manageBtn.parentNode) {
        manageBtn.parentNode.insertBefore(migrateBtn, manageBtn.nextSibling);
      }
    }
  }
});

// --- Internet Connection Popup ---
function showOfflinePopup() {
  let offlineModal = document.getElementById('offline-modal');
  if (!offlineModal) {
    offlineModal = document.createElement('div');
    offlineModal.id = 'offline-modal';
    offlineModal.style.position = 'fixed';
    offlineModal.style.top = '0';
    offlineModal.style.left = '0';
    offlineModal.style.width = '100vw';
    offlineModal.style.height = '100vh';
    offlineModal.style.background = 'rgba(30,41,59,0.92)';
    offlineModal.style.display = 'flex';
    offlineModal.style.alignItems = 'center';
    offlineModal.style.justifyContent = 'center';
    offlineModal.style.zIndex = '9999';
    offlineModal.innerHTML = `
      <div style="background:#fff;padding:2em 2.5em;border-radius:16px;box-shadow:0 4px 32px #0002;text-align:center;max-width:90vw;">
        <h2 style="color:#dc2626;margin-bottom:1em;">No Internet Connection</h2>
        <p style="color:#475569;font-size:1.1em;">Please check your internet connection and try again.</p>
      </div>
    `;
    document.body.appendChild(offlineModal);
  }
  offlineModal.style.display = 'flex';
}

function hideOfflinePopup() {
  const offlineModal = document.getElementById('offline-modal');
  if (offlineModal) offlineModal.style.display = 'none';
}

window.addEventListener('offline', showOfflinePopup);
window.addEventListener('online', hideOfflinePopup);

// Show popup immediately if offline on load
if (!navigator.onLine) {
  showOfflinePopup();
}

// --- Welcome Popup ---
function showWelcomePopup(userName) {
  console.log('showWelcomePopup called with:', userName);
  // TEMP: Comment out the session check for testing
  // if (sessionStorage.getItem('welcomeShown') === '1') return;
  let welcomeModal = document.getElementById('welcome-modal');
  if (!welcomeModal) {
    welcomeModal = document.createElement('div');
    welcomeModal.id = 'welcome-modal';
    welcomeModal.style.position = 'fixed';
    welcomeModal.style.top = '0';
    welcomeModal.style.left = '0';
    welcomeModal.style.width = '100vw';
    welcomeModal.style.height = '100vh';
    welcomeModal.style.background = 'rgba(30,41,59,0.92)';
    welcomeModal.style.display = 'flex';
    welcomeModal.style.alignItems = 'center';
    welcomeModal.style.justifyContent = 'center';
    welcomeModal.style.zIndex = '9999';
    welcomeModal.innerHTML = `
      <div style="background:#fff;padding:2em 2.5em;border-radius:16px;box-shadow:0 4px 32px #0002;text-align:center;max-width:90vw;">
        <h2 style="color:#2563eb;margin-bottom:1em;">Welcome, <span id='welcome-username'></span>!</h2>
        <p style="color:#475569;font-size:1.1em;">Glad to see you back. Ready for a quiz?</p>
        <button id="welcome-ok-btn" style="margin-top:1.5em;padding:0.7em 2em;background:#2563eb;color:#fff;border:none;border-radius:8px;font-size:1em;font-weight:600;cursor:pointer;">OK</button>
      </div>
    `;
    document.body.appendChild(welcomeModal);
  }
  document.getElementById('welcome-username').textContent = userName || 'Player';
  welcomeModal.style.display = 'flex';
  document.getElementById('welcome-ok-btn').onclick = function() {
    welcomeModal.style.display = 'none';
  };
  sessionStorage.setItem('welcomeShown', '1');
}

// Show welcome popup after login or on app load if logged in
function maybeShowWelcome() {
  let user = localStorage.getItem('quizLoggedInUser');
  if (user) {
    // Try to get display name from Firestore or localStorage
    let displayName = user;
    const profile = JSON.parse(localStorage.getItem('quizUserProfile') || '{}');
    if (profile && profile.name) displayName = profile.name;
    showWelcomePopup(displayName);
  }
}

// On app load, show welcome if already logged in and not shown this session
window.addEventListener('DOMContentLoaded', () => {
  if (isLoggedIn()) {
    maybeShowWelcome();
  }
}); 
