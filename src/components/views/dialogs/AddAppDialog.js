/*
Copyright 2016 OpenMarket Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';
import sdk from '../../../index';

/**
 * Prompt the user for address of iframe widget
 *
 * On success, `onFinished(true, newAppWidget)` is called.
 */
export default React.createClass({
    displayName: 'AddAppDialog',
    propTypes: {
        onFinished: React.PropTypes.func.isRequired,
    },

    getInitialState: function() {
    },

    componentDidMount: function() {
        this.refs.input_value.select();
    },

    onValueChange: function(ev) {
        this.setState({
            value: ev.target.value,
        });
    },

    onFormSubmit: function(ev) {
        ev.preventDefault();
        this.props.onFinished(true, this.state.value);
        return false;
    },

    render: function() {
        const BaseDialog = sdk.getComponent('views.dialogs.BaseDialog');
        return (
            <BaseDialog className="mx_AddAppDialog"
                onFinished={this.props.onFinished}
                title="App URL"
            >
                <div className="mx_Dialog_content">
                    Please enter the URL of the app / widget to add.
                </div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="mx_Dialog_content">
                        <input type="text" ref="input_value" value={this.state.value}
                            autoFocus={true} onChange={this.onValueChange} size="30"
                            className="mx_SetDisplayNameDialog_input"
                        />
                    </div>
                    <div className="mx_Dialog_buttons">
                        <input className="mx_Dialog_primary" type="submit" value="Set" />
                    </div>
                </form>
            </BaseDialog>
        );
    },
});