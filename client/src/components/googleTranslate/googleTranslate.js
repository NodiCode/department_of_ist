import React, { useEffect } from 'react';

const GoogleTranslateWidget = () => {
  useEffect(() => {
    if (typeof window.google !== 'undefined' && window.google.translate) {
      new window.google.translate.TranslateElement({
        pageLanguage: 'kg',
        includedLanguages: 'ar,bn,es,en,fr,hi,id,ja,ko,ms,pt,ru,th,tr,vi,zh-CN,zh-TW',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        gaTrack: true,
        gaId: 'UA-123456-1',
      }, 'google_translate_element');

      // Style the Google Translate widget
      const widget = document.querySelector('#google_translate_element');
      if (widget) {
        widget.setAttribute('style', 'position:relative; z-index:9999;');
        widget.querySelectorAll('.goog-te-menu-value span:first-child').forEach((el) => {
          el.setAttribute('style', 'color:#333; font-size:14px; font-weight:bold;');
        });
        widget.querySelectorAll('.goog-te-menu2-item').forEach((el) => {
          el.setAttribute('style', 'font-size:14px;');
        });
        widget.querySelectorAll('.goog-te-menu2').forEach((el) => {
          el.setAttribute('style', 'padding:0;');
        });
      }
    } else {
      console.error('Google Translate API not loaded');
    }
  }, []);

  return (
    <div id="google_translate_element"></div>
  );
};

export default GoogleTranslateWidget;