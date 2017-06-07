import config from './components/constants/configuration';
import Navigation from './components/Navigation';

$(document).ready(function () {
    $(`.${config.selectors.portfolioTabs}`).click(function (e) {
        e.preventDefault();
        $(this).tab('show')
    })
});

/**
 * Initialize mobile navigation
 */
new Navigation();