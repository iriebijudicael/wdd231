
// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;


// Get references to the hamburger icon and the navbar
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

// Add a click event listener to the hamburger icon
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


export const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'ITM',
        number: 111,
        title: 'Introduction to Database',
        credits: 2,
        certificate: 'Build a Database',
        description: 'This course introduces students to the fundamental concepts of databases. Students will learn about data modeling, normalization, and relational databases. Students will also learn to write basic SQL queries.',
        technology: ['Ongoing Courses'],
        completed: false
    },
    {
        subject: 'GS',
        number: 170,
        title: 'Career Development',
        credits: 2,
        certificate: 'Career Development',
        description: 'In this course, students develop resources, professional connections and essential employability skills to obtain or improve employment in a field related to their university certificate. Students will network and apply for job opportunities in their industry. The life-long skills gained in this course are valuable for both active and future job seekers.',
        technology: ['Ongoing Courses'],
        completed: false
    },
    {
        subject: 'REL',
        number: 250,
        title: 'REL250A - Jesus Christ and His Everlasting Gospel A',
        credits: 2,
        certificate: 'Institute of Religion',
        description: 'This course is a study of the life and teachings of Jesus Christ as found in the New Testament, with emphasis on His gospel, the Atonement, and the plan of salvation. Special attention is given to the application of His teachings in our lives today.',
        technology: ['Ongoing Courses'],
        completed: false
    }
];

const courseBox = document.getElementById('course-box');

// Function to display courses
function displayCourses(filteredCourses) {
    courseBox.innerHTML = ''; // Clear the container

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        if (course.completed) {
            courseCard.classList.add('completed');
        }

        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}: ${course.title}</h3>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Technology:</strong> ${course.technology.join(', ')}</p>
        `;

        courseBox.appendChild(courseCard);
    });
}

// Event listeners for filter buttons
document.getElementById('all').addEventListener('click', () => {
    displayCourses(courses);
});

document.getElementById('cse').addEventListener('click', () => {
    const cseCourses = courses.filter(course => course.subject === 'CSE');
    displayCourses(cseCourses);
});

document.getElementById('wdd').addEventListener('click', () => {
    const wddCourses = courses.filter(course => course.subject === 'WDD');
    displayCourses(wddCourses);
});

document.getElementById('itm').addEventListener('click', () => {
    const itmCourses = courses.filter(course => course.subject === 'ITM');
    displayCourses(itmCourses);
});

document.getElementById('gs').addEventListener('click', () => {
    const gsCourses = courses.filter(course => course.subject === 'GS');
    displayCourses(gsCourses);
});

document.getElementById('rel').addEventListener('click', () => {
    const relCourses = courses.filter(course => course.subject === 'REL');
    displayCourses(relCourses);
});

// Display all courses by default on page load
displayCourses(courses);