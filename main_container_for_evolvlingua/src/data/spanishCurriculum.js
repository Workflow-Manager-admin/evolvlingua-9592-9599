/**
 * Spanish Curriculum Data for EvolvLingua
 * Structured progression from beginner to intermediate levels
 */

const spanishCurriculum = {
  beginner: {
    title: "Beginner Spanish",
    description: "Start your Spanish journey with essential vocabulary and basic expressions.",
    lessons: [
      {
        id: "b1",
        title: "Basic Greetings",
        description: "Learn how to say hello and introduce yourself in Spanish.",
        content: [
          {
            type: "introduction",
            text: "Greetings are an essential part of any language. Let's learn how to say hello and introduce yourself in Spanish."
          },
          {
            type: "vocabulary",
            title: "Key Expressions",
            terms: [
              { spanish: "Hola", english: "Hello", pronunciation: "OH-lah" },
              { spanish: "Buenos días", english: "Good morning", pronunciation: "BWEH-nohs DEE-ahs" },
              { spanish: "Buenas tardes", english: "Good afternoon", pronunciation: "BWEH-nahs TAR-dehs" },
              { spanish: "Buenas noches", english: "Good evening/night", pronunciation: "BWEH-nahs NO-chehs" },
              { spanish: "¿Cómo estás?", english: "How are you?", pronunciation: "KO-moh eh-STAHS" },
              { spanish: "Estoy bien, gracias", english: "I'm fine, thank you", pronunciation: "eh-STOY bee-EHN, GRAH-see-ahs" },
              { spanish: "¿Y tú?", english: "And you?", pronunciation: "ee too" },
              { spanish: "Me llamo...", english: "My name is...", pronunciation: "meh YAH-moh" },
              { spanish: "Mucho gusto", english: "Nice to meet you", pronunciation: "MOO-choh GOO-stoh" },
              { spanish: "Adiós", english: "Goodbye", pronunciation: "ah-dee-OHS" },
              { spanish: "Hasta luego", english: "See you later", pronunciation: "AH-stah LWEH-goh" }
            ]
          },
          {
            type: "examples",
            title: "Conversation Examples",
            examples: [
              {
                title: "Meeting Someone New",
                dialogue: [
                  { speaker: "Ana", text: "¡Hola! Me llamo Ana. ¿Cómo te llamas?", translation: "Hi! My name is Ana. What's your name?" },
                  { speaker: "Carlos", text: "Hola Ana. Me llamo Carlos. Mucho gusto.", translation: "Hi Ana. My name is Carlos. Nice to meet you." },
                  { speaker: "Ana", text: "Mucho gusto, Carlos. ¿Cómo estás?", translation: "Nice to meet you, Carlos. How are you?" },
                  { speaker: "Carlos", text: "Estoy bien, gracias. ¿Y tú?", translation: "I'm fine, thank you. And you?" },
                  { speaker: "Ana", text: "Muy bien, gracias.", translation: "Very well, thank you." }
                ]
              }
            ]
          },
          {
            type: "practice",
            instructions: "Practice introducing yourself by filling in the blanks.",
            exercises: [
              {
                prompt: "To say 'Hello, my name is John', you would say:",
                answer: "Hola, me llamo John."
              },
              {
                prompt: "To ask someone how they are, you would say:",
                answer: "¿Cómo estás?"
              }
            ]
          }
        ]
      },
      {
        id: "b2",
        title: "Numbers 1-20",
        description: "Learn to count from 1 to 20 in Spanish.",
        content: [
          {
            type: "introduction",
            text: "Numbers are fundamental in any language. In this lesson, we'll learn how to count from 1 to 20 in Spanish."
          },
          {
            type: "vocabulary",
            title: "Numbers 1-10",
            terms: [
              { spanish: "uno", english: "one", pronunciation: "OO-noh" },
              { spanish: "dos", english: "two", pronunciation: "dohs" },
              { spanish: "tres", english: "three", pronunciation: "trehs" },
              { spanish: "cuatro", english: "four", pronunciation: "KWAH-troh" },
              { spanish: "cinco", english: "five", pronunciation: "SEEN-koh" },
              { spanish: "seis", english: "six", pronunciation: "says" },
              { spanish: "siete", english: "seven", pronunciation: "see-EH-teh" },
              { spanish: "ocho", english: "eight", pronunciation: "OH-choh" },
              { spanish: "nueve", english: "nine", pronunciation: "noo-EH-veh" },
              { spanish: "diez", english: "ten", pronunciation: "dee-EHS" }
            ]
          },
          {
            type: "vocabulary",
            title: "Numbers 11-20",
            terms: [
              { spanish: "once", english: "eleven", pronunciation: "OHN-seh" },
              { spanish: "doce", english: "twelve", pronunciation: "DOH-seh" },
              { spanish: "trece", english: "thirteen", pronunciation: "TREH-seh" },
              { spanish: "catorce", english: "fourteen", pronunciation: "kah-TOHR-seh" },
              { spanish: "quince", english: "fifteen", pronunciation: "KEEN-seh" },
              { spanish: "dieciséis", english: "sixteen", pronunciation: "dee-eh-see-SAYS" },
              { spanish: "diecisiete", english: "seventeen", pronunciation: "dee-eh-see-see-EH-teh" },
              { spanish: "dieciocho", english: "eighteen", pronunciation: "dee-eh-see-OH-choh" },
              { spanish: "diecinueve", english: "nineteen", pronunciation: "dee-eh-see-noo-EH-veh" },
              { spanish: "veinte", english: "twenty", pronunciation: "BAYN-teh" }
            ]
          },
          {
            type: "examples",
            title: "Using Numbers in Conversation",
            examples: [
              {
                title: "Asking for Phone Numbers",
                dialogue: [
                  { speaker: "María", text: "¿Cuál es tu número de teléfono?", translation: "What is your phone number?" },
                  { speaker: "Juan", text: "Es cinco, cuatro, tres, dos, uno, nueve, ocho, siete.", translation: "It's five, four, three, two, one, nine, eight, seven." }
                ]
              }
            ]
          },
          {
            type: "practice",
            instructions: "Match the numbers with their Spanish equivalents.",
            exercises: [
              {
                prompt: "The number 7 in Spanish is:",
                answer: "siete"
              },
              {
                prompt: "The number 15 in Spanish is:",
                answer: "quince"
              }
            ]
          }
        ]
      },
      {
        id: "b3",
        title: "Essential Verbs",
        description: "Learn crucial Spanish verbs and how to use them in simple sentences.",
        content: [
          {
            type: "introduction",
            text: "Verbs are action words that form the backbone of any language. In this lesson, we'll learn some essential Spanish verbs and how to use them in simple sentences."
          },
          {
            type: "vocabulary",
            title: "Common Verbs in Infinitive Form",
            terms: [
              { spanish: "ser", english: "to be (permanent)", pronunciation: "sehr" },
              { spanish: "estar", english: "to be (temporary)", pronunciation: "eh-STAR" },
              { spanish: "tener", english: "to have", pronunciation: "teh-NEHR" },
              { spanish: "ir", english: "to go", pronunciation: "eer" },
              { spanish: "hablar", english: "to speak", pronunciation: "ah-BLAR" },
              { spanish: "comer", english: "to eat", pronunciation: "koh-MEHR" },
              { spanish: "beber", english: "to drink", pronunciation: "beh-BEHR" },
              { spanish: "vivir", english: "to live", pronunciation: "bee-BEER" },
              { spanish: "querer", english: "to want", pronunciation: "keh-REHR" },
              { spanish: "hacer", english: "to do/make", pronunciation: "ah-SEHR" }
            ]
          },
          {
            type: "grammar",
            title: "Ser vs. Estar",
            explanation: "Spanish has two verbs that mean 'to be': ser and estar. Ser is used for permanent traits or characteristics, while estar is used for temporary conditions or locations.",
            examples: [
              { spanish: "Yo soy estudiante.", english: "I am a student." },
              { spanish: "Yo estoy feliz.", english: "I am happy." },
              { spanish: "Ella es alta.", english: "She is tall." },
              { spanish: "Ella está en la escuela.", english: "She is at school." }
            ]
          },
          {
            type: "examples",
            title: "Using Verbs in Sentences",
            examples: [
              {
                title: "Daily Activities",
                sentences: [
                  { spanish: "Yo como desayuno a las ocho.", english: "I eat breakfast at eight." },
                  { spanish: "Tú bebes agua.", english: "You drink water." },
                  { spanish: "Él habla español.", english: "He speaks Spanish." },
                  { spanish: "Nosotros vamos al parque.", english: "We go to the park." }
                ]
              }
            ]
          }
        ]
      }
    ],
    quizzes: [
      {
        id: "qb1",
        title: "Greetings Quiz",
        description: "Test your knowledge of Spanish greetings and introductions.",
        questions: [
          {
            question: "How do you say 'Hello' in Spanish?",
            options: ["Adiós", "Hola", "Gracias", "Por favor"],
            correctAnswer: "Hola",
            explanation: "Hola is the Spanish word for Hello."
          },
          {
            question: "Which phrase means 'Good morning' in Spanish?",
            options: ["Buenas noches", "Buenas tardes", "Buenos días", "Buen provecho"],
            correctAnswer: "Buenos días",
            explanation: "Buenos días means Good morning in Spanish."
          },
          {
            question: "How would you ask 'How are you?' in Spanish?",
            options: ["¿Qué tal?", "¿Cómo estás?", "¿Dónde estás?", "¿Quién eres?"],
            correctAnswer: "¿Cómo estás?",
            explanation: "¿Cómo estás? means How are you? in Spanish."
          },
          {
            question: "What does 'Me llamo...' mean?",
            options: ["I call you...", "Call me...", "My name is...", "They call me..."],
            correctAnswer: "My name is...",
            explanation: "Me llamo... translates to My name is... in English."
          },
          {
            question: "How do you say 'Nice to meet you' in Spanish?",
            options: ["Buenos días", "Hasta luego", "Mucho gusto", "¿Y tú?"],
            correctAnswer: "Mucho gusto",
            explanation: "Mucho gusto means Nice to meet you in Spanish."
          }
        ]
      },
      {
        id: "qb2",
        title: "Numbers Quiz",
        description: "Test your knowledge of numbers 1-20 in Spanish.",
        questions: [
          {
            question: "What is the Spanish word for the number 5?",
            options: ["Cuatro", "Cinco", "Seis", "Siete"],
            correctAnswer: "Cinco",
            explanation: "Cinco is the Spanish word for the number 5."
          },
          {
            question: "What number is 'doce' in English?",
            options: ["2", "10", "12", "20"],
            correctAnswer: "12",
            explanation: "Doce means 12 in English."
          },
          {
            question: "Which of the following is the correct Spanish word for 15?",
            options: ["Cincuenta", "Quince", "Diecicinco", "Cinco diez"],
            correctAnswer: "Quince",
            explanation: "Quince is the Spanish word for the number 15."
          },
          {
            question: "What is the Spanish word for the number 7?",
            options: ["Ocho", "Seis", "Siete", "Nueve"],
            correctAnswer: "Siete",
            explanation: "Siete is the Spanish word for the number 7."
          },
          {
            question: "How do you say 18 in Spanish?",
            options: ["Dieciocho", "Ochenta", "Ochodiez", "Dieciséis"],
            correctAnswer: "Dieciocho",
            explanation: "Dieciocho means 18 in Spanish."
          }
        ]
      }
    ]
  },
  intermediate: {
    title: "Intermediate Spanish",
    description: "Expand your Spanish skills with more complex vocabulary and grammatical concepts.",
    lessons: [
      {
        id: "i1",
        title: "Present Tense Conjugation",
        description: "Learn how to conjugate regular verbs in the present tense.",
        content: [
          {
            type: "introduction",
            text: "In Spanish, verbs change their endings depending on who is performing the action. This is called conjugation. In this lesson, we'll learn how to conjugate regular verbs in the present tense."
          },
          {
            type: "grammar",
            title: "Regular -ar Verbs",
            explanation: "Regular -ar verbs follow a pattern in the present tense. You remove the -ar ending and add the appropriate ending based on the subject.",
            examples: [
              { spanish: "Hablar (to speak)", english: "Conjugation pattern:" },
              { spanish: "yo hablo", english: "I speak" },
              { spanish: "tú hablas", english: "you speak (informal)" },
              { spanish: "él/ella/usted habla", english: "he/she speaks, you speak (formal)" },
              { spanish: "nosotros/nosotras hablamos", english: "we speak" },
              { spanish: "vosotros/vosotras habláis", english: "you all speak (informal, used in Spain)" },
              { spanish: "ellos/ellas/ustedes hablan", english: "they speak, you all speak (formal)" }
            ]
          },
          {
            type: "grammar",
            title: "Regular -er Verbs",
            explanation: "Regular -er verbs follow a different pattern in the present tense.",
            examples: [
              { spanish: "Comer (to eat)", english: "Conjugation pattern:" },
              { spanish: "yo como", english: "I eat" },
              { spanish: "tú comes", english: "you eat (informal)" },
              { spanish: "él/ella/usted come", english: "he/she eats, you eat (formal)" },
              { spanish: "nosotros/nosotras comemos", english: "we eat" },
              { spanish: "vosotros/vosotras coméis", english: "you all eat (informal, used in Spain)" },
              { spanish: "ellos/ellas/ustedes comen", english: "they eat, you all eat (formal)" }
            ]
          },
          {
            type: "grammar",
            title: "Regular -ir Verbs",
            explanation: "Regular -ir verbs have their own conjugation pattern in the present tense.",
            examples: [
              { spanish: "Vivir (to live)", english: "Conjugation pattern:" },
              { spanish: "yo vivo", english: "I live" },
              { spanish: "tú vives", english: "you live (informal)" },
              { spanish: "él/ella/usted vive", english: "he/she lives, you live (formal)" },
              { spanish: "nosotros/nosotras vivimos", english: "we live" },
              { spanish: "vosotros/vosotras vivís", english: "you all live (informal, used in Spain)" },
              { spanish: "ellos/ellas/ustedes viven", english: "they live, you all live (formal)" }
            ]
          },
          {
            type: "examples",
            title: "Present Tense in Context",
            examples: [
              {
                title: "Daily Activities",
                sentences: [
                  { spanish: "Yo trabajo en una oficina.", english: "I work in an office." },
                  { spanish: "Tú comes mucha fruta.", english: "You eat a lot of fruit." },
                  { spanish: "Ella vive en Madrid.", english: "She lives in Madrid." },
                  { spanish: "Nosotros hablamos español.", english: "We speak Spanish." },
                  { spanish: "Ellos aprenden rápidamente.", english: "They learn quickly." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "i2",
        title: "Daily Vocabulary",
        description: "Learn common words and phrases for everyday situations.",
        content: [
          {
            type: "introduction",
            text: "Building your vocabulary is essential for becoming fluent in Spanish. In this lesson, we'll learn common words and phrases for everyday situations."
          },
          {
            type: "vocabulary",
            title: "Food and Dining",
            terms: [
              { spanish: "el desayuno", english: "breakfast", pronunciation: "el deh-sah-YOO-noh" },
              { spanish: "el almuerzo", english: "lunch", pronunciation: "el al-MWEHR-soh" },
              { spanish: "la cena", english: "dinner", pronunciation: "la SEH-nah" },
              { spanish: "el restaurante", english: "restaurant", pronunciation: "el res-tow-RAHN-teh" },
              { spanish: "la cuenta", english: "the bill", pronunciation: "la KWEHN-tah" },
              { spanish: "el menú", english: "menu", pronunciation: "el meh-NOO" },
              { spanish: "el camarero/la camarera", english: "waiter/waitress", pronunciation: "el kah-mah-REH-roh/la kah-mah-REH-rah" },
              { spanish: "la propina", english: "tip", pronunciation: "la proh-PEE-nah" }
            ]
          },
          {
            type: "vocabulary",
            title: "Shopping",
            terms: [
              { spanish: "la tienda", english: "store", pronunciation: "la tee-EHN-dah" },
              { spanish: "comprar", english: "to buy", pronunciation: "kohm-PRAR" },
              { spanish: "vender", english: "to sell", pronunciation: "behn-DEHR" },
              { spanish: "el precio", english: "price", pronunciation: "el PREH-see-oh" },
              { spanish: "caro/barato", english: "expensive/cheap", pronunciation: "KAH-roh/bah-RAH-toh" },
              { spanish: "el descuento", english: "discount", pronunciation: "el dehs-KWEHN-toh" },
              { spanish: "la talla", english: "size", pronunciation: "la TAH-yah" },
              { spanish: "el color", english: "color", pronunciation: "el koh-LOHR" },
              { spanish: "el dinero", english: "money", pronunciation: "el dee-NEH-roh" },
              { spanish: "la tarjeta de crédito", english: "credit card", pronunciation: "la tar-HEH-tah deh KREH-dee-toh" }
            ]
          },
          {
            type: "examples",
            title: "At a Restaurant",
            examples: [
              {
                title: "Ordering Food",
                dialogue: [
                  { speaker: "Camarero", text: "Buenas tardes. ¿Qué desea ordenar?", translation: "Good afternoon. What would you like to order?" },
                  { speaker: "Cliente", text: "Me gustaría una ensalada de tomate y un agua mineral, por favor.", translation: "I would like a tomato salad and a mineral water, please." },
                  { speaker: "Camarero", text: "¿Algo más?", translation: "Anything else?" },
                  { speaker: "Cliente", text: "No, gracias. ¿Me puede traer la cuenta cuando termine?", translation: "No, thank you. Can you bring me the bill when I'm finished?" },
                  { speaker: "Camarero", text: "Por supuesto. Enseguida traigo su pedido.", translation: "Of course. I'll bring your order right away." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "i3",
        title: "Simple Conversations",
        description: "Practice having basic conversations in Spanish.",
        content: [
          {
            type: "introduction",
            text: "Being able to hold a conversation is a key part of language learning. In this lesson, we'll practice some simple conversations in Spanish."
          },
          {
            type: "examples",
            title: "At the Hotel",
            examples: [
              {
                title: "Checking In",
                dialogue: [
                  { speaker: "Recepcionista", text: "Buenas tardes. Bienvenido al Hotel Estrella. ¿En qué puedo ayudarle?", translation: "Good afternoon. Welcome to Hotel Estrella. How can I help you?" },
                  { speaker: "Cliente", text: "Tengo una reserva a nombre de García.", translation: "I have a reservation under the name García." },
                  { speaker: "Recepcionista", text: "Un momento, por favor... Sí, aquí está. Una habitación doble para tres noches.", translation: "One moment, please... Yes, here it is. A double room for three nights." },
                  { speaker: "Cliente", text: "Correcto. ¿Incluye desayuno?", translation: "Correct. Does it include breakfast?" },
                  { speaker: "Recepcionista", text: "Sí, el desayuno se sirve de 7 a 10 en el restaurante del hotel. Aquí tiene su llave. Habitación 304.", translation: "Yes, breakfast is served from 7 to 10 in the hotel restaurant. Here is your key. Room 304." }
                ]
              }
            ]
          },
          {
            type: "examples",
            title: "Asking for Directions",
            examples: [
              {
                title: "Finding a Museum",
                dialogue: [
                  { speaker: "Turista", text: "Disculpe, ¿sabe dónde está el Museo de Arte?", translation: "Excuse me, do you know where the Art Museum is?" },
                  { speaker: "Local", text: "Sí, está a dos cuadras de aquí. Siga derecho y luego gire a la izquierda en la segunda calle.", translation: "Yes, it's two blocks from here. Go straight and then turn left at the second street." },
                  { speaker: "Turista", text: "¿Está lejos?", translation: "Is it far?" },
                  { speaker: "Local", text: "No, está a unos diez minutos caminando.", translation: "No, it's about a ten-minute walk." },
                  { speaker: "Turista", text: "Muchas gracias por su ayuda.", translation: "Thank you very much for your help." },
                  { speaker: "Local", text: "De nada. Que tenga un buen día.", translation: "You're welcome. Have a nice day." }
                ]
              }
            ]
          },
          {
            type: "practice",
            instructions: "Role-play: Practice these conversations with a partner or by yourself, taking both roles.",
            exercises: [
              {
                prompt: "Create a simple conversation asking for the time.",
                example: "A: Disculpe, ¿qué hora es?\nB: Son las tres y media."
              },
              {
                prompt: "Practice ordering coffee at a café.",
                example: "A: Buenos días. ¿Qué desea?\nB: Un café con leche, por favor."
              }
            ]
          }
        ]
      }
    ],
    quizzes: [
      {
        id: "qi1",
        title: "Present Tense Quiz",
        description: "Test your knowledge of present tense conjugations.",
        questions: [
          {
            question: "What is the correct conjugation of 'hablar' (to speak) for 'yo' (I)?",
            options: ["hablo", "hablas", "habla", "hablamos"],
            correctAnswer: "hablo",
            explanation: "The correct conjugation of 'hablar' for 'yo' is 'hablo'."
          },
          {
            question: "How do you conjugate 'comer' (to eat) for 'ellos' (they)?",
            options: ["come", "comemos", "comes", "comen"],
            correctAnswer: "comen",
            explanation: "The correct conjugation of 'comer' for 'ellos' is 'comen'."
          },
          {
            question: "Which is the correct conjugation of 'vivir' (to live) for 'tú' (you informal)?",
            options: ["vives", "vive", "vivo", "vivimos"],
            correctAnswer: "vives",
            explanation: "The correct conjugation of 'vivir' for 'tú' is 'vives'."
          },
          {
            question: "What is the correct conjugation of 'trabajar' (to work) for 'nosotros' (we)?",
            options: ["trabajan", "trabaja", "trabajas", "trabajamos"],
            correctAnswer: "trabajamos",
            explanation: "The correct conjugation of 'trabajar' for 'nosotros' is 'trabajamos'."
          },
          {
            question: "How do you conjugate 'beber' (to drink) for 'ella' (she)?",
            options: ["bebe", "bebes", "bebemos", "bebo"],
            correctAnswer: "bebe",
            explanation: "The correct conjugation of 'beber' for 'ella' is 'bebe'."
          }
        ]
      },
      {
        id: "qi2",
        title: "Daily Vocabulary Quiz",
        description: "Test your knowledge of common Spanish vocabulary for everyday situations.",
        questions: [
          {
            question: "What is the Spanish word for 'breakfast'?",
            options: ["almuerzo", "cena", "desayuno", "comida"],
            correctAnswer: "desayuno",
            explanation: "Desayuno is the Spanish word for breakfast."
          },
          {
            question: "How do you say 'bill' (at a restaurant) in Spanish?",
            options: ["menú", "plato", "cuenta", "propina"],
            correctAnswer: "cuenta",
            explanation: "La cuenta is the Spanish word for the bill at a restaurant."
          },
          {
            question: "What does 'la tienda' mean in English?",
            options: ["time", "store", "money", "table"],
            correctAnswer: "store",
            explanation: "La tienda means store in English."
          },
          {
            question: "Which word means 'expensive' in Spanish?",
            options: ["barato", "caro", "grande", "pequeño"],
            correctAnswer: "caro",
            explanation: "Caro means expensive in Spanish."
          },
          {
            question: "What is the Spanish word for 'credit card'?",
            options: ["dinero efectivo", "monedas", "tarjeta de crédito", "billetera"],
            correctAnswer: "tarjeta de crédito",
            explanation: "Tarjeta de crédito is the Spanish term for credit card."
          }
        ]
      }
    ]
  }
};

export default spanishCurriculum;
