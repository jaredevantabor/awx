/*************************************************
 * Copyright (c) 2018 Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/

// import detailsController from './details.controller';

const templateUrl = require('~network-ui/network-groups-panel/groups.panel.partial.html');

export default [
    function() {
    return {
        templateUrl,
        restrict: 'E',
        link(scope){
            scope.groupPanelBoolean = true;
            scope.hideGroupsPanel = function(){
                scope.groupPanelBoolean = !scope.groupPanelBoolean;
            };

            scope.selctGroup = function(group){
                console.log(group);
                this.$parent.$broadcast('awxNet-selectGroup', group);
            };

            function init(){
                //Make the DIV element draggagle:
                dragElement(document.getElementById(("Networking-groupPanel")));

                function dragElement(elmnt) {
                  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
                  if (document.getElementById(elmnt.id + "Header")) {
                    /* if present, the header is where you move the DIV from:*/
                    document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
                  } else {
                    /* otherwise, move the DIV from anywhere inside the DIV:*/
                    elmnt.onmousedown = dragMouseDown;
                  }

                  function dragMouseDown(e) {
                    e = e || window.event;
                    // get the mouse cursor position at startup:
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    document.onmouseup = closeDragElement;
                    // call a function whenever the cursor moves:
                    document.onmousemove = elementDrag;
                  }

                  function elementDrag(e) {
                    e = e || window.event;
                    // calculate the new cursor position:
                    pos1 = pos3 - e.clientX;
                    pos2 = pos4 - e.clientY;
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    // set the element's new position:
                    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                  }

                  function closeDragElement() {
                    /* stop moving when mouse button is released:*/
                    document.onmouseup = null;
                    document.onmousemove = null;
                  }
                }
            }
            init();
        }
    };
}];
