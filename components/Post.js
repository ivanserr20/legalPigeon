import React from 'react'
import moment from 'moment'

import Header from './Header'

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: {}
        }
    }
    componentDidMount() {
        fetch(`https://owcrud-api.now.sh/api/expe/${this.props.id}`)
            .catch(err => console.error(err))
            .then(res => res.json())
            .then(item => this.setState({ item }))
    }
    render() {
        if(this.state.item._id) {
            return(
                <div className="App">
                    <Header />
                    <div className="Expe">
                        <div className="Item">
                            <div className="Item-Detail">
                                <div className="Item-Line">
                                    <h1 className="Expe-ID">{this.state.item.id}</h1>
                                    <p className="Expe-resume">{this.state.item.resume}</p>
                                    
                                </div>
                            </div>                                             
                        </div>
                    </div>
                </div>
            )
        } else {
            return('Cargando...')
        }
    }
}

export default Post