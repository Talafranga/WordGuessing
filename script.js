// Game variables
let currentWord = '';
let currentMeaning = '';
let attempts = 0;
let words = [];
let revealedLetters = {};
let currentDifficulty = '';

const wordContainer = document.getElementById('wordContainer');
const wordMeaning = document.getElementById('wordMeaning');
const guessButton = document.getElementById('guessButton');
const newGameButton = document.getElementById('newGameButton');
const attemptsCounter = document.getElementById('attempts');
const successMessage = document.getElementById('successMessage');
const difficultyButton = document.getElementById('difficultyButton');
const difficultyOptions = document.getElementById('difficultyOptions');

function setupDifficultySelection() {
    difficultyButton.addEventListener('click', () => {
        difficultyOptions.classList.toggle('hidden');
    });

    document.querySelectorAll('.difficulty-option').forEach(button => {
        button.addEventListener('click', (e) => {
            const level = e.target.dataset.level;
            selectDifficulty(level);
            difficultyOptions.classList.add('hidden');
            
            const difficultyNames = {
                'easy': 'Kolay',
                'medium': 'Orta',
                'hard': 'Zor'
            };
            difficultyButton.textContent = `Zorluk: ${difficultyNames[level]}`;
        });
    });
}

function selectDifficulty(level) {
    currentDifficulty = level;
    
    wordContainer.innerHTML = '';
    successMessage.textContent = '';
    successMessage.classList.remove('show');
    
    fetchWordsByDifficulty(level);
}

async function fetchWordsByDifficulty(level) {
    wordMeaning.textContent = 'Kelimeler yükleniyor...';
    
    let wordFile = '';
    switch (level) {
        case 'easy':
            wordFile = 'easy-words.json';
            break;
        case 'medium':
            wordFile = 'mid-words.json';
            break;
        case 'hard':
            wordFile = 'hard-words.json';
            break;
        default:
            wordFile = 'easy-words.json';
    }
    
    try {
        const response = await fetch(wordFile);
        
        if (!response.ok) {
            throw new Error(`Failed to load ${wordFile}`);
        }
        
        const data = await response.json();
        
        if (Array.isArray(data)) {
            words = data.filter(item => {
                const word = item.word || '';
                return word.indexOf(' ') === -1; 
            });
        } else {
            throw new Error('Invalid word data format');
        }
        
        if (words.length === 0) {
            wordMeaning.textContent = 'Kelime verisi bulunamadı.';
            return;
        }
        
        startNewGame();
    } catch (error) {
        console.error('Error loading words:', error);
        
        words = [
            { word: "araba", meaning: "Tekerlekli, motorlu veya motorsuz her türlü kara taşıtı" },
            { word: "kitap", meaning: "Ciltli veya ciltsiz olarak bir araya getirilmiş, basılı veya yazılı kağıt yaprakların bütünü" },
            { word: "deniz", meaning: "Yer kabuğunun çukur bölümlerini kaplayan, birbiriyle bağlantılı, tuzlu su kütlesi" }
        ];
        
        startNewGame();
    }
}

function startNewGame() {
    if (!currentDifficulty && words.length === 0) {
        wordContainer.innerHTML = '<div class="initial-message">Lütfen bir zorluk seviyesi seçin</div>';
        return;
    }
    
    attempts = 0;
    attemptsCounter.textContent = attempts;
    
    revealedLetters = {};
    
    wordContainer.innerHTML = '';
    
    successMessage.textContent = '';
    successMessage.classList.remove('show');
    
    const randomIndex = Math.floor(Math.random() * words.length);
    const wordData = words[randomIndex];
    
    if (typeof wordData === 'string') {
        currentWord = wordData;
        currentMeaning = 'Anlamı bulunamadı';
    } else if (wordData && typeof wordData === 'object') {
        currentWord = wordData.word || wordData.term || wordData.kelime || '';
        
        if (wordData.meanings && Array.isArray(wordData.meanings)) {
            if (wordData.meanings.length > 0) {
                const extractedMeanings = wordData.meanings.map(item => {
                    if (typeof item === 'string') {
                        return item;
                    } else if (typeof item === 'object' && item !== null) {
                        return item.meaning || item.definition || item.text || item.toString();
                    }
                    return '';
                }).filter(meaning => meaning);
                
                currentMeaning = extractedMeanings.join(' • ');
            } else {
                currentMeaning = 'Anlamı bulunamadı';
            }
        } else {
            currentMeaning = wordData.meaning || wordData.definition || wordData.anlam || '';
        }
    }
    
    if (!currentWord) {
        wordMeaning.textContent = 'Geçerli kelime bulunamadı, lütfen yeni oyun başlatın.';
        return;
    }
    
    if (currentMeaning && currentMeaning.trim() !== '') {
        wordMeaning.textContent = currentMeaning;
    } else {
        wordMeaning.textContent = 'Bu kelimenin anlamı bulunamadı.';
    }
    
    // console.log('Current word:', currentWord);
    // console.log('Current meaning:', currentMeaning);

    createWordDisplay();
}

