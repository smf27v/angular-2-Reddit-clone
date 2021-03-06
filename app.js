System.register(['angular2/platform/browser', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1;
    var Article, ArticleComponent, RedditApp;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Article = (function () {
                function Article(title, link, votes) {
                    this.title = title;
                    this.link = link;
                    this.votes = votes || 0;
                }
                Article.prototype.voteUp = function () {
                    this.votes += 1;
                };
                Article.prototype.voteDown = function () {
                    this.votes -= 1;
                };
                return Article;
            })();
            ArticleComponent = (function () {
                function ArticleComponent() {
                }
                ArticleComponent.prototype.voteUp = function () {
                    this.article.voteUp();
                    return false;
                };
                ArticleComponent.prototype.voteDown = function () {
                    this.article.voteDown();
                    return false;
                };
                ArticleComponent = __decorate([
                    core_1.Component({
                        selector: 'reddit-article',
                        inputs: ['article'],
                        host: {
                            class: 'row'
                        },
                        template: "\n<div class=\"four wide column center aligned votes\"> <div class=\"ui statistic\">\n<div class=\"value\"> {{ article.votes }}\n</div>\n<div class=\"label\">\nPoints\n        </div>\n      </div>\n</div>\n<div class=\"twelve wide column\">\n<a class=\"ui large header\" href=\"{{ article.link }}\"> {{ article.title }}\n</a>\n<ul class=\"ui big horizontal list voters\">\n<li class=\"item\">\n<a href (click)=\"voteUp()\">\n<i class=\"arrow up icon\"></i> upvote\n</a> </li>\n<li class=\"item\">\n<a href (click)=\"voteDown()\">\n<i class=\"arrow down icon\"></i>\ndownvote\n</a> </li>\n</ul> </div>\n" }), 
                    __metadata('design:paramtypes', [])
                ], ArticleComponent);
                return ArticleComponent;
            })();
            RedditApp = (function () {
                function RedditApp() {
                    this.articles = [
                        new Article('Angular 2', 'http://angular.io', 3),
                        new Article('Fullstack', 'http://fullstack.io', 2),
                        new Article('Angular Homepage', 'http://angular.io', 1),
                    ];
                }
                RedditApp.prototype.addArticle = function (title, link) {
                    console.log("Adding article title: " + title.value + " and link: " + link.value);
                    this.articles.push(new Article(title.value, link.value, 0));
                    title.value = '';
                    link.value = '';
                };
                RedditApp = __decorate([
                    core_1.Component({
                        selector: 'reddit',
                        directives: [ArticleComponent],
                        template: "\n    <form class=\"ui large form segment\">\n      <h3 class=\"ui header\">Add a Link</h3>\n<div class=\"field\">\n<label for=\"title\">Title:</label> <input name=\"title\" #newtitle>\n      </div>\n      <div class=\"field\">\n<label for=\"link\">Link:</label>\n        <input name=\"link\" #newlink>\n      </div>\n      <button (click)=\"addArticle(newtitle,newlink)\"\n      \tclass=\"ui positive right floated button\">\n      \tsubmit link\n      </button>\n</form> \n<div class=\"ui grid posts\">\n  <reddit-article *ngFor=\"#article of articles\"\n  \t\t[article] = \"article\">\n  </reddit-article>\n</div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], RedditApp);
                return RedditApp;
            })();
            browser_1.bootstrap(RedditApp);
        }
    }
});
//# sourceMappingURL=app.js.map