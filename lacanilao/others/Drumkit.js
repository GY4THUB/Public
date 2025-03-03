function playSound(drum) {
            let audio = new Audio(`https://www.fesliyanstudios.com/play-mp3/${getSoundID(drum)}`);
            audio.play();
        }

        function getSoundID(drum) {
            const sounds = {
                "kick": "6995",
                "snare": "6997",
                "hihat": "6996",
                "tom1": "6998",
                "tom2": "7000",
                "tom3": "7001",
                "cymbal": "6999",
                "clap": "7002",
                "rim": "7003"
            };
            return sounds[drum] || "6995"; // Default to kick if not found
        }

        document.addEventListener("keydown", function(event) {
            let key = event.key;
            let drumButton = document.querySelector(`.drum[data-key="${key}"]`);
            if (drumButton) {
                drumButton.click(); // Simulate button click on key press
            }
        });