document.addEventListener('DOMContentLoaded', () => {
    const bands = [
        'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
        'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
        'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive',
        'Anywhere But Here', 'An Old Dog'
    ];

    // Function to clean band names for sorting
    function getSortKey(bandName) {
        // Convert to lowercase to ensure case-insensitive sorting
        const lowerCaseName = bandName.toLowerCase();
        // Remove 'a ', 'an ', 'the ' from the beginning
        // Use a regular expression with a word boundary (\b) to match whole words
        // and 'i' flag for case-insensitive matching.
        return lowerCaseName.replace(/^(a |an |the )\b/, '').trim();
    }

    // Sort the bands
    bands.sort((a, b) => {
        const sortKeyA = getSortKey(a);
        const sortKeyB = getSortKey(b);
        return sortKeyA.localeCompare(sortKeyB); // Use localeCompare for proper alphabetical sorting
    });

    const ulElement = document.getElementById('bands');

    // Populate the unordered list
    bands.forEach(band => {
        const li = document.createElement('li');
        li.textContent = band;
        ulElement.appendChild(li);
    });
});