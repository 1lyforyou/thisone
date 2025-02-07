// Data for each day
const dayData = {
    7: {
        message: "Happy Rose Day",
        gif: "https://static.toiimg.com/thumb/imgsize-23456,msid-67868345,width-600,resizemode-4/67868345.jpg",
        line: "A rose for the most special person in my life. 🌹"
    },
    8: {
        message: "Happy Propose Day",
        gif: "https://st1.latestly.com/wp-content/uploads/2022/02/Happy-Propose-Day-gif_1.gif",
        line: "Will you be mine forever? 💍"
    },
    9: {
        message: "Happy Chocolate Day",
        gif: "https://i.pinimg.com/originals/49/05/81/490581327ce84d5e677bf4dac6234002.gif",
        line: "Sweet like you, my love. 🍫"
    },
    10: {
        message: "Happy Teddy Day",
        gif: "https://static.india.com/wp-content/uploads/2016/02/teddy-day1.gif",
        line: "A cuddly teddy for my cuddly partner. 🧸"
    },
    11: {
        message: "Happy Promise Day",
        gif: "https://media.tenor.com/WT4J27Vw0GgAAAAM/promise-sumitjaat.gif",
        line: "I promise to always be by your side. 🤝"
    },
    12: {
        message: "Happy Hug Day",
        gif: "https://i.123g.us/c/efeb_hugdayfeb/card/337437.gif",
        line: "A warm hug for my love. 🤗"
    },
    13: {
        message: "Happy Kiss Day",
        gif: "https://i.pinimg.com/originals/b2/80/af/b280afed594fe394122b2ead6b5f5df8.gif",
        line: "Sending you a thousand kisses. 💋"
    },
    14: {
        message: "Happy Valentine's Day",
        gif: "https://i.pinimg.com/originals/1d/de/6f/1dde6fbfe54010cdc054ec47998311ae.gif",
        line: "You are my forever Valentine. ❤️"
    },
    15: {
        message: "Happy Slap Day",
        gif: "https://media.tenor.com/wDu33wHVM_wAAAAM/blu-zushi-black-and-white.gif",
        line: "Just a playful slap! 😜"
    },
    16: {
        message: "Happy Kick Day",
        gif: "https://media.tenor.com/5iVv64OjO28AAAAM/milk-and-mocha-bear-couple.gif",
        line: "Kicking away all the negativity! 🦵"
    },
    17: {
        message: "Happy Perfume Day",
        gif: "https://st1.latestly.com/wp-content/uploads/2024/02/Happy-Perfume-Day-380x214.jpg",
        line: "A fragrance as sweet as you. 🌸"
    },
    18: {
        message: "Happy Flirt Day",
        gif: "https://i.pinimg.com/originals/f7/e3/f9/f7e3f9af60e53ca1976f35c18777182b.gif",
        line: "Flirting with you is my favorite hobby. 😘"
    },
    19: {
        message: "Happy Confession Day",
        gif: "https://st1.latestly.com/wp-content/uploads/2024/02/Confession-Day.jpg",
        line: "I confess, I’m crazy about you. 💌"
    },
    20: {
        message: "Happy Missing Day",
        gif: "https://www.hindustantimes.com/ht-img/img/2023/02/19/1600x900/Lead_1676777809256_1676777830869_1676777830869.jpg",
        line: "I miss you more than words can say. 💔"
    },
    21: {
        message: "Happy Broken Day",
        gif: "https://st1.latestly.com/wp-content/uploads/2023/02/15-Happy-Breakup-Day-380x214.jpg",
        line: "Even broken, my heart beats for you. 💔"
    }
};

// Get elements
const messageElement = document.querySelector('.message');
const gifElement = document.querySelector('.gif');
const lineElement = document.querySelector('.line');

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
            messageElement.textContent = data.message;
            gifElement.src = data.gif;
            lineElement.textContent = data.line;
        } else {
            // Show "Not Today" alert
            alert("Not Today");
        }
    });
});