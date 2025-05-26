// Test file for shared configurations
export interface User {
    id: number;
    name: string;
    email: string;
}

export function createUser(name: string, email: string): User {
    return {
        id: Math.floor(Math.random() * 1000),
        name,
        email,
    };
}

export function greetUser(user: User): string {
    return `Hello, ${user.name}! Your email is ${user.email}`;
}

// Test the configurations
const testUser = createUser('John Doe', 'john@example.com');
console.log(greetUser(testUser));

// Test some TypeScript features
const users: User[] = [
    createUser('Alice', 'alice@example.com'),
    createUser('Bob', 'bob@example.com'),
];

const userNames = users.map(user => user.name);
console.log('User names:', userNames.join(', '));
