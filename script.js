document.addEventListener('DOMContentLoaded', function() {
    const fedRateElement = document.getElementById('fed-rate');
    const mortgageRateElement = document.getElementById('mortgage-rate');

    async function fetchRates() {
        try {
            const response = await fetch('https://api.example.com/fed-rate'); // Replace with actual API URL
            const data = await response.json();
            const fedRate = data.fedRate; // Adjust according to API response structure
            const mortgageRate = data.mortgageRate; // Adjust according to API response structure

            fedRateElement.textContent = `${fedRate}%`;
            mortgageRateElement.textContent = `${mortgageRate}%`;
        } catch (error) {
            console.error('Error fetching rates:', error);
            fedRateElement.textContent = 'Error loading data';
            mortgageRateElement.textContent = 'Error loading data';
        }
    }

    fetchRates();
});

