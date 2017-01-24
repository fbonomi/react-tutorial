import { Component } from 'react';
import Navigation from '../../../core/Navigation';

class List extends Component {

    componentDidMount() {
        // Recupero la lista per il dominio
        /*Navigation.invoke('drlst', '3', {}, (response) => {
            this.setState(prevState => ({
                options: [{ fieldValue: '', fieldName: 'All' }].concat(response.domainValueList),
            }));
        });*/

        // Get List
        this.props['request' + this.type]();
        Navigation.invoke('drlst', this.pcId, {}, (response) => {
            this.props['receive' + this.type](response.dBDealTrancheList)
        });
    }

    clickRecord(item, event) {
        this.props.selectTranche(item);
    }

    /*_changeOption(event) {
        let offerType = event.target.value;
        this._getList({ offerType: offerType }, (response) => {
            this.setState(prevState => ({
                filter: offerType,
                list: response.dBDealTrancheList,
            }));
            this.props.setDeal({}, this);
        });
    }*/

}

export default List;
