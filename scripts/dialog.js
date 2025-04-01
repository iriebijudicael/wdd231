import { courses } from '../scripts/script.js';

// 1. QUERY SELECTOR REFERENCES
const courseDetails = document.getElementById('course-details');
const courseSpans = document.querySelectorAll('#course-box span');

// 2. DIALOG FUNCTION (YOUR VERSION ADAPTED)
function displayCourseDetails(course) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong>Credits</strong>: ${course.credits}</p>
        <p><strong>Certificate</strong>: ${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    `;
    courseDetails.showModal();
    
    document.getElementById("closeModal").addEventListener("click", () => {
        courseDetails.close();
    });

    // Close when clicking outside modal
    courseDetails.addEventListener('click', (e) => {
        if (e.target === courseDetails) {
            courseDetails.close();
        }
    });
}

// 3. EVENT LISTENERS FOR COURSE SPANS
courseSpans.forEach(span => {
    span.addEventListener('click', () => {
        // Find the matching course from imported data
        const courseCode = span.textContent.trim();
        const foundCourse = courses.find(c => 
            c.code === courseCode || 
            `${c.subject}${c.number}` === courseCode
        );
        
        if (foundCourse) {
            displayCourseDetails(foundCourse);
        } else {
            console.warn(`Course not found: ${courseCode}`);
            // Optional: Show error message to user
            courseDetails.innerHTML = `
                <button id="closeModal">❌</button>
                <h2>Course Details</h2>
                <p>Sorry, details not available for ${courseCode}</p>
            `;
            courseDetails.showModal();
            document.getElementById("closeModal").addEventListener("click", () => {
                courseDetails.close();
            });
        }
    });
    
    // Visual feedback
    span.style.cursor = 'pointer';
    span.style.transition = 'all 0.2s';
    span.addEventListener('mouseenter', () => {
        span.style.transform = 'scale(1.05)';
        span.style.textDecoration = 'underline';
    });
    span.addEventListener('mouseleave', () => {
        span.style.transform = 'scale(1)';
        span.style.textDecoration = 'none';
    });
});