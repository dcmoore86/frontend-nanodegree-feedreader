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
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('has a list of URLs defined and none of them are empty', function() {
            allFeeds.forEach(function(feed) {
              expect(feed.url).toBeDefined();
              expect(feed.url.length).not.toBe(0);
            });
        });

         it('has a list of names defined and none of them are empty', function() {
             allFeeds.forEach(function(feed) {
               expect(feed.name).toBeDefined();
               expect(feed.name.length).not.toBe(0);
             });
         });

         it('are not definted if feed index is out of range', function() {
           underMinRange = -1;
           overMaxRange = allFeeds.length;
           expect(allFeeds[underMinRange]).not.toBeDefined();
           expect(allFeeds[overMaxRange]).not.toBeDefined();
         });


    });

    describe('The menu', function() {
         const body = document.querySelector('body');
         const menuIcon = document.querySelector('.menu-icon-link');

         it('is hidden by default', function() {
           expect(body.className).toBe('menu-hidden');
         });

          it('changes visibility when the menu icon is clicked', function() {
            result = body.classList.toggle('menu-hidden');
            if (result) {
              expect(body.className).toBe('menu-hidden');
            } else {
              expect(body.className).toBe('');
            }
            body.classList.toggle('menu-hidden');
          });
    });

    describe('Initial Entries', function() {
         const entry = document.querySelector('.feed').querySelector('.entry');

         beforeEach(function(done) {
           loadFeed(0);
           done();
         });

         it('has at least a single .entry element within the .feed container.', function(done) {
           expect(entry).toBeDefined();
           done();
         });
    });

    describe('New Feed Selection', function() {
        let entries, entryText1, entryText2;
        beforeEach(function (done) {
            loadFeed(0,function (){
                done();
            });
         });

        it('changes the content', function (done) {
            entry = document.querySelector('.feed').querySelector('.entry');
            entryText1= entry.innerText;
            loadFeed(1,function (){
              entry = document.querySelector('.feed').querySelector('.entry');
              entryText2= entry.innerText;
              expect(entryText1).not.toEqual(entryText2);
              done();
            });

        });
    });
}());
