/**
 * Created by haner on 16/6/27.
 *
 */
/*jshint esversion: 6 */

import request from 'superagent';
import _ from 'lodash';

export function getTopicList(params, cb) {
    request('/api/v1/topics').query(_.extend({mdrender: true, limit: 7}, params)).end((text, res)=> {
        cb(res.body);
    });
}

export function getTopicDetail(id, cb) {
    request('/api/v1/topic/'+id).end((text, res)=> {
        cb(res.body);
    });
}
