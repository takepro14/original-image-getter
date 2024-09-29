chrome.contextMenus.create({
  title: 'オリジナル画像を保存',
  contexts: ['image'],
  id: 'saveOriginalImage'
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'saveOriginalImage') {
    const imageUrl = info.srcUrl;
    chrome.downloads.download({
      url: imageUrl,
      saveAs: true // ダウンロードする際に保存場所を指定できるようにする
    });
  }
});
