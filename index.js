function shout(string) {
    console.log(string.toUpperCase())
    return string.toUpperCase();
}

function whisper(string) {
    console.log(string.toLowerCase())
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    switch (string) {
        case (string.toLowerCase()):
            if (string === "hello") {
                console.log("I can't hear you!");
            }
            else (string.toLowerCase()); {
                return "I can't hear you!";
            }
            break;
        case (string.toUpperCase()):
            if (string === "HELLO!") {
                console.log("YES INDEED");
            }
            else (string.toUpperCase()); {
                return "YES INDEED!";
            }
            break;
        case ("Let's have dinner together!"):
            if (string === "Let's have dinner together!") {
                console.log("I would love to!");
            }
            else; {
                return "I would love to!";
            }
            break;
    }
}

shout("Hello!");
whisper("Hello");
logShout("Hello!");
logWhisper("Hello");
sayHiToHeadphonedRoommate("hello");
sayHiToHeadphonedRoommate("HELLO!");
sayHiToHeadphonedRoommate("Let's have dinner together!");
