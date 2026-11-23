import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";

import * as schema from "./schema";

export const sqlite = openDatabaseSync("meu_equilibrio.db");

sqlite.execSync("PRAGMA foreign_keys = ON;");

export const db = drizzle(sqlite, { schema });
