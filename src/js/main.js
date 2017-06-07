import config from './components/constants/configuration';
import Navigation from './components/Navigation';
import TeamTabs from './components/TeamTabs';

/**
 * Activate tabs
 */
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

/**
 * Initialize team tabs
 */
new TeamTabs($(`.${config.team.selectors.teamContainer}`));

/**
 * Set up Send us form validator
 */
$(`#${config.selectors.sendUsForm}`).validate(config.sendUsFormValidation);
