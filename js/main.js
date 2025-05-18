document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    
    bookingForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = {
            name: this.name.value,
            phone: this.phone.value,
            request: this.request.value
        };
        
        try {
            const response = await fetch('https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTY4MDYzZTA0Mzc1MjZjNTUzYzUxMzYi_pc', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();
            
            if (result.status === 'success') {
                alert('Спасибо! Ваша заявка успешно отправлена.');
                bookingForm.reset();
            } else {
                alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.');
        }
    });
});

function openGallery() {
    const gallery = document.querySelector('.gallery');
    gallery.scrollIntoView({ behavior: 'smooth' });
} 