import { Router, Request, Response } from "express";

const router = Router();

router.post("/login", (req: Request, res: Response) => {

    res.json({ message: "Login realizado (sem verificação)" });
});
router.post("/register", (req: Request, res: Response) => {
    res.json({ message: "Registro realizado (sem verificação)" });
})
router.get("/logout", (req: Request, res: Response) => {
    res.json({ message: "Logout realizado" });
})
export default router;
