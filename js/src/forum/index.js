import {extend} from 'flarum/extend';
import app from 'flarum/app';
import IndexPage from 'flarum/components/IndexPage';
import Search from 'flarum/components/Search';

/* global m */

app.initializers.add('clarkwinkelmann-mobile-search', () => {
    extend(IndexPage.prototype, 'sidebarItems', function (items) {
        items.add('search', Search.component({
            itemClassName: 'App-primaryControl',
            state: app.search,
        }), -100);
    });
});
