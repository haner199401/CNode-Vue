/*jshint esversion: 6 */

import Home from './Home.vue';
import Topic from './Topic.vue';


export default {
  '/': {
    name: 'topic.list',
    component: Home
  },

  '/topic/:topicId': {
    name: 'topic.detail',
    component: Topic
  }
};
