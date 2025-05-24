import React, { useState } from 'react';

/**
 * Lesson component for displaying individual Spanish lessons
 * Handles different content types and interactive elements
 */
const Lesson = ({ lesson, onBack, onComplete }) => {
  // State for practice exercises
  const [answers, setAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  // Handle answer input for practice exercises
  const handleAnswerChange = (exerciseIndex, value) => {
    setAnswers({
      ...answers,
      [exerciseIndex]: value
    });
  };

  // Handle checking answers
  const checkAnswers = () => {
    setShowFeedback(true);
  };

  // Go to next section
  const nextSection = () => {
    if (currentSection < lesson.content.length - 1) {
      setCurrentSection(currentSection + 1);
      setShowFeedback(false);
    } else {
      onComplete();
    }
  };

  // Go to previous section
  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setShowFeedback(false);
    }
  };

  // Get current content section
  const currentContent = lesson.content[currentSection];

  // Progress indicator
  const progress = ((currentSection + 1) / lesson.content.length) * 100;

  // Render different content types
  const renderContentSection = (section) => {
    switch (section.type) {
      case 'introduction':
        return (
          <div className="lesson-introduction">
            <p>{section.text}</p>
          </div>
        );
      
      case 'vocabulary':
        return (
          <div className="vocabulary-section">
            <h3>{section.title}</h3>
            <div className="vocabulary-list">
              {section.terms.map((term, idx) => (
                <div key={idx} className="vocabulary-item">
                  <div className="term-spanish">{term.spanish}</div>
                  <div className="term-english">{term.english}</div>
                  <div className="term-pronunciation">/{term.pronunciation}/</div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'examples':
        return (
          <div className="examples-section">
            <h3>{section.title}</h3>
            {section.examples.map((example, idx) => (
              <div key={idx} className="example">
                <h4>{example.title}</h4>
                {example.dialogue && (
                  <div className="dialogue">
                    {example.dialogue.map((line, lineIdx) => (
                      <div key={lineIdx} className="dialogue-line">
                        <strong>{line.speaker}:</strong> <span className="spanish">{line.text}</span>
                        <div className="translation">{line.translation}</div>
                      </div>
                    ))}
                  </div>
                )}
                {example.sentences && (
                  <div className="sentences">
                    {example.sentences.map((sentence, sentIdx) => (
                      <div key={sentIdx} className="sentence">
                        <div className="spanish">{sentence.spanish}</div>
                        <div className="translation">{sentence.english}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      
      case 'grammar':
        return (
          <div className="grammar-section">
            <h3>{section.title}</h3>
            <p className="grammar-explanation">{section.explanation}</p>
            <div className="grammar-examples">
              {section.examples.map((example, idx) => (
                <div key={idx} className="grammar-example">
                  <div className="spanish">{example.spanish}</div>
                  <div className="translation">{example.english}</div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'practice':
        return (
          <div className="practice-section">
            <h3>Practice</h3>
            <p className="instructions">{section.instructions}</p>
            <div className="exercises">
              {section.exercises.map((exercise, idx) => (
                <div key={idx} className="exercise">
                  <div className="prompt">{exercise.prompt}</div>
                  <div className="answer-input">
                    <input
                      type="text"
                      value={answers[idx] || ''}
                      onChange={(e) => handleAnswerChange(idx, e.target.value)}
                      placeholder="Enter your answer"
                    />
                    {showFeedback && (
                      <div className={`feedback ${answers[idx]?.toLowerCase() === exercise.answer.toLowerCase() ? 'correct' : 'incorrect'}`}>
                        {answers[idx]?.toLowerCase() === exercise.answer.toLowerCase() 
                          ? '✓ Correct!' 
                          : `✕ Incorrect. The correct answer is: "${exercise.answer}"`}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {!showFeedback && (
              <button className="btn" onClick={checkAnswers}>Check Answers</button>
            )}
          </div>
        );
      
      default:
        return <div>Content type not supported.</div>;
    }
  };

  return (
    <div className="lesson-view">
      <div className="lesson-header">
        <button className="btn back-button" onClick={onBack}>Back to Lessons</button>
        <h2>{lesson.title}</h2>
      </div>
      
      <div className="progress-bar">
        <div className="progress-indicator" style={{ width: `${progress}%` }}></div>
      </div>
      
      <div className="lesson-content">
        {renderContentSection(currentContent)}
      </div>
      
      <div className="navigation-buttons">
        {currentSection > 0 && (
          <button className="btn prev-button" onClick={prevSection}>Previous</button>
        )}
        <button className="btn next-button" onClick={nextSection}>
          {currentSection < lesson.content.length - 1 ? 'Next' : 'Complete Lesson'}
        </button>
      </div>
    </div>
  );
};

export default Lesson;
