function convertImageToBase64() {
    const file = document.getElementById('imageInput').files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('base64Output').value = e.target.result;
    };
    reader.readAsDataURL(file);
}

function convertBase64ToImage() {
    const base64String = document.getElementById('base64Input').value;
    const img = new Image();
    img.src = base64String;
    document.getElementById('imageOutput').innerHTML = ''; // 清空上次的输出
    document.getElementById('imageOutput').appendChild(img);
}

function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    // 这里可以实现多语言的处理逻辑
}
