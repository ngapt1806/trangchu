// Hàm xử lý khi nhấn vào nút Đăng Nhập
function handleLogin() {
    // Lấy giá trị từ các input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Kiểm tra thông tin nhập vào (giả lập kiểm tra đơn giản)
    if (email === "" || password === "") {
        alert("Vui lòng nhập đầy đủ email và mật khẩu!");
        return;
    }

    // Giả lập đăng nhập thành công
    alert("Đăng nhập thành công!");
    
    // Chuyển hướng đến trang chủ
    window.location.href = "index.html";
}
