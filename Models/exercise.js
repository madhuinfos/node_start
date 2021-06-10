const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-ex1').then(async () => {
  console.log('mongdo db connected');
  // await craeteCourses();
  await findPublishedByInTitle();
  //console.log('courses created');

  await updateCourse('60b9a3d684c1ea369844e246');
});

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  isPublished: Boolean,
  price: Number,
  date: { type: Date, default: Date.now },
  tags: [String],
});

const Course = mongoose.model('Course', courseSchema);

async function findPublishedBackendCourses() {
  const courses = await Course.find({ isPublished: true, tags: 'backend' })
    .sort({ name: 1 })
    .select({
      name: 1,
      author: 1,
    });
  console.log(courses);
}

async function findPublishedCourses() {
  const courses = await Course.find({
    isPublished: true,
    tags: { $in: ['frontend', 'backend'] },
  })
    .sort({ price: -1 })
    .select({ name: 1, author: 1, price: 1 });

  console.log(courses);
}

async function findPublishedByInTitle() {
  const courses = await Course.find({
    isPublished: true,
  })
    .or([{ price: { $gte: 15 } }, { name: /.*by.*/i }])
    .select({ name: 1, author: 1, price: 1 });

  console.log(courses);
}

async function updateCourse(id) {
  const course = await Course.findById(id);

  console.log('course with the id: ', id, course);

  if (course) {
    course.isPublished = true;
    course.date = Date.now();

    course.save();

    console.log('course with name {0} is updated', course.name);
  }
}

async function craeteCourses() {
  const expressCourse = new Course({
    name: 'Express.js Course',
    author: 'Mosh',
    isPublished: true,
    price: 10,
    tags: ['express', 'backend'],
    date: '2018-01-24T21:42:27.388Z',
  });

  await expressCourse.save();

  const nodeCourse = new Course({
    name: 'Node.js Course',
    author: 'Mosh',
    isPublished: true,
    price: 20,
    tags: ['node', 'backend'],
    date: '2018-01-24T21:42:27.388Z',
  });

  await nodeCourse.save();

  const aspnetCourse = new Course({
    name: 'ASP.NET MVC Course',
    author: 'Mosh',
    isPublished: true,
    price: 10,
    tags: ['aspnet', 'backend'],
    date: '2018-01-24T21:42:27.388Z',
  });

  await aspnetCourse.save();

  const reactCourse = new Course({
    name: 'React Course',
    author: 'Mosh',
    isPublished: false,
    tags: ['react', 'frontend'],
    date: '2018-01-24T21:42:27.388Z',
  });
  await reactCourse.save();

  const nodeJackCourse = new Course({
    name: 'Node.js Course by Jack',
    author: 'Jack',
    isPublished: true,
    price: 12,
    tags: ['node', 'backend'],
    date: '2018-01-24T21:42:27.388Z',
  });
  await nodeJackCourse.save();

  const nodeMaryCourse = new Course({
    name: 'Node.js Course by Mary',
    author: 'Mosh',
    isPublished: false,
    price: 12,
    tags: ['node', 'backend'],
    date: '2018-01-24T21:42:27.388Z',
  });
  await nodeMaryCourse.save();

  const angularCourse = new Course({
    name: 'Angular Course',
    author: 'Mosh',
    isPublished: true,
    price: 15,
    tags: ['angular', 'frontend'],
    date: '2018-01-24T21:42:27.388Z',
  });
  await angularCourse.save();
}
