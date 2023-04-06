let count = document.getElementById('cnt').textContent;

function plusCount() {
    count++;
    document.getElementById('cnt').textContent = count;
    count--;
    document.getElementById('follow 2').textContent = '팔로잉'
}

function minusCount() {
    count++;
    count--;
    document.getElementById('cnt').textContent = count;
    document.getElementById('follow 2').textContent = '팔로우'
}
