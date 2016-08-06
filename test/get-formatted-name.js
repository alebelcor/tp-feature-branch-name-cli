'use strict';

import test from 'ava';
import getFormattedName from '../lib/get-formatted-name';

test('it should get a default formatted branch name', t => {
  const json = {EntityType: {Name: 'Other'}, Id: 1111, Name: 'My Foo Title'};
  t.deepEqual('1111-my-foo-title', getFormattedName(json));
});

test('it should get a formatted branch name for stories', t => {
  const json = {EntityType: {Name: 'UserStory'}, Id: 2222, Name: 'My Bar Title'};
  t.deepEqual('story-2222-my-bar-title', getFormattedName(json));
});

test('it should get a formatted branch name for bugs', t => {
  const json = {EntityType: {Name: 'Bug'}, Id: 3333, Name: 'My Foo Bar Title'};
  t.deepEqual('bug-3333-my-foo-bar-title', getFormattedName(json));
});
