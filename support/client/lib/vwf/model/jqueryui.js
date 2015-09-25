"use strict";

// Copyright 2012 United States Government, as represented by the Secretary of Defense, Under
// Secretary of Defense (Personnel & Readiness).
// 
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
// in compliance with the License. You may obtain a copy of the License at
// 
//   http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software distributed under the License
// is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
// or implied. See the License for the specific language governing permissions and limitations under
// the License.

define( [ "module", "vwf/model" ], function( module, model ) {

    // vwf/model/object.js is a backstop property store.

    function isHtmlNode(childExtendsID)
    {
        if (childExtendsID == 'http-vwf-example-com-html-vwf') return true;
        else if (!childExtendsID) return false;
        else return isHtmlNode(vwf.prototype(childExtendsID));
    }

    return model.load( module, {

        // == Module Definition ====================================================================

        // -- initialize ---------------------------------------------------------------------------

        initialize: function() {
                 },

        // == Model API ============================================================================

        // -- creatingNode -------------------------------------------------------------------------

        creatingNode: function( nodeID, childID, childExtendsID, childImplementsIDs,childSource, childType, childURI, childName, callback /* ( ready ) */ ) {

        	if( isHtmlNode(childExtendsID) )
			{
				callback(false);

				// fetch data
				$.get(childSource)
				.done(function(data, textStatus, xhr){
					vwf.setProperty(childID, '__innerHTML', xhr.responseText);
				})
				.fail(function(xhr, textStatus){
					alertify.alert('Failed to fetch ' + childSource + ': ' + textStatus);
				})
				.always(function(){
					callback(true);
				});
				// set property
			}
        },

        // -- initializingNode ---------------------------------------------------------------------

        initializingNode: function( nodeID, childID ) {

          

        },

        // -- deletingNode -------------------------------------------------------------------------

        deletingNode: function( nodeID ) {
            
        },

        // -- prototyping --------------------------------------------------------------------------

        prototyping: function( nodeID ) {  // TODO: not for global anchor node 0
           	
        },

        // -- behavioring --------------------------------------------------------------------------

        behavioring: function( nodeID ) {  // TODO: not for global anchor node 0
            
        },

        // -- addingChild --------------------------------------------------------------------------

         addingChild: function( nodeID, childID, childName ) {  // TODO: not for global anchor node 0
         },

        // -- removingChild ------------------------------------------------------------------------

         removingChild: function( nodeID, childID ) {
         },

        // TODO: creatingProperties, initializingProperties

        // -- settingProperties --------------------------------------------------------------------

        settingProperties: function( nodeID, properties ) {

        },

        // -- gettingProperties --------------------------------------------------------------------

        gettingProperties: function( nodeID, properties ) {
          
        },

        // -- creatingProperty ---------------------------------------------------------------------

        creatingProperty: function( nodeID, propertyName, propertyValue ) {
           
        },

        // -- initializingProperty -----------------------------------------------------------------

        initializingProperty: function( nodeID, propertyName, propertyValue ) {
            
        },

        // TODO: deletingProperty

        // -- settingProperty ----------------------------------------------------------------------

        settingProperty: function( nodeID, propertyName, propertyValue ) {
            
        },

        // -- gettingProperty ----------------------------------------------------------------------

        gettingProperty: function( nodeID, propertyName, propertyValue ) {
            
        }

    } );

} );
