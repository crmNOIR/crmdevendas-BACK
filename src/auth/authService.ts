import pool from '../db/databseConnect';

interface User {
    id?: number;
    email: string;
    password: string;
}

function generateToken(email: string): string {
    return Buffer.from(email + Date.now()).toString('base64');
}

const authService = {
    async login(email: string, password: string): Promise<string> {
        const [rows] = await pool.query<User[]>('SELECT * FROM users WHERE email = ?', [email]);
        const user = rows[0];
        if (!user || user.password !== password) {
            throw new Error('Credenciais inválidas');
        }
        return generateToken(email);
    },
    async register(email: string, password: string): Promise<User> {
        const [rows] = await pool.query<User[]>('SELECT * FROM users WHERE email = ?', [email]);
        if (rows.length > 0) {
            throw new Error('Usuário já existe');
        }
        const [result] = await pool.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, password]);
        return { email, password };
    }
};

export default authService;
