const formatSelector = document.getElementById('format');
const themeSelector = document.getElementById('theme');
const clockElement = document.getElementById('time');

function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const timeFormat = formatSelector.value === '24' ? '24' : (hours >= 12 ? 'PM' : 'AM');
    const formattedHours = formatSelector.value === '24' ? hours : hours % 12 || 12;

    const timeString = `${formattedHours}:${padNumber(minutes)}:${padNumber(seconds)} ${timeFormat}`;

    clockElement.textContent = timeString;
}

function padNumber(number) {
    return (number < 10 ? '0' : '') + number;
}

formatSelector.addEventListener('change', updateTime);
themeSelector.addEventListener('change', applyTheme);
updateTime();

function applyTheme() {
    const selectedTheme = themeSelector.value;
    document.body.className = selectedTheme;
}

setInterval(updateTime, 1000);

