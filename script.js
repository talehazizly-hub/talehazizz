const MAX_QUESTION = 700;
const availableCount = Math.min(MAX_QUESTION, QUESTIONS.length);

const startInput = document.getElementById('startInput');
const endInput = document.getElementById('endInput');
const startBtn = document.getElementById('startBtn');
const backBtn = document.getElementById('backBtn');
const finishBtn = document.getElementById('finishBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const configPanel = document.getElementById('config-panel');
const examPanel = document.getElementById('exam-panel');
const resultPanel = document.getElementById('result-panel');
const questionTracker = document.getElementById('question-tracker');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const feedback = document.getElementById('feedback');
const scoreSummary = document.getElementById('score-summary');
const wrongList = document.getElementById('wrong-list');
const rangeNote = document.getElementById('range-note');

let currentQuestions = [];
let currentIndex = 0;
let results = [];

function init() {
  startInput.max = availableCount;
  endInput.max = availableCount;
  endInput.value = Math.min(10, availableCount);
  rangeNote.textContent = `Sual aralığı 1 - ${availableCount} arasından seçilə bilər.`;
  startBtn.addEventListener('click', startExam);
  backBtn.addEventListener('click', goBackToConfig);
  finishBtn.addEventListener('click', finishExam);
  prevBtn.addEventListener('click', goToPreviousQuestion);
  nextBtn.addEventListener('click', goToNextQuestion);
  restartBtn.addEventListener('click', resetApp);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function selectQuestionsByRange(questions, start, end) {
  // Filter questions in the specified range
  const filtered = questions.filter((item) => item.num >= start && item.num <= end);
  
  // Always shuffle the questions randomly
  shuffleArray(filtered);
  
  // If more than 50 questions, randomly select 50
  if (filtered.length > 50) {
    return filtered.slice(0, 50);
  }
  
  // Otherwise return all questions in the range (already shuffled)
  return filtered;
}

function startExam() {
  const start = Number(startInput.value);
  const end = Number(endInput.value);

  if (!Number.isInteger(start) || !Number.isInteger(end) || start < 1 || end < 1) {
    alert('Zəhmət olmasa düzgün aralıq daxil edin.');
    return;
  }

  if (start > end) {
    alert('Başlanğıc sual sayı son sualdan böyük ola bilməz.');
    return;
  }

  if (start > availableCount || end > availableCount) {
    alert(`Dəstə yalnız 1 - ${availableCount} aralığında sualları ehtiva edir.`);
    return;
  }

  currentQuestions = selectQuestionsByRange(QUESTIONS, start, end);
  if (!currentQuestions.length) {
    alert('Seçdiyiniz aralıqda sual yoxdur.');
    return;
  }

  currentIndex = 0;
  results = [];
  configPanel.classList.add('hidden');
  resultPanel.classList.add('hidden');
  examPanel.classList.remove('hidden');
  prevBtn.classList.remove('hidden');
  prevBtn.disabled = true;
  nextBtn.classList.add('hidden');
  feedback.textContent = '';
  loadQuestion();
}

function loadQuestion() {
  const current = currentQuestions[currentIndex];
  questionTracker.textContent = `Sual ${currentIndex + 1} / ${currentQuestions.length} (№ ${current.num})`;
  questionText.textContent = current.question;
  optionsContainer.innerHTML = '';
  feedback.textContent = '';
  feedback.className = 'feedback';
  nextBtn.textContent = 'Növbəti sual';
  nextBtn.classList.add('hidden');
  prevBtn.disabled = currentIndex === 0;
  prevBtn.classList.remove('hidden');

  current.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'option-button';
    button.textContent = option.text;
    button.addEventListener('click', () => selectAnswer(index));
    optionsContainer.appendChild(button);
  });
}

function selectAnswer(selectedIndex) {
  const current = currentQuestions[currentIndex];
  const optionButtons = Array.from(optionsContainer.children);
  if (optionButtons.some((btn) => btn.disabled && btn.classList.contains('option-button'))) {
    return;
  }

  const correctIndex = current.options.findIndex((o) => o.correct);
  const correctText = current.options[correctIndex].text;
  const selectedOption = current.options[selectedIndex];
  const selectedButton = optionButtons[selectedIndex];

  optionButtons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === correctIndex) {
      btn.classList.add('correct');
    }
    if (index === selectedIndex && index !== correctIndex) {
      btn.classList.add('incorrect');
    }
  });

  const isCorrect = selectedIndex === correctIndex;
  results.push({
    num: current.num,
    question: current.question,
    selected: selectedOption.text,
    correct: correctText,
    isCorrect,
  });

  if (isCorrect) {
    feedback.textContent = 'Düzgün cavab!';
    feedback.classList.add('correct');
  } else {
    feedback.textContent = `Yanlış cavab. Düzgün cavab: ${correctText}`;
    feedback.classList.add('wrong');
  }

  if (currentIndex < currentQuestions.length - 1) {
    nextBtn.classList.remove('hidden');
  } else {
    nextBtn.textContent = 'Nəticəni gör';
    nextBtn.classList.remove('hidden');
  }
}

function goToPreviousQuestion() {
  if (currentIndex > 0) {
    currentIndex -= 1;
    loadQuestion();
  }
}

function goToNextQuestion() {
  if (currentIndex < currentQuestions.length - 1) {
    currentIndex += 1;
    loadQuestion();
  } else {
    finishExam();
  }
}

function finishExam() {
  examPanel.classList.add('hidden');
  resultPanel.classList.remove('hidden');

  const correctCount = results.filter((item) => item.isCorrect).length;
  scoreSummary.textContent = `Düzgün cavablar: ${correctCount} / ${results.length}`;

  wrongList.innerHTML = '';
  const wrongItems = results.filter((item) => !item.isCorrect);
  if (wrongItems.length === 0) {
    wrongList.innerHTML = '<p>Hamısı düzgün cavablandırıldı.</p>';
  } else {
    wrongItems.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'wrong-card';
      card.innerHTML = `
        <p><strong>№ ${item.num}:</strong> ${item.question}</p>
        <p><strong>Siz seçdiniz:</strong> ${item.selected}</p>
        <p><strong>Düzgün cavab:</strong> ${item.correct}</p>
      `;
      wrongList.appendChild(card);
    });
  }
}

function goBackToConfig() {
  configPanel.classList.remove('hidden');
  examPanel.classList.add('hidden');
  resultPanel.classList.add('hidden');
  feedback.textContent = '';
  currentQuestions = [];
  results = [];
  currentIndex = 0;
  prevBtn.classList.add('hidden');
  nextBtn.classList.add('hidden');
}

function resetApp() {
  configPanel.classList.remove('hidden');
  examPanel.classList.add('hidden');
  resultPanel.classList.add('hidden');
  feedback.textContent = '';
  currentQuestions = [];
  results = [];
  nextBtn.classList.add('hidden');
}

window.addEventListener('DOMContentLoaded', init);
