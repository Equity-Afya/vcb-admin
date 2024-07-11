// src/app/pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

const options = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        userId: { label: 'User ID', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {
        const { userId, password } = credentials;

        try {
          // Make a POST request to your backend API for authentication
          const response = await axios.post('http://102.210.244.222:6508/authentication/login', {
            userId,
            password
          });

          // Assuming your backend returns user information or a token upon successful authentication
          const user = response.data.user; // Adjust according to your API response structure

          if (user) {
            // If user is found, return the user object
            return user;
          } else {
            // If authentication fails, return null
            return null;
          }
        } catch (error) {
          // Handle any errors (e.g., network error, API error)
          console.error('Authentication error:', error);
          return null; // Return null on error
        }
      }
    })
  ],
  pages: {
    signIn: '/login' // Custom sign-in page path
  }
};

export default (req, res) => NextAuth(req, res, options);
