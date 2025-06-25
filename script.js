document.addEventListener('DOMContentLoaded', () => {
    const bands = [
        'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
        'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
        'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive',
        'Anywhere But Here', 'An Old Dog'
    ];

    // Function to remove articles ("a", "an", "the") from the beginning of a string
    function stripArticle(bandName) {
        // Regex to match "a ", "an ", or "the " at the beginning of the string, case-insensitive
        return bandName.replace(/^(a |an |the )/i, '').trim();
    }

    // Sort the bands
    // The localeCompare method provides robust string comparison, especially for different languages.
    // By using a custom comparison function, we can sort based on the "stripped" names.
    const sortedBands = bands.sort((a, b) => {
        const strippedA = stripArticle(a);
        const strippedB = stripArticle(b);
        return strippedA.localeCompare(strippedB);
    });

    // Get the unordered list element
    const bandList = document.getElementById('band-list');

    // Populate the list
    sortedBands.forEach(band => {
        const listItem = document.createElement('li');
        listItem.textContent = band;
        bandList.appendChild(listItem);
    });
});