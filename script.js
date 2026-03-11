const input = document.getElementById('passwordInput');
const emoji = document.getElementById('emoji');
const roast = document.getElementById('roast');
const score = document.getElementById('score');
const strengthFill = document.getElementById('strengthFill');
const stats = document.getElementById('stats');

const roasts = {
    terrible: [
        "My grandma could hack this with her eyes closed 👵",
        "This password is weaker than my WiFi signal 📡",
        "Even a toddler could guess this 👶",
        "Congratulations! You just made every hacker's day 🎉",
        "This is basically an open invitation to get hacked 🚪"
    ],
    weak: [
        "I've seen stronger passwords on sticky notes 📝",
        "Your password is like a screen door on a submarine 🚪",
        "A dictionary attack would crack this in 0.5 seconds ⏱️",
        "This password screams 'please hack me' 📢",
        "My cat walked on my keyboard and made a better password 🐱"
    ],
    okay: [
        "Meh. It's like wearing a helmet made of cardboard 📦",
        "Better than nothing, but that's not saying much 🤷",
        "This might stop your little brother, maybe 👦",
        "It's like locking your door but leaving the window open 🪟",
        "You're trying, and that's... something, I guess 😐"
    ],
    good: [
        "Not bad! You're actually using your brain 🧠",
        "Now we're talking! This has some muscle 💪",
        "Solid choice! Hackers might actually sweat a little 😅",
        "Finally, someone who takes security seriously! 🎯",
        "This password could probably bench press 100 lbs 🏋️"
    ],
    strong: [
        "DAMN! This password is THICC 🔥",
        "Hackers are crying right now 😭",
        "This is password goals! Absolute unit! 💯",
        "You just made Fort Knox jealous 🏰",
        "This password could survive a nuclear war ☢️"
    ]
};

function checkPassword(pwd) {
    let strength = 0;
    
    if (pwd.length >= 8) strength += 20;
    if (pwd.length >= 12) strength += 20;
    if (/[a-z]/.test(pwd)) strength += 15;
    if (/[A-Z]/.test(pwd)) strength += 15;
    if (/[0-9]/.test(pwd)) strength += 15;
    if (/[^a-zA-Z0-9]/.test(pwd)) strength += 15;
    
    return strength;
}

input.addEventListener('input', () => {
    const pwd = input.value;
    
    if (!pwd) {
        emoji.textContent = '🤔';
        roast.textContent = 'Type something and watch me roast it...';
        score.textContent = '';
        strengthFill.style.width = '0';
        stats.textContent = '';
        document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        return;
    }
    
    const strength = checkPassword(pwd);
    let level, color, emojiIcon, roastMsg;
    
    if (strength < 30) {
        level = 'terrible';
        color = '#ff0000';
        emojiIcon = '💀';
        document.body.style.background = 'linear-gradient(135deg, #ff0000 0%, #8b0000 100%)';
    } else if (strength < 50) {
        level = 'weak';
        color = '#ff6b6b';
        emojiIcon = '😬';
        document.body.style.background = 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)';
    } else if (strength < 70) {
        level = 'okay';
        color = '#ffa500';
        emojiIcon = '😐';
        document.body.style.background = 'linear-gradient(135deg, #ffa500 0%, #ff8c00 100%)';
    } else if (strength < 90) {
        level = 'good';
        color = '#4CAF50';
        emojiIcon = '😊';
        document.body.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
    } else {
        level = 'strong';
        color = '#00ff00';
        emojiIcon = '🔥';
        document.body.style.background = 'linear-gradient(135deg, #00ff00 0%, #00cc00 100%)';
    }
    
    roastMsg = roasts[level][Math.floor(Math.random() * roasts[level].length)];
    
    emoji.textContent = emojiIcon;
    roast.textContent = roastMsg;
    score.textContent = `Strength: ${strength}/100`;
    strengthFill.style.width = strength + '%';
    strengthFill.style.background = color;
    
    const details = [];
    if (pwd.length < 8) details.push('❌ Too short');
    if (!/[a-z]/.test(pwd)) details.push('❌ No lowercase');
    if (!/[A-Z]/.test(pwd)) details.push('❌ No uppercase');
    if (!/[0-9]/.test(pwd)) details.push('❌ No numbers');
    if (!/[^a-zA-Z0-9]/.test(pwd)) details.push('❌ No special chars');
    
    if (details.length > 0) {
        stats.textContent = details.join(' • ');
    } else {
        stats.textContent = '✅ All requirements met!';
    }
});
