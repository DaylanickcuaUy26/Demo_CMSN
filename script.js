// ====== Mật khẩu ======
let input = "";
const correctPass = "2025"; // Thay đổi mật khẩu tại đây

function press(num) {
  if (input.length < 10) {
    input += num;
    document.getElementById("password").value = "*".repeat(input.length);
  }
}

function clearPass() {
  input = "";
  document.getElementById("password").value = "";
}

function submitPass() {
  if (input === correctPass) {
    document.getElementById("lockscreen").style.display = "none";
    document.getElementById("celebration").style.display = "block";
    startRain();
  } else {
    alert("Sai mật khẩu rồi người đẹp ơi 🥲");
    clearPass();
  }
}

function showGalaxy() {
  window.location.href = "galaxy.html";
}

// ====== Mưa chữ hiệu ứng sinh nhật ======
// Cập nhật font chữ và áp dụng IN HOA toàn bộ
const letters = "Chúc Mừng Sinh Nhật".toUpperCase().split("");
const canvas = document.getElementById("rainCanvas");
const ctx = canvas.getContext("2d");
const text = "Mừng sinh nhật bạn! Mong rằng tuổi mới sẽ mang đến cho bạn nhiều trải nghiệm và niềm vui mới. 💖";
  const element = document.getElementById("runText");

  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100); // tốc độ hiển thị từng chữ (ms)
    }
  }

  typeEffect(); // gọi khi trang load
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fontSize = 30; // Lớn hơn chút cho rõ hơn
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function startRain() {
  setInterval(draw, 100);
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Hiệu ứng nhòe
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Màu chữ đổ ánh hồng + đổ đậu
  ctx.fillStyle = "#f8f2f5ff";
  ctx.font = fontSize + "px 'Orbitron', cursive"; // Dùng font đề xuất

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.floor(canvas.width / fontSize);
  drops = Array(columns).fill(1);
});

