Confluence.Blueprint.setWizard('com.example.plugins.tutorial.confluence.simplebp.simplebp:create-by-sample-template', function(wizard) {
    wizard.on('submit.page1Id', function page1Submit(e, state) {
        state.nextPageId = "page2Id";
    });
    wizard.on('submit.page2Id', function page2Submit(e, state) {
        state.nextPageId = "page3Id";
    });
    wizard.on('submit.page3Id', function page3Submit(e, state) {
        state.nextPageId = "page4Id";
    });
});
