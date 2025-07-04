// auth/authService.jsx

export const mockLogin = async (email, password) => {
  return new Promise((resolve, reject) => { // Added reject for potential errors
    setTimeout(() => {
      console.log(`Mock login attempt for: ${email}`);

      let role = 'standard_user';
      let success = false;
      let user = null;

      if (email === 'admin' && password === 'password123') {
        role = 'admin';
        success = true;
        user = { email: email, id: 'mock-admin-456', role: role };
      } else if (email === 'user' && password === 'password') {
        role = 'standard_user';
        success = true;
        user = { email: email, id: 'mock-user-123', role: role };
      } else {
        // If credentials don't match our mock users
        success = false;
      }

      if (success) {
        resolve({ success: true, user: user });
      } else {
        resolve({ success: false, message: "Invalid username or password." }); // Resolve with failure message
      }
    }, 1000);
  });
};

export const mockSignup = async (username, email, password) => { // Added username parameter
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Mock signup attempt for: ${username}, ${email}`);
      // In a real app, you'd store this new user. For mock, just return success.
      // New users default to 'standard_user' role
      resolve({ success: true, user: { username: username, email: email, id: `mock-new-user-${Date.now()}`, role: 'standard_user' } });
    }, 1000);
  });
};

export const mockLogout = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Mock logout successful');
      resolve({ success: true });
    }, 500);
  });
};