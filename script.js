    // JavaScript code for countdown timer
    function countdown() {
        const eventDate = new Date("2024-06-16 00:00:00").getTime(); // Change to your event date and time
        const now = new Date().getTime();
        const distance = eventDate - now;
  
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
      }
  
      
      countdown();
  
      setInterval(countdown, 1000);