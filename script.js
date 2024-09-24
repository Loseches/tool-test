function convertImageToBase64() {
    const file = document.getElementById('imageInput').files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('base64Output').value = e.target.result;
    };
    if (file) {
        reader.readAsDataURL(file);
    } else {
        alert("请先选择一张图片！");
    }
}

function convertBase64ToImage() {
    const base64String = document.getElementById('base64Input').value.trim();
    if (base64String) {
        const img = new Image();
        img.src = base64String;
        
        // 检查 Base64 字符串的格式
        if (!base64String.startsWith('data:image/')) {
            alert("请确保输入的Base64字符串是有效的图片格式！");
            return;
        }
        
        // 清空上次的输出
        const imageOutputDiv = document.getElementById('imageOutput');
        imageOutputDiv.innerHTML = ''; 
        imageOutputDiv.appendChild(img);
        
        // 确保图片加载完成后再显示
        img.onload = function() {
            imageOutputDiv.style.display = 'block'; // 显示图片输出
        };
        
        img.onerror = function() {
            alert("图片无法显示，请检查Base64字符串格式！");
        };
    } else {
        alert("请先输入Base64字符串！");
    }
}

function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    // 这里可以实现多语言的处理逻辑
}
