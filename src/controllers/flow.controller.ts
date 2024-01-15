import { Request, Response } from "express";
import SupabaseService from "../config/supabase-service";
export function call(req: Request, res: Response): Response {
  let flowId = req.params.flowId;
  let params = req.body;
  const supabase = SupabaseService.client;
  //插入
  return res.json({ message: "Welcome to bezkoder application." });
}

export function node(req: Request, res: Response): Response {
  return res.json({ message: "Welcome to bezkoder application." });
}