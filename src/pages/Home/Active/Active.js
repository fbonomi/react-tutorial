import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';
import Navigation from '../../../core/Navigation';

class Active extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: [],
            filter: '',
            list: [],
        };

        this._changeOption = this._changeOption.bind(this);
    }

    _getList(data, callback) {
        Navigation.invoke('drlst', '2', data, callback);
    }

    componentDidMount() {
        // Recupero la lista per il dominio
        Navigation.invoke('drlst', '3', {}, (response) => {
            this.setState(prevState => ({
                options: [{ fieldValue: '', fieldName: 'All' }].concat(response.domainValueList),
            }));
        });

        // Invoco la lista
        this._getList({}, (response) => {
            this.setState(prevState => ({
                list: response.dBDealTrancheList,
            }));
        });
    }

    _changeOption(event) {
        let offerType = event.target.value;
        this._getList({ offerType: offerType }, (response) => {
            this.setState(prevState => ({
                filter: offerType,
                list: response.dBDealTrancheList,
            }));
        });
    }

    render() {
        return (
            <Panel header="Active">
                <div className="pull-right form-group">
                    <select onChange={this._changeOption}>
                        {this.state.options.map((item, index) => {
                            return (
                                <option key={index}
                                        value={item.fieldValue}
                                        selected={item.fieldValue == this.state.filter ? 'selected' : ''}
                                >
                                    {item.fieldName}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Tranche Name</th>
                        <th>Offer type</th>
                        <th>Status</th>
                        <th>TMS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.list.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.trancheName}</td>
                                <td>{item.offerTypeDescription}</td>
                                <td>{item.statusName}</td>
                                <td>{item.statusTMS}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </Panel>
        );
    }

}

export default Active;
