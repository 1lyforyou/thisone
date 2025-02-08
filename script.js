// Data for each day
const dayData = {
    7: {
        todayDate: "Feb 07",
        message: "Happy Rose Day Maya!",
        gif: "https://static.toiimg.com/thumb/imgsize-23456,msid-67868345,width-600,resizemode-4/67868345.jpg",
        line: "A rose for the most special person in my life. 🌹",
        bestLine: "Just like this rose, your love fills my life with fragrance and beauty.",
        bestNepaliLine: "यो गुलाब जस्तै, तिम्रो माया मेरो जीवन सुगन्ध र सौन्दर्यले भरिन्छ। ❤️"
    },
    8: {
        todayDate: "Feb 08",
        message: "Happy Propose Day Maya!",
        gif: "https://st1.latestly.com/wp-content/uploads/2022/02/Happy-Propose-Day-gif_1.gif",
        line: "Will you be mine forever? 💍",
        bestLine: "With you, every moment is magical. Be mine forever!",
        bestNepaliLine: "I am incomplete without you; your name is written in every beat of my heart. You are the most beautiful dream of my life, one that I wish to turn into reality. You are the reason behind my smile and the inspiration of my life. I want to complete the journey of life holding your hand forever. Will you accept my love and become an inseparable part of my life? म तिमी बिना अधुरो छु, मेरो प्रत्येक धडकनमा तिम्रो नाम लेखिएको छ। तिमी मेरो संसारको सबैभन्दा सुन्दर सपना हौं, जसलाई म साकार गर्न चाहन्छु। तिमी मेरो हासोको कारण हौं, मेरो जीवनको प्रेरणा हौं। जिन्दगीभरको यात्रा तिम्रो हात समातेर पूरा गर्न चाहन्छु। के तिमी मेरो माया स्वीकार गरेर मेरो जीवनको अटुट हिस्सा बन्नेछौ? 💕"
    },
    9: {
        todayDate: "Feb 09",
        message: "Happy Chocolate Day Maya!",
        gif: "https://i.pinimg.com/originals/49/05/81/490581327ce84d5e677bf4dac6234002.gif",
        line: "Sweet like you, my love. 🍫",
        bestLine: "You are the sweetest part of my life, just like chocolate!",
        bestNepaliLine: "Love is not just in words but felt in emotions. Just like chocolate, our love is sweet, deep, and endlessly delightful. You are the chocolate of my life, making each day special. I wish our love never fades and always remains full of sweetness. On this Chocolate Day, I dedicate all my love to you. Keep smiling always, and always stay with me. माया केवल शब्दमा होइन, भावनामा अनुभूत गर्ने चीज हो। चकलेट जस्तै हाम्रो प्रेम पनि मिठो, गहिरो र कहिल्यै नसकिने मिठासले भरिएको छ। तिमी मेरो जीवनको त्यो चकलेट हौ, जसले मेरो हरेक दिनलाई विशेष बनाउँछ। म चाहन्छु हाम्रो माया कहिल्यै नओइलाओस्, सधैं मिठासले भरिएको रहोस्। चकलेट डे को यो अवसरमा, मेरो सम्पूर्ण माया तिमीलाई समर्पित छ। सधैं मुस्कुराइरहनू, सधैं साथ दिनू। 🍫❤️"
    },
    10: {
        todayDate: "Feb 10",
        message: "Happy Teddy Day Maya!",
        gif: "https://static.india.com/wp-content/uploads/2016/02/teddy-day1.gif",
        line: "A cuddly teddy for my cuddly partner. 🧸",
        bestLine: "I wish I could hug you as tightly as this teddy bear every single day!",
        bestNepaliLine: "यदि सम्भव छ भने, हरेक दिन म यो टेडी बियर जस्तै तिमीलाई कसिलो अँगालो मार्न चाहन्छु। 🤗"
    },
    11: {
        todayDate: "Feb 11",
        message: "Happy Promise Day Maya!",
        gif: "https://media.tenor.com/WT4J27Vw0GgAAAAM/promise-sumitjaat.gif",
        line: "I promise to always be by your side. 🤝",
        bestLine: "No matter what happens, I promise to love and cherish you forever.",
        bestNepaliLine: "जुनसुकै परिस्थिति आए पनि, म तिमीलाई सधैं प्रेम गर्ने वाचा गर्छु। ❤️"
    },
    12: {
        todayDate: "Feb 12",
        message: "Happy Hug Day Maya!",
        gif: "https://i.123g.us/c/efeb_hugdayfeb/card/337437.gif",
        line: "A warm hug for my love. 🤗",
        bestLine: "A hug speaks a thousand words, and mine says 'I’ll always be here for you.'",
        bestNepaliLine: "मेरो यो अँगालो भित्र सधैं सुरक्षित रहनु। 🤗💕"
    },
    13:{
        todayDate: "Feb 13",
        message: "Happy Kiss Day Maya!",
        gif: "https://i.pinimg.com/originals/b2/80/af/b280afed594fe394122b2ead6b5f5df8.gif",
        line: "Sending you a thousand kisses. 💋",
        bestLine: "A kiss is a silent way of saying ‘You mean the world to me.’",
        bestNepaliLine: "तिम्रो एक चुम्बन मेरो लागि हजार शब्द भन्दा गहिरो अर्थ राख्छ। 💋❤️"
    },
    14: {
        todayDate: "Feb 14",
        message: "Happy Valentine's Day Maya!",
        gif: "https://i.pinimg.com/originals/1d/de/6f/1dde6fbfe54010cdc054ec47998311ae.gif",
        line: "You are my forever Valentine. ❤️",
        bestLine: "Loving you is the best decision I have ever made in my life!",
        bestNepaliLine: "तिमी मेरो जीवनको सबैभन्दा सुन्दर निर्णय हौ, मेरो सधैंको भ्यालेन्टाइन! ❤️"
    },
    15: {
        todayDate: "Feb 15",
        message: "Happy Slap Day Maya!",
        gif: "https://media.tenor.com/wDu33wHVM_wAAAAM/blu-zushi-black-and-white.gif",
        line: "Just a playful slap! 😜",
        bestLine: "Only love can hurt like this – just kidding! Love you always!",
        bestNepaliLine: "मजाकमा एउटा प्यारो थप्पड! 😜 तर मन सधैं तिमीलाई प्रेम गर्छ। ❤️"
    },
    16: {
        todayDate: "Feb 16",
        message: "Happy Kick Day Maya!",
        gif: "https://media.tenor.com/5iVv64OjO28AAAAM/milk-and-mocha-bear-couple.gif",
        line: "Kicking away all the negativity! 🦵",
        bestLine: "A playful kick today to remind you to never stop loving me! 😜",
        bestNepaliLine: "माया कहिल्यै कम नहोस् भनेर एक प्यारा लात! 🦵😜"
    },
    17: {
        todayDate: "Feb 17",
        message: "Happy Perfume Day Maya!",
        gif: "https://st1.latestly.com/wp-content/uploads/2024/02/Happy-Perfume-Day-380x214.jpg",
        line: "A fragrance as sweet as you. 🌸",
        bestLine: "Your love is the only fragrance I need to brighten my life.",
        bestNepaliLine: "तिम्रो माया मेरो लागि सबैभन्दा मीठो सुगन्ध हो। 🌸❤️"
    },
    18: {
        todayDate: "Feb 18",
        message: "Happy Flirt Day Maya!",
        gif: "https://i.pinimg.com/originals/f7/e3/f9/f7e3f9af60e53ca1976f35c18777182b.gif",
        line: "Flirting with you is my favorite hobby. 😘",
        bestLine: "Every time I see you, my heart whispers, ‘Go flirt with your soulmate.’",
        bestNepaliLine: "तिमीलाई जिस्क्याउनु मेरो मनपर्ने बानी हो, किनकि तिमी मेरो आत्मा साथी हौ। 😉💕"
    },
    19: {
        todayDate: "Feb 19",
        message: "Happy Confession Day Maya!",
        gif: "https://st1.latestly.com/wp-content/uploads/2024/02/Confession-Day.jpg",
        line: "I confess, I’m crazy about you. 💌",
        bestLine: "The biggest truth of my life: I love you more than words can say.",
        bestNepaliLine: "सबैभन्दा ठूलो सत्य के हो भने, म तिमीलाई शब्दले भन्दा बढी माया गर्छु। 💖"
    },
    20: {
        todayDate: "Feb 20",
        message: "Happy Missing Day Maya!",
        gif: "https://www.hindustantimes.com/ht-img/img/2023/02/19/1600x900/Lead_1676777809256_1676777830869_1676777830869.jpg",
        line: "I miss you more than words can say. 💔",
        bestLine: "No matter how far you are, my heart always finds you.",
        bestNepaliLine: "तिमी जहाँ भए पनि, मेरो मुटु सधैं तिमीलाई खोज्छ। 💔"
    },
    21: {
        todayDate: "Feb 20",
        message: "Happy Broken Day Maya!",
        gif: "https://st1.latestly.com/wp-content/uploads/2023/02/15-Happy-Breakup-Day-380x214.jpg",
        line: "Even broken, my heart beats for you. 💔",
        bestLine: "Even when shattered, my heart whispers only your name.",
        bestNepaliLine: "मुटु टुक्रिएको भए पनि, यसले सधैं तिम्रो नाम मात्र लिन्छ। 💔"
    }
};


// Get elements
const todayDateElement = document.querySelector('.todayDate');
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
            todayDateElement.textContent = data.todayDate;
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
