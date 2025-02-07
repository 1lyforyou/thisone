// Data for each day
const dayData = {
    7: {
        date: "<button class='date-btn'>Feb 07</button>",
        message: "Happy Rose Day Maya!",
        gif: "https://static.toiimg.com/thumb/imgsize-23456,msid-67868345,width-600,resizemode-4/67868345.jpg",
        line: "A rose for the most special person in my life. 🌹",
        bestLine: "Just like this rose, your love fills my life with fragrance and beauty.",
        bestNepaliLine: "यो गुलाब जस्तै, तिम्रो माया मेरो जीवन सुगन्ध र सौन्दर्यले भरिन्छ। ❤️"
    },
    8: {
        date: "<button class='date-btn'>Feb 08</button>",
        message: "Happy Propose Day Maya!",
        gif: "https://st1.latestly.com/wp-content/uploads/2022/02/Happy-Propose-Day-gif_1.gif",
        line: "Will you be mine forever? 💍",
        bestLine: "With you, every moment is magical. Be mine forever!",
        bestNepaliLine: "तिमी बिना मेरो जीवन अधुरो छ, के तिमी मेरो सधैंको साथ हुनेछौ? 💕"
    },
    9: {
        date: "<button class='date-btn'>Feb 09</button>",
        message: "Happy Chocolate Day Maya!",
        gif: "https://i.pinimg.com/originals/49/05/81/490581327ce84d5e677bf4dac6234002.gif",
        line: "Sweet like you, my love. 🍫",
        bestLine: "You are the sweetest part of my life, just like chocolate!",
        bestNepaliLine: "तिमी चकलेट जस्तै मिठो छौ, मेरो जीवनको सबैभन्दा प्यारो हिस्सा। 🍫❤️"
    },
    10: {
        date: "<button class='date-btn'>Feb 10</button>",
        message: "Happy Teddy Day Maya!",
        gif: "https://static.india.com/wp-content/uploads/2016/02/teddy-day1.gif",
        line: "A cuddly teddy for my cuddly partner. 🧸",
        bestLine: "I wish I could hug you as tightly as this teddy bear every single day!",
        bestNepaliLine: "यदि सम्भव छ भने, हरेक दिन म यो टेडी बियर जस्तै तिमीलाई कसिलो अँगालो मार्न चाहन्छु। 🤗"
    },
    11: {
        date: "<button class='date-btn'>Feb 11</button>",
        message: "Happy Promise Day Maya!",
        gif: "https://media.tenor.com/WT4J27Vw0GgAAAAM/promise-sumitjaat.gif",
        line: "I promise to always be by your side. 🤝",
        bestLine: "No matter what happens, I promise to love and cherish you forever.",
        bestNepaliLine: "जुनसुकै परिस्थिति आए पनि, म तिमीलाई सधैं प्रेम गर्ने वाचा गर्छु। ❤️"
    },
    12: {
        date: "<button class='date-btn'>Feb 12</button>",
        message: "Happy Hug Day Maya!",
        gif: "https://i.123g.us/c/efeb_hugdayfeb/card/337437.gif",
        line: "A warm hug for my love. 🤗",
        bestLine: "A hug speaks a thousand words, and mine says 'I’ll always be here for you.'",
        bestNepaliLine: "मेरो यो अँगालो भित्र सधैं सुरक्षित रहनु। 🤗💕"
    },
    13: {
        date: "<button class='date-btn'>Feb 13</button>",
        message: "Happy Kiss Day Maya!",
        gif: "https://i.pinimg.com/originals/b2/80/af/b280afed594fe394122b2ead6b5f5df8.gif",
        line: "Sending you a thousand kisses. 💋",
        bestLine: "A kiss is a silent way of saying ‘You mean the world to me.’",
        bestNepaliLine: "तिम्रो एक चुम्बन मेरो लागि हजार शब्द भन्दा गहिरो अर्थ राख्छ। 💋❤️"
    },
    14: {
        date: "<button class='date-btn'>Feb 14</button>", 
        message: "Happy Valentine's Day Maya!",
        gif: "https://i.pinimg.com/originals/1d/de/6f/1dde6fbfe54010cdc054ec47998311ae.gif",
        line: "You are my forever Valentine. ❤️",
        bestLine: "Loving you is the best decision I have ever made in my life!",
        bestNepaliLine: "तिमी मेरो जीवनको सबैभन्दा सुन्दर निर्णय हौ, मेरो सधैंको भ्यालेन्टाइन! ❤️"
    },
    15: {
        date: "<button class='date-btn'>Feb 15</button>",
        message: "Happy Slap Day Maya!",
        gif: "https://media.tenor.com/wDu33wHVM_wAAAAM/blu-zushi-black-and-white.gif",
        line: "Just a playful slap! 😜",
        bestLine: "Only love can hurt like this – just kidding! Love you always!",
        bestNepaliLine: "मजाकमा एउटा प्यारो थप्पड! 😜 तर मन सधैं तिमीलाई प्रेम गर्छ। ❤️"
    },
    16: {
        date: "<button class='date-btn'>Feb 16</button>", 
        message: "Happy Kick Day Maya!",
        gif: "https://media.tenor.com/5iVv64OjO28AAAAM/milk-and-mocha-bear-couple.gif",
        line: "Kicking away all the negativity! 🦵",
        bestLine: "A playful kick today to remind you to never stop loving me! 😜",
        bestNepaliLine: "माया कहिल्यै कम नहोस् भनेर एक प्यारा लात! 🦵😜"
    },
    17: {
        date: "<button class='date-btn'>Feb 17</button>",
        message: "Happy Perfume Day Maya!",
        gif: "https://st1.latestly.com/wp-content/uploads/2024/02/Happy-Perfume-Day-380x214.jpg",
        line: "A fragrance as sweet as you. 🌸",
        bestLine: "Your love is the only fragrance I need to brighten my life.",
        bestNepaliLine: "तिम्रो माया मेरो लागि सबैभन्दा मीठो सुगन्ध हो। 🌸❤️"
    },
    18: {
        date: "<button class='date-btn'>Feb 18</button>",
        message: "Happy Flirt Day Maya!",
        gif: "https://i.pinimg.com/originals/f7/e3/f9/f7e3f9af60e53ca1976f35c18777182b.gif",
        line: "Flirting with you is my favorite hobby. 😘",
        bestLine: "Every time I see you, my heart whispers, ‘Go flirt with your soulmate.’",
        bestNepaliLine: "तिमीलाई जिस्क्याउनु मेरो मनपर्ने बानी हो, किनकि तिमी मेरो आत्मा साथी हौ। 😉💕"
    },
    19: {
        date: "<button class='date-btn'>Feb 19</button>", 
        message: "Happy Confession Day Maya!",
        gif: "https://st1.latestly.com/wp-content/uploads/2024/02/Confession-Day.jpg",
        line: "I confess, I’m crazy about you. 💌",
        bestLine: "The biggest truth of my life: I love you more than words can say.",
        bestNepaliLine: "सबैभन्दा ठूलो सत्य के हो भने, म तिमीलाई शब्दले भन्दा बढी माया गर्छु। 💖"
    },
    20: {
        date: "<button class='date-btn'>Feb 20</button>", 
        message: "Happy Missing Day Maya!",
        gif: "https://www.hindustantimes.com/ht-img/img/2023/02/19/1600x900/Lead_1676777809256_1676777830869_1676777830869.jpg",
        line: "I miss you more than words can say. 💔",
        bestLine: "No matter how far you are, my heart always finds you.",
        bestNepaliLine: "तिमी जहाँ भए पनि, मेरो मुटु सधैं तिमीलाई खोज्छ। 💔"
    },
    21: {
        date: "<button class='date-btn'>Feb 21</button>",
        message: "Happy Broken Day Maya!",
        gif: "https://st1.latestly.com/wp-content/uploads/2023/02/15-Happy-Breakup-Day-380x214.jpg",
        line: "Even broken, my heart beats for you. 💔",
        bestLine: "Even when shattered, my heart whispers only your name.",
        bestNepaliLine: "मुटु टुक्रिएको भए पनि, यसले सधैं तिम्रो नाम मात्र लिन्छ। 💔"
    }
};


// Get elements
const dateElement = document.querySelector('.date');
const messageElement = document.querySelector('.message');
const gifElement = document.querySelector('.gif');
const lineElement = document.querySelector('.line');
const bestLineElement = document.querySelector('.bestLine'); // Corrected variable name
const bestNepaliLineElement = document.querySelector('.bestNepaliLine'); // Corrected variable name

// Get today's date
const today = new Date();
const todayDate = today.getDate(); // Get the day of the month (e.g., 7 for Feb 7)

// Add event listeners to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const day = parseInt(button.getAttribute('data-day')); // Get the day from the button

        // Check if the clicked day is today
        if (day === todayDate) {
            const data = dayData[day];

            // Update display area
            dateElement.textContent = data.date;
            messageElement.textContent = data.message;
            gifElement.src = data.gif;
            lineElement.textContent = data.line;
            bestLineElement.textContent = data.bestLine; // Update bestLine
            bestNepaliLineElement.textContent = data.bestNepaliLine; // Update bestNepaliLine
        } else {
            // Show "Not Today" alert
            alert("Sorry Maya,This is not today");
        }
    });
});
