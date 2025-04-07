
  
        // Display form data from URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const formDataDisplay = document.getElementById('formDataDisplay');
        
        const fieldsToShow = [
            { name: 'firstName', label: 'First Name' },
            { name: 'lastName', label: 'Last Name' },
            { name: 'email', label: 'Email' },
            { name: 'phone', label: 'Phone' },
            { name: 'business', label: 'Business' },
            { name: 'timestamp', label: 'Application Date' }
        ];
        
        let html = '<dl>';
        fieldsToShow.forEach(field => {
            const value = urlParams.get(field.name);
            if (value) {
                let displayValue = value;
                if (field.name === 'timestamp') {
                    displayValue = new Date(value).toLocaleString();
                }
                html += `<dt>${field.label}:</dt><dd>${displayValue}</dd>`;
            }
        });
        html += '</dl>';
        
        formDataDisplay.innerHTML = html;
        
        // Current year and last modified
        document.getElementById('currentyear').textContent = new Date().getFullYear();
        document.getElementById('lastmodified').textContent = document.lastModified;
