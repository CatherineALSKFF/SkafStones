
// LOGO TITLE
const paragraph = document.getElementById('logo-title');
const originalContent = paragraph.textContent;
const originalColor = paragraph.style.color;
const originalFont = paragraph.style.fontFamily;

paragraph.addEventListener('mouseover', () => {
    setTimeout(() => {
        paragraph.textContent = 'سكاف ستونز';
        paragraph.style.color = '#FFD700';
        paragraph.style.fontFamily = 'Scheherazade New';
        paragraph.style.textShadow= '2px 2px 4px rgba(0, 0, 0, 0.5)';
    }, 500);
});

paragraph.addEventListener('mouseout', () => {
    setTimeout(() => {
        paragraph.textContent = originalContent;
        paragraph.style.color = originalColor;
        paragraph.style.fontFamily=originalFont;
    }, 500);
});





// THE ABOUTS

const abouts = document.querySelectorAll('.abouts');

abouts.forEach(abouts => {
  const originalContent = abouts.textContent;
  const originalColor = abouts.style.color;
  const originalFont = abouts.style.fontFamily;

  abouts.addEventListener('mouseover', () => {
    setTimeout(() => {
        abouts.textContent = 'معلومات';
        abouts.style.color = '#FFD700';
        abouts.style.fontFamily =  'Scheherazade New';
    }, 500);
  });

  abouts.addEventListener('mouseout', () => {
    setTimeout(() => {
        abouts.textContent = originalContent;
        abouts.style.color = originalColor;
        abouts.style.fontFamily=originalFont;
    }, 500);
  });
});


// THE PROJECTS

const projects = document.querySelectorAll('.projects');

projects.forEach(projects => {
  const originalContent = projects.textContent;
  const originalColor = projects.style.color;
  const originalFont = projects.style.fontFamily;

  projects.addEventListener('mouseover', () => {
    setTimeout(() => {
        projects.textContent = 'مشاريع';
        projects.style.color = '#FFD700';
        projects.style.fontFamily =  'Scheherazade New';
    }, 500);
  });

  projects.addEventListener('mouseout', () => {
    setTimeout(() => {
        projects.textContent = originalContent;
        projects.style.color = originalColor;
        projects.style.fontFamily=originalFont;
    }, 500);
  });
});




// THE CONTACTS

const contacts = document.querySelectorAll('.contacts');

contacts.forEach(contacts => {
  const originalContent = contacts.textContent;
  const originalColor = contacts.style.color;
  const originalFont = contacts.style.fontFamily;

  contacts.addEventListener('mouseover', () => {
    setTimeout(() => {
        contacts.textContent = 'تواصل';
        contacts.style.color = '#FFD700';
        contacts.style.fontFamily =  'Scheherazade New';
    }, 500);
  });

  contacts.addEventListener('mouseout', () => {
    setTimeout(() => {
        contacts.textContent = originalContent;
        contacts.style.color = originalColor;
        contacts.style.fontFamily=originalFont;
    }, 500);
  });
});

