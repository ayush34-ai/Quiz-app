// Authentication state management
let currentUser = null;
let isLoggedIn = false;
let authInitialized = false;

// Initialize the app
function initializeApp() {
  console.log('Initializing app...');
  
  // Show splash screen
  showSplashScreen();
  
  // Initialize all components
  initializeScreens();
  initializeMenu();
  initializeGameLogic();
  initializeProfile();
  
  // Check authentication state
  setTimeout(() => {
    checkAuthState();
  }, 100);
}

// Check authentication state
function checkAuthState() {
  console.log('Checking auth state...');
  
  // Check localStorage first for faster loading
  const savedUser = localStorage.getItem('currentUser');
  if (savedUser) {
    try {
      currentUser = JSON.parse(savedUser);
      isLoggedIn = true;
      console.log('Found saved user:', currentUser.username);
      showMainApp();
      authInitialized = true;
      return;
    } catch (e) {
      console.error('Error parsing saved user:', e);
      localStorage.removeItem('currentUser');
    }
  }
  
  // For demo purposes, check if user exists in localStorage
  // In a real app, this would check with your authentication service
  console.log('No saved user found, showing login page');
  showLoginPage();
  authInitialized = true;
}

// Show main app
function showMainApp() {
  console.log('Showing main app for user:', currentUser?.username);
  hideSplashScreen();
  hideLoginPage();
  showScreen('home-screen');
  updateUserProfile();
}

// Show login page
function showLoginPage() {
  console.log('Showing login page');
  hideSplashScreen();
  document.getElementById('login-page').style.display = 'flex';
  // Hide other elements
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementById('sidebar').style.display = 'none';
  document.getElementById('main-content').style.display = 'none';
  document.getElementById('bottom-nav').style.display = 'none';
}

// Hide login page
function hideLoginPage() {
  console.log('Hiding login page');
  document.getElementById('login-page').style.display = 'none';
  // Show other elements
  document.getElementById('menu-toggle').style.display = 'flex';
  document.getElementById('main-content').style.display = 'block';
  document.getElementById('bottom-nav').style.display = 'flex';
}

// Handle login
function handleLogin(event) {
  event.preventDefault();
  
  console.log('Handling login...');
  
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();
  const errorDiv = document.getElementById('login-error');
  
  // Clear previous errors
  errorDiv.textContent = '';
  
  if (!username || !password) {
    errorDiv.textContent = 'Please enter both username and password';
    return;
  }
  
  // Simple validation (in a real app, this would be server-side)
  const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    currentUser = user;
    isLoggedIn = true;
    
    // Save to localStorage for persistence
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    console.log('Login successful for:', username);
    showMainApp();
    updateUserProfile();
  } else {
    console.log('Login failed for:', username);
    errorDiv.textContent = 'Invalid username or password';
  }
}

// Handle signup
function handleSignup(event) {
  event.preventDefault();
  
  const form = event.target;
  
  console.log('Handling signup...');
  
  const username = document.getElementById('signup-username').value.trim();
  const password = document.getElementById('signup-password').value.trim();
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const mobile = document.getElementById('signup-mobile').value.trim();
  
  const errorDiv = document.getElementById('signup-error');
  const successDiv = document.getElementById('signup-success');
  
  // Clear previous messages
  errorDiv.textContent = '';
  successDiv.textContent = '';
  
  if (!username || !password || !name || !email || !mobile) {
    errorDiv.textContent = 'Please fill in all fields';
    return;
  }
  
  console.log('Attempting to register:', username);
  const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
  
  // Check if username already exists
  if (users.find(u => u.username === username)) {
    errorDiv.textContent = 'Username already exists';
    return;
  }
  
  // Create new user
  const newUser = {
    username,
    password,
    name,
    email,
    mobile,
    score: 0,
    level: 1
  };
  
  users.push(newUser);
  localStorage.setItem('registeredUsers', JSON.stringify(users));
  
  console.log('Registration successful for:', username);
  successDiv.textContent = 'Registration successful! You can now login.';
  form.reset();
  
  // Switch to login tab after successful registration
  setTimeout(() => {
    document.getElementById('show-login-tab').click();
  }, 2000);
}

// Handle logout
function handleLogout() {
  console.log('Handling logout for:', currentUser?.username);
  
  currentUser = null;
  isLoggedIn = false;
  localStorage.removeItem('currentUser');
  showLoginPage();
  
  // Close sidebar if open
  closeSidebar();
}

// Update user profile display
function updateUserProfile() {
  if (!currentUser) return;
  
  document.getElementById('user-name').textContent = currentUser.name || currentUser.username;
  document.getElementById('user-score').textContent = currentUser.score || 0;
  
  // Update profile screen if it exists
  const profileName = document.getElementById('profile-name');
  const profileEmail = document.getElementById('profile-email');
  const profileMobile = document.getElementById('profile-mobile');
  const profileScore = document.getElementById('profile-score');
  
  if (profileName) profileName.textContent = currentUser.name || currentUser.username;
  if (profileEmail) profileEmail.textContent = currentUser.email || 'Not provided';
  if (profileMobile) profileMobile.textContent = currentUser.mobile || 'Not provided';
  if (profileScore) profileScore.textContent = currentUser.score || 0;
}

// Prevent multiple auth checks
let authCheckInProgress = false;

function safeCheckAuth() {
  if (authCheckInProgress || authInitialized) {
    return;
  }
  
  authCheckInProgress = true;
  checkAuthState();
  authCheckInProgress = false;
}

// Event listeners for login/signup
document.addEventListener('DOMContentLoaded', function() {
  // Login form
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
  }
  
  // Signup form
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', handleSignup);
  }
  
  // Tab switching
  const showLoginTab = document.getElementById('show-login-tab');
  const showSignupTab = document.getElementById('show-signup-tab');
  
  if (showLoginTab && showSignupTab) {
    showLoginTab.addEventListener('click', function() {
      document.getElementById('signup-form').style.display = 'none';
      document.getElementById('login-form').style.display = 'block';
      showSignupTab.classList.remove('active');
      showLoginTab.classList.add('active');
    });
    
    showSignupTab.addEventListener('click', function() {
      document.getElementById('login-form').style.display = 'none';
      document.getElementById('signup-form').style.display = 'block';
      document.getElementById('login-error').textContent = '';
      showLoginTab.classList.remove('active');
      showSignupTab.classList.add('active');
    });
  }
  
  const showLoginTab = document.getElementById('show-login-tab');
  if (showLoginTab) {
    showLoginTab.addEventListener('click', function() {
      document.getElementById('signup-form').style.display = 'none';
      document.getElementById('login-form').style.display = 'block';
      document.getElementById('signup-error').textContent = '';
      showSignupTab.classList.remove('active');
      showLoginTab.classList.add('active');
    });
  }
  
  // Logout button
  const logoutBtn = document.getElementById('sidebar-logout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', handleLogout);
  }
  
  // Initialize auth check
  setTimeout(() => {
    if (!authInitialized) {
      safeCheckAuth();
    }
  }, 500);
});