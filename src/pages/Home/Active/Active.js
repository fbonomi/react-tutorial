import React from 'react';
import { Panel } from 'react-bootstrap';
import List from '../List/List';
import PanelActions from '../../../components/PanelActions/PanelActions';

class Active extends List {

    constructor(props) {
        super(props);
        this.type = 'active';
        this.pcId = 2;
    }

    render() {
        const { active, tranche } = this.props;
        return (
            <Panel header="Active">
                <PanelActions>
                    <select className="form-control" onChange={this._changeOption}>
                        {/*this.state.options.map((item, index) => {
                         return (
                         <option key={index}
                         value={item.fieldValue}
                         selected={item.fieldValue === this.state.filter ? 'selected' : ''}
                         >
                         {item.fieldName}
                         </option>
                         )
                         })*/}
                    </select>
                </PanelActions>
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
                    {active.items.map((item, index) => {
                        return (
                            <tr key={index}
                                data-trancheID={item.trancheID}
                                className={tranche.trancheID === item.trancheID ? 'selected' : ''}
                                onClick={this.clickRecord.bind(this, item)}
                            >
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

