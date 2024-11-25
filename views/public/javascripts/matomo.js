jQuery(document).ready(function () {

    // alert("matomoURL: " + matomoURL);
    // alert("matomoSiteId: " + matomoSiteId);

    // <!-- Matomo -->
    var _paq = window._paq = window._paq || [];
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
        var u=matomoURL;
        _paq.push(['setTrackerUrl', u+'matomo.php']);
        _paq.push(['setSiteId', matomoSiteId]);
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
    })();
    // <!-- End Matomo Code -->
});