import React, { useState } from 'react';
import spanishCurriculum from '../data/spanishCurriculum';
import Lesson from './Lesson';
import Quiz from './Quiz';

/**
 * MainContainer component for EvolvLingua
 * Serves as the main container for the Spanish learning application,
 * managing lessons and quizzes data and user navigation
 */
const MainContainer = () => {
  // State for managing the app
  const [level, setLevel] = useState('beginner'); // 'beginner' or 'intermediate'
  const [view, setView] = useState('overview'); // 'overview', 'lessons', 'quizzes', 'lesson', 'quiz'
  const [currentItemId, setCurrentItemId] = useState(null); // Current lesson or quiz ID

  // Get current curriculum data based on selected level
  const currentCurriculum = spanishCurriculum[level];

  // Find current lesson or quiz based on ID
  const getCurrentLesson = () => {
    return currentCurriculum.lessons.find(lesson => lesson.id === currentItemId);
  };

  const getCurrentQuiz = () => {
    return currentCurriculum.quizzes.find(quiz => quiz.id === currentItemId);
  };

  // Handle navigation functions
  const goToOverview = () => {
    setView('overview');
    setCurrentItemId(null);
  };

  const goToLessons = () => {
    setView('lessons');
    setCurrentItemId(null);
  };

  const goToQuizzes = () => {
    setView('quizzes');
    setCurrentItemId(null);
  };

  const openLesson = (lessonId) => {
    setView('lesson');
    setCurrentItemId(lessonId);
  };

  const openQuiz = (quizId) => {
    setView('quiz');
    setCurrentItemId(quizId);
  };

  const changeLevel = (newLevel) => {
    setLevel(newLevel);
    goToOverview();
  };

  // Render components based on current view
  const renderContent = () => {
    switch (view) {
      case 'overview':
        return (
          <div className="overview">
            <h2>{currentCurriculum.title}</h2>
            <p className="description">{currentCurriculum.description}</p>
            
            <div className="section-buttons">
              <button className="btn" onClick={goToLessons}>View Lessons</button>
              <button className="btn" onClick={goToQuizzes}>Take Quizzes</button>
            </div>

            <div className="level-selection">
              <p>Select your level:</p>
              <div className="level-buttons">
                <button 
                  className={`btn ${level === 'beginner' ? 'active' : ''}`} 
                  onClick={() => changeLevel('beginner')}
                >
                  Beginner
                </button>
                <button 
                  className={`btn ${level === 'intermediate' ? 'active' : ''}`} 
                  onClick={() => changeLevel('intermediate')}
                >
                  Intermediate
                </button>
              </div>
            </div>
          </div>
        );
      
      case 'lessons':
        return (
          <div className="lessons-list">
            <h2>{currentCurriculum.title} - Lessons</h2>
            <button className="btn back-button" onClick={goToOverview}>Back to Overview</button>
            
            <div className="lessons-grid">
              {currentCurriculum.lessons.map((lesson) => (
                <div key={lesson.id} className="lesson-card" onClick={() => openLesson(lesson.id)}>
                  <h3>{lesson.title}</h3>
                  <p>{lesson.description}</p>
                  <button className="btn">Start Lesson</button>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'quizzes':
        return (
          <div className="quizzes-list">
            <h2>{currentCurriculum.title} - Quizzes</h2>
            <button className="btn back-button" onClick={goToOverview}>Back to Overview</button>
            
            <div className="quizzes-grid">
              {currentCurriculum.quizzes.map((quiz) => (
                <div key={quiz.id} className="quiz-card" onClick={() => openQuiz(quiz.id)}>
                  <h3>{quiz.title}</h3>
                  <p>{quiz.description}</p>
                  <div className="quiz-info">
                    <span>{quiz.questions.length} questions</span>
                  </div>
                  <button className="btn">Start Quiz</button>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'lesson':
        const lesson = getCurrentLesson();
        return lesson ? (
          <Lesson 
            lesson={lesson} 
            onBack={goToLessons}
            onComplete={() => {
              // Find the next lesson or go back to lesson list
              const lessons = currentCurriculum.lessons;
              const currentIndex = lessons.findIndex(l => l.id === lesson.id);
              if (currentIndex < lessons.length - 1) {
                openLesson(lessons[currentIndex + 1].id);
              } else {
                goToLessons();
              }
            }}
          />
        ) : goToLessons();
      
      case 'quiz':
        const quiz = getCurrentQuiz();
        return quiz ? (
          <Quiz 
            quiz={quiz} 
            onBack={goToQuizzes}
            onComplete={() => {
              // Go back to quiz list when quiz is completed
              goToQuizzes();
            }}
          />
        ) : goToQuizzes();
      
      default:
        return goToOverview();
    }
  };

  return (
    <div className="main-container">
      {renderContent()}
    </div>
  );
};

export default MainContainer;
