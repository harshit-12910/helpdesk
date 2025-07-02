export const mockLogin = async (email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Mock login attempt for: ${email}`);
      resolve({ success: true, user: { email: email, id: 'mock-user-123' } });
    }, 1000); 
  });
};

export const mockSignup = async (email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Mock signup attempt for: ${email}`);
      resolve({ success: true, user: { email: email, id: 'mock-user-456' } });
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