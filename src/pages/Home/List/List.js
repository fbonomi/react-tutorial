import { Component } from 'react';
import Navigation from '../../../core/Navigation';

class List extends Component {

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
        Navigation.invoke('drlst', this.pcId, data, callback);
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

}

export default List;
