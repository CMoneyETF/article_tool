document.getElementById('convertBtn').onclick = function() {
    const inputText = document.getElementById('input').value;
    const outputHtml = convertFormat(inputText);
    document.getElementById('output').innerText = outputHtml; // 使用 innerText 顯示程式碼
};

function convertFormat(text) {
    // 刪除包含數字的括弧文字
    text = text.replace(/\[\d+\]/g, '');

    let formattedText = text
        .replace(/### (.+)/g, '<h3 class="ck-heading--viewHeading ck-heading--heading3">$1</h3>')
        .replace(/## (.+)/g, '<h2 class="ck-heading--viewHeading ck-heading--heading2" style="margin-left:-1.5pt;"><span style="background-color:transparent;color:#000000;font-size:12pt;">$1</span></h2>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') // 粗體
        .replace(/^(?!<h2|<h3|<strong>)(.+)$/gm, '<p class="ck-heading--paragraph" style="margin-left:0px;">$1</p>'); // 一般段落

    return formattedText;
}