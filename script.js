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
        document.getElementById('imageOutput').innerHTML = ''; // 清空上次的输出
        document.getElementById('imageOutput').appendChild(img);
    } else {
        alert("请先输入Base64字符串！");
    }
}

function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    // 这里可以实现多语言的处理逻辑
}
