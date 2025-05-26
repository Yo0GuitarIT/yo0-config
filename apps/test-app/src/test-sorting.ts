// Test file for import sorting
import { writeFileSync } from 'fs';
import { join } from 'path';

import { createUser, User } from './index';

export function testImportSorting(): void {
    const user: User = createUser('Test', 'test@example.com');
    console.log(user);

    // Use the imports to avoid unused import errors
    const filePath = join(__dirname, 'test.txt');
    writeFileSync(filePath, JSON.stringify(user));
}
