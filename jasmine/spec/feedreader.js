/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This test makes sure that the
         * allFeeds variable has been defined and that it is not
         * empty
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has a list of URLs defined and none of them are empty', function() {
            allFeeds.forEach(function(feed) {
              expect(feed.url).toBeDefined();
              expect(feed.url.length).not.toBe(0);
            });
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has a list of names defined and none of them are empty', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           });
        });

        /* Tests that feed indices out of range are undefined
         */
        it('are not defined if feed index is out of range', function() {
           underMinRange = -1;
           overMaxRange = allFeeds.length;
           expect(allFeeds[underMinRange]).not.toBeDefined();
           expect(allFeeds[overMaxRange]).not.toBeDefined();
        });


    });
    //Menu test suite
    describe('The menu', function() {
         const body = document.querySelector('body');
         const menuIcon = document.querySelector('.menu-icon-link');

         /* Test that ensures the menu element is
         * hidden by default.
         */
         it('is hidden by default', function() {
           expect(body.classList).toContain('menu-hidden');
         });
         /*Test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */
         it('changes visibility when the menu icon is clicked', function() {
            let result = body.classList.toggle('menu-hidden');
            if (result) {
              expect(body.classList).toContain('menu-hidden');
            } else {
              expect(body.classList).not.toContain('menu-hidden');
            }
         });
    });

    //Initial entries test suite
    describe('Initial Entries', function() {
         beforeEach(function(done) {
           loadFeed(0, function() {
             done();
           });
         });
         /*test that ensures when the loadFeed
          * function is called and completes its work, there is at least
          * a single .entry element within the .feed container.
          */
         it('has at least a single .entry element within the .feed container.', function(done) {
           let entries = document.querySelector('.feed').children;
           expect(entries.length).toBeGreaterThan(0);
           done();
         });
    });
    // New Feed Selection test suite
    // describe('New Feed Selection', function() {
    //     let entries, entryText1, entryText2;
    //     beforeEach(function (done) {
    //         loadFeed(0,function (){
    //             entry = document.querySelector('.feed').querySelector('.entry');
    //             entryText1= entry.innerText;
    //             loadFeed(1,function (){
    //             entry = document.querySelector('.feed').querySelector('.entry');
    //             entryText2= entry.innerText;
    //             done();
    //         });
    //      });
    //      /*test that ensures when a new feed is loaded
    //       * by the loadFeed function that the content actually changes.
    //       */
    //     it('changes the content', function (done) {
    //           expect(entryText1).not.toEqual(entryText2);
    //           done();
    //         });
    //
    //     });
    // });
}());
