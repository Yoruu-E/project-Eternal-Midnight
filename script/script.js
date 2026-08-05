window.addEventListener('DOMContentLoaded' , () => {
	const head3s = document.querySelectorAll('.heading3');

	head3s.forEach(heading => {
		heading.addEventListener('click', function() {

			const nextquestion = this.nextElementSibling;
			if (!nextquestion) return;
			const questionactiv = nextquestion.style.display === 'block';

			head3s.forEach(showstuff => {
				if (showstuff.nextElementSibling) {
					showstuff.nextElementSibling.style.display = 'none';
				}
			});
			
			if (!questionactiv) {
				nextquestion.style.display = 'block';
			}
		});
	});
});