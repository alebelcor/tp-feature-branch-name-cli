'use strict';

const dashify = require('dashify');

module.exports = (json) => {
  const tpType = json.EntityType.Name;
  let prefix = json.Id;

  if (tpType === 'UserStory') {
    prefix = `story-${prefix}`;
  } else if (tpType === 'Bug') {
    prefix = `bug-${prefix}`;
  }

  return `${prefix}-${dashify(json.Name)}`;
};
