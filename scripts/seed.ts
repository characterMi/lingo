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
    courseId: 1, // Spanish
    title: "Unit 1",
    description: "Learn the basics of Spanish",
    order: 1,
  },
];

const lessons = [
  {
    id: 1,
    unitId: 1, // Unit 1 (Learn the basics...)
    order: 1,
    title: "Nouns",
  },
  {
    id: 2,
    unitId: 1, // Unit 1 (Learn the basics...)
    order: 2,
    title: "Verbs",
  },
  {
    id: 3,
    unitId: 1, // Unit 1 (Learn the basics...)
    order: 3,
    title: "Verbs",
  },
  {
    id: 4,
    unitId: 1, // Unit 1 (Learn the basics...)
    order: 4,
    title: "Verbs",
  },
  {
    id: 5,
    unitId: 1, // Unit 1 (Learn the basics...)
    order: 5,
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

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 1,
        question: 'Which one of these is the "the man"?',
      },
      {
        id: 2,
        lessonId: 1, // Nouns
        type: "ASSIST",
        order: 2,
        question: '"the man"',
      },
      {
        id: 3,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 3,
        question: 'Which one of these is the "the robot"?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1, // Which one of these is "the man"?
        imgSrc: "/man.svg",
        correct: true,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 1,
        imgSrc: "/woman.svg",
        correct: false,
        text: "la mujer",
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 1,
        imgSrc: "/robot.svg",
        correct: false,
        text: "el robot",
        audioSrc: "/es_robot.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 2, // "the man"?
        correct: true,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "la mujer",
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "el robot",
        audioSrc: "/es_robot.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 3, // Which one of these is the "the robot"?
        imgSrc: "/man.svg",
        correct: false,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 3,
        imgSrc: "/woman.svg",
        correct: false,
        text: "la mujer",
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 3,
        imgSrc: "/robot.svg",
        correct: true,
        text: "el robot",
        audioSrc: "/es_robot.mp3",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 4,
        lessonId: 2, // Verbs
        type: "SELECT",
        order: 1,
        question: 'Which one of these is the "the man"?',
      },
      {
        id: 5,
        lessonId: 2, // Verbs
        type: "ASSIST",
        order: 2,
        question: '"the man"',
      },
      {
        id: 6,
        lessonId: 2, // Verbs
        type: "SELECT",
        order: 3,
        question: 'Which one of these is the "the robot"?',
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
