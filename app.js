window.onload = () => {
    function buildclock() {
        const date = new Date();

        let hours = date.getHours(); //0 - 23
        let minutes = date.getMinutes(); //0 - 59
        let second = date.getSeconds(); //0 - 59

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        second = second < 10 ? '0' + second : second;

        document.querySelector('#clock-hours').innerText = hours;
        document.querySelector('#clock-minutes').innerText = minutes;
        document.querySelector('#clock-seconds').innerText = second;

        setTimeout(buildclock, 100);
    }
    buildclock();
}

