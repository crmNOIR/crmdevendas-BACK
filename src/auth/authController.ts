import { Request, Response } from "express";
import authService from "./authService";

export async function login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
        const token = await authService.login(email, password);
        res.json({ token });
    } catch (error: any) {
        res.status(401).json({ error: error.message });
    }
}

export async function register(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
        const user = await authService.register(email, password);
        res.status(201).json({ user });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}
