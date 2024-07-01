document.getElementById('mySurveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const myFormContainer = document.querySelector('.myFormContainer');
    myFormContainer.classList.add('myFormSubmitted');
    myFormContainer.innerHTML = '<h2 class="myFormTitle">Thank you for your feedback!</h2>';
    setTimeout(() => {
        myFormContainer.classList.remove('myFormSubmitted');
        myFormContainer.innerHTML = `<h1 class="myFormTitle">Survey Form</h1>
        <form id="mySurveyForm">
            <div class="myFormGroup">
                <label for="myNameInput">Name:</label>
                <input type="text" id="myNameInput" name="name" required>
            </div>
            <div class="myFormGroup">
                <label for="myEmailInput">Email:</label>
                <input type="email" id="myEmailInput" name="email" required>
            </div>
            <div class="myFormGroup">
                <label for="myAgeInput">Age:</label>
                <input type="number" id="myAgeInput" name="age" required>
            </div>
            <div class="myFormGroup">
                <label for="myFeedbackInput">Feedback:</label>
                <textarea id="myFeedbackInput" name="feedback" required></textarea>
            </div>
            <button type="submit" class="mySubmitButton">Submit</button>
        </form>`;
        document.getElementById('mySurveyForm').addEventListener('submit', arguments.callee);
    }, 3000);
});
