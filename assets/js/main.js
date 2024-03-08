// Xử lý chuyển ảnh phần Header
var currentIndex = 0;
var images = [
    "./assets/images/background1.png",
    "./assets/images/background2.png"
    // Thêm các đường dẫn của ảnh khác nếu cần
];

var btnNext = document.getElementById("btnNext");
var btnPrevious = document.getElementById("btnPrevious");
var backgroundImage = document.getElementById("backgroundImage");

// Xử lý khi nhấn nút "Next"
btnNext.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0; // Quay lại ảnh đầu tiên nếu đã đến ảnh cuối cùng
    }
    changeBackgroundImage();
});

// Xử lý khi nhấn nút "Previous"
btnPrevious.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Quay lại ảnh cuối cùng nếu đã đến ảnh đầu tiên
    }
    changeBackgroundImage();
});

// Hàm thay đổi ảnh nền
function changeBackgroundImage() {
    backgroundImage.src = images[currentIndex];
}

// Xử lý chuyển ảnh phần Tips&Tricks
document.addEventListener("DOMContentLoaded", function () {
    // Lấy các phần tử cần thiết
    var previousBtn = document.getElementById("previousBtn");
    var nextBtn = document.getElementById("nextBtn");
    var articlesItems = document.querySelectorAll(".tipstricks__articles-item");
    var indicatorDots = document.querySelectorAll(".tipstricks__indicator-dot");

    // Khai báo biến để lưu index của hình ảnh đang hiển thị
    var currentIndex = 0;
    var totalImages = articlesItems.length;

    // Xử lý sự kiện khi bấm nút previous
    previousBtn.addEventListener("click", function () {
        // Giảm index của hình ảnh
        currentIndex--;
        // Nếu index âm, quay lại hình ảnh cuối cùng
        if (currentIndex < 0) {
            currentIndex = totalImages - 1;
        }
        // Hiển thị hình ảnh tương ứng
        updateImageVisibility();
        // Đổi màu dot tương ứng
        updateIndicator(currentIndex);
    });

    // Xử lý sự kiện khi bấm nút next
    nextBtn.addEventListener("click", function () {
        // Tăng index của hình ảnh
        currentIndex++;
        // Nếu index vượt quá số lượng hình ảnh, quay lại hình ảnh đầu tiên
        if (currentIndex >= totalImages) {
            currentIndex = 0;
        }
        // Hiển thị hình ảnh tương ứng
        updateImageVisibility();
        // Đổi màu dot tương ứng
        updateIndicator(currentIndex);
    });

    // Hàm cập nhật hiển thị của hình ảnh
    function updateImageVisibility() {
        // Lặp qua mỗi hình ảnh và hiển thị nếu index của nó hoặc index kế tiếp hoặc index trước đó
        articlesItems.forEach(function (item, index) {
            if (index === currentIndex || index === (currentIndex + 1) % totalImages || index === (currentIndex + totalImages - 1) % totalImages) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }

    // Xử lý sự kiện khi nhấn vào dot
    indicatorDots.forEach(function (dot, index) {
        dot.addEventListener("click", function () {
            // Hiển thị hình ảnh tương ứng
            currentIndex = index;
            updateImageVisibility();
            // Đổi màu dot tương ứng
            updateIndicator(currentIndex);
        });
    });

    // Hàm cập nhật màu sắc và đường tròn bao quanh dot
    function updateIndicator(index) {
        // Đặt màu sắc của tất cả các dot thành màu mặc định
        indicatorDots.forEach(function (dot) {
            dot.style.backgroundColor = "rgba(216, 216, 216, 1)";
            dot.classList.remove("active"); // Xóa lớp active khỏi tất cả các dot
        });
        // Đặt màu sắc của dot tương ứng với index thành màu khác
        indicatorDots[index].style.backgroundColor = "rgba(232, 159, 113, 1)";
        indicatorDots[index].classList.add("active"); // Thêm lớp active cho dot được chọn
    }

    // Hiển thị hình ảnh ban đầu và dot tương ứng
    updateImageVisibility();
    updateIndicator(currentIndex);
});

