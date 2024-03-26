import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(
  "postgresql://lingo_owner:x8vXHr2YsbEj@ep-dry-voice-a5oymc2z.us-east-2.aws.neon.tech/lingo?sslmode=require"
);

const db = drizzle(sql, { schema });

const languages = [
  {
    id: 1,
    title: "Spanish",
    imgSrc: "/es.svg",
  },
  {
    id: 2,
    title: "Japanese",
    imgSrc: "/jp.svg",
  },
  {
    id: 3,
    title: "French",
    imgSrc: "/fr.svg",
  },
  {
    id: 4,
    title: "Croatian",
    imgSrc: "/hr.svg",
  },
  {
    id: 5,
    title: "Italian",
    imgSrc: "/it.svg",
  },
];

const units = [
  {
    id: 1,
    courseId: 3,
    title: "Unit 1",
    description: "Learn the basics of French",
    order: 1,
  },
];

const lessons = [
  {
    id: 1,
    unitId: 1,
    order: 1,
    title: "Nouns",
  },
  {
    id: 2,
    unitId: 1,
    order: 2,
    title: "Verbs",
  },
];

const main = async () => {
  try {
    console.log("Seeding db");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.challenges);
    await db.delete(schema.units);
    await db.delete(schema.lessons);

    await db.insert(schema.courses).values(languages);

    await db.insert(schema.units).values(units);

    await db.insert(schema.lessons).values(lessons);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
