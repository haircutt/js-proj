import validator from 'validator';
import { randomUUID } from 'crypto';
import jsSHA from "jssha";

function hashPassword(password: string): string {
  const shaObj = new jsSHA("SHA-256", "TEXT", { encoding: "UTF8" });
  shaObj.update(password);
  return shaObj.getHash("HEX");
}