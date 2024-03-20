export const PdfDownload = () => {
  const downloadUrl = process.env.PUBLIC_URL + '/meatPdf.pdf';
  const width = 900;
  const height = 700;
  const left = window.screenX + (window.outerWidth - width) / 2;
  const top = window.screenY + (window.outerHeight - height) / 2;

  // 다운로드 링크 생성
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.target = '_blank';
  link.download = 'meatPdf.pdf';

  // 클릭하여 다운로드
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
