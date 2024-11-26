const express = require("express");
const router = express.Router();
const BASE_URL = "/lessons/";

// Initial data for DB
const allLessons = require("../src/lessons.json");
const initialLessonsList = allLessons.lessons;

const schemas = require("../models/schemas");
const mongoose = require("mongoose");

// Post lessons list to the DB if DB is empty
async function isDBEmpty() {
  try {
    const LessonsDB = schemas.Lessons;

    await LessonsDB.countDocuments({}).then((count) => {
      // console.log("lessonscount", count);

      if (count === 0) {
        initialLessonsList.map(async (lessonData) => {
          console.log(lessonData);

          await schemas.Lessons.create(lessonData);

          // console.log(lessonsToSend);
        });
      }
    });
  } catch (error) {
    console.error("error, when connecting to DB", error);
  }
}

isDBEmpty();

// Get lessons list

router.get(BASE_URL, async (req, res) => {
  try {
    const LessonsDB = schemas.Lessons;
    const lessonsList = await LessonsDB.find({}).sort({ counter: 1 });
    res.send(lessonsList);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving lessons");
  }
});

// Get current lesson

router.get(`${BASE_URL}:id`, async (req, res) => {
  const {
    params: { id },
  } = req;

  const lesson = schemas.Lessons;

  const lessonData = await lesson.findById(`${id}`).exec();

  // Used with local JSON DB
  // const resLesson = lessonsList.filter((lesson) => lesson.id === id);

  res.send(lessonData);
});

// Patch completed status

router.patch(`${BASE_URL}:id`, async (req, res) => {
  const {
    body,
    params: { id },
  } = req;

  console.log(id, "body:", body);

  const lesson = schemas.Lessons;
  const lessonData = await lesson.findById(`${id}`).exec();

  const { notes, completed } = body;

  if (notes) {
    lessonData.notes = notes;
    await lessonData.save();
    console.log("notes:", notes);
  }

  if (completed != null) {
    lessonData.completed = completed;
    console.log("completed:", completed);
    await lessonData.save();
  }

  return res.status(200).send();

  // for (let key in body) {

  //   const keyCopy = JSON.parse(JSON.stringify(key));

  //   if (keyCopy != 'completed' || keyCopy != 'notes') {
  //     console.log('key is wrong, key is:', typeof key);
  //     return res.status(400).json({ errors: '400 Bad request' });
  //   }
  // }

  // Used with local JSON DB

  //      const lessonIndex = lessonsList.findIndex((lesson) => lesson.id === id);
  //
  //      if (lessonIndex === -1) {
  //        return res.status(404).send("Lesson not found");
  //      }
  //
  //      console.log("current", lessonsList[lessonIndex]);
  //      lessonsList[lessonIndex] = { ...lessonsList[lessonIndex], ...body };
  //
  //      return res.sendStatus(200).send("OK");

  // allLessons.lessons.map((lesson) => {
  //   if (lesson.id === id) {
  //     console.log(body[0]);
  //     switch (body[0]) {
  //       case 'completed':
  //         lesson.completed = body.completed;
  //         return res.sendStatus(200).send('OK');

  //       case 'notes':
  //         lesson.notes = body.notes;
  //         console.log(body.notes);
  //         return res.sendStatus(200).send('OK');

  //       default:
  //         return;
  //     }
  //   }
  // });

  // return res.sendStatus(404).send('NOT FOUND');
});

module.exports = router;
