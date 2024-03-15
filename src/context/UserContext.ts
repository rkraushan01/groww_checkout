import { createContext } from 'react';

// Define the type for the context value
interface UserContextType {
    totalAmount: number; // Adjust the type as needed
}

// Create the context with an initial value
const UserContext = createContext<UserContextType>({
    totalAmount: 0, // Provide a default value or adjust as needed
});

export default UserContext;
