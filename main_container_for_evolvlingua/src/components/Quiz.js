import React, { useState } from 'react';

/**
 * Quiz component for interactive Spanish language quizzes
 * Handles question display, answer selection, and scoring
 */
const Quiz = ({ quiz, onBack, onComplete }) => {
  // State for quiz progress and answers
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  // Current question
  const currentQuestion = quiz.questions[currentQuestionIndex];
  
  // Handle answer selection
  const handleSelectAnswer = (answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: answer
    });
  };
  
  // Calculate score
  const calculateScore = () => {
    let correctCount = 0;
    quiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });
    return {
      correct: correctCount,
      total: quiz.questions.length,
      percentage: Math.round((correctCount / quiz.questions.length) * 100)
    };
  };
  
  // Go to next question or finish quiz
  const goToNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
      setQuizCompleted(true);
    }
  };
  
  // Go to previous question
  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  // Progress indicator
  const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;
  
  // Reset quiz
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
    setQuizCompleted(false);
  };
  
  // Render quiz results
  const renderResults = () => {
    const score = calculateScore();
    
    return (
      <div className="quiz-results">
        <h3>Quiz Results: {quiz.title}</h3>
        
        <div className="score-summary">
          <div className="score-percentage">{score.percentage}%</div>
          <div className="score-fraction">
            {score.correct} correct out of {score.total} questions
          </div>
        </div>
        
        {score.percentage >= 80 ? (
          <div className="success-message">
            ¡Excelente! You've mastered this quiz.
          </div>
        ) : score.percentage >= 60 ? (
          <div className="good-message">
            ¡Muy bien! Keep practicing to improve.
          </div>
        ) : (
          <div className="needs-practice-message">
            ¡Sigue practicando! You should review this material again.
          </div>
        )}
        
        <div className="answer-review">
          <h4>Review of Questions:</h4>
          {quiz.questions.map((question, idx) => (
            <div key={idx} className="question-review">
              <div className="question-text">{question.question}</div>
              <div className={`answer-result ${
                selectedAnswers[idx] === question.correctAnswer ? 'correct' : 'incorrect'
              }`}>
                Your answer: {selectedAnswers[idx] || "Not answered"}
                {selectedAnswers[idx] !== question.correctAnswer && (
                  <div className="correct-answer">
                    Correct answer: {question.correctAnswer}
                  </div>
                )}
                <div className="answer-explanation">{question.explanation}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="quiz-completed-buttons">
          <button className="btn" onClick={resetQuiz}>Take Quiz Again</button>
          <button className="btn" onClick={onComplete}>Return to Quizzes</button>
        </div>
      </div>
    );
  };
  
  // Render quiz question
  const renderQuestion = () => {
    return (
      <div className="quiz-question">
        <div className="question-counter">
          Question {currentQuestionIndex + 1} of {quiz.questions.length}
        </div>
        
        <div className="question-text">
          {currentQuestion.question}
        </div>
        
        <div className="answer-options">
          {currentQuestion.options.map((option, idx) => (
            <div 
              key={idx} 
              className={`answer-option ${selectedAnswers[currentQuestionIndex] === option ? 'selected' : ''}`}
              onClick={() => handleSelectAnswer(option)}
            >
              {option}
            </div>
          ))}
        </div>
        
        <div className="navigation-buttons">
          {currentQuestionIndex > 0 && (
            <button className="btn prev-button" onClick={goToPreviousQuestion}>Previous</button>
          )}
          <button 
            className="btn next-button" 
            onClick={goToNextQuestion} 
            disabled={selectedAnswers[currentQuestionIndex] === undefined}
          >
            {currentQuestionIndex < quiz.questions.length - 1 ? 'Next' : 'Finish Quiz'}
          </button>
        </div>
      </div>
    );
  };
  
  return (
    <div className="quiz-view">
      <div className="quiz-header">
        <button className="btn back-button" onClick={onBack}>Back to Quizzes</button>
        <h2>{quiz.title}</h2>
      </div>
      
      {!showResults && (
        <div className="progress-bar">
          <div className="progress-indicator" style={{ width: `${progress}%` }}></div>
        </div>
      )}
      
      <div className="quiz-content">
        {showResults ? renderResults() : renderQuestion()}
      </div>
    </div>
  );
};

export default Quiz;
