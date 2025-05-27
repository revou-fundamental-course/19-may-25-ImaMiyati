const inputSuhu = document.getElementById('input-suhu');
const hasilSuhu = document.getElementById('hasil-suhu');
const detailSuhu = document.getElementById('detail-suhu');
const konversiBtn = document.querySelector('button.bg-lightseagreen');
const resetBtn = document.getElementById('reset-btn');
const reverseBtn = document.getElementById('reverse-btn');

// Animasi hasil
function animasiHasil() {
    hasilSuhu.style.transition = "all 0.4s ease";
    hasilSuhu.style.boxShadow = "0 0 15px #00f7ff";
    hasilSuhu.style.backgroundColor = "rgba(0, 255, 255, 0.1)";
    setTimeout(() => {
        hasilSuhu.style.boxShadow = "none";
        hasilSuhu.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    }, 800);
}

function celciusKeFahrenheit(c) {
    return (c * 1.8) + 32;
}

function fahrenheitKeCelcius(f) {
    return (f - 32) / 1.8;
}

konversiBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const celcius = parseFloat(inputSuhu.value);
    if (isNaN(celcius)) {
        alert("Masukkan angka yang valid!");
        return;
    }

    const fahrenheit = celciusKeFahrenheit(celcius);
    hasilSuhu.value = fahrenheit.toFixed(2);
    detailSuhu.value = `${celcius}°C x 1.8 + 32 = ${fahrenheit.toFixed(2)}°F`;
    animasiHasil();
});

resetBtn.addEventListener('click', function () {
    inputSuhu.value = '';
    hasilSuhu.value = '';
    detailSuhu.value = '';
});

reverseBtn.addEventListener('click', function () {
    const fahrenheit = parseFloat(inputSuhu.value);
    if (isNaN(fahrenheit)) {
        alert("Masukkan angka yang valid!");
        return;
    }

    const celcius = fahrenheitKeCelcius(fahrenheit);
    hasilSuhu.value = celcius.toFixed(2);
    detailSuhu.value = `(${fahrenheit}°F - 32) / 1.8 = ${celcius.toFixed(2)}°C`;
    animasiHasil();
});
