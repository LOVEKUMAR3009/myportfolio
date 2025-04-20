const sections = document.querySelectorAll('.section');
const controlButtons = document.querySelectorAll('.control');

function PageTransitionEvent() {
  controlButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
      const id = this.dataset.id;

      // If already active, don't do anything
      if (this.classList.contains('active-btn')) return;

      // Remove active-btn from all buttons
      controlButtons.forEach((b) => b.classList.remove('active-btn'));
      this.classList.add('active-btn');

      // Remove active from all sections
      sections.forEach((section) => section.classList.remove('active'));

      // Add active to the targeted section
      const targetSection = document.getElementById(id);
      if (targetSection) {
        targetSection.classList.add('active');
      }
    });
  });
}

PageTransitionEvent();
