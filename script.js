const togglebtn=document.getElementById("toggle-btn");
        const navlink=document.getElementById("nav-links");
        togglebtn.addEventListener('click',()=>{
            navlink.classList.toggle('active');
        })