function createWordDisplay() {
    const wordLengthContainer = document.createElement('div');
    wordLengthContainer.id = 'wordLengthContainer';
    wordLengthContainer.className = 'word-length-container';
    
    const wordLengthText = document.createElement('div');
    wordLengthText.className = 'word-length-text';
    wordLengthText.textContent = `${currentWord.length} harfli`;
    wordContainer.appendChild(wordLengthText);
    
    for (let i = 0; i < currentWord.length; i++) {
        const letterBox = document.createElement('div');
        letterBox.className = 'letter-box';
        letterBox.dataset.index = i;
        
        if (revealedLetters[i]) {
            letterBox.textContent = currentWord[i].toUpperCase();
            letterBox.classList.add('revealed');
        }
        
        wordLengthContainer.appendChild(letterBox);
    }
    
    wordContainer.appendChild(wordLengthContainer);
    
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.id = 'wordInput';
    inputElement.className = 'word-input';
    inputElement.placeholder = 'Kelimenizi yazın';
    inputElement.autocomplete = 'off';
    wordContainer.appendChild(inputElement);
    
    const hintButton = document.createElement('button');
    hintButton.id = 'hintButton';
    hintButton.className = 'hint-button';
    hintButton.textContent = 'Harf Alayım';
    hintButton.addEventListener('click', getHint);
    wordContainer.appendChild(hintButton);
    
    inputElement.focus();
    
    inputElement.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            checkGuess();
        }
    });
    
    inputElement.addEventListener('input', function() {
        updateLetterBoxes(this.value);
    });
}

function updateLetterBoxes(inputText) {
    const letterBoxes = document.querySelectorAll('.letter-box');
    
    for (let i = 0; i < currentWord.length; i++) {
        if (!revealedLetters[i]) {
            letterBoxes[i].textContent = '';
        }
    }
    
    const inputTextUpperCase = inputText.toUpperCase();
    for (let i = 0; i < inputTextUpperCase.length && i < currentWord.length; i++) {
        if (!revealedLetters[i]) {
            letterBoxes[i].textContent = inputTextUpperCase[i];
        }
    }
}

function getHint() {
    const unrevealedIndices = [];
    for (let i = 0; i < currentWord.length; i++) {
        if (!revealedLetters[i]) {
            unrevealedIndices.push(i);
        }
    }
    
    if (unrevealedIndices.length === 0) {
        alert('Tüm harfler zaten açığa çıkarıldı!');
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * unrevealedIndices.length);
    const letterIndex = unrevealedIndices[randomIndex];
    
    revealedLetters[letterIndex] = true;
    
    const letterBoxes = document.querySelectorAll('.letter-box');
    letterBoxes[letterIndex].textContent = currentWord[letterIndex].toUpperCase();
    letterBoxes[letterIndex].classList.add('revealed');
    

    attempts++;
    attemptsCounter.textContent = attempts;
    

    document.getElementById('wordInput').focus();
}


function checkGuess() {
    const wordInput = document.getElementById('wordInput');
    const guess = wordInput.value.trim().toLowerCase();
    

    if (!guess) {
        alert('Lütfen bir kelime girin!');
        return;
    }
    

    attempts++;
    attemptsCounter.textContent = attempts;
    

    if (guess.toLowerCase() === currentWord.toLowerCase()) {

        const letterBoxes = document.querySelectorAll('.letter-box');
        for (let i = 0; i < currentWord.length; i++) {
            letterBoxes[i].textContent = currentWord[i].toUpperCase();
            letterBoxes[i].classList.add('revealed');

            revealedLetters[i] = true;
        }
        

        successMessage.textContent = `Tebrikler! Kelimeyi ${attempts} denemede buldunuz: ${currentWord.toUpperCase()}`;
        successMessage.classList.add('show');
        

        wordInput.disabled = true;
        

        const hintButton = document.getElementById('hintButton');
        if (hintButton) {
            hintButton.disabled = true;
        }
    } else {

        wordInput.value = '';
        wordInput.focus();
        

        updateLetterBoxes('');
        

        const incorrectMessage = document.createElement('div');
        incorrectMessage.className = 'incorrect-guess';
        incorrectMessage.textContent = `Yanlış tahmin: ${guess}`;
        wordContainer.appendChild(incorrectMessage);
        

        setTimeout(() => {
            incorrectMessage.remove();
        }, 2000);
    }
}


guessButton.addEventListener('click', checkGuess);
newGameButton.addEventListener('click', startNewGame);


document.addEventListener('DOMContentLoaded', () => {
    setupDifficultySelection();
    

    wordContainer.innerHTML = '<div class="initial-message">Lütfen bir zorluk seviyesi seçin</div>';
    wordMeaning.textContent = 'Kelime anlamı burada gözükecek';
}); 