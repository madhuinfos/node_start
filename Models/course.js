const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/playground')
  .then(async () => {
    console.log('connected to mongoDb');
    const result = await createCourse();
    console.log('new course created: ', result._id);

    const courses = await getCourses();
    console.log(courses);
  })
  .catch((err) => console.log('Could not connect to mongo DB: ', err));

const { Schema } = mongoose;

const courseSchema = new Schema({
  name: String,
  specalization: String,
  startedFrom: { type: Date, default: Date.now },
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
  const nodeCourse = new Course({
    name: 'node start',
    specalization: 'backend',
  });

  const result = await nodeCourse.save();
  return result;
}

async function getCourses() {
  const courses = await Course.find({ name: 'node start' }).select({ name: 1 });
  return courses;
}
