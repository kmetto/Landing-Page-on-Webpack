import config from './components/constants/configuration';

$(document).ready(function () {
    $(`.${config.selectors.portfolioTabs}`).click(function (e) {
        e.preventDefault();
        $(this).tab('show')
    })
});