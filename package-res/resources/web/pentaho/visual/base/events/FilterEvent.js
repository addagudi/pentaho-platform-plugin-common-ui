/*!
 * Copyright 2010 - 2016 Pentaho Corporation. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define([
  "pentaho/lang/Event",
  "pentaho/util/error"
], function(Event, error) {
  "use strict";


  /**
   * @name FilterEvent
   * @memberOf pentaho.visual.base.events
   * @class
   * @extends pentaho.visual.base.events.FilterEvent
   * @abstract
   * @classDesc This is the base class for events related with [filters]{@link pentaho.data.filter }.
   *
   * @constructor
   * @description Creates an event object.
   * @param {!string} type - The identifier for this event.
   * @param {!pentaho.lang.EventSource} source - The object that will emit this event.
   * @param {!boolean} isCancelable - Determines if an event listener can cancel the execution of the event.
   * @param {!pentaho.data.filter.AbstractFilter} dataFilter - A filter that represents a subset of the data.
   */
  return Event.extend("pentaho.visual.base.events.FilterEvent", /** @lends pentaho.visual.base.events.FilterEvent# */{

    constructor: function(type, source, isCancelable, dataFilter) {
      if (!dataFilter) throw error.argRequired("dataFilter");
      this.base(type, source, isCancelable);
      this._dataFilter = dataFilter;
      this._isMutable = isCancelable;
    },

    get dataFilter() {
      return this._dataFilter;
    },

    set dataFilter(f) {
      if(this._isMutable) {
        this._dataFilter = f;
      } else {
        throw TypeError();
      }
    }
  });
});