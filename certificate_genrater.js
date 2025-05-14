// Get references to HTML elements
const form = document.getElementById('certificateForm');
const nameInput = document.getElementById('name');
const canvas = document.getElementById('certificateCanvas');
const ctx = canvas.getContext('2d');

// Handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from reloading the page

    const name = nameInput.value.trim();  // Get name from input
    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    // Show canvas
    canvas.style.display = 'block';

    // Clear the canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set background color for the certificate
    ctx.fillStyle = '#f9f9f9';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add certificate title
    ctx.fillStyle = '#333';
    ctx.font = '36px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('E-Learning Course Completion Certificate', canvas.width / 2, 100);

    // Add name text
    ctx.font = '28px Arial';
    ctx.fillText(`This is to certify that`, canvas.width / 2, 200);
    ctx.font = '40px Arial';
    ctx.fillText(name, canvas.width / 2, 270);
    ctx.font = '28px Arial';
    ctx.fillText('has successfully completed the course.', canvas.width / 2, 330);

    // Optional: Draw a decorative line below the name
    ctx.beginPath();
    ctx.moveTo(100, 350);
    ctx.lineTo(canvas.width - 100, 350);
    ctx.strokeStyle = '#333';
    ctx.stroke();
});

 //Function to download the certificate as an image
 function downloadCertificate() {
     const dataUrl = canvas.toDataURL('image/png');
     const link = document.createElement('a');
     link.href = dataUrl;
     link.download = 'certificate.png';
     link.click();
 }


// You can add a button to download the certificate after it's generated
const downloadBtn = document.createElement('button');
downloadBtn.textContent = 'Download Certificate';
downloadBtn.style.marginTop = '20px';
document.querySelector('.container').appendChild(downloadBtn);

// Attach event listener for download
downloadBtn.addEventListener('click', downloadCertificate);





