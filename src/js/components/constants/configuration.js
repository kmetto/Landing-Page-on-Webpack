export default {
    selectors: {
        portfolioTabs: 'portfolio-tabs a',
        header: 'home',
        sendUsForm: 'contact-form'
    },
    navigation: {
        breakPoint: 768,
        selectors: {
            nav: 'navigation-container',
            menuScroll: 'menu-scroll',
            controls: 'mob-menu',
            openNav: 'mob-menu-open',
            closeNav: 'mob-menu-close',
            menuLink: 'link-item',
            active: 'active'
        }
    },
    team: {
        attrs: {
            relation: 'data-relation',
            skillValue: 'data-value'
        },
        selectors: {
            teamContainer: 'team-section',
            teamMember: 'team-member-container',
            teamMemberInfo: 'team-member-info-container',
            active: 'active',
            hideInfoBtn: 'hide-team-member-info',
            skillChart: 'skill-chart'
        },
        chartConfig: skillRange => {
            return {
                value: skillRange,
                speed: 3000,
                animation: 'easeInOutCubic',
                size: 140,
                color: "#ffe600",
                backgroundColor: "#ffffff",
                background: true,
                widthRatio: 0.042,
                animate: false
            }
        }
    },
    sendUsFormValidation: {
        rules: {
            user_name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                maxlength: 2000
            }
        },
        errorPlacement(error, element) {
            error.insertBefore(element);
        }
    }
}