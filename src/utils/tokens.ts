export const generateTokens = (): string[] => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const tokens = new Set<string>();
    
    while (tokens.size < 400) {
      let token = '';
      // Generate 3 letters + 2 numbers
      for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        token += chars[randomIndex];
      }
      tokens.add(token);
    }
    
    return Array.from(tokens);
  };