
import { courses } from '../script.js';

const container = document.getElementById('courses-container');

courses.forEach(course => {
    const card = document.createElement('div');
    card.className = `course-card ${course.completed ? 'completed' : 'ongoing'}`;
    
    card.innerHTML = `
        <div class="course-header">
            <span class="course-code">${course.subject} ${course.number}</span>
            <span class="course-credits">${course.credits} credits</span>
        </div>
        <h3 class="course-title">${course.title}</h3>
        <p class="certificate">Part of: ${course.certificate}</p>
        <p class="course-description">${course.description}</p>
        <div class="tech-list">
            ${course.technology.map(tech => 
                `<span class="tech-item">${tech}</span>`
            ).join('')}
        </div>
        <p style="margin-top: 10px; font-style: italic;">
            Status: ${course.completed ? '✅ Completed' : '⌛ In Progress'}
        </p>
    `;
    
    container.appendChild(card);
});