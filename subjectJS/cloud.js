function calculateScore() {
    const correctAnswers = {
        q1: 'a',
        q2: 'b',
        q3: 'a',
        q4: 'a',
        q5: 'a',
        q6: 'a',
        q7: 'a',
        q8: 'a',
        q9: 'a',
        q10: 'a'
    };

    let score = 0;
    let wrong = 0;
    let correctQuestions = [];
    let wrongQuestions = [];

    for (let question in correctAnswers) {
        const answer = document.querySelector(`input[name="${question}"]:checked`);
        if (answer && answer.value === correctAnswers[question]) {
            score++;
            correctQuestions.push(question);
        } else {
            wrong++;
            wrongQuestions.push(question);
        }
    }

    // Create a popup div
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
        <div class="popup-content">
            <span class="close">&times;</span>
            <h2>~Your Score~</h2>
            <p>You got ${score} correct and ${wrong} wrong.</p>
            <p>Correct questions: ${correctQuestions.join(', ')}</p>
            <p>Wrong questions: ${wrongQuestions.join(', ')}</p>
            <canvas id="scoreChart" width="200" height="200"></canvas> <!-- Add canvas for chart -->
        </div>
    `;
    document.body.appendChild(popup);

    // Close popup when close button is clicked
    const closeButton = popup.querySelector('.close');
    closeButton.addEventListener('click', function () {
        document.body.removeChild(popup);
    });

    // Create the pie chart
    const ctx = popup.querySelector('#scoreChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Correct', 'Wrong'],
            datasets: [{
                data: [score, wrong],
                backgroundColor: ['#65B741', '#EE4E4E'],
                borderColor: '#fff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            legend: {
                position: 'bottom'
            }
        }
    });

    // Show the popup
    const popupContent = document.querySelector('.popup-content');
    popupContent.classList.add('active');
}



document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navbarLinks = document.querySelector('.navbar-links');

    menuIcon.addEventListener('click', function () {
        navbarLinks.classList.toggle('active');
    });
});


