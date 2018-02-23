/*************************************************
 * Copyright (c) 2018 Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/

import awxNetGroupsPanel from './groups.panel.directive';

export default
    angular.module('networkGroupsPanelDirective', [])
        .directive('awxNetGroupsPanel', awxNetGroupsPanel);
