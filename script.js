const bands = [
      'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean',
      'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans',
      'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
    ];

    function stripArticle(bandName) {
      return bandName.replace(/^(a |an |the )/i, '').trim();
    }

    const sortedBands = bands.sort((a, b) => {
      const nameA = stripArticle(a).toLowerCase();
      const nameB = stripArticle(b).toLowerCase();
      return nameA.localeCompare(nameB);
    });

    const bandList = document.getElementById('band');
    bandList.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
