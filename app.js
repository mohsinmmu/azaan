// ...existing code...

async function fetchHadith() {
  const hadithContent = document.getElementById('hadith-content');
  hadithContent.innerHTML = 'Loading...';

  try {
    // Using Sutanlab Hadith API for Sahih Muslim, range 1-150
    const response = await fetch('https://api.hadith.sutanlab.id/books/muslim?range=1-150');
    const data = await response.json();

    if (!data.data || !data.data.hadiths || data.data.hadiths.length === 0) {
      hadithContent.innerHTML = 'No hadiths found.';
      return;
    }

    const hadiths = data.data.hadiths;
    const randomHadith = hadiths[Math.floor(Math.random() * hadiths.length)];

    hadithContent.innerHTML = `
      <div style="font-size:1.2em;margin-bottom:8px;"><strong>${randomHadith.arab}</strong></div>
      <div style="margin-bottom:6px;"><em>${randomHadith.id}</em></div>
      <div style="font-size:0.9em;color:gray;">Source: Sahih Muslim #${randomHadith.number}</div>
    `;
  } catch (error) {
    hadithContent.innerHTML = 'Failed to fetch hadith. Please try again later.';
  }
}

// ...existing code...