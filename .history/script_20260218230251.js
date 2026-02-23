const roles = [
    "Cloud Developer",
    "AWS Enthusiast",
    "Software Engineer",
    "DevOps Learner"
    ];
    
    let index = 0;
    let charIndex = 0;
    let current = "";
    let isDeleting = false;
    
    function type(){
    
    const element = document.getElementById("typing");
    
    if(index >= roles.length) index = 0;
    
    current = roles[index];
    
    if(!isDeleting){
    element.textContent = current.substring(0,charIndex++);
    if(charIndex > current.length){
    isDeleting = true;
    setTimeout(type,1000);
    return;
    }
    }
    else{
    element.textContent = current.substring(0,charIndex--);
    if(charIndex === 0){
    isDeleting = false;
    index++;
    }
    }
    
    setTimeout(type,60);
    }
    
    type();
    function openModal(src){
        document.getElementById("certModal").style.display = "flex";
        document.getElementById("modalImage").src = src;
    }
    
    function closeModal(){
        document.getElementById("certModal").style.display = "none";
    }
    
    