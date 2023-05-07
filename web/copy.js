window.onload = () => {
    const messageElement = document.getElementById("message");
    const previewElement = document.getElementById("preview");

    async function copyToClipboard(urlText) {
        try {
            await navigator.clipboard.writeText(urlText).then(
                () => {
                    /* success */
                    let text = 'クリップボードに認証コードをコピーしました\nこのコードをワールドで入力して下さい ';
                    if (lang != 'ja') {
                        text = 'Copied the authentication code to the clipboard\nPlease enter this code in the world';
                    }
                    messageElement.innerText = text;
                    previewElement.innerText = urlText;
                }
            );
        } catch (error) {
            alert((error && error.message) || 'クリップボードへのコピーに失敗しました')
        }
    }

    let url = new URL(window.location.href);
    const lang = (window.navigator.languages && window.navigator.languages[0]) || window.navigator.language;
    if (url.searchParams.get('c')) {
        copyToClipboard(url.searchParams.get('c'));
    } else {
        var text = 'エラー!!';
        if (lang != 'ja') {
            text = 'Error!!';
        }
        messageElement.innerText = text;
    }
}