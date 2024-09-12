document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById("toggle-skills") as HTMLButtonElement;
    const skillsSection = document.getElementById("skills") as HTMLElement;

    // Debugging step
    console.log(toggleButton); // Should log the button element
    console.log(skillsSection); // Should log the skills section element

    if (toggleButton && skillsSection) {
        toggleButton.addEventListener('click', () => {
            if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
                skillsSection.style.display = 'block';
                toggleButton.value = 'Hide Skills';
            } else {
                skillsSection.style.display = 'none';
                toggleButton.value = 'Show Skills';
            }
        });
    } else {
        console.error('Button or skills section not found.');
    }
});
