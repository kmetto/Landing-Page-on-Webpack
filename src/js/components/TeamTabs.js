import c from './constants/configuration';

export default class TeamTabs {

    constructor(container) {
        this.container = container;

        if(this.container) {
            this.init();
            this.drawSkillsCharts();
        } else {
            throw new Error('Undefined team tabs container!');
        }
    }

    init() {
        const self = this;

        this.container.on('click', `.${c.team.selectors.teamMember}`, function() {
            const teamMemberInfo = $(`#${$(this).attr(c.team.attrs.relation)}`);

            if($(this).hasClass(c.team.selectors.active)) {
                self.hideTeamMemberInfo(teamMemberInfo);
                $(this).removeClass(c.team.selectors.active);
            } else {
                self.showTeamMemberInfo(teamMemberInfo);
                $(this).addClass(c.team.selectors.active);
            }
        });

        this.container.on('click', `.${c.team.selectors.hideInfoBtn}`, () => {
            this.hideAllMembersInfo();
        });
    }

    drawSkillsCharts() {
        const charts = $(`.${c.team.selectors.skillChart}`);

        charts.each(function() {
            const skillRange = parseInt($(this).attr(c.team.attrs.skillValue));

            $(this).circleChart(c.team.chartConfig(skillRange));
        });
    }

    showTeamMemberInfo(memberInfo) {
        this.hideAllMembersInfo();
        memberInfo.show();
    }

    hideTeamMemberInfo(memberInfo) {
        memberInfo.hide();
    }

    hideAllMembersInfo() {
        this.container.find(`.${c.team.selectors.teamMember}`).removeClass(c.team.selectors.active);
        this.container.find(`.${c.team.selectors.teamMemberInfo}`).hide();
    }
}