var portfolio = angular.module('portfolio', [])

portfolio.controller('ProjectsController', function() {
    var ProjectList = this;
    ProjectList.projects = [

      {name:'Links', desc:"Utility iOS App to save web links to read later", tech: "Swift, CoreData, App Extensions, AdMob, AccountKit", picture:"" , link: "https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1229471501&mt=8", category:"ios", all: "all", filter: "iosFilter"},

      {name:'Bon Voyage', desc:"Site to showcase ui development with css3 animation and image hover effects", tech: "HTML5, CSS3, CSS Transition", picture:"" , link: "projects/bonvoyage/index.html", category:"web", all: "all", filter: "webFilter"},

      {name:'WebArt Inc.', desc:"Site project created for a Sitepoint.com video tutorial: http://goo.gl/OX0ZDR", tech: "HTML5, CSS3, Less", picture:"" , link: "projects/webArt/index.html", category:"web", all: "all", filter: "webFilter"},

      {name:'Sticky Notes ', desc:"note taker application to stay on track with todos, built with React.js and Bootstrap", tech: "React.js, HTML5, CSS3, Javascript", picture:"" , link: "projects/ReactStickyNotes/index.html", category:"web", all: "all", filter: "webFilter"},

      {name:'Todo & Reminder App', desc:"Todo application built with purecss.io, bootstrap, angular.js, and localstorage for data persistence", tech: " Angular.js 1, HTML5, CSS3, Bootstrap, Pure.css, Javascript", picture:"" , link: "projects/todoAngular/index.html", category:"web", all: "all", filter: "webFilter"},

      {name:'News-Guardian UK', desc:"Newsfeed Reader iOS app written in Swift with the official Guardian UK developer API", tech: "Swift, Realm Database", picture:"" , link: "https://github.com/SandyLudosky/NewsFeed-Guardian-API", category:"ios", all: "all", filter: "iosFilter"},

      {name:'Playlist Browser', desc:"First iOS project written in Objective-C to display songs and artists playlists", tech: "Obj-c", picture:"" , link: "https://github.com/SandyLudosky/PlaylistBrowser", category:"ios", all: "all", filter: "iosFilter"},

      {name:'Receipts Manager', desc:"iOS app written in Objective-C to track personal and business expenses.", tech: "Obj-c, Core Data", picture:"" , link: "https://github.com/SandyLudosky/ReceiptsManager-", category:"ios", all: "all", filter: "iosFilter"},

      {name:'FoodTracker', desc:"App to rate meals and track food intake.", tech: "Swift, Realm Database, Parse server", picture:"" , link: "https://github.com/SandyLudosky/FoodTracker", category:"ios", all: "all", filter: "iosFilter"},

    ]

    ProjectList.categories = [
      "All",
      "Web",
      "iOS"
    ]

    ProjectList.catSelected = ProjectList.categories[0]

 });
