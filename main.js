document.addEventListener('DOMContentLoaded', () => {
    const IPbtn = document.querySelector('#connectBtn');
    const IPInp = document.querySelector('#ip');
    const relayOnBtn = document.querySelector('#relayOnBtn');
    const relayOffBtn = document.querySelector('#relayOffBtn');
    const controls = document.querySelector('#controls');
    let ipAddress = "";

    IPbtn.addEventListener('click', () => {
        ipAddress = IPInp.value.trim();
        if (ipAddress) {
            controls.style.display = 'block';
        } else {
            alert('Please enter a valid IP address.');
            controls.style.display = 'none';
        }
    });

    relayOnBtn.addEventListener('click', () => {
        sendRequest(ipAddress, 'relayon');
    });

    relayOffBtn.addEventListener('click', () => {
        sendRequest(ipAddress, 'relayoff');
    });

    function sendRequest(ip, action) {
        fetch(`http://${ip}/${action}`)
            .then(response => {
                if (response.ok) {
                    console.log(`Relay ${action} command sent successfully.`);
                } else {
                    console.log(`Failed to send relay ${action} command.`);
                }
            })
            .catch(error => {
                console.error(`Error sending relay ${action} command:`, error);
            });
    }
});
