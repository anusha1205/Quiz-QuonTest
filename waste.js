function calculateScore() {
    const correctAnswers = {
        q1: 'a',
        q2: 'd',
        q3: 'c',
        q4: 'b',
        q5: 'b',
        q6: 'a',
        q7: 'a',
        q8: 'c',
        q9: 'd',
        q10: 'a',
        q11: 'b',
        q12: 'a',
        q13: 'b',
        q14: 'a',
        q15: 'b',
        q16: 'b',
        q17: 'b',
        q18: 'b',
        q19: 'a',
        q20: 'b'
    };

    let score = 0;
    let wrong = 0;

    for (let question in correctAnswers) {
        const answer = document.querySelector(`input[name="${question}"]:checked`);
        if (answer && answer.value === correctAnswers[question]) {
            score++;
        } else {
            wrong++;
        }
    }

    // Create a popup div
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
        <div class="popup-content">
            <span class="close">&times;</span>
            <p>You got ${score} correct and ${wrong} wrong.</p>
        </div>
    `;
    document.body.appendChild(popup);

    // Close popup when close button is clicked
    const closeButton = popup.querySelector('.close');
    closeButton.addEventListener('click', function() {
        document.body.removeChild(popup);
    });
}
