
        function copyEmail() {
            const email = "alsulmirawan08@gmail.com ";
            const tempInput = document.createElement("input");
            tempInput.value = email;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
            showToast("Email copied to clipboard!");
        }

        
        function showToast(message) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-message').innerText = message;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }
