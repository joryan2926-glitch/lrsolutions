import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export async function readJson<T>(name: string, fallback: T): Promise<T> {
  try {
    const raw = await readFile(path.join(process.cwd(), "data", name), "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export async function writeJson(name: string, value: unknown) {
  const dir = path.join(process.cwd(), "data");
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, name), JSON.stringify(value, null, 2), "utf8");
}
