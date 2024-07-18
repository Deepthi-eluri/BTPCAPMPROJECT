sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/company/companyapp/test/integration/FirstJourney',
		'com/company/companyapp/test/integration/pages/CompaniesList',
		'com/company/companyapp/test/integration/pages/CompaniesObjectPage',
		'com/company/companyapp/test/integration/pages/Companies_BranchObjectPage'
    ],
    function(JourneyRunner, opaJourney, CompaniesList, CompaniesObjectPage, Companies_BranchObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/company/companyapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCompaniesList: CompaniesList,
					onTheCompaniesObjectPage: CompaniesObjectPage,
					onTheCompanies_BranchObjectPage: Companies_BranchObjectPage
                }
            },
            opaJourney.run
        );
    }
